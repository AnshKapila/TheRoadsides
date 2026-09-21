const fs = require('fs');

// 1. Update Contact Page
let contact = fs.readFileSync('src/app/contact/page.tsx', 'utf8');
contact = contact.replace(/contact@theroadsides\.org/g, 'team@theroadsides.co.in');
contact = contact.replace(/<p>\s*<span className="font-semibold block mb-\[4px\]">Phone:<\/span>\s*<a href="tel:\+910000000000"[\s\S]*?<\/a>\s*<\/p>/g, '');
fs.writeFileSync('src/app/contact/page.tsx', contact);

// 2. Update Footer in layout.tsx to add Privacy Policy
let layout = fs.readFileSync('src/app/layout.tsx', 'utf8');
if (!layout.includes('Privacy Policy')) {
    layout = layout.replace(
        '<li><Link href="/get-involved"',
        '<li><Link href="/privacy" className="text-[var(--paper)]/70 hover:text-[var(--primary-green)] transition-colors font-medium text-[16px]">Privacy Policy</Link></li>\n                  <li><Link href="/get-involved"'
    );
    fs.writeFileSync('src/app/layout.tsx', layout);
}

// 3. Create Privacy Policy Page
const privacyContent = `import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | The Roadsides",
  description: "Privacy Policy for The Roadsides Foundation.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col pt-24 min-h-screen">
      <section className="bg-[var(--paper)] border-b border-[var(--line)] py-[64px] px-[32px]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-[48px] font-bold tracking-[-0.01em] leading-[1.15] text-[var(--charcoal)] mb-[24px]">
            Privacy Policy
          </h1>
          <p className="text-[16px] text-[var(--charcoal)] leading-[1.65] mb-[24px]">
            The Roadsides ("Vibrant Walkable Roadsides Foundation") respects your privacy. This policy outlines how we handle information collected through our website.
          </p>
          <h2 className="text-[24px] font-bold text-[var(--charcoal)] mb-[16px]">Information Collection</h2>
          <p className="text-[16px] text-[var(--charcoal)] leading-[1.65] mb-[24px]">
            We only collect personal information that you voluntarily provide to us, such as when you contact us via email at team@theroadsides.co.in or sign up to volunteer.
          </p>
          <h2 className="text-[24px] font-bold text-[var(--charcoal)] mb-[16px]">Use of Information</h2>
          <p className="text-[16px] text-[var(--charcoal)] leading-[1.65] mb-[24px]">
            Any information collected is used solely to communicate with you regarding our initiatives, respond to your inquiries, or process volunteer registrations. We do not sell or share your data with third parties.
          </p>
          <h2 className="text-[24px] font-bold text-[var(--charcoal)] mb-[16px]">Contact Us</h2>
          <p className="text-[16px] text-[var(--charcoal)] leading-[1.65]">
            If you have questions about this privacy policy, please contact us at <a href="mailto:team@theroadsides.co.in" className="text-[var(--brick)] hover:underline">team@theroadsides.co.in</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
`;
fs.mkdirSync('src/app/privacy', { recursive: true });
fs.writeFileSync('src/app/privacy/page.tsx', privacyContent);

// 4. Update Work Page (Rename Header, extract client component for lightbox)
let workPage = fs.readFileSync('src/app/work/page.tsx', 'utf8');

