import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export const SoftTechBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });
  const { isLight } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    const isMobile = window.innerWidth < 768 || 'ontouchstart' in window;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const nodeCount = isMobile ? 22 : 48;
    const maxConnectionDistance = isMobile ? 85 : 125;

    // Palette with pastel lavender brand core + vibrant tech accents
    const nodeColors = isLight
      ? [
          'rgba(147, 112, 219, ', // Lavender
          'rgba(14, 165, 233, ',  // Cyan
          'rgba(16, 185, 129, ',  // Emerald
          'rgba(245, 158, 11, ',  // Amber
          'rgba(236, 72, 153, ',  // Rose
        ]
      : [
          'rgba(196, 181, 253, ', // Pastel Lavender
          'rgba(56, 189, 248, ',  // Sky Cyan
          'rgba(52, 211, 153, ',  // Mint Emerald
          'rgba(251, 191, 36, ',  // Warm Amber
          'rgba(244, 114, 182, ', // Soft Rose
        ];

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
      pulseSpeed: number;
      pulseOffset: number;
      colorIndex: number;
    }

    let nodes: Node[] = [];

    const initNodes = () => {
      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.35),
          vy: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.35),
          radius: Math.random() * 1.6 + 1.2,
          baseAlpha: Math.random() * 0.4 + 0.25,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulseOffset: Math.random() * Math.PI * 2,
          colorIndex: i % nodeColors.length,
        });
      }
    };

    initNodes();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    window.addEventListener('resize', handleResize);

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Mouse subtle interactive soft spotlight
      if (!isMobile) {
        mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
        mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

        if (mouseRef.current.x > 0 && mouseRef.current.y > 0) {
          const radial = ctx.createRadialGradient(
            mouseRef.current.x,
            mouseRef.current.y,
            0,
            mouseRef.current.x,
            mouseRef.current.y,
            380
          );
          if (isLight) {
            radial.addColorStop(0, 'rgba(196, 181, 253, 0.18)');
            radial.addColorStop(0.5, 'rgba(186, 230, 253, 0.08)');
            radial.addColorStop(1, 'rgba(255, 255, 255, 0)');
          } else {
            radial.addColorStop(0, 'rgba(196, 181, 253, 0.10)');
            radial.addColorStop(0.5, 'rgba(56, 189, 248, 0.04)');
            radial.addColorStop(1, 'rgba(0, 0, 0, 0)');
          }
          ctx.fillStyle = radial;
          ctx.fillRect(0, 0, width, height);
        }
      }

      // Draw nodes and multi-colored constellations
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (!prefersReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;

          if (!isMobile && mouseRef.current.x > 0) {
            const dx = node.x - mouseRef.current.x;
            const dy = node.y - mouseRef.current.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 140) {
              const force = (140 - dist) / 140;
              node.x += (dx / dist) * force * 0.6;
              node.y += (dy / dist) * force * 0.6;
            }
          }
        }

        const alpha =
          node.baseAlpha + Math.sin(frame * node.pulseSpeed + node.pulseOffset) * 0.18;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        const colorPrefix = nodeColors[node.colorIndex];
        ctx.fillStyle = `${colorPrefix}${Math.max(0.18, alpha)})`;
        ctx.fill();

        // Connect nearby nodes with delicate lines
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = node.x - nodeB.x;
          const dy = node.y - nodeB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxConnectionDistance) {
            const lineAlpha = (1 - distance / maxConnectionDistance) * (isLight ? 0.22 : 0.2);
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            
            if (isLight) {
              ctx.strokeStyle = `rgba(167, 139, 250, ${lineAlpha})`;
            } else {
              ctx.strokeStyle = `rgba(196, 181, 253, ${lineAlpha})`;
            }
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [isLight]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Base Canvas Background: deep cosmic obsidian in dark mode, crisp clean alabaster in light mode */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          isLight ? 'bg-[#F8FAFC]' : 'bg-[#0B0F19]'
        }`}
      />

      {/* Multi-Colored Soft-Tech Ambient Gradient Blobs (No boring single-color wash!) */}
      
      {/* 1. Signature Pastel Lavender & Lilac Glow (Top Left) */}
      <div
        className="absolute -top-28 -left-28 w-96 h-96 sm:w-[540px] sm:h-[540px] rounded-full blur-3xl pointer-events-none"
        style={{
          background: isLight
            ? 'radial-gradient(circle, rgba(196, 181, 253, 0.42) 0%, rgba(221, 214, 254, 0.18) 60%, transparent 100%)'
            : 'radial-gradient(circle, rgba(167, 139, 250, 0.24) 0%, rgba(139, 92, 246, 0.08) 65%, transparent 100%)',
        }}
      />

      {/* 2. Vibrant Sky & Electric Cyan Glow (Top Right) */}
      <div
        className="absolute top-10 -right-28 w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{
          background: isLight
            ? 'radial-gradient(circle, rgba(56, 189, 248, 0.28) 0%, rgba(186, 230, 253, 0.12) 60%, transparent 100%)'
            : 'radial-gradient(circle, rgba(14, 165, 233, 0.18) 0%, rgba(2, 132, 199, 0.05) 65%, transparent 100%)',
        }}
      />

      {/* 3. Refreshing Mint Emerald Glow (Mid-Bottom Left) */}
      <div
        className="absolute top-2/3 -left-20 w-72 h-72 sm:w-[460px] sm:h-[460px] rounded-full blur-3xl pointer-events-none"
        style={{
          background: isLight
            ? 'radial-gradient(circle, rgba(52, 211, 153, 0.25) 0%, rgba(167, 243, 208, 0.10) 60%, transparent 100%)'
            : 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(5, 150, 105, 0.04) 65%, transparent 100%)',
        }}
      />

      {/* 4. Warm Amber & Coral Soft Highlight (Bottom Right) */}
      <div
        className="absolute -bottom-24 right-1/4 w-80 h-80 sm:w-[480px] sm:h-[480px] rounded-full blur-3xl pointer-events-none"
        style={{
          background: isLight
            ? 'radial-gradient(circle, rgba(251, 191, 36, 0.22) 0%, rgba(253, 230, 138, 0.08) 60%, transparent 100%)'
            : 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, rgba(217, 119, 6, 0.03) 65%, transparent 100%)',
        }}
      />

      {/* Interactive Constellation Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Crisp Micro-Grid Grid Overlay for High-Tech Structure */}
      <div
        className="absolute inset-0 pointer-events-none [background-size:40px_40px]"
        style={{
          opacity: isLight ? 0.04 : 0.035,
          backgroundImage: isLight
            ? 'linear-gradient(to right, rgba(100,116,139,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(100,116,139,0.35) 1px, transparent 1px)'
            : 'linear-gradient(to right, rgba(148,163,184,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.25) 1px, transparent 1px)',
        }}
      />
    </div>
  );
};
