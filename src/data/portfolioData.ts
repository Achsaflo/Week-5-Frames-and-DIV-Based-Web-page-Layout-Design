import {
  ExperienceItem,
  SkillCategory,
  ProjectItem,
  EducationItem,
  CertificationItem,
  InternshipItem,
  StrengthItem,
} from '../types';

export const personalInfo = {
  name: 'Achsah Florance',
  roleTitle: 'QA Analyst | MCA Student',
  headline: 'QA Analyst with experience in Manual & Automation Testing',
  summary:
    'Dedicated QA Analyst with hands-on experience in manual and automation testing across complex banking applications. Skilled in test case design, regression and smoke testing, Selenium WebDriver, Cucumber BDD framework, Jira defect tracking, and SQL validation. Currently expanding technical depth through MCA coursework, with active projects in Python and applied Generative AI.',
  email: 'achsahflorance@gmail.com',
  location: 'Guntur, India',
  coreFocusAreas: [
    'Manual Testing',
    'Automation Testing',
    'Banking Applications',
    'Selenium WebDriver',
    'Jira Defect Tracking',
    'SQL & Data Validation',
    'Java',
    'Python',
  ],
};

export const experienceData: ExperienceItem[] = [
  {
    id: 'cognizant-qa',
    role: 'QA Analyst',
    company: 'Cognizant',
    location: 'Guntur, India',
    period: 'Oct 2024 – Apr 2026',
    type: 'Professional Experience',
    summary:
      'Contributed as a QA Analyst testing enterprise banking domain software, ensuring high system reliability, seamless transaction workflows, and defect resolution through systematic manual and automated test cycles.',
    responsibilities: [
      'Executed functional and manual test cases for banking applications.',
      'Performed regression and smoke testing across active release cycles.',
      'Logged, tracked, and verified defects using Jira.',
      'Collaborated with developers, business analysts, and stakeholders to clarify requirements.',
      'Maintained and executed Selenium-Cucumber automation scripts.',
      'Supported User Acceptance Testing (UAT) to validate user-centric business workflows.',
      'Retested reported defects and performed root-cause verification.',
      'Conducted production validation and post-deployment verification.',
      'Participated in Agile ceremonies including daily stand-ups and sprint planning.',
      'Improved banking domain knowledge and automation debugging skills.',
    ],
    technologies: [
      'Selenium WebDriver',
      'Cucumber (BDD)',
      'Jira',
      'Banking Applications',
      'Manual Testing',
      'Regression Testing',
      'Agile Scrum',
    ],
  },
];

