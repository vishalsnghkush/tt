import React from 'react';
import { Project } from '../types';
import { sound } from '../utils/sound';
import { X, ExternalLink, Github, CheckCircle2, Shield, Zap, Sparkles, Layers, Cpu } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto backdrop-blur-md bg-slate-950/70 animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-[#11141A] rounded-3xl border border-blush-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-blush-50 to-lilac-50/40 dark:from-slate-900 dark:to-purple-950/30 border-b border-blush-200 dark:border-slate-800 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-500">
                {project.year} • {project.role}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
              {project.title}
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 font-sans">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={() => { sound.click(); onClose(); }}
            className="p-2 rounded-full bg-blush-100 dark:bg-slate-800 hover:bg-blush-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 font-sans text-sm text-slate-700 dark:text-slate-300">
          {/* Key Metrics Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-blush-50/50 dark:bg-slate-900/80 border border-blush-200 dark:border-slate-800">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <div className="text-xl font-bold font-mono text-purple-600 dark:text-purple-400">
                  {m.value}
                </div>
                <div className="text-xs text-slate-500 font-sans mt-0.5">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Section 1: The Problem & Audience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold mb-2 font-display">
                <Shield className="w-4 h-4" />
                <span>The Core UX Challenge</span>
              </div>
              <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                {project.caseStudy.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-sky-500/5 dark:bg-sky-500/10 border border-sky-500/20">
              <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold mb-2 font-display">
                <Sparkles className="w-4 h-4" />
                <span>Target Users & Personas</span>
              </div>
              <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                {project.caseStudy.audience}
              </p>
            </div>
          </div>

          {/* Section 2: UX & Interaction Design Decisions */}
          <div>
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-base mb-3 font-display">
              <Layers className="w-5 h-5 text-indigo-500" />
              <span>Design System &amp; Interaction Decisions</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.caseStudy.designDecisions.map((decision, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs leading-relaxed">{decision}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Technical Architecture */}
          <div>
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-base mb-3 font-display">
              <Cpu className="w-5 h-5 text-indigo-500" />
              <span>Technical Architecture &amp; Performance Engineering</span>
            </div>
            <div className="space-y-2.5">
              {project.caseStudy.technicalArchitecture.map((arch, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs border border-slate-800 flex items-start gap-3">
                  <span className="text-indigo-400 font-bold">0{i + 1}.</span>
                  <span className="leading-relaxed">{arch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Measurable Impact */}
          <div>
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-base mb-3 font-display">
              <Zap className="w-5 h-5 text-amber-500" />
              <span>Measurable Impact &amp; Results</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.caseStudy.impact.map((imp, i) => (
                <div key={i} className="p-4 rounded-xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 text-xs text-slate-800 dark:text-slate-200">
                  <span className="font-semibold block mb-1 text-emerald-600 dark:text-emerald-400">Impact Metric #{i+1}</span>
                  {imp}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="p-6 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.click()}
                className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-white text-xs font-medium flex items-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.click()}
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-2 transition-colors shadow-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>
                  {project.links.live.includes('play.google') ? 'View on Google Play' : 'Live Deployment'}
                </span>
              </a>
            )}
          </div>

          <button
            onClick={() => { sound.click(); onClose(); }}
            className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
