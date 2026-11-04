import React from 'react';
import { ExternalLink, GitBranch, Trophy } from 'lucide-react';
import { sound } from '../utils/sound';

const PROFILE_LINKS = [
  {
    label: 'GeeksforGeeks',
    detail: 'Faculty of Technology profile',
    href: 'https://www.geeksforgeeks.org/profile/aditimalvkfc4?from=explore',
  },
  {
    label: 'LeetCode',
    detail: 'Problem-solving profile',
    href: 'https://leetcode.com/u/Aditi__Malviya/',
  },
];

const ARCHIVE = [
  {
    title: 'GeeksforGeeks FoT Institutional Rank #1',
    detail: 'Score 853 · 350+ DSA problems solved',
  },
  {
    title: '2nd Runner-Up · Offline Competitive Programming Contest',
    detail: 'Faculty of Technology, University of Delhi',
  },
  {
    title: 'Data Structures & Algorithms in Python',
    detail: 'GeeksforGeeks · credential link coming soon',
    href: '/certificates/DSA_.jpeg',
  },
];

export const DsaSection: React.FC = () => {
  return (
    <section id="dsa" className="py-12 sm:py-16 relative animate-fadeIn">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-14 items-end mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-700 dark:text-purple-300 mb-3">06 / Algorithmic thinking</p>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight leading-[1.05]">
              Behind the build, there’s the thinking<span className="text-purple-600">.</span>
            </h2>
          </div>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
            I keep the fundamentals sharp through data structures, algorithms, and deliberate problem solving.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-5">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-sm">
            <p className="text-xs uppercase tracking-[0.16em] text-purple-300">The problem-solving side</p>
            <div className="mt-5 text-6xl sm:text-7xl font-extrabold tracking-tight">350<span className="text-pink-400">+</span></div>
            <p className="mt-2 text-xl text-slate-200">DSA problems solved</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {['Data structures', 'Algorithms', 'C++', 'Python'].map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-md border border-slate-700 text-xs text-slate-300">{tag}</span>
              ))}
            </div>
            <div className="mt-8 pt-5 border-t border-slate-700">
              <p className="text-sm font-semibold text-white">GFG Faculty of Technology Rank #1</p>
              <p className="mt-1 text-sm text-slate-400">Institutional score: 853</p>
            </div>
          </div>

          <div className="space-y-3">
            {PROFILE_LINKS.map((profile) => (
              <a
                key={profile.label}
                href={profile.href}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.click()}
                className="flex items-center justify-between gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-700 transition-colors"
              >
                <span>
                  <span className="block text-base font-bold text-slate-900 dark:text-white">{profile.label}</span>
                  <span className="block mt-1 text-sm text-slate-500 dark:text-slate-400">{profile.detail}</span>
                </span>
                <ExternalLink className="w-4 h-4 text-purple-600 shrink-0" />
              </a>
            ))}

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-4 h-4 text-amber-500" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Problem-solving archive</h3>
              </div>
              <div className="space-y-3">
                {ARCHIVE.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <GitBranch className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{item.title}</p>
                      <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{item.detail}</p>
                      {item.href && (
                        <a href={item.href} target="_blank" rel="noreferrer" onClick={() => sound.click()} className="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-purple-700 dark:text-purple-300 hover:underline">
                          View certificate <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
