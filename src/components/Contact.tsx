import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  MapPin,
  FileDown,
  Send,
  Check,
  Copy,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Linkedin,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('QA Analyst Opportunity');
  const [inquiryType, setInquiryType] = useState('Full-Time QA Role');
  const { isLight } = useTheme();

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleComposeEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `[${inquiryType}] ${subject}`
    )}&body=${encodeURIComponent(
      `Hello Achsah,\n\nI reviewed your QA Analyst portfolio and would like to connect with you regarding opportunities.\n\nBest regards,`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section
      id="contact"
      className={`py-28 relative overflow-hidden border-t transition-colors ${
        isLight
          ? 'border-slate-200/80 bg-slate-50/50'
          : 'border-slate-800/80 bg-[#080C16]/90'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Heading Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold border ${
              isLight
                ? 'bg-purple-100 text-purple-900 border-purple-300'
                : 'bg-[#C4B5FD]/15 text-[#DDD6FE] border-purple-400/30'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>OPEN FOR OPPORTUNITIES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-4xl sm:text-6xl font-['Outfit'] font-extrabold tracking-tight ${
              isLight ? 'text-slate-900' : 'text-[#FAF7FD]'
            }`}
          >
            Let&apos;s Connect
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-base sm:text-lg leading-relaxed ${
              isLight ? 'text-slate-700' : 'text-slate-300'
            }`}
          >
            Open to QA Analyst opportunities, test automation roles, and enterprise banking quality assurance initiatives.
          </motion.p>
        </div>

        {/* Primary Action Buttons with High Contrast */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          {/* 1. Email Me Button */}
          <motion.a
            id="contact-email-btn"
            href={`mailto:${personalInfo.email}?subject=QA%20Analyst%20Opportunity`}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl font-['Outfit'] font-bold text-sm text-[#0F172A] overflow-hidden bg-gradient-to-r from-purple-300 via-rose-200 to-indigo-300 shadow-xl hover:shadow-2xl transition-all cursor-pointer"
          >
            <Mail className="w-4 h-4 text-purple-900" />
            <span>Email Me</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-purple-900" />
          </motion.a>

          {/* 2. LinkedIn Button */}
          <motion.a
            id="contact-linkedin-btn"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`group inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl font-['Outfit'] font-bold text-sm border transition-all shadow-lg cursor-pointer ${
              isLight
                ? 'bg-white hover:bg-slate-50 text-slate-900 border-slate-300 shadow-slate-200/50'
                : 'bg-[#111625] hover:bg-[#182035] text-slate-100 border-slate-700 shadow-black/40'
            }`}
          >
            <Linkedin className="w-4 h-4 text-sky-400" />
            <span>LinkedIn</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-400 transition-colors" />
          </motion.a>

          {/* 3. Download Resume Button */}
          <motion.button
            id="contact-resume-btn"
            type="button"
            onClick={onOpenResume}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`group inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl font-['Outfit'] font-bold text-sm border transition-all shadow-lg cursor-pointer ${
              isLight
                ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-950 border-emerald-300'
                : 'bg-[#111625] hover:bg-[#182035] text-emerald-300 border-emerald-500/40 shadow-black/40'
            }`}
          >
            <FileDown className="w-4 h-4 text-emerald-400 group-hover:-translate-y-0.5 transition-transform" />
            <span>View &amp; Export Resume</span>
          </motion.button>
        </motion.div>

        {/* Contact Info Details & Interactive Quick Dispatch Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          {/* Left: Verified Contact Information Card */}
          <div className={`lg:col-span-5 rounded-2xl border p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-xl ${
            isLight
              ? 'bg-white/95 border-slate-200'
              : 'bg-[#111625]/95 border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
          }`}>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-purple-500/15 text-[#DDD6FE] border border-purple-400/30">
                <ShieldCheck className="w-5 h-5 text-[#A78BFA]" />
              </div>
              <div>
                <h3 className={`font-['Outfit'] font-extrabold text-base ${
                  isLight ? 'text-slate-900' : 'text-slate-100'
                }`}>
                  Verified Contact Details
                </h3>
                <p className="text-2xs font-mono text-slate-400">
                  Extracted directly from resume
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Email item with 1-click copy */}
              <div className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 ${
                isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0B0F1A] border-slate-800'
              }`}>
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-4 h-4 text-rose-400 shrink-0" />
                  <div className="overflow-hidden">
                    <div className="text-2xs font-mono uppercase text-slate-400 font-semibold">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className={`text-xs font-mono truncate block hover:underline font-semibold ${
                        isLight ? 'text-slate-900' : 'text-slate-200'
                      }`}
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  title="Copy email to clipboard"
                  className={`p-2 rounded-lg border transition-colors cursor-pointer shrink-0 ${
                    copied
                      ? 'bg-emerald-600 text-white border-emerald-500'
                      : isLight
                      ? 'bg-slate-200 hover:bg-slate-300 text-slate-800 border-slate-300'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
                  }`}
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Location item */}
              <div className={`p-3.5 rounded-xl border flex items-center gap-3 ${
                isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0B0F1A] border-slate-800'
              }`}>
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-2xs font-mono uppercase text-slate-400 font-semibold">
                    Location
                  </div>
                  <div className={`text-xs font-bold ${
                    isLight ? 'text-slate-900' : 'text-slate-100'
                  }`}>
                    {personalInfo.location}
                  </div>
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-xl border space-y-2 text-xs leading-relaxed ${
              isLight ? 'bg-slate-50 border-slate-200 text-slate-700' : 'bg-[#0B0F1A] border-slate-800 text-slate-300'
            }`}>
              <div className="font-bold text-2xs font-mono text-purple-400 uppercase">
                Recruiter Note
              </div>
              <p>
                Achsah Florance has completed 1+ year as a QA Analyst at Cognizant, validating high-volume enterprise banking systems, and is currently pursuing an MCA at Vignan University.
              </p>
            </div>
          </div>

          {/* Right: Quick Direct Email Form */}
          <div className={`lg:col-span-7 rounded-2xl border p-6 sm:p-8 space-y-5 shadow-2xl backdrop-blur-xl ${
            isLight
              ? 'bg-white/95 border-slate-200'
              : 'bg-[#111625]/95 border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
          }`}>
            <div className="space-y-1">
              <h3 className={`font-['Outfit'] font-extrabold text-xl ${
                isLight ? 'text-slate-900' : 'text-slate-100'
              }`}>
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400">
                Draft an email inquiry pre-populated with your preferred subject line.
              </p>
            </div>

            <form onSubmit={handleComposeEmail} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-2xs font-mono uppercase font-bold text-slate-400">
                  Inquiry Topic
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-colors cursor-pointer ${
                    isLight
                      ? 'bg-slate-50 border-slate-200 text-slate-900 focus:border-purple-500'
                      : 'bg-[#0B0F1A] border-slate-800 text-slate-100 focus:border-purple-400'
                  }`}
                >
                  <option value="Full-Time QA Role">Full-Time QA Analyst Opportunity</option>
                  <option value="Automation Engineer Role">Automation Testing / Selenium Role</option>
                  <option value="Technical Interview">Technical Interview Request</option>
                  <option value="Professional Networking">Professional Connection / Mentorship</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-2xs font-mono uppercase font-bold text-slate-400">
                  Subject Line
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Enter custom email subject..."
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-colors ${
                    isLight
                      ? 'bg-slate-50 border-slate-200 text-slate-900 focus:border-purple-500'
                      : 'bg-[#0B0F1A] border-slate-800 text-slate-100 focus:border-purple-400'
                  }`}
                />
              </div>

              <div className={`p-3.5 rounded-xl border text-xs leading-relaxed space-y-1 ${
                isLight ? 'bg-slate-50 border-slate-200 text-slate-700' : 'bg-[#0B0F1A] border-slate-800 text-slate-300'
              }`}>
                <div className="text-2xs font-mono text-sky-400 uppercase font-bold">
                  Pre-Populated Draft:
                </div>
                <p className="italic text-2xs text-slate-400">
                  &ldquo;Hello Achsah, I reviewed your QA Analyst portfolio and would like to connect with you regarding [{inquiryType}]...&rdquo;
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl font-['Outfit'] font-bold text-xs text-[#0F172A] bg-gradient-to-r from-purple-300 via-rose-200 to-indigo-300 hover:opacity-95 transition-opacity flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <Send className="w-4 h-4 text-purple-900" />
                <span>Open Email Client with Draft</span>
              </button>
            </form>
          </div>

        </div>

        {/* Footer info */}
        <div className={`mt-20 pt-8 border-t text-center text-xs font-mono space-y-2 ${
          isLight ? 'border-slate-200 text-slate-600' : 'border-slate-800 text-slate-400'
        }`}>
          <p>
            Designed &amp; Engineered for Achsah Florance &bull; QA Analyst &amp; MCA Student
          </p>
          <p className="text-2xs text-slate-500">
            Futuristic Soft-Tech Architecture &bull; Lavender Core with Multi-Color Depth &bull; 100% Verified Resume Content
          </p>
        </div>

      </div>
    </section>
  );
};
