import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device or reduced motion
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (hasTouch || prefersReducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        'button, a, input, textarea, select, [role="button"], .interactive-cursor, .cursor-pointer'
      );
      setIsHovered(!!interactive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Pastel Lavender Ring */}
      <motion.div
        className="fixed rounded-full border border-[#C4B5FD]/50 pointer-events-none"
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 16),
          y: mousePosition.y - (isHovered ? 24 : 16),
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          backgroundColor: isHovered ? 'rgba(196, 181, 253, 0.2)' : 'rgba(221, 214, 254, 0.08)',
          borderColor: isHovered ? 'rgba(221, 214, 254, 0.8)' : 'rgba(196, 181, 253, 0.45)',
        }}
        transition={{
          type: 'spring',
          damping: 24,
          stiffness: 300,
          mass: 0.4,
        }}
      />

      {/* Center Micro Dot */}
      <motion.div
        className="fixed rounded-full pointer-events-none bg-[#DDD6FE]"
        animate={{
          x: mousePosition.x - (isHovered ? 4 : 2.5),
          y: mousePosition.y - (isHovered ? 4 : 2.5),
          width: isHovered ? 8 : 5,
          height: isHovered ? 8 : 5,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 450,
          mass: 0.15,
        }}
        style={{
          boxShadow: '0 0 10px rgba(196, 181, 253, 0.95)',
        }}
      />
    </div>
  );
};
