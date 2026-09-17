import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  FileDown,
  Sparkles,
  Sun,
  Moon,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResume: () => void;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const { isLight, toggleTheme } = useTheme();

  useEffect(() => {
    const loadPic = () => {
      try {
        const saved = localStorage.getItem('achsah_profile_picture');
        setProfilePic(saved || null);
      } catch {
        // ignore
      }
    };

    loadPic();
    window.addEventListener('achsah_profile_picture_updated', loadPic);
    window.addEventListener('storage', loadPic);

    return () => {
      window.removeEventListener('achsah_profile_picture_updated', loadPic);
      window.removeEventListener('storage', loadPic);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sectionIds = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 220;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionId = sectionIds[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4"
    >
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border ${
          isLight
            ? isScrolled
              ? 'bg-white/95 backdrop-blur-xl border-slate-200 shadow-lg shadow-slate-200/50'
              : 'bg-white/80 backdrop-blur-md border-slate-200/60 shadow-xs'
            : isScrolled
              ? 'bg-[#0E1322]/95 backdrop-blur-xl border-slate-800 shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
              : 'bg-[#0E1322]/75 backdrop-blur-md border-slate-800/60 shadow-xs'
        }`}
      >
        {/* Brand Monogram & Name */}
        <a
          id="nav-logo"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#home');
          }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-purple-400 via-rose-300 to-sky-400 p-[1.5px] shadow-sm shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all overflow-hidden">
            {profilePic ? (
              <img
                src={profilePic}
                alt="Achsah Florance"
                referrerPolicy="no-referrer"
                className="w-full h-full rounded-[10px] object-cover"
              />
            ) : (
              <div
                className={`w-full h-full rounded-[10px] flex items-center justify-center font-['Outfit'] font-extrabold text-xs tracking-wider transition-colors ${
                  isLight
                    ? 'bg-white text-slate-900'
                    : 'bg-[#090D18] text-white'
                }`}
              >
                AF
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <span
              className={`font-['Outfit'] font-extrabold text-sm tracking-tight transition-colors group-hover:text-purple-400 ${
                isLight ? 'text-slate-900' : 'text-[#FAF7FD]'
              }`}
            >
              Achsah Florance
            </span>
            <span className="text-[11px] font-mono flex items-center gap-1.5 text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>QA Analyst &bull; MCA</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links with animated high contrast indicator */}
        <nav
          className={`hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-xl border transition-colors ${
            isLight
              ? 'bg-slate-100/80 border-slate-200'
              : 'bg-[#070B14]/80 border-slate-800'
          }`}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                id={`nav-item-${link.name.toLowerCase()}`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`relative px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  isActive
                    ? isLight
                      ? 'text-purple-900 font-bold'
                      : 'text-white font-bold'
                    : isLight
                      ? 'text-slate-600 hover:text-slate-950'
                      : 'text-slate-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    className={`absolute inset-0 rounded-lg border shadow-xs ${
                      isLight
                        ? 'bg-white border-purple-300 text-purple-900 shadow-sm'
                        : 'bg-[#182035] border-purple-400/50 text-white shadow-sm'
                    }`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Action: Theme Switcher + Resume Button */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Theme Switcher: Twilight / Cloud */}
          <button
            id="nav-theme-toggle"
            type="button"
            onClick={toggleTheme}
            className={`p-2 rounded-xl border transition-all cursor-pointer flex items-center gap-1.5 text-xs font-mono ${
              isLight
                ? 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200'
                : 'bg-[#13192B] border-slate-700 text-slate-200 hover:bg-[#1C253E]'
            }`}
            title={isLight ? 'Switch to Twilight Mode' : 'Switch to Cloud Mode'}
          >
            {isLight ? (
              <>
                <Moon className="w-3.5 h-3.5 text-purple-700" />
                <span className="hidden md:inline text-2xs font-bold">Twilight</span>
              </>
            ) : (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden md:inline text-2xs font-bold">Cloud</span>
              </>
            )}
          </button>

          {/* Resume Modal Trigger */}
          <button
            id="nav-resume-btn"
            type="button"
            onClick={onOpenResume}
            className={`group relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold overflow-hidden border transition-all shadow-sm cursor-pointer ${
              isLight
                ? 'bg-purple-600 hover:bg-purple-700 text-white border-purple-500 shadow-purple-600/20'
                : 'border-purple-400/40 bg-purple-500/20 hover:bg-purple-500/30 text-white shadow-purple-500/20'
            }`}
          >
            <FileDown className={`w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform ${
              isLight ? 'text-white' : 'text-purple-300'
            }`} />
            <span className="font-['Outfit']">Resume</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            id="nav-mobile-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-xl border transition-colors ${
              isLight
                ? 'border-slate-300 bg-slate-100 text-slate-900'
                : 'border-slate-700 bg-[#13192B] text-slate-200 hover:text-white'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`lg:hidden mt-2 rounded-2xl p-4 border shadow-2xl backdrop-blur-2xl ${
              isLight
                ? 'bg-white/95 border-slate-200 text-slate-900'
                : 'bg-[#0E1322]/95 border-slate-800 text-slate-100'
            }`}
          >
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleLinkClick(link.href)}
                  className={`px-3 py-2 rounded-xl text-left text-xs font-bold border transition-colors ${
                    activeSection === link.href.substring(1)
                      ? isLight
                        ? 'bg-purple-100 border-purple-300 text-purple-950'
                        : 'bg-purple-500/20 border-purple-400/40 text-[#DDD6FE]'
                      : isLight
                        ? 'bg-slate-50 border-slate-200 text-slate-700'
                        : 'bg-[#13192B] border-slate-800 text-slate-300'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="pt-3 mt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <button
                type="button"
                onClick={toggleTheme}
                className="text-xs font-mono text-slate-400 flex items-center gap-1.5 font-bold"
              >
                {isLight ? <Moon className="w-3.5 h-3.5 text-purple-600" /> : <Sun className="w-3.5 h-3.5 text-amber-400" />}
                <span>Theme: {isLight ? 'Cloud' : 'Twilight'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="px-3 py-1.5 rounded-xl bg-purple-600 text-white text-xs font-bold shadow-md"
              >
                View Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
