import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/sound';
import { 
  Github, 
  ExternalLink, 
  GitCommit, 
  GitPullRequest, 
  GitBranch, 
  Flame, 
  Star, 
  Code2, 
  Terminal,
  Sparkles
} from 'lucide-react';

interface GitGridSectionProps {
  darkMode?: boolean;
}

export const GitGridSection: React.FC<GitGridSectionProps> = ({ darkMode }) => {
  const stats = [
    { label: 'Public Repositories', value: '10+', icon: GitBranch, color: 'text-purple-600 dark:text-purple-400' },
    { label: 'DSA Problems Solved', value: '350+', icon: Code2, color: 'text-pink-600 dark:text-pink-400' },
    { label: 'GFG Institutional Rank', value: '#1', icon: Flame, color: 'text-amber-500' },
    { label: 'PR Review & Merge Rate', value: '100%', icon: GitPullRequest, color: 'text-emerald-500' },
  ];

  return (
    <section id="git-activity" className="py-12 sm:py-16 relative animate-fadeIn">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush-100 dark:bg-purple-950/60 border border-blush-200 dark:border-purple-800/40 text-purple-700 dark:text-purple-300 text-xs font-mono mb-3">
            <GitCommit className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>GITHUB • OPEN SOURCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            GitHub<span className="text-purple-600">.</span>
          </h2>

          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
            A focused look at open-source work, repositories, and contribution activity.
          </p>
        </div>

        {/* Main Git Grid Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#111622] border border-blush-200 dark:border-slate-800 shadow-sm hover:border-purple-300 dark:hover:border-slate-700 transition-all">
          
          {/* Card Topline: Profile ID + GitHub link */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-100 dark:border-slate-800 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white shadow-md">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold font-display text-slate-900 dark:text-white">
                    Aditi Malviya
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 font-semibold">
                    @aditi-malviya666
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-sans mt-0.5">
                  Building open-source tools, ML models, and accessible web systems.
                </p>
              </div>
            </div>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.click()}
              className="px-4 py-2 rounded-full bg-slate-900 hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-2 transition-all self-start sm:self-auto shadow-xs active:scale-95"
            >
              <span>Follow on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* GitHub Contribution Heatmap */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-2.5">
              <span>Annual Contribution Heatmap</span>
              <span className="text-[11px] text-purple-600 dark:text-purple-400">365-day rolling timeline</span>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#0c1017] border border-slate-200/80 dark:border-slate-800/80 overflow-x-auto">
              <img
                src={`https://ghchart.rshah.org/${darkMode ? '9333ea' : '7c3aed'}/aditi-malviya666`}
                alt="GitHub Contributions Matrix for aditi-malviya666"
                className="w-full min-w-[650px] h-auto object-contain select-none"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent && !parent.querySelector('.gh-fallback')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'gh-fallback py-8 text-center';
                    fallback.innerHTML = '<span class="text-xs text-slate-400 font-mono">Live GitHub contributions chart active @aditi-malviya666</span>';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
            
            <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Less</span>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-sm bg-purple-100 dark:bg-slate-800" />
                <span className="w-2.5 h-2.5 rounded-sm bg-purple-300 dark:bg-purple-900" />
                <span className="w-2.5 h-2.5 rounded-sm bg-purple-500 dark:bg-purple-700" />
                <span className="w-2.5 h-2.5 rounded-sm bg-purple-700 dark:bg-purple-500" />
                <span className="w-2.5 h-2.5 rounded-sm bg-purple-900 dark:bg-purple-300" />
              </div>
              <span>More</span>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {stats.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/70 text-center"
                >
                  <div className={`text-xl sm:text-2xl font-extrabold font-mono ${s.color}`}>
                    {s.value}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-sans mt-0.5 flex items-center justify-center gap-1">
                    <Icon className="w-3 h-3 text-slate-400" />
                    <span className="truncate">{s.label}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
