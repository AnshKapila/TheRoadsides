const fs = require('fs');

let content = fs.readFileSync('src/app/work/page.tsx', 'utf8');

// 1. Add to initiatives array
const newInitiative = `  const initiatives = [
    {
      title: "Mount Carmel 'Sociopreneur' Jury",
      tag: "Mentorship & Education",
      desc: "Invited to Mount Carmel School, Dwarka, as a jury member for 'Comonomics 4.0'. Watching class 7 and 8 students imagine real ideas for environmental change was genuinely inspiring. Two very different rooms recently—one learning from our brightest young trailblazers, one sharing the spotlight with established voices. The future does look promising.",
      img: "mount_carmel.png"
    },`;

content = content.replace('  const initiatives = [', newInitiative);

// 2. Rewrite page header
content = content.replace('<span className="text-[var(--charcoal)] font-semibold text-[14px]">Our Work</span>', '<span className="text-[var(--charcoal)] font-semibold text-[14px]">The Journey</span>');

content = content.replace('Action on the Ground', 'The Journey');

content = content.replace('&quot;Our initiatives turn philosophy into physical change. Here is where we dig in, plant, and nurture.&quot;', '&quot;From learning from our brightest young trailblazers to sharing the spotlight with established voices in the field, the future does look promising.&quot;');

fs.writeFileSync('src/app/work/page.tsx', content);

// 3. Update the Header navigation link
let headerContent = fs.readFileSync('src/components/Header.tsx', 'utf8');
headerContent = headerContent.replace(/{ name: "Our Work", href: "\/work" }/, '{ name: "The Journey", href: "/work" }');
fs.writeFileSync('src/components/Header.tsx', headerContent);

// 4. Update Footer links in page.tsx if there is an "Our Work" link.
let homeContent = fs.readFileSync('src/app/page.tsx', 'utf8');
if (homeContent.includes('>Our Work<')) {
  homeContent = homeContent.replaceAll('>Our Work<', '>The Journey<');
  fs.writeFileSync('src/app/page.tsx', homeContent);
}

console.log("Updated page titles, arrays, and headers.");
