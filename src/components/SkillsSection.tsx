import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { BrainCircuit, Code2, Palette, Server } from 'lucide-react';

const ICONS = [Palette, Code2, Server, BrainCircuit];

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-16 items-end mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-700 dark:text-purple-300 mb-3">03 / My toolkit</p>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight leading-[1.05]">
              The tools behind the work<span className="text-purple-600">.</span>
            </h2>
          </div>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
            A practical mix of languages, interfaces, intelligence, and reliable foundations — chosen for the problem, not the trend.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SKILL_CATEGORIES.map((category, index) => {
            const Icon = ICONS[index] || Code2;
            return (
              <article key={category.title} className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-700 transition-colors">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-purple-600 dark:text-purple-400 mb-2">{String(index + 1).padStart(2, '0')} /</p>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category.title}</h3>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{category.subtitle}</p>
                  </div>
                  <Icon className="w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0" />
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill.name} className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-sm text-slate-700 dark:text-slate-300">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
