import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

export default function FounderPage() {
  return (
    <div className="flex flex-col pt-24 min-h-screen">
      {/* Page Header */}
      <section className="bg-[var(--paper)] border-b border-[var(--line)] py-[64px] px-[32px]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-[8px] mb-[16px]">
            <span className="w-3 h-3 rounded-[3px] bg-[var(--primary-green)]" />
            <span className="text-[var(--charcoal)] font-semibold text-[14px]">Our Founder</span>
          </div>
          <h1 className="text-[48px] font-bold tracking-[-0.01em] leading-[1.15] text-[var(--charcoal)] mb-[24px]">
            Seema Chowdhry Dhawan
          </h1>
          <p className="text-[24px] font-medium leading-[1.45] text-[var(--primary-green)] italic max-w-3xl">
            &quot;It started by noticing what everyone else walks past. The immediate roadsides we navigate daily hold the key to urban ecological transformation.&quot;
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-[64px] px-[32px]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[64px]">
            {/* Left Column: Image */}
            <div className="lg:col-span-5">
              <div className="sticky top-[120px]">
                <div className="bg-[var(--paper)] border border-[var(--line)] rounded-[3px] p-[16px]">
                  <div className="aspect-[3/4] relative rounded-[3px] overflow-hidden">
                    <Image 
                      src="/founder.jpg" 
                      alt="Seema Chowdhry Dhawan" 
                      fill 
                      className="object-cover" 
                      unoptimized 
                    />
                  </div>
                  <div className="mt-[24px] text-center">
                    <h3 className="text-[20px] font-bold text-[var(--charcoal)] mb-[4px]">Seema Chowdhry Dhawan</h3>
                    <p className="text-[var(--muted)] text-[14px] font-semibold tracking-wide uppercase">Founder & Visionary</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Bio */}
            <div className="lg:col-span-7 flex flex-col gap-[32px] text-[16px] leading-[1.65] text-[var(--charcoal)]">
              <div>
                <h2 className="text-[32px] font-bold text-[var(--charcoal)] leading-[1.2] mb-[24px]">The Journey to The Roadsides</h2>
                <p className="mb-[24px]">
                  An alumnus of IIM Calcutta and Wharton Online with a deep background in ESG strategy, Seema founded The Roadsides to translate corporate sustainability principles into hyperlocal, citizen-led action.
                </p>
                <p className="mb-[24px]">
                  While working extensively in corporate strategy, she realized a critical gap in environmental action: large-scale initiatives often overlook the immediate environments people interact with every single day. The roadsides—often neglected, barren, or treated as waste-dumping grounds—presented an untethered opportunity for micro-ecological restoration.
                </p>
              </div>

              <div className="bg-[var(--paper)] border border-[var(--line)] rounded-[3px] p-[32px] my-[16px]">
                <h3 className="text-[24px] font-bold text-[var(--charcoal)] mb-[16px]">Baby Steps to Green Revolution</h3>
                <p className="mb-[24px]">
                  Seema is also the author of <span className="italic font-medium">Baby Steps to Green Revolution</span>, a foundational text that outlines her philosophy of environmental stewardship. The book argues that small, correct daily actions—done consistently and multiplied across a population—create real, systemic change.
                </p>
                <Link href="/insights" className="inline-flex items-center gap-[8px] text-[var(--brick)] font-semibold hover:text-[var(--primary-green)] transition-colors">
                  Read excerpts from the book <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              <div>
                <h2 className="text-[32px] font-bold text-[var(--charcoal)] leading-[1.2] mb-[24px]">Vision for the Future</h2>
                <p className="mb-[24px]">
                  Under her leadership, The Roadsides has mobilized thousands of citizens, students, and corporate volunteers across Faridabad. Her approach moves beyond just planting saplings—it establishes a system of continued nurturing and circular economy practices.
                </p>
                <p>
                  By creating a model that pairs environmental restoration with community ownership, Seema aims to prove that India&apos;s urban future can be transformed one roadside at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[var(--charcoal)] py-[64px] px-[32px]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-[32px] font-bold text-[var(--paper)] tracking-tight mb-[24px] leading-[1.2]">
            Join Seema&apos;s Mission
          </h2>
          <p className="text-[16px] text-[var(--paper)] leading-[1.65] mb-[32px] max-w-2xl mx-auto">
            The Roadsides is built on the power of community. Whether you want to volunteer for our next drive, or partner with us for a corporate initiative, your contribution matters.
          </p>
          <Link href="/get-involved" className="inline-flex items-center gap-[8px] justify-center bg-[var(--primary-green)] text-[var(--charcoal)] px-[32px] py-[16px] rounded-[3px] hover:bg-[var(--brick)] transition-colors text-[16px] font-semibold min-h-[48px]"> Get Involved Today <Heart className="w-[18px] h-[18px]" strokeWidth={2.5} /></Link>
        </div>
      </section>
    </div>
  );
}
