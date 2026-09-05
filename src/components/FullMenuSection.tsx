"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FEATURED_10_MENU, CAFE_INFO } from "@/data/cafeData";
import { ArrowRight, ChevronDown, ThumbsUp, Calendar } from "lucide-react";

interface FullMenuSectionProps {
  onOpenReservation: () => void;
}

export function FullMenuSection({ onOpenReservation }: FullMenuSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredItems = useMemo(() => {
    if (selectedFilter === "all") return FEATURED_10_MENU;
    if (selectedFilter === "coffee") {
      return FEATURED_10_MENU.filter((item) => item.category === "coffee");
    }
    if (selectedFilter === "beverage") {
      return FEATURED_10_MENU.filter(
        (item) => item.category === "milk-based" || item.category === "refreshment" || item.category === "tea"
      );
    }
    if (selectedFilter === "food") {
      return FEATURED_10_MENU.filter(
        (item) => item.category === "light-bites" || item.category === "main-course"
      );
    }
    return FEATURED_10_MENU;
  }, [selectedFilter]);

  return (
    <section
      id="katalog-menu"
      className="relative w-full py-16 lg:py-24 bg-white text-[#373A3E] border-t border-[#D8DCDE]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 bg-[#80858A]/50" />
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#80858A] uppercase">
              [10 MENU REKOMENDASI UNGGULAN]
            </span>
            <div className="h-[1px] w-12 bg-[#80858A]/50" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#373A3E] tracking-tight">
            Menu Pilihan Skyscapecafe
          </h2>
          <p className="text-xs sm:text-sm text-[#80858A] max-w-2xl mx-auto leading-relaxed">
            Sepuluh racikan kopi dan hidangan istimewa paling favorit yang
            menemani waktu santai Anda di ketinggian Bandung. Untuk melihat
            seluruh 50+ varian menu resmi, buka katalog menu lengkap kami.
          </p>
        </div>

        {/* Filter Bar with Dropdown & Direct Link to /menu */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto mb-10 pb-4 border-b border-[#D8DCDE]">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="text-xs font-mono font-semibold text-[#373A3E] uppercase shrink-0">
              Kategori Menu:
            </span>
            <div className="relative flex-1 sm:w-72">
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="w-full appearance-none px-4 py-2.5 bg-[#F3F4F6] border border-[#D8DCDE] text-xs font-medium text-[#373A3E] focus:outline-none focus:border-[#373A3E] cursor-pointer pr-10"
              >
                <option value="all">
                  Semua Rekomendasi (10 Menu Unggulan)
                </option>
                <option value="coffee">Kopi Spesialti (3 Menu)</option>
                <option value="beverage">
                  Minuman Non-Kopi & Teh (3 Menu)
                </option>
                <option value="food">
                  Makanan Berat & Camilan (4 Menu)
                </option>
              </select>
              <ChevronDown className="w-4 h-4 text-[#80858A] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#373A3E] hover:text-[#80858A] uppercase border-b border-[#373A3E] pb-0.5 transition-colors group"
          >
            <span>Buka Katalog Lengkap (50+ Menu)</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 10 Featured Menu Cards with Real Food Photography */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-[#F3F4F6] border border-[#D8DCDE] overflow-hidden transition-all duration-300 hover:border-[#80858A] hover:shadow-md group"
            >
              {/* Menu Card Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#373A3E]">
                <Image
                  src={item.image || "/images/classic-latte.jpg"}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Gradient shade for bottom contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#24272A]/60 via-transparent to-transparent pointer-events-none" />

                {/* Badge (Non-pill) */}
                {item.highlightBadge && (
                  <div className="absolute top-3 left-3 bg-[#373A3E]/95 text-[#F3F4F6] px-2.5 py-1 text-[9px] font-mono tracking-wider uppercase border border-[#80858A]/40 flex items-center gap-1">
                    <ThumbsUp className="w-2.5 h-2.5 text-[#F3F4F6]" />
                    <span>{item.highlightBadge}</span>
                  </div>
                )}

                {/* Category tag */}
                <div className="absolute bottom-2.5 left-3">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#F3F4F6] drop-shadow-sm font-semibold">
                    {item.subOptions ||
                      (item.category === "coffee"
                        ? "Specialty Coffee"
                        : item.category === "milk-based"
                        ? "Milk Based"
                        : item.category === "refreshment"
                        ? "Mocktail & Refreshment"
                        : item.category === "tea"
                        ? "Artisan Tea"
                        : item.category === "light-bites"
                        ? "Lightbites"
                        : "Main Course")}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-grow p-4 space-y-2">
                <div className="flex items-start justify-between gap-2 border-b border-[#D8DCDE] pb-2">
                  <h3 className="font-serif text-base font-semibold text-[#373A3E] leading-snug">
                    {item.name}
                  </h3>
                  <span className="font-serif text-sm font-bold text-[#373A3E] shrink-0">
                    {item.priceFormatted}
                  </span>
                </div>

                <p className="text-xs text-[#80858A] leading-relaxed flex-grow line-clamp-3">
                  {item.description}
                </p>

                <div className="pt-2 border-t border-[#D8DCDE]/60 flex items-center justify-between text-[10px] font-mono text-[#80858A] uppercase">
                  <span>Skyscapecafe Bandung</span>
                  <span className="text-[#373A3E] font-semibold">Tersedia</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Primary CTA to Dedicated Full Menu Page & Reservation */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#373A3E] hover:bg-[#24272A] text-[#F3F4F6] text-xs font-semibold tracking-widest uppercase transition-all duration-200 shadow-md border border-[#373A3E] group"
          >
            <span>LIHAT SELURUH KATALOG LENGKAP (50+ MENU)</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-transparent hover:bg-[#373A3E] text-[#373A3E] hover:text-[#F3F4F6] text-xs font-semibold tracking-widest uppercase transition-all duration-200 border border-[#373A3E] cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>RESERVASI MEJA MAKAN</span>
          </button>
        </div>

        <p className="text-[11px] font-mono text-[#80858A] mt-4 text-center">
          * {CAFE_INFO.taxAndServiceNote} • Follow & tag kami di Instagram{" "}
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
