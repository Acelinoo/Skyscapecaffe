"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FEATURED_8_MENU, CAFE_INFO } from "@/data/cafeData";
import { ArrowRight, ChevronDown, ThumbsUp, Calendar } from "lucide-react";

interface FullMenuSectionProps {
  onOpenReservation: () => void;
}

export function FullMenuSection({ onOpenReservation }: FullMenuSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredItems = useMemo(() => {
    if (selectedFilter === "all") return FEATURED_8_MENU;
    if (selectedFilter === "coffee") {
      return FEATURED_8_MENU.filter((item) => item.category === "coffee");
    }
    if (selectedFilter === "beverage") {
      return FEATURED_8_MENU.filter(
        (item) =>
          item.category === "milk-based" ||
          item.category === "refreshment" ||
          item.category === "tea"
      );
    }
    if (selectedFilter === "food") {
      return FEATURED_8_MENU.filter(
        (item) => item.category === "light-bites" || item.category === "main-course"
      );
    }
    return FEATURED_8_MENU;
  }, [selectedFilter]);

  return (
    <section
      id="katalog-menu"
      className="relative w-full py-14 lg:py-24 bg-white text-[#373A3E] border-t border-[#D8DCDE]"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-2 sm:space-y-3 mb-8 sm:mb-10">
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-8 sm:w-12 bg-[#80858A]/50" />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#80858A] uppercase">
              [8 MENU PILIHAN UNGGULAN]
            </span>
            <div className="h-[1px] w-8 sm:w-12 bg-[#80858A]/50" />
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-[#373A3E] tracking-tight">
            Menu Favorit Skyscapecafe
          </h2>
          <p className="text-xs sm:text-sm text-[#80858A] max-w-2xl mx-auto leading-relaxed px-2">
            Delapan racikan kopi dan sajian istimewa paling digemari pengunjung di
            ketinggian Bandung. Untuk melihat seluruh 50+ varian menu resmi, buka
            katalog lengkap kami.
          </p>
        </div>

        {/* Filter Bar with Dropdown & Direct Link to /menu */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 max-w-5xl mx-auto mb-6 sm:mb-10 pb-3 sm:pb-4 border-b border-[#D8DCDE]">
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <span className="text-[11px] sm:text-xs font-mono font-semibold text-[#373A3E] uppercase shrink-0">
              Kategori:
            </span>
            <div className="relative flex-1 sm:w-72">
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="w-full appearance-none px-3 sm:px-4 py-2 sm:py-2.5 bg-[#F3F4F6] border border-[#D8DCDE] text-xs font-medium text-[#373A3E] focus:outline-none focus:border-[#373A3E] cursor-pointer pr-8 sm:pr-10"
              >
                <option value="all">
                  Semua Menu Unggulan (8 Menu)
                </option>
                <option value="coffee">Kopi Spesialti (3 Menu)</option>
                <option value="beverage">
                  Minuman Non-Kopi & Teh (3 Menu)
                </option>
                <option value="food">
                  Makanan & Camilan (2 Menu)
                </option>
              </select>
              <ChevronDown className="w-4 h-4 text-[#80858A] absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-wider text-[#373A3E] hover:text-[#80858A] uppercase border-b border-[#373A3E] pb-0.5 transition-colors group"
          >
            <span>Katalog Lengkap (50+ Menu)</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 8 Featured Menu Cards - 2 Cards per row on Mobile (Gambar 2 Layout) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="gsap-reveal flex flex-col bg-[#F3F4F6] border border-[#D8DCDE] overflow-hidden transition-all duration-300 hover:border-[#80858A] hover:shadow-md group"
            >
              {/* Menu Card Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#373A3E]">
                <Image
                  src={item.image || "/images/classic-latte.jpg"}
                  alt={item.name}
                  fill
                  quality={80}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Gradient shade for bottom contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#24272A]/60 via-transparent to-transparent pointer-events-none" />

                {/* Badge Top Left (Compact on Mobile) */}
                {item.highlightBadge && (
                  <div className="absolute top-1.5 left-1.5 sm:top-2.5 sm:left-2.5 bg-[#373A3E]/95 text-[#F3F4F6] px-1.5 sm:px-2 py-0.5 text-[8px] sm:text-[9px] font-mono tracking-wider uppercase border border-[#80858A]/40 flex items-center gap-1">
                    <ThumbsUp className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-[#F3F4F6]" />
                    <span>{item.highlightBadge}</span>
                  </div>
                )}

                {/* Category tag bottom */}
                <div className="absolute bottom-1.5 left-2 sm:bottom-2 sm:left-2.5">
                  <span className="text-[8px] sm:text-[9px] font-mono tracking-wider uppercase text-[#F3F4F6] drop-shadow-sm font-semibold truncate block max-w-[140px]">
                    {item.subOptions || "Skyscapecafe"}
                  </span>
                </div>
              </div>

              {/* Card Content - Compact & Clean */}
              <div className="flex flex-col flex-grow p-2.5 sm:p-4 justify-between space-y-1 sm:space-y-2">
                <div>
                  <div className="flex items-start justify-between gap-1 border-b border-[#D8DCDE] pb-1.5 sm:pb-2 mb-1 sm:mb-2">
                    <h3 className="font-serif text-xs sm:text-base font-semibold text-[#373A3E] leading-snug line-clamp-1">
                      {item.name}
                    </h3>
                    <span className="font-serif text-xs sm:text-sm font-bold text-[#373A3E] shrink-0">
                      {item.priceFormatted}
                    </span>
                  </div>

                  <p className="text-[10px] sm:text-xs text-[#80858A] leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-1.5 sm:pt-2 border-t border-[#D8DCDE]/60 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-[#80858A] uppercase">
                  <span className="truncate">Tersedia</span>
                  <span className="text-[#373A3E] font-semibold">Ready</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Primary CTA to Dedicated Full Menu Page & Reservation */}
        <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#373A3E] hover:bg-[#24272A] text-[#F3F4F6] text-xs font-semibold tracking-widest uppercase transition-all duration-200 shadow-md border border-[#373A3E] group"
          >
            <span>LIHAT SELURUH KATALOG (50+ MENU)</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent hover:bg-[#373A3E] text-[#373A3E] hover:text-[#F3F4F6] text-xs font-semibold tracking-widest uppercase transition-all duration-200 border border-[#373A3E] cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>RESERVASI MEJA</span>
          </button>
        </div>

        <p className="text-[10px] sm:text-[11px] font-mono text-[#80858A] mt-3 sm:mt-4 text-center">
          * {CAFE_INFO.taxAndServiceNote} • Instagram{" "}
          <a
            href="https://www.instagram.com/skyscape.cafebandung"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#373A3E] font-semibold hover:underline"
          >
            {CAFE_INFO.instagram}
          </a>
        </p>
      </div>
    </section>
  );
}
