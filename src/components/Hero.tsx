import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import {
  FileDown,
  Briefcase,
  FolderGit2,
  Mail,
  MapPin,
  ShieldCheck,
  Building,
  Sparkles,
  Cpu,
  Layers,
  Database,
  Code2,
  CheckCircle2,
  Flame,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { ProfilePhotoCard } from './ProfilePhotoCard';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onOpenResume: () => void;
}

interface FloatingBadge {
  id: string;
  label: string;
  category: string;
  icon: React.ElementType;
  color: string;
  position: string;
  delay: number;
  floatDuration: number;
}

const floatingTechBadges: FloatingBadge[] = [
  {
    id: 'badge-qa',
    label: 'QA Testing',
    category: 'Functional & UAT',
    icon: ShieldCheck,
    color: 'from-emerald-500/20 to-teal-500/10 border-emerald-400/40 text-emerald-300',
    position: '-top-4 -left-6 sm:-left-10',
    delay: 0.1,
    floatDuration: 4.2,
  },
  {
    id: 'badge-selenium',
    label: 'Selenium',
    category: 'WebDriver BDD',
    icon: Cpu,
    color: 'from-sky-500/25 to-blue-500/10 border-sky-400/40 text-sky-300',
    position: '-top-5 -right-4 sm:-right-8',
    delay: 0.3,
    floatDuration: 5.1,
  },
  {
    id: 'badge-automation',
    label: 'Automation',
    category: 'Cucumber Framework',
    icon: Layers,
    color: 'from-indigo-500/25 to-purple-500/10 border-indigo-400/40 text-indigo-300',
    position: 'top-1/3 -left-8 sm:-left-14',
    delay: 0.5,
    floatDuration: 4.8,
  },
  {
    id: 'badge-sql',
    label: 'SQL',
    category: 'Database Validation',
    icon: Database,
    color: 'from-amber-500/25 to-orange-500/10 border-amber-400/40 text-amber-300',
    position: 'top-1/2 -right-8 sm:-right-12',
    delay: 0.2,
    floatDuration: 5.5,
  },
  {
    id: 'badge-python',
    label: 'Python',
    category: 'Applied Programming',
    icon: Code2,
    color: 'from-blue-500/25 to-cyan-500/10 border-blue-400/40 text-blue-300',
    position: '-bottom-5 -left-4 sm:-left-8',
    delay: 0.4,
    floatDuration: 4.6,
  },
  {
    id: 'badge-ai',
    label: 'Healthcare AI',
    category: 'MediExplain Project',
    icon: Sparkles,
    color: 'from-rose-500/25 to-pink-500/10 border-rose-400/40 text-rose-300',
    position: '-bottom-4 -right-4 sm:-right-6',
    delay: 0.6,
    floatDuration: 5.3,
  },
];

