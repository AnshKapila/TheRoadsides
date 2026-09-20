const fs = require('fs');
const path = require('path');

// Helper to inject Next.js metadata into a file if it doesn't exist, or replace if it does.
function injectMetadata(filePath, metadataStr) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('export const metadata: Metadata = {') || content.includes('export const metadata = {')) {
    content = content.replace(/export const metadata.*?};\n/s, metadataStr + '\n');
  } else {
    // Insert after the last import
    const lastImportIndex = content.lastIndexOf('import ');
    const endOfLastImport = content.indexOf('\n', lastImportIndex) + 1;
    content = content.slice(0, endOfLastImport) + '\n' + metadataStr + '\n' + content.slice(endOfLastImport);
  }
  fs.writeFileSync(filePath, content);
}

// 1. Layout.tsx - Global Metadata & Organization Schema
let layout = fs.readFileSync('src/app/layout.tsx', 'utf8');
const layoutMeta = `export const metadata: Metadata = {
  metadataBase: new URL('https://the-roadsides.vercel.app'),
  title: {
    default: "The Roadsides | Vibrant Walkable Roadsides Foundation",
    template: "%s | The Roadsides"
  },
  description: "The Roadsides is a Section 8 Not-For-Profit based in Faridabad, India, dedicated to urban ecological restoration, waste management, and citizen-led environmental action.",
  openGraph: {
    title: "The Roadsides",
    description: "Transforming urban environments through ecological restoration and citizen-led action.",
    url: "https://the-roadsides.vercel.app",
    siteName: "The Roadsides",
    images: [{ url: "/hero-bg.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};`;
layout = layout.replace(/export const metadata.*?};\n/s, layoutMeta + '\n');

// Add JSON-LD to layout body
if (!layout.includes('application/ld+json')) {
  const schema = `
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              "name": "The Roadsides (Vibrant Walkable Roadsides Foundation)",
              "url": "https://the-roadsides.vercel.app",
              "logo": "https://the-roadsides.vercel.app/logo.png",
              "description": "A Section 8 Not-For-Profit in Faridabad, Haryana, India, focused on urban ecological restoration, waste management, and environmental awareness.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Faridabad",
                "addressRegion": "Haryana",
                "addressCountry": "IN"
              },
              "founder": {
                "@type": "Person",
                "name": "Seema Chowdhry Dhawan",
                "jobTitle": "Founder"
              }
            })
          }}
        />`;
  layout = layout.replace('{children}', schema + '\n          {children}');
}
fs.writeFileSync('src/app/layout.tsx', layout);

// 2. Home Page (page.tsx)
const homeMeta = `export const metadata = {
  title: "Urban Environmental Restoration | The Roadsides",
  description: "Join The Roadsides, a recognized NGO in Faridabad leading tree plantation drives, textile waste initiatives, and environmental awareness campaigns.",
};`;
injectMetadata('src/app/page.tsx', homeMeta);

// 3. About Page
const aboutMeta = `export const metadata = {
  title: "About Our Foundation | The Roadsides",
  description: "Learn about The Roadsides' mission, our recognition by the UN Environment Programme, and our citizen-led model for sustainable urban ecosystems.",
};`;
injectMetadata('src/app/about/page.tsx', aboutMeta);

// 4. Founder Page
const founderMeta = `export const metadata = {
  title: "Founder Seema Chowdhry Dhawan | The Roadsides",
  description: "Meet Seema Chowdhry Dhawan, founder of The Roadsides, sustainability strategist, and world record author of 'Baby Steps to Green Revolution'.",
};`;
injectMetadata('src/app/founder/page.tsx', founderMeta);

