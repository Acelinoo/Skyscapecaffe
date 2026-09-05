"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WaveFeatureStrip } from "@/components/WaveFeatureStrip";
import { OurStorySection } from "@/components/OurStorySection";
import { PopularPicksSection } from "@/components/PopularPicksSection";
import { FullMenuSection } from "@/components/FullMenuSection";
import { GoldenHourGuide } from "@/components/GoldenHourGuide";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { LocationSection } from "@/components/LocationSection";
import { Footer } from "@/components/Footer";
import { ReservationModal } from "@/components/ReservationModal";
import { Calendar } from "lucide-react";

export default function Home() {
  const [reservationOpen, setReservationOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#F3F4F6] text-[#373A3E] relative selection:bg-[#373A3E] selection:text-[#F3F4F6]">
      {/* Top Sticky Navigation */}
      <Navbar onOpenReservation={() => setReservationOpen(true)} />

      {/* Hero Section (Matching Gambar 1) */}
      <HeroSection onOpenReservation={() => setReservationOpen(true)} />

      {/* Wavy Feature Strip Section (Matching Gambar 1) */}
      <WaveFeatureStrip />

      {/* Our Story Section (Matching Gambar 1) */}
      <OurStorySection />

      {/* Popular Picks (Matching Gambar 1) */}
      <PopularPicksSection />

      {/* Full Menu Catalog with Category Tabs */}
      <FullMenuSection onOpenReservation={() => setReservationOpen(true)} />

      {/* Golden Hour Sunset & City Lights Guide (Recommended Feature) */}
      <GoldenHourGuide onOpenReservation={() => setReservationOpen(true)} />

      {/* Google Reviews Integration & Direct Write Review Link */}
      <GoogleReviewsSection />

      {/* Location, Hours, and Embedded Google Maps */}
      <LocationSection />

      {/* Footer */}
      <Footer onOpenReservation={() => setReservationOpen(true)} />

      {/* Interactive Reservation Modal -> WhatsApp Dispatcher */}
      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />

      {/* Mobile Floating Sticky Reservation Bar (Non-intrusive, strictly non-pill) */}
      <aside aria-label="Aksi Cepat Reservasi" className="sm:hidden fixed bottom-0 left-0 right-0 z-30 p-3 bg-[#F3F4F6]/95 backdrop-blur-md border-t border-[#D8DCDE]">
        <button
          onClick={() => setReservationOpen(true)}
          className="w-full flex items-center justify-center gap-2 py-3 bg-[#373A3E] text-[#F3F4F6] text-xs font-semibold tracking-wider uppercase shadow-md cursor-pointer border border-[#373A3E]"
        >
          <Calendar className="w-4 h-4" />
          <span>RESERVASI MEJA (WHATSAPP)</span>
        </button>
      </aside>
    </main>
  );
}
