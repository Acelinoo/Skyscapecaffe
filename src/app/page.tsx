"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WaveFeatureStrip } from "@/components/WaveFeatureStrip";
import { OurStorySection } from "@/components/OurStorySection";
import { VipMeetingSection } from "@/components/VipMeetingSection";
import { PopularPicksSection } from "@/components/PopularPicksSection";
import { FullMenuSection } from "@/components/FullMenuSection";
import { GoldenHourGuide } from "@/components/GoldenHourGuide";
import { AtmosphereGallery } from "@/components/AtmosphereGallery";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { LocationSection } from "@/components/LocationSection";
import { Footer } from "@/components/Footer";
import { ReservationModal } from "@/components/ReservationModal";
import { Calendar } from "lucide-react";

export default function Home() {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [defaultArea, setDefaultArea] = useState("Outdoor Terrace - Sunset & City Lights View");

  const handleOpenReservation = (area?: string) => {
    if (area) setDefaultArea(area);
    setReservationOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#F3F4F6] text-[#373A3E] relative selection:bg-[#373A3E] selection:text-[#F3F4F6]">
      {/* Top Sticky Navigation */}
      <Navbar onOpenReservation={() => handleOpenReservation()} />

      {/* Hero Section (Matching Gambar 1 with Authentic Exterior A-Frame Photo) */}
      <HeroSection onOpenReservation={() => handleOpenReservation()} />

      {/* Wavy Feature Strip Section (Matching Gambar 1) */}
      <WaveFeatureStrip />

      {/* Our Story Section (Matching Gambar 1 with Authentic Bar Counter Photo) */}
      <OurStorySection />

      {/* Dedicated VIP Room & Meeting Gathering Section (with Projector & Glasshouse photo) */}
      <VipMeetingSection
        onOpenReservation={() =>
          handleOpenReservation("Ruang VIP Meeting & Gathering (Termasuk Proyektor)")
        }
      />

      {/* Popular Picks (Matching Gambar 1) */}
      <PopularPicksSection />

      {/* Full Menu Catalog with Category Tabs */}
      <FullMenuSection onOpenReservation={() => handleOpenReservation()} />

      {/* Golden Hour Sunset & City Lights Guide (with Authentic Terrace Photo) */}
      <GoldenHourGuide onOpenReservation={() => handleOpenReservation()} />

      {/* Authentic Atmosphere Photography Gallery */}
      <AtmosphereGallery />

      {/* Google Reviews Integration & Direct Write Review Link */}
      <GoogleReviewsSection />

      {/* Location, Hours, and Embedded Google Maps */}
      <LocationSection />

      {/* Footer */}
      <Footer onOpenReservation={() => handleOpenReservation()} />

      {/* Interactive Reservation Modal -> WhatsApp Dispatcher */}
      <ReservationModal
        key={defaultArea}
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
        defaultArea={defaultArea}
      />

      {/* Mobile Floating Sticky Reservation Bar (Non-intrusive, strictly non-pill) */}
      <aside
        aria-label="Aksi Cepat Reservasi"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-30 p-3 bg-[#F3F4F6]/95 backdrop-blur-md border-t border-[#D8DCDE]"
      >
        <button
          onClick={() => handleOpenReservation()}
          className="w-full flex items-center justify-center gap-2 py-3 bg-[#373A3E] text-[#F3F4F6] text-xs font-semibold tracking-wider uppercase shadow-md cursor-pointer border border-[#373A3E]"
        >
          <Calendar className="w-4 h-4" />
          <span>RESERVASI MEJA (WHATSAPP)</span>
        </button>
      </aside>
    </main>
  );
}
