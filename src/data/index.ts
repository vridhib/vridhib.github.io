import type { OSSContribution, Project, SkillGroup } from '../types';

export const projects: Project[] = [
  {
    id: 'aurum',
    title: 'Aurum Protocol',
    category: '01 — FINTECH / RWA',
    tech: ['Solidity', 'Foundry', 'Next.js', 'Chainlink', 'Wagmi', 'GraphQL', 'Subgraph'],
    description: {
      problem: 'Tokenized Real World Assets (RWAs) require dynamic risk management to handle collateral volatility without relying on centralized liquidators.',
      solution: 'Architected a full-stack lending protocol simulating a tokenized gold system. Designed a dynamic risk model and automatic debt-allocation mechanism for transparent risk-awareness with per-collateral configurations for Loan-to-Value (LTV), kinked interest rates, and liquidation curves based on real-time Chainlink data feeds.',
      limitations: 'Currently a testnet simulation. To ensure the protocol\'s integrity, I focused heavily on adversarial testing, achieving 95% coverage using Foundry (unit, fuzz, invariant) and patching critical access-control edge cases during a self-audit.'
    },
    marginNote: '// Self-audit caught a critical edge case: unrestricted burn and burnFrom in the tokenized gold and stablecoin. Fixed via an onlyOwner restriction.',
    metrics: [
      '142 Tests (Unit, Fuzz, Invariant)',
      '95.4% Coverage'
    ],
    snippet: {
      title: 'Listing 1.1: Protocol Invariants',
      fileName: 'AurumInvariantTests.t.sol',
      code: `// Invariant 1: The protocol must always be overcollateralized
function invariant_protocolMustBeOvercollateralized() external view {
    (uint256 totalCollateralValue, ) = aue.getGlobalMetrics();
    uint256 totalActualDebt = 0;
    for (uint256 i = 0; i < collateralTokens.length; i++) {
        address token = collateralTokens[i];
        uint256 normDebt = aue.getCollateralInfo(token).totalNormalizedDebt;
        totalActualDebt += (normDebt * aue.s_cumulativeIndex()) / 1e18;
    }
    assert(totalCollateralValue >= totalActualDebt);
}

// Invariant 2: The cumulative index never decreases
function invariant_cumulativeIndexNonDecreasing() external {
    uint256 currentIndex = aue.s_cumulativeIndex();
    assert(currentIndex >= previousCumulativeIndex);
    previousCumulativeIndex = currentIndex;
}`
    },
    link: 'https://aurum-protocol.vercel.app',
    repo: 'https://github.com/vridhib/aurum-protocol',
    visualLabel: '',
    variant: 'left-aligned'
  },
  {
    id: 'seal-ledger',
    title: 'Seal Tamper-Proof Delivery Ledger',
    category: '02 — CRYPTOGRAPHY / AUDIT',
    tech: ["Python", "TypeScript", "Django", "Next.js", "Web Crypto API"],
    description: {
      problem: 'In high-stakes logistics, retroactive database alterations destroy audit trails and compliance, requiring blind trust in the backend operator.',
      solution: 'Built a tamper-proof point-of-capture ledger utilizing a SHA-256 cryptographic hash chain, making retroactive data alteration mathematically impossible without blockchain overhead.',
      limitations: 'As an MVP, it lacks enterprise SSO and role-based access. However, it proves the core concept: a zero-trust client-side audit feature using the native Web Crypto API allows browsers to independently verify data integrity.'
    },
    snippet: {
      title: '// Client-side audit via Web Crypto API',
      fileName: 'audit.ts',
      code: `const data = 'Handoff:Asset_42:User_B';
const hash = await crypto.subtle.digest('SHA-256', data);`,
      footerStats: [
        { label: 'Workflow State', value: 'RESOLVED' },
        { label: 'Previous Hash', value: '0x8f23...c41a' },
        { label: 'Current Hash', value: '0x9a1b...e7d3' },
        { label: 'Chain Integrity', value: '✓ Verified (No DB Trust Required)' }
      ]
    },
    details: [
      { label: 'UI Challenge', value: 'Optimistic UI with a 5s undo countdown to prevent accidental state changes in stressful environments.' },
      { label: 'Security', value: 'Zero-trust client-side audit using the native Web Crypto API.' }
    ],
    link: 'https://github.com/vridhib/seal-ledger',
    repo: 'https://github.com/vridhib/seal-ledger',
    visualLabel: 'FIG 2.1 — HANDOFF STATE MACHINE',
    variant: 'right-indented'
  },
  {
    id: 'layerzero-scanner',
    title: 'LayerZero Infrastructure Scanner',
    category: '03 — SECURITY / INFRA',
    tech: ['Django', 'Next.js', 'PostgreSQL', 'Redis'],
    description: {
      problem: 'Cross-chain messaging protocols are vulnerable to infrastructure misconfigurations (e.g., 1-of-1 DVN setups), leading to catastrophic bridge exploits.',
      solution: 'Built a full-stack monitoring platform that ingests external infrastructure configurations, processes them through a custom risk-scoring engine (0-100), and translates complex vectors into actionable compliance scores.',
      limitations: 'The risk-scoring algorithm is currently heuristic-based and requires manual threshold configuration. To support this, I built an automated alerting pipeline via webhooks to notify users of real-time security risks.'
    },
    details: [
      { label: 'Backend', value: 'Django REST + JWT' },
      { label: 'Rate Limiting', value: 'Redis-backed' },
      { label: 'Alerting', value: 'Discord Webhooks' },
      { label: 'Frontend', value: 'Next.js / TanStack Query' }
    ],
    snippet: {
      title: 'Terminal Output: scan_bridges',
      fileName: 'bash',
      language: 'bash',
      code: `$ python manage.py scan_bridges

=== Scanning chain: ethereum ===
Contract 1: scanning 0x8f23...c41a on ethereum...
    requiredDVNCount=2 -> HEALTHY
Contract 2: scanning 0x9a1b...e7d3 on ethereum...
    requiredDVNCount=1 -> UNHEALTHY
    [AlertService] Dispatching risk score: 85/100 (Grade: D)...

=== Scanning chain: arbitrum ===
Contract 3: scanning Stargate on arbitrum...
    requiredDVNCount=2 -> HEALTHY

=== Scanning chain: polygon ===
RPC for polygon not connected. Skipping.

Report #142 saved at 07-16-2026. PDF: /media/reports/2026_07_16_oapp_security_report.pdf`,
      footerStats: [
        { label: 'Contracts Scanned', value: '3' },
        { label: 'Vulnerabilities Found', value: '1' },
        { label: 'Avg API Latency', value: '42ms' },
        { label: 'Report Status', value: '✓ Generated & Saved' }
      ]
    },
    link: 'https://github.com/vridhib/layerzero-oapp-security-monitor',
    repo: 'https://github.com/vridhib/layerzero-oapp-security-monitor',
    variant: 'full-width'
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'Solidity', 'Bash', 'SQL']
  },
  {
    category: 'Backend & Data',
    items: ['Django', 'DRF', 'PostgreSQL', 'Redis', 'REST APIs', 'GraphQL', 'JWT']
  },
  {
    category: 'Frontend',
    items: ['Next.js', 'React', 'TailwindCSS', 'Vite', 'Wagmi', 'TanStack Query']
  },
  {
    category: 'Blockchain & Infra',
    items: ['Ethereum', 'Foundry', 'LayerZero', 'Chainlink', 'Smart Contract Dev']
  },
  {
    category: 'DevOps & Infra',
    items: ['Git', 'GitHub Actions', 'Linux (LPI)', 'Systemd Automation', 'Rate Limiting', 'CI/CD Pipelines']
  },
  {
    category: 'Testing & QA',
    items: ['Pytest', 'Fuzz Testing', 'Invariant Testing', 'Unit/Integration']
  }
]

