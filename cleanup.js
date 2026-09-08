const fs = require('fs');
const path = require('path');

const duplicatesData = JSON.parse(fs.readFileSync('duplicates.json', 'utf8'));
const replaceMap = duplicatesData.replaceMap;
const deletionList = duplicatesData.deletionList;

const filesToUpdate = [
  path.join(__dirname, 'src/app/page.tsx'),
  path.join(__dirname, 'src/app/gallery/page.tsx')
];

filesToUpdate.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // We'll search for /gallery/gallery_X.jpg and replace
    Object.entries(replaceMap).forEach(([duplicateName, keepName]) => {
      const searchStr = `/gallery/${duplicateName}`;
      const replaceStr = `/gallery/${keepName}`;
      if (content.includes(searchStr)) {
        content = content.split(searchStr).join(replaceStr);
        changed = true;
      }
    });

    if (changed) {
      fs.writeFileSync(filePath, content);
      console.log(`Updated references in ${path.basename(filePath)}`);
    }
  }
});

// Now safely delete the duplicates
let deletedCount = 0;
deletionList.forEach(file => {
  const filePath = path.join(__dirname, 'public/gallery', file);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    deletedCount++;
  }
});

console.log(`Deleted ${deletedCount} duplicate images from public/gallery/`);
