import React, { useEffect } from 'react';
import { X, Github, ExternalLink, ArrowRight, CheckCircle2, Layers, Server, Database, Sparkles } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="bg-white dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Title and Close Button */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-5 sm:p-6 bg-white/95 dark:bg-[#0B0F17]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {project.isFeatured && (
                <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-200 dark:border-indigo-900">
                  Featured System
                </span>
              )}
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                Detailed Technical Specification
              </span>
            </div>
            <h3 id="modal-project-title" className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-6 space-y-8">
          
          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-500 rounded-lg transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View Source on GitHub</span>
              </a>

              {project.liveDemoUrl ? (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Live Demo</span>
                </a>
              ) : (
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 px-3 py-1 bg-slate-100 dark:bg-slate-800/60 rounded-md border border-slate-200 dark:border-slate-700">
                  Demo: Configurable / Repo Active
                </span>
              )}
            </div>

            <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
              Ambadipudi Rupavani Repository
            </div>
          </div>

          {/* Problem & Solution Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800">
              <h4 className="text-xs uppercase tracking-wider font-bold text-rose-600 dark:text-rose-400 mb-2">
                Problem Addressed
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800">
              <h4 className="text-xs uppercase tracking-wider font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                Engineered Solution
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Pipeline Flow Diagram */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-900 dark:text-white">
                System Architecture
              </h4>
              <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400">
                {project.architectureSummary}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {project.architectureSteps.map((step, idx) => (
                <div
                  key={step.step}
                  className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5 relative shadow-2xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                      {step.step}
                    </span>
                    {idx < project.architectureSteps.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 hidden lg:block" />
                    )}
                  </div>
                  <h5 className="text-xs font-bold text-slate-900 dark:text-white">
                    {step.label}
                  </h5>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features Grid */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-900 dark:text-white mb-3">
              Key Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {project.keyFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Breakdown */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-900 dark:text-white mb-3">
              Technology Stack
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.techCategories.map((cat) => (
                <div
                  key={cat.category}
                  className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800"
                >
                  <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block mb-1">
                    {cat.category}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-mono text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Ambadipudi Rupavani Portfolio · Verified Technical Specs
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
