import React from 'react';
import { GraduationCap, MapPin, Award, Check, Code, Server, Database, Brain, Sparkles, Lightbulb } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const interests = [
    {
      title: 'Full Stack Development',
      description: 'Architecting cohesive web systems with responsive clients and typed server runtimes.',
      icon: <Code className="w-4 h-4 text-indigo-500" />,
    },
    {
      title: 'Backend Development',
      description: 'Building secure RESTful APIs, request validation, authentication, and performant routes.',
      icon: <Server className="w-4 h-4 text-emerald-500" />,
    },
    {
      title: 'SQL & Database Systems',
      description: 'Designing relational schemas, optimizing query performance, and maintaining ACID compliance.',
      icon: <Database className="w-4 h-4 text-sky-500" />,
    },
    {
      title: 'AI/ML & Generative AI',
      description: 'Integrating LLMs (Gemini API), prompt engineering workflows, and context-aware tutors.',
      icon: <Brain className="w-4 h-4 text-purple-500" />,
    },
    {
      title: 'Generative AI Applications',
      description: 'Empowering users with AI explanation modes, hint generation, and intelligent guidance.',
      icon: <Sparkles className="w-4 h-4 text-amber-500" />,
    },
    {
      title: 'Problem Solving',
      description: 'Applying algorithmic thinking, clean modular design, and iterative code refactoring.',
      icon: <Lightbulb className="w-4 h-4 text-rose-500" />,
    },
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-widest font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
            Background & Mindset
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative & Bio */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
            <p>
              I am a B.Tech Computer Science and Engineering student specializing in{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">
                Artificial Intelligence and Machine Learning
              </strong>{' '}
              at Malla Reddy College of Engineering and Technology.
            </p>

            <p>
              I enjoy developing practical applications that combine frontend development, backend
              engineering, databases, APIs, and AI technologies. Rather than building static mockups,
              I focus on building functional systems where intuitive user interfaces connect with
              reliable REST APIs, persistent relational databases, and intelligent AI models.
            </p>

            <div className="pt-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
                Core Areas of Interest
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {interests.map((item) => (
                  <div
                    key={item.title}
                    className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-start gap-3 shadow-2xs hover:border-indigo-300 dark:hover:border-indigo-800 transition-colors"
                  >
                    <div className="mt-0.5 p-1 rounded-md bg-slate-100 dark:bg-slate-800">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Facts Summary Box */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-5">
              <h3 className="text-sm font-bold tracking-tight text-slate-900 dark:text-white pb-3 border-b border-slate-100 dark:border-slate-800">
                Academic & Location Summary
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                      Education
                    </span>
                    <span className="font-semibold text-slate-900 dark:text-white text-xs sm:text-sm">
                      {personalInfo.degree}
                    </span>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5">
                      {personalInfo.college}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                      Academic Standing
                    </span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-lg font-bold font-mono text-slate-900 dark:text-white">
                        {personalInfo.cgpa}
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">
                        CGPA
                      </span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px]">
                      Expected Graduation: {personalInfo.expectedGraduation}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                      Location
                    </span>
                    <span className="font-semibold text-slate-900 dark:text-white text-xs sm:text-sm">
                      {personalInfo.location}
                    </span>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5">
                      Open to on-site, hybrid, and remote roles
                    </p>
                  </div>
                </div>
              </div>

              {/* Developer Mindset Highlight */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 block mb-2">
                  Approach to Engineering
                </span>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                    <span>Focus on practical full-stack projects over hypothetical theory</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                    <span>Real database schema design with SQL constraints & indices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                    <span>Applying AI pragmatically where it provides genuine user value</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
