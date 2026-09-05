import React from "react";

interface BrushEdgeProps {
  className?: string;
  fillColor?: string;
}

export function BrushEdgeVertical({
  className = "w-16 sm:w-24 lg:w-32 h-full",
  fillColor = "#F3F4F6",
}: BrushEdgeProps) {
  return (
    <div
      className={`absolute left-0 top-0 bottom-0 h-full pointer-events-none z-20 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 160 1000"
        preserveAspectRatio="none"
        className="w-full h-full"
        fill={fillColor}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main Jagged Organic Torn Paint Edge */}
        <path d="
          M 0,0 
          L 60,0 
          Q 85,30 50,60 
          Q 105,95 70,130 
          Q 135,160 85,190 
          Q 120,230 65,260 
          Q 150,300 95,340 
          Q 130,380 75,410 
          Q 160,450 105,490 
          Q 140,530 80,570 
          Q 155,610 95,650 
          Q 135,690 70,730 
          Q 150,770 90,810 
          Q 125,850 65,880 
          Q 145,920 85,960 
          Q 110,985 50,1000 
          L 0,1000 
          Z
        " />

        {/* Secondary Inner Fine Bristle Strands & Splatter Cuts */}
        <path d="
          M 60,40 Q 80,55 65,70 Q 75,90 60,110
          M 85,140 Q 115,155 90,175 Q 120,200 80,225
          M 95,280 Q 130,295 100,320 Q 140,345 90,370
          M 105,430 Q 145,450 110,475 Q 150,500 100,530
          M 95,590 Q 135,610 105,635 Q 140,660 90,685
          M 90,750 Q 130,770 100,800 Q 135,825 85,850
          M 85,900 Q 120,920 95,945 Q 125,970 75,990
        " stroke={fillColor} strokeWidth="12" strokeLinecap="round" />

        {/* Isolated Paint Flecks / Dry Brush Bristles */}
        <circle cx="85" cy="50" r="3.5" />
        <circle cx="115" cy="85" r="2.5" />
        <circle cx="140" cy="170" r="4" />
        <circle cx="125" cy="210" r="2" />
        <circle cx="155" cy="310" r="3.5" />
        <circle cx="140" cy="360" r="2" />
        <circle cx="165" cy="460" r="4" />
        <circle cx="135" cy="510" r="3" />
        <circle cx="160" cy="620" r="3.5" />
        <circle cx="145" cy="670" r="2" />
        <circle cx="155" cy="780" r="4" />
        <circle cx="130" cy="830" r="2.5" />
        <circle cx="150" cy="930" r="3.5" />
        <circle cx="120" cy="970" r="2" />

        <path d="M 125,120 Q 135,128 128,135" stroke={fillColor} strokeWidth="3" strokeLinecap="round" />
        <path d="M 145,260 Q 158,272 148,282" stroke={fillColor} strokeWidth="3.5" strokeLinecap="round" />
        <path d="M 152,410 Q 165,422 154,435" stroke={fillColor} strokeWidth="3.5" strokeLinecap="round" />
        <path d="M 148,560 Q 162,572 150,585" stroke={fillColor} strokeWidth="3.5" strokeLinecap="round" />
        <path d="M 145,720 Q 160,735 147,748" stroke={fillColor} strokeWidth="3.5" strokeLinecap="round" />
        <path d="M 140,870 Q 152,882 142,895" stroke={fillColor} strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export function BrushEdgeTop({
  className = "w-full h-8 sm:h-12 lg:h-16",
  fillColor = "#F3F4F6",
}: BrushEdgeProps) {
  return (
    <div
      className={`absolute top-0 left-0 right-0 w-full pointer-events-none z-20 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1000 80"
        preserveAspectRatio="none"
        className="w-full h-full"
        fill={fillColor}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="
          M 0,0 
          L 1000,0 
          L 1000,30 
          Q 960,55 920,35 
          Q 870,65 820,30 
          Q 770,60 720,25 
          Q 660,70 600,35 
          Q 540,65 480,25 
          Q 420,60 360,30 
          Q 300,70 240,35 
          Q 180,60 120,25 
          Q 60,65 0,30 
          Z
        " />
        <circle cx="890" cy="50" r="3" />
        <circle cx="750" cy="55" r="2.5" />
        <circle cx="580" cy="60" r="3" />
        <circle cx="410" cy="55" r="2" />
        <circle cx="210" cy="60" r="3" />
        <circle cx="90" cy="55" r="2.5" />
      </svg>
    </div>
  );
}
