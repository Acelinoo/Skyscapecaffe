"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ALL_MENU_ITEMS, CAFE_INFO } from "@/data/cafeData";
import { ArrowRight, ChevronDown, ThumbsUp, Calendar } from "lucide-react";

interface FullMenuSectionProps {
  onOpenReservation: () => void;
}

export function FullMenuSection({ onOpenReservation }: FullMenuSectionProps) {
  // Hanya menampilkan menu rekomendasi / signature di landing page utama
  const recommendedItems = useMemo(() => {
    return ALL_MENU_ITEMS.filter((item) => Boolean(item.highlightBadge));
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredRecommended = useMemo(() => {
    if (selectedCategory === "all") return recommendedItems;
    return recommendedItems.filter((item) => item.category === selectedCategory);
  }, [recommendedItems, selectedCategory]);

  return (
    <section
      id="katalog-menu"
      className="relative w-full py-16 lg:py-24 bg-white text-[#373A3E] border-t border-[#D8DCDE]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-8">
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 bg-[#80858A]/50" />
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#80858A] uppercase">
              [PILIHAN REKOMENDASI UNGGULAN]
            </span>
            <div className="h-[1px] w-12 bg-[#80858A]/50" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#373A3E] tracking-tight">
            Menu Rekomendasi Skyscapecafe
          </h2>
          <p className="text-xs sm:text-sm text-[#80858A] max-w-2xl mx-auto leading-relaxed">
            Pilihan hidangan dan racikan kopi favorit yang paling disukai
            pengunjung. Telusuri katalog lengkap untuk melihat seluruh 50+
            sajian resmi kami.
          </p>
        </div>

        {/* Category Dropdown Filter (Sesuai instruksi pengguna) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto mb-10 pb-4 border-b border-[#D8DCDE]">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="text-xs font-mono font-semibold text-[#373A3E] uppercase shrink-0">
              Filter Kategori:
            </span>
            <div className="relative flex-1 sm:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full appearance-none px-4 py-2.5 bg-[#F3F4F6] border border-[#D8DCDE] text-xs font-medium text-[#373A3E] focus:outline-none focus:border-[#373A3E] cursor-pointer pr-10"
              >
                <option value="all">Semua Rekomendasi ({recommendedItems.length} Menu)</option>
                <option value="coffee">Kopi Spesialti</option>
                <option value="milk-based">Susu & Cokelat</option>
                <option value="refreshment">Minuman Segar & Mocktail</option>
                <option value="tea">Teh Artisan & Telang</option>
                <option value="light-bites">Camilan (Lightbites)</option>
                <option value="main-course">Hidangan Utama (Western / Asian)</option>
                <option value="special-days">Spesial Akhir Pekan (Jumat - Minggu)</option>
              </select>
              <ChevronDown className="w-4 h-4 text-[#80858A] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#373A3E] hover:text-[#80858A] uppercase border-b border-[#373A3E] pb-0.5 transition-colors group"
          >
            <span>Buka Katalog Menu Lengkap (50+ Menu)</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Recommended Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredRecommended.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-[#F3F4F6] border border-[#D8DCDE] p-4.5 transition-all duration-200 hover:border-[#80858A] hover:shadow-sm group"
            >
              {/* Header: Name + Badge + Price */}
              <div className="flex items-start justify-between gap-3 border-b border-[#D8DCDE] pb-2.5 mb-2.5">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-serif text-base font-semibold text-[#373A3E] leading-snug">
                      {item.name}
                    </h3>
                    {item.highlightBadge && (
                      <span className="inline-flex items-center gap-1 bg-[#373A3E] text-[#F3F4F6] text-[9px] font-mono tracking-wider uppercase px-1.5 py-0.5 border border-[#80858A]/30">
                        <ThumbsUp className="w-2.5 h-2.5 text-[#F3F4F6]" />
                        {item.highlightBadge}
                      </span>
                    )}
                  </div>

                  {item.subOptions && (
                    <span className="text-[11px] font-mono text-[#80858A] italic block">
                      ({item.subOptions})
                    </span>
                  )}
                </div>

                <span className="font-serif text-base font-bold text-[#373A3E] shrink-0">
                  {item.priceFormatted}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-[#80858A] leading-relaxed flex-grow">
                {item.description}
              </p>

              {/* Footer Meta */}
              <div className="pt-2.5 mt-2.5 border-t border-[#D8DCDE]/60 flex items-center justify-between text-[10px] font-mono text-[#80858A] uppercase">
                <span>
                  {item.category === "coffee" && "Kopi Spesialti"}
                  {item.category === "milk-based" && "Susu & Cokelat"}
                  {item.category === "refreshment" && "Minuman Segar"}
                  {item.category === "tea" && "Teh & Artisan"}
                  {item.category === "light-bites" && "Camilan"}
                  {item.category === "main-course" && "Hidangan Utama"}
                  {item.category === "special-days" && "Spesial Jumat - Minggu"}
                </span>
                <span className="text-[#373A3E] font-semibold">Tersedia</span>
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
