import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Cpu,
  Layers,
  Code2,
  Database,
  Terminal,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  FileCode2,
  Zap,
  Coffee,
  GitBranch,
  Building2,
  Check,
  Play,
  ArrowRight,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface SkillItem {
  id: string;
  name: string;
  category: 'Testing' | 'Automation' | 'Programming' | 'Tools' | 'Domain';
  icon: React.ElementType;
  level: string;
  badgeColor: string;
  borderHover: string;
  textColor: string;
  bgGlow: string;
  summary: string;
  cognizantApplication: string;
  snippet: {
    language: string;
    code: string;
  };
}

const skillsData: SkillItem[] = [
  {
    id: 'manual-testing',
    name: 'Manual Testing',
    category: 'Testing',
    icon: ShieldCheck,
    level: 'Core Enterprise Practice',
    badgeColor: 'bg-emerald-500/15 border-emerald-400/30 text-emerald-400',
    borderHover: 'hover:border-emerald-400/50',
    textColor: 'text-emerald-400',
    bgGlow: 'rgba(16, 185, 129, 0.12)',
    summary: 'Functional, regression, smoke, sanity, and User Acceptance Testing (UAT).',
    cognizantApplication: 'Authored comprehensive test cases and verified critical fund-transfer workflows for banking domain clients.',
    snippet: {
      language: 'Test Case Specification',
      code: `// Test Case: TC_BANK_TRANS_004
Scenario: High-Value Intra-Bank Transfer Validation
Preconditions: User logged in, account balance >= $10,000, 2FA enabled
Step 1: Navigate to Transfers -> Initiate Domestic Wire
Step 2: Enter valid recipient IBAN and amount ($5,000.00)
Step 3: Submit transaction -> Verify OTP challenge rendered
Step 4: Confirm debit ledger reflected in SQL core database
Result: PASS - Transaction successful, audit trail logged.`,
    },
  },
  {
    id: 'automation-testing',
    name: 'Automation Testing',
    category: 'Automation',
    icon: Cpu,
    level: 'Continuous Regression',
    badgeColor: 'bg-sky-500/15 border-sky-400/30 text-sky-400',
    borderHover: 'hover:border-sky-400/50',
    textColor: 'text-sky-400',
    bgGlow: 'rgba(14, 165, 233, 0.12)',
    summary: 'Automated script execution and regression suite maintenance.',
    cognizantApplication: 'Maintained and executed automated regression suites to accelerate release validation cycles at Cognizant.',
    snippet: {
      language: 'Java / TestNG Runner',
      code: `@Test(groups = {"regression", "smoke"})
public void executeBankingRegressionSuite() {
    LoginPage login = new LoginPage(driver);
    login.authenticate(userCredentials);
    Assert.assertTrue(dashboard.isLedgerLoaded(), "Ledger should load");
    driver.navigate().to(transfersUrl);
    verifyTransactionEndToEnd();
}`,
    },
  },
  {
    id: 'selenium-webdriver',
    name: 'Selenium WebDriver',
    category: 'Automation',
    icon: Layers,
    level: 'Cross-Browser UI Stack',
    badgeColor: 'bg-cyan-500/15 border-cyan-400/30 text-cyan-400',
    borderHover: 'hover:border-cyan-400/50',
    textColor: 'text-cyan-400',
    bgGlow: 'rgba(6, 182, 212, 0.12)',
    summary: 'Robust browser automation for web-based enterprise banking portals.',
    cognizantApplication: 'Wrote reliable explicit waits, dynamic XPath/CSS locators, and automated form validations across browsers.',
    snippet: {
      language: 'Selenium WebDriver (Java)',
      code: `WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
WebElement transferBtn = wait.until(
    ExpectedConditions.elementToBeClickable(By.id("btn-execute-wire"))
);
transferBtn.click();
WebElement confirmation = wait.until(
    ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@class='auth-success']"))
);
Assert.assertEquals(confirmation.getText(), "Transaction Completed");`,
    },
  },
  {
    id: 'cucumber-bdd',
    name: 'Cucumber BDD',
    category: 'Automation',
    icon: FileCode2,
    level: 'Behavior-Driven Architecture',
    badgeColor: 'bg-teal-500/15 border-teal-400/30 text-teal-300',
    borderHover: 'hover:border-teal-400/50',
    textColor: 'text-teal-300',
    bgGlow: 'rgba(20, 184, 166, 0.12)',
    summary: 'Executable specifications bridging technical teams and business analysts.',
    cognizantApplication: 'Maintained feature files in Gherkin syntax matching banking domain business rules.',
    snippet: {
      language: 'Gherkin Feature File',
      code: `Feature: Banking Account Statement Generation
  @regression @banking
  Scenario Outline: Download monthly statement in PDF format
    Given customer is authenticated with "<role>" credentials
    When user requests statement for month "<month>" and year "<year>"
    Then the system generates a secure PDF download link
    And the HTTP response code is 200

    Examples:
      | role     | month    | year |
      | Savings  | October  | 2023 |
      | Premium  | November | 2023 |`,
    },
  },
  {
    id: 'java-programming',
    name: 'Java',
    category: 'Programming',
    icon: Coffee,
    level: 'Object-Oriented Development',
    badgeColor: 'bg-amber-500/15 border-amber-400/30 text-amber-400',
    borderHover: 'hover:border-amber-400/50',
    textColor: 'text-amber-400',
    bgGlow: 'rgba(245, 158, 11, 0.12)',
    summary: 'Core language for automation frameworks and object-oriented testing design.',
    cognizantApplication: 'Engineered test helper classes, assertions, and data-driven utility functions for test harnesses.',
    snippet: {
      language: 'Core Java',
      code: `public class BankTransactionValidator {
    public static boolean validateTransferLimits(double amount, AccountType type) {
        if (amount <= 0) return false;
        double maxAllowed = (type == AccountType.PREMIUM) ? 50000.0 : 10000.0;
        return amount <= maxAllowed;
    }
}`,
    },
  },
  {
    id: 'sql-validation',
    name: 'SQL Database Checks',
    category: 'Programming',
    icon: Database,
    level: 'Backend Data Integrity',
    badgeColor: 'bg-orange-500/15 border-orange-400/30 text-orange-400',
    borderHover: 'hover:border-orange-400/50',
    textColor: 'text-orange-400',
    bgGlow: 'rgba(249, 115, 22, 0.12)',
    summary: 'Database queries to verify financial ledger correctness and transaction logs.',
    cognizantApplication: 'Queried relational databases to check account balances before and after simulated banking operations.',
    snippet: {
      language: 'SQL (PostgreSQL / Oracle)',
      code: `SELECT t.transaction_id, t.from_account, t.to_account, t.amount, t.status, a.balance
FROM transactions t
INNER JOIN accounts a ON t.from_account = a.account_id
WHERE t.transaction_id = 'TX_982410'
  AND t.created_at >= CURRENT_DATE - INTERVAL '1 day';`,
    },
  },
  {
    id: 'python-dev',
    name: 'Python',
    category: 'Programming',
    icon: Code2,
    level: 'Academic & AI Scripting',
    badgeColor: 'bg-blue-500/15 border-blue-400/30 text-blue-400',
    borderHover: 'hover:border-blue-400/50',
    textColor: 'text-blue-400',
    bgGlow: 'rgba(59, 130, 246, 0.12)',
    summary: 'Used for data manipulation, algorithmic assignments, and AI integration.',
    cognizantApplication: 'Utilized in academic coursework at Vignan University and for AI prototyping in MediExplain.',
    snippet: {
      language: 'Python 3',
      code: `def process_clinical_term(term: str, clinical_db: dict) -> dict:
    normalized = term.strip().lower()
    entry = clinical_db.get(normalized)
    if not entry:
        return {"term": term, "found": False}
    return {
        "term": term,
        "plain_explanation": entry["plain_text"],
        "category": entry["category"]
    }`,
    },
  },
  {
    id: 'jira-lifecycle',
    name: 'Jira Defect Lifecycle',
    category: 'Tools',
    icon: GitBranch,
    level: 'Defect Triage & Retest',
    badgeColor: 'bg-indigo-500/15 border-indigo-400/30 text-indigo-300',
    borderHover: 'hover:border-indigo-400/50',
    textColor: 'text-indigo-300',
    bgGlow: 'rgba(99, 102, 241, 0.12)',
    summary: 'End-to-end defect tracking, root cause reproduction, and fix verification.',
    cognizantApplication: 'Logged detailed bug tickets with steps to reproduce and collaborated with developers for retesting.',
    snippet: {
      language: 'Jira Ticket Metadata',
      code: `Issue Key: DEF-2041
Issue Type: Bug | Severity: High | Priority: P1
Component: Payment Gateway -> Currency Exchange
Steps to Reproduce:
  1. Select currency pair USD -> EUR
  2. Input 1,000.00 with expired exchange token
  3. Submit -> UI hung on spinner instead of returning error modal
Resolution: Verified in Sprint 24 hotfix build.`,
    },
  },
  {
    id: 'agile-scrum',
    name: 'Agile & Scrum',
    category: 'Tools',
    icon: Zap,
    level: 'Sprint Collaboration',
    badgeColor: 'bg-purple-500/15 border-purple-400/30 text-[#DDD6FE]',
    borderHover: 'hover:border-purple-400/50',
    textColor: 'text-[#DDD6FE]',
    bgGlow: 'rgba(167, 139, 250, 0.12)',
    summary: 'Active participation in sprint planning, daily stand-ups, and sprint reviews.',
    cognizantApplication: 'Worked closely in cross-functional squads to align QA sign-offs with release delivery dates.',
    snippet: {
      language: 'Agile QA Ceremony',
      code: `// Daily Scrum & QA Sign-Off Checklist
[x] Daily Stand-Up: Reported regression status on banking transfer suite
[x] Sprint Planning: Estimated QA story points for new UAT features
[x] Defect Triage: Met with Lead Architect on high-priority blocker
[x] Sprint Demo: Demonstrated validated payment workflow to stakeholders`,
    },
  },
  {
    id: 'banking-domain',
    name: 'Banking Software Domain',
    category: 'Domain',
    icon: Building2,
    level: 'Industry Specialization',
    badgeColor: 'bg-emerald-500/15 border-emerald-400/30 text-emerald-400',
    borderHover: 'hover:border-emerald-400/50',
    textColor: 'text-emerald-400',
    bgGlow: 'rgba(16, 185, 129, 0.12)',
    summary: 'In-depth functional knowledge of accounts, fund transfers, and ledger security.',
    cognizantApplication: 'Validated compliance with high-security financial standards during 1+ year enterprise tenure.',
    snippet: {
      language: 'Banking Domain Workflows',
      code: `Banking Modules Tested:
- Intra-Bank & Inter-Bank Domestic Transfers
- International Wire Transfers with FX Exchange
- Account Balances & Real-Time Transaction Ledgers
- Multi-Factor Authentication (MFA) & Session Guardrails
- UAT Customer Journey Sign-Offs`,
    },
  },
];

