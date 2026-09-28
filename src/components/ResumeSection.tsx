import React from 'react';
import { Download, FileText, Eye, CheckCircle2 } from 'lucide-react';
import { RESUME_FILE_PATH } from './ResumeModal';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResume }) => {
  const handleDirectDownload = () => {
    const link = document.createElement('a');
    link.href = RESUME_FILE_PATH;
    link.download = 'Ambadipudi_Rupavani_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-8 sm:p-12 shadow-sm text-center max-w-4xl mx-auto relative overflow-hidden">
          
          {/* Subtle gradient backdrop */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-indigo-500/10 dark:bg-indigo-500/15 blur-3xl pointer-events-none rounded-full" />

          <div className="inline-flex p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 mb-5 border border-indigo-100 dark:border-indigo-900/60">
            <FileText className="w-6 h-6" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Want to know more about my work?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Explore my resume to learn more about my technical skills, projects, education, and development experience.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleDirectDownload}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-sm hover:shadow transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
            >
              <Eye className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Preview Curriculum Vitae</span>
            </button>
          </div>

          {/* Verification highlight */}
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> ATS-Optimized Format
            </span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Verified Academic Track Record (9.04 CGPA)
            </span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Real Project Repositories
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
