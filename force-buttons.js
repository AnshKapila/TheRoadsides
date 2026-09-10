const fs = require('fs');
const path = require('path');

const primaryClasses = 'group inline-flex items-center gap-[8px] justify-center bg-[var(--primary-green)] text-[var(--charcoal)] font-semibold px-[32px] py-[13px] rounded-[3px] hover:bg-[var(--charcoal)] hover:text-[var(--primary-green)] transition-all duration-300 text-[16px] min-h-[44px]';
const secondaryClasses = 'group inline-flex items-center gap-[8px] justify-center bg-transparent border-[1.5px] border-[var(--primary-green)] text-[var(--primary-green)] font-semibold px-[32px] py-[13px] rounded-[3px] hover:bg-[var(--primary-green)] hover:text-[var(--charcoal)] transition-all duration-300 text-[16px] min-h-[44px]';
const ghostClasses = 'group inline-flex items-center gap-[8px] justify-center bg-transparent text-[var(--primary-green)] font-semibold hover:text-[var(--charcoal)] transition-all duration-300 text-[16px]';

const buildIcon = (iconName) => {
  return `<span className="relative w-[18px] h-[18px] overflow-hidden flex items-center justify-center shrink-0">
    <${iconName} className="absolute w-[18px] h-[18px] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[150%]" strokeWidth={2.5} />
    <${iconName} className="absolute w-[18px] h-[18px] -translate-x-[150%] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0" strokeWidth={2.5} />
  </span>`;
};