type CategoryFilter = 'All' | 'Testing' | 'Automation' | 'Programming' | 'Tools' | 'Domain';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [selectedSkillId, setSelectedSkillId] = useState<string>(skillsData[0].id);
  const { isLight } = useTheme();

  const filteredSkills =
    activeCategory === 'All'
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  const selectedSkill = skillsData.find((s) => s.id === selectedSkillId) || skillsData[0];
  const SelectedIcon = selectedSkill.icon;

  const categories: { label: CategoryFilter; count: number; color: string }[] = [
    { label: 'All', count: skillsData.length, color: 'text-slate-400' },
    { label: 'Testing', count: 1, color: 'text-emerald-400' },
    { label: 'Automation', count: 3, color: 'text-sky-400' },
    { label: 'Programming', count: 3, color: 'text-amber-400' },
    { label: 'Tools', count: 2, color: 'text-indigo-400' },
    { label: 'Domain', count: 1, color: 'text-teal-400' },
  ];

  return (
    <section
      id="skills"
      className={`py-24 relative overflow-hidden border-t transition-colors ${
        isLight ? 'border-slate-200/80' : 'border-slate-800/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
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
            <Cpu className="w-3.5 h-3.5 text-sky-400" />
            <span>TECHNICAL PROFICIENCY &amp; TOOLS</span>
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
            QA Skills &amp; Technology Stack
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
            Verified technical competencies from Cognizant enterprise projects and academic computer applications studies. Click any skill below to inspect its live implementation artifact.
          </motion.p>
        </div>

        {/* Vibrant Multi-Color Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.label;
            return (
              <button
                key={cat.label}
                type="button"
                onClick={() => setActiveCategory(cat.label)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all shrink-0 cursor-pointer flex items-center gap-2 border ${
                  isSelected
                    ? isLight
                      ? 'bg-purple-900 text-white border-purple-900 shadow-md'
                      : 'bg-[#C4B5FD] text-[#0F0A22] border-[#C4B5FD] font-bold shadow-lg shadow-purple-500/25'
                    : isLight
                    ? 'bg-white hover:bg-slate-100 text-slate-700 border-slate-300'
                    : 'bg-[#111625] hover:bg-[#1A2238] text-slate-300 border-slate-800'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected
                      ? isLight
                        ? 'bg-purple-800 text-white'
                        : 'bg-purple-950 text-purple-200'
                      : 'bg-slate-500/20 text-current'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Grid: Left Skill Cards (2 Columns) + Right Live Skill Inspector (1 Column) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Skill Cards Grid (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              const isSelected = skill.id === selectedSkillId;
              return (
                <div
                  key={skill.id}
                  onClick={() => setSelectedSkillId(skill.id)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer relative overflow-hidden group ${
                    isSelected
                      ? isLight
                        ? 'bg-white border-purple-500 shadow-lg ring-2 ring-purple-300/50'
                        : 'bg-[#141B30] border-[#C4B5FD] shadow-xl shadow-purple-950/40 ring-1 ring-[#C4B5FD]/50'
                      : isLight
                      ? 'bg-white/80 border-slate-200 hover:border-slate-300 hover:shadow-md'
                      : 'bg-[#101524]/90 border-slate-800 hover:border-slate-700 hover:bg-[#13192B]'
                  }`}
                >
                  {/* Background glow accent */}
                  <div
                    className="absolute -right-8 -top-8 w-24 h-24 rounded-full blur-xl pointer-events-none group-hover:opacity-100 transition-opacity opacity-50"
                    style={{ backgroundColor: skill.bgGlow }}
                  />

                  <div className="flex items-start justify-between gap-2 mb-2.5">
                    <div className={`p-2 rounded-lg border ${skill.badgeColor}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${skill.badgeColor}`}>
                      {skill.category}
                    </span>
                  </div>

                  <h3 className={`text-sm font-['Outfit'] font-bold mb-1 ${
                    isLight ? 'text-slate-900' : 'text-slate-100'
                  }`}>
                    {skill.name}
                  </h3>

                  <p className={`text-xs leading-relaxed line-clamp-2 ${
                    isLight ? 'text-slate-600' : 'text-slate-400'
                  }`}>
                    {skill.summary}
                  </p>

                  <div className="mt-3 pt-2 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-400">{skill.level}</span>
                    <span className={`flex items-center gap-1 font-semibold ${skill.textColor}`}>
                      <span>Inspect</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Live Interactive Skill Inspector (5 Cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div
              className={`rounded-2xl border p-5 sm:p-6 space-y-4 shadow-2xl relative overflow-hidden backdrop-blur-xl ${
                isLight
                  ? 'bg-white/95 border-slate-200 shadow-slate-200/50'
                  : 'bg-[#101524]/95 border-slate-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl border ${selectedSkill.badgeColor}`}>
                    <SelectedIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-mono font-bold uppercase tracking-wider ${selectedSkill.textColor}`}>
                        {selectedSkill.category}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                    <h4 className={`text-lg font-['Outfit'] font-extrabold ${
                      isLight ? 'text-slate-900' : 'text-slate-100'
                    }`}>
                      {selectedSkill.name}
                    </h4>
                  </div>
                </div>

                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  COGNIZANT QA
                </span>
              </div>

              {/* Enterprise Application Context */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Cognizant Enterprise Usage:
                </div>
                <p className={`text-xs sm:text-sm leading-relaxed ${
                  isLight ? 'text-slate-700' : 'text-slate-300'
                }`}>
                  {selectedSkill.cognizantApplication}
                </p>
              </div>

              {/* Code / Artifact Snippet Console */}
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-[#A78BFA]" />
                    <span>{selectedSkill.snippet.language}</span>
                  </span>
                  <span className="text-emerald-400 text-2xs">Live QA Artifact</span>
                </div>

                <div
                  className={`p-3.5 rounded-xl border font-mono text-xs overflow-x-auto max-h-[260px] leading-relaxed select-all ${
                    isLight
                      ? 'bg-slate-900 text-slate-200 border-slate-800'
                      : 'bg-[#080C16] text-slate-300 border-slate-800'
                  }`}
                >
                  <pre className="text-2xs sm:text-xs">
                    <code>{selectedSkill.snippet.code}</code>
                  </pre>
                </div>
              </div>

              {/* Verification Footer */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-2xs font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Resume-Certified Skill</span>
                </span>
                <span>Tier: {selectedSkill.level}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
