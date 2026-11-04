import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-purple-700 dark:text-purple-300 text-xs font-semibold uppercase tracking-[0.16em] mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Work I’ve done<span className="text-purple-600">.</span>
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 font-sans max-w-2xl leading-relaxed">
            A short record of shipping product features, improving systems, and contributing to open source.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-5">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-blush-200 dark:border-slate-800 border-l-4 border-l-purple-400/70 shadow-xs hover:border-purple-400 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-blush-100 dark:border-slate-800 gap-2">
                  <div>
                    <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-purple-600 dark:text-purple-400 font-sans">
                      {exp.company}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-blush-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                      {exp.period}
                    </span>
                    <div className="text-[11px] text-slate-400 mt-1 font-sans">
                      {exp.location} • {exp.type}
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {exp.description}
                </p>

                <div className="mt-4 space-y-2">
                  {exp.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{ach}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-3 border-t border-blush-100 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-blush-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-sans border border-blush-200/50 dark:border-transparent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};
