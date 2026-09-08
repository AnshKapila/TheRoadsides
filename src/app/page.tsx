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
            <h2 className="text-[#00D053] font-semibold text-lg mb-2 tracking-wide">
              Together, We Create Impact
            </h2>
            
            <h1 className="text-white text-7xl md:text-8xl font-bold tracking-tighter leading-[1.0] mb-6">
              Unite. Act.<br />
              Transform
            </h1>
            
            <p className="text-[#D3D3D3] text-base md:text-lg max-w-md mb-10 leading-relaxed font-medium">
              Your support powers life changing missions feeding families & rebuilding hope.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/get-involved" className="inline-flex items-center justify-center bg-[#00D053] text-white font-semibold px-6 py-3.5 rounded-full hover:bg-[#00b347] transition-colors text-[15px]">
                Donate Now <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link href="/about" className="inline-flex items-center justify-center bg-white text-black font-semibold px-6 py-3.5 rounded-full hover:bg-gray-100 transition-colors text-[15px]">
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
              <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight">The Baby Steps Impact</h2>
            </div>
            <p className="text-brand-dark/70 max-w-sm text-sm leading-relaxed">
              Small, correct daily actions — done consistently and multiplied across a population — create real, systemic change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="relative rounded-[2rem] overflow-hidden aspect-square md:aspect-[4/5] bg-brand-dark flex flex-col justify-end p-8 group">
              <Image src="/gallery/gallery_0.jpg" alt="Impact 1" fill className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">[XX]</div>
                <div className="text-xl font-bold text-white mb-1">Sectors Covered</div>
                <div className="text-white/70 text-sm">Across Faridabad and beyond.</div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-[2rem] overflow-hidden aspect-square md:aspect-[4/5] bg-brand-dark flex flex-col justify-end p-8 group">
              <Image src="/gallery/gallery_1.jpg" alt="Impact 2" fill className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">[XX,XXX]</div>
                <div className="text-xl font-bold text-white mb-1">Trees Planted</div>
                <div className="text-white/70 text-sm">Nurtured for long-term survival.</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative rounded-[2rem] overflow-hidden aspect-square md:aspect-[4/5] bg-brand-dark flex flex-col justify-end p-8 group">
              <Image src="/gallery/gallery_2.jpg" alt="Impact 3" fill className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">[XX]</div>
                <div className="text-xl font-bold text-white mb-1">Community Events</div>
                <div className="text-white/70 text-sm">Mobilizing local citizens.</div>
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
      <section className="py-32 px-6 bg-brand-light rounded-[3rem] mx-4 my-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-brand-primary" />
                <span className="text-brand-dark font-medium text-sm">Our Work</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight">Creating safer, cleaner, greener roadside environments.</h3>
            </div>
            <Link href="/work" className="inline-flex items-center justify-center bg-brand-white border border-brand-dark/10 text-brand-dark font-bold px-6 py-3 rounded-full hover:bg-gray-50 transition-colors shrink-0">
              View all initiatives
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <Link href="/work" className="group block">
              <article className="bg-brand-white rounded-[2rem] p-4 h-full flex flex-col border border-brand-dark/5 shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-[4/3] bg-brand-light rounded-[1.5rem] flex items-center justify-center overflow-hidden relative mb-8">
                  <Image src="/gallery/gallery_3.jpg" alt="Ballabgarh Plantation" fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
                </div>
                <div className="px-6 pb-6 flex flex-col flex-grow">
                  <span className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-3">Plantation & Nurturing</span>
                  <h4 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-brand-primary transition-colors">Ballabgarh & Faridabad Drives</h4>
                  <p className="text-brand-dark/60 mb-8 flex-grow leading-relaxed text-lg">Going beyond just planting saplings to establishing a system of continued nurturing, in partnership with local community and environmental groups.</p>
                  <div className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white transition-all mt-auto">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </article>
            </Link>

            {/* Case Study 2 */}
            <Link href="/work" className="group block">
              <article className="bg-brand-white rounded-[2rem] p-4 h-full flex flex-col border border-brand-dark/5 shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-[4/3] bg-brand-light rounded-[1.5rem] flex items-center justify-center overflow-hidden relative mb-8">
                  <Image src="/gallery/gallery_4.jpg" alt="Textile Waste" fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
                </div>
                <div className="px-6 pb-6 flex flex-col flex-grow">
                  <span className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-3">Circular Economy</span>
                  <h4 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-brand-primary transition-colors">2025 Textile Waste Initiative</h4>
                  <p className="text-brand-dark/60 mb-8 flex-grow leading-relaxed text-lg">Mobilizing students and citizens for zero-waste practices alongside The Modern School, K.L. Mehta College for Women, and Saahas Zero Waste.</p>
                  <div className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white transition-all mt-auto">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Founder Spotlight */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-brand-dark rounded-[3rem] p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#1A1A1A] rounded-[2.5rem] min-h-[500px] flex items-center justify-center text-white/30 relative overflow-hidden">
              <Image src="/gallery/gallery_5.jpg" alt="Founder" fill className="object-cover opacity-80" unoptimized />
            </div>
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-brand-primary" />
                <span className="text-white font-medium text-sm">Our Founder</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Seema Chowdhry Dhawan</h2>
              <p className="text-lg text-white/70 mb-10 leading-relaxed">
                It started by noticing what everyone else walks past. An alumnus of IIM Calcutta and Wharton Online with a deep background in ESG strategy, Seema founded The Roadsides to translate corporate sustainability principles into hyperlocal, citizen-led action.
              </p>
              <Link href="/founder" className="inline-flex items-center justify-center bg-brand-primary text-white font-bold px-8 py-4 rounded-full hover:bg-[#7ab136] transition-colors w-fit text-lg">
                Read Seema's Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Recognition Strip */}
      <section className="py-20 px-6 border-y border-brand-dark/5">
        <div className="container mx-auto max-w-7xl">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-brand-dark/40 mb-12">Recognized & Featured By</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-primary/20 shrink-0 flex items-center justify-center text-brand-primary">★</div>
              <div>
                <div className="font-bold text-brand-dark leading-tight">UN Environment Programme</div>
                <div className="text-xs font-medium text-brand-dark/60">World Environment Day 2026</div>
              </div>
            </div>
            <div className="font-bold text-xl text-brand-dark">CEO India Magazine</div>
            <div className="font-bold text-xl text-brand-dark">YourZourney</div>
            <div className="font-bold text-xl text-brand-dark">Advaita Awards</div>
          </div>
        </div>
      </section>

      {/* 7. Blog Preview */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-brand-primary" />
              <span className="text-brand-dark font-medium text-sm">Insights</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Stories and perspectives.</h3>
            <p className="text-lg text-brand-dark/60">Excerpts from "Baby Steps to Green Revolution" and on-ground case studies.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { tag: 'From the Book', title: 'The Power of Consistency', desc: 'How small, daily environmental habits multiply across communities to create lasting impact.', img: 'gallery_6.jpg' },
              { tag: 'On-Ground Stories', title: 'Nurturing After Planting', desc: 'Why our work in Faridabad doesn\'t stop on planting day, and how we maintain saplings year-round.', img: 'gallery_7.jpg' },
              { tag: 'Founder\'s Perspective', title: 'India\'s Urban Future Needs a Shift', desc: 'Our cities are growing fast. Why the focus must return to the immediate roadsides we navigate daily.', img: 'gallery_8.jpg' }
            ].map((post, i) => (
              <Link href="/insights" key={i} className="group block">
                <article className="h-full flex flex-col">
                  <div className="aspect-[4/3] bg-brand-light rounded-[2rem] mb-6 overflow-hidden relative border border-brand-dark/5">
                    <Image src={`/gallery/${post.img}`} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
                  </div>
                  <span className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-3">{post.tag}</span>
                  <h4 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-brand-primary transition-colors">{post.title}</h4>
                  <p className="text-brand-dark/60 mb-6 flex-grow leading-relaxed">{post.desc}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Gallery Preview */}
      <section className="py-32 px-6 bg-brand-light rounded-[3rem] mx-4 mb-32">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-brand-primary" />
            <span className="text-brand-dark font-medium text-sm">Gallery</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-16">Community in Action</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[600px]">
            <div className="lg:col-span-8 relative bg-brand-white border border-brand-dark/5 rounded-[2rem] overflow-hidden group cursor-pointer flex items-center justify-center aspect-video lg:aspect-auto">
              <Image src="/gallery/gallery_9.jpg" alt="Video Thumbnail" fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" unoptimized />
              <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/30 transition-colors flex items-center justify-center">
                <div className="w-24 h-24 bg-brand-primary rounded-full flex items-center justify-center text-white transition-transform">
                  <Play className="w-10 h-10 ml-1 fill-current" />
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4 grid grid-rows-3 gap-6 h-[600px] lg:h-auto">
              <div className="bg-brand-white border border-brand-dark/5 rounded-[2rem] overflow-hidden relative">
                <Image src="/gallery/gallery_10.jpg" alt="Gallery Photo" fill className="object-cover hover:scale-105 transition-transform duration-500" unoptimized />
              </div>
              <div className="bg-brand-white border border-brand-dark/5 rounded-[2rem] overflow-hidden relative">
                <Image src="/gallery/gallery_11.jpg" alt="Gallery Photo" fill className="object-cover hover:scale-105 transition-transform duration-500" unoptimized />
              </div>
              <Link href="/gallery" className="bg-brand-dark rounded-[2rem] flex items-center justify-center text-white hover:bg-brand-primary transition-colors group">
                <div className="flex flex-col items-center">
                  <span className="font-bold text-lg mb-2">View Full Gallery</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Get Involved */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-brand-primary rounded-[3rem] p-10 md:p-20 text-center text-white">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">Be Part of the Solution</h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-16 font-medium">
              Join us in creating safer, cleaner, greener environments. Every contribution—time, resources, or partnership—multiplies our impact.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-brand-white rounded-[2rem] p-8 md:p-10 text-brand-dark flex flex-col hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-6">
                  <HeartHandshake className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Donate</h3>
                <p className="text-brand-dark/60 mb-8 flex-grow leading-relaxed">Your contributions directly fund our on-ground planting, nurturing, and civic improvement initiatives.</p>
                <Link href="/get-involved#donate" className="inline-flex font-bold hover:text-brand-primary transition-colors items-center gap-2 mt-auto">
                  Make a Donation <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-brand-white rounded-[2rem] p-8 md:p-10 text-brand-dark flex flex-col hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-6">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Volunteer</h3>
                <p className="text-brand-dark/60 mb-8 flex-grow leading-relaxed">Join our community drives and help us execute sustainable practices at the hyperlocal level.</p>
                <Link href="/get-involved#volunteer" className="inline-flex font-bold hover:text-brand-primary transition-colors items-center gap-2 mt-auto">
                  Sign Up <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-brand-white rounded-[2rem] p-8 md:p-10 text-brand-dark flex flex-col hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-6">
                  <Leaf className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Partner With Us</h3>
                <p className="text-brand-dark/60 mb-8 flex-grow leading-relaxed">We offer advisory services and collaborate with organizations committed to sustainable development.</p>
                <Link href="/get-involved#partner" className="inline-flex font-bold hover:text-brand-primary transition-colors items-center gap-2 mt-auto">
                  Explore Partnerships <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
