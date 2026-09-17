import React from 'react';
import { motion } from 'motion/react';
import {
  Target,
  LineChart,
  MessageSquare,
  Users,
  Sparkles,
  Zap,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { strengthsData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

const iconMap: Record<string, React.ElementType> = {
  Target,
  LineChart,
  MessageSquare,
  Users,
  Sparkles,
  Zap,
};

const strengthAccents = [
  { text: 'text-emerald-400', border: 'hover:border-emerald-400/50', bg: 'bg-emerald-500/15 border-emerald-400/30 text-emerald-400', glow: 'rgba(16, 185, 129, 0.12)' },
  { text: 'text-sky-400', border: 'hover:border-sky-400/50', bg: 'bg-sky-500/15 border-sky-400/30 text-sky-400', glow: 'rgba(14, 165, 233, 0.12)' },
  { text: 'text-amber-400', border: 'hover:border-amber-400/50', bg: 'bg-amber-500/15 border-amber-400/30 text-amber-400', glow: 'rgba(245, 158, 11, 0.12)' },
  { text: 'text-[#DDD6FE]', border: 'hover:border-purple-400/50', bg: 'bg-purple-500/15 border-purple-400/30 text-[#DDD6FE]', glow: 'rgba(167, 139, 250, 0.12)' },
  { text: 'text-rose-400', border: 'hover:border-rose-400/50', bg: 'bg-rose-500/15 border-rose-400/30 text-rose-400', glow: 'rgba(244, 63, 94, 0.12)' },
  { text: 'text-indigo-300', border: 'hover:border-indigo-400/50', bg: 'bg-indigo-500/15 border-indigo-400/30 text-indigo-300', glow: 'rgba(99, 102, 241, 0.12)' },
];

export const Strengths: React.FC = () => {
  const { isLight } = useTheme();

  return (
    <section
      id="strengths"
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
            <span>CORE WORKING STYLE &amp; ATTRIBUTES</span>
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
            Professional Strengths &amp; Engineering Mindset
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
            Behavioral attributes extracted directly from verified resume experience, reflecting analytical rigor, adaptability, and cross-functional team communication.
          </motion.p>
        </div>

        {/* 4-Column Strengths Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengthsData.map((str, idx) => {
            const Icon = iconMap[str.iconName] || Sparkles;
            const accent = strengthAccents[idx % strengthAccents.length];

            return (
              <motion.div
                key={str.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`rounded-2xl border p-6 space-y-4 shadow-xl transition-all relative overflow-hidden backdrop-blur-xl ${
                  isLight
                    ? 'bg-white/95 border-slate-200 hover:border-slate-300 hover:shadow-2xl'
                    : 'bg-[#111625]/95 border-slate-800 hover:border-slate-700 hover:shadow-2xl'
                }`}
              >
                {/* Subtle colorful background radial accent */}
                <div
                  className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-xl pointer-events-none"
                  style={{ backgroundColor: accent.glow }}
                />

                <div className="flex items-center justify-between">
                  <div className={`p-2.5 rounded-xl border ${accent.bg}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xs font-mono text-slate-400">0{idx + 1}</span>
                </div>

                <div className="space-y-1.5">
                  <h3 className={`text-base font-['Outfit'] font-extrabold ${
                    isLight ? 'text-slate-900' : 'text-slate-100'
                  }`}>
                    {str.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${
                    isLight ? 'text-slate-600' : 'text-slate-300'
                  }`}>
                    {str.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-2xs font-mono text-slate-400">
                  <span>QA Attribute</span>
                  <span className={`font-semibold ${accent.text}`}>Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
