import React from "react";

interface SkyscapeLogoProps {
  className?: string;
  variant?: "dark" | "light";
  showText?: boolean;
}

export function SkyscapeLogo({
  className = "h-10",
  variant = "dark",
  showText = true,
}: SkyscapeLogoProps) {
  const isLight = variant === "light";
  const textColor = isLight ? "#F3F4F6" : "#373A3E";
  const mountainBase = isLight ? "#F3F4F6" : "#373A3E";
  const layer1 = isLight ? "#9DA2A7" : "#D8DCDE";
  const layer2 = isLight ? "#80858A" : "#9DA2A7";
  const layer3 = isLight ? "#565A60" : "#80858A";
  const cloudColor = isLight ? "#D8DCDE" : "#B5BABE";

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <svg
        viewBox="0 0 320 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-16"
        aria-label="Skyscape Cafe Logo"
      >
        {/* Floating Cloud */}
        <path
          d="M85 32 C 85 28, 92 24, 102 24 C 107 20, 118 20, 125 24 C 132 24, 142 27, 142 32 C 142 36, 134 38, 120 38 C 102 38, 85 36, 85 32 Z"
          fill={cloudColor}
        />

        {/* Mountain Silhouettes & Topographic Contours */}
        {/* Backmost Mountain Silhouette */}
        <path
          d="M30 100 L 72 82 L 105 76 L 140 50 L 165 52 L 180 62 L 208 51 L 235 68 L 265 85 L 290 100 Z"
          fill={layer3}
        />

        {/* Mid-layer Left Peak */}
        <path
          d="M48 100 L 80 84 L 115 72 L 140 50 L 158 64 L 170 85 L 172 100 Z"
          fill={layer2}
        />

        {/* Mid-layer Right Peak */}
        <path
          d="M172 100 L 182 82 L 208 51 L 230 65 L 255 82 L 275 100 Z"
          fill={layer2}
        />

        {/* Front Ridge Left Detail */}
        <path
          d="M60 100 L 100 86 L 130 75 L 145 88 L 155 100 Z"
          fill={layer1}
        />

        {/* Front Ridge Center-Right Detail */}
        <path
          d="M135 100 L 155 86 L 185 75 L 215 88 L 245 100 Z"
          fill={layer1}
        />

        {/* Architectural Outline Ribbons (Vector Lines from Logo) */}
        <path
          d="M30 100 Q 80 86 110 76 Q 130 60 140 50 Q 150 60 162 72 Q 185 82 208 51 Q 235 68 290 100"
          stroke={mountainBase}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M70 100 Q 105 84 135 74 Q 150 86 170 100"
          stroke={mountainBase}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M140 50 Q 148 70 168 85 Q 185 92 210 100"
          stroke={mountainBase}
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          d="M130 100 Q 150 82 185 73 Q 220 84 265 100"
          stroke={mountainBase}
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Horizontal Mountain Base Line */}
        <line
          x1="20"
          y1="102"
          x2="300"
          y2="102"
          stroke={mountainBase}
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* SKYSCAPE Typography */}
        {showText && (
          <text
            x="160"
            y="136"
            textAnchor="middle"
            fill={textColor}
            fontFamily="var(--font-sans), 'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="28"
            fontWeight="600"
            letterSpacing="8"
          >
            SKYSCAPE
          </text>
        )}
      </svg>
    </div>
  );
}
