import React, { useEffect } from 'react';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Github, Linkedin, Check } from 'lucide-react';
import { personalInfo, skillCategories, projects, educationList, achievements } from '../data/portfolioData';

// Configurable resume file path
export const RESUME_FILE_PATH = '/resume_ambadipudi_rupavani.pdf';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generates a clean text/pdf printable representation or opens download link
    const link = document.createElement('a');
    link.href = RESUME_FILE_PATH;
    link.download = 'Ambadipudi_Rupavani_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/75 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div
        className="bg-white dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 sm:p-5 bg-white/95 dark:bg-[#0B0F17]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-600 dark:text-indigo-400">
              Verified Candidate Profile
            </span>
            <h3 id="resume-title" className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Curriculum Vitae · {personalInfo.name}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              title="Print Resume or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors cursor-pointer"
              title="Download Resume File"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Clean ATS Resume Body */}
        <div className="p-6 sm:p-10 space-y-8 bg-white text-slate-900 font-sans print:p-0">
          {/* Header */}
          <div className="border-b border-slate-300 pb-5 text-center sm:text-left sm:flex sm:justify-between sm:items-end">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
                {personalInfo.name}
              </h1>
              <p className="text-sm font-semibold text-indigo-700 mt-1">
                {personalInfo.headline}
              </p>
              <p className="text-xs text-slate-600 mt-1">
                {personalInfo.degree} · CGPA: {personalInfo.cgpa}
              </p>
            </div>

            <div className="mt-4 sm:mt-0 text-xs text-slate-600 space-y-1 sm:text-right font-mono">
              <div className="flex sm:justify-end items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex sm:justify-end items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <a href={`mailto:${personalInfo.email}`} className="text-indigo-600 hover:underline">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex sm:justify-end items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>{personalInfo.phone}</span>
              </div>
            </div>
          </div>

          {/* Online Profiles */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600 bg-slate-50 p-2.5 rounded-md border border-slate-200">
            <span className="font-semibold text-slate-800">Profiles:</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>github.com/ambadipudi1</span>
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>linkedin.com/in/ambadipudi-rupavani</span>
            </a>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {educationList.map((edu) => (
                <div key={edu.id} className="text-xs flex flex-col sm:flex-row sm:justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900">{edu.institution}</h3>
                    <p className="text-slate-700">{edu.degree}</p>
                    <p className="text-slate-500 font-mono mt-0.5">
                      {edu.scoreLabel}: <strong className="text-slate-800">{edu.score}</strong>
                    </p>
                  </div>
                  <div className="text-slate-500 font-mono sm:text-right text-[11px] mt-1 sm:mt-0">
                    <span>{edu.period}</span>
                    <span className="block">{edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="leading-snug">
                  <strong className="text-slate-900">{cat.name}:</strong>{' '}
                  <span className="text-slate-700">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3">
              Technical Projects
            </h2>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="text-xs space-y-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <h3 className="font-bold text-slate-900 text-sm">
                      {proj.title} · <span className="text-slate-600 font-normal">{proj.subtitle}</span>
                    </h3>
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:underline font-mono text-[11px]"
                    >
                      {proj.githubUrl.replace('https://', '')}
                    </a>
                  </div>
                  <p className="text-[11px] font-mono text-slate-500">
                    Tech: {proj.technologies.join(' · ')}
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-600 pt-1">
                    {proj.keyFeatures.slice(0, 6).map((feat) => (
                      <span key={feat} className="flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-slate-400" />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3">
              Achievements & Programs
            </h2>
            <div className="space-y-2 text-xs">
              {achievements.map((ach) => (
                <div key={ach.id}>
                  <div className="flex items-baseline gap-2">
                    <h3 className="font-bold text-slate-900">{ach.title}</h3>
                    <span className="text-[11px] text-slate-500 font-mono">({ach.category})</span>
                  </div>
                  <p className="text-slate-600 text-[11px] mt-0.5">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            File target: <code className="font-mono text-indigo-500">{RESUME_FILE_PATH}</code>
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              Print
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors cursor-pointer"
            >
              Download PDF
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
