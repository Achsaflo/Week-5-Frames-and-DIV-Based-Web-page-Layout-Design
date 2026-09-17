import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Play,
  CheckCircle2,
  Bug,
  Terminal,
  RefreshCw,
  Clock,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Database,
  RotateCcw,
  Check,
  CheckSquare,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface TestCase {
  id: string;
  name: string;
  framework: 'Selenium' | 'Cucumber BDD' | 'Jira QA' | 'SQL';
  duration: string;
  category: string;
  status: 'passed' | 'running' | 'pending';
  badgeColor: {
    bg: string;
    border: string;
    text: string;
    icon: React.ElementType;
  };
}

const initialTestCases: TestCase[] = [
  {
    id: 'TC-01',
    name: 'Banking_Auth_MFA_Session_Validation',
    framework: 'Selenium',
    duration: '38ms',
    category: 'Security & Auth',
    status: 'passed',
    badgeColor: {
      bg: 'bg-sky-500/15',
      border: 'border-sky-400/30',
      text: 'text-sky-400',
      icon: Cpu,
    },
  },
  {
    id: 'TC-02',
    name: 'Scenario: Verify Fund Transfer Across Accounts',
    framework: 'Cucumber BDD',
    duration: '64ms',
    category: 'Banking Workflows',
    status: 'passed',
    badgeColor: {
      bg: 'bg-emerald-500/15',
      border: 'border-emerald-400/30',
      text: 'text-emerald-400',
      icon: CheckSquare,
    },
  },
  {
    id: 'TC-03',
    name: 'SQL_Transaction_Ledger_Balance_Integrity',
    framework: 'SQL',
    duration: '22ms',
    category: 'Database Verification',
    status: 'passed',
    badgeColor: {
      bg: 'bg-amber-500/15',
      border: 'border-amber-400/30',
      text: 'text-amber-400',
      icon: Database,
    },
  },
  {
    id: 'TC-04',
    name: 'Jira_DEF-1048_Regression_Fix_Verification',
    framework: 'Jira QA',
    duration: '45ms',
    category: 'Defect Retest',
    status: 'passed',
    badgeColor: {
      bg: 'bg-purple-500/15',
      border: 'border-purple-400/30',
      text: 'text-[#DDD6FE]',
      icon: Bug,
    },
  },
];

