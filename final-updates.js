const fs = require('fs');

// 1. Update page.tsx
let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// Fix Hero: remove <br />
page = page.replace(/Making India's roadsides walkable,\s*<br \/>\s*green, and clean [—\?"]+\s*<br \/>\s*one street at a time\./i, "Making India's roadsides walkable, green, and clean — one street at a time.");
page = page.replace(/Making India's roadsides walkable, <br \/>green, and clean — <br \/>one street at a time\./g, "Making India's roadsides walkable, green, and clean — one street at a time.");
page = page.replace(/Making India's roadsides walkable, <br \/>green, and clean \?" <br \/>one street at a time\./g, "Making India's roadsides walkable, green, and clean — one street at a time.");

// Fix Trust Strip: 
page = page.replace(
  '<div className="text-[24px] font-semibold text-[var(--paper)] leading-[1.3] mb-[8px]">Founded 2024</div>',
  '<div className="text-[24px] font-semibold text-[var(--paper)] leading-[1.3] mb-[8px]">A Section 8 Company</div>'
);
page = page.replace(
  '<div className="text-[var(--line)] text-[16px] leading-[1.65]">A Section 8 registered nonprofit, built from one person&apos;s initiative into a growing on-ground movement.</div>',
  '<div className="text-[var(--line)] text-[16px] leading-[1.65]">Founded in 2024</div>'
);

// If it says "3 flagship on-ground initiatives", change to "flagship on-ground initiatives"
// If it says "2 flagship initiatives, and counting", change to "flagship on-ground initiatives" (as requested by user removing numbers)
page = page.replace(
  '<div className="text-[24px] font-semibold text-[var(--paper)] leading-[1.3] mb-[8px]">3 flagship on-ground initiatives</div>',
  '<div className="text-[24px] font-semibold text-[var(--paper)] leading-[1.3] mb-[8px]">flagship on-ground initiatives</div>'
);
page = page.replace(
  '<div className="text-[24px] font-semibold text-[var(--paper)] leading-[1.3] mb-[8px]">2 flagship initiatives, and counting</div>',
  '<div className="text-[24px] font-semibold text-[var(--paper)] leading-[1.3] mb-[8px]">flagship initiatives, and counting</div>'
);

fs.writeFileSync('src/app/page.tsx', page);

// 2. Update layout.tsx (Footer links)
let layout = fs.readFileSync('src/app/layout.tsx', 'utf8');
const oldFooterConnect = `              <div>
                <h4 className="text-[var(--paper)] font-bold mb-[24px] tracking-[0.01em] uppercase text-[12px]">Connect</h4>
                <ul className="flex flex-col gap-[16px] mb-[32px]">
                  <li><Link href="/contact" className="text-[var(--paper)]/70 hover:text-[var(--primary-green)] transition-colors font-medium text-[16px]">Contact Us</Link></li>
                  <li><Link href="/get-involved" className="text-[var(--paper)]/70 hover:text-[var(--primary-green)] transition-colors font-medium text-[16px]">Join Us</Link></li>
                  <li><a href="#" className="text-[var(--paper)]/70 hover:text-[var(--primary-green)] transition-colors font-medium text-[16px]">LinkedIn</a></li>
                </ul>
              </div>`;

const newFooterConnect = `              <div>
                <h4 className="text-[var(--paper)] font-bold mb-[24px] tracking-[0.01em] uppercase text-[12px]">Connect</h4>
                <ul className="flex flex-col gap-[16px] mb-[32px]">
                  <li><a href="mailto:team@theroadsides.co.in" className="text-[var(--paper)]/70 hover:text-[var(--primary-green)] transition-colors font-medium text-[16px]">team@theroadsides.co.in</a></li>
                  <li><a href="https://www.linkedin.com/company/the-roadsides/" target="_blank" rel="noopener noreferrer" className="text-[var(--paper)]/70 hover:text-[var(--primary-green)] transition-colors font-medium text-[16px]">LinkedIn</a></li>
                  <li><a href="https://www.youtube.com/@TheRoadsides-w9r" target="_blank" rel="noopener noreferrer" className="text-[var(--paper)]/70 hover:text-[var(--primary-green)] transition-colors font-medium text-[16px]">YouTube</a></li>
                  <li><a href="https://www.facebook.com/people/The-Roadsides/61563980740751/" target="_blank" rel="noopener noreferrer" className="text-[var(--paper)]/70 hover:text-[var(--primary-green)] transition-colors font-medium text-[16px]">Facebook</a></li>
                </ul>
              </div>`;
layout = layout.replace(oldFooterConnect, newFooterConnect);
fs.writeFileSync('src/app/layout.tsx', layout);

// 3. Update insights/page.tsx (Clear blog posts, add "Blog")
let insights = fs.readFileSync('src/app/insights/page.tsx', 'utf8');

// Change Page Header
insights = insights.replace(
  '<h1 className="text-[48px] font-bold text-[var(--charcoal)] tracking-[-0.01em] leading-[1.15] mb-[16px]">Insights</h1>',
  '<h1 className="text-[48px] font-bold text-[var(--charcoal)] tracking-[-0.01em] leading-[1.15] mb-[16px]">Insights & Blog</h1>'
);

// Clear the posts array
insights = insights.replace(
  /const posts = \[[^\]]*\];/s,
  'const posts = [];'
);

fs.writeFileSync('src/app/insights/page.tsx', insights);

console.log("Updates complete");
