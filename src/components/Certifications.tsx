import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Award,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Cloud,
  ChevronDown,
  FileCheck2,
  ExternalLink,
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface CertMetadata {
  icon: React.ElementType;
  accentColor: string;
  badgeBg: string;
  glow: string;
  tag: string;
  skillsLearned: string[];
}

const certConfig: Record<string, CertMetadata> = {
  'cert-salesforce': {
    icon: Cloud,
    accentColor: 'text-sky-400',
    badgeBg: 'bg-sky-500/15 border-sky-400/30 text-sky-400',
    glow: 'rgba(14, 165, 233, 0.15)',
    tag: 'INTERNSHIP CERTIFICATE',
    skillsLearned: [
      'Salesforce Fundamentals & Architecture',
      'Organizational Security & Profiles',
      'Apex Language Basics & Triggers',
      'Platform Testing & Sandbox Deployment',
    ],
  },
  'cert-selenium': {
    icon: Cpu,
    accentColor: 'text-cyan-400',
    badgeBg: 'bg-cyan-500/15 border-cyan-400/30 text-cyan-400',
    glow: 'rgba(6, 182, 212, 0.15)',
    tag: 'AUTOMATION CERTIFICATION',
    skillsLearned: [
      'Automation Testing Principles',
      'Selenium WebDriver Architecture',
      'Locator Strategies (XPath / CSS Locators)',
      'Regression Test Execution & Assertions',
    ],
  },
  'cert-manual-testing': {
    icon: ShieldCheck,
    accentColor: 'text-emerald-400',
    badgeBg: 'bg-emerald-500/15 border-emerald-400/30 text-emerald-400',
    glow: 'rgba(16, 185, 129, 0.15)',
    tag: 'QA VERIFICATION CERTIFICATION',
    skillsLearned: [
      'SDLC & STLC Test Phase Models',
      'Test Case Design & Boundary Value Analysis',
      'Defect Life Cycle & Severity Prioritization',
      'Functional & Acceptance Testing Standards',
    ],
  },
};

export const Certifications: React.FC = () => {
  const [expandedCert, setExpandedCert] = useState<string | null>(null);
  const { isLight } = useTheme();

  const toggleExpand = (id: string) => {
    setExpandedCert(expandedCert === id ? null : id);
  };

  return (
    <section
      id="certifications"
      className={`py-24 relative overflow-hidden border-t transition-colors ${
        isLight ? 'border-slate-200/80' : 'border-slate-800/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold mb-3 border ${
              isLight
                ? 'bg-purple-100 text-purple-900 border-purple-300'
                : 'bg-[#C4B5FD]/15 text-[#DDD6FE] border-purple-400/30'
            }`}
          >
            <Award className="w-3.5 h-3.5 text-emerald-400" />
            <span>CREDENTIALS &amp; QUALIFICATIONS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-3xl sm:text-4xl font-['Outfit'] font-extrabold tracking-tight ${
              isLight ? 'text-slate-900' : 'text-[#FAF7FD]'
            }`}
          >
            Certifications &amp; Training
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`mt-3 text-base sm:text-lg leading-relaxed ${
              isLight ? 'text-slate-700' : 'text-slate-300'
            }`}
          >
            Formally certified credentials in cloud platforms, Selenium test automation, and enterprise manual testing standards.
          </motion.p>
        </div>

        {/* 3 Distinct Multi-Color Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => {
            const config = certConfig[cert.id] || certConfig['cert-manual-testing'];
            const Icon = config.icon;
            const isExpanded = expandedCert === cert.id;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-2xl border p-6 flex flex-col justify-between space-y-4 shadow-xl transition-all relative overflow-hidden backdrop-blur-xl ${
                  isLight
                    ? 'bg-white/95 border-slate-200 hover:border-slate-300 hover:shadow-2xl'
                    : 'bg-[#111625]/95 border-slate-800 hover:border-slate-700 hover:shadow-2xl'
                }`}
              >
                {/* Background glow */}
                <div
                  className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-xl pointer-events-none"
                  style={{ backgroundColor: config.glow }}
                />

                <div className="space-y-4">
                  {/* Top metadata */}
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-xl border ${config.badgeBg}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full text-2xs font-mono font-bold border ${config.badgeBg}`}>
                      {config.tag}
                    </span>
                  </div>

                  {/* Title & Type */}
                  <div>
                    <h3 className={`text-lg font-['Outfit'] font-extrabold ${
                      isLight ? 'text-slate-900' : 'text-slate-100'
                    }`}>
                      {cert.title}
                    </h3>
                    <p className={`text-xs font-mono font-bold mt-1 ${config.accentColor}`}>
                      {cert.type}
                    </p>
                  </div>

                  {/* Core Description / Focus Area */}
                  <p className={`text-xs leading-relaxed ${
                    isLight ? 'text-slate-600' : 'text-slate-300'
                  }`}>
                    {cert.focusArea}
                  </p>
                </div>

                {/* Expandable Key Skills */}
                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
                  <button
                    type="button"
                    onClick={() => toggleExpand(cert.id)}
                    className="w-full flex items-center justify-between text-xs font-mono font-semibold text-slate-400 hover:text-slate-200 transition-colors cursor-pointer py-1"
                  >
                    <span>Curriculum Topics</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-emerald-400' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden space-y-1.5 pt-1"
                      >
                        {config.skillsLearned.map((skill, i) => (
                          <div
                            key={i}
                            className={`p-2 rounded-lg text-2xs font-mono flex items-center gap-2 border ${
                              isLight
                                ? 'bg-slate-50 border-slate-200 text-slate-700'
                                : 'bg-[#0B0F1A] border-slate-800 text-slate-300'
                            }`}
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                            <span>{skill}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