const highlightPills = [
  { name: 'Banking Domain QA', color: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400' },
  { name: 'Selenium WebDriver', color: 'bg-sky-500/15 border-sky-500/30 text-sky-400' },
  { name: 'Cucumber BDD', color: 'bg-teal-500/15 border-teal-500/30 text-teal-300' },
  { name: 'Jira Defect Retest', color: 'bg-indigo-500/15 border-indigo-500/30 text-indigo-300' },
  { name: 'SQL Validation', color: 'bg-amber-500/15 border-amber-500/30 text-amber-400' },
  { name: 'Agile Sprint Cycles', color: 'bg-purple-500/15 border-purple-500/30 text-[#DDD6FE]' },
];

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { isLight } = useTheme();

  // Parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Hero Content: Headline, Narrative, Multi-Color Highlights */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Status Badge with Glowing Dot */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border backdrop-blur-md shadow-sm ${
                isLight
                  ? 'border-purple-300 bg-white/90 text-purple-950'
                  : 'border-[#C4B5FD]/40 bg-[#17132B]/90 text-[#FAF7FD]'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs font-mono tracking-wider font-semibold">
                QA ANALYST &bull; COGNIZANT ALUM &bull; MCA CANDIDATE
              </span>
            </motion.div>

            {/* Candidate Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1
                id="hero-name"
                className={`text-4xl sm:text-6xl font-['Outfit'] font-extrabold tracking-tight leading-[1.08] ${
                  isLight ? 'text-slate-900' : 'text-[#FAF7FD]'
                }`}
              >
                Achsah Florance
              </h1>
              
              <div
                id="hero-title"
                className="text-lg sm:text-2xl font-semibold flex items-center gap-2 flex-wrap"
              >
                <span className="text-[#A78BFA] font-bold">QA Analyst</span>
                <span className="text-slate-400 font-normal">|</span>
                <span className="text-sky-400 font-bold">MCA Student</span>
                <span className="text-slate-400 font-normal">&bull;</span>
                <span className={`text-sm sm:text-base font-normal ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                  Banking Applications &amp; Automation Testing
                </span>
              </div>
            </motion.div>

            {/* Impressive Narrative from Verified Resume */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-base sm:text-lg leading-relaxed font-normal ${
                isLight ? 'text-slate-700' : 'text-slate-300'
              }`}
            >
              Software Quality Assurance Analyst with hands-on enterprise experience at{' '}
              <span className={isLight ? 'text-slate-950 font-bold' : 'text-white font-bold'}>Cognizant</span> verifying high-volume banking systems. Skilled in manual test case authoring, regression cycles, Selenium WebDriver, Cucumber BDD frameworks, Jira defect lifecycles, and SQL validation. Currently pursuing a Master of Computer Applications (MCA) at{' '}
              <span className={isLight ? 'text-slate-950 font-bold' : 'text-white font-bold'}>Vignan University</span>.
            </motion.p>

            {/* Multi-Color Technical Highlight Chips */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-2 pt-1"
            >
              {highlightPills.map((pill) => (
                <span
                  key={pill.name}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold border flex items-center gap-1.5 transition-transform hover:scale-105 ${pill.color}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
                  {pill.name}
                </span>
              ))}
            </motion.div>

            {/* Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <button
                id="hero-exp-btn"
                type="button"
                onClick={() => scrollTo('experience')}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-['Outfit'] font-bold text-sm bg-gradient-to-r from-[#C4B5FD] via-[#DDD6FE] to-[#A78BFA] hover:opacity-95 text-[#130B24] shadow-lg shadow-purple-500/25 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <Briefcase className="w-4 h-4" />
                <span>Cognizant Experience</span>
              </button>

              <button
                id="hero-project-btn"
                type="button"
                onClick={() => scrollTo('projects')}
                className={`inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-['Outfit'] font-semibold text-sm border transition-all cursor-pointer shadow-sm ${
                  isLight
                    ? 'bg-white hover:bg-slate-50 text-slate-800 border-slate-300'
                    : 'bg-[#151B2E] hover:bg-[#1C243D] text-slate-100 border-slate-700'
                }`}
              >
                <FolderGit2 className="w-4 h-4 text-rose-400" />
                <span>MediExplain AI Project</span>
              </button>

              <button
                id="hero-resume-btn"
                type="button"
                onClick={onOpenResume}
                className={`inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-['Outfit'] font-semibold text-xs border transition-all cursor-pointer ${
                  isLight
                    ? 'bg-purple-50 hover:bg-purple-100 text-purple-900 border-purple-300'
                    : 'bg-white/5 hover:bg-white/10 text-[#DDD6FE] border-purple-400/30'
                }`}
              >
                <FileDown className="w-3.5 h-3.5 text-[#C4B5FD]" />
                <span>Official Resume</span>
              </button>
            </motion.div>

            {/* Quick Metadata Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`flex flex-wrap items-center gap-4 sm:gap-6 pt-3 text-xs font-mono border-t ${
                isLight
                  ? 'border-slate-200 text-slate-600'
                  : 'border-slate-800 text-slate-400'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-sky-400" />
                <span>Cognizant &bull; Vignan University</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#C4B5FD]" />
                <span>{personalInfo.email}</span>
              </div>
            </motion.div>

          </div>

          {/* Right Hero: Interactive QA Test Runner with Floating Multi-Color Badges & 3D Tilt */}
          <div className="lg:col-span-6 relative">
            <motion.div
              style={
                !isMobile
                  ? {
                      rotateX,
                      rotateY,
                      transformStyle: 'preserve-3d',
                    }
                  : {}
              }
              className="relative"
            >
              {/* Floating badges with distinct color identities */}
              {!isMobile &&
                floatingTechBadges.map((badge) => {
                  const Icon = badge.icon;
                  return (
                    <motion.div
                      key={badge.id}
                      className={`absolute ${badge.position} z-20 pointer-events-none hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl border bg-gradient-to-br ${badge.color} backdrop-blur-md shadow-xl`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -6, 0],
                      }}
                      transition={{
                        opacity: { duration: 0.4, delay: badge.delay },
                        scale: { duration: 0.4, delay: badge.delay },
                        y: {
                          duration: badge.floatDuration,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        },
                      }}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <div className="flex flex-col">
                        <span className="text-2xs font-bold font-mono tracking-tight leading-none">
                          {badge.label}
                        </span>
                        <span className="text-[9px] opacity-75 font-mono leading-tight">
                          {badge.category}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}

              {/* Candidate Profile Photo & Picture Upload Centerpiece */}
              <ProfilePhotoCard />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
