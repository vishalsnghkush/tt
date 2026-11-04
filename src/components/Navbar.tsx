import React, { useState, useEffect } from 'react';
import { sound } from '../utils/sound';
import { Moon, Sun, Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onSelectSection,
  darkMode,
  setDarkMode,
  soundEnabled,
  setSoundEnabled,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'dsa', label: 'DSA' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'git-grid', label: 'Git' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    sound.click();
    onSelectSection(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-2.5 pointer-events-none transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Left: Brand Identity pill */}
        <button
          onClick={() => handleNavClick('about')}
          className={`flex items-center gap-2.5 px-3 py-1.5 rounded-full transition-all duration-300 backdrop-blur-md border cursor-pointer ${
            scrolled
              ? 'bg-white/85 dark:bg-[#111622]/85 border-blush-200 dark:border-slate-800 shadow-md'
              : 'bg-white/60 dark:bg-[#111622]/60 border-blush-100 dark:border-slate-800/40'
          }`}
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center text-white text-xs font-bold font-display shadow-xs">
            AM
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs font-bold font-display text-slate-900 dark:text-white leading-tight">
              Aditi Malviya
            </span>
            <span className="text-[10px] text-purple-600 dark:text-purple-300 font-mono leading-tight">
              Creative Technologist
            </span>
          </div>
        </button>

        {/* Center: Desktop Navigation links pill with active glow */}
        <nav
          className={`hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full backdrop-blur-md transition-all duration-300 border ${
            scrolled
              ? 'bg-white/85 dark:bg-[#111622]/85 border-blush-200 dark:border-slate-800 shadow-md'
              : 'bg-white/60 dark:bg-[#111622]/60 border-blush-100/70 dark:border-slate-800/50'
          }`}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-purple-600 dark:bg-purple-500 text-white shadow-xs font-semibold scale-105'
                    : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-300 hover:bg-blush-50/80 dark:hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Sound, Theme & Mobile menu controls */}
        <div
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full backdrop-blur-md transition-all duration-300 border ${
            scrolled
              ? 'bg-white/85 dark:bg-[#111622]/85 border-blush-200 dark:border-slate-800 shadow-md'
              : 'bg-white/60 dark:bg-[#111622]/60 border-blush-100 dark:border-slate-800/40'
          }`}
        >
          {/* Sound Toggle */}
          <button
            onClick={() => {
              const next = !soundEnabled;
              setSoundEnabled(next);
              sound.enabled = next;
              if (next) sound.sparkle();
            }}
            className="p-1.5 rounded-full hover:bg-blush-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
            title={soundEnabled ? 'Disable UI Sounds' : 'Enable UI Sounds'}
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-400" />
            )}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => {
              sound.pop();
              setDarkMode(!darkMode);
            }}
            className="p-1.5 rounded-full hover:bg-blush-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
            title={darkMode ? 'Switch to Lilac Dawn mode' : 'Switch to Midnight Space mode'}
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
            ) : (
              <Moon className="w-4 h-4 text-purple-600" />
            )}
          </button>

          {/* Contact Direct Dispatch Pill */}
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 text-xs font-semibold transition-transform active:scale-95 ml-1"
          >
            <span>Say Hi</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => {
              sound.click();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-1.5 rounded-full hover:bg-blush-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-sm mx-auto p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-blush-200 dark:border-slate-800 shadow-xl pointer-events-auto animate-fadeIn">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-medium text-left transition-all ${
                    isActive
                      ? 'bg-purple-600 text-white font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-blush-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