// 1. Header.tsx (Navbar Get Involved -> ArrowRight)
let headerContent = fs.readFileSync('src/components/Header.tsx', 'utf8');
if (!headerContent.includes('ArrowRight')) {
  headerContent = headerContent.replace(/import { Heart } from "lucide-react";/, 'import { ArrowRight } from "lucide-react";');
} else {
  headerContent = headerContent.replace(/import { Heart } from "lucide-react";\n/, '');
}
headerContent = headerContent.replace(/<Link href="\/get-involved" className="[^"]+">[\s\S]*?<\/Link>/, `<Link href="/get-involved" className="${primaryClasses}">
          Get Involved ${buildIcon('ArrowRight')}
        </Link>`);
fs.writeFileSync('src/components/Header.tsx', headerContent);

// 2. page.tsx
let pageContent = fs.readFileSync('src/app/page.tsx', 'utf8');
// Donate Now button (Primary)
pageContent = pageContent.replace(/<Link href="\/get-involved" className="[^"]+">\s*Donate Now[\s\S]*?<\/Link>/, `<Link href="/get-involved" className="${primaryClasses}">
                  Donate Now ${buildIcon('ArrowRight')}
                </Link>`);
// Watch the Video button (Secondary)
pageContent = pageContent.replace(/<Link href="\/about" className="[^"]+">\s*Watch the Video[\s\S]*?<\/Link>/, `<Link href="/about" className="${secondaryClasses}">
                  Watch the Video ${buildIcon('Play')}
                </Link>`);
// Read Seema's Story (Primary)
pageContent = pageContent.replace(/<Link href="\/founder" className="[^"]+">\s*Read Seema&apos;s Story[\s\S]*?<\/Link>/, `<Link href="/founder" className="${primaryClasses}">
                Read Seema&apos;s Story ${buildIcon('BookOpen')}
              </Link>`);
// Read All Insights (Primary)
pageContent = pageContent.replace(/<Link href="\/insights" className="[^"]+">\s*Read All Insights[\s\S]*?<\/Link>/, `<Link href="/insights" className="${primaryClasses}">
              Read All Insights ${buildIcon('Newspaper')}
            </Link>`);
// View Full Gallery top button (Primary)
pageContent = pageContent.replace(/<Link href="\/gallery" className="[^"]+">\s*View Full Gallery[\s\S]*?<\/Link>/, `<Link href="/gallery" className="${primaryClasses}">
              View Full Gallery ${buildIcon('ImageIcon')}
            </Link>`);
// View Full Gallery grid block (Special White Text one)
pageContent = pageContent.replace(/<Link href="\/gallery" className="bg-\[var\(--charcoal\)\] rounded-\[3px\] flex items-center justify-center text-\[var\(--paper\)\] hover:bg-\[var\(--primary-green\)\] transition-colors group">[\s\S]*?<\/Link>/, `<Link href="/gallery" className="bg-[var(--charcoal)] rounded-[3px] flex items-center justify-center text-[var(--paper)] hover:bg-[var(--primary-green)] hover:text-[var(--charcoal)] transition-colors group duration-300">
                  <div className="flex flex-col items-center">
                    <span className="font-semibold text-[16px] mb-[8px]">View Full Gallery</span>
                    ${buildIcon('ArrowRight')}
                  </div>
                </Link>`);
// Get Involved (B part solution section - section 9)
pageContent = pageContent.replace(/<Link href="\/get-involved" className="[^"]+">\s*Get involved[\s\S]*?<\/Link>/, `<Link href="/get-involved" className="${primaryClasses}">
                  Get Involved ${buildIcon('ArrowRight')}
                </Link>`);
fs.writeFileSync('src/app/page.tsx', pageContent);

// 3. get-involved/page.tsx
let getInvContent = fs.readFileSync('src/app/get-involved/page.tsx', 'utf8');
// Make a Donation
getInvContent = getInvContent.replace(/<Link href="\/contact" className="[^"]+">\s*Make a Donation[\s\S]*?<\/Link>/, `<Link href="/contact" className="${primaryClasses}">
                Make a Donation ${buildIcon('Wallet')}
              </Link>`);
// Sign Up to Volunteer
getInvContent = getInvContent.replace(/<Link href="\/contact" className="[^"]+">\s*Sign Up to Volunteer[\s\S]*?<\/Link>/, `<Link href="/contact" className="${primaryClasses}">
                Sign Up to Volunteer ${buildIcon('Users')}
              </Link>`);
// Explore Partnerships
getInvContent = getInvContent.replace(/<Link href="\/contact" className="[^"]+">\s*Explore Partnerships[\s\S]*?<\/Link>/, `<Link href="/contact" className="${primaryClasses}">
                Explore Partnerships ${buildIcon('Handshake')}
              </Link>`);
fs.writeFileSync('src/app/get-involved/page.tsx', getInvContent);

// 4. founder/page.tsx
let founderContent = fs.readFileSync('src/app/founder/page.tsx', 'utf8');
// Get Involved Today
founderContent = founderContent.replace(/<Link href="\/get-involved" className="[^"]+">\s*Get Involved Today[\s\S]*?<\/Link>/, `<Link href="/get-involved" className="${primaryClasses}">
            Get Involved Today ${buildIcon('Heart')}
          </Link>`);
fs.writeFileSync('src/app/founder/page.tsx', founderContent);

// 5. contact/page.tsx
let contactContent = fs.readFileSync('src/app/contact/page.tsx', 'utf8');
// Submit Message
contactContent = contactContent.replace(/<button type="button" className="[^"]+">\s*Submit Message[\s\S]*?<\/button>/, `<button type="button" className="${primaryClasses}">
                  Submit Message ${buildIcon('Send')}
                </button>`);
fs.writeFileSync('src/app/contact/page.tsx', contactContent);

// 6. about/page.tsx
let aboutContent = fs.readFileSync('src/app/about/page.tsx', 'utf8');
// Get Involved
aboutContent = aboutContent.replace(/<Link href="\/get-involved" className="[^"]+">\s*Get Involved[\s\S]*?<\/Link>/, `<Link href="/get-involved" className="${primaryClasses}">
            Get Involved ${buildIcon('Heart')}
          </Link>`);
fs.writeFileSync('src/app/about/page.tsx', aboutContent);

// 7. work/page.tsx
let workContent = fs.readFileSync('src/app/work/page.tsx', 'utf8');
// Partner With Us
workContent = workContent.replace(/<Link href="\/contact" className="[^"]+">\s*Partner With Us[\s\S]*?<\/Link>/, `<Link href="/contact" className="${primaryClasses}">
            Partner With Us ${buildIcon('Leaf')}
          </Link>`);
fs.writeFileSync('src/app/work/page.tsx', workContent);

console.log("All buttons explicitly styled!");
