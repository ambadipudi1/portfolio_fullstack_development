import React from 'react';
import { Github, ExternalLink, ArrowRight, Check, Code2, Database, Terminal, Sparkles } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  const isFeatured = project.isFeatured;

  return (
    <div
      className={`rounded-2xl transition-all duration-200 flex flex-col justify-between group ${
        isFeatured
          ? 'bg-white dark:bg-slate-900 border-2 border-indigo-500/30 dark:border-indigo-500/40 p-6 md:p-8 shadow-md hover:shadow-lg hover:border-indigo-500/60'
          : 'bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 shadow-2xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700'
      }`}
    >
      <div>
        {/* Top Header & Flags */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            {isFeatured ? (
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/70 px-2.5 py-1 rounded-md border border-indigo-200 dark:border-indigo-800">
                Flagship Project
              </span>
            ) : (
              <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400">
                Full-Stack System
              </span>
            )}
          </div>
          <span className="text-xs font-mono text-slate-400 dark:text-slate-500 hidden sm:inline">
            {project.technologies.slice(0, 3).join(' · ')}
          </span>
        </div>

        {/* Title and Subtitle */}
        <div className="mb-3">
          <h3
            className={`font-bold text-slate-900 dark:text-white tracking-tight ${
              isFeatured ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
            }`}
          >
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-0.5">
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Architecture flow indicator */}
        <div className="p-3 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200/70 dark:border-slate-800 mb-5">
          <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
            System Architecture
          </span>
          <p className="text-xs font-mono text-slate-700 dark:text-slate-300">
            {project.architectureSummary}
          </p>
        </div>

        {/* Key Features Preview */}
        <div className="mb-6">
          <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 block mb-2">
            Selected Capabilities
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600 dark:text-slate-300">
            {project.keyFeatures.slice(0, isFeatured ? 8 : 4).map((feat) => (
              <div key={feat} className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
          {project.keyFeatures.length > (isFeatured ? 8 : 4) && (
            <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-2">
              +{project.keyFeatures.length - (isFeatured ? 8 : 4)} more features in technical specification
            </p>
          )}
        </div>
      </div>

      {/* Footer: Tech badges and Action buttons */}
      <div>
        {/* Technology Badges */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mb-4">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 px-2 py-0.5 rounded border border-slate-200/60 dark:border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 rounded-lg transition-colors"
                aria-label={`View ${project.title} live demo`}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={() => onViewDetails(project)}
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors cursor-pointer"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
