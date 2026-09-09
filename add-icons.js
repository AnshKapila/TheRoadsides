const fs = require('fs');
const path = require('path');

// 1. App/page.tsx
const pagePath = path.join(__dirname, 'src/app/page.tsx');
let p = fs.readFileSync(pagePath, 'utf8');

// Ensure BookOpen, Newspaper, ImageIcon are imported
if (!p.includes('BookOpen')) {
  p = p.replace(/import { ArrowRight } from "lucide-react";/, 'import { ArrowRight, BookOpen, Newspaper, ImageIcon } from "lucide-react";');
}

// Founder Spotlight Button
p = p.replace(/>\s*Read Seema&apos;s Story\s*<\/Link>/, '> Read Seema&apos;s Story <BookOpen className="w-[18px] h-[18px]" strokeWidth={2.5} /></Link>');
p = p.replace(/<Link href="\/founder" className="inline-flex items-center justify-center bg-\[var\(--primary-green\)\] text-\[var\(--paper\)\] font-semibold px-\[26px\] py-\[13px\] rounded-\[3px\] hover:bg-\[var\(--brick\)\] hover:text-\[var\(--charcoal\)\] transition-colors w-fit text-\[16px\] min-h-\[44px\] gap-\[8px\]"/g, '<Link href="/founder" className="inline-flex items-center justify-center bg-[var(--primary-green)] text-[var(--charcoal)] font-semibold px-[32px] py-[13px] rounded-[3px] hover:bg-[var(--brick)] hover:text-[var(--paper)] transition-colors w-fit text-[16px] min-h-[44px] gap-[8px]"');

// Insights Button
p = p.replace(/>\s*Read All Insights <ArrowRight className="ml-2 w-4 h-4" \/>\s*<\/Link>/, '> Read All Insights <Newspaper className="w-[18px] h-[18px]" strokeWidth={2.5} /></Link>');
p = p.replace(/<Link href="\/insights" className="inline-flex items-center justify-center bg-\[var\(--primary-green\)\] text-\[var\(--paper\)\] font-semibold px-\[26px\] py-\[13px\] rounded-\[3px\] hover:bg-\[var\(--brick\)\] transition-colors shrink-0 min-h-\[44px\] gap-\[8px\]"/g, '<Link href="/insights" className="inline-flex items-center justify-center bg-[var(--primary-green)] text-[var(--charcoal)] font-semibold px-[32px] py-[13px] rounded-[3px] hover:bg-[var(--brick)] hover:text-[var(--paper)] transition-colors shrink-0 min-h-[44px] gap-[8px]"');

// Gallery Button
p = p.replace(/>\s*View Full Gallery <ArrowRight className="ml-2 w-4 h-4" \/>\s*<\/Link>/, '> View Full Gallery <ImageIcon className="w-[18px] h-[18px]" strokeWidth={2.5} /></Link>');
p = p.replace(/<Link href="\/gallery" className="inline-flex items-center justify-center bg-\[var\(--primary-green\)\] text-\[var\(--paper\)\] font-semibold px-\[26px\] py-\[13px\] rounded-\[3px\] hover:bg-\[var\(--brick\)\] transition-colors shrink-0 min-h-\[44px\] gap-\[8px\]"/g, '<Link href="/gallery" className="inline-flex items-center justify-center bg-[var(--primary-green)] text-[var(--charcoal)] font-semibold px-[32px] py-[13px] rounded-[3px] hover:bg-[var(--brick)] hover:text-[var(--paper)] transition-colors shrink-0 min-h-[44px] gap-[8px]"');

fs.writeFileSync(pagePath, p);

// 2. About Page
const aboutPath = path.join(__dirname, 'src/app/about/page.tsx');
let a = fs.readFileSync(aboutPath, 'utf8');
if (!a.includes('Heart')) {
  a = a.replace(/import { ArrowRight } from "lucide-react";/, 'import { ArrowRight, Heart } from "lucide-react";');
}
a = a.replace(/>\s*Get Involved <ArrowRight className="ml-2 w-4 h-4" \/>\s*<\/Link>/, '> Get Involved <Heart className="w-[18px] h-[18px]" strokeWidth={2.5} /></Link>');
a = a.replace(/<Link href="\/get-involved" className="inline-flex items-center justify-center bg-\[var\(--primary-green\)\] text-\[var\(--paper\)\] px-\[32px\] py-\[16px\] rounded-\[3px\] hover:bg-\[var\(--brick\)\] transition-colors text-\[16px\] font-semibold min-h-\[48px\] gap-\[8px\]"/g, '<Link href="/get-involved" className="inline-flex items-center justify-center bg-[var(--primary-green)] text-[var(--charcoal)] px-[32px] py-[16px] rounded-[3px] hover:bg-[var(--brick)] hover:text-[var(--paper)] transition-colors text-[16px] font-semibold min-h-[48px] gap-[8px]"');
fs.writeFileSync(aboutPath, a);

