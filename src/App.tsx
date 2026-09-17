import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { SoftTechBackground } from './components/SoftTechBackground';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Internship } from './components/Internship';
import { Strengths } from './components/Strengths';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function MainPortfolio() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const { isLight } = useTheme();

  const handleOpenResume = () => {
    setResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setResumeModalOpen(false);
  };

  return (
    <div
      className={`relative min-h-screen flex flex-col font-sans transition-colors duration-500 overflow-x-hidden selection:bg-[#C4B5FD] selection:text-[#130B24] ${
        isLight
          ? 'bg-[#FAF7FD] text-purple-950'
          : 'bg-[#0D071E] text-[#FAF7FD]'
      }`}
    >
      {/* 1. Subtle Loader Animation on Initial Mount */}
      <Loader />

      {/* 2. Desktop-Only Custom Interactive Cursor */}
      <CustomCursor />

      {/* 3. Interactive Soft-Tech Canvas Background with Ambient Nodes */}
      <SoftTechBackground />

      {/* 4. Translucent Floating Navigation Bar with Theme Toggle & Resume Action */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <Hero onOpenResume={handleOpenResume} />

        {/* About Section */}
        <About />

        {/* Experience Section */}
        <Experience />

        {/* Skills: Interactive Technology Constellation */}
        <Skills />

        {/* Projects: Featured MediExplain AI Centerpiece */}
        <Projects />

        {/* Education: Animated Journey Timeline */}
        <Education />

        {/* Certifications: Animated Floating Cards */}
        <Certifications />

        {/* Internship: Salesforce Project Internship */}
        <Internship />

        {/* Strengths: 6 Animated Minimalist Cards */}
        <Strengths />

        {/* Achievements: Measurable Impacts from Resume */}
        <Achievements />

        {/* Contact: Final Wow Moment with "Let's Connect" */}
        <Contact onOpenResume={handleOpenResume} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={handleOpenResume} />

      {/* ATS Resume Viewer & Download Modal */}
      <ResumeModal isOpen={resumeModalOpen} onClose={handleCloseResume} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainPortfolio />
    </ThemeProvider>
  );
}
