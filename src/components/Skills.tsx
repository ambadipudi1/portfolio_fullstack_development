import React, { useState } from 'react';
import { Terminal, Layout, Server, Database, Brain, Lock, Wrench, Sparkles } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming':
        return <Terminal className="w-4 h-4 text-amber-500" />;
      case 'frontend':
        return <Layout className="w-4 h-4 text-sky-500" />;
      case 'backend':
        return <Server className="w-4 h-4 text-emerald-500" />;
      case 'databases':
        return <Database className="w-4 h-4 text-indigo-500" />;
      case 'ai_ml':
        return <Brain className="w-4 h-4 text-purple-500" />;
      case 'security':
        return <Lock className="w-4 h-4 text-rose-500" />;
      case 'tools':
        return <Wrench className="w-4 h-4 text-teal-500" />;
      default:
        return <Sparkles className="w-4 h-4 text-indigo-500" />;
    }
  };

  const filteredCategories =
    selectedFilter === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === selectedFilter);

  return (
    <section id="skills" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
              Capabilities
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Technical Skills
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-xl">
              Categorized competencies across software engineering, modern client frameworks, relational databases, and artificial intelligence integration.
            </p>
          </div>

          {/* Filter Bar (Segmented Controls) */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200/80 dark:border-slate-800 overflow-x-auto max-w-full">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Categories
            </button>
            <button
              onClick={() => setSelectedFilter('frontend')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedFilter === 'frontend'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setSelectedFilter('backend')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedFilter === 'backend'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Backend
            </button>
            <button
              onClick={() => setSelectedFilter('databases')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedFilter === 'databases'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Databases
            </button>
            <button
              onClick={() => setSelectedFilter('ai_ml')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedFilter === 'ai_ml'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              AI/ML
            </button>
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 rounded-xl p-5 shadow-2xs hover:border-indigo-300 dark:hover:border-indigo-800/80 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 group-hover:scale-105 transition-transform">
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {category.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skills list within category */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-950/60 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-600 dark:hover:text-indigo-300 px-2.5 py-1 rounded-md border border-slate-200/70 dark:border-slate-800 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
