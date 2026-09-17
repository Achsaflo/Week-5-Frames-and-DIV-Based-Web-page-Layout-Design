import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  BookOpen,
  Building,
  Sparkles,
  ArrowRight,
  Award,
} from 'lucide-react';
import { educationData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Education: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isLight } = useTheme();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const eduTheme = [
    {
      badge: 'bg-purple-500/15 border-purple-400/30 text-[#DDD6FE]',
      iconColor: 'text-[#A78BFA]',
      glow: 'rgba(167, 139, 250, 0.15)',
      stepBg: 'bg-gradient-to-br from-[#A78BFA] to-[#C4B5FD] text-[#130B24]',
    },
    {
      badge: 'bg-amber-500/15 border-amber-400/30 text-amber-400',
      iconColor: 'text-amber-400',
      glow: 'rgba(245, 158, 11, 0.15)',
      stepBg: 'bg-gradient-to-br from-amber-400 to-orange-500 text-[#130B24]',
    },
  ];

  return (
    <section
      id="education"
      ref={containerRef}
      className={`py-24 relative overflow-hidden border-t transition-colors ${
        isLight ? 'border-slate-200/80' : 'border-slate-800/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
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
            <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
            <span>ACADEMIC FOUNDATION</span>
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
            Education &amp; Academic Progression
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
            Advancing from Bachelor of Computer Applications fundamentals at St. Ann&apos;s College for Women to Master of Computer Applications studies at Vignan University.
          </motion.p>
        </div>

        {/* Desktop Timeline Grid */}
        <div className="hidden md:block relative py-6">
          
          {/* Track Line */}
          <div className={`absolute top-[4.5rem] left-12 right-12 h-1 rounded-full overflow-hidden ${
            isLight ? 'bg-slate-200' : 'bg-slate-800'
          }`}>
            <motion.div
              style={{ width: lineWidth }}
              className="h-full bg-gradient-to-r from-purple-400 via-sky-400 to-amber-400 rounded-full shadow-md"
            />
          </div>

          <div className="grid grid-cols-2 gap-8 relative z-10">
            {educationData.map((edu, idx) => {
              const isPresent = edu.status.includes('1st Year');
              const theme = eduTheme[idx % eduTheme.length];
              return (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="space-y-6"
                >
                  {/* Timeline Node Ring */}
                  <div className="flex items-center gap-3">
                    <div className="relative flex items-center justify-center">
                      <span className="relative flex h-8 w-8">
                        {isPresent && (
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                        )}
                        <span className={`relative inline-flex rounded-full h-8 w-8 items-center justify-center text-xs font-bold border-2 shadow-lg ${theme.stepBg} border-white`}>
                          {idx + 1}
                        </span>
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full border ${theme.badge}`}>
                        {edu.status}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {edu.period}
                      </span>
                    </div>
                  </div>

                  {/* Education Detail Card */}
                  <div
                    className={`rounded-2xl border p-6 sm:p-7 space-y-4 shadow-xl transition-all relative overflow-hidden backdrop-blur-xl ${
                      isLight
                        ? 'bg-white/95 border-slate-200 hover:border-slate-300 hover:shadow-2xl'
                        : 'bg-[#111625]/95 border-slate-800 hover:border-slate-700 hover:shadow-2xl'
                    }`}
                  >
                    <div
                      className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-xl pointer-events-none"
                      style={{ backgroundColor: theme.glow }}
                    />

                    <div className="space-y-1">
                      <h3 className={`text-xl font-['Outfit'] font-extrabold ${
                        isLight ? 'text-slate-900' : 'text-slate-100'
                      }`}>
                        {edu.degree}
                      </h3>
                      <div className={`flex items-center gap-2 text-sm font-bold ${theme.iconColor}`}>
                        <Building className="w-4 h-4" />
                        <span>{edu.institution}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{edu.location}</span>
                    </div>

                    <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
                      <span className="text-2xs font-mono uppercase tracking-wider font-bold text-slate-400">
                        Field &amp; Academic Scope:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        <span
                          className={`px-3 py-1 rounded-lg text-xs font-mono font-medium border ${
                            isLight
                              ? 'bg-slate-100 text-slate-800 border-slate-200'
                              : 'bg-slate-900 text-slate-200 border-slate-800'
                          }`}
                        >
                          {edu.field}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-lg text-xs font-mono font-bold border ${theme.badge}`}
                        >
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Education Timeline */}
        <div className="md:hidden space-y-4">
          {educationData.map((edu, idx) => {
            const theme = eduTheme[idx % eduTheme.length];
            return (
              <div
                key={edu.id}
                className={`rounded-2xl border p-5 space-y-3 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#111625] border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-2xs font-mono font-bold px-2 py-0.5 rounded-full border ${theme.badge}`}>
                    STEP {idx + 1} &bull; {edu.status}
                  </span>
                  <span className="text-2xs font-mono text-slate-400">{edu.period}</span>
                </div>

                <h3 className={`text-lg font-bold ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                  {edu.degree}
                </h3>
                <p className={`text-xs font-semibold ${theme.iconColor}`}>{edu.institution}</p>
                <p className="text-xs text-slate-400">{edu.field} &bull; {edu.location}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
