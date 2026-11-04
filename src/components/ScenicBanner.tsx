import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/sound';
import { 
  ArrowRight, 
  ExternalLink, 
  Moon, 
  Sun,
  Sparkles,
  Mountain,
  Eye
} from 'lucide-react';

interface ScenicBannerProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onNavigate?: (section: string) => void;
}

export const ScenicBanner: React.FC<ScenicBannerProps> = ({ darkMode, setDarkMode, onNavigate }) => {
  const [beaconLit, setBeaconLit] = useState<boolean>(true);

  // Typewriter effect
  const titles = [
    'Full-Stack Developer',
    'AI/ML Engineer',
    'Data Science Researcher',
    'Creative Technologist',
    'Computer Science Student'
  ];
  const [titleIdx, setTitleIdx] = useState(0);
  const [subText, setSubText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIdx];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && subText === current) {
        setTimeout(() => setIsDeleting(true), 1600);
      } else if (isDeleting && subText === '') {
        setIsDeleting(false);
        setTitleIdx((prev) => (prev + 1) % titles.length);
      } else {
        setSubText(current.substring(0, isDeleting ? subText.length - 1 : subText.length + 1));
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [subText, isDeleting, titleIdx]);

  const toggleTheme = () => {
    sound.pop();
    setDarkMode(!darkMode);
  };

  const toggleBeacon = () => {
    sound.click();
    setBeaconLit(!beaconLit);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-20 pb-4 animate-fadeIn select-none">
      {/* Framed Dashed Card */}
      <div className="border border-dashed border-slate-300 dark:border-slate-700/90 rounded-3xl p-3 sm:p-5 bg-white/70 dark:bg-slate-900/50 backdrop-blur-md shadow-xs transition-colors duration-500">
        
        {/* Dynamic Alpine Mountain Scenic Canvas - Transforms between Day Dawn & Cosmic Night */}
        <div className="relative w-full h-52 sm:h-64 md:h-72 rounded-2xl overflow-hidden shadow-md bg-slate-950 transition-colors duration-700">
          
          {/* Day / Night Theme Switcher Button inside Banner Top-Right */}
          <button
            onClick={toggleTheme}
            className="absolute top-3 right-3 z-30 px-3.5 py-1.5 rounded-full bg-slate-900/60 hover:bg-slate-900/80 dark:bg-slate-800/80 dark:hover:bg-slate-700/90 backdrop-blur-md border border-white/20 text-white text-xs font-mono flex items-center gap-2 shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
            title="Toggle Alpine Dawn / Cosmic Night"
          >
            {darkMode ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-300 animate-spin-slow" />
                <span>Cosmic Night</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-indigo-200" />
                <span>Alpine Dawn</span>
              </>
            )}
          </button>

          {/* Interactive Alpine Beacon Toggle Top-Left */}
          <button
            onClick={toggleBeacon}
            className="absolute top-3 left-3 z-30 px-3 py-1.5 rounded-full bg-slate-900/50 hover:bg-slate-900/70 backdrop-blur-md border border-white/15 text-white/90 text-[11px] font-mono flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            title="Toggle Alpine Mountain Beacon Light"
          >
            <span className={`w-2 h-2 rounded-full transition-colors ${beaconLit ? 'bg-amber-400 shadow-[0_0_10px_#fbbf24]' : 'bg-slate-500'}`} />
            <span className="hidden sm:inline">{beaconLit ? 'Beacon Lit' : 'Beacon Dim'}</span>
          </button>

          {/* ===================== SVG ALPINE MOUNTAIN RANGE ===================== */}
          <svg 
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 460" 
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              {/* Light Mode Sky: Alpine Sunrise / Golden Dawn Gradient */}
              <linearGradient id="sky_dawn" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.4" />
                <stop offset="25%" stopColor="#a78bfa" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#f472b6" stopOpacity="0.65" />
                <stop offset="75%" stopColor="#fb923c" stopOpacity="0.75" />
                <stop offset="92%" stopColor="#fde047" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#fef08a" stopOpacity="0.9" />
              </linearGradient>

              {/* Dark Mode Sky: Deep Cosmic Starfield & Aurora Gradient */}
              <linearGradient id="sky_night" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#020617" />
                <stop offset="35%" stopColor="#0b0f19" />
                <stop offset="65%" stopColor="#0f172a" />
                <stop offset="88%" stopColor="#1e1b4b" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>

              {/* Distant Mountain Peak 1 Gradients */}
              <linearGradient id="mount_far_light" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.95" />
                <stop offset="60%" stopColor="#94a3b8" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.95" />
              </linearGradient>
              <linearGradient id="mount_far_dark" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="60%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#090d16" />
              </linearGradient>

              {/* Mid-Range Mountains Gradients */}
              <linearGradient id="mount_mid_light" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#64748b" />
                <stop offset="65%" stopColor="#475569" />
                <stop offset="100%" stopColor="#cbd5e1" />
              </linearGradient>
              <linearGradient id="mount_mid_dark" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#111827" />
                <stop offset="70%" stopColor="#0a0f1d" />
                <stop offset="100%" stopColor="#030712" />
              </linearGradient>

              {/* Near Foothills & Pine Ridges Gradients */}
              <linearGradient id="mount_near_light" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>
              <linearGradient id="mount_near_dark" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#090d16" />
                <stop offset="100%" stopColor="#020617" />
              </linearGradient>

              {/* Valley Mist Gradients */}
              <linearGradient id="mist_gradient_light" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fef08a" stopOpacity="0" />
                <stop offset="35%" stopColor="#ffffff" stopOpacity="0.5" />
                <stop offset="65%" stopColor="#fed7aa" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="mist_gradient_dark" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
                <stop offset="40%" stopColor="#818cf8" stopOpacity="0.25" />
                <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
              </linearGradient>

              {/* Sun & Moon Glow Blur */}
              <filter id="celestial_glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="22" />
              </filter>
              <filter id="soft_fog" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" />
              </filter>
            </defs>

            {/* BASE SKY */}
            <rect width="1200" height="460" fill={darkMode ? "url(#sky_night)" : "url(#sky_dawn)"} />

            {/* CELESTIAL ELEMENTS */}
            {darkMode ? (
              <g>
                {/* Aurora Borealis Atmospheric Wave */}
                <path
                  d="M0 70 Q 280 20 550 65 T 1200 45 L 1200 140 Q 800 180 500 130 T 0 150 Z"
                  fill="#38bdf8"
                  opacity="0.12"
                  filter="url(#soft_fog)"
                />
                <path
                  d="M100 90 Q 420 30 720 80 T 1200 60 L 1200 160 Q 750 200 400 150 T 100 170 Z"
                  fill="#818cf8"
                  opacity="0.15"
                  filter="url(#soft_fog)"
                />

                {/* Glowing Crescent/Full Moon with Aura */}
                <circle cx="820" cy="100" r="50" fill="#fef08a" opacity="0.22" filter="url(#celestial_glow)" />
                <circle cx="820" cy="100" r="30" fill="#fef9c3" opacity="0.95" />
                {/* Subtle Lunar Craters */}
                <circle cx="812" cy="94" r="5.5" fill="#fef08a" opacity="0.4" />
                <circle cx="828" cy="106" r="4" fill="#fef08a" opacity="0.4" />
                <circle cx="832" cy="92" r="3" fill="#fef08a" opacity="0.35" />

                {/* Cosmic Stars and Constellations */}
                {[
                  [40, 35, 2], [90, 75, 1.5], [150, 40, 2.5], [210, 85, 1.6], [280, 50, 2.2],
                  [340, 25, 1.8], [420, 70, 2.4], [490, 45, 1.5], [560, 30, 2.2], [640, 75, 1.8],
                  [710, 35, 2.5], [920, 60, 2.2], [970, 30, 1.6], [1040, 75, 2.4], [1110, 45, 1.8],
                  [1160, 80, 2.0], [70, 120, 1.5], [250, 130, 1.8], [610, 120, 1.5], [1080, 125, 2.0]
                ].map(([cx, cy, r], idx) => (
                  <circle 
                    key={idx} 
                    cx={cx} 
                    cy={cy} 
                    r={r} 
                    fill="#ffffff" 
                    opacity={0.5 + (idx % 4) * 0.15} 
                  />
                ))}
              </g>
            ) : (
              <g>
                {/* Golden Morning Sun peeking between mountain saddles */}
                <circle cx="580" cy="160" r="75" fill="#fde047" opacity="0.35" filter="url(#celestial_glow)" />
                <circle cx="580" cy="160" r="46" fill="#fef08a" opacity="0.88" />

                {/* Soaring Alpine Mountain Birds */}
                {[
                  [320, 80, 0.9],
                  [350, 65, 0.75],
                  [385, 85, 0.6],
                  [850, 95, 0.85],
                  [880, 82, 0.65]
                ].map(([bx, by, s], i) => (
                  <path
                    key={i}
                    d={`M${bx - 14 * s} ${by} Q ${bx - 6 * s} ${by - 8 * s} ${bx} ${by} Q ${bx + 6 * s} ${by - 8 * s} ${bx + 14 * s} ${by}`}
                    stroke="#475569"
                    strokeWidth={1.8 * s}
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.75"
                  />
                ))}

                {/* Soft Morning Cloud wisps */}
                <path d="M120 75 Q 180 50 250 75 T 380 75 L 380 95 Q 260 110 120 95 Z" fill="#ffffff" opacity="0.4" filter="url(#soft_fog)" />
                <path d="M780 70 Q 860 45 950 70 T 1100 70 L 1100 90 Q 950 105 780 90 Z" fill="#ffffff" opacity="0.35" filter="url(#soft_fog)" />
              </g>
            )}

            {/* ==================== LAYER 1: HIGHEST ALPINE CRESTS & PEAKS ==================== */}
            <g>
              {/* Back Mountain Silhouette with Sharp Razor Peaks */}
              <path
                d="M 0 310 
                   L 70 230 L 140 270 L 230 180 L 320 250 L 430 150 L 520 220 
                   L 610 130 L 720 240 L 820 140 L 920 230 L 1020 160 L 1110 240 L 1200 180 
                   L 1200 460 L 0 460 Z"
                fill={darkMode ? "url(#mount_far_dark)" : "url(#mount_far_light)"}
                opacity={darkMode ? "0.9" : "1"}
              />

              {/* High Alpine Snow Caps (Gleaming white in day, Ice-Cyan in night) */}
              <polygon 
                points="230,180 195,215 220,210 230,218 245,210 260,220" 
                fill={darkMode ? "#7dd3fc" : "#ffffff"} 
                opacity={darkMode ? "0.55" : "0.95"} 
              />
              <polygon 
                points="430,150 385,200 415,190 430,205 450,195 470,205" 
                fill={darkMode ? "#7dd3fc" : "#ffffff"} 
                opacity={darkMode ? "0.6" : "0.95"} 
              />
              <polygon 
                points="610,130 565,185 595,175 610,190 635,178 660,190" 
                fill={darkMode ? "#93c5fd" : "#ffffff"} 
                opacity={darkMode ? "0.65" : "0.98"} 
              />
              <polygon 
                points="820,140 780,195 805,185 820,200 845,188 865,198" 
                fill={darkMode ? "#7dd3fc" : "#ffffff"} 
                opacity={darkMode ? "0.6" : "0.95"} 
              />
              <polygon 
                points="1020,160 980,210 1005,202 1020,214 1045,204 1065,215" 
                fill={darkMode ? "#7dd3fc" : "#ffffff"} 
                opacity={darkMode ? "0.55" : "0.95"} 
              />
            </g>

            {/* ==================== LAYER 2: MOUNTAIN VALLEY MIST ==================== */}
            <rect 
              x="0" 
              y="220" 
              width="1200" 
              height="85" 
              fill={darkMode ? "url(#mist_gradient_dark)" : "url(#mist_gradient_light)"} 
              filter="url(#soft_fog)" 
            />

            {/* ==================== LAYER 3: MID-RANGE JAGGED CRAGS & RIDGES ==================== */}
            <g>
              <path
                d="M 0 350 
                   L 90 270 L 180 320 L 290 240 L 400 310 L 510 220 L 630 300 
                   L 740 210 L 860 290 L 970 220 L 1080 300 L 1200 240 
                   L 1200 460 L 0 460 Z"
                fill={darkMode ? "url(#mount_mid_dark)" : "url(#mount_mid_light)"}
              />

              {/* Mid-Range Mountain Snow Ridges & Couloirs */}
              <polygon 
                points="290,240 260,275 285,270 290,280 310,272 325,282" 
                fill={darkMode ? "#38bdf8" : "#f1f5f9"} 
                opacity={darkMode ? "0.45" : "0.9"} 
              />
              <polygon 
                points="510,220 470,265 495,258 510,270 535,260 555,272" 
                fill={darkMode ? "#38bdf8" : "#f1f5f9"} 
                opacity={darkMode ? "0.5" : "0.9"} 
              />
              <polygon 
                points="740,210 700,260 725,250 740,265 765,252 785,268" 
                fill={darkMode ? "#38bdf8" : "#f1f5f9"} 
                opacity={darkMode ? "0.55" : "0.9"} 
              />
              <polygon 
                points="970,220 930,265 955,258 970,272 995,260 1015,272" 
                fill={darkMode ? "#38bdf8" : "#f1f5f9"} 
                opacity={darkMode ? "0.45" : "0.9"} 
              />

              {/* Staggered Alpine Pine Forests on Slopes */}
              {[
                [60, 310, 20], [80, 315, 24], [130, 330, 22], [160, 325, 26],
                [220, 300, 24], [250, 305, 28], [330, 290, 24], [360, 295, 28],
                [450, 280, 26], [480, 275, 30], [560, 285, 25], [590, 290, 28],
                [670, 275, 28], [700, 270, 32], [790, 275, 26], [820, 280, 30],
                [890, 270, 28], [930, 275, 32], [1010, 280, 25], [1050, 285, 29],
                [1120, 290, 26], [1160, 295, 30]
              ].map(([px, py, h], i) => (
                <polygon
                  key={i}
                  points={`${px},${py - h} ${px - h * 0.35},${py} ${px + h * 0.35},${py}`}
                  fill={darkMode ? "#040711" : "#334155"}
                  opacity="0.9"
                />
              ))}
            </g>

            {/* ==================== LAYER 4: ROLLING FOREGROUND FOOTHILLS ==================== */}
            <g>
              <path
                d="M 0 370 
                   Q 220 320 480 350 
                   T 960 340 
                   Q 1080 345 1200 360 
                   L 1200 460 L 0 460 Z"
                fill={darkMode ? "url(#mount_near_dark)" : "url(#mount_near_light)"}
              />

              {/* Foreground Majestic Tall Pines */}
              {[
                [110, 370, 50], [135, 375, 62], [165, 380, 48],
                [280, 365, 55], [315, 370, 68], [345, 372, 52],
                [840, 360, 58], [875, 365, 74], [915, 370, 55],
                [1040, 375, 60], [1075, 380, 78], [1115, 385, 54]
              ].map(([px, py, h], i) => (
                <g key={i}>
                  {/* Pine Foliage Tiers */}
                  <polygon
                    points={`${px},${py - h} ${px - h * 0.22},${py - h * 0.55} ${px + h * 0.22},${py - h * 0.55}`}
                    fill={darkMode ? "#030610" : "#1e293b"}
                  />
                  <polygon
                    points={`${px},${py - h * 0.65} ${px - h * 0.28},${py - h * 0.25} ${px + h * 0.28},${py - h * 0.25}`}
                    fill={darkMode ? "#030610" : "#1e293b"}
                  />
                  <polygon
                    points={`${px},${py - h * 0.35} ${px - h * 0.35},${py} ${px + h * 0.35},${py}`}
                    fill={darkMode ? "#020409" : "#0f172a"}
                  />
                  {/* Subtle snow/frost highlight on north edge of branches */}
                  <line 
                    x1={px} 
                    y1={py - h} 
                    x2={px - h * 0.22} 
                    y2={py - h * 0.55} 
                    stroke={darkMode ? "#38bdf8" : "#ffffff"} 
                    strokeWidth="1.2" 
                    opacity={darkMode ? "0.4" : "0.85"} 
                  />
                </g>
              ))}

              {/* ==================== LAYER 5: ALPINE BEACON / LOOKOUT ON RIDGE ==================== */}
              <g transform="translate(620, 240)">
                {/* Stone Lookout Base */}
                <path d="M -22 110 L 22 110 L 16 75 L -16 75 Z" fill={darkMode ? "#090d16" : "#334155"} />
                {/* Wooden Framework */}
                <line x1="-12" y1="75" x2="-8" y2="35" stroke={darkMode ? "#050811" : "#1e293b"} strokeWidth="4" />
                <line x1="12" y1="75" x2="8" y2="35" stroke={darkMode ? "#050811" : "#1e293b"} strokeWidth="4" />
                <line x1="-14" y1="55" x2="14" y2="55" stroke={darkMode ? "#050811" : "#1e293b"} strokeWidth="3" />

                {/* Beacon Chamber */}
                <polygon points="-12,35 12,35 15,15 -15,15" fill={beaconLit ? (darkMode ? "#fef08a" : "#fef9c3") : (darkMode ? "#1e293b" : "#94a3b8")} stroke="#050811" strokeWidth="2" />
                {/* Beacon Roof */}
                <polygon points="-18,15 18,15 0,-2" fill={darkMode ? "#050811" : "#1e293b"} />
                <circle cx="0" cy="-3" r="2.5" fill="#f59e0b" />

                {/* Beacon Light Aura */}
                {beaconLit && (
                  <>
                    <circle cx="0" cy="25" r="45" fill="#fbbf24" opacity={darkMode ? "0.35" : "0.2"} filter="url(#celestial_glow)" />
                    <circle cx="0" cy="25" r="4.5" fill="#f59e0b" />
                    {/* Light projection beams into the valley */}
                    <polygon 
                      points="0,25 -160,110 160,110" 
                      fill="#fef08a" 
                      opacity={darkMode ? "0.08" : "0.04"} 
                    />
                  </>
                )}
              </g>

            </g>
          </svg>

          {/* LAYER 6: Subtle Floating Flurries / Sparkles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(24)].map((_, i) => (
              <span
                key={i}
                className="absolute rounded-full bg-white animate-fall-snow"
                style={{
                  width: `${(i % 3) + 1.5}px`,
                  height: `${(i % 3) + 1.5}px`,
                  left: `${(i * 4.2 + 2) % 96}%`,
                  animationDuration: `${5 + (i % 5) * 1.5}s`,
                  animationDelay: `${(i % 6) * 0.6}s`,
                  opacity: darkMode ? 0.4 + (i % 3) * 0.2 : 0.6 + (i % 3) * 0.15
                }}
              />
            ))}
          </div>

        </div>

        {/* Profile Details Area with Clean Avatar & Verified Checkmark */}
        <div className="px-2 sm:px-4 pb-2">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 -mt-12 sm:-mt-14 mb-3">
            
            {/* Clean Circular Avatar without artifacts */}
            <div className="flex items-end gap-3.5">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white dark:border-[#111622] shadow-xl overflow-hidden bg-white dark:bg-slate-900 shrink-0 z-20 flex items-center justify-center ring-1 ring-purple-100 dark:ring-slate-800">
                <img
                  src="/New_avatar_.jpeg"
                  alt="Aditi Malviya avatar"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>

              {/* Status Dot */}
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-[11px] font-mono mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Roles</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2.5 self-start sm:self-auto z-10">
              <button
                onClick={() => {
                  sound.click();
                  if (onNavigate) onNavigate('projects');
                }}
                className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-purple-600 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 text-xs font-semibold flex items-center gap-2 shadow-xs transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.click()}
                className="px-5 py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-purple-400 text-slate-800 dark:text-slate-200 text-xs font-semibold flex items-center gap-2 shadow-xs transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Name & Animated Typewriter Title */}
          <div className="mt-1">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 dark:text-white tracking-tight">
                Aditi Malviya
              </h1>
              {/* Blue Verified Badge Checkmark */}
              <div 
                className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-xs" 
                title="Verified Technologist & Institutional Rank #1"
              >
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>

            {/* Typewriter role line with blinking cursor */}
            <div className="text-base sm:text-lg font-display font-medium text-pink-600 dark:text-pink-400 mt-0.5 flex items-center min-h-[28px]">
              <span>{subText}</span>
              <span className="inline-block w-0.5 h-5 bg-pink-500 ml-0.5 animate-pulse" />
            </div>

            {/* Education & Location */}
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-sans mt-1">
              B.Tech in Computer Science • University of Delhi, Faculty of Technology (CGPA 8.7) • Delhi, India
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
