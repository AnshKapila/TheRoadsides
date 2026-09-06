import Link from "next/link";
import { ArrowRight, Play, HeartHandshake, Leaf, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero */}
      <section className="relative pt-32 pb-40 px-6 overflow-hidden">
        {/* Subtle background blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
        
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 bg-brand-light border border-brand-dark/5 text-brand-dark px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-primary" />
            A Section 8 Not-For-Profit
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-8 text-brand-dark">
            One person's habit.<br />
            One sector of road.<br />
            <span className="text-brand-primary">Multiplied.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-brand-dark/60 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            The "baby steps" approach to a green revolution. Small, correct daily actions — done consistently and multiplied across a population — create real, systemic change for our environment.
          </p>
          
          <Link href="/about" className="inline-flex items-center justify-center bg-brand-dark text-brand-white font-semibold px-8 py-4 rounded-full hover:bg-brand-primary hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(140,198,63,0.3)] transition-all duration-300 text-lg">
            Learn About Our Mission
          </Link>
        </div>
      </section>

      {/* 2. Impact Numbers Snapshot */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10 -mt-20">
        <div className="bg-brand-white rounded-[2rem] p-10 md:p-16 shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-brand-dark/5 grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-brand-dark/5">
          <div className="text-center md:pt-0 pt-8 first:pt-0">
            <div className="text-6xl font-extrabold text-brand-dark mb-3 tracking-tighter">[XX]</div>
            <div className="text-sm font-bold uppercase tracking-widest text-brand-primary">Sectors Covered</div>
          </div>
          <div className="text-center md:pt-0 pt-8">
            <div className="text-6xl font-extrabold text-brand-dark mb-3 tracking-tighter">[XX,XXX]</div>
            <div className="text-sm font-bold uppercase tracking-widest text-brand-primary">Trees Planted</div>
          </div>
          <div className="text-center md:pt-0 pt-8">
            <div className="text-6xl font-extrabold text-brand-dark mb-3 tracking-tighter">[XX]</div>
            <div className="text-sm font-bold uppercase tracking-widest text-brand-primary">Community Events</div>
          </div>
        </div>
      </div>

      {/* 3. Mission */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-6">Our Mission</h2>
          <p className="text-3xl md:text-4xl lg:text-5xl leading-tight font-extrabold mb-12 text-brand-dark tracking-tight">
            "For the people... of the people... a combined united commitment... by the people of India... a conscious effort by one and all towards our cities, towns, roads, and roadsides."
          </p>
          <Link href="/about" className="inline-flex items-center gap-2 font-bold text-lg hover:text-brand-primary transition-colors pb-1 border-b-2 border-brand-dark hover:border-brand-primary">
            Read our full story
          </Link>
        </div>
      </section>

      {/* 4. Our Work Preview */}
      <section className="py-32 px-6 bg-brand-light rounded-[3rem] mx-4 my-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-4">Our Work</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight">Creating safer, cleaner, greener roadside environments.</h3>
            </div>
            <Link href="/work" className="inline-flex items-center justify-center bg-brand-white border border-brand-dark/10 text-brand-dark font-semibold px-6 py-3 rounded-full hover:border-brand-dark transition-all shrink-0">
              View all initiatives
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <Link href="/work" className="group block">
              <article className="bg-brand-white rounded-[2rem] p-4 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-brand-dark/5">
                <div className="aspect-[4/3] bg-brand-light rounded-[1.5rem] flex items-center justify-center text-brand-dark/30 overflow-hidden relative mb-8">
                  <span className="font-medium">Photo: Ballabgarh Plantation</span>
                </div>
                <div className="px-6 pb-6 flex flex-col flex-grow">
                  <span className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-3">Plantation & Nurturing</span>
                  <h4 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-brand-primary transition-colors">Ballabgarh & Faridabad Drives</h4>
                  <p className="text-brand-dark/60 mb-8 flex-grow leading-relaxed text-lg">Going beyond just planting saplings to establishing a system of continued nurturing, in partnership with local community and environmental groups.</p>
                  <div className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-brand-white transition-all mt-auto">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </article>
            </Link>

            {/* Case Study 2 */}
            <Link href="/work" className="group block">
              <article className="bg-brand-white rounded-[2rem] p-4 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-brand-dark/5">
                <div className="aspect-[4/3] bg-brand-light rounded-[1.5rem] flex items-center justify-center text-brand-dark/30 overflow-hidden relative mb-8">
                  <span className="font-medium">Photo: Textile Waste Collection</span>
                </div>
                <div className="px-6 pb-6 flex flex-col flex-grow">
                  <span className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-3">Circular Economy</span>
                  <h4 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-brand-primary transition-colors">2025 Textile Waste Initiative</h4>
                  <p className="text-brand-dark/60 mb-8 flex-grow leading-relaxed text-lg">Mobilizing students and citizens for zero-waste practices alongside The Modern School, K.L. Mehta College for Women, and Saahas Zero Waste.</p>
                  <div className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-brand-white transition-all mt-auto">
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
            <div className="bg-[#1A1A1A] rounded-[2.5rem] min-h-[500px] flex items-center justify-center text-white/30">
              Founder Photo
            </div>
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <span className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-4">Our Founder</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-white mb-6 tracking-tight">Seema Chowdhry Dhawan</h2>
              <p className="text-lg text-brand-white/70 mb-10 leading-relaxed">
                It started by noticing what everyone else walks past. An alumnus of IIM Calcutta and Wharton Online with a deep background in ESG strategy, Seema founded The Roadsides to translate corporate sustainability principles into hyperlocal, citizen-led action.
              </p>
              <Link href="/founder" className="inline-flex items-center justify-center bg-brand-primary text-brand-white font-semibold px-8 py-4 rounded-full hover:bg-brand-white hover:text-brand-dark transition-all w-fit text-lg">
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
            <h2 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-4">Insights</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Stories and perspectives.</h3>
            <p className="text-lg text-brand-dark/60">Excerpts from "Baby Steps to Green Revolution" and on-ground case studies.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { tag: 'From the Book', title: 'The Power of Consistency', desc: 'How small, daily environmental habits multiply across communities to create lasting impact.' },
              { tag: 'On-Ground Stories', title: 'Nurturing After Planting', desc: 'Why our work in Faridabad doesn\'t stop on planting day, and how we maintain saplings year-round.' },
              { tag: 'Founder\'s Perspective', title: 'India\'s Urban Future Needs a Shift', desc: 'Our cities are growing fast. Why the focus must return to the immediate roadsides we navigate daily.' }
            ].map((post, i) => (
              <Link href="/insights" key={i} className="group block">
                <article className="h-full flex flex-col">
                  <div className="aspect-[4/3] bg-brand-light rounded-[2rem] mb-6 overflow-hidden relative border border-brand-dark/5" />
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
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-4">Gallery</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-16">Community in Action</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[600px]">
            <div className="lg:col-span-8 relative bg-brand-white border border-brand-dark/5 rounded-[2rem] overflow-hidden group cursor-pointer flex items-center justify-center aspect-video lg:aspect-auto">
              <span className="text-brand-dark/40 font-medium">Video Thumbnail: The Roadsides Anthem</span>
              <div className="absolute inset-0 bg-brand-dark/5 group-hover:bg-brand-dark/10 transition-colors flex items-center justify-center">
                <div className="w-24 h-24 bg-brand-primary rounded-full flex items-center justify-center text-brand-white shadow-[0_8px_30px_rgb(140,198,63,0.4)] group-hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 ml-1 fill-current" />
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4 grid grid-rows-3 gap-6 h-[600px] lg:h-auto">
              <div className="bg-brand-white border border-brand-dark/5 rounded-[2rem] flex items-center justify-center text-brand-dark/30 font-medium">Photo</div>
              <div className="bg-brand-white border border-brand-dark/5 rounded-[2rem] flex items-center justify-center text-brand-dark/30 font-medium">Photo</div>
              <Link href="/gallery" className="bg-brand-dark rounded-[2rem] flex items-center justify-center text-brand-white hover:bg-brand-primary transition-colors group">
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
          <div className="bg-brand-primary rounded-[3rem] p-10 md:p-20 text-center text-brand-white">
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
