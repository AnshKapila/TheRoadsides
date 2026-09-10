import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, BookOpen, Newspaper, ImageIcon } from "lucide-react";
import ScrollRevealText from "@/components/ScrollRevealText";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero */}
      <section className="relative w-full min-h-screen flex items-center pt-32 pb-20 px-6">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-[#1a1a1a] overflow-hidden">
          <Image src="/hero-bg.jpg" alt="Roadside sapling" fill priority className="object-cover scale-[1.15]" unoptimized />
          <div className="absolute inset-0 bg-[var(--charcoal)]/50" /> 
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10 pt-10">
          <div className="max-w-2xl">
            <h2 className="text-[var(--brick)] font-semibold text-[14px] mb-[10px] tracking-wide uppercase">
              Together, We Create Impact
            </h2>
            
            <h1 className="text-[var(--paper)] text-[48px] font-bold tracking-[-0.01em] leading-[1.15] mb-6">
              Unite. Act.<br />
              Transform
            </h1>
            
            <p className="text-[var(--paper)] text-[16px] leading-[1.65] max-w-md mb-10 font-normal">
              Your support powers life changing missions feeding families & rebuilding hope.
            </p>
            
            <div className="flex flex-wrap items-center gap-[14px]">
              <Link href="/get-involved" className="group inline-flex items-center gap-[8px] justify-center bg-[var(--primary-green)] text-[var(--charcoal)] font-semibold px-[32px] py-[13px] rounded-[3px] hover:bg-[var(--charcoal)] hover:text-[var(--primary-green)] transition-all duration-300 text-[16px] min-h-[44px]">
                  Donate Now <span className="relative w-[18px] h-[18px] overflow-hidden flex items-center justify-center shrink-0">
    <ArrowRight className="absolute w-[18px] h-[18px] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[150%]" strokeWidth={2.5} />
    <ArrowRight className="absolute w-[18px] h-[18px] -translate-x-[150%] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0" strokeWidth={2.5} />
  </span>
                </Link>
              <Link href="/about" className="inline-flex items-center gap-[8px] justify-center bg-transparent border-[1.5px] border-[var(--white)] text-[var(--paper)] font-semibold px-[24px] py-[11.5px] rounded-[3px] hover:bg-[var(--paper)] hover:text-[var(--charcoal)] transition-colors text-[16px] min-h-[44px]">
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Impact Numbers */}
      <section className="py-[64px] px-[32px]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            {/* Card 1 */}
            <div className="relative rounded-[3px] overflow-hidden aspect-square md:aspect-[4/5] bg-[var(--charcoal)] flex flex-col justify-end p-[32px] group">
              <Image src="/gallery/gallery_0.jpg" alt="Impact 1" fill className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="relative z-10">
                <div className="text-[48px] font-bold text-[var(--paper)] tracking-[-0.01em] leading-[1.15] mb-[8px]">[XX]</div>
                <div className="text-[24px] font-semibold text-[var(--paper)] leading-[1.3] mb-[8px]">Sectors Covered</div>
                <div className="text-[var(--paper)] text-[16px] leading-[1.65]">Across Faridabad and beyond.</div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-[3px] overflow-hidden aspect-square md:aspect-[4/5] bg-[var(--charcoal)] flex flex-col justify-end p-[32px] group">
              <Image src="/gallery/gallery_1.jpg" alt="Impact 2" fill className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="relative z-10">
                <div className="text-[48px] font-bold text-[var(--paper)] tracking-[-0.01em] leading-[1.15] mb-[8px]">[XX,XXX]</div>
                <div className="text-[24px] font-semibold text-[var(--paper)] leading-[1.3] mb-[8px]">Trees Planted</div>
                <div className="text-[var(--paper)] text-[16px] leading-[1.65]">Nurtured for long-term survival.</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative rounded-[3px] overflow-hidden aspect-square md:aspect-[4/5] bg-[var(--charcoal)] flex flex-col justify-end p-[32px] group">
              <Image src="/gallery/gallery_103.jpg" alt="Impact 3" fill className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="relative z-10">
                <div className="text-[48px] font-bold text-[var(--paper)] tracking-[-0.01em] leading-[1.15] mb-[8px]">[XX]</div>
                <div className="text-[24px] font-semibold text-[var(--paper)] leading-[1.3] mb-[8px]">Community Events</div>
                <div className="text-[var(--paper)] text-[16px] leading-[1.65]">Mobilizing local citizens.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission */}
      <section className="py-[64px] px-[32px]">
        <ScrollRevealText 
          text="Every correct move we make, multiplied by 7.9 billion, changes this world."
        />
      </section>

      {/* 5. Founder Spotlight */}
      <section className="py-[64px] px-[32px]">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-[var(--charcoal)] rounded-[3px] p-[16px] flex flex-col md:flex-row gap-[32px] h-auto lg:h-[60vh]">
            <div className="bg-[var(--paper)] rounded-[3px] w-full md:w-auto md:h-full aspect-square relative overflow-hidden shrink-0 mx-auto md:mx-0">
              <Image src="/founder.jpg" alt="Founder" fill className="object-cover opacity-80" unoptimized />
            </div>
            <div className="py-[32px] md:py-[0] md:pr-[48px] flex flex-col justify-center flex-grow overflow-y-auto">
              <div className="flex items-center gap-[8px] mb-[16px]">
                <span className="w-3 h-3 rounded-[3px] group bg-[var(--primary-green)]" />
                <span className="text-[var(--paper)] font-semibold text-[14px]">Our Founder</span>
              </div>
              <h2 className="text-[32px] font-semibold text-[var(--paper)] mb-[24px] leading-[1.2]">Seema Chowdhry Dhawan</h2>
              <p className="text-[16px] text-[var(--paper)] mb-[40px] leading-[1.65] font-normal">
                It started by noticing what everyone else walks past. An alumnus of IIM Calcutta and Wharton Online with a deep background in ESG strategy, Seema founded The Roadsides to translate corporate sustainability principles into hyperlocal, citizen-led action.
              </p>
              <Link href="/founder" className="group inline-flex items-center gap-[8px] justify-center bg-[var(--primary-green)] text-[var(--charcoal)] font-semibold px-[32px] py-[13px] rounded-[3px] hover:bg-[var(--charcoal)] hover:text-[var(--primary-green)] transition-all duration-300 text-[16px] min-h-[44px]">
                Read Seema&apos;s Story <span className="relative w-[18px] h-[18px] overflow-hidden flex items-center justify-center shrink-0">
    <BookOpen className="absolute w-[18px] h-[18px] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[150%]" strokeWidth={2.5} />
    <BookOpen className="absolute w-[18px] h-[18px] -translate-x-[150%] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0" strokeWidth={2.5} />
  </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Recognition Strip */}
      <section className="py-[48px] px-[32px] border-y border-[var(--line)]">
        <div className="container mx-auto max-w-7xl">
          <p className="text-center text-[12px] font-semibold uppercase tracking-[0.01em] text-[var(--muted)] mb-[40px]">Recognized & Featured By</p>
          <div className="flex flex-wrap justify-center items-center gap-[48px] md:gap-[80px] opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* UN Logo Block */}
            <div className="flex items-center gap-[16px]">
              <div className="relative w-[48px] h-[48px] shrink-0">
                <Image src="/un-logo.svg" alt="UN Environment Programme" fill className="object-contain mix-blend-multiply" unoptimized />
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-[var(--charcoal)] leading-[1.2] text-[18px]">UN Environment Programme</div>
                <div className="text-[12px] font-semibold text-[var(--muted)] uppercase tracking-wide">World Environment Day</div>
              </div>
            </div>
            
            {/* Partner Logos */}
            <div className="relative h-[36px] w-[160px]">
              <Image src="/ceo-india.png" alt="CEO India Magazine" fill className="object-contain mix-blend-multiply" unoptimized />
            </div>
            <div className="relative h-[36px] w-[140px]">
              <Image src="/zourney.png" alt="Zourney" fill className="object-contain mix-blend-multiply" unoptimized />
            </div>
            <div className="relative h-[96px] w-[240px]">
              <Image src="/advaita.png" alt="Advaita Awards" fill className="object-contain mix-blend-multiply" unoptimized />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Insights Preview */}
      <section className="py-[64px] px-[32px] bg-[var(--paper)] rounded-[3px] mx-[16px] my-[32px] border border-[var(--line)]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-[48px] gap-[32px]">
            <div className="max-w-2xl text-left">
              <div className="flex items-center gap-[8px] mb-[12px]">
                <span className="w-3 h-3 rounded-[3px] group bg-[var(--primary-green)]" />
                <span className="text-[var(--charcoal)] font-semibold text-[14px]">Insights</span>
              </div>
              <h2 className="text-[32px] font-semibold tracking-tight mb-[16px] leading-[1.2]">Stories and perspectives.</h2>
              <p className="text-[16px] text-[var(--muted)] leading-[1.65]">Excerpts from &quot;Baby Steps to Green Revolution&quot; and on-ground case studies.</p>
            </div>
            <Link href="/insights" className="group inline-flex items-center gap-[8px] justify-center bg-[var(--primary-green)] text-[var(--charcoal)] font-semibold px-[32px] py-[13px] rounded-[3px] hover:bg-[var(--charcoal)] hover:text-[var(--primary-green)] transition-all duration-300 text-[16px] min-h-[44px]">
              Read All Insights <span className="relative w-[18px] h-[18px] overflow-hidden flex items-center justify-center shrink-0">
    <Newspaper className="absolute w-[18px] h-[18px] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[150%]" strokeWidth={2.5} />
    <Newspaper className="absolute w-[18px] h-[18px] -translate-x-[150%] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0" strokeWidth={2.5} />
  </span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
            {[
              { tag: 'From the Book', title: 'The Power of Consistency', desc: 'How small, daily environmental habits multiply across communities to create lasting impact.', img: 'gallery_144.jpg' },
              { tag: 'On-Ground Stories', title: 'Nurturing After Planting', desc: 'Why our work in Faridabad doesn\'t stop on planting day, and how we maintain saplings year-round.', img: 'gallery_158.jpg' },
              { tag: 'Founder\'s Perspective', title: 'India\'s Urban Future Needs a Shift', desc: 'Our cities are growing fast. Why the focus must return to the immediate roadsides we navigate daily.', img: 'gallery_172.jpg' }
            ].map((post, i) => (
              <Link href="/insights" key={i} className="group block">
                <article className="h-full flex flex-col">
                  <div className="aspect-[4/3] bg-[var(--paper)] rounded-[3px] mb-[24px] overflow-hidden relative border border-[var(--line)]">
                    <Image src={`/gallery/${post.img}`} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
                  </div>
                  <span className="text-[var(--brick)] text-[12px] font-semibold uppercase tracking-[0.01em] mb-[12px]">{post.tag}</span>
                  <h3 className="text-[24px] font-semibold mb-[12px] leading-[1.3] group-hover:text-[var(--brick)] transition-colors">{post.title}</h3>
                  <p className="text-[var(--muted)] mb-[24px] flex-grow leading-[1.65] text-[16px]">{post.desc}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Gallery Masonry */}
      <section className="py-[64px] px-[32px] bg-[var(--charcoal)] text-[var(--paper)]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-[48px] gap-[32px]">
            <div className="max-w-2xl text-left">
              <div className="flex items-center gap-[8px] mb-[12px]">
                <span className="w-3 h-3 rounded-[3px] group bg-[var(--primary-green)]" />
                <span className="text-[var(--paper)] font-semibold text-[14px]">Gallery</span>
              </div>
              <h2 className="text-[32px] font-semibold tracking-tight leading-[1.2]">Community in Action</h2>
            </div>
            <Link href="/gallery" className="group inline-flex items-center gap-[8px] justify-center bg-[var(--primary-green)] text-[var(--charcoal)] font-semibold px-[32px] py-[13px] rounded-[3px] hover:bg-[var(--charcoal)] hover:text-[var(--primary-green)] transition-all duration-300 text-[16px] min-h-[44px]">
              View Full Gallery <span className="relative w-[18px] h-[18px] overflow-hidden flex items-center justify-center shrink-0">
    <ImageIcon className="absolute w-[18px] h-[18px] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[150%]" strokeWidth={2.5} />
    <ImageIcon className="absolute w-[18px] h-[18px] -translate-x-[150%] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0" strokeWidth={2.5} />
  </span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[24px] h-auto lg:h-[600px]">
            <div className="lg:col-span-8 relative bg-[var(--paper)] border border-[var(--line)] rounded-[3px] overflow-hidden group cursor-pointer flex items-center justify-center aspect-video lg:aspect-auto">
              <Image src="/gallery/gallery_133.jpg" alt="Video Thumbnail" fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" unoptimized />
              <div className="absolute inset-0 bg-[var(--charcoal)]/20 group-hover:bg-[var(--charcoal)]/30 transition-colors flex items-center justify-center">
                <div className="w-[64px] h-[64px] group bg-[var(--primary-green)] rounded-[3px] flex items-center justify-center text-[var(--charcoal)] transition-transform">
                  <Play className="w-[32px] h-[32px] ml-1 fill-current" />
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4 grid grid-rows-3 gap-[24px] h-[600px] lg:h-auto">
              <div className="bg-[var(--paper)] border border-[var(--line)] rounded-[3px] overflow-hidden relative">
                <Image src="/gallery/gallery_137.jpg" alt="Gallery Photo" fill className="object-cover hover:scale-105 transition-transform duration-500" unoptimized />
              </div>
              <div className="bg-[var(--paper)] border border-[var(--line)] rounded-[3px] overflow-hidden relative">
                <Image src="/gallery/gallery_141.jpg" alt="Gallery Photo" fill className="object-cover hover:scale-105 transition-transform duration-500" unoptimized />
              </div>
              <Link href="/gallery" className="bg-[var(--charcoal)] rounded-[3px] flex items-center justify-center text-[var(--paper)] hover:bg-[var(--primary-green)] hover:text-[var(--charcoal)] transition-colors group duration-300">
                  <div className="flex flex-col items-center">
                    <span className="font-semibold text-[16px] mb-[8px]">View Full Gallery</span>
                    <span className="relative w-[18px] h-[18px] overflow-hidden flex items-center justify-center shrink-0">
    <ArrowRight className="absolute w-[18px] h-[18px] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[150%]" strokeWidth={2.5} />
    <ArrowRight className="absolute w-[18px] h-[18px] -translate-x-[150%] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0" strokeWidth={2.5} />
  </span>
                  </div>
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Get Involved */}
      <section className="py-[64px] px-[32px]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] lg:h-[750px]">
            {/* Column 1 */}
            <div className="flex flex-col justify-between h-full gap-[32px] lg:gap-0">
              <div className="pt-[16px]">
                <div className="text-[var(--charcoal)] text-[16px] font-semibold tracking-wide mb-[16px]">Be Part of the Solution</div>
                <h2 className="text-[48px] font-bold text-[var(--charcoal)] tracking-[-0.01em] leading-[1.15] mb-[32px] max-w-md">
                  Join us in creating safer, cleaner, greener environments.
                </h2>
                <Link href="/get-involved" className="group inline-flex items-center gap-[8px] justify-center bg-[var(--primary-green)] text-[var(--charcoal)] font-semibold px-[32px] py-[13px] rounded-[3px] hover:bg-[var(--charcoal)] hover:text-[var(--primary-green)] transition-all duration-300 text-[16px] min-h-[44px]">
                  Get Involved <span className="relative w-[18px] h-[18px] overflow-hidden flex items-center justify-center shrink-0">
    <ArrowRight className="absolute w-[18px] h-[18px] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[150%]" strokeWidth={2.5} />
    <ArrowRight className="absolute w-[18px] h-[18px] -translate-x-[150%] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0" strokeWidth={2.5} />
  </span>
                </Link>
              </div>
              
              {/* Card 1: Donate */}
              <div className="relative rounded-[3px] overflow-hidden group h-[400px] lg:h-[350px] flex flex-col justify-between p-[32px]">
                <Image src="/gallery/gallery_122.jpg" alt="Donate" fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/60" />
                <div className="relative z-10">
                  <h3 className="text-[32px] font-bold text-[var(--paper)] tracking-tight mb-[16px] leading-[1.2]">Donate</h3>
                  <p className="text-[var(--paper)] text-[16px] leading-[1.65] font-normal">
                    Your contributions directly fund our on-ground planting, nurturing, and civic improvement initiatives.
                  </p>
                </div>
                <div className="relative z-10 flex gap-[12px] flex-wrap mt-[32px]">
                  <span className="bg-[var(--paper)] text-[var(--charcoal)] px-[16px] py-[6px] rounded-[3px] text-[13px] font-semibold">Funding</span>
                  <span className="bg-[var(--paper)] text-[var(--charcoal)] px-[16px] py-[6px] rounded-[3px] text-[13px] font-semibold">Civic Impact</span>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col justify-end h-full mt-[24px] lg:mt-0">
              {/* Card 2: Volunteer */}
              <div className="relative rounded-[3px] overflow-hidden group h-[400px] lg:h-[500px] flex flex-col justify-between p-[32px]">
                <Image src="/gallery/gallery_126.jpg" alt="Volunteer" fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/60" />
                <div className="relative z-10">
                  <h3 className="text-[32px] font-bold text-[var(--paper)] tracking-tight mb-[16px] leading-[1.2]">Volunteer</h3>
                  <p className="text-[var(--paper)] text-[16px] leading-[1.65] font-normal">
                    Join our community drives and help us execute sustainable practices at the hyperlocal level.
                  </p>
                </div>
                <div className="relative z-10 flex gap-[12px] flex-wrap mt-[32px]">
                  <span className="bg-[var(--paper)] text-[var(--charcoal)] px-[16px] py-[6px] rounded-[3px] text-[13px] font-semibold">Community</span>
                  <span className="bg-[var(--paper)] text-[var(--charcoal)] px-[16px] py-[6px] rounded-[3px] text-[13px] font-semibold">On-Ground</span>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col h-full mt-[24px] lg:mt-0">
              {/* Card 3: Partner */}
              <div className="relative rounded-[3px] overflow-hidden group h-[400px] lg:h-full flex flex-col justify-between p-[32px]">
                <Image src="/gallery/gallery_130.jpg" alt="Partner With Us" fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/60" />
                <div className="relative z-10">
                  <h3 className="text-[32px] font-bold text-[var(--paper)] tracking-tight mb-[16px] leading-[1.2]">Partner With Us</h3>
                  <p className="text-[var(--paper)] text-[16px] leading-[1.65] font-normal">
                    We offer advisory services and collaborate with organizations committed to sustainable development.
                  </p>
                </div>
                <div className="relative z-10 flex gap-[12px] flex-wrap mt-[32px]">
                  <span className="bg-[var(--paper)] text-[var(--charcoal)] px-[16px] py-[6px] rounded-[3px] text-[13px] font-semibold">Advisory</span>
                  <span className="bg-[var(--paper)] text-[var(--charcoal)] px-[16px] py-[6px] rounded-[3px] text-[13px] font-semibold">Collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
