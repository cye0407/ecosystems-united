#!/usr/bin/env node

/**
 * Stack Reference Fixer
 * 
 * Run from the site directory:
 * node scripts/fix-stack-references.js
 * 
 * This script fixes:
 * 1. Stack 4: "Sustainable Practices" → "Adaptive Resilience"
 * 2. Stack 4: "stack-4-practices" → "stack-4-resilience"
 * 3. Stack 5: "Story & Positioning" → "Regenerative Advantage"
 * 4. Stack 5: "stack-5-story" → "stack-5-regenerative"
 */

const fs = require('fs');
const path = require('path');

const ARTICLES_DIR = path.join(__dirname, '..', 'app', 'articles');

// Replacements to make (order matters - more specific first)
const replacements = [
  // Stack 4 fixes
  { from: /stack-4-practices/g, to: 'stack-4-resilience' },
  { from: /Stack 4: Sustainable Practices/g, to: 'Stack 4: Adaptive Resilience' },
  
  // Stack 5 fixes  
  { from: /stack-5-story/g, to: 'stack-5-regenerative' },
  { from: /Stack 5: Story & Positioning/g, to: 'Stack 5: Regenerative Advantage' },
];

// Files that need stack reassignment (these need manual content changes too)
const reassignments = {
  'cover-crops-roi': { 
    from: 5, 
    to: 2,
    note: 'Cover crop ROI is about efficiency/cost savings, not regenerative systems'
  },
  'soil-health-business-case': { 
    from: 5, 
    to: 2,
    note: 'Soil health business case is about cost reduction, fits Stack 2 better'
  },
};

function getAllArticleFiles(dir) {
  const files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && item !== 'migrated-articles') {
        const pagePath = path.join(fullPath, 'page.tsx');
        if (fs.existsSync(pagePath)) {
          files.push({ dir: item, path: pagePath });
        }
      }
    }
  } catch (err) {
    console.error('Error reading directory:', err.message);
  }
  
  return files;
}

function fixFile(filePath, articleName) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  const changes = [];

  // Apply all replacements
  for (const { from, to } of replacements) {
    const matches = content.match(from);
    if (matches) {
      content = content.replace(from, to);
      changes.push(`  "${from.source}" → "${to}" (${matches.length} occurrences)`);
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Fixed: ${articleName}`);
    changes.forEach(c => console.log(c));
  }

  // Check if this file needs stack reassignment
  if (reassignments[articleName]) {
    const { from, to, note } = reassignments[articleName];
    console.log(`\n⚠️  ${articleName} needs MANUAL reassignment:`);
    console.log(`   Stack ${from} → Stack ${to}`);
    console.log(`   Reason: ${note}`);
    console.log(`   Changes needed:`);
    console.log(`   - Change stack number badge from ${from} to ${to}`);
    console.log(`   - Update nav link to stack-${to}-efficiency`);
    console.log(`   - Update badge text to "Stack ${to}: Operational Efficiency"`);
    console.log(`   - Update bottom CTA color from #2D5A47 to #5B4A9E`);
    console.log(`   - Rewrite CTA content for Stack 2 focus\n`);
  }

  return modified;
}

function main() {
  console.log('═══════════════════════════════════════════');
  console.log('  Stack Reference Fixer for Ecosystems United');
  console.log('═══════════════════════════════════════════\n');

  if (!fs.existsSync(ARTICLES_DIR)) {
    console.error(`Error: Articles directory not found at ${ARTICLES_DIR}`);
    console.error('Make sure to run this script from the site directory:');
    console.error('  cd site');
    console.error('  node scripts/fix-stack-references.js');
    process.exit(1);
  }

  const files = getAllArticleFiles(ARTICLES_DIR);
  console.log(`Found ${files.length} article files\n`);
  console.log('───────────────────────────────────────────\n');

  let fixedCount = 0;
  
  for (const { dir, path: filePath } of files) {
    if (fixFile(filePath, dir)) {
      fixedCount++;
      console.log('');
    }
  }

  console.log('───────────────────────────────────────────');
  console.log(`\n✓ Automated fixes applied to ${fixedCount} files`);
  
  // Summary of manual work needed
  const needsReassignment = Object.keys(reassignments);
  if (needsReassignment.length > 0) {
    console.log(`\n═══════════════════════════════════════════`);
    console.log(`  MANUAL WORK REQUIRED`);
    console.log(`═══════════════════════════════════════════\n`);
    console.log(`The following files need their stack assignment changed`);
    console.log(`(not just text replacement, but actual content updates):\n`);
    
    for (const article of needsReassignment) {
      const { from, to, note } = reassignments[article];
      console.log(`📄 ${article}/page.tsx`);
      console.log(`   Current: Stack ${from}`);
      console.log(`   Should be: Stack ${to}`);
      console.log(`   Reason: ${note}\n`);
    }
  }

  console.log('\nDone! Review changes with: git diff');
}

main();
