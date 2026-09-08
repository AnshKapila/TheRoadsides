const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const galleryDir = path.join(__dirname, 'public/gallery');

function getFiles(dir) {
  try {
    return fs.readdirSync(dir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
  } catch (e) {
    console.error("Error reading directory:", e);
    return [];
  }
}

function hashFile(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  const hashSum = crypto.createHash('md5');
  hashSum.update(fileBuffer);
  return hashSum.digest('hex');
}

const files = getFiles(galleryDir);
const hashMap = {};

console.log(`Hashing ${files.length} images...`);

files.forEach(file => {
  const filePath = path.join(galleryDir, file);
  const hash = hashFile(filePath);
  if (!hashMap[hash]) {
    hashMap[hash] = [];
  }
  hashMap[hash].push(file);
});

let duplicateCount = 0;
const duplicatesToReplace = {};
const deletionList = [];

Object.entries(hashMap).forEach(([hash, fileList]) => {
  if (fileList.length > 1) {
    // Sort files logically so gallery_2.jpg comes before gallery_10.jpg
    fileList.sort((a, b) => {
      const numA = parseInt(a.replace(/[^0-9]/g, ''), 10) || 0;
      const numB = parseInt(b.replace(/[^0-9]/g, ''), 10) || 0;
      return numA - numB;
    });
    
    const keep = fileList[0];
    const duplicates = fileList.slice(1);
    duplicateCount += duplicates.length;
    
    duplicates.forEach(dup => {
      duplicatesToReplace[dup] = keep;
      deletionList.push(dup);
    });
  }
});

console.log(`Found ${duplicateCount} duplicate images across ${Object.keys(hashMap).length} unique images.`);
fs.writeFileSync('duplicates.json', JSON.stringify({
  replaceMap: duplicatesToReplace,
  deletionList: deletionList
}, null, 2));
console.log('Saved mapping to duplicates.json');
