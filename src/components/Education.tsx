import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, Check } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-widest font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
            Academic Track Record
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Education
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Formal computer science engineering foundations with a specialization in AI and machine learning.
          </p>
        </div>

        {/* Clean Vertical Timeline */}
        <div className="max-w-4xl space-y-8 relative before:content-[''] before:absolute before:left-4 sm:before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
          {educationList.map((item) => (
            <div key={item.id} className="relative pl-11 sm:pl-16 group">
              {/* Timeline marker node */}
              <div className="absolute left-2.5 sm:left-4.5 top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-600 dark:border-indigo-400 group-hover:scale-125 transition-transform" />

              <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {item.institution}
                    </h3>
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-0.5">
                      {item.degree}
                    </p>
                  </div>

                  <div className="flex sm:flex-col sm:items-end gap-2 text-xs">
                    <span className="font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Score badge / callout */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/70 dark:border-emerald-800/60 mb-4">
                  <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">
                    {item.scoreLabel}:
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-900 dark:text-emerald-200">
                    {item.score}
                  </span>
                </div>

                {/* Coursework & Key Points */}
                {item.details && (
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 pt-2 border-t border-slate-100 dark:border-slate-800">
                    {item.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