// The original page content
const workClientContent = `"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function WorkClient({ initiatives }: { initiatives: any[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : initiatives.length - 1));
      if (e.key === "ArrowRight") setSelectedIndex((prev) => (prev !== null && prev < initiatives.length - 1 ? prev + 1 : 0));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, initiatives.length]);

  return (
    <div className="flex flex-col pt-24 min-h-screen">
      {/* Page Header */}
      <section className="bg-[var(--paper)] border-b border-[var(--line)] py-[64px] px-[32px]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-[8px] mb-[16px]">
            <span className="w-3 h-3 rounded-[3px] group bg-[var(--primary-green)]" />
            <span className="text-[var(--charcoal)] font-semibold text-[14px]">The Journey</span>
          </div>
          <h1 className="text-[48px] font-bold tracking-[-0.01em] leading-[1.15] text-[var(--charcoal)] mb-[24px]">
            Collaborations and Endeavours
          </h1>
          <p className="text-[24px] font-medium leading-[1.45] text-[var(--primary-green)] italic max-w-3xl">
            &quot;From learning from our brightest young trailblazers to sharing the spotlight with established voices in the field, the future does look promising.&quot;
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-[64px] px-[32px]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
            {initiatives.map((item, i) => (
              <article key={i} onClick={() => setSelectedIndex(i)} className="bg-[var(--paper)] rounded-[3px] p-[16px] flex flex-col border border-[var(--line)] hover:border-[var(--charcoal)] transition-colors duration-300 cursor-pointer">
                <div className="aspect-[4/3] bg-[var(--paper)] rounded-[3px] flex items-center justify-center overflow-hidden relative mb-[32px]">
                  <Image src={\`/gallery/\${item.img}\`} alt={item.title} fill className="object-cover transition-transform duration-700 hover:scale-105" unoptimized />
                </div>
                <div className="px-[24px] pb-[24px] flex flex-col flex-grow">
                  <span className="text-[var(--brick)] text-[12px] font-semibold uppercase tracking-[0.01em] mb-[12px]">{item.tag}</span>
                  <h3 className="text-[24px] font-bold mb-[16px] leading-[1.3] text-[var(--charcoal)]">{item.title}</h3>
                  <p className="text-[var(--muted)] mb-[32px] flex-grow leading-[1.65] text-[16px] font-normal">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[var(--charcoal)] py-[64px] px-[32px]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-[32px] font-bold text-[var(--paper)] tracking-tight mb-[24px] leading-[1.2]">
            Start Your Own Initiative
          </h2>
          <p className="text-[16px] text-[var(--paper)]/80 leading-[1.65] mb-[32px] max-w-2xl mx-auto">
            Want to transform a roadside in your neighborhood? We provide the expertise, you provide the community.
          </p>
          <Link href="/contact" className="group inline-flex items-center gap-[8px] justify-center bg-[var(--primary-green)] text-[var(--charcoal)] font-semibold px-[32px] py-[13px] rounded-[3px] hover:bg-[var(--charcoal)] hover:text-[var(--primary-green)] transition-all duration-300 text-[16px] min-h-[44px]">
            Partner With Us <span className="relative w-[18px] h-[18px] overflow-hidden flex items-center justify-center shrink-0">
    <Leaf className="absolute w-[18px] h-[18px] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[150%]" strokeWidth={2.5} />
    <Leaf className="absolute w-[18px] h-[18px] -translate-x-[150%] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0" strokeWidth={2.5} />
  </span>
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm px-[16px]">
          <button 
            onClick={() => setSelectedIndex(null)}
            className="absolute top-[24px] right-[24px] text-white/50 hover:text-white transition-colors z-50 p-2"
          >
            <X size={32} strokeWidth={1.5} />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : initiatives.length - 1); }}
            className="absolute left-[16px] md:left-[32px] text-white/50 hover:text-white transition-colors z-50 p-2"
          >
            <ChevronLeft size={48} strokeWidth={1} />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); setSelectedIndex(selectedIndex < initiatives.length - 1 ? selectedIndex + 1 : 0); }}
            className="absolute right-[16px] md:right-[32px] text-white/50 hover:text-white transition-colors z-50 p-2"
          >
            <ChevronRight size={48} strokeWidth={1} />
          </button>

          <div className="relative w-full max-w-5xl aspect-video md:aspect-[16/9] flex flex-col md:flex-row bg-[var(--charcoal)] rounded-[3px] overflow-hidden">
            <div className="relative w-full md:w-2/3 h-64 md:h-full bg-black">
              <Image 
                src={\`/gallery/\${initiatives[selectedIndex].img}\`} 
                alt={initiatives[selectedIndex].title} 
                fill 
                className="object-contain" 
                unoptimized
              />
            </div>
            <div className="w-full md:w-1/3 p-[32px] flex flex-col justify-center bg-[var(--paper)] overflow-y-auto">
              <span className="text-[var(--brick)] text-[12px] font-semibold uppercase tracking-[0.01em] mb-[12px]">{initiatives[selectedIndex].tag}</span>
              <h3 className="text-[24px] font-bold mb-[16px] leading-[1.3] text-[var(--charcoal)]">{initiatives[selectedIndex].title}</h3>
              <p className="text-[var(--muted)] leading-[1.65] text-[16px] font-normal">{initiatives[selectedIndex].desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
`;

