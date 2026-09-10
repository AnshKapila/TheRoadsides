import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wallet, Users, Handshake } from "lucide-react";

export default function GetInvolvedPage() {
  return (
    <div className="flex flex-col pt-24 min-h-screen">
      {/* Page Header */}
      <section className="bg-[var(--paper)] border-b border-[var(--line)] py-[64px] px-[32px]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-[8px] mb-[16px]">
            <span className="w-3 h-3 rounded-[3px] group bg-[var(--primary-green)]" />
            <span className="text-[var(--charcoal)] font-semibold text-[14px]">Get Involved</span>
          </div>
          <h1 className="text-[48px] font-bold tracking-[-0.01em] leading-[1.15] text-[var(--charcoal)] mb-[24px]">
            Be Part of the Solution
          </h1>
          <p className="text-[24px] font-medium leading-[1.45] text-[var(--primary-green)] italic max-w-3xl">
            &quot;Every contribution—time, resources, or partnership—multiplies our impact on the ground.&quot;
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-[64px] px-[32px]">
        <div className="container mx-auto max-w-7xl flex flex-col gap-[64px]">
          
          {/* Donate */}
          <div id="donate" className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] items-center">
            <div className="aspect-[4/3] bg-[var(--paper)] rounded-[3px] flex items-center justify-center overflow-hidden relative border border-[var(--line)]">
              <Image src="/gallery/gallery_122.jpg" alt="Donation impact" fill className="object-cover" unoptimized />
            </div>
            <div className="flex flex-col gap-[24px]">
              <h2 className="text-[32px] font-bold text-[var(--charcoal)] leading-[1.2]">Donate</h2>
              <p className="text-[16px] leading-[1.65] text-[var(--charcoal)]">
                Your contributions directly fund our on-ground planting, nurturing, and civic improvement initiatives. Because we focus on long-term survival rather than just planting numbers, every rupee goes towards sustaining the micro-ecosystems we build.
              </p>
              <Link href="/contact" className="group inline-flex items-center gap-[8px] justify-center bg-[var(--primary-green)] text-[var(--charcoal)] font-semibold px-[32px] py-[13px] rounded-[3px] hover:bg-[var(--charcoal)] hover:text-[var(--primary-green)] transition-all duration-300 text-[16px] min-h-[44px]">
                Make a Donation <span className="relative w-[18px] h-[18px] overflow-hidden flex items-center justify-center shrink-0">
    <Wallet className="absolute w-[18px] h-[18px] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[150%]" strokeWidth={2.5} />
    <Wallet className="absolute w-[18px] h-[18px] -translate-x-[150%] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0" strokeWidth={2.5} />
  </span>
              </Link>
            </div>
          </div>

          {/* Volunteer */}
          <div id="volunteer" className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] items-center">
            <div className="flex flex-col gap-[24px] order-2 lg:order-1">
              <h2 className="text-[32px] font-bold text-[var(--charcoal)] leading-[1.2]">Volunteer</h2>
              <p className="text-[16px] leading-[1.65] text-[var(--charcoal)]">
                Join our community drives and help us execute sustainable practices at the hyperlocal level. Whether it&apos;s a weekend planting drive, a textile waste collection run, or helping to maintain our existing sites, your time makes a visible difference in your city.
              </p>
              <Link href="/contact" className="group inline-flex items-center gap-[8px] justify-center bg-[var(--primary-green)] text-[var(--charcoal)] font-semibold px-[32px] py-[13px] rounded-[3px] hover:bg-[var(--charcoal)] hover:text-[var(--primary-green)] transition-all duration-300 text-[16px] min-h-[44px]">
                Sign Up to Volunteer <span className="relative w-[18px] h-[18px] overflow-hidden flex items-center justify-center shrink-0">
    <Users className="absolute w-[18px] h-[18px] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[150%]" strokeWidth={2.5} />
    <Users className="absolute w-[18px] h-[18px] -translate-x-[150%] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0" strokeWidth={2.5} />
  </span>
              </Link>
            </div>
            <div className="aspect-[4/3] bg-[var(--paper)] rounded-[3px] flex items-center justify-center overflow-hidden relative border border-[var(--line)] order-1 lg:order-2">
              <Image src="/gallery/gallery_126.jpg" alt="Volunteers in action" fill className="object-cover" unoptimized />
            </div>
          </div>

          {/* Partner */}
          <div id="partner" className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] items-center">
            <div className="aspect-[4/3] bg-[var(--paper)] rounded-[3px] flex items-center justify-center overflow-hidden relative border border-[var(--line)]">
              <Image src="/gallery/gallery_130.jpg" alt="Corporate partnership" fill className="object-cover" unoptimized />
            </div>
            <div className="flex flex-col gap-[24px]">
              <h2 className="text-[32px] font-bold text-[var(--charcoal)] leading-[1.2]">Partner With Us</h2>
              <p className="text-[16px] leading-[1.65] text-[var(--charcoal)]">
                We offer advisory services and collaborate with organizations committed to sustainable development. Align your ESG goals with tangible, on-ground projects that benefit the immediate communities your employees live and work in.
              </p>
              <Link href="/contact" className="group inline-flex items-center gap-[8px] justify-center bg-[var(--primary-green)] text-[var(--charcoal)] font-semibold px-[32px] py-[13px] rounded-[3px] hover:bg-[var(--charcoal)] hover:text-[var(--primary-green)] transition-all duration-300 text-[16px] min-h-[44px]">
                Explore Partnerships <span className="relative w-[18px] h-[18px] overflow-hidden flex items-center justify-center shrink-0">
    <Handshake className="absolute w-[18px] h-[18px] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[150%]" strokeWidth={2.5} />
    <Handshake className="absolute w-[18px] h-[18px] -translate-x-[150%] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0" strokeWidth={2.5} />
  </span>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
