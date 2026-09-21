import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

export const metadata = {
  title: "The Journey & Initiatives | The Roadsides",
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
            The Journey
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
              <article key={i} className="bg-[var(--paper)] rounded-[3px] p-[16px] flex flex-col border border-[var(--line)] hover:border-[var(--charcoal)] transition-colors duration-300">
                <div className="aspect-[4/3] bg-[var(--paper)] rounded-[3px] flex items-center justify-center overflow-hidden relative mb-[32px]">
                  <Image src={`/gallery/${item.img}`} alt={item.title} fill className="object-cover transition-transform duration-700 hover:scale-105" unoptimized />
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
    </div>
  );
}
