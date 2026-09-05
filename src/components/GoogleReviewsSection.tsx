import React from "react";
import { Star, ExternalLink, MessageSquarePlus, CheckCircle2 } from "lucide-react";
import { GOOGLE_REVIEWS, CAFE_INFO } from "@/data/cafeData";

export function GoogleReviewsSection() {
  return (
    <section
      id="ulasan"
      className="relative w-full py-16 lg:py-24 bg-[#F3F4F6] text-[#373A3E] border-t border-[#D8DCDE]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Google Rating Summary */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 border-b border-[#D8DCDE] pb-8">
          <div className="space-y-3">
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#80858A] uppercase">
              [INTEGRASI ULASAN GOOGLE MAPS]
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#373A3E] tracking-tight">
              Testimoni & Pengalaman Pengunjung
            </h2>
            <p className="text-xs sm:text-sm text-[#80858A] max-w-xl leading-relaxed">
              Ulasan nyata dari para tamu yang telah menikmati suasana senja,
              panorama malam, dan racikan hidangan di Skyscapecafe.
            </p>
          </div>

          {/* Rating Summary Box & Write Review Button */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 bg-white border border-[#D8DCDE] p-4 lg:p-5">
            <div className="flex items-center gap-3 border-b sm:border-b-0 sm:border-r border-[#D8DCDE] pb-3 sm:pb-0 sm:pr-5">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#373A3E]">
                {CAFE_INFO.stats.googleRating}
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#373A3E]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#373A3E] text-[#373A3E]"
                    />
                  ))}
                </div>
                <span className="text-[11px] font-mono tracking-wider text-[#80858A] uppercase block mt-1">
                  {CAFE_INFO.stats.reviewCount}+ ULASAN DI GOOGLE
                </span>
              </div>
            </div>

            {/* Direct Google Review Action Button */}
            <a
              href={CAFE_INFO.googleReviewDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#373A3E] hover:bg-[#24272A] text-[#F3F4F6] text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>BERI ULASAN DI GOOGLE</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GOOGLE_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white border border-[#D8DCDE] p-6 flex flex-col justify-between transition-all duration-200 hover:border-[#80858A] hover:shadow-sm"
            >
              <div className="space-y-3">
                {/* Header: User Avatar, Name, Rating */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#373A3E] text-[#F3F4F6] font-mono font-semibold text-xs flex items-center justify-center">
                      {rev.avatarText}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#373A3E]">
                        {rev.author}
                      </h4>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[11px] text-[#80858A]">
                          {rev.relativeTime}
                        </span>
                        <span className="text-[#80858A]">•</span>
                        <span className="text-[11px] font-mono text-[#80858A]">
                          {rev.visitedTime}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#373A3E] text-[#373A3E]"
                      />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#373A3E] leading-relaxed italic pt-1">
                  &ldquo;{rev.reviewText}&rdquo;
                </p>
              </div>

              {/* Verified Indicator (Clean non-pill) */}
              <div className="pt-4 mt-4 border-t border-[#D8DCDE]/60 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#80858A] uppercase">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#373A3E]" />
                  <span>Ulasan Terverifikasi Google</span>
                </div>
                <span className="text-[10px] font-mono text-[#9DA2A7]">
                  SKYSCAPE CAFE & EATERY
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
