import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Building2,
  Calendar,
  MapPin,
  CheckCircle2,
  Briefcase,
  Layers,
  Cpu,
  Database,
  Code2,
  Terminal,
  ShieldCheck,
  Zap,
  Check,
  FileCheck2,
  GitBranch,
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

const experienceBadges = [
  { name: 'Banking Domain', color: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400' },
  { name: 'Manual Testing', color: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300' },
  { name: 'Selenium WebDriver', color: 'bg-sky-500/15 border-sky-500/30 text-sky-400' },
  { name: 'Cucumber BDD', color: 'bg-teal-500/15 border-teal-500/30 text-teal-300' },
  { name: 'Java', color: 'bg-amber-500/15 border-amber-500/30 text-amber-400' },
  { name: 'SQL Validation', color: 'bg-orange-500/15 border-orange-500/30 text-orange-400' },
  { name: 'Jira Defect Lifecycle', color: 'bg-indigo-500/15 border-indigo-500/30 text-indigo-300' },
  { name: 'Agile & Scrum', color: 'bg-purple-500/15 border-purple-500/30 text-[#DDD6FE]' },
];

export const Experience: React.FC = () => {
  const { isLight } = useTheme();
  const [activeCategory, setActiveCategory] = useState<'All' | 'Manual' | 'Automation' | 'Defects'>('All');
  const mainExp = experienceData[0];

  // Grouped responsibilities for crystal clarity
  const categorizedTasks = [
    {
      group: 'Manual & Functional QA',
      category: 'Manual',
      badgeColor: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30',
      items: [
        'Reviewed business and functional requirement documents to identify potential gaps early in the development lifecycle.',
        'Designed, authored, and executed comprehensive manual test cases covering functional, regression, smoke, and sanity testing.',
        'Conducted end-to-end testing for banking domain applications, validating transaction workflows, user accounts, and financial calculations.',
        'Supported User Acceptance Testing (UAT) by coordinating with business analysts to confirm systems met business objectives.',
      ],
    },
    {
      group: 'Test Automation & Frameworks',
      category: 'Automation',
      badgeColor: 'text-sky-400 bg-sky-500/15 border-sky-500/30',
      items: [
        'Maintained and executed automation test scripts using Selenium WebDriver with Java to support ongoing regression testing.',
        'Worked with Behavior-Driven Development (BDD) frameworks using Cucumber, authoring and executing readable feature files.',
        'Performed database testing by writing SQL queries to validate data integrity, transaction records, and backend updates.',
        'Verified software behavior across multiple browser environments and operating platforms to ensure uniform experience.',
      ],
    },
    {
      group: 'Defect Lifecycle & Collaboration',
      category: 'Defects',
      badgeColor: 'text-indigo-300 bg-indigo-500/15 border-indigo-500/30',
      items: [
        'Logged, tracked, and managed defects through Jira, documenting clear steps to reproduce, screenshots, and severity ratings.',
        'Participated actively in defect triage meetings, collaborating with developers to investigate root causes and verify fixes.',
        'Active participant in Agile/Scrum ceremonies including sprint planning, daily stand-up meetings, sprint reviews, and retrospectives.',
        'Prepared daily and weekly test execution status reports to provide transparency into testing progress and defect metrics.',
      ],
    },
  ];

  const visibleGroups =
    activeCategory === 'All'
      ? categorizedTasks
      : categorizedTasks.filter((g) => g.category === activeCategory);

  return (
    <section
      id="experience"
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
            <Briefcase className="w-3.5 h-3.5 text-sky-400" />
            <span>ENTERPRISE QA EXPERIENCE</span>
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
            Quality Assurance Analyst at Cognizant
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
            Verified professional tenure validating high-volume enterprise banking systems, safeguarding data integrity, and accelerating regression cycles through automation.
          </motion.p>
        </div>

        {/* Cognizant Experience Showcase Card */}
        <div
          className={`rounded-2xl border p-6 sm:p-8 space-y-7 shadow-2xl relative overflow-hidden backdrop-blur-xl ${
            isLight
              ? 'bg-white/95 border-slate-200 shadow-slate-200/50'
              : 'bg-[#111625]/95 border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
          }`}
        >
          {/* Header Strip with Cognizant branding */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 flex items-center justify-center text-white font-['Outfit'] font-extrabold text-xl shadow-lg shadow-blue-500/25 shrink-0">
                CTS
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className={`text-2xl font-['Outfit'] font-extrabold ${
                    isLight ? 'text-slate-900' : 'text-slate-100'
                  }`}>
                    {mainExp.role}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-sky-500/15 border border-sky-400/30 text-sky-400">
                    {mainExp.company}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono text-slate-400 flex-wrap">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{mainExp.period}</span>
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{mainExp.location}</span>
                  </span>
                  <span>&bull;</span>
                  <span className="text-emerald-400 font-semibold">1+ Year Verified Experience</span>
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-xl border text-center ${
                isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0B0F1A] border-slate-800'
              }`}>
                <div className="text-xs font-mono text-slate-400 uppercase">Domain</div>
                <div className="text-sm font-['Outfit'] font-extrabold text-emerald-400">Banking</div>
              </div>
              <div className={`p-3 rounded-xl border text-center ${
                isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0B0F1A] border-slate-800'
              }`}>
                <div className="text-xs font-mono text-slate-400 uppercase">Coverage</div>
                <div className="text-sm font-['Outfit'] font-extrabold text-sky-400">Manual + Auto</div>
              </div>
            </div>
          </div>

          {/* Multi-Color Skills & Tools Tags */}
          <div className="space-y-2">
            <div className="text-2xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Technologies &amp; Methodologies Applied:
            </div>
            <div className="flex flex-wrap gap-2">
              {experienceBadges.map((badge) => (
                <span
                  key={badge.name}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold border flex items-center gap-1.5 ${badge.color}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
                  {badge.name}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Category Filter for Responsibilities */}
          <div className="pt-2">
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className={`text-xs font-mono font-bold uppercase tracking-wider ${
                isLight ? 'text-slate-800' : 'text-slate-200'
              }`}>
                Key Responsibilities &amp; Enterprise Deliverables ({visibleGroups.flatMap(g => g.items).length} items):
              </span>
              
              <div className="flex items-center gap-1">
                {(['All', 'Manual', 'Automation', 'Defects'] as const).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer border ${
                      activeCategory === cat
                        ? 'bg-[#C4B5FD] text-[#0F0A22] border-[#C4B5FD] font-bold'
                        : isLight
                        ? 'bg-slate-100 text-slate-700 border-slate-200'
                        : 'bg-slate-900 text-slate-400 border-slate-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Categorized Task Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {visibleGroups.map((grp) => (
                <div
                  key={grp.group}
                  className={`p-4 rounded-xl border space-y-3 ${
                    isLight
                      ? 'bg-slate-50/80 border-slate-200'
                      : 'bg-[#0E1322] border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md border ${grp.badgeColor}`}>
                      {grp.group}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">{grp.items.length} tasks</span>
                  </div>

                  <ul className="space-y-2.5">
                    {grp.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs leading-relaxed">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5 stroke-[2.5]" />
                        <span className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Verification Callout */}
          <div className={`p-4 rounded-xl border flex items-center justify-between gap-4 text-xs font-mono ${
            isLight
              ? 'bg-slate-100/60 border-slate-200 text-slate-600'
              : 'bg-[#0B0F1A] border-slate-800 text-slate-400'
          }`}>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified Enterprise Tenure &bull; Hyderabad, India &bull; Cognizant Technology Solutions</span>
            </div>
            <span className="text-emerald-400 font-semibold hidden sm:inline">100% Resume Accurate</span>
          </div>

        </div>

      </div>
    </section>
  );
};
