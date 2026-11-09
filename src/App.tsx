import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ScenicBanner } from './components/ScenicBanner';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { DsaSection } from './components/DsaSection';
import { CredentialsSection } from './components/CredentialsSection';
import { GitGridSection } from './components/GitGridSection';
import { SkillsSection } from './components/SkillsSection';
import { Footer } from './components/Footer';
import { PetFooter } from './components/PetFooter';
import { CaseStudyModal } from './components/CaseStudyModal';
import { Project } from './types';
import { sound } from './utils/sound';
import { ArrowRight, ArrowUp, Sparkles } from 'lucide-react';

const SectionEnd: React.FC<{ label: string; desc: string; nextLabel: string; nextSection: string; onNavigate: (s: string) => void }> = ({ label, desc, nextLabel, nextSection, onNavigate }) => (
  <div className="max-w-4xl mx-auto px-4 pt-4 pb-6">
    {/* Pets sitting at the bottom of section */}
    <PetFooter compact />
    <div className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-blush-200 dark:border-slate-800 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
      <div className="text-left">
        <div className="text-[11px] font-mono text-purple-500 dark:text-purple-400 font-semibold flex items-center gap-1.5">
          <Sparkles className="w-3 h-3" />
          <span>SECTION COMPLETE • {label}</span>
        </div>
        <div className="text-sm font-medium text-slate-700 dark:text-slate-200 mt-0.5">{desc}</div>
      </div>
      <button
        onClick={() => onNavigate(nextSection)}
        className="px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-2 shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer shrink-0"
      >
        <span>{nextLabel}</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  </div>
);

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [accentColor] = useState<string>('#A855F7');
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const navigateTo = (sectionId: string) => {
    sound.click();
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative font-sans text-slate-800 dark:text-slate-100 bg-[#FAF3F8] dark:bg-[#0B0E14] transition-colors duration-500 selection:bg-pink-300/40 selection:text-purple-900 dark:selection:bg-purple-900/40 dark:selection:text-purple-200">
      
      <Navbar
        activeSection={activeSection}
        onSelectSection={navigateTo}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
      />

      <main className="min-h-[80vh] transition-all">

        {/* 1. ABOUT */}
        {activeSection === 'about' && (
          <div className="animate-fadeIn">
            <ScenicBanner darkMode={darkMode} setDarkMode={setDarkMode} onNavigate={navigateTo} />
            <AboutSection darkMode={darkMode} onNavigate={navigateTo} />
            <SectionEnd
              label="ABOUT ME"
              desc="See 11 real production projects with live demos and GitHub repos."
              nextLabel="Explore Projects"
              nextSection="projects"
              onNavigate={navigateTo}
            />
          </div>
        )}

        {/* 2. PROJECTS */}
        {activeSection === 'projects' && (
          <div className="pt-16 animate-fadeIn">
            <ProjectsSection onOpenCaseStudy={(project) => setActiveCaseStudy(project)} />
            <SectionEnd
              label="11 FEATURED PROJECTS"
              desc="Explore professional engineering milestones and open source contributions."
              nextLabel="View Experience"
              nextSection="experience"
              onNavigate={navigateTo}
            />
          </div>
        )}

        {/* 3. EXPERIENCE */}
        {activeSection === 'experience' && (
          <div className="pt-16 animate-fadeIn">
            <ExperienceTimeline />
            <SectionEnd
              label="EXPERIENCE TIMELINE"
              desc="Problem-solving milestones, GFG FoT Rank #1, and competitive DSA analytics."
              nextLabel="Explore DSA"
              nextSection="dsa"
              onNavigate={navigateTo}
            />
          </div>
        )}

        {/* 4. DSA */}
        {activeSection === 'dsa' && (
          <div className="pt-16 animate-fadeIn">
            <DsaSection />
            <SectionEnd
              label="DSA & PROBLEM SOLVING"
              desc="Academic standing, CGPA 8.7, and competitive hackathon achievements."
              nextLabel="View Education"
              nextSection="education"
              onNavigate={navigateTo}
            />
          </div>
        )}

        {/* 5. EDUCATION */}
        {activeSection === 'education' && (
          <div className="pt-16 animate-fadeIn">
            <EducationSection />
            <SectionEnd
              label="ACADEMIC FOUNDATION"
              desc="Verified credentials in IBM AI, GFG DSA Mastery, and SIH Hackathon."
              nextLabel="View Certifications"
              nextSection="certifications"
              onNavigate={navigateTo}
            />
          </div>
        )}

        {/* 6. CERTIFICATIONS */}
        {activeSection === 'certifications' && (
          <div className="pt-16 animate-fadeIn">
            <CredentialsSection />
            <SectionEnd
              label="CREDENTIALS COMPLETE"
              desc="Continuous GitHub commits, open-source repositories, and code matrix."
              nextLabel="Explore Git Activity"
              nextSection="git-grid"
              onNavigate={navigateTo}
            />
          </div>
        )}

        {/* 7. GIT */}
        {activeSection === 'git-grid' && (
          <div className="pt-16 animate-fadeIn">
            <GitGridSection darkMode={darkMode} />
            <SectionEnd
              label="GITHUB & OPEN SOURCE"
              desc="Explore design systems, frontend, backend APIs, and applied AI specializations."
              nextLabel="View Skills"
              nextSection="skills"
              onNavigate={navigateTo}
            />
          </div>
        )}

        {/* 8. SKILLS */}
        {activeSection === 'skills' && (
          <div className="pt-16 animate-fadeIn">
            <SkillsSection />
            <SectionEnd
              label="SKILLS & SPECIALIZATIONS"
              desc="Have an engineering role or collaborative project inquiry? Let’s connect."
              nextLabel="Contact Me"
              nextSection="contact"
              onNavigate={navigateTo}
            />
          </div>
        )}

        {/* 9. CONTACT */}
        {activeSection === 'contact' && (
          <div className="pt-16 animate-fadeIn">
            <Footer />
          </div>
        )}
      </main>

      <CaseStudyModal
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
      />

    </div>
  );
};