// 3. Contact Page
const contactPath = path.join(__dirname, 'src/app/contact/page.tsx');
let c = fs.readFileSync(contactPath, 'utf8');
if (!c.includes('Send')) {
  c = c.replace(/import { ArrowRight } from "lucide-react";/, 'import { ArrowRight, Send } from "lucide-react";');
}
c = c.replace(/>\s*Submit Message <ArrowRight className="ml-2 w-4 h-4" \/>\s*<\/button>/, '> Submit Message <Send className="w-[18px] h-[18px]" strokeWidth={2.5} /></button>');
c = c.replace(/<button type="button" className="inline-flex items-center justify-center bg-\[var\(--primary-green\)\] text-\[var\(--paper\)\] px-\[32px\] py-\[16px\] rounded-\[3px\] hover:bg-\[var\(--brick\)\] transition-colors text-\[16px\] font-semibold min-h-\[48px\] mt-\[16px\] gap-\[8px\]"/g, '<button type="button" className="inline-flex items-center justify-center bg-[var(--primary-green)] text-[var(--charcoal)] px-[32px] py-[16px] rounded-[3px] hover:bg-[var(--brick)] hover:text-[var(--paper)] transition-colors text-[16px] font-semibold min-h-[48px] mt-[16px] gap-[8px]"');
fs.writeFileSync(contactPath, c);

// 4. Get Involved Page
const getInvPath = path.join(__dirname, 'src/app/get-involved/page.tsx');
let g = fs.readFileSync(getInvPath, 'utf8');
if (!g.includes('Wallet')) {
  g = g.replace(/import { ArrowRight } from "lucide-react";/, 'import { ArrowRight, Wallet, Users, Handshake } from "lucide-react";');
}
// Donate
g = g.replace(/>\s*Make a Donation <ArrowRight className="ml-2 w-4 h-4" \/>\s*<\/Link>/, '> Make a Donation <Wallet className="w-[18px] h-[18px]" strokeWidth={2.5} /></Link>');
g = g.replace(/<Link href="\/contact" className="inline-flex items-center justify-center bg-\[var\(--primary-green\)\] text-\[var\(--paper\)\] px-\[32px\] py-\[16px\] rounded-\[3px\] hover:bg-\[var\(--brick\)\] transition-colors text-\[16px\] font-semibold min-h-\[48px\] w-fit gap-\[8px\]"/g, '<Link href="/contact" className="inline-flex items-center justify-center bg-[var(--primary-green)] text-[var(--charcoal)] px-[32px] py-[16px] rounded-[3px] hover:bg-[var(--brick)] hover:text-[var(--paper)] transition-colors text-[16px] font-semibold min-h-[48px] w-fit gap-[8px]"');

// Volunteer
g = g.replace(/>\s*Sign Up to Volunteer <ArrowRight className="ml-2 w-4 h-4" \/>\s*<\/Link>/, '> Sign Up to Volunteer <Users className="w-[18px] h-[18px]" strokeWidth={2.5} /></Link>');
g = g.replace(/<Link href="\/contact" className="inline-flex items-center justify-center bg-\[var\(--charcoal\)\] text-\[var\(--paper\)\] px-\[32px\] py-\[16px\] rounded-\[3px\] hover:bg-\[var\(--primary-green\)\] transition-colors text-\[16px\] font-semibold min-h-\[48px\] w-fit gap-\[8px\]"/g, '<Link href="/contact" className="inline-flex items-center justify-center bg-[var(--charcoal)] text-[var(--paper)] px-[32px] py-[16px] rounded-[3px] hover:bg-[var(--primary-green)] hover:text-[var(--charcoal)] transition-colors text-[16px] font-semibold min-h-[48px] w-fit gap-[8px]"');

// Partner
g = g.replace(/>\s*Explore Partnerships <ArrowRight className="ml-2 w-4 h-4" \/>\s*<\/Link>/, '> Explore Partnerships <Handshake className="w-[18px] h-[18px]" strokeWidth={2.5} /></Link>');
g = g.replace(/<Link href="\/contact" className="inline-flex items-center justify-center bg-\[var\(--charcoal\)\] text-\[var\(--paper\)\] px-\[32px\] py-\[16px\] rounded-\[3px\] hover:bg-\[var\(--primary-green\)\] transition-colors text-\[16px\] font-semibold min-h-\[48px\] w-fit gap-\[8px\]"/g, '<Link href="/contact" className="inline-flex items-center justify-center bg-[var(--charcoal)] text-[var(--paper)] px-[32px] py-[16px] rounded-[3px] hover:bg-[var(--primary-green)] hover:text-[var(--charcoal)] transition-colors text-[16px] font-semibold min-h-[48px] w-fit gap-[8px]"');
fs.writeFileSync(getInvPath, g);

// 5. Founder Page
const founderPath = path.join(__dirname, 'src/app/founder/page.tsx');
let f = fs.readFileSync(founderPath, 'utf8');
if (!f.includes('Heart')) {
  f = f.replace(/import { ArrowRight } from "lucide-react";/, 'import { ArrowRight, Heart } from "lucide-react";');
}
f = f.replace(/>\s*Get Involved Today <ArrowRight className="ml-2 w-4 h-4" \/>\s*<\/Link>/, '> Get Involved Today <Heart className="w-[18px] h-[18px]" strokeWidth={2.5} /></Link>');
f = f.replace(/<Link href="\/get-involved" className="inline-flex items-center justify-center bg-\[var\(--primary-green\)\] text-\[var\(--paper\)\] px-\[32px\] py-\[16px\] rounded-\[3px\] hover:bg-\[var\(--brick\)\] transition-colors text-\[16px\] font-semibold min-h-\[48px\] gap-\[8px\]"/g, '<Link href="/get-involved" className="inline-flex items-center justify-center bg-[var(--primary-green)] text-[var(--charcoal)] px-[32px] py-[16px] rounded-[3px] hover:bg-[var(--brick)] hover:text-[var(--paper)] transition-colors text-[16px] font-semibold min-h-[48px] gap-[8px]"');
fs.writeFileSync(founderPath, f);

console.log('Button icons updated.');
