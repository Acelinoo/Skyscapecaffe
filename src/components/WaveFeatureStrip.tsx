import React from "react";
import { Coffee, Leaf, Armchair, Heart } from "lucide-react";

export function WaveFeatureStrip() {
  const features = [
    {
      icon: Coffee,
      title: "KOPI BERKUALITAS",
      subtitle: "QUALITY COFFEE",
      description: "Biji kopi pilihan terbaik nusantara yang diseduh dengan presisi tinggi oleh barista profesional.",
    },
    {
      icon: Leaf,
      title: "BAHAN SEGAR ALAMI",
      subtitle: "FRESH INGREDIENTS",
      description: "Diracik dari bahan-bahan segar lokal pilihan terbaik demi menghadirkan cita rasa otentik setiap hari.",
    },
    {
      icon: Armchair,
      title: "SUASANA NYAMAN",
      subtitle: "COZY AMBIENCE",
      description: "Ruang yang tenang dan elegan dengan pemandangan terbuka pegunungan serta gemerlap kota Bandung.",
    },
    {
      icon: Heart,
      title: "DILAYANI SEPENUH HATI",
      subtitle: "MADE WITH PASSION",
      description: "Keramahan layanan dan ketelitian rasa dalam setiap sajian hidangan demi momen berkesan Anda.",
    },
  ];

  return (
    <section id="keunggulan" className="relative w-full bg-[#373A3E] text-[#F3F4F6] overflow-hidden">
      {/* Top Organic Wave Transition Curve (from #F3F4F6 to #373A3E) */}
      <div className="w-full overflow-hidden leading-none -mt-1">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 sm:h-16 lg:h-20 fill-[#F3F4F6]"
        >
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,40 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-16">
        <div className="gsap-stagger-group grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-0 lg:divide-x divide-[#80858A]/30">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="gsap-card flex flex-col items-center text-center p-3 sm:p-6 lg:px-8 bg-[#24272A]/50 lg:bg-transparent border border-[#80858A]/20 lg:border-none"
              >
                {/* Minimalist Functional Icon */}
                <div className="mb-2 sm:mb-4 text-[#D8DCDE]">
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 stroke-[1.5]" />
                </div>

                {/* Typography Header */}
                <h3 className="font-serif text-xs sm:text-base lg:text-lg tracking-wider uppercase text-[#F3F4F6] mb-0.5 sm:mb-1 line-clamp-1">
                  {feature.title}
                </h3>
                <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.15em] text-[#9DA2A7] uppercase mb-1.5 sm:mb-2 block truncate">
                  {feature.subtitle}
                </span>

                {/* Description */}
                <p className="text-[10px] sm:text-xs text-[#9DA2A7] leading-relaxed max-w-xs line-clamp-2 sm:line-clamp-none">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Organic Wave Transition Curve (from #373A3E to #F3F4F6) */}
      <div className="w-full overflow-hidden leading-none -mb-1">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-10 sm:h-14 lg:h-16 fill-[#F3F4F6]"
        >
          <path d="M0,120 C200,30 400,100 600,40 C800,-20 1000,80 1200,20 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