// Inject Person Schema into Founder Page
let founderContent = fs.readFileSync('src/app/founder/page.tsx', 'utf8');
if (!founderContent.includes('application/ld+json')) {
  const personSchema = `
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Seema Chowdhry Dhawan",
            "jobTitle": "Founder",
            "worksFor": {
              "@type": "NGO",
              "name": "The Roadsides"
            },
            "alumniOf": ["IIM Calcutta", "Wharton Online"],
            "knowsAbout": ["ESG Strategy", "Sustainability", "Environmental Stewardship"],
            "award": "Likhega India World Record Author for Baby Steps to Green Revolution"
          })
        }}
      />`;
  founderContent = founderContent.replace('<div className="flex flex-col pt-24 min-h-screen">', '<div className="flex flex-col pt-24 min-h-screen">' + personSchema);
  fs.writeFileSync('src/app/founder/page.tsx', founderContent);
}

// 5. Work / The Journey Page
const workMeta = `export const metadata = {
  title: "The Journey & Initiatives | The Roadsides",
  description: "Explore our on-ground impact: from waste segregation in Gurugram to UN Environment Programme recognitions and educational drives at Mount Carmel School.",
};`;
injectMetadata('src/app/work/page.tsx', workMeta);

// 6. Insights Page
const insightsMeta = `export const metadata = {
  title: "Insights & Environmental Case Studies | The Roadsides",
  description: "Read excerpts from 'Baby Steps to Green Revolution', expert perspectives on ESG strategy, and real-world case studies on urban sustainability.",
};`;
injectMetadata('src/app/insights/page.tsx', insightsMeta);

// 7. Generate robots.txt
fs.writeFileSync('public/robots.txt', `User-agent: *
Allow: /

Sitemap: https://the-roadsides.vercel.app/sitemap.xml
`);

// 8. Generate sitemap.ts
const sitemapCode = `import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://the-roadsides.vercel.app';
  return [
    { url: \`\${baseUrl}/\`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: \`\${baseUrl}/about\`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: \`\${baseUrl}/founder\`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: \`\${baseUrl}/work\`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: \`\${baseUrl}/gallery\`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: \`\${baseUrl}/insights\`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: \`\${baseUrl}/contact\`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: \`\${baseUrl}/get-involved\`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
  ];
}
`;
fs.writeFileSync('src/app/sitemap.ts', sitemapCode);

// 9. Generate llms.txt
const llmsContent = `# The Roadsides

> The Roadsides (Vibrant Walkable Roadsides Foundation) is a Section 8 Not-For-Profit based in Faridabad, Haryana, India. It focuses on urban ecological restoration, waste management, and empowering citizens to improve their immediate environments.

## Core Identity
- **Founder**: Seema Chowdhry Dhawan (IIM Calcutta and Wharton Online alumni, ESG strategy expert).
- **Mission**: To create safer, cleaner, greener roadside environments by translating corporate sustainability principles into hyperlocal, citizen-led action.
- **Philosophy**: "Baby Steps to Green Revolution" - small, correct daily actions, done consistently across a population, create real systemic change.

## Key Recognitions & Achievements
- Officially recognized by the **UN Environment Programme**.
- Host of a World Environment Day 2026 event in Faridabad.
- Featured in **CEO India Magazine** and **YourZourney**.
- Seema Chowdhry Dhawan is a **Likhega India World Record Author** for her foundational text, "Baby Steps to Green Revolution".
- Participated in high-level global discourses including a **UNESCO Sustainability Event**.
- Recognized at **Venture Day Gurgaon by Cohrrt** (April 2025).

## Major Initiatives (The Journey)
- **Sarhaul Village, Gurugram Drives**: Waste segregation, meticulous management, and Swachhata App civic sensitization.
- **Ballabgarh & Faridabad Drives**: Plantation and continued nurturing system.
- **Mount Carmel 'Sociopreneur' Jury**: Empowering youth ideas for environmental change at 'Comonomics 4.0'.
- **DAV Institute of Management NSS Event**: March 2026 awareness drive around waste management protocols and civic sense.

## Contact & Links
- Website: https://the-roadsides.vercel.app
- Insights & Blog: https://the-roadsides.vercel.app/insights
- The Journey: https://the-roadsides.vercel.app/work
`;
fs.writeFileSync('public/llms.txt', llmsContent);

console.log("SEO and AEO rewrite completed successfully.");
