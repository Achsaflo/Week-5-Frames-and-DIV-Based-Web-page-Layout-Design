import React from 'react';
import { motion } from 'motion/react';
import {
  Trophy,
  Users2,
  TrendingUp,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { achievementsData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Achievements: React.FC = () => {
  const { isLight } = useTheme();

  const achievementItems = [
    {
      id: 'ach-1',
      title: 'Active Agile Sprint Collaboration',
      text: achievementsData[0], // "Actively participated in Agile stand-ups and sprint planning."
      detail: 'Collaborated closely with developers, business analysts, and QA leads across sprint rituals to ensure defect clarity and sprint delivery integrity.',
      icon: Users2,
      accentColor: 'text-[#A78BFA]',
      badgeBg: 'bg-purple-500/15 border-purple-400/30 text-[#DDD6FE]',
      glow: 'rgba(167, 139, 250, 0.15)',
      tag: 'AGILE CEREMONIES',
    },
    {
      id: 'ach-2',
      title: 'Test Coverage & Defect Tracking Efficiency',
      text: achievementsData[1], // "Contributed to improving test coverage and defect tracking efficiency."
      detail: 'Enhanced test coverage across banking workflows and tightened defect reporting life cycles through systematic Jira tracking and timely retesting.',
      icon: TrendingUp,
      accentColor: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/15 border-emerald-400/30 text-emerald-400',
      glow: 'rgba(16, 185, 129, 0.15)',
      tag: 'QA EFFICIENCY',
    },
  ];

  return (
    <section
      id="achievements"
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
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>MEASURABLE IMPACT &amp; RECOGNITION</span>
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
            Key Career Achievements
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
            Verified contributions directly cited from professional tenure, validating active participation in engineering sprints and continuous test improvement.
          </motion.p>
        </div>

        {/* 2-Column Achievement Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`p-6 sm:p-8 rounded-2xl border space-y-4 shadow-xl transition-all relative overflow-hidden backdrop-blur-xl ${
                  isLight
                    ? 'bg-white/95 border-slate-200 hover:border-slate-300 hover:shadow-2xl'
                    : 'bg-[#111625]/95 border-slate-800 hover:border-slate-700 hover:shadow-2xl'
                }`}
              >
                {/* Background glow */}
                <div
                  className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-xl pointer-events-none"
                  style={{ backgroundColor: item.glow }}
                />

                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl border ${item.badgeBg}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-2xs font-mono font-bold border ${item.badgeBg}`}>
                    {item.tag}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className={`text-xl font-['Outfit'] font-extrabold ${
                    isLight ? 'text-slate-900' : 'text-slate-100'
                  }`}>
                    {item.title}
                  </h3>
                  <div className={`text-xs font-mono font-bold ${item.accentColor}`}>
                    &ldquo;{item.text}&rdquo;
                  </div>
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed ${
                  isLight ? 'text-slate-600' : 'text-slate-300'
                }`}>
                  {item.detail}
                </p>

                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-2xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Cognizant Team Impact</span>
                  </span>
                  <span>Continuous Delivery</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
