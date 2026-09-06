const fs = require('fs');
const https = require('https');

async function downloadImages() {
  console.log('Fetching HTML...');
  const html = await fetch('https://theroadsides.co.in/').then(r => r.text());
  
  const regex = /\/\/img1\.wsimg\.com\/isteam\/(ip|stock)\/[^"'\s\)]+/g;
  const matches = [...new Set(html.match(regex))];
  
  console.log(`Found ${matches.length} unique image patterns`);
  
  if (!fs.existsSync('./public/gallery')) fs.mkdirSync('./public/gallery', { recursive: true });
  
  let count = 0;
  for (let i = 0; i < matches.length; i++) {
    let url = matches[i];
    if (url.startsWith('//')) url = 'https:' + url;
    
    // clean up url
    url = url.split('/:/')[0]; 
    url = url.split('?')[0];

    // ignore if it's the logo or background default
    if (url.includes('logo-default')) continue;

    const filename = `gallery_${count}.jpg`;
    console.log(`Downloading ${url} as ${filename}`);
    
    await new Promise(resolve => {
      https.get(url, (res) => {
        if (res.statusCode !== 200) {
           console.log(`Failed ${url}`);
           resolve();
           return;
        }
        const fileStream = fs.createWriteStream(`./public/gallery/${filename}`);
        res.pipe(fileStream);
        fileStream.on('finish', resolve);
      }).on('error', resolve);
    });
    count++;
  }
  console.log('Done!');
}

downloadImages();
