import React from "react";
import Image from "next/image";
import Link from "next/link";
import { POPULAR_PICKS } from "@/data/cafeData";
import { ArrowRight } from "lucide-react";

export function PopularPicksSection() {
  return (
    <section
      id="pilihan-favorit"
      className="relative w-full py-16 lg:py-24 bg-[#F3F4F6] text-[#373A3E] border-t border-[#D8DCDE]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Classical Ornamental Divider Lines */}
        <div className="text-center space-y-3 mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 sm:w-20 bg-[#80858A]/50" />
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal tracking-wider text-[#373A3E] uppercase">
              POPULAR PICKS
            </h2>
            <div className="h-[1px] w-12 sm:w-20 bg-[#80858A]/50" />
          </div>
          <p className="text-xs sm:text-sm font-mono tracking-widest text-[#80858A] uppercase">
            [PILIHAN UNGGULAN PALING DIMINATI PENGUNJUNG]
          </p>
        </div>

        {/* 4 Cards Grid - 100% Matching Layout in Gambar 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {POPULAR_PICKS.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col items-center text-center bg-white border border-[#D8DCDE] p-4 transition-all duration-300 hover:shadow-lg hover:border-[#80858A]"
            >
              {/* Product Image */}
              <div className="relative aspect-square w-full overflow-hidden bg-[#373A3E] mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Subtle Text Tag (Strictly non-pill) */}
                {item.highlightBadge && (
                  <div className="absolute top-2 left-2 bg-[#373A3E]/90 text-[#F3F4F6] px-2 py-0.5 text-[9px] font-mono tracking-wider uppercase border border-[#80858A]/40">
                    {item.highlightBadge}
                  </div>
                )}
              </div>

              {/* Title, Subtitle, and Price */}
              <div className="space-y-1 w-full">
                <h3 className="font-serif text-base sm:text-lg font-semibold tracking-wide text-[#373A3E] uppercase">
                  {item.name}
                </h3>
                <p className="text-xs text-[#80858A] italic">
                  {item.id === "pop-1" && "Smooth & Balanced"}
                  {item.id === "pop-2" && "Rich & Indulgent"}
                  {item.id === "pop-3" && "Sweet & Creamy"}
                  {item.id === "pop-4" && "Fresh & Healthy"}
                </p>
                <div className="pt-2">
                  <span className="font-serif text-base sm:text-lg font-bold text-[#373A3E]">
                    {item.priceFormatted}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Full Menu Action */}
        <div className="text-center mt-12">
          <Link
            href="#katalog-menu"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#373A3E] hover:text-[#80858A] uppercase border-b-2 border-[#373A3E] pb-1 hover:border-[#80858A] transition-colors"
          >
            <span>TELUSURI SELURUH KATALOG MENU LENGKAP</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
