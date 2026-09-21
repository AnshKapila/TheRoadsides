const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('src/app', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Specifically remove the end of the hero string first
    if (filePath.replace(/\\/g, '/').endsWith('src/app/page.tsx')) {
        content = content.replace(/walkable, green, and clean [—\?\-"]* one street at a time\./gi, 'walkable, green, and clean.');
    }

    // Now remove all em dashes and corrupted characters globally
    // Matching " — ", " - ", " ?" ", etc.
    // The user said "Remove all em dashes". Often they are used as punctuation. 
    // If I replace with a space, "early — and" becomes "early  and".
    // I'll replace ` ?" ` (with spaces around it) with ` `
    content = content.replace(/ [—\-\–\?"]+ /g, ' ');
    
    // Also catch them without spaces
    content = content.replace(/[—\–\?"]/g, '');

    fs.writeFileSync(filePath, content);
  }
});

console.log("Dashes removed.");
