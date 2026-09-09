const fs = require('fs');
const path = require('path');

// 1. Update design-system-v2.html
const dsPath = path.join(__dirname, 'design-system-v2.html');
let dsContent = fs.readFileSync(dsPath, 'utf8');

// Replace Moss variables
dsContent = dsContent.replace(/--moss: #5C6B47;/g, '--primary-green: #C0DA3B;');
dsContent = dsContent.replace(/var\(--moss\)/g, 'var(--primary-green)');
dsContent = dsContent.replace(/Moss/g, 'Primary Green');
dsContent = dsContent.replace(/#5C6B47/g, '#C0DA3B');

// Fix button text contrast rule
dsContent = dsContent.replace(/\.btn-primary \{ background: var\(--primary-green\); color: var\(--paper\); \}/g, '.btn-primary { background: var(--primary-green); color: var(--charcoal); padding: 0 32px; display: inline-flex; align-items: center; gap: 8px; justify-content: center; }');
dsContent = dsContent.replace(/\.btn-secondary \{ border: 1\.5px solid var\(--charcoal\); color: var\(--charcoal\); \}/g, '.btn-secondary { border: 1.5px solid var(--charcoal); color: var(--charcoal); padding: 0 32px; display: inline-flex; align-items: center; gap: 8px; justify-content: center; }');

// Update contrast table
dsContent = dsContent.replace(/<tr><td>Primary Green text on Paper<\/td><td>5\.43:1<\/td><td class="pass">Pass AA<\/td><\/tr>/, '<tr><td>Primary Green text on Paper</td><td>1.49:1</td><td class="fail">Fail — never use</td></tr>');
dsContent = dsContent.replace(/<tr><td>Paper text on Primary Green \(primary button\)<\/td><td>5\.43:1<\/td><td class="pass">Pass AA<\/td><\/tr>/, '<tr><td>Paper text on Primary Green (primary button)</td><td>1.58:1</td><td class="fail">Fail — never use</td></tr>');
dsContent = dsContent.replace(/<tr><td>Charcoal text on Primary Green<\/td><td>2\.73:1<\/td><td class="fail">Fail — never use<\/td><\/tr>/, '<tr><td>Charcoal text on Primary Green</td><td>9.96:1</td><td class="pass">Pass AAA</td></tr>');

// Update button descriptions
dsContent = dsContent.replace(/Text: Paper throughout — charcoal text on Primary Green fails contrast \(2\.73:1\) and must never be used\./, 'Text: Charcoal text on Primary Green (9.96:1). Paper text fails contrast and must never be used.');
dsContent = dsContent.replace(/Flat fills, 3px radius, 44px minimum height for tap targets\. Text describes the action plainly — never ends in an arrow\./, 'Flat fills, 3px radius, 44px minimum height. 32px horizontal padding for Primary and Secondary. Primary and Secondary buttons must include a contextual trailing icon (not a generic arrow) with an 8px gap. Ghost remains text-only.');

// Global Rule addition
if(!dsContent.includes("GLOBAL RULE")) {
  dsContent = dsContent.replace(/<p class="section-dek">One primary, one tertiary highlight/, '<div style="margin-bottom: 24px; padding: 16px; border-left: 4px solid var(--charcoal); background: #eee;"><p class="t-body" style="margin:0;"><strong>GLOBAL RULE:</strong> Whenever "black" or "white" is requested, use Charcoal (#25231F) and Paper (#FAF8F5). Never use true #000000 or #FFFFFF unless explicit.</p></div>\n        <p class="section-dek">One primary, one tertiary highlight');
}

fs.writeFileSync(dsPath, dsContent);
console.log('Updated design-system-v2.html');

// 2. Update globals.css
const cssPath = path.join(__dirname, 'src/app/globals.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');
cssContent = cssContent.replace(/--color-moss: #5c6b47;/g, '--color-primary-green: #c0da3b;');
cssContent = cssContent.replace(/--moss: #5c6b47;/g, '--primary-green: #c0da3b;');
fs.writeFileSync(cssPath, cssContent);
console.log('Updated globals.css');
