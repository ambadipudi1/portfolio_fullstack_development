import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailsModal } from './ProjectDetailsModal';
import { Sparkles, Terminal, Code2 } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProject = projects.find((p) => p.isFeatured) || projects[0];
  const secondaryProjects = projects.filter((p) => !p.isFeatured);

  return (
    <section id="projects" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-widest font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
            Production & Engineering Work
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Selected full-stack software applications demonstrating complete end-to-end architectures, relational databases, REST APIs, and modern AI integrations.
          </p>
        </div>

        {/* Projects Layout: Featured Flagship project leads on top, followed by 2 secondary projects */}
        <div className="space-y-8">
          
          {/* Flagship Prominent Featured Project (RUPA's Query) */}
          <div>
            <ProjectCard
              project={featuredProject}
              onViewDetails={(proj) => setSelectedProject(proj)}
            />
          </div>

          {/* Secondary Projects Grid (StudentPath AI and IoT Smart Waste) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {secondaryProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewDetails={(proj) => setSelectedProject(proj)}
              />
            ))}
          </div>

        </div>

      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
