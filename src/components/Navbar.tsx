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

  const navLinks = [
    { label: "BERANDA", href: "#beranda" },
    { label: "TENTANG KAMI", href: "#tentang-kami" },
    { label: "KEUNGGULAN", href: "#keunggulan" },
    { label: "PILIHAN FAVORIT", href: "#pilihan-favorit" },
    { label: "KATALOG MENU", href: "#katalog-menu" },
    { label: "ULASAN GOOGLE", href: "#ulasan" },
    { label: "LOKASI & JAM", href: "#lokasi" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#F3F4F6]/95 backdrop-blur-md shadow-sm border-b border-[#D8DCDE] py-2.5"
          : "bg-[#F3F4F6] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#beranda"
          className="flex items-center gap-3 focus:outline-none group"
          aria-label="Skyscapecafe Beranda"
        >
          <SkyscapeLogo className="h-9 sm:h-11" variant="dark" showText={true} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[12px] font-medium tracking-[0.14em] text-[#373A3E] hover:text-[#80858A] transition-colors relative py-1 focus:outline-none"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Button & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenReservation}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#373A3E] hover:bg-[#24272A] text-[#F3F4F6] text-[12px] font-semibold tracking-wider uppercase transition-colors cursor-pointer border border-[#373A3E]"
          >
            <Calendar className="w-3.5 h-3.5 text-[#F3F4F6]" />
            RESERVASI MEJA
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
            {navLinks.map((link) => (
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
              RESERVASI MEJA (WHATSAPP)
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
