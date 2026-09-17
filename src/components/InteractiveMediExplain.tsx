import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Bot,
  Brain,
  Stethoscope,
  HeartPulse,
  Workflow,
  CheckCircle2,
  FileText,
  Activity,
  ArrowRight,
  ShieldCheck,
  Zap,
  RefreshCw,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface SampleTerm {
  id: string;
  term: string;
  category: string;
  categoryColor: string;
  rawClinicalDescription: string;
  plainLanguageExplanation: string;
  patientTakeaway: string;
}

const sampleTerms: SampleTerm[] = [
  {
    id: 'term-1',
    term: 'Myocardial Infarction',
    category: 'Cardiology',
    categoryColor: 'bg-rose-500/15 border-rose-500/30 text-rose-400',
    rawClinicalDescription:
      'Ischemic necrosis of myocardial tissue precipitated by acute occlusion of an epicardial coronary artery, demonstrated by elevated cardiac troponin levels and ST-segment alterations on ECG.',
    plainLanguageExplanation:
      'A heart attack. This happens when blood flow bringing vital oxygen to the heart muscle is suddenly blocked, causing part of the heart muscle tissue to be damaged.',
    patientTakeaway: 'Requires immediate emergency medical care to restore coronary blood flow.',
  },
  {
    id: 'term-2',
    term: 'Bilateral Pulmonary Infiltrates',
    category: 'Pulmonology',
    categoryColor: 'bg-sky-500/15 border-sky-500/30 text-sky-400',
    rawClinicalDescription:
      'High-attenuation opacities visible across bilateral lung parenchyma on chest radiography, indicative of alveolar fluid accumulation, exudates, or inflammatory response.',
    plainLanguageExplanation:
      'Fluid or swelling is detected inside both of your lungs. This is commonly seen in lung conditions such as pneumonia or chest infections.',
    patientTakeaway: 'Requires targeted antibiotic or respiratory treatment to clear fluid.',
  },
  {
    id: 'term-3',
    term: 'Hyperglycemia & Insulin Resistance',
    category: 'Endocrinology',
    categoryColor: 'bg-amber-500/15 border-amber-500/30 text-amber-400',
    rawClinicalDescription:
      'Suboptimal cellular glucose uptake secondary to impaired peripheral insulin sensitivity, producing chronic elevations in fasting plasma glucose >126 mg/dL.',
    plainLanguageExplanation:
      'High blood sugar levels where bodily cells stop responding properly to insulin, leaving excess sugar circulating in the bloodstream.',
    patientTakeaway: 'Managed through lifestyle adjustments, routine glucose checks, and medication.',
  },
  {
    id: 'term-4',
    term: 'Hypertension Stage 2',
    category: 'Vascular Health',
    categoryColor: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400',
    rawClinicalDescription:
      'Sustained systemic vascular resistance presenting systolic arterial pressure ≥140 mmHg or diastolic pressure ≥90 mmHg, elevating cardiovascular afterload.',
    plainLanguageExplanation:
      'High blood pressure that stays consistently elevated, making your heart work noticeably harder to pump blood through your arteries.',
    patientTakeaway: 'Requires monitored blood pressure reduction through diet, exercise, and clinical guidance.',
  },
];

