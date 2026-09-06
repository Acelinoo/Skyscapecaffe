"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SkyscapeLogo } from "./SkyscapeLogo";
import { Menu, X, Calendar } from "lucide-react";

interface NavbarProps {
  onOpenReservation: () => void;
}

export function Navbar({ onOpenReservation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Curated, spacious, non-overlapping links for Desktop Header
  const desktopNavLinks = [
    { label: "TENTANG KAMI", href: "#tentang-kami" },
    { label: "MENU", href: "#katalog-menu" },
    { label: "RUANG VIP", href: "#ruang-vip" },
    { label: "GALERI", href: "#galeri" },
    { label: "ULASAN", href: "#ulasan" },
    { label: "LOKASI", href: "#lokasi" },
  ];

  // Comprehensive deep-links for Mobile Drawer
  const mobileNavLinks = [
    { label: "BERANDA UTAMA", href: "#beranda" },
    { label: "TENTANG KAMI (OUR STORY)", href: "#tentang-kami" },
    { label: "RUANG VIP & MEETING", href: "#ruang-vip" },
    { label: "PILIHAN FAVORIT", href: "#pilihan-favorit" },
    { label: "KATALOG MENU LENGKAP", href: "#katalog-menu" },
    { label: "PANDUAN SUNSET & SENJA", href: "#golden-hour" },
    { label: "GALERI SUASANA", href: "#galeri" },
    { label: "ULASAN GOOGLE MAPS", href: "#ulasan" },
    { label: "LOKASI & JAM OPERASIONAL", href: "#lokasi" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#F3F4F6]/95 backdrop-blur-md shadow-sm border-b border-[#D8DCDE] py-2.5"
          : "bg-[#F3F4F6] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link
          href="#beranda"
          className="flex items-center gap-3 focus:outline-none group shrink-0"
          aria-label="Skyscapecafe Beranda"
        >
          <SkyscapeLogo className="h-9 sm:h-10" variant="dark" showText={true} />
        </Link>

        {/* Desktop Navigation Links (Spacious, Single-line, Editorial) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {desktopNavLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[11px] xl:text-[12px] font-medium tracking-[0.14em] text-[#373A3E] hover:text-[#1A1C1E] transition-colors relative py-1 focus:outline-none whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#373A3E] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Button & Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenReservation}
            className="hidden sm:inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 bg-[#373A3E] hover:bg-[#24272A] text-[#F3F4F6] text-[11px] xl:text-[12px] font-semibold tracking-wider uppercase transition-colors cursor-pointer border border-[#373A3E] shadow-sm whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5 text-[#F3F4F6]" />
            <span>RESERVASI MEJA</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#373A3E] hover:bg-[#D8DCDE]/50 transition-colors focus:outline-none"
            aria-label="Buka menu navigasi"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F3F4F6] border-b border-[#D8DCDE] px-4 pt-3 pb-6 space-y-3 animate-fade-in shadow-lg">
          <div className="flex flex-col divide-y divide-[#D8DCDE]/60">
            {mobileNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-xs font-medium tracking-widest text-[#373A3E] hover:text-[#80858A] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-3 bg-[#373A3E] text-[#F3F4F6] text-xs font-semibold tracking-wider uppercase text-center flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>RESERVASI MEJA (WHATSAPP)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
