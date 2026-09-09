const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, 'src/app/page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');

const replacements = {
  'gallery_2.jpg': 'gallery_103.jpg',
  'gallery_3.jpg': 'gallery_107.jpg',
  'gallery_4.jpg': 'gallery_112.jpg',
  'gallery_5.jpg': 'gallery_118.jpg',
  'gallery_6.jpg': 'gallery_122.jpg',
  'gallery_7.jpg': 'gallery_126.jpg',
  'gallery_8.jpg': 'gallery_130.jpg',
  // Gallery preview section had multiple gallery_1.jpg. Let's vary them
};

Object.entries(replacements).forEach(([oldImg, newImg]) => {
  content = content.split(`/${oldImg}`).join(`/${newImg}`);
});

// Fix the repeated gallery_1.jpg in the Gallery section specifically
let galleryCount = 0;
const galleryReplacements = ['gallery_133.jpg', 'gallery_137.jpg', 'gallery_141.jpg'];
content = content.replace(/gallery_1\.jpg/g, (match) => {
  // skip the impact numbers one (the first gallery_1.jpg)
  if (galleryCount === 0) {
    galleryCount++;
    return match;
  }
  const newImg = galleryReplacements[galleryCount - 1];
  galleryCount++;
  return newImg || match;
});


fs.writeFileSync(pagePath, content);
console.log('Replaced placeholder images with valid unique site images.');
