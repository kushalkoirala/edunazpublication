export const MOTION_TOKENS = {
  ease: {
    ui: "power3.out",
    largeReveal: "expo.out",
    heroImage: "power2.out",
    smooth: "power2.inOut",
    bounceOvershoot: "back.out(1.5)",
  },
  duration: {
    text: 1.0,
    image: 1.3,
    smallElements: 0.7,
    pageEnter: 0.5,
    quick: 0.35,
    heroTotal: 2.2,
  },
  stagger: {
    desktop: 0.1,
    mobile: 0.06,
    textLines: 0.12,
    cards: 0.1,
    tight: 0.08,
    loose: 0.12,
  },
  distance: {
    yDesktop: 40,
    yMobile: 24,
    yPageEnter: 24,
  },
  scrollTrigger: {
    start: "top 85%",
    toggleActions: "play none none none",
    once: true,
  },
  magnetic: {
    max: 8,
    ease: "power2.out",
    duration: 0.35,
  },
  parallax: {
    heroDesktop: 0.18,
    heroMobile: 0.06,
    imageDefault: 0.15,
  },
  lenis: {
    lerp: 0.1,
    syncTouch: false,
    headerOffset: -72,
  },
} as const;

export type MotionTokens = typeof MOTION_TOKENS;
