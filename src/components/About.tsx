import React from 'react';
import { motion } from 'motion/react';
import {
  Building2,
  GraduationCap,
  Cpu,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Database,
  ArrowRight,
  Code2,
  Layers,
  HeartPulse,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const About: React.FC = () => {
  const { isLight } = useTheme();

  // Multi-color pillars strictly verified from resume
  const pillars = [
    {
      id: 'pillar-qa',
      title: 'QA Analyst at Cognizant',
      metric: '1+ Year',
      subtitle: 'Banking Software QA',
      description:
        'Executed manual test cases, conducted regression and smoke suites, logged and verified defects in Jira, and supported UAT for enterprise banking systems.',
      icon: Building2,
      accentColor: 'text-sky-400',
      badgeBg: 'bg-sky-500/15 border-sky-400/30 text-sky-400',
      cardGlow: 'rgba(14, 165, 233, 0.12)',
      highlights: ['Manual & Functional Testing', 'Regression & Smoke Cycles', 'Jira Defect Lifecycle', 'Production Validation'],
    },
    {
      id: 'pillar-mca',
      title: 'MCA Postgraduate Studies',
      metric: '1st Year',
      subtitle: 'Vignan University',
      description:
        'Expanding computational rigor, software engineering models, database architecture, and advanced algorithmic design following completion of BCA at St. Ann’s College for Women.',
      icon: GraduationCap,
      accentColor: 'text-[#A78BFA]',
      badgeBg: 'bg-purple-500/15 border-purple-400/30 text-[#DDD6FE]',
      cardGlow: 'rgba(167, 139, 250, 0.12)',
      highlights: ['Computer Applications', 'Data Validation & SQL', 'Object-Oriented Programming', 'System Architecture'],
    },
    {
      id: 'pillar-auto',
      title: 'Automation Engineering',
      metric: 'BDD Stack',
      subtitle: 'Selenium & Cucumber',
      description:
        'Maintained and executed Selenium WebDriver automation scripts with Cucumber BDD framework to streamline test verification and maintain high regression coverage.',
      icon: Cpu,
      accentColor: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/15 border-emerald-400/30 text-emerald-400',
      cardGlow: 'rgba(16, 185, 129, 0.12)',
      highlights: ['Selenium WebDriver', 'Cucumber BDD Framework', 'TestNG & Script Debugging', 'Automated Regression Suites'],
    },
    {
      id: 'pillar-ai',
      title: 'Healthcare AI Application',
      metric: 'Applied ML',
      subtitle: 'MediExplain AI Project',
      description:
        'Engineered an innovative web application utilizing Generative AI and Google AI Studio to translate complex clinical terminology into clear, accessible plain language.',
      icon: HeartPulse,
      accentColor: 'text-rose-400',
      badgeBg: 'bg-rose-500/15 border-rose-400/30 text-rose-400',
      cardGlow: 'rgba(244, 63, 94, 0.12)',
      highlights: ['Google AI Studio', 'Generative AI', 'Medical Term Simplification', 'Modern Web Tech'],
    },
  ];

  return (
    <section
      id="about"
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
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>PROFILE &amp; CORE FOUNDATIONS</span>
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
            Engineering Quality &amp; Precision
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
            Combining real-world enterprise QA experience at Cognizant with advanced academic computer applications studies, test automation frameworks, and modern AI development.
          </motion.p>
        </div>

        {/* 4 Distinct Multi-Color Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`rounded-2xl border p-6 sm:p-7 space-y-5 transition-all relative overflow-hidden group shadow-lg ${
                  isLight
                    ? 'bg-white/90 border-slate-200 hover:border-slate-300 hover:shadow-xl'
                    : 'bg-[#111625]/90 border-slate-800 hover:border-slate-700 hover:shadow-2xl'
                }`}
              >
                {/* Subtle colorful background radial accent */}
                <div
                  className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform"
                  style={{ backgroundColor: pillar.cardGlow }}
                />

                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-2xs font-mono font-bold uppercase tracking-wider ${pillar.accentColor}`}>
                        {pillar.subtitle}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-2xs font-mono font-semibold border ${pillar.badgeBg}`}>
                        {pillar.metric}
                      </span>
                    </div>
                    <h3 className={`text-xl font-['Outfit'] font-bold ${
                      isLight ? 'text-slate-900' : 'text-[#FAF7FD]'
                    }`}>
                      {pillar.title}
                    </h3>
                  </div>

                  <div className={`p-3 rounded-xl border ${pillar.badgeBg} shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <p className={`text-sm leading-relaxed ${
                  isLight ? 'text-slate-600' : 'text-slate-300'
                }`}>
                  {pillar.description}
                </p>

                {/* Highlights tags */}
                <div className="pt-2 border-t border-slate-200/50 dark:border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.highlights.map((h, i) => (
                      <span
                        key={i}
                        className={`px-2.5 py-1 rounded-lg text-2xs font-mono font-medium border ${
                          isLight
                            ? 'bg-slate-100 text-slate-700 border-slate-200'
                            : 'bg-slate-900/80 text-slate-300 border-slate-800'
                        }`}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Narrative Callout Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`mt-10 p-6 sm:p-8 rounded-2xl border flex flex-col md:flex-row items-center justify-between gap-6 ${
            isLight
              ? 'bg-slate-50 border-slate-200 text-slate-800'
              : 'bg-[#101524] border-slate-800 text-slate-200'
          }`}
        >
          <div className="space-y-1.5 text-center md:text-left">
            <div className="text-2xs font-mono text-[#A78BFA] font-bold uppercase tracking-wider">
              Professional Summary
            </div>
            <p className="text-sm sm:text-base leading-relaxed max-w-3xl">
              &ldquo;{personalInfo.summary}&rdquo;
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>100% Resume-Backed</span>
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
