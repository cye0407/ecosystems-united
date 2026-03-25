import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';

const ROOT = process.cwd();
const APP_SRC = join(ROOT, 'app', 'src', 'pages');
const DEST = join(ROOT, 'src', 'app', '(app)');

// File mappings: [source relative to APP_SRC, dest relative to DEST, new export name]
const mappings = [
  // Simple files (no react-router-dom)
  ['Settings.tsx', 'settings/page.tsx', 'SettingsPage'],

  // Files with Link from react-router-dom
  ['Dashboard.tsx', 'dashboard/page.tsx', 'DashboardPage'],
  ['data/DataOverview.tsx', 'data/page.tsx', 'DataOverviewPage'],
  ['data/EnergyLanding.tsx', 'data/energy/page.tsx', 'EnergyLandingPage'],
  ['data/EnergyPage.tsx', 'data/energy/entry/page.tsx', 'EnergyEntryPage'],
  ['data/MaterialsPage.tsx', 'data/materials/page.tsx', 'MaterialsPage'],
  ['data/PackagingPage.tsx', 'data/packaging/page.tsx', 'PackagingPage'],
  ['data/InfrastructurePage.tsx', 'data/infrastructure/page.tsx', 'InfrastructurePage'],
  ['data/TransportPage.tsx', 'data/transport/page.tsx', 'TransportPage'],
  ['data/WorkforcePage.tsx', 'data/workforce/page.tsx', 'WorkforcePage'],
  ['data/OutputsPage.tsx', 'data/outputs/page.tsx', 'OutputsPage'],
  ['data/ContextPage.tsx', 'data/context/page.tsx', 'ContextPage'],

  // Onboarding files with useNavigate from react-router-dom
  ['onboarding/Welcome.tsx', 'onboarding/page.tsx', 'WelcomePage'],
  ['onboarding/CompanyProfile.tsx', 'onboarding/company/page.tsx', 'CompanyProfilePage'],
  ['onboarding/SiteSetup.tsx', 'onboarding/site/page.tsx', 'SiteSetupPage'],
  ['onboarding/SwotAnalysis.tsx', 'onboarding/swot/page.tsx', 'SwotAnalysisPage'],
  ['onboarding/GoalsSetup.tsx', 'onboarding/goals/page.tsx', 'GoalsSetupPage'],
  ['onboarding/Complete.tsx', 'onboarding/complete/page.tsx', 'CompletePage'],
];

for (const [src, dest, newExportName] of mappings) {
  const srcPath = join(APP_SRC, src);
  const destPath = join(DEST, dest);

  let content = readFileSync(srcPath, 'utf-8');

  // Rule 1: Add "use client" at top
  content = '"use client";\n\n' + content;

  // Rule 2: Replace import { Link } from 'react-router-dom' with import Link from 'next/link'
  content = content.replace(
    /import\s*\{\s*Link\s*\}\s*from\s*['"]react-router-dom['"];?\n?/g,
    "import Link from 'next/link';\n"
  );

  // Rule 3: Replace import { useNavigate } from 'react-router-dom' with import { useRouter } from 'next/navigation'
  content = content.replace(
    /import\s*\{\s*useNavigate\s*\}\s*from\s*['"]react-router-dom['"];?\n?/g,
    "import { useRouter } from 'next/navigation';\n"
  );

  // Rule 4: Handle combined imports (Link, useNavigate from react-router-dom) - split them
  content = content.replace(
    /import\s*\{\s*Link\s*,\s*useNavigate\s*\}\s*from\s*['"]react-router-dom['"];?\n?/g,
    "import Link from 'next/link';\nimport { useRouter } from 'next/navigation';\n"
  );
  content = content.replace(
    /import\s*\{\s*useNavigate\s*,\s*Link\s*\}\s*from\s*['"]react-router-dom['"];?\n?/g,
    "import Link from 'next/link';\nimport { useRouter } from 'next/navigation';\n"
  );

  // Rule 9: Remove any remaining react-router-dom imports (Navigate, Outlet, etc.)
  content = content.replace(
    /import\s*\{[^}]*\}\s*from\s*['"]react-router-dom['"];?\n?/g,
    ''
  );

  // Rule 5: Replace const navigate = useNavigate() with const router = useRouter()
  content = content.replace(
    /const\s+navigate\s*=\s*useNavigate\(\);?/g,
    'const router = useRouter();'
  );

  // Rule 6: Replace navigate('/path') with router.push('/path')
  content = content.replace(
    /navigate\((['"`][^'"`]+['"`])\)/g,
    'router.push($1)'
  );

  // Rule 7: Replace <Link to= with <Link href=
  // Handle various patterns:  to=  to={
  content = content.replace(/<Link(\s+)to=/g, '<Link$1href=');
  content = content.replace(/<Link\n(\s+)to=/g, '<Link\n$1href=');

  // Rule 8: Change named export to default export
  // Match patterns like: export function FunctionName()
  // Find the original function name from the export
  const exportMatch = content.match(/export\s+function\s+(\w+)\s*\(/);
  if (exportMatch) {
    const originalName = exportMatch[1];
    // Replace the export function declaration
    content = content.replace(
      new RegExp(`export\\s+function\\s+${originalName}\\s*\\(`),
      `export default function ${newExportName}(`
    );
  }

  // Special handling for EnergyPage.tsx: remove the alias export at the end
  if (src === 'data/EnergyPage.tsx') {
    content = content.replace(
      /\n\/\/ Keep the old export name for compatibility\nexport \{ EnergyPage as EnergyDataEntry \};\n?/,
      '\n'
    );
    // Also need to handle the renamed function - the main export was changed to EnergyEntryPage
    // but the alias referenced EnergyPage which no longer exists
  }

  // Ensure directory exists
  mkdirSync(dirname(destPath), { recursive: true });

  // Write file
  writeFileSync(destPath, content, 'utf-8');
  console.log(`Converted: ${src} -> ${dest}`);
}

console.log(`\nDone! Converted ${mappings.length} files.`);
