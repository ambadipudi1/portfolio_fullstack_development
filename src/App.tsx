import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { ResumeSection } from './components/ResumeSection';
import { ResumeModal } from './components/ResumeModal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0B0F17] dark:text-slate-100 flex flex-col transition-colors duration-200">
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        <main className="flex-grow">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Education />
          <ResumeSection onOpenResume={() => setIsResumeOpen(true)} />
          <Contact />
        </main>

        <Footer />

        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
