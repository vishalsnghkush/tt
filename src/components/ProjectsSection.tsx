import React, { useState, useEffect, useRef, useCallback } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import { sound } from '../utils/sound';
import { 
  Sparkles, 
  ExternalLink, 
  Github, 
  BookOpen, 
  SlidersHorizontal, 
  LayoutGrid, 
  ChevronUp, 
  ChevronDown, 
  Maximize2,
  ArrowRight,
  ArrowUpRight
} from 'lucide-react';

interface ProjectsSectionProps {
  onOpenCaseStudy: (project: Project) => void;
  initialCategory?: string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenCaseStudy, initialCategory = 'All work' }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [viewMode, setViewMode] = useState<'deck' | 'grid'>('deck');
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [activeScreenshotMap, setActiveScreenshotMap] = useState<Record<string, number>>({});
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  const scrollRef = useRef<HTMLDivElement>(null);
  const ticking = useRef<boolean>(false);

  // Categories matching the extracted projects section
  const categories = [
    { id: 'All work', label: 'All work', count: PROJECTS.length },
    { id: 'Web', label: 'Web', count: PROJECTS.filter(p => p.stackCategory === 'Web' || p.category.includes('Web')).length },
    { id: 'Mobile', label: 'Mobile', count: PROJECTS.filter(p => p.stackCategory === 'Mobile' || p.category.includes('Mobile')).length },
    { id: 'AI & ML', label: 'AI & ML', count: PROJECTS.filter(p => p.stackCategory === 'AI & ML' || p.category.includes('AI')).length },
    { id: 'Systems', label: 'Systems', count: PROJECTS.filter(p => p.stackCategory === 'Systems' || p.category.includes('Systems') || p.category.includes('Vision')).length },
    { id: 'Research', label: 'Research', count: PROJECTS.filter(p => Boolean(p.isResearch || p.id === 'agriverse-web' || p.id === 'diabetic-retinopathy')).length },
  ];

  const filteredProjects = selectedCategory === 'All work'
    ? PROJECTS
    : PROJECTS.filter(p => {
        if (selectedCategory === 'Web') return p.stackCategory === 'Web' || p.category.includes('Web');
        if (selectedCategory === 'Mobile') return p.stackCategory === 'Mobile' || p.category.includes('Mobile');
        if (selectedCategory === 'AI & ML') return p.stackCategory === 'AI & ML' || p.category.includes('AI');
        if (selectedCategory === 'Systems') return p.stackCategory === 'Systems' || p.category.includes('Systems') || p.category.includes('Vision');
        if (selectedCategory === 'Research') return Boolean(p.isResearch || p.id === 'agriverse-web' || p.id === 'diabetic-retinopathy');
        return true;
      });

  // Track responsive screen size
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Update scroll-driven animation
  const handleScroll = useCallback(() => {
    if (!scrollRef.current || viewMode !== 'deck' || !isDesktop) return;

    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        const container = scrollRef.current;
        if (!container) {
          ticking.current = false;
          return;
        }

        const rect = container.getBoundingClientRect();
        const height = window.innerHeight;
        const travel = Math.max(1, container.offsetHeight - (height - 80));
        
        // Progress from 0 to filteredProjects.length - 1
        const rawProgress = ((-rect.top + 80) / travel) * (filteredProjects.length - 1);
        const clampedProgress = Math.max(0, Math.min(filteredProjects.length - 1, rawProgress));
        
        setProgress(clampedProgress);
        const idx = Math.min(filteredProjects.length - 1, Math.floor(clampedProgress + 0.35));
        setActiveIndex(idx);

        ticking.current = false;
      });
      ticking.current = true;
    }
  }, [filteredProjects.length, viewMode, isDesktop]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll]);

  // Jump to specific project index
  const goToProject = (targetIndex: number) => {
    sound.click();
    const clamped = Math.max(0, Math.min(filteredProjects.length - 1, targetIndex));
    setActiveIndex(clamped);
    setProgress(clamped);

    if (scrollRef.current && isDesktop && viewMode === 'deck') {
      const container = scrollRef.current;
      const height = window.innerHeight;
      const travel = Math.max(1, container.offsetHeight - (height - 80));
      const targetScrollY = container.offsetTop - 80 + (clamped / (filteredProjects.length - 1)) * travel;
      window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
    }
  };

  const handleCategoryChange = (catId: string) => {
    sound.click();
    setSelectedCategory(catId);
    setActiveIndex(0);
    setProgress(0);
  };

  const activeProject = filteredProjects[activeIndex] || filteredProjects[0];

  return (
    <section id="projects" className="py-8 sm:py-12 relative animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching the demo aesthetic */}
        <div className="mb-8">
          <p className="text-[11px] sm:text-xs font-mono tracking-widest text-[#9a6377] dark:text-purple-400 font-semibold uppercase mb-2">
            <span>02 /</span> LESS TALK. MORE THINGS BUILT.
          </p>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
                Selected <em className="font-serif italic font-normal text-purple-700 dark:text-purple-300">work.</em>
                <span className="font-mono text-sm sm:text-base font-normal text-slate-400 dark:text-slate-500 ml-3">
                  ({filteredProjects.length})
                </span>
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl font-sans leading-relaxed">
                A collection of experiments, collaborations, and ideas that made it out of my head.
              </p>
            </div>

            {/* View Mode Controls */}
            <div className="flex items-center gap-2 self-start md:self-auto">
              <button
                onClick={() => { sound.click(); setViewMode('deck'); }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-medium flex items-center gap-1.5 transition-all ${
                  viewMode === 'deck'
                    ? 'bg-purple-600 text-white shadow-sm font-semibold'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-blush-50 dark:hover:bg-slate-800 border border-blush-200 dark:border-slate-800'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Slide Deck</span>
              </button>

              <button
                onClick={() => { sound.click(); setViewMode('grid'); }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-medium flex items-center gap-1.5 transition-all ${
                  viewMode === 'grid'
                    ? 'bg-purple-600 text-white shadow-sm font-semibold'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-blush-50 dark:hover:bg-slate-800 border border-blush-200 dark:border-slate-800'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid</span>
              </button>
            </div>
          </div>

          {/* Toolbar: Category Filters & Scroll Hint */}
          <div className="pt-4 border-t border-[#dfcfd3] dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`px-4 py-1.5 rounded-full text-xs font-sans font-medium transition-all duration-200 flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-slate-900 dark:bg-purple-600 text-white shadow-sm scale-105'
                        : 'bg-white/80 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-blush-100 dark:hover:bg-slate-800 border border-[#d9c9ce] dark:border-slate-800'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-blush-100 dark:bg-slate-800 text-slate-500'
                    }`}>
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Interactive Prev / Next & Scroll Hint */}
            {viewMode === 'deck' && (
              <div className="flex items-center gap-3">
                <span className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono tracking-wider text-slate-500 dark:text-slate-400">
                  SCROLL TO UNFOLD
                  <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
                </span>

                <div className="flex items-center gap-1 bg-white/70 dark:bg-slate-900/70 p-1 rounded-full border border-blush-200 dark:border-slate-800 shadow-xs">
                  <button
                    onClick={() => goToProject(activeIndex - 1)}
                    disabled={activeIndex === 0}
                    className="p-1 rounded-full text-slate-600 dark:text-slate-300 hover:bg-purple-100 dark:hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                    title="Previous Project"
                  >
                    <ChevronUp className="w-4 h-4" />
                  </button>
                  <span className="text-[11px] font-mono font-bold px-1.5 text-purple-700 dark:text-purple-300">
                    {String(activeIndex + 1).padStart(2, '0')}
                  </span>
                  <button
                    onClick={() => goToProject(activeIndex + 1)}
                    disabled={activeIndex >= filteredProjects.length - 1}
                    className="p-1 rounded-full text-slate-600 dark:text-slate-300 hover:bg-purple-100 dark:hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                    title="Next Project"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ======================= VIEW MODE 1: DECK VIEW (SLIDE VIEW) ======================= */}
        {viewMode === 'deck' ? (
          <div 
            ref={scrollRef}
            className="relative"
            style={{
              // Only desktop has tall scroll area driving the sticky deck
              height: isDesktop ? `calc(${filteredProjects.length} * 70vh + 180px)` : 'auto'
            }}
          >
            {/* STICKY STAGE */}
            <div className={`${isDesktop ? 'sticky top-20 min-h-[580px] max-h-[850px] overflow-hidden' : ''} py-4`}>
              <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.25fr] gap-8 lg:gap-12 items-center">
                
                {/* LEFT COLUMN: Project Details (Synchronized to activeIndex) */}
                <div className="order-2 lg:order-1 flex flex-col justify-center max-w-lg">
                  {/* Position number */}
                  <div className="text-sm font-mono font-bold text-slate-900 dark:text-white mb-4">
                    <span>{String(activeIndex + 1).padStart(2, '0')}</span>{' '}
                    <span className="text-slate-400 font-normal">/ {String(filteredProjects.length).padStart(2, '0')}</span>
                  </div>

                  {/* Eyebrow */}
                  <p className="text-[11px] font-mono tracking-widest text-[#9a6377] dark:text-purple-400 uppercase font-semibold mb-2">
                    {activeProject.eyebrow || activeProject.stackCategory || activeProject.category}
                  </p>

                  {/* Title */}
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-sans tracking-tight text-slate-900 dark:text-white leading-[1.08] mb-4">
                    {activeProject.name || activeProject.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed mb-6">
                    {activeProject.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {activeProject.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-[10px] font-mono rounded bg-white dark:bg-slate-900 border border-[#dbccd1] dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action links */}
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    {activeProject.links.live && (
                      <a
                        href={activeProject.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sound.click()}
                        className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-purple-600 dark:hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-2 shadow-xs transition-transform active:scale-95"
                      >
                        <span>
                          {activeProject.links.live.includes('play.google') ? 'View on Google Play' : 'Visit project'}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}

                    <button
                      onClick={() => { sound.click(); onOpenCaseStudy(activeProject); }}
                      className="px-4 py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-purple-500 text-slate-800 dark:text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs active:scale-95"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                      <span>Case Study</span>
                    </button>

                    {activeProject.links.github && (
                      <a
                        href={activeProject.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sound.click()}
                        className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-2 px-1"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source code</span>
                        <ArrowUpRight className="w-3 h-3 text-slate-400" />
                      </a>
                    )}
                  </div>

                  {/* Progress indicator bars (click to jump) */}
                  <div className="flex items-center gap-1.5 pt-2">
                    {filteredProjects.map((_, j) => (
                      <button
                        key={j}
                        type="button"
                        onClick={() => goToProject(j)}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          activeIndex === j
                            ? 'w-8 bg-[#9e647a] dark:bg-purple-400'
                            : 'w-3.5 bg-[#dfcdd3] dark:bg-slate-800 hover:bg-slate-400'
                        }`}
                        title={`Go to project ${j + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* RIGHT COLUMN: Stacked Cards Deck with 3D Slide Animation */}
                <div className="order-1 lg:order-2 relative w-full h-[470px] sm:h-[500px] flex items-center justify-center">
                  {filteredProjects.map((project, i) => {
                    const delta = i - progress;
                    const past = Math.max(0, -delta);
                    const ahead = Math.max(0, delta);
                    
                    // 3D Stacking Transform from extracted demo
                    const isStackActive = isDesktop;
                    const transform = isStackActive
                      ? `translate3d(${past * -48}px, ${past * -540 + Math.min(ahead, 3) * 16}px, 0) rotate(${past * -7 + Math.min(ahead, 3) * 2.2}deg) scale(${1 - Math.min(ahead, 3) * 0.035})`
                      : i === activeIndex ? 'none' : 'none';
                    
                    const opacity = isStackActive
                      ? (delta < -0.85 || delta > 3.2 ? 0 : 1)
                      : (i === activeIndex ? 1 : 0);
                    
                    const visibility = isStackActive
                      ? (delta < -1.2 || delta > 3.5 ? 'hidden' : 'visible')
                      : (i === activeIndex ? 'visible' : 'hidden');

                    const zIndex = isStackActive
                      ? Math.round(30 - delta * 2)
                      : (i === activeIndex ? 10 : 0);

                    // Screenshot switcher & collage handling
                    const hasScreenshots = Boolean(project.screenshots && project.screenshots.length > 0);
                    const rawShotIdx = activeScreenshotMap[project.id];
                    const currentShotIdx = rawShotIdx !== undefined 
                      ? rawShotIdx 
                      : (project.layoutType === 'mobile-collage' ? -1 : 0);

                    const displayImage = (hasScreenshots && currentShotIdx >= 0) 
                      ? project.screenshots![currentShotIdx]?.src 
                      : project.image;
                    const displayAlt = (hasScreenshots && currentShotIdx >= 0)
                      ? project.screenshots![currentShotIdx]?.alt
                      : project.title;

                    return (
                      <article
                        key={project.id}
                        className="absolute inset-0 rounded-2xl border border-[#26232335] dark:border-slate-800 shadow-xl transition-all duration-200 flex flex-col p-4 sm:p-5 select-none"
                        style={{
                          backgroundColor: project.cardColor || '#E5DDF0',
                          transform,
                          opacity,
                          visibility,
                          zIndex,
                          pointerEvents: isStackActive && Math.abs(delta) < 0.6 ? 'auto' : (isDesktop ? 'none' : (i === activeIndex ? 'auto' : 'none'))
                        }}
                      >
                        {/* Card Topline */}
                        <div className="flex items-center justify-between text-[10px] font-mono tracking-wider text-slate-800 dark:text-slate-900 font-semibold mb-3">
                          <span>
                            {String(i + 1).padStart(2, '0')} / {(project.stackCategory || project.category).toUpperCase()}
                          </span>
                          <span className="opacity-70 flex items-center gap-1">
                            {hasScreenshots ? 'REAL PROJECT' : 'DESIGN STUDY'} ↗
                          </span>
                        </div>

                        {/* Project Art / Preview Frame - 100% VISIBLE, NO CUTOFF / MOBILE COLLAGE */}
                        <div className="flex-1 w-full relative flex flex-col items-center justify-center min-h-0 bg-white/80 dark:bg-[#0F131A] rounded-xl border border-black/10 dark:border-white/10 p-2 sm:p-3 shadow-inner overflow-hidden">
                          {/* Image Container with object-contain to never cut off */}
                          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                            {project.layoutType === 'mobile-collage' && project.collageImages && currentShotIdx === -1 ? (
                              /* Side-by-side Mobile Collage Showcase */
                              <div className="w-full h-full flex items-center justify-center gap-3 sm:gap-5 overflow-hidden py-1 px-2">
                                {project.collageImages.map((imgSrc, cIdx) => (
                                  <div
                                    key={cIdx}
                                    className="relative h-full aspect-[9/19] rounded-xl overflow-hidden bg-black/95 border-2 border-slate-700/60 shadow-xl transition-all duration-300 hover:scale-[1.03] cursor-pointer group/phone"
                                    onClick={() => {
                                      sound.click();
                                      onOpenCaseStudy(project);
                                    }}
                                    title="Click to expand case study"
                                  >
                                    <img
                                      src={imgSrc}
                                      alt={`${project.name} mobile view ${cIdx + 1}`}
                                      className="w-full h-full object-cover"
                                    />
                                    {/* Mobile status indicator bar */}
                                    <div className="absolute top-1.5 inset-x-0 flex justify-center pointer-events-none">
                                      <div className="w-10 h-1.5 rounded-full bg-black/70 backdrop-blur-xs" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                                  </div>
                                ))}
                              </div>
                            ) : (
                              /* Standard Single Frame / Responsive View */
                              <img
                                src={displayImage}
                                alt={displayAlt}
                                className="max-w-full max-h-full object-contain rounded-lg drop-shadow-sm transition-all duration-300"
                                loading="lazy"
                              />
                            )}

                            {/* Full-size zoom trigger */}
                            <button
                              type="button"
                              onClick={() => {
                                sound.click();
                                onOpenCaseStudy(project);
                              }}
                              className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/60 hover:bg-black/90 text-white transition-all backdrop-blur-sm border border-white/10 z-10"
                              title="Inspect full view & case study"
                            >
                              <Maximize2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* Screenshot Selector Controls for AgriVerse or multi-screenshot projects */}
                          {hasScreenshots && (
                            <div className="mt-2 flex items-center justify-center gap-1.5 flex-wrap shrink-0 z-10">
                              {project.layoutType === 'mobile-collage' && project.collageImages && (
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    sound.click();
                                    setActiveScreenshotMap(prev => ({
                                      ...prev,
                                      [project.id]: -1
                                    }));
                                  }}
                                  className={`px-3 py-1 rounded-full text-[11px] font-sans font-medium transition-all ${
                                    currentShotIdx === -1 || (activeScreenshotMap[project.id] === undefined && project.layoutType === 'mobile-collage')
                                      ? 'bg-purple-600 text-white font-semibold shadow-xs'
                                      : 'bg-white/80 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-white border border-slate-300 dark:border-slate-700'
                                  }`}
                                >
                                  Dual Showcase
                                </button>
                              )}
                              {project.screenshots!.map((shot, shotIdx) => (
                                <button
                                  key={shotIdx}
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    sound.click();
                                    setActiveScreenshotMap(prev => ({
                                      ...prev,
                                      [project.id]: shotIdx
                                    }));
                                  }}
                                  className={`px-3 py-1 rounded-full text-[11px] font-sans font-medium transition-all ${
                                    currentShotIdx === shotIdx
                                      ? 'bg-slate-900 text-white font-semibold shadow-xs'
                                      : 'bg-white/80 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-white border border-slate-300 dark:border-slate-700'
                                  }`}
                                >
                                  {shot.label}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Card Footer */}
                        <div className="pt-3 mt-3 border-t border-[#27232320] dark:border-slate-800/40 flex items-center justify-between text-slate-900 dark:text-slate-900">
                          <strong className="text-sm sm:text-base font-bold font-sans tracking-tight">
                            {project.name || project.title}
                          </strong>
                          <span className="text-[10px] font-mono text-slate-700 dark:text-slate-800">
                            {project.tags.slice(0, 3).join(' / ')}
                          </span>
                        </div>

                        {/* Art disclaimer */}
                        <p className="text-[9px] font-mono text-slate-600 dark:text-slate-700 mt-1">
                          {hasScreenshots 
                            ? 'Original project screenshots • click to inspect full size' 
                            : 'Interactive system preview • click for case study'}
                        </p>
                      </article>
                    );
                  })}
                </div>

              </div>
            </div>
          </div>
        ) : (
          /* ======================= VIEW MODE 2: RESPONSIVE GRID VIEW ======================= */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenCaseStudy={onOpenCaseStudy}
              />
            ))}
          </div>
        )}

        {/* Section Bottom Banner matching the extracted collection */}
        <div className="mt-12 pt-6 border-t border-[#dfcfd3] dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono tracking-wider text-slate-500 dark:text-slate-400 text-center sm:text-left">
            THAT'S THE COLLECTION. MORE IDEAS ARE BREWING.
          </span>
          <a
            href="https://github.com/aditi-malviya666?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.click()}
            className="text-xs font-semibold font-sans text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 flex items-center gap-1.5 transition-colors group"
          >
            <span>Dig into the code on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
