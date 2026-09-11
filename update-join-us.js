const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const files = execSync('Get-ChildItem -Path src -Recurse -Filter *.tsx | Select-Object -ExpandProperty FullName', { shell: 'powershell.exe' }).toString().trim().split('\r\n');

files.forEach(file => {
  if (!file) return;
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // 1. Replace "Get Involved" with "Join Us" in text
  // We should be careful to not break URLs if possible, though "get-involved" is lowercase hyphenated.
  // The user said "Remove Get Involved, call it Join Us anywhere in the website".
  content = content.replace(/>\s*Get Involved\s*</gi, '>Join Us<');
  content = content.replace(/>\s*Get Involved Today\s*</gi, '>Join Us Today<');
  content = content.replace(/>\s*Get involved\s*</g, '>Join Us<');
  // Handle it if there's an icon inside
  content = content.replace(/Get Involved /g, 'Join Us ');
  content = content.replace(/Get involved /g, 'Join Us ');
  
  // Also replace in Header link texts
  content = content.replace(/Get Involved/g, 'Join Us');
  
  // 2. Replace Heart icon with Handshake icon
  // First, ensure Handshake is imported if Heart is imported
  if (content.includes('Heart') && !content.includes('Handshake')) {
    content = content.replace(/import \{([^}]+)\} from "lucide-react";/, (match, p1) => {
      return `import {${p1}, Handshake} from "lucide-react";`;
    });
  }
  
  // Now replace the Heart tags
  content = content.replace(/<Heart /g, '<Handshake ');

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
