import React from "react";

export default function AboutCollage() {
  return (
    <div className="relative w-full max-w-[520px] mx-auto lg:max-w-none flex flex-col items-center lg:items-start">
      {/* Visual Collage Graphic Area */}
      <div className="relative w-full aspect-[4/4.3] max-h-[520px] sm:max-h-[560px]">
        
        {/* Decorative Background Shape: Warm Cream Circle (Upper Left) */}
        <div
          className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-[#F5ECE1] -z-10 pointer-events-none"
          style={{ borderRadius: "9999px" }}
          aria-hidden="true"
        />

        {/* Decorative Background Shape: Warm Cream Arc (Right Edge) */}
        <div
          className="absolute bottom-12 -right-4 sm:bottom-16 sm:-right-8 w-44 h-60 sm:w-56 sm:h-72 rounded-full bg-[#F5ECE1]/70 -z-10 pointer-events-none"
          style={{ borderRadius: "9999px" }}
          aria-hidden="true"
        />

        {/* Decorative Dot Matrix: 4 cols x 7 rows */}
        <div
          className="absolute top-[32%] -left-3 sm:-left-6 z-0 pointer-events-none select-none"
          aria-hidden="true"
        >
          <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
            {Array.from({ length: 28 }).map((_, i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#7B2FBE]/60 block"
                style={{ borderRadius: "9999px" }}
              />
            ))}
          </div>
        </div>

        {/* Elegant Purple Flourish Vector Curves */}
        <svg
          viewBox="0 0 520 480"
          className="absolute inset-0 w-full h-full pointer-events-none z-15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Top arching purple flourish curve */}
          <path
            d="M 60 250 C 90 160 160 40 270 30 C 350 22 410 70 470 60 C 500 55 515 45 520 35"
            stroke="#A855F7"
            strokeWidth="1.75"
            strokeLinecap="round"
            className="opacity-80"
          />
          {/* Bottom-right swooping purple flourish curve */}
          <path
            d="M 240 440 C 330 465 420 450 465 375 C 485 340 505 320 525 315"
            stroke="#7B2FBE"
            strokeWidth="2"
            strokeLinecap="round"
            className="opacity-90"
          />
        </svg>

        {/* 1. Top-Right Image Card: Stack of Books & Globe in Library (Layer 1 - Behind main card) */}
        <div
          className="absolute top-2 right-2 sm:top-4 sm:right-4 w-[43%] aspect-[1.18/1] z-10 rounded-[20px] sm:rounded-[24px] border-[5px] sm:border-[6px] border-white shadow-[0_15px_35px_rgba(28,32,56,0.12)] overflow-hidden transition-transform duration-500 ease-out hover:-translate-y-1"
          style={{ borderRadius: "22px" }}
          data-reveal="fade"
        >
          <img
            src="/images/about-image-top-right.png"
            alt="Academic research literature and library collection"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>

        {/* 2. Main Center Image Card: Scholar Reviewing Research with Magnifying Glass (Layer 2 - Middle) */}
        <div
          className="absolute top-[9%] left-[19%] sm:left-[20%] w-[58%] sm:w-[57%] aspect-[1/1.22] z-20 rounded-[26px] sm:rounded-[30px] border-[6px] sm:border-[7px] border-white shadow-[0_22px_50px_rgba(28,32,56,0.16)] overflow-hidden transition-transform duration-500 ease-out hover:-translate-y-1"
          style={{ borderRadius: "28px" }}
          data-reveal="scale"
        >
          <img
            src="/images/about-image.png"
            alt="Scholar examining research document with magnifying glass"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>

        {/* 3. Bottom-Left Image Card: Scholar Writing Manuscript with Fountain Pen (Layer 3 - Front) */}
        <div
          className="absolute bottom-2 left-1 sm:bottom-4 sm:left-2 w-[48%] sm:w-[47%] aspect-[1.12/1] z-30 rounded-[22px] sm:rounded-[26px] border-[5px] sm:border-[6px] border-white shadow-[0_20px_45px_rgba(28,32,56,0.18)] overflow-hidden transition-transform duration-500 ease-out hover:-translate-y-1"
          style={{ borderRadius: "24px" }}
          data-reveal="fade"
        >
          <img
            src="/images/about-image-bottom-left.png"
            alt="Author drafting academic manuscript with pen"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>

      </div>

      {/* 4. Bottom Counter Badge: 15+ SKILLED PROFESSIONALS */}
      <div
        className="flex items-center gap-4 sm:gap-5 mt-6 sm:mt-8 self-start pl-2 sm:pl-4"
        data-reveal="fade"
      >
        <span className="font-heading text-5xl sm:text-6xl text-[#7B2FBE] font-normal leading-none select-none tracking-tight">
          15+
        </span>
        <div className="w-[2px] h-10 sm:h-12 bg-[#7B2FBE]" />
        <div className="flex flex-col justify-center">
          <span className="font-body text-xs sm:text-[13px] font-bold tracking-[0.22em] text-[#1C2038] uppercase leading-tight">
            SKILLED
          </span>
          <span className="font-body text-xs sm:text-[13px] font-bold tracking-[0.22em] text-[#1C2038] uppercase leading-tight mt-1">
            PROFESSIONALS
          </span>
        </div>
      </div>
    </div>
  );
}