export const skillsCategories: SkillCategory[] = [
  {
    category: 'TESTING',
    description: 'Comprehensive manual and functional verification methodologies for mission-critical software.',
    iconName: 'CheckCircle2',
    skills: [
      'Manual Testing',
      'Functional Testing',
      'Regression Testing',
      'Smoke Testing',
      'User Acceptance Testing (UAT)',
      'Production Validation',
    ],
  },
  {
    category: 'AUTOMATION',
    description: 'Test automation frameworks and behavior-driven test script execution.',
    iconName: 'Cpu',
    skills: [
      'Selenium WebDriver',
      'Cucumber (BDD)',
    ],
  },
  {
    category: 'PROGRAMMING & DATABASE',
    description: 'Core programming languages and database query formulation for test data validation.',
    iconName: 'Code2',
    skills: [
      'Java',
      'SQL',
      'Python',
    ],
  },
  {
    category: 'TOOLS & METHODOLOGIES',
    description: 'Issue management and collaborative agile software delivery frameworks.',
    iconName: 'Wrench',
    skills: [
      'Jira',
      'Agile Scrum',
    ],
  },
  {
    category: 'DOMAIN KNOWLEDGE',
    description: 'Financial software domain logic, user lifecycles, and transaction processing workflows.',
    iconName: 'Building2',
    skills: [
      'Banking Applications',
      'Account Management',
      'Workflows',
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'mediexplain-ai',
    title: 'MediExplain AI',
    subtitle: 'Healthcare AI Web Application',
    role: 'MCA Student / AI-ML Project',
    description:
      'A healthcare-focused AI web application that explains medical and biological terms in simple language and helps users better understand health information.',
    highlights: [
      'Designed to demystify complex medical terminology into clear, accessible language for patients and everyday users.',
      'Built and evaluated utilizing Google AI Studio with modern Generative AI capabilities.',
      'Demonstrates practical integration of AI/ML concepts within responsive web technology.',
      'Focuses on domain accuracy, safe interpretation of biological data, and intuitive user comprehension.',
    ],
    technologies: [
      'Google AI Studio',
      'Generative AI',
      'AI/ML',
      'Web Technologies',
    ],
    category: 'AI / Healthcare',
  },
];

export const educationData: EducationItem[] = [
  {
    id: 'mca',
    degree: 'Master of Computer Applications (MCA)',
    field: 'Computer Applications',
    institution: 'Vignan University',
    location: 'Vadlamudi, Guntur',
    status: '1st Year',
    period: 'Jul 2026 – Present',
  },
  {
    id: 'bca',
    degree: 'Bachelor of Computer Applications (BCA)',
    field: 'Computer Applications',
    institution: "St. Ann's College for Women",
    location: 'Guntur',
    status: 'Completed',
    period: 'Jun 2024',
  },
];

export const certificationsData: CertificationItem[] = [
  {
    id: 'cert-salesforce',
    title: 'Salesforce Project Internship',
    type: 'Internship Certificate',
    focusArea: 'Practical training covering Salesforce fundamentals, organizational setup, Apex programming, and testing.',
  },
  {
    id: 'cert-selenium',
    title: 'Selenium Automation Testing',
    type: 'Professional Certification',
    focusArea: 'Automation testing principles, WebDriver script configuration, locator strategies, and test execution.',
  },
  {
    id: 'cert-manual-testing',
    title: 'Manual Testing Fundamentals',
    type: 'Foundational Certification',
    focusArea: 'Software development life cycle (SDLC), test case design, defect life cycle, and quality assurance principles.',
  },
];

export const internshipData: InternshipItem = {
  id: 'salesforce-internship',
  title: 'Salesforce Project Internship',
  type: 'Practical Learning & Project Internship',
  description:
    'Worked as an intern on a Salesforce-based project and completed practical hands-on training across key platform areas.',
  areasCovered: [
    'Salesforce fundamentals',
    'Organizational setup',
    'Apex programming',
    'Testing',
    'Debugging',
  ],
  contextNote:
    'Early-career practical learning and technical project internship focused on understanding enterprise CRM architecture, Apex development, and system testing.',
};

export const strengthsData: StrengthItem[] = [
  {
    id: 'detail-oriented',
    title: 'Detail-Oriented',
    description: 'Meticulous attention to functional edge cases, test condition variations, and defect reporting precision.',
    iconName: 'Target',
  },
  {
    id: 'strong-analytical-skills',
    title: 'Strong Analytical Skills',
    description: 'Systematic approach to breaking down banking business requirements and root-cause defect investigations.',
    iconName: 'LineChart',
  },
  {
    id: 'good-communication',
    title: 'Good Communication',
    description: 'Clear, articulate reporting of bugs and constructive dialogue across developers, BAs, and stakeholders.',
    iconName: 'MessageSquare',
  },
  {
    id: 'team-collaboration',
    title: 'Team Collaboration',
    description: 'Active contributor in cross-functional Agile environments, sprint ceremonies, and team knowledge sharing.',
    iconName: 'Users',
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving',
    description: 'Logical troubleshooting of failing test steps, automation script locators, and workflow exceptions.',
    iconName: 'Sparkles',
  },
  {
    id: 'quick-learner',
    title: 'Quick Learner',
    description: 'Rapid adaptability in acquiring banking domain intricacies, AI tooling (Google AI Studio), and programming paradigms.',
    iconName: 'Zap',
  },
];

export const achievementsData: string[] = [
  'Actively participated in Agile stand-ups and sprint planning.',
  'Contributed to improving test coverage and defect tracking efficiency.',
];
