import React, { useState } from 'react';
import { ArrowRight, Download, Github, Linkedin, Terminal, Layers, Cpu, Database, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { personalInfo, technicalFlowNodes } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeNodeId, setActiveNodeId] = useState<string>('react');

  const activeNode = technicalFlowNodes.find((n) => n.id === activeNodeId) || technicalFlowNodes[0];

  const getNodeIcon = (id: string) => {
    switch (id) {
      case 'react':
        return <Layers className="w-4 h-4" />;
      case 'nodejs':
        return <Terminal className="w-4 h-4" />;
      case 'rest':
        return <ChevronRight className="w-4 h-4" />;
      case 'database':
        return <Database className="w-4 h-4" />;
      case 'ai':
        return <Sparkles className="w-4 h-4" />;
      default:
        return <Cpu className="w-4 h-4" />;
    }
  };

  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/5 dark:bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introductions & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/80 dark:border-indigo-800/60 px-3 py-1.5 rounded-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Full Stack & AI Software Roles</span>
            </div>

            <div className="space-y-2">
              <p className="text-base sm:text-lg font-medium text-slate-600 dark:text-slate-400">
                Hi, I'm <span className="text-slate-900 dark:text-white font-semibold">{personalInfo.name}</span>
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                {personalInfo.headline}
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {personalInfo.tagline}
            </p>

            {/* Credential summary tags */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 dark:text-slate-400 pt-1">
              <span>B.Tech CSE (AI & ML)</span>
              <span aria-hidden="true">·</span>
              <span>MRCET 2027</span>
              <span aria-hidden="true">·</span>
              <span>CGPA: 9.04 / 10</span>
              <span aria-hidden="true">·</span>
              <span>Hyderabad, India</span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 rounded-lg shadow-2xs transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Download Resume</span>
              </button>

              <div className="flex items-center gap-2 sm:ml-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 rounded-lg hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                  aria-label="GitHub Profile"
                  title="View GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                  aria-label="LinkedIn Profile"
                  title="View LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Subtle Technical Visual Showing Full-Stack Pipeline */}
          <div className="lg:col-span-5">
            <div className="bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/90 rounded-2xl p-5 md:p-6 shadow-sm backdrop-blur-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500 ml-2">
                    architecture.pipeline.flow
                  </span>
                </div>
                <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 font-medium">
                  End-to-End
                </span>
              </div>

              {/* Architecture Pipeline Flow Diagram: React → Node.js → REST APIs → Database → AI */}
              <div className="py-4">
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3 flex items-center justify-between">
                  <span>SYSTEM ARCHITECTURE PATTERN</span>
                  <span className="text-[10px] text-slate-400">Click to inspect</span>
                </div>

                <div className="grid grid-cols-5 gap-1.5 p-1 bg-slate-100 dark:bg-slate-950/70 rounded-xl border border-slate-200/70 dark:border-slate-800/60">
                  {technicalFlowNodes.map((node, index) => {
                    const isSelected = node.id === activeNodeId;
                    return (
                      <button
                        key={node.id}
                        onClick={() => setActiveNodeId(node.id)}
                        className={`flex flex-col items-center justify-center py-2.5 px-1 rounded-lg text-center transition-all cursor-pointer relative ${
                          isSelected
                            ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-xs border border-indigo-200/60 dark:border-indigo-900/50'
                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                        }`}
                        title={`Inspect ${node.title}`}
                      >
                        <div className="mb-1">{getNodeIcon(node.id)}</div>
                        <span className="text-[11px] font-semibold tracking-tight truncate max-w-full">
                          {node.title}
                        </span>
                        {index < technicalFlowNodes.length - 1 && (
                          <span
                            className="hidden"
                            aria-hidden="true"
                          >
                            →
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Node Detail Card */}
              <div className="bg-slate-50 dark:bg-slate-950/50 rounded-xl p-4 border border-slate-200/70 dark:border-slate-800/70 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                      {getNodeIcon(activeNode.id)}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {activeNode.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {activeNode.role}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Production Spec
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeNode.description}
                </p>

                <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800/80">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 block mb-1.5">
                    Stack Implementations
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeNode.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Philosophy quote */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span>Core Engineering Paradigm:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 tracking-wider">
                  BUILD → SOLVE → LEARN → IMPROVE
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
