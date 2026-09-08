import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, HeartHandshake, Leaf, Users } from "lucide-react";
import ScrollRevealText from "@/components/ScrollRevealText";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero */}
      <section className="relative w-full min-h-screen flex items-center pt-32 pb-20 px-6">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-[#1a1a1a]">
          <Image src="/hero-bg.jpg" alt="Roadside sapling" fill priority className="object-cover" unoptimized />
          <div className="absolute inset-0 bg-black/50" /> 
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10 pt-10">
          <div className="max-w-2xl">
            <h2 className="text-[var(--brick)] font-semibold text-[14px] mb-[10px] tracking-wide uppercase">
              Together, We Create Impact
            </h2>
            
            <h1 className="text-[var(--white)] text-[48px] font-bold tracking-[-0.01em] leading-[1.15] mb-6">
              Unite. Act.<br />
              Transform
            </h1>
            
            <p className="text-[var(--paper)] text-[16px] leading-[1.65] max-w-md mb-10 font-normal">
              Your support powers life changing missions feeding families & rebuilding hope.
            </p>
            
            <div className="flex flex-wrap items-center gap-[14px]">
              <Link href="/get-involved" className="inline-flex items-center justify-center bg-[var(--moss)] text-[var(--paper)] font-semibold px-[26px] py-[13px] rounded-[3px] hover:bg-[var(--brick)] hover:text-[var(--white)] transition-colors text-[16px] min-h-[44px]">
                Donate Now <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link href="/about" className="inline-flex items-center justify-center bg-transparent border-[1.5px] border-[var(--white)] text-[var(--white)] font-semibold px-[24px] py-[11.5px] rounded-[3px] hover:bg-[var(--white)] hover:text-[var(--charcoal)] transition-colors text-[16px] min-h-[44px]">
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Impact Numbers Snapshot */}
      <section className="py-24 px-6 bg-brand-light">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-brand-primary" />
                <span className="text-brand-dark font-medium text-sm">Our Impact</span>
              </div>
      {/* 2. Impact Numbers */}
      <section className="py-[64px] px-[32px]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            {/* Card 1 */}
            <div className="relative rounded-[3px] overflow-hidden aspect-square md:aspect-[4/5] bg-[var(--charcoal)] flex flex-col justify-end p-[32px] group">
              <Image src="/gallery/gallery_0.jpg" alt="Impact 1" fill className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="relative z-10">
                <div className="text-[48px] font-bold text-[var(--white)] tracking-[-0.01em] leading-[1.15] mb-[8px]">[XX]</div>
                <div className="text-[24px] font-semibold text-[var(--white)] leading-[1.3] mb-[8px]">Sectors Covered</div>
                <div className="text-[var(--paper)] text-[16px] leading-[1.65]">Across Faridabad and beyond.</div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-[3px] overflow-hidden aspect-square md:aspect-[4/5] bg-[var(--charcoal)] flex flex-col justify-end p-[32px] group">
              <Image src="/gallery/gallery_1.jpg" alt="Impact 2" fill className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="relative z-10">
                <div className="text-[48px] font-bold text-[var(--white)] tracking-[-0.01em] leading-[1.15] mb-[8px]">[XX,XXX]</div>
                <div className="text-[24px] font-semibold text-[var(--white)] leading-[1.3] mb-[8px]">Trees Planted</div>
                <div className="text-[var(--paper)] text-[16px] leading-[1.65]">Nurtured for long-term survival.</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative rounded-[3px] overflow-hidden aspect-square md:aspect-[4/5] bg-[var(--charcoal)] flex flex-col justify-end p-[32px] group">
              <Image src="/gallery/gallery_1.jpg" alt="Impact 3" fill className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="relative z-10">
                <div className="text-[48px] font-bold text-[var(--white)] tracking-[-0.01em] leading-[1.15] mb-[8px]">[XX]</div>
                <div className="text-[24px] font-semibold text-[var(--white)] leading-[1.3] mb-[8px]">Community Events</div>
                <div className="text-[var(--paper)] text-[16px] leading-[1.65]">Mobilizing local citizens.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission */}
      <section className="py-40 md:py-56 px-6 bg-white flex flex-col items-center justify-center">
        <ScrollRevealText text='"For the people... of the people... a combined united commitment... by the people of India... a conscious effort by one and all towards our cities, towns, roads, and roadsides."' />
        
        <div className="text-center mt-12">
          <h4 className="text-xl md:text-2xl font-bold text-brand-dark tracking-tight mb-2">The Roadsides</h4>
          <p className="text-lg md:text-xl text-brand-dark/60 font-medium">Vibrant Walkable Roadsides Foundation</p>
        </div>
      </section>

      {/* 4. Our Work Preview */}
      <section className="py-[64px] px-[32px] bg-[var(--white)] rounded-[3px] mx-[16px] my-[32px] border border-[var(--line)]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-[48px] gap-[32px]">
            <div className="max-w-2xl">
              <div className="flex items-center gap-[8px] mb-[12px]">
                <span className="w-3 h-3 rounded-[3px] bg-[var(--moss)]" />
                <span className="text-[var(--charcoal)] font-semibold text-[14px]">Our Work</span>
              </div>
              <h2 className="text-[32px] font-semibold tracking-tight text-[var(--charcoal)] leading-[1.2]">Creating safer, cleaner, greener roadside environments.</h2>
            </div>
            <Link href="/work" className="inline-flex items-center justify-center bg-transparent border-[1.5px] border-[var(--charcoal)] text-[var(--charcoal)] font-semibold px-[24px] py-[11.5px] rounded-[3px] hover:bg-[var(--charcoal)] hover:text-[var(--paper)] transition-colors shrink-0 min-h-[44px]">
              View all initiatives
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
            {/* Case Study 1 */}
            <Link href="/work" className="group block">
              <article className="bg-[var(--paper)] rounded-[3px] p-[16px] h-full flex flex-col border border-[var(--line)] hover:border-[var(--charcoal)] transition-colors duration-300">
                <div className="aspect-[4/3] bg-[var(--white)] rounded-[3px] flex items-center justify-center overflow-hidden relative mb-[32px]">
                  <Image src="/gallery/gallery_1.jpg" alt="Ballabgarh Plantation" fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
                </div>
                <div className="px-[24px] pb-[24px] flex flex-col flex-grow">
                  <span className="text-[var(--brick)] text-[12px] font-semibold uppercase tracking-[0.01em] mb-[12px]">Plantation & Nurturing</span>
                  <h3 className="text-[24px] font-semibold mb-[16px] leading-[1.3] text-[var(--charcoal)]">Ballabgarh & Faridabad Drives</h3>
                  <p className="text-[var(--muted)] mb-[32px] flex-grow leading-[1.65] text-[16px] font-normal">Going beyond just planting saplings to establishing a system of continued nurturing, in partnership with local community and environmental groups.</p>
                  <div className="w-12 h-12 rounded-[3px] border border-[var(--line)] flex items-center justify-center group-hover:bg-[var(--charcoal)] group-hover:border-[var(--charcoal)] group-hover:text-[var(--paper)] transition-all mt-auto text-[var(--charcoal)]">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </article>
            </Link>

            {/* Case Study 2 */}
            <Link href="/work" className="group block">
              <article className="bg-[var(--paper)] rounded-[3px] p-[16px] h-full flex flex-col border border-[var(--line)] hover:border-[var(--charcoal)] transition-colors duration-300">
                <div className="aspect-[4/3] bg-[var(--white)] rounded-[3px] flex items-center justify-center overflow-hidden relative mb-[32px]">
                  <Image src="/gallery/gallery_1.jpg" alt="Textile Waste" fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
                </div>
                <div className="px-[24px] pb-[24px] flex flex-col flex-grow">
                  <span className="text-[var(--brick)] text-[12px] font-semibold uppercase tracking-[0.01em] mb-[12px]">Circular Economy</span>
                  <h3 className="text-[24px] font-semibold mb-[16px] leading-[1.3] text-[var(--charcoal)]">2025 Textile Waste Initiative</h3>
                  <p className="text-[var(--muted)] mb-[32px] flex-grow leading-[1.65] text-[16px] font-normal">Mobilizing students and citizens for zero-waste practices alongside The Modern School, K.L. Mehta College for Women, and Saahas Zero Waste.</p>
                  <div className="w-12 h-12 rounded-[3px] border border-[var(--line)] flex items-center justify-center group-hover:bg-[var(--charcoal)] group-hover:border-[var(--charcoal)] group-hover:text-[var(--paper)] transition-all mt-auto text-[var(--charcoal)]">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Founder Spotlight */}
      <section className="py-[64px] px-[32px]">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-[var(--charcoal)] rounded-[3px] p-[16px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
            <div className="bg-[var(--white)] rounded-[3px] min-h-[500px] flex items-center justify-center relative overflow-hidden">
              <Image src="/gallery/gallery_1.jpg" alt="Founder" fill className="object-cover opacity-80" unoptimized />
            </div>
            <div className="p-[48px] flex flex-col justify-center">
              <div className="flex items-center gap-[8px] mb-[16px]">
                <span className="w-3 h-3 rounded-[3px] bg-[var(--moss)]" />
                <span className="text-[var(--white)] font-semibold text-[14px]">Our Founder</span>
              </div>
              <h2 className="text-[32px] font-semibold text-[var(--white)] mb-[24px] leading-[1.2]">Seema Chowdhry Dhawan</h2>
              <p className="text-[16px] text-[var(--paper)] mb-[40px] leading-[1.65] font-normal">
                It started by noticing what everyone else walks past. An alumnus of IIM Calcutta and Wharton Online with a deep background in ESG strategy, Seema founded The Roadsides to translate corporate sustainability principles into hyperlocal, citizen-led action.
              </p>
              <Link href="/founder" className="inline-flex items-center justify-center bg-[var(--moss)] text-[var(--paper)] font-semibold px-[26px] py-[13px] rounded-[3px] hover:bg-[var(--brick)] hover:text-[var(--white)] transition-colors w-fit text-[16px] min-h-[44px]">
                Read Seema's Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Recognition Strip */}
      <section className="py-[48px] px-[32px] border-y border-[var(--line)]">
        <div className="container mx-auto max-w-7xl">
          <p className="text-center text-[12px] font-semibold uppercase tracking-[0.01em] text-[var(--muted)] mb-[32px]">Recognized & Featured By</p>
          <div className="flex flex-wrap justify-center items-center gap-[48px] md:gap-[96px] opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-[12px]">
              <div className="w-8 h-8 rounded-[3px] bg-[var(--moss)]/20 shrink-0 flex items-center justify-center text-[var(--moss)]">★</div>
              <div>
                <div className="font-semibold text-[var(--charcoal)] leading-[1.2]">UN Environment Programme</div>
                <div className="text-[12px] font-normal text-[var(--muted)]">World Environment Day 2026</div>
              </div>
            </div>
            <div className="font-semibold text-[24px] text-[var(--charcoal)] leading-[1.3]">CEO India Magazine</div>
            <div className="font-semibold text-[24px] text-[var(--charcoal)] leading-[1.3]">YourZourney</div>
            <div className="font-semibold text-[24px] text-[var(--charcoal)] leading-[1.3]">Advaita Awards</div>
          </div>
        </div>
      </section>

      {/* 7. Blog Preview */}
      <section className="py-[64px] px-[32px]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-[48px]">
            <div className="flex items-center justify-center gap-[8px] mb-[12px]">
              <span className="w-3 h-3 rounded-[3px] bg-[var(--moss)]" />
              <span className="text-[var(--charcoal)] font-semibold text-[14px]">Insights</span>
            </div>
            <h2 className="text-[32px] font-semibold tracking-tight mb-[16px] leading-[1.2]">Stories and perspectives.</h2>
            <p className="text-[16px] text-[var(--muted)] leading-[1.65]">Excerpts from "Baby Steps to Green Revolution" and on-ground case studies.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
            {[
              { tag: 'From the Book', title: 'The Power of Consistency', desc: 'How small, daily environmental habits multiply across communities to create lasting impact.', img: 'gallery_6.jpg' },
              { tag: 'On-Ground Stories', title: 'Nurturing After Planting', desc: 'Why our work in Faridabad doesn\'t stop on planting day, and how we maintain saplings year-round.', img: 'gallery_7.jpg' },
              { tag: 'Founder\'s Perspective', title: 'India\'s Urban Future Needs a Shift', desc: 'Our cities are growing fast. Why the focus must return to the immediate roadsides we navigate daily.', img: 'gallery_8.jpg' }
            ].map((post, i) => (
              <Link href="/insights" key={i} className="group block">
                <article className="h-full flex flex-col">
                  <div className="aspect-[4/3] bg-[var(--white)] rounded-[3px] mb-[24px] overflow-hidden relative border border-[var(--line)]">
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

      {/* 8. Gallery Preview */}
      <section className="py-[64px] px-[32px] bg-[var(--white)] rounded-[3px] mx-[16px] mb-[64px] border border-[var(--line)]">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="flex items-center justify-center gap-[8px] mb-[12px]">
            <span className="w-3 h-3 rounded-[3px] bg-[var(--moss)]" />
            <span className="text-[var(--charcoal)] font-semibold text-[14px]">Gallery</span>
          </div>
          <h2 className="text-[32px] font-semibold tracking-tight mb-[48px] leading-[1.2]">Community in Action</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[24px] h-auto lg:h-[600px]">
            <div className="lg:col-span-8 relative bg-[var(--paper)] border border-[var(--line)] rounded-[3px] overflow-hidden group cursor-pointer flex items-center justify-center aspect-video lg:aspect-auto">
              <Image src="/gallery/gallery_1.jpg" alt="Video Thumbnail" fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" unoptimized />
              <div className="absolute inset-0 bg-[var(--charcoal)]/20 group-hover:bg-[var(--charcoal)]/30 transition-colors flex items-center justify-center">
                <div className="w-[64px] h-[64px] bg-[var(--moss)] rounded-[3px] flex items-center justify-center text-[var(--paper)] transition-transform">
                  <Play className="w-[32px] h-[32px] ml-1 fill-current" />
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4 grid grid-rows-3 gap-[24px] h-[600px] lg:h-auto">
              <div className="bg-[var(--paper)] border border-[var(--line)] rounded-[3px] overflow-hidden relative">
                <Image src="/gallery/gallery_1.jpg" alt="Gallery Photo" fill className="object-cover hover:scale-105 transition-transform duration-500" unoptimized />
              </div>
              <div className="bg-[var(--paper)] border border-[var(--line)] rounded-[3px] overflow-hidden relative">
                <Image src="/gallery/gallery_1.jpg" alt="Gallery Photo" fill className="object-cover hover:scale-105 transition-transform duration-500" unoptimized />
              </div>
              <Link href="/gallery" className="bg-[var(--charcoal)] rounded-[3px] flex items-center justify-center text-[var(--paper)] hover:bg-[var(--moss)] transition-colors group">
                <div className="flex flex-col items-center">
                  <span className="font-semibold text-[16px] mb-[8px]">View Full Gallery</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                <Link href="/get-involved" className="inline-flex items-center justify-center bg-[var(--moss)] text-[var(--paper)] px-[26px] py-[13px] rounded-[3px] hover:bg-[var(--brick)] hover:text-[var(--white)] transition-colors text-[16px] font-semibold w-fit min-h-[44px]">
                  Get involved <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              
              {/* Card 1: Donate */}
              <div className="relative rounded-[3px] overflow-hidden group h-[400px] lg:h-[350px] flex flex-col justify-between p-[32px]">
                <Image src="/gallery/gallery_6.jpg" alt="Donate" fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/60" />
                <div className="relative z-10">
                  <h3 className="text-[32px] font-bold text-[var(--white)] tracking-tight mb-[16px] leading-[1.2]">Donate</h3>
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
                <Image src="/gallery/gallery_7.jpg" alt="Volunteer" fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/60" />
                <div className="relative z-10">
                  <h3 className="text-[32px] font-bold text-[var(--white)] tracking-tight mb-[16px] leading-[1.2]">Volunteer</h3>
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
                <Image src="/gallery/gallery_8.jpg" alt="Partner With Us" fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/60" />
                <div className="relative z-10">
                  <h3 className="text-[32px] font-bold text-[var(--white)] tracking-tight mb-[16px] leading-[1.2]">Partner With Us</h3>
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