export const InteractiveTestConsole: React.FC = () => {
  const [tests, setTests] = useState<TestCase[]>(initialTestCases);
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState<'suite' | 'logs'>('suite');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    '[INIT] QA Automation Testbed: Achsah Florance (Cognizant Alumni QA)',
    '[TARGET] Enterprise Banking Domain Core Payment Services',
    '[REPORT] All 4 active regression suites verified with 100% pass rate',
  ]);
  const { isLight } = useTheme();

  const runAllTests = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveTab('suite');

    // Reset tests to pending
    setTests((prev) =>
      prev.map((t) => ({ ...t, status: 'pending' as const }))
    );

    setTerminalLogs((prev) => [
      ...prev,
      `[EXEC] Started regression sweep at ${new Date().toLocaleTimeString()}...`,
    ]);

    // Sequence execution
    [0, 1, 2, 3].forEach((idx) => {
      setTimeout(() => {
        setTests((prev) =>
          prev.map((t, i) => (i === idx ? { ...t, status: 'running' as const } : t))
        );
      }, idx * 420);

      setTimeout(() => {
        setTests((prev) =>
          prev.map((t, i) => (i === idx ? { ...t, status: 'passed' as const } : t))
        );
        setTerminalLogs((prev) => [
          ...prev,
          `[PASS] ${initialTestCases[idx].id}: ${initialTestCases[idx].name} (${initialTestCases[idx].duration})`,
        ]);

        if (idx === 3) {
          setIsRunning(false);
          setTerminalLogs((prev) => [
            ...prev,
            '[SUCCESS] 4 of 4 suites completed. Zero regression defects found.',
          ]);
        }
      }, idx * 420 + 400);
    });
  };

  const passCount = tests.filter((t) => t.status === 'passed').length;

  return (
    <div
      id="interactive-qa-console"
      className={`rounded-2xl backdrop-blur-xl border shadow-2xl overflow-hidden transition-all relative ${
        isLight
          ? 'bg-white/95 border-slate-200/90 shadow-slate-300/40'
          : 'bg-[#111625]/95 border-slate-700/60 shadow-[0_20px_50px_rgba(0,0,0,0.6)]'
      }`}
    >
      {/* Top Header Bar */}
      <div
        className={`px-5 py-3.5 border-b flex items-center justify-between transition-colors ${
          isLight
            ? 'bg-slate-50 border-slate-200'
            : 'bg-[#0B0F1A] border-slate-800'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="h-4 w-[1px] bg-slate-400/20 mx-1" />
          <div className="flex items-center gap-2">
            <span className={`text-xs font-mono font-bold tracking-tight ${
              isLight ? 'text-slate-900' : 'text-slate-100'
            }`}>
              QA Automation Suite
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              CI/CD VERIFIED
            </span>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setActiveTab('suite')}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
              activeTab === 'suite'
                ? isLight
                  ? 'bg-purple-100 text-purple-900 font-bold'
                  : 'bg-[#C4B5FD]/20 text-[#FAF7FD] border border-[#C4B5FD]/35'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Suites ({passCount}/4)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('logs')}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-1 ${
              activeTab === 'logs'
                ? isLight
                  ? 'bg-purple-100 text-purple-900 font-bold'
                  : 'bg-[#C4B5FD]/20 text-[#FAF7FD] border border-[#C4B5FD]/35'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Terminal className="w-3 h-3" />
            <span>Logs</span>
          </button>
        </div>
      </div>

      {/* Multi-Color Metric Strip */}
      <div
        className={`grid grid-cols-3 border-b text-center py-2.5 px-3 transition-colors ${
          isLight
            ? 'bg-slate-100/70 border-slate-200 text-slate-700'
            : 'bg-[#0D1220]/80 border-slate-800/80 text-slate-300'
        }`}
      >
        <div className="border-r border-slate-300/30 px-2">
          <div className="text-[10px] uppercase font-mono tracking-wider opacity-70">Pass Rate</div>
          <div className="text-sm font-['Outfit'] font-extrabold text-emerald-400">
            {isRunning ? `${Math.round((passCount / 4) * 100)}%` : '100% Pass'}
          </div>
        </div>
        <div className="border-r border-slate-300/30 px-2">
          <div className="text-[10px] uppercase font-mono tracking-wider opacity-70">Exec Time</div>
          <div className="text-sm font-['Outfit'] font-extrabold text-sky-400">169 ms</div>
        </div>
        <div className="px-2">
          <div className="text-[10px] uppercase font-mono tracking-wider opacity-70">Domain Scope</div>
          <div className="text-sm font-['Outfit'] font-extrabold text-amber-400">Banking Core</div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 sm:p-5 space-y-4">
        {activeTab === 'suite' ? (
          <div className="space-y-2.5">
            {tests.map((test) => {
              const BadgeIcon = test.badgeColor.icon;
              return (
                <div
                  key={test.id}
                  className={`p-3 rounded-xl border flex items-center justify-between gap-3 transition-all ${
                    isLight
                      ? 'bg-slate-50/90 border-slate-200 hover:border-slate-300'
                      : 'bg-[#0F1424] border-slate-800/90 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    {/* Status icon with color */}
                    <div className="shrink-0">
                      {test.status === 'passed' && (
                        <div className="w-6 h-6 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-xs">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                      )}
                      {test.status === 'running' && (
                        <div className="w-6 h-6 rounded-lg bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400 animate-spin">
                          <RefreshCw className="w-3 h-3" />
                        </div>
                      )}
                      {test.status === 'pending' && (
                        <div className="w-6 h-6 rounded-lg bg-slate-500/10 border border-slate-500/20 flex items-center justify-center text-slate-500">
                          <Clock className="w-3 h-3" />
                        </div>
                      )}
                    </div>

                    <div className="overflow-hidden">
                      <div className="flex items-center gap-2">
                        <span className="text-2xs font-mono font-bold text-[#A78BFA]">
                          {test.id}
                        </span>
                        <span
                          className={`px-1.5 py-0.5 rounded text-[9px] font-mono font-semibold border flex items-center gap-1 ${test.badgeColor.bg} ${test.badgeColor.border} ${test.badgeColor.text}`}
                        >
                          <BadgeIcon className="w-2.5 h-2.5" />
                          <span>{test.framework}</span>
                        </span>
                      </div>
                      <div
                        className={`text-xs font-semibold truncate pt-0.5 ${
                          isLight ? 'text-slate-900' : 'text-slate-200'
                        }`}
                      >
                        {test.name}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[11px] font-mono text-slate-400">
                      {test.duration}
                    </span>
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                        test.status === 'passed'
                          ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400'
                          : test.status === 'running'
                          ? 'bg-sky-500/15 border-sky-400/30 text-sky-400'
                          : 'bg-slate-500/10 border-slate-500/20 text-slate-400'
                      }`}
                    >
                      {test.status === 'passed' ? 'PASS' : test.status === 'running' ? 'RUN' : 'WAIT'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div
            className={`p-3.5 rounded-xl border font-mono text-xs space-y-1.5 min-h-[220px] max-h-[250px] overflow-y-auto ${
              isLight
                ? 'bg-slate-900 text-slate-200 border-slate-800'
                : 'bg-[#080C16] text-slate-300 border-slate-800'
            }`}
          >
            {terminalLogs.map((log, idx) => (
              <div key={idx} className="flex items-start gap-2 leading-relaxed">
                <span className="text-purple-400 text-2xs">&gt;</span>
                <span
                  className={
                    log.includes('[PASS]')
                      ? 'text-emerald-400 font-semibold'
                      : log.includes('[SUCCESS]')
                      ? 'text-emerald-300 font-bold'
                      : log.includes('[EXEC]')
                      ? 'text-sky-400'
                      : 'text-slate-300'
                  }
                >
                  {log}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Action Controls */}
        <div className="pt-2 flex items-center justify-between gap-3">
          <div className="text-2xs font-mono text-slate-400 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Interactive Simulator &bull; Live Verification</span>
          </div>

          <button
            id="run-tests-btn"
            type="button"
            onClick={runAllTests}
            disabled={isRunning}
            className={`px-4 py-2 rounded-xl font-['Outfit'] font-bold text-xs flex items-center gap-2 shadow-lg transition-all cursor-pointer ${
              isRunning
                ? 'bg-slate-500/30 text-slate-400 cursor-not-allowed border border-slate-500/20'
                : 'bg-gradient-to-r from-[#C4B5FD] via-[#DDD6FE] to-[#A78BFA] hover:opacity-95 text-[#130B24] shadow-purple-500/25'
            }`}
          >
            {isRunning ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Running Suite...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Run All QA Tests</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
