import React, { useRef, useState } from 'react';
import { Project } from '../types';
import { sound } from '../utils/sound';
import { ExternalLink, Github, BookOpen, ArrowUpRight, Maximize2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
  compact?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy, compact }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [activeShotIndex, setActiveShotIndex] = useState<number>(0);

  const hasScreenshots = Boolean(project.screenshots && project.screenshots.length > 0);
  const currentImage = hasScreenshots 
    ? project.screenshots![activeShotIndex]?.src 
    : project.image;
  const currentAlt = hasScreenshots
    ? project.screenshots![activeShotIndex]?.alt
    : project.title;

  return (
    <div
      ref={cardRef}
      className="group relative rounded-2xl bg-white dark:bg-[#12151B] border border-blush-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/5 transition-all duration-300 flex flex-col overflow-hidden"
    >
      {/* Project Banner Image - Complete Visible Frame (No Cutoff / Mobile Collage) */}
      <div className="relative overflow-hidden rounded-t-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center p-2.5 sm:p-3">
        {project.layoutType === 'mobile-collage' && project.collageImages ? (
          <div className="w-full h-full flex items-center justify-center gap-2.5 overflow-hidden py-1 px-2">
            {project.collageImages.map((imgSrc, cIdx) => (
              <div
                key={cIdx}
                className="relative h-full aspect-[9/19] rounded-lg overflow-hidden bg-black/90 border border-slate-700/60 shadow-md transition-transform group-hover:scale-[1.02]"
              >
                <img
                  src={imgSrc}
                  alt={`${project.title} view ${cIdx + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            ))}
          </div>
        ) : (
          <img 
            src={currentImage} 
            alt={currentAlt} 
            className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.01]"
          />
        )}

        {/* Category + Year badge overlay */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 z-10">
          {project.isResearch && (
            <span className="text-[9px] font-mono tracking-wide px-2 py-0.5 rounded-full bg-purple-700/85 backdrop-blur-sm text-purple-100 font-semibold border border-purple-400/40">
              Research
            </span>
          )}
          <span className="text-[9px] font-mono tracking-wide px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-sm text-white/95 font-medium border border-white/10">
            {project.stackCategory || project.category}
          </span>
          <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-purple-600/90 backdrop-blur-sm text-white font-semibold border border-purple-400/30">
            {project.year}
          </span>
        </div>

        {/* Zoom / Full Preview trigger */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            sound.click();
            onOpenCaseStudy(project);
          }}
          className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-black/60 hover:bg-purple-600/90 text-white/80 hover:text-white transition-all backdrop-blur-sm border border-white/10 z-10"
          title="Inspect full case study & visual"
        >
          <Maximize2 className="w-3.5 h-3.5" />
        </button>

        {/* Screenshot switcher controls if available */}
        {hasScreenshots && (
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-center gap-1.5 z-10 pointer-events-auto">
            {project.screenshots!.map((shot, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  sound.click();
                  setActiveShotIndex(idx);
                }}
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium transition-all backdrop-blur-md shadow-xs ${
                  activeShotIndex === idx
                    ? 'bg-purple-600 text-white font-semibold shadow-purple-500/30 border border-purple-400/50'
                    : 'bg-black/60 text-slate-300 hover:text-white hover:bg-black/80 border border-white/10'
                }`}
              >
                {shot.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 gap-3">

        {/* Title & Role */}
        <div>
          <h3 className="text-base sm:text-[17px] font-bold font-display text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors flex items-center justify-between gap-1">
            <span className="line-clamp-1">{project.title}</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-purple-500 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </h3>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-sans leading-snug">{project.tagline}</p>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-4 gap-1.5 py-2 px-2 bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-slate-100 dark:border-slate-800/60">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="text-center">
              <div className="text-[11px] sm:text-xs font-bold font-mono text-slate-900 dark:text-white">{m.value}</div>
              <div className="text-[8px] text-slate-500 font-sans tracking-tight truncate">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="flex-1 space-y-1">
          {project.highlights.slice(0, compact ? 2 : 3).map((h, i) => (
            <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-700 dark:text-slate-300">
              <span className="text-purple-500 font-bold shrink-0 mt-0.5">▸</span>
              <span className="leading-snug">{h}</span>
            </div>
          ))}
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 5).map((tag, i) => (
            <span key={i} className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800/70 text-slate-600 dark:text-slate-400 text-[9px] font-mono">
              #{tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/70">
          <button
            onClick={() => { sound.click(); onOpenCaseStudy(project); }}
            className="flex-1 h-10 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-xs active:scale-95"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Case Study</span>
          </button>

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.click()}
              className="w-11 h-10 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-purple-50 dark:hover:bg-purple-950/60 hover:border-purple-500 hover:scale-105 active:scale-95 transition-all shadow-xs flex items-center justify-center shrink-0"
              title="View on GitHub"
            >
              <Github className="w-5 h-5 text-slate-800 dark:text-slate-100" />
            </a>
          )}

          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.click()}
              className={`h-10 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-purple-50 dark:hover:bg-purple-950/60 hover:border-purple-500 hover:scale-105 active:scale-95 transition-all shadow-xs flex items-center justify-center shrink-0 ${
                project.links.live.includes('play.google') ? 'px-3 gap-1.5' : 'w-11'
              }`}
              title={project.links.live.includes('play.google') ? 'View on Google Play' : 'Open Live Demo'}
            >
              <ExternalLink className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              {project.links.live.includes('play.google') && (
                <span className="text-[11px] font-semibold text-slate-800 dark:text-slate-200">Play Store</span>
              )}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
