import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoaderProps {
  onComplete?: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setShow(false);
      onComplete?.();
      return;
    }

    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(() => onComplete?.(), 400); // allow exit animation to complete
    }, 900);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          id="intro-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#090E1F] text-[#F3EFE6]"
        >
          <div className="relative flex flex-col items-center">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-10 bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-purple-500/20 rounded-full blur-2xl opacity-70 animate-pulse" />

            {/* Futuristic Monogram Ring */}
            <div className="relative w-20 h-20 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="3"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="url(#loaderGrad)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="264"
                  initial={{ strokeDashoffset: 264 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 0.85, ease: 'easeInOut' }}
                />
                <defs>
                  <linearGradient id="loaderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38BDF8" />
                    <stop offset="50%" stopColor="#818CF8" />
                    <stop offset="100%" stopColor="#C084FC" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Monogram AF */}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.15 }}
                className="absolute text-xl font-extrabold tracking-wider bg-gradient-to-r from-white via-[#F8F6F0] to-sky-200 bg-clip-text text-transparent font-['Outfit']"
              >
                AF
              </motion.span>
            </div>

            {/* Soft-Tech Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.25 }}
              className="mt-4 flex items-center gap-2 text-2xs font-mono tracking-widest text-slate-400 uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
              <span>Achsah Florance &bull; QA Analyst</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
