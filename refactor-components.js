const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all .tsx files
const files = execSync('Get-ChildItem -Path src -Recurse -Filter *.tsx | Select-Object -ExpandProperty FullName', { shell: 'powershell.exe' }).toString().trim().split('\r\n');

files.forEach(file => {
  if (!file) return;
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // 1. Rename --moss to --primary-green everywhere
  content = content.replace(/var\(--moss\)/g, 'var(--primary-green)');

  // 2. Global Rule: "black" -> Charcoal, "white" -> Paper
  // We should be careful not to replace text-white inside an icon, but UI classes.
  // The user said: "Apply this retroactively to anything already built that uses true black or true white incorrectly."
  // bg-black -> bg-[var(--charcoal)]
  content = content.replace(/bg-black/g, 'bg-[var(--charcoal)]');
  // bg-[var(--white)] -> bg-[var(--paper)]
  content = content.replace(/bg-\[var\(--white\)\]/g, 'bg-[var(--paper)]');
  // text-[var(--white)] -> text-[var(--paper)]
  content = content.replace(/text-\[var\(--white\)\]/g, 'text-[var(--paper)]');
  // text-white -> text-[var(--paper)] (except stroke/fill)
  content = content.replace(/text-white(?![A-Za-z0-9\-])/g, 'text-[var(--paper)]');
  
  // 3. Button Updates: Primary Green must use Charcoal text.
  // Current primary button classes often look like:
  // bg-[var(--primary-green)] text-[var(--paper)] px-[26px] (or px-[32px] if modified)
  // We need to change text-[var(--paper)] to text-[var(--charcoal)] when bg-[var(--primary-green)] is present.
  
  // Let's use a regex to find elements with bg-[var(--primary-green)] and replace their text colors
  content = content.replace(/(class(?:Name)?="[^"]*bg-\[var\(--primary-green\)\][^"]*)text-\[var\(--paper\)\]([^"]*")/g, '$1text-[var(--charcoal)]$2');
  
  // Also fix the text color on hover if it was hover:text-[var(--white)]
  content = content.replace(/(class(?:Name)?="[^"]*bg-\[var\(--primary-green\)\][^"]*)hover:text-\[var\(--paper\)\]([^"]*")/g, '$1hover:text-[var(--paper)]$2'); // keep paper for brick hover maybe? Or charcoal. The user said "Any button or fill using this green MUST use Charcoal". If it hovers to Brick, text should be Paper since Brick is dark.
  
  // Update horizontal padding: px-[26px] -> px-[32px]
  content = content.replace(/(class(?:Name)?="[^"]*bg-\[var\(--primary-green\)\][^"]*)px-\[26px\]([^"]*")/g, '$1px-[32px]$2');
  
  // Ensure flex, items-center, gap-[8px] are present on buttons
  // Since we are adding icons, we need flex. Most of my previous buttons had `inline-flex items-center justify-center`. Let's ensure gap-[8px] is there.
  content = content.replace(/(class(?:Name)?="[^"]*inline-flex items-center[^"]*?) gap-\[8px\]([^"]*")/g, '$1$2'); // remove if already there to avoid duplicates
  content = content.replace(/(class(?:Name)?="[^"]*inline-flex items-center)([^"]*")/g, '$1 gap-[8px]$2');

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
