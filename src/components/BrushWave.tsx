import React from "react";

interface BrushWaveProps {
  className?: string;
  fillColor?: string; // Color of the adjacent section (e.g. #F3F4F6 or #FFFFFF)
  bgColor?: string;   // Color of this section (e.g. #373A3E)
}

/**
 * BrushWaveTop: A horizontal paint-brush stroke wave divider (seperti Gambar 2)
 * Used at the top of a dark section to transition from a light section into the dark section.
 */
export function BrushWaveTop({
  className = "w-full h-12 sm:h-16 lg:h-20",
  fillColor = "#FFFFFF",
}: BrushWaveProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="block w-full h-full"
        fill={fillColor}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main Organic Ripped Paint Brush Stroke Path */}
        <path d="
          M 0,0 
          L 1440,0 
          L 1440,35
          Q 1410,22 1380,38
          Q 1350,54 1320,32
          Q 1290,18 1260,42
          Q 1230,62 1200,38
          Q 1170,16 1140,46
          Q 1110,72 1080,48
          Q 1050,26 1020,58
          Q 990,82 960,52
          Q 930,28 900,64
          Q 870,88 840,56
          Q 810,32 780,68
          Q 750,92 720,58
          Q 690,30 660,62
          Q 630,86 600,50
          Q 570,24 540,54
          Q 510,78 480,44
          Q 450,18 420,48
          Q 390,72 360,38
          Q 330,16 300,42
          Q 270,64 240,32
          Q 210,12 180,36
          Q 150,58 120,28
          Q 90,14 60,34
          Q 30,52 0,26
          Z
        " />

        {/* Secondary Brush Bristle Strands & Dry Paint Splatter Layers */}
        <path
          d="
            M 45,42 Q 70,58 95,38
            M 160,48 Q 195,68 230,42
            M 310,52 Q 345,74 380,46
            M 460,56 Q 495,82 530,58
            M 610,64 Q 645,90 680,66
            M 760,72 Q 795,96 830,70
            M 910,66 Q 945,92 980,64
            M 1060,60 Q 1095,84 1130,56
            M 1210,50 Q 1245,74 1280,46
            M 1360,44 Q 1395,62 1420,38
          "
          stroke={fillColor}
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Paint Flecks / Dry Brush Ink Drops (Gambar 2 Detail) */}
        <circle cx="75" cy="56" r="2.5" />
        <circle cx="140" cy="52" r="2" />
        <circle cx="215" cy="62" r="3" />
        <circle cx="285" cy="50" r="2" />
        <circle cx="365" cy="66" r="3.5" />
        <circle cx="440" cy="54" r="2.5" />
        <circle cx="515" cy="74" r="3" />
        <circle cx="590" cy="62" r="2" />
        <circle cx="665" cy="80" r="3.5" />
        <circle cx="740" cy="70" r="2.5" />
        <circle cx="815" cy="84" r="3" />
        <circle cx="890" cy="72" r="2" />
        <circle cx="965" cy="78" r="3.5" />
        <circle cx="1040" cy="66" r="2.5" />
        <circle cx="1115" cy="72" r="3" />
        <circle cx="1190" cy="58" r="2" />
        <circle cx="1265" cy="64" r="3.5" />
        <circle cx="1340" cy="52" r="2" />
        <circle cx="1410" cy="50" r="2.5" />
      </svg>
    </div>
  );
}

/**
 * BrushWaveBottom: A horizontal paint-brush stroke wave divider (seperti Gambar 2)
 * Used at the bottom of a dark section to transition back into a light section.
 */
export function BrushWaveBottom({
  className = "w-full h-12 sm:h-16 lg:h-20",
  fillColor = "#F3F4F6",
}: BrushWaveProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="block w-full h-full"
        fill={fillColor}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main Organic Inverted Brush Stroke Path */}
        <path d="
          M 0,100 
          L 1440,100 
          L 1440,65
          Q 1410,78 1380,62
          Q 1350,46 1320,68
          Q 1290,82 1260,58
          Q 1230,38 1200,62
          Q 1170,84 1140,54
          Q 1110,28 1080,52
          Q 1050,74 1020,42
          Q 990,18 960,48
          Q 930,72 900,36
          Q 870,12 840,44
          Q 810,68 780,32
          Q 750,8 720,42
          Q 690,70 660,38
          Q 630,14 600,50
          Q 570,76 540,46
          Q 510,22 480,56
          Q 450,82 420,52
          Q 390,28 360,62
          Q 330,84 300,58
          Q 270,36 240,68
          Q 210,88 180,64
          Q 150,42 120,72
          Q 90,86 60,66
          Q 30,48 0,74
          Z
        " />

        {/* Secondary Brush Bristle Strands & Dry Paint Splatter Layers */}
        <path
          d="
            M 45,58 Q 70,42 95,62
            M 160,52 Q 195,32 230,58
            M 310,48 Q 345,26 380,54
            M 460,44 Q 495,18 530,42
            M 610,36 Q 645,10 680,34
            M 760,28 Q 795,4 830,30
            M 910,34 Q 945,8 980,36
            M 1060,40 Q 1095,16 1130,44
            M 1210,50 Q 1245,26 1280,54
            M 1360,56 Q 1395,38 1420,62
          "
          stroke={fillColor}
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Paint Flecks / Drops */}
        <circle cx="75" cy="44" r="2.5" />
        <circle cx="140" cy="48" r="2" />
        <circle cx="215" cy="38" r="3" />
        <circle cx="285" cy="50" r="2" />
        <circle cx="365" cy="34" r="3.5" />
        <circle cx="440" cy="46" r="2.5" />
        <circle cx="515" cy="26" r="3" />
        <circle cx="590" cy="38" r="2" />
        <circle cx="665" cy="20" r="3.5" />
        <circle cx="740" cy="30" r="2.5" />
        <circle cx="815" cy="16" r="3" />
        <circle cx="890" cy="28" r="2" />
        <circle cx="965" cy="22" r="3.5" />
        <circle cx="1040" cy="34" r="2.5" />
        <circle cx="1115" cy="28" r="3" />
        <circle cx="1190" cy="42" r="2" />
        <circle cx="1265" cy="36" r="3.5" />
        <circle cx="1340" cy="48" r="2" />
        <circle cx="1410" cy="50" r="2.5" />
      </svg>
    </div>
  );
}
