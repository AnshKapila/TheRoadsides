import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart , Handshake} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col pt-24 min-h-screen">
      {/* Page Header */}
      <section className="bg-[var(--paper)] border-b border-[var(--line)] py-[64px] px-[32px]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-[8px] mb-[16px]">
            <span className="w-3 h-3 rounded-[3px] group bg-[var(--primary-green)]" />
            <span className="text-[var(--charcoal)] font-semibold text-[14px]">About Us</span>
          </div>
          <h1 className="text-[48px] font-bold tracking-[-0.01em] leading-[1.15] text-[var(--charcoal)] mb-[24px]">
            Our Mission & Vision
          </h1>
          <p className="text-[24px] font-medium leading-[1.45] text-[var(--primary-green)] italic max-w-3xl">
            &quot;Transforming neglected urban spaces into thriving ecological micro-systems, one roadside at a time.&quot;
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-[64px] px-[32px]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px]">
            <div className="flex flex-col gap-[32px] text-[16px] leading-[1.65] text-[var(--charcoal)]">
              <div>
                <h2 className="text-[32px] font-bold text-[var(--charcoal)] leading-[1.2] mb-[24px]">The Problem We See</h2>
                <p className="mb-[24px]">
                  As our cities rapidly expand, vast tracts of land along our roadsides are left barren, neglected, or turned into informal dumping grounds. These micro-environments are often the first thing citizens see every day, yet they remain devoid of ecological value.
                </p>
                <p>
                  Large-scale forestry projects are essential, but true urban transformation requires hyperlocal interventions. We need green spaces where we live, commute, and work.
                </p>
              </div>

              <div>
                <h2 className="text-[32px] font-bold text-[var(--charcoal)] leading-[1.2] mb-[24px]">Our Approach</h2>
                <p className="mb-[24px]">
                  The Roadsides operates on the philosophy of &quot;Baby Steps to Green Revolution.&quot; We don&apos;t just plant saplings and walk away. Our model is built on continuous nurturing, community ownership, and sustained impact.
                </p>
                <ul className="list-disc pl-[24px] flex flex-col gap-[12px]">
                  <li><strong>Strategic Planting:</strong> Identifying neglected roadsides and planting native, resilient species.</li>
                  <li><strong>Continued Nurturing:</strong> Ensuring high survival rates through regular maintenance, watering, and protection.</li>
                  <li><strong>Community Integration:</strong> Partnering with local schools, colleges, and civic groups to foster long-term stewardship.</li>
                  <li><strong>Circular Economy:</strong> Integrating zero-waste and textile recycling practices into our environmental drives.</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-[32px]">
              <div className="aspect-[4/3] bg-[var(--paper)] rounded-[3px] flex items-center justify-center overflow-hidden relative border border-[var(--line)]">
                <Image src="/gallery/gallery_103.jpg" alt="Community planting drive" fill className="object-cover" unoptimized />
              </div>
              <div className="aspect-[4/3] bg-[var(--paper)] rounded-[3px] flex items-center justify-center overflow-hidden relative border border-[var(--line)]">
                <Image src="/gallery/gallery_107.jpg" alt="Sapling nurturing" fill className="object-cover" unoptimized />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Feature */}
      <section className="py-[64px] px-[32px] bg-[var(--paper)] border-t border-[var(--line)]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row gap-[48px] items-center">
            <div className="w-full md:w-1/3 md:max-w-xs aspect-[3/4] bg-[var(--charcoal)] rounded-[3px] relative overflow-hidden border border-[var(--line)] shadow-lg group shrink-0">
              <Image src="/gallery/gallery_122.jpg" alt="Book Cover" fill className="object-cover group-hover:scale-[1.03] transition-transform duration-[800ms] ease-out" unoptimized />
            </div>
            <div className="w-full md:w-2/3">
              <div className="flex items-center gap-[8px] mb-[16px]">
                <span className="w-3 h-3 rounded-[3px] bg-[var(--brick)]" />
                <span className="text-[var(--charcoal)] font-semibold text-[14px] uppercase tracking-wider">From the Founder</span>
              </div>
              <h2 className="text-[32px] md:text-[40px] font-bold text-[var(--charcoal)] leading-[1.2] mb-[24px]">
                The Power of Consistency
              </h2>
              <p className="text-[16px] text-[var(--muted)] leading-[1.65] mb-[24px]">
                In her debut book, Seema Chowdhry Dhawan explores the philosophy that drives The Roadsides: how small, daily environmental habits multiply across communities to create lasting impact.
              </p>
              <p className="text-[16px] text-[var(--muted)] leading-[1.65] mb-[32px]">
                Drawing from personal anecdotes of turning barren urban patches into thriving micro-ecosystems, the book serves as both a memoir and a manual for aspiring environmentalists looking to create change right in their own neighborhoods.
              </p>
              <Link href="/founder" className="group inline-flex items-center gap-[8px] justify-center bg-transparent border-[1.5px] border-[var(--primary-green)] text-[var(--primary-green)] font-semibold px-[32px] py-[13px] rounded-[3px] hover:bg-[var(--primary-green)] hover:text-[var(--charcoal)] transition-all duration-300 text-[16px] min-h-[44px]">
                Read More About the Founder
                <span className="relative w-[18px] h-[18px] overflow-hidden flex items-center justify-center shrink-0">
                  <ArrowRight className="absolute w-[18px] h-[18px] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[150%]" strokeWidth={2.5} />
                  <ArrowRight className="absolute w-[18px] h-[18px] -translate-x-[150%] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0" strokeWidth={2.5} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[var(--charcoal)] py-[64px] px-[32px]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-[32px] font-bold text-[var(--paper)] tracking-tight mb-[24px] leading-[1.2]">
            Join Our Movement
          </h2>
          <p className="text-[16px] text-[var(--paper)] leading-[1.65] mb-[32px] max-w-2xl mx-auto">
            We are always looking for volunteers, donors, and corporate partners to expand our reach across India.
          </p>
          <Link href="/get-involved" className="group inline-flex items-center gap-[8px] justify-center bg-[var(--primary-green)] text-[var(--charcoal)] font-semibold px-[32px] py-[13px] rounded-[3px] hover:bg-[var(--charcoal)] hover:text-[var(--primary-green)] transition-all duration-300 text-[16px] min-h-[44px]">Join Us<span className="relative w-[18px] h-[18px] overflow-hidden flex items-center justify-center shrink-0">
    <Handshake className="absolute w-[18px] h-[18px] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[150%]" strokeWidth={2.5} />
    <Handshake className="absolute w-[18px] h-[18px] -translate-x-[150%] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0" strokeWidth={2.5} />
  </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
