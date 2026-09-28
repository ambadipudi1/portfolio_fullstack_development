import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#0B0F17] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Identity & Subtitle */}
          <div className="text-center md:text-left">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {personalInfo.name}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {personalInfo.headline}
            </p>
            <p className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 mt-1">
              BUILD · SOLVE · LEARN · IMPROVE
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">
              ·
            </span>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">
              ·
            </span>

            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          {/* Copyright & Scroll to Top */}
          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
            <span>© 2026 {personalInfo.name}</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll back to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
