"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ALL_MENU_ITEMS, CAFE_INFO } from "@/data/cafeData";
import { SkyscapeLogo } from "@/components/SkyscapeLogo";
import { Footer } from "@/components/Footer";
import { ReservationModal } from "@/components/ReservationModal";
import { ArrowLeft, Search, ChevronDown, ThumbsUp, Calendar, ExternalLink } from "lucide-react";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [reservationOpen, setReservationOpen] = useState(false);

  const categories = [
    { id: "all", label: "SEMUA MENU (50+)" },
    { id: "coffee", label: "COFFEE" },
    { id: "milk-based", label: "MILK BASED" },
    { id: "refreshment", label: "REFRESHMENT" },
    { id: "tea", label: "TEA" },
    { id: "light-bites", label: "LIGHTBITES" },
    { id: "main-course", label: "MAIN COURSE (WESTERN / ASIAN / RAMEN / RICE)" },
    { id: "special-days", label: "SPECIAL DAYS (FRI - SUN)" },
  ];

  const filteredItems = useMemo(() => {
    return ALL_MENU_ITEMS.filter((item) => {
      const matchCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchSearch =
        searchQuery === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.subOptions &&
          item.subOptions.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-[#373A3E] selection:bg-[#373A3E] selection:text-[#F3F4F6]">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 w-full bg-[#F3F4F6]/95 backdrop-blur-md border-b border-[#D8DCDE] py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#373A3E] hover:text-[#80858A] transition-colors uppercase group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>KEMBALI KE BERANDA</span>
          </Link>

          <Link href="/" className="flex items-center">
            <SkyscapeLogo className="h-8 sm:h-9" variant="dark" showText={true} />
          </Link>

          <button
            onClick={() => setReservationOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#373A3E] hover:bg-[#24272A] text-[#F3F4F6] text-[11px] font-semibold tracking-wider uppercase transition-colors cursor-pointer border border-[#373A3E]"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">RESERVASI MEJA</span>
            <span className="sm:hidden">RESERVASI</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Page Title & Context */}
        <div className="text-center space-y-3 mb-10">
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#80858A] uppercase">
            [TRIAL OPENING // OFFICIAL MENU CATALOG]
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#373A3E] tracking-tight">
            Katalog Menu Lengkap Skyscapecafe
          </h1>
          <p className="text-xs sm:text-sm text-[#80858A] max-w-2xl mx-auto leading-relaxed">
            Daftar lengkap hidangan kuliner, kopi spesialti, minuman segar, dan
            menu spesial akhir pekan yang disajikan langsung di perbukitan
            Bandung.
          </p>
        </div>

        {/* Filter Controls: Dropdown + Search Input */}
        <div className="bg-white border border-[#D8DCDE] p-4 sm:p-6 mb-10 shadow-sm space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-[#80858A] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari makanan / minuman (misal: Carbonara, Latte, Tahu, Soto)..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#F3F4F6] border border-[#D8DCDE] text-xs text-[#373A3E] placeholder-[#80858A] focus:outline-none focus:border-[#373A3E] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#80858A] hover:text-[#373A3E]"
                >
                  Hapus
                </button>
              )}
            </div>

            {/* Dropdown Category Selector */}
            <div className="md:col-span-6 relative">
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="w-full appearance-none px-4 py-2.5 bg-[#F3F4F6] border border-[#D8DCDE] text-xs font-semibold tracking-wider text-[#373A3E] focus:outline-none focus:border-[#373A3E] cursor-pointer pr-10 uppercase"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-[#80858A] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Quick Category Buttons (Non-pill) */}
          <div className="pt-2 flex flex-wrap gap-2 border-t border-[#D8DCDE]/60">
            {categories.map((c) => {
              const isSelected = activeCategory === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveCategory(c.id)}
                  className={`px-3 py-1.5 text-[10px] font-mono uppercase font-semibold transition-colors cursor-pointer border ${
                    isSelected
                      ? "bg-[#373A3E] text-[#F3F4F6] border-[#373A3E]"
                      : "bg-[#F3F4F6] text-[#80858A] border-[#D8DCDE] hover:border-[#80858A] hover:text-[#373A3E]"
                  }`}
                >
                  {c.id === "all" ? "SEMUA" : c.id}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-white border border-[#D8DCDE] p-5 transition-all duration-200 hover:border-[#80858A] hover:shadow-sm"
            >
              {/* Header: Name + Badge + Price */}
              <div className="flex items-start justify-between gap-3 border-b border-[#D8DCDE] pb-3 mb-3">
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
              <div className="pt-3 mt-3 border-t border-[#D8DCDE]/60 flex items-center justify-between text-[10px] font-mono text-[#80858A] uppercase">
                <span>
                  {item.category === "coffee" && "Kopi Spesialti"}
                  {item.category === "milk-based" && "Susu & Cokelat"}
                  {item.category === "refreshment" && "Minuman Segar"}
                  {item.category === "tea" && "Teh & Artisan"}
                  {item.category === "light-bites" && "Makanan Ringan"}
                  {item.category === "main-course" && "Hidangan Utama"}
                  {item.category === "special-days" && "Spesial Jumat - Minggu"}
                </span>
                <span className="text-[#373A3E] font-semibold">Tersedia</span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white border border-[#D8DCDE] p-8 space-y-3">
            <p className="text-sm text-[#80858A]">
              Tidak ditemukan menu dengan kata kunci &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="text-xs font-semibold text-[#373A3E] underline cursor-pointer"
            >
              Tampilkan Seluruh Menu
            </button>
          </div>
        )}

        {/* Official Pricing Notice */}
        <div className="mt-12 p-4 bg-white border border-[#D8DCDE] text-center text-xs text-[#80858A] space-y-1">
          <p className="font-mono text-[11px]">
            * {CAFE_INFO.taxAndServiceNote}
          </p>
          <p className="text-[11px]">
            Ikuti informasi promo dan suasana terkini di Instagram resmi:{" "}
            <a
              href="https://www.instagram.com/skyscape.cafebandung"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#373A3E] font-semibold hover:underline inline-flex items-center gap-1"
            >
              <span>{CAFE_INFO.instagram}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </p>
        </div>

        {/* Bottom Reservation CTA */}
        <div className="mt-8 p-6 bg-[#373A3E] text-[#F3F4F6] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-md">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-[#9DA2A7] uppercase block mb-1">
              [RESERVASI MEJA & RUANGAN VIP]
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-normal">
              Siap Berkunjung ke Skyscapecafe?
            </h3>
            <p className="text-xs text-[#D8DCDE] mt-1">
              Pesan meja outdoor sunset atau ruangan VIP meeting Anda sekarang melalui WhatsApp resmi kami.
            </p>
          </div>

          <button
            onClick={() => setReservationOpen(true)}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-[#F3F4F6] hover:bg-white text-[#373A3E] text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>RESERVASI SEKARANG</span>
          </button>
        </div>
      </main>

      {/* Footer */}
      <Footer onOpenReservation={() => setReservationOpen(true)} />

      {/* Reservation Modal */}
      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />
    </div>
  );
}
