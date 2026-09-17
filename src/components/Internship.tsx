import React from 'react';
import { motion } from 'motion/react';
import {
  Cloud,
  Code2,
  Bug,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Settings,
  Sparkles,
} from 'lucide-react';
import { internshipData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Internship: React.FC = () => {
  const { isLight } = useTheme();

  return (
    <section
      id="internship"
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
            <Cloud className="w-3.5 h-3.5 text-sky-400" />
            <span>INTERNSHIP EXPERIENCE</span>
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
            Salesforce Project Internship
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
            Early-career project internship covering Salesforce CRM fundamentals, Apex programming, and platform test verification.
          </motion.p>
        </div>

        {/* Internship Main Presentation Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`rounded-2xl border p-6 sm:p-8 space-y-6 shadow-2xl transition-all relative overflow-hidden backdrop-blur-xl ${
            isLight
              ? 'bg-white/95 border-slate-200 hover:shadow-2xl'
              : 'bg-[#111625]/95 border-slate-800 hover:shadow-2xl'
          }`}
        >
          {/* Subtle background glow */}
          <div
            className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-2xl pointer-events-none"
            style={{ backgroundColor: 'rgba(14, 165, 233, 0.12)' }}
          />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-2xs font-mono uppercase tracking-wider text-sky-400 font-bold">
                  CRM &amp; CLOUD ENGINEERING
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-2xs font-mono font-bold bg-sky-500/15 text-sky-400 border border-sky-400/30">
                  {internshipData.type}
                </span>
              </div>
              <h3 className={`text-2xl font-['Outfit'] font-extrabold ${
                isLight ? 'text-slate-900' : 'text-slate-100'
              }`}>
                {internshipData.title}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <div className={`p-3 rounded-xl border flex items-center gap-2 text-xs font-mono ${
                isLight
                  ? 'bg-slate-50 border-slate-200 text-slate-800'
                  : 'bg-[#0B0F1A] border-slate-800 text-slate-300'
              }`}>
                <Settings className="w-4 h-4 text-sky-400" />
                <span>Apex &bull; Triggers &bull; Testing</span>
              </div>
            </div>
          </div>

          <p className={`text-sm sm:text-base leading-relaxed ${
            isLight ? 'text-slate-700' : 'text-slate-300'
          }`}>
            {internshipData.description}
          </p>

          <div className="space-y-3 pt-2">
            <span className="text-2xs font-mono uppercase tracking-wider font-bold text-slate-400">
              Key Learnings &amp; Focus Areas:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {internshipData.areasCovered.map((area, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-xl border flex items-start gap-2.5 transition-colors ${
                    isLight
                      ? 'bg-slate-50 border-slate-200 text-slate-700'
                      : 'bg-[#0B0F1A] border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs leading-relaxed">{area}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`p-3.5 rounded-xl border text-xs leading-relaxed ${
            isLight
              ? 'bg-slate-50 border-slate-200 text-slate-700'
              : 'bg-[#0B0F1A] border-slate-800 text-slate-300'
          }`}>
            <span className="font-bold text-sky-400">Context: </span>
            {internshipData.contextNote}
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-2xs font-mono text-slate-400">
            <span>Verified Salesforce Internship Certificate</span>
            <span className="text-emerald-400 font-semibold">100% Resume-Backed</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
