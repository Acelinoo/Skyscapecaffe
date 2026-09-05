import React from "react";
import { Star, ExternalLink, MessageSquarePlus, CheckCircle2 } from "lucide-react";
import { GOOGLE_REVIEWS, CAFE_INFO } from "@/data/cafeData";

export function GoogleReviewsSection() {
  return (
    <section
      id="ulasan"
      className="relative w-full py-14 lg:py-24 bg-[#F3F4F6] text-[#373A3E] border-t border-[#D8DCDE]"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header & Google Rating Summary */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-12 border-b border-[#D8DCDE] pb-6 sm:pb-8">
          <div className="space-y-2 sm:space-y-3">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#80858A] uppercase">
              [INTEGRASI ULASAN GOOGLE MAPS]
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#373A3E] tracking-tight">
              Testimoni Pengunjung
            </h2>
            <p className="text-xs sm:text-sm text-[#80858A] max-w-xl leading-relaxed">
              Ulasan otentik dari para tamu yang telah menikmati suasana senja,
              panorama malam, dan racikan hidangan di Skyscapecafe.
            </p>
          </div>

          {/* Rating Summary Box & Write Review Button */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 bg-white border border-[#D8DCDE] p-3.5 sm:p-5">
            <div className="flex items-center gap-3 border-b sm:border-b-0 sm:border-r border-[#D8DCDE] pb-2.5 sm:pb-0 sm:pr-5">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#373A3E]">
                {CAFE_INFO.stats.googleRating}
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#373A3E]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-[#373A3E] text-[#373A3E]"
                    />
                  ))}
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-[#80858A] uppercase block mt-0.5">
                  {CAFE_INFO.stats.reviewCount}+ ULASAN GOOGLE
                </span>
              </div>
            </div>

            {/* Direct Google Review Action Button */}
            <a
              href={CAFE_INFO.googleReviewDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-[#373A3E] hover:bg-[#24272A] text-[#F3F4F6] text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>BERI ULASAN GOOGLE</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>
        </div>

        {/* Reviews Grid - 2 Columns on Mobile (Gambar 2 Layout) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6">
          {GOOGLE_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="gsap-reveal bg-white border border-[#D8DCDE] p-3 sm:p-5 flex flex-col justify-between transition-all duration-200 hover:border-[#80858A] hover:shadow-sm"
            >
              <div className="space-y-2 sm:space-y-3">
                {/* Header: User Avatar, Name, Rating */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 sm:w-9 sm:h-9 bg-[#373A3E] text-[#F3F4F6] font-mono font-semibold text-[10px] sm:text-xs flex items-center justify-center shrink-0">
                      {rev.avatarText}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-semibold text-[#373A3E] truncate">
                        {rev.author}
                      </h4>
                      <span className="text-[9px] sm:text-[10px] font-mono text-[#80858A] block">
                        {rev.relativeTime}
                      </span>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-0.5 shrink-0">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-2.5 sm:w-3.5 h-2.5 sm:h-3.5 fill-[#373A3E] text-[#373A3E]"
                      />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-[10px] sm:text-xs text-[#373A3E] leading-relaxed italic line-clamp-3 sm:line-clamp-4">
                  &ldquo;{rev.reviewText}&rdquo;
                </p>
              </div>

              {/* Verified Indicator */}
              <div className="pt-2 sm:pt-3 mt-2 sm:mt-3 border-t border-[#D8DCDE]/60 flex items-center justify-between">
                <div className="flex items-center gap-1 text-[8px] sm:text-[10px] font-mono text-[#80858A] uppercase truncate">
                  <CheckCircle2 className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-[#373A3E] shrink-0" />
                  <span className="truncate">Terverifikasi</span>
                </div>
                <span className="text-[8px] sm:text-[9px] font-mono text-[#9DA2A7] hidden sm:inline">
                  Google Maps
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