export const InteractiveMediExplain: React.FC = () => {
  const [selectedTermId, setSelectedTermId] = useState<string>(sampleTerms[0].id);
  const [isProcessing, setIsProcessing] = useState(false);
  const { isLight } = useTheme();

  const selectedTerm = sampleTerms.find((t) => t.id === selectedTermId) || sampleTerms[0];

  const handleSelectTerm = (id: string) => {
    if (id === selectedTermId) return;
    setIsProcessing(true);
    setSelectedTermId(id);
    setTimeout(() => {
      setIsProcessing(false);
    }, 320);
  };

  return (
    <div
      id="mediexplain-interactive"
      className={`rounded-2xl backdrop-blur-xl border shadow-2xl overflow-hidden transition-all ${
        isLight
          ? 'bg-white/95 border-slate-200 shadow-slate-200/50'
          : 'bg-[#101524]/95 border-slate-700 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
      }`}
    >
      {/* Simulator Top Bar */}
      <div
        className={`px-5 py-3.5 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
          isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0A0E18] border-slate-800'
        }`}
      >
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-rose-500/15 text-rose-400 border border-rose-500/30 shadow-xs">
            <HeartPulse className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-['Outfit'] font-extrabold ${
                isLight ? 'text-slate-900' : 'text-slate-100'
              }`}>
                MediExplain AI Simulator
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-purple-500/15 text-[#DDD6FE] border border-purple-500/30">
                Google AI Studio Engine
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">
              Interactive Clinical Jargon Simplifier
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-2xs font-mono text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Select any medical diagnosis below</span>
        </div>
      </div>

      {/* Simulator Body */}
      <div className="p-5 sm:p-7 space-y-6">
        
        {/* Term Selector Buttons */}
        <div className="space-y-2">
          <label className="text-2xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
            Choose Diagnostic Term to Transform:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {sampleTerms.map((term) => {
              const isSelected = term.id === selectedTermId;
              return (
                <button
                  key={term.id}
                  type="button"
                  onClick={() => handleSelectTerm(term.id)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer relative ${
                    isSelected
                      ? isLight
                        ? 'bg-purple-50 border-purple-500 shadow-md ring-2 ring-purple-300/40'
                        : 'bg-[#182038] border-[#C4B5FD] shadow-lg shadow-purple-950/40 ring-1 ring-[#C4B5FD]/50'
                      : isLight
                      ? 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                      : 'bg-[#0E1322] border-slate-800 hover:border-slate-700 hover:bg-[#13192B]'
                  }`}
                >
                  <div className={`text-[10px] font-mono font-semibold mb-1 ${term.categoryColor.split(' ')[2]}`}>
                    {term.category}
                  </div>
                  <div className={`text-xs font-bold truncate ${
                    isSelected
                      ? isLight ? 'text-slate-950' : 'text-white'
                      : isLight ? 'text-slate-700' : 'text-slate-300'
                  }`}>
                    {term.term}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Comparative Transformation Grid: Card A (Clinical) vs Card B (AI Plain Language) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Card A: Raw Clinical Documentation (Input) */}
          <div
            className={`p-4 sm:p-5 rounded-xl border space-y-3 relative overflow-hidden ${
              isLight
                ? 'bg-slate-50 border-slate-200'
                : 'bg-[#0B0F1A] border-slate-800'
            }`}
          >
            <div className="flex items-center justify-between text-2xs font-mono">
              <span className="text-slate-400 uppercase font-bold flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-slate-400" />
                <span>Physician Jargon (Input)</span>
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-slate-500/15 text-slate-400 border border-slate-500/30">
                Grade 16+ Jargon
              </span>
            </div>

            <div className="min-h-[110px] flex flex-col justify-center space-y-1">
              <h4 className={`text-sm font-['Outfit'] font-bold ${
                isLight ? 'text-slate-900' : 'text-slate-100'
              }`}>
                {selectedTerm.term}
              </h4>
              <p className={`text-xs font-mono leading-relaxed italic ${
                isLight ? 'text-slate-600' : 'text-slate-400'
              }`}>
                &ldquo;{selectedTerm.rawClinicalDescription}&rdquo;
              </p>
            </div>

            <div className="text-2xs font-mono text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800">
              Reading Level: Complex clinical terminology
            </div>
          </div>

          {/* Card B: MediExplain AI Transformation (Output) */}
          <div
            className={`p-4 sm:p-5 rounded-xl border space-y-3 relative overflow-hidden shadow-lg ${
              isLight
                ? 'bg-emerald-50/50 border-emerald-300 shadow-emerald-500/10'
                : 'bg-[#0E1B24] border-emerald-500/40 shadow-emerald-950/40'
            }`}
          >
            <div className="flex items-center justify-between text-2xs font-mono">
              <span className="text-emerald-400 uppercase font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Plain-Language Translation</span>
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold">
                Patient-Friendly
              </span>
            </div>

            <div className="min-h-[110px] flex flex-col justify-center space-y-2">
              <p className={`text-xs sm:text-sm font-medium leading-relaxed ${
                isLight ? 'text-slate-900 font-semibold' : 'text-emerald-100'
              }`}>
                {isProcessing ? (
                  <span className="flex items-center gap-2 text-slate-400 font-mono text-xs">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin text-emerald-400" />
                    <span>Simplifying terminology...</span>
                  </span>
                ) : (
                  selectedTerm.plainLanguageExplanation
                )}
              </p>

              <div className={`p-2.5 rounded-lg text-xs flex items-start gap-2 border ${
                isLight
                  ? 'bg-white border-emerald-200 text-slate-700'
                  : 'bg-emerald-950/40 border-emerald-500/20 text-emerald-200'
              }`}>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Key Takeaway:</strong> {selectedTerm.patientTakeaway}
                </span>
              </div>
            </div>

            <div className="text-2xs font-mono text-emerald-400/90 pt-2 border-t border-emerald-500/20 flex items-center justify-between">
              <span>Clarity Rating: 100% Accessible</span>
              <span>Empowered Patient Understanding</span>
            </div>
          </div>

        </div>

        {/* Footer info note */}
        <div className={`p-3 rounded-xl border flex items-center justify-between gap-4 text-2xs font-mono ${
          isLight
            ? 'bg-purple-50 border-purple-200 text-purple-900'
            : 'bg-[#16122A] border-purple-400/25 text-[#DDD6FE]'
        }`}>
          <div className="flex items-center gap-2">
            <Workflow className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span>Demonstrates Generative AI &amp; Google AI Studio applied to Healthcare Communication</span>
          </div>
          <span className="text-emerald-400 font-semibold">Active Simulation</span>
        </div>

      </div>
    </div>
  );
};
