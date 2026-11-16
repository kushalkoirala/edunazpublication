/**
 * Lightweight, in-memory sliding window rate limiter for API endpoints.
 * Automatically cleans up stale entries to prevent memory growth.
 */

interface RateLimitRecord {
  timestamps: number[];
}

const rateLimitStore = new Map<string, RateLimitRecord>();

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 5; // 5 requests per window
const CLEANUP_INTERVAL_MS = 5 * 60 * 1000; // Cleanup every 5 minutes

let lastCleanup = Date.now();

function cleanupStaleEntries(now: number) {
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;
  lastCleanup = now;

  const threshold = now - WINDOW_MS;
  for (const [ip, record] of rateLimitStore.entries()) {
    const validTimestamps = record.timestamps.filter((t) => t > threshold);
    if (validTimestamps.length === 0) {
      rateLimitStore.delete(ip);
    } else {
      record.timestamps = validTimestamps;
    }
  }
}

export interface RateLimitResult {
  success: boolean;
  remaining: number;
  resetMs: number;
}

export function checkRateLimit(identifier: string): RateLimitResult {
  const now = Date.now();
  cleanupStaleEntries(now);

  const windowStart = now - WINDOW_MS;
  const record = rateLimitStore.get(identifier) || { timestamps: [] };

  // Filter timestamps within current sliding window
  const activeTimestamps = record.timestamps.filter((t) => t > windowStart);

  if (activeTimestamps.length >= MAX_REQUESTS) {
    const oldest = activeTimestamps[0];
    const resetMs = oldest + WINDOW_MS - now;
    return {
      success: false,
      remaining: 0,
      resetMs: Math.max(0, resetMs),
    };
  }

  // Record this request
  activeTimestamps.push(now);
  rateLimitStore.set(identifier, { timestamps: activeTimestamps });

  return {
    success: true,
    remaining: MAX_REQUESTS - activeTimestamps.length,
    resetMs: WINDOW_MS,
  };
}

