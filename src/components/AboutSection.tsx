import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/sound';
import { Github, Linkedin, Mail, ArrowDown, MapPin, Sparkles, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AboutSectionProps {
  darkMode: boolean;
  onNavigate?: (section: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ darkMode, onNavigate }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    sound.pop();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    confetti({ particleCount: 30, spread: 60, origin: { y: 0.6 } });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="about" className="py-8 sm:py-12 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Status & Location Pills in Dull / Neutral Dark Shades for Light Mode */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-pink-950/40 border border-slate-300/80 dark:border-pink-800/40 text-slate-700 dark:text-pink-300 text-xs font-mono shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open to Work</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-purple-950/40 border border-slate-300/70 dark:border-purple-800/40 text-slate-700 dark:text-purple-300 text-xs font-mono shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-slate-500 dark:text-pink-400" />
            <span>Delhi, India • University of Delhi FoT</span>
          </div>
        </div>

        {/* Two-column layout: Bio left, Quick Stats right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-start">
          {/* Left Column: Bio with Dark/Dull shades in light mode */}
          <div className="lg:col-span-3 space-y-5">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight leading-[1.08]">
                I build intelligent products people can use<span className="text-purple-600">.</span>
              </h1>

              <p className="text-base sm:text-lg font-medium font-sans text-slate-700 dark:text-purple-200/90 mt-3">
                Full-stack developer working across AI/ML, data science, and product engineering.
              </p>

              <p className="text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed mt-3 max-w-xl">
                I turn models, data, and algorithms into clear digital experiences — with strong engineering underneath and thoughtful interfaces on top.
              </p>
            </div>

            {/* Social Pills: Dark / Dull Shades in Light Mode */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.click()}
                className="px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-purple-950/60 dark:hover:bg-purple-900/60 dark:text-purple-200 border border-slate-800 dark:border-purple-800/50 text-xs font-semibold transition-all shadow-xs flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Github className="w-3.5 h-3.5 text-slate-200 dark:text-purple-300" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.click()}
                className="px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white dark:bg-indigo-950/60 dark:hover:bg-indigo-900/60 dark:text-indigo-200 border border-slate-700 dark:border-indigo-800/50 text-xs font-semibold transition-all shadow-xs flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Linkedin className="w-3.5 h-3.5 text-slate-200 dark:text-indigo-300" />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 dark:bg-pink-950/60 dark:hover:bg-pink-900/60 dark:text-pink-200 dark:border-pink-800/50 text-xs font-medium transition-all shadow-2xs flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-slate-600 dark:text-pink-300" />
                <span>{copied ? '✨ Copied!' : PERSONAL_INFO.email}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  sound.sparkle();
                  onNavigate?.('contact');
                }}
                className="px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-gradient-to-r dark:from-pink-500 dark:via-purple-500 dark:to-indigo-500 text-xs font-semibold transition-all shadow-xs flex items-center gap-1.5 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Get in Touch</span>
              </button>
            </div>

            {/* Navigate to Projects Button: Dull / Dark Shade in Light Mode */}
            <div className="pt-1">
              <button
                onClick={() => {
                  sound.click();
                  onNavigate?.('projects');
                }}
                className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-gradient-to-r dark:from-purple-600 dark:to-pink-500 dark:hover:from-purple-500 dark:hover:to-pink-400 text-xs font-semibold transition-all shadow-md active:scale-95 hover:scale-105 cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: one quiet proof card instead of a dashboard */}
          <div className="lg:col-span-2">
            <div className="p-5 sm:p-6 rounded-3xl bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between gap-3 mb-5">
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-purple-600 dark:text-purple-400">Highlights</p>
                  <h2 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">Selected achievements</h2>
                </div>
                <Github className="w-5 h-5 text-slate-400 dark:text-slate-500" />
              </div>

              <dl className="space-y-3">
                <div className="flex items-baseline justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-3">
                  <dt className="text-sm text-slate-600 dark:text-slate-400">GFG Faculty of Technology rank</dt>
                  <dd className="text-lg font-bold font-mono text-slate-900 dark:text-white">#1</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-3">
                  <dt className="text-sm text-slate-600 dark:text-slate-400">Data structures problems</dt>
                  <dd className="text-lg font-bold font-mono text-slate-900 dark:text-white">350+</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-3">
                  <dt className="text-sm text-slate-600 dark:text-slate-400">University CGPA</dt>
                  <dd className="text-lg font-bold font-mono text-slate-900 dark:text-white">8.7</dd>
                </div>
              </dl>

              <button
                onClick={() => { sound.click(); onNavigate?.('git-grid'); }}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-purple-700 dark:text-purple-300 hover:underline cursor-pointer"
              >
                See GitHub activity
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
