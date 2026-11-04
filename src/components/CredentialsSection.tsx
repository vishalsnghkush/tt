import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, CheckCircle2, ExternalLink, ShieldCheck, Trophy } from 'lucide-react';

const MILESTONES = [
  {
    title: 'FoT Hackathon · SIH 2024',
    detail: 'Internal hackathon at the University of Delhi',
    label: 'Hackathon',
  },
  {
    title: 'IISc ArtPark CodeForge Hackathon',
    detail: 'Adaptly AI prototype development round',
    label: 'Hackathon',
  },
];

export const CredentialsSection: React.FC = () => {
  const certifications = CERTIFICATIONS.filter((cert) => cert.id !== 'gfg-dsa');

  return (
    <section id="certifications" className="py-12 sm:py-16 relative animate-fadeIn">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-purple-700 dark:text-purple-300 text-xs font-semibold uppercase tracking-[0.16em] mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Credentials &amp; milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Proof of learning and practice<span className="text-purple-600">.</span>
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            A concise record of academic competitions, hackathons, and technical certifications.
          </p>
        </header>

        <section aria-labelledby="milestones-heading">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="w-4 h-4 text-amber-500" />
            <h3 id="milestones-heading" className="text-lg font-bold text-slate-900 dark:text-white">Competitive milestones</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {MILESTONES.map((milestone) => (
              <article key={milestone.title} className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">{milestone.title}</h4>
                  <Trophy className="w-4 h-4 text-amber-500 shrink-0" />
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{milestone.detail}</p>
                <span className="inline-block mt-3 text-xs text-purple-700 dark:text-purple-300">{milestone.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="certifications-heading" className="mt-12">
          <div className="flex items-end justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-purple-500" />
              <h3 id="certifications-heading" className="text-lg font-bold text-slate-900 dark:text-white">Technical certifications</h3>
            </div>
            <span className="text-sm text-slate-500 dark:text-slate-400">{certifications.length} credentials</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {certifications.map((cert) => (
              <article key={cert.id} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold text-purple-700 dark:text-purple-300">{cert.issuer}</p>
                    <h4 className="mt-1 text-base font-bold text-slate-900 dark:text-white leading-snug">{cert.title}</h4>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 shrink-0">{cert.year}</span>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 min-w-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span className="truncate">{cert.credentialId || 'Credential details'}</span>
                  </span>
                  {(cert.link || cert.certificateImage) ? (
                    <a href={cert.link || cert.certificateImage} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-purple-700 dark:text-purple-300 hover:underline shrink-0">
                      View certificate <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-xs text-slate-400 dark:text-slate-500 shrink-0">Link coming soon</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};
