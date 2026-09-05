import React from "react";
import Image from "next/image";
import Link from "next/link";
import { POPULAR_PICKS } from "@/data/cafeData";
import { ArrowRight } from "lucide-react";

export function PopularPicksSection() {
  return (
    <section
      id="pilihan-favorit"
      className="relative w-full py-14 lg:py-24 bg-[#F3F4F6] text-[#373A3E] border-t border-[#D8DCDE]"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-2 sm:space-y-3 mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <div className="h-[1px] w-8 sm:w-20 bg-[#80858A]/50" />
            <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl font-normal tracking-wider text-[#373A3E] uppercase">
              POPULAR PICKS
            </h2>
            <div className="h-[1px] w-8 sm:w-20 bg-[#80858A]/50" />
          </div>
          <p className="text-[10px] sm:text-xs font-mono tracking-widest text-[#80858A] uppercase">
            [PILIHAN UNGGULAN PALING DIMINATI PENGUNJUNG]
          </p>
        </div>

        {/* 4 Cards Grid - 2 Columns on Mobile (Gambar 2 Layout) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6">
          {POPULAR_PICKS.map((item) => (
            <div
              key={item.id}
              className="gsap-reveal group flex flex-col items-center text-center bg-white border border-[#D8DCDE] p-2.5 sm:p-4 transition-all duration-300 hover:shadow-lg hover:border-[#80858A]"
            >
              {/* Product Image */}
              <div className="relative aspect-square w-full overflow-hidden bg-[#373A3E] mb-2 sm:mb-4">
                <Image
                  src={item.image || "/images/classic-latte.jpg"}
                  alt={item.name}
                  fill
                  quality={80}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Subtle Text Tag (Non-pill) */}
                {item.highlightBadge && (
                  <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 bg-[#373A3E]/90 text-[#F3F4F6] px-1.5 sm:px-2 py-0.5 text-[8px] sm:text-[9px] font-mono tracking-wider uppercase border border-[#80858A]/40">
                    {item.highlightBadge}
                  </div>
                )}
              </div>

              {/* Title, Subtitle, and Price */}
              <div className="space-y-0.5 sm:space-y-1 w-full">
                <h3 className="font-serif text-xs sm:text-base font-semibold tracking-wide text-[#373A3E] uppercase line-clamp-1">
                  {item.name}
                </h3>
                <p className="text-[10px] sm:text-xs text-[#80858A] italic line-clamp-1">
                  {item.id === "pop-coffee-latte" && "Smooth & Balanced"}
                  {item.id === "pop-caramel-macchiato" && "Rich & Indulgent"}
                  {item.id === "pop-carbonara" && "Creamy & Savory"}
                  {item.id === "pop-tahu-cabe-garam" && "Crispy & Spicy"}
                </p>
                <div className="pt-1 sm:pt-2">
                  <span className="font-serif text-xs sm:text-base font-bold text-[#373A3E]">
                    {item.priceFormatted}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Full Menu Action */}
        <div className="text-center mt-8 sm:mt-12">
          <Link
            href="#katalog-menu"
            className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-widest text-[#373A3E] hover:text-[#80858A] uppercase border-b-2 border-[#373A3E] pb-1 hover:border-[#80858A] transition-colors"
          >
            <span>TELUSURI KATALOG MENU LENGKAP</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
