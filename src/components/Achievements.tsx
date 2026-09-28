import React from 'react';
import { Award, Sparkles, Check, Compass, Cpu, Target } from 'lucide-react';
import { achievements } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const getAchievementIcon = (id: string) => {
    switch (id) {
      case 'google-kaggle':
        return <Sparkles className="w-5 h-5 text-indigo-500" />;
      case 'infosys-pragati':
        return <Compass className="w-5 h-5 text-emerald-500" />;
      case 'sih-hackathon':
        return <Target className="w-5 h-5 text-amber-500" />;
      default:
        return <Award className="w-5 h-5 text-indigo-500" />;
    }
  };

  return (
    <section id="achievements" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-widest font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
            Programs & Competitions
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Key Achievements & Programs
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Verified milestones across competitive hackathons, machine learning programs, and software development training.
          </p>
        </div>

        {/* 3-Column Editorial Achievement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-2xs hover:border-indigo-300 dark:hover:border-indigo-800 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60">
                    {getAchievementIcon(item.id)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block mb-2">
                  Takeaways & Focus
                </span>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
