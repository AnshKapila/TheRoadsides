const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 1. Fix globals.css
const cssPath = path.join(__dirname, 'src/app/globals.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');
// Use case-insensitive replace to catch #5C6B47
cssContent = cssContent.replace(/--color-moss:\s*#[a-fA-F0-9]+;/gi, '--color-primary-green: #C0DA3B;');
cssContent = cssContent.replace(/--moss:\s*#[a-fA-F0-9]+;/gi, '--primary-green: #C0DA3B;');
fs.writeFileSync(cssPath, cssContent);
console.log('Fixed globals.css');

// 2. Fix the numericals in Hero section of page.tsx
const pagePath = path.join(__dirname, 'src/app/page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf8');

// Remove <div className="text-[48px] font-bold tracking-tight mb-[4px]">24+</div>
pageContent = pageContent.replace(/<div className="text-\[48px\] font-bold tracking-tight mb-\[4px\]">.*?<\/div>\n\s*/g, '');
// Update subheadings to text-[var(--line)] instead of text-[var(--paper)]/80
pageContent = pageContent.replace(/text-\[var\(--paper\)\]\/80/g, 'text-[var(--line)]');
fs.writeFileSync(pagePath, pageContent);
console.log('Fixed Hero numericals');

// 3. Fix Button Micro-Animations and ensure group class
const files = execSync('Get-ChildItem -Path src -Recurse -Filter *.tsx | Select-Object -ExpandProperty FullName', { shell: 'powershell.exe' }).toString().trim().split('\r\n');

files.forEach(file => {
  if (!file) return;
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Add group class to buttons if not present
  content = content.replace(/(class(?:Name)?="[^"]*)(bg-\[var\(--primary-green\)\])([^"]*")/g, (match, p1, p2, p3) => {
    if (!match.includes('group')) {
      return p1 + 'group ' + p2 + p3;
    }
    return match;
  });

  // Also fix secondary buttons if they exist
  content = content.replace(/(class(?:Name)?="[^"]*)(bg-transparent border-\[1\.5px\] border-\[var\(--charcoal\)\])([^"]*")/g, (match, p1, p2, p3) => {
    let m = p1 + 'group bg-transparent border-[1.5px] border-[var(--primary-green)] text-[var(--primary-green)]' + p3.replace(/text-\[var\(--charcoal\)\]/g, '');
    return m;
  });

  // Inject micro animation for icons
  const icons = ['Heart', 'Wallet', 'Users', 'Handshake', 'BookOpen', 'Newspaper', 'ImageIcon', 'Leaf', 'Send'];
  
  icons.forEach(icon => {
    // Regex to find <IconName className="..." /> inside a button/link
    // We only replace it if it hasn't been replaced yet (i.e. not wrapped in relative overflow-hidden)
    const regex = new RegExp(`<${icon} className="([^"]+)" strokeWidth={2\\.5} \\/>`, 'g');
    content = content.replace(regex, (match, classes) => {
      // Avoid double-wrapping if the script is run twice
      if (classes.includes('absolute')) return match; 
      
      return `<span className="relative w-[18px] h-[18px] overflow-hidden flex items-center justify-center shrink-0">
              <${icon} className="absolute w-[18px] h-[18px] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[150%]" strokeWidth={2.5} />
              <${icon} className="absolute w-[18px] h-[18px] -translate-x-[150%] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0" strokeWidth={2.5} />
            </span>`;
    });
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log(`Fixed buttons in ${file}`);
  }
});