fs.writeFileSync('src/app/work/WorkClient.tsx', workClientContent);

// Now rewrite page.tsx to just pass data to WorkClient
const newWorkPageContent = `import WorkClient from "./WorkClient";

export const metadata = {
  title: "Collaborations and Endeavours | The Roadsides",
  description: "Explore our on-ground impact: from waste segregation in Gurugram to UN Environment Programme recognitions and educational drives at Mount Carmel School.",
};

export default function WorkPage() {
  const initiatives = [
    {
      title: "Venture Day Gurgaon by Cohrrt",
      tag: "Ecosystem & Networking",
      desc: "April 2025. Participated in Venture Day, a curated knowledge-sharing platform bridging the gap between startup founders, investors, and business professionals. It was an incredible space to gain practical insights into the startup ecosystem, share our own journey with The Roadsides, and explore strategies for sustainable, meaningful growth through real, collaborative conversations.",
      img: "venture_day.png"
    },
    {
      title: "UNESCO Sustainability Event",
      tag: "Global Discourse",
      desc: "Our Founder, Seema Chowdhry Dhawan, participated in a high-level UNESCO event centered around sustainability, joining prominent thought leaders to discuss pressing environmental challenges and real-world solutions for a greener future.",
      img: "unesco_event.png"
    },
    {
      title: "Likhega India World Record",
      tag: "Recognition & Awards",
      desc: "Recognized by the Asia and World Records at the Likhega India Conclave for 'Baby Steps to Green Revolution', contributing to the historic mission of publishing the maximum number of books in a single day.",
      img: "likhega_india.jpg"
    },
    {
      title: "Mount Carmel 'Sociopreneur' Jury",
      tag: "Mentorship & Education",
      desc: "Invited to Mount Carmel School, Dwarka, as a jury member for 'Comonomics 4.0'. Watching class 7 and 8 students imagine real ideas for environmental change was genuinely inspiring. Two very different rooms recentlyone learning from our brightest young trailblazers, one sharing the spotlight with established voices. The future does look promising.",
      img: "mount_carmel.png"
    },
    {
      title: "DAV Institute of Management NSS Event",
      tag: "Awareness & Education",
      desc: "Partnered with the National Service Scheme (NSS) at the DAV Institute of Management in March 2026 for a dedicated awareness drive. We engaged with the student body to impart critical knowledge on waste management protocols and the broader importance of civic sense in maintaining healthy urban ecosystems.",
      img: "dav_institute_nss.jpg"
    },
    {
      title: "ISHRAE Gurugram Felicitation",
      tag: "Recognition & Awards",
      desc: "Honored by the ISHRAE Gurugram Chapter for our ongoing commitment to creating sustainable, green urban spaces and driving impactful community-level environmental action.",
      img: "ishrae_recognition.jpg"
    },
    {
      title: "Sarhaul Village, Gurugram Drives",
      tag: "Civic Sense & Waste Management",
      desc: "Executing targeted on-ground initiatives centered around waste segregation, meticulous management, and widespread civic sensitization. Empowering local communities to take charge of their immediate surroundings and actively report civic issues using the Swachhata App for sustainable urban transformation.",
      img: "sarhaul_5.jpg"
    },
    {
      title: "Ballabgarh & Faridabad Drives",
      tag: "Plantation & Nurturing",
      desc: "Going beyond just planting saplings to establishing a system of continued nurturing, in partnership with local community and environmental groups.",
      img: "founded_bg.jpg"
    }
  ];

  return <WorkClient initiatives={initiatives} />;
}
`;

fs.writeFileSync('src/app/work/page.tsx', newWorkPageContent);

console.log("All fixes applied successfully.");
