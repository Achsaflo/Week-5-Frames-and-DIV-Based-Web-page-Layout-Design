import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import {
  Sparkles,
  HeartPulse,
  Brain,
  Cpu,
  CheckCircle2,
  FolderGit2,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  Stethoscope,
  Code2,
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { InteractiveMediExplain } from './InteractiveMediExplain';
import { useTheme } from '../context/ThemeContext';

export const Projects: React.FC = () => {
  const project = projectsData[0]; // MediExplain AI
  const { isLight } = useTheme();

  const techBadges = [
    { name: 'Generative AI', color: 'bg-rose-500/15 border-rose-500/30 text-rose-400' },
    { name: 'Google AI Studio', color: 'bg-sky-500/15 border-sky-500/30 text-sky-400' },
    { name: 'Healthcare ML', color: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400' },
    { name: 'React & TS', color: 'bg-indigo-500/15 border-indigo-500/30 text-indigo-300' },
    { name: 'Tailwind CSS', color: 'bg-teal-500/15 border-teal-500/30 text-teal-300' },
  ];

  return (
    <section
      id="projects"
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
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>FEATURED AI &amp; HEALTHCARE PROJECT</span>
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
            MediExplain AI
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
            A healthcare AI web application engineered to translate complex clinical terminology into clear, accessible plain language, empowering patients to understand diagnostic documentation.
          </motion.p>
        </div>

        {/* Project Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Project Context & Metadata */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`rounded-2xl border p-6 space-y-5 transition-all shadow-2xl backdrop-blur-xl ${
                isLight
                  ? 'bg-white/95 border-slate-200 shadow-slate-200/50'
                  : 'bg-[#111625]/95 border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
              }`}
            >
              {/* Category & Verified Tag */}
              <div className="flex items-center justify-between">
                <span className="text-2xs font-mono text-rose-400 tracking-wider uppercase font-bold">
                  Healthcare &bull; Generative AI
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-2xs font-mono font-bold bg-purple-500/15 text-[#DDD6FE] border border-purple-400/30">
                  Academic Project
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-1">
                <h3 className={`text-2xl font-['Outfit'] font-extrabold ${
                  isLight ? 'text-slate-900' : 'text-slate-100'
                }`}>
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-sky-400 font-semibold">
                  {project.subtitle}
                </p>
              </div>

              {/* Core Description */}
              <p className={`text-xs sm:text-sm leading-relaxed ${
                isLight ? 'text-slate-700' : 'text-slate-300'
              }`}>
                {project.description}
              </p>

              {/* Key Features from Resume */}
              <div className="space-y-2.5 pt-2 border-t border-slate-200 dark:border-slate-800">
                <span className="text-2xs font-mono uppercase tracking-wider font-bold text-slate-400">
                  Core Capabilities
                </span>
                <ul className="space-y-2 text-xs">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Applied */}
              <div className="space-y-2.5 pt-2 border-t border-slate-200 dark:border-slate-800">
                <span className="text-2xs font-mono uppercase tracking-wider font-bold text-slate-400">
                  Technology Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {techBadges.map((tech) => (
                    <span
                      key={tech.name}
                      className={`px-2.5 py-1 rounded-lg text-2xs font-mono font-semibold border ${tech.color}`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer status */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-2xs font-mono text-slate-400">
                <span>Role: Full Lifecycle Creator</span>
                <span className="text-emerald-400 font-semibold">Interactive Demo Available</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Live Interactive Clinical-to-Plain-Language Simulator */}
          <div className="lg:col-span-8">
            <InteractiveMediExplain />
          </div>

        </div>

      </div>
    </section>
  );
};