export const openSourceContributions: OSSContribution[] = [
  {
    project: 'OpenBB',
    type: 'Bug Report',
    status: 'Resolved',
    title: 'Silent failure parsing modular OpenAPI 3.1.0 specs',
    description: 'Identified a critical silent failure in the V5 codegen workflow where modular YAML $ref tags failed to parse, outputting an empty package with zero commands. Filed a detailed repro report leading to a fast resolution by the core team.',
    link: 'https://github.com/OpenBB-finance/OpenBB/issues/7585'
  },
  {
    project: 'exchange_calendars',
    type: 'Pull Request',
    status: 'Closed',
    title: 'XSHG: Correct 2026 holidays & pandas 2.2+ deprecation fix',
    description: 'Investigated Shanghai Stock Exchange (XSHG) holiday schedules. While the primary PR was superceded, identified and reported a separate bug in the CSV generation script related to a deprecated pandas 2.2+ argument.',
    link: 'https://github.com/gerrymanoim/exchange_calendars/pull/582'
  },
  {
    project: 'OpenZeppelin',
    type: 'Docs PR',
    status: 'Submitted',
    title: 'Security docs: TimelockController DoS warning & Access Control',
    description: 'Submitted documentation PRs to improve developer onboarding and security, including fixing the TimelockController admin docs, adding CANCELLER_ROLE, and adding a Denial of Service (DoS) warning.',
    link: 'https://github.com/OpenZeppelin/docs/pull/143'
  }
];