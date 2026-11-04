import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, BookOpen, CheckCircle2, Calendar, MapPin } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 relative animate-fadeIn">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blush-100 dark:bg-purple-950/60 border border-blush-200 dark:border-purple-800/40 text-purple-700 dark:text-purple-300 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Academic foundation<span className="text-purple-600">.</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 font-sans max-w-2xl">
            Computer Science and Engineering at the University of Delhi, with a focus on algorithms, AI/ML, and data-driven systems.
          </p>
        </div>

        {/* Primary University Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-blush-200 dark:border-slate-800 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-blush-100 dark:border-slate-800 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-600 dark:text-purple-400 font-bold mb-1">
                <span>UNDERGRADUATE DEGREE</span>
              </div>
              <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                {PERSONAL_INFO.education.institution}
              </h3>
              <p className="text-base text-slate-700 dark:text-slate-300 font-medium mt-1">
                {PERSONAL_INFO.education.degree}
              </p>
              <div className="flex items-center gap-4 text-xs text-slate-500 font-sans mt-2">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-pink-500" /> Delhi, India
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-purple-500" /> {PERSONAL_INFO.education.period}
                </span>
              </div>
            </div>

            {/* CGPA Badge */}
            <div className="p-4 rounded-xl bg-gradient-to-tr from-purple-50 to-pink-50 dark:from-purple-950/40 dark:to-pink-950/30 border border-purple-200 dark:border-purple-800/40 text-center min-w-[140px]">
              <div className="text-3xl font-extrabold font-mono text-purple-600 dark:text-purple-400">
                {PERSONAL_INFO.education.cgpa}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-sans font-medium mt-0.5">
                Cumulative CGPA
              </div>
            </div>
          </div>

          {/* Core Coursework Grid */}
          <div className="pt-6">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-purple-500" />
              <span>Key Technical Coursework &amp; Fundamentals</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {PERSONAL_INFO.education.courses.map((course, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-blush-50/60 dark:bg-slate-800/60 border border-blush-200/60 dark:border-slate-700/60 text-xs font-sans text-slate-800 dark:text-slate-200 flex items-center gap-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
