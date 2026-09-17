import React from 'react';
import { ArrowUp, Mail, MapPin, ShieldCheck, Sparkles, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const { isLight } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className={`py-12 relative border-t transition-colors ${
        isLight
          ? 'bg-[#F0EAF9] text-purple-900/80 border-purple-200'
          : 'bg-[#0A0518] text-purple-300/80 border-purple-300/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b ${
          isLight ? 'border-purple-200' : 'border-purple-300/10'
        }`}>
          
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#C4B5FD]/20 border border-purple-300/30 flex items-center justify-center font-bold text-xs text-[#DDD6FE] font-mono">
                AF
              </div>
              <span className={`font-['Outfit'] font-bold text-base ${
                isLight ? 'text-purple-950' : 'text-[#FAF7FD]'
              }`}>
                {personalInfo.name}
              </span>
            </div>
            <p className={`text-xs ${
              isLight ? 'text-purple-800/80' : 'text-purple-300/70'
            }`}>
              {personalInfo.roleTitle} &bull; Cognizant Technology Solutions Alumni
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            <a
              href={`mailto:${personalInfo.email}`}
              className={`transition-colors flex items-center gap-1.5 ${
                isLight ? 'text-purple-900 hover:text-purple-700' : 'text-purple-200 hover:text-[#DDD6FE]'
              }`}
            >
              <Mail className="w-3.5 h-3.5 text-[#A78BFA]" />
              <span>{personalInfo.email}</span>
            </a>

            <span className={isLight ? 'text-purple-300' : 'text-purple-500/40'}>&bull;</span>

            <span className={`flex items-center gap-1.5 ${
              isLight ? 'text-purple-900' : 'text-purple-200'
            }`}>
              <MapPin className="w-3.5 h-3.5 text-[#C4B5FD]" />
              <span>{personalInfo.location}</span>
            </span>

            <span className={isLight ? 'text-purple-300' : 'text-purple-500/40'}>&bull;</span>

            <button
              type="button"
              onClick={onOpenResume}
              className="text-[#A78BFA] hover:text-[#C4B5FD] transition-colors underline underline-offset-4 cursor-pointer font-semibold"
            >
              View Official Resume
            </button>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className={`p-2.5 rounded-xl border text-xs font-mono transition-all cursor-pointer shadow-sm flex items-center gap-2 ${
              isLight
                ? 'bg-purple-100 hover:bg-purple-200 border-purple-300 text-purple-950'
                : 'bg-white/5 hover:bg-white/10 border-purple-300/20 text-[#DDD6FE]'
            }`}
            title="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="w-4 h-4 text-[#C4B5FD]" />
          </button>
        </div>

        <div className={`pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-2xs font-mono ${
          isLight ? 'text-purple-700' : 'text-purple-300/70'
        }`}>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span>100% Verified Content from Uploaded Resume &bull; Zero Fabrications</span>
          </div>

          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}. Pastel Lavender Theme.
          </div>
        </div>
      </div>
    </footer>
  );
};
