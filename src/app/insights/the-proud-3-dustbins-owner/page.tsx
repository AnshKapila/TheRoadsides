import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "The Proud 3 Dustbins Owner | The Roadsides",
  description: "Why Waste is Actually Gold of Decent Value if Segregated at the Source of generation.",
};

export default function BlogPost() {
  return (
    <div className="flex flex-col pt-24 min-h-screen bg-[var(--paper)]">
      {/* Back button */}
      <div className="container mx-auto max-w-4xl px-[32px] pt-[32px]">
        <Link href="/insights" className="inline-flex items-center gap-[8px] text-[var(--charcoal)]/70 hover:text-[var(--primary-green)] transition-colors font-semibold text-[14px]">
          <ArrowLeft size={16} /> Back to Insights
        </Link>
      </div>

      {/* Header */}
      <header className="container mx-auto max-w-4xl px-[32px] py-[32px]">
        <h1 className="text-[40px] md:text-[56px] font-bold tracking-tight leading-[1.1] text-[var(--charcoal)] mb-[16px]">
          The Proud 3 Dustbins Owner, and Why Waste is Actually Gold of Decent Value if Segregated at the Source of generation
        </h1>
        <p className="text-[16px] text-[var(--muted)] font-medium">From Baby Steps to Green Revolution</p>
      </header>

      {/* Image 1: Top Banner */}
      <div className="w-full mb-[48px]">
        <div className="container mx-auto max-w-4xl px-[32px]">
          <div className="relative w-full aspect-[2/1] md:aspect-[21/9] rounded-[3px] overflow-hidden">
            <Image src="/blog/dustbin-banner-1.png" alt="The Proud 3 Dustbins Owner" fill className="object-cover" unoptimized />
          </div>
        </div>
      </div>

      {/* Content Part 1 */}
      <article className="container mx-auto max-w-4xl px-[32px] text-[18px] leading-[1.8] text-[var(--charcoal)]">
        <p className="mb-[24px]">
          Most Indian homes have one dustbin. Everything goes into it. Kitchen scraps, rotten food, plastic wrappers, batteries, expired medicine, bathroom waste, diapers and what not, all mixed together - the result is simply Garbage which is of no use to anyone and needs to be sent to Landfill making the mountain of menace larger and monstrous. It is difficult to sort, so it rots there releasing methane in air and toxic residues in soil, and passing through the soil it reaches underground water which is source for irrigation, tubewell, drinking water for animals and humans alike through ponds and wells, so spreading cancer and other diseases impacting one and all. It gets into crops that we harvest and eat as well.
        </p>
        <p className="mb-[24px]">
          Our founder, Seema Chowdhry Dhawan, has a chapter in her book, Baby Steps to Green Revolution, called "The Proud 3 Dustbins Owner." The title is doing more work than it looks like. It is not asking you to feel burdened by an extra chore. It is telling you that a household with three dustbins has access to something most households don't, the ability to turn its own waste back into value instead of sending all of it to rot in a landfill.
        </p>
        <p className="mb-[48px] font-semibold text-[20px] text-[var(--primary-green)] italic">
          Here is the system, exactly as the book lays it out.
        </p>
        
        <p className="mb-[24px]">
          <strong className="text-[var(--brick)]">The green bin</strong> stays in the kitchen only, and it stays small on purpose, so nothing but fruit and vegetable waste ever fits into it. This waste is not garbage. It is raw material for compost or biogas, both of which have real, monetisable value once collected clean.
        </p>
        <p className="mb-[24px]">
          <strong className="text-[#3b82f6]">The blue bin</strong> holds paper, cardboard, plastic, glass, metal, and fabric and electronic waste as well kept physically apart from the green bin so nothing gets mixed in without thinking. Every one of these materials can be reused, repurposed, or recycled, which again means value, not waste, provided it arrives at the recycler uncontaminated.
        </p>
        <p className="mb-[48px]">
          <strong className="text-[#ef4444]">The red or yellow bin</strong> is different in nature, not degree. This is hazardous waste only, old batteries, chemicals, bathroom waste, kept in its own bag, kept out of reach of children and pets, and channelled separately for proper treatment. There is no monetising this bin. Its job is safety, and it does that job by staying completely separate from the other two.
        </p>
      </article>

      {/* Image 2: Middle Banner */}
      <div className="w-full mb-[48px]">
        <div className="container mx-auto max-w-4xl px-[32px]">
          <div className="relative w-full aspect-[2/1] md:aspect-[21/9] rounded-[3px] overflow-hidden border border-[var(--line)]">
            <Image src="/blog/dustbin-banner-2.png" alt="The 3 Dustbins System" fill className="object-cover" unoptimized />
          </div>
        </div>
      </div>

      {/* Content Part 2 */}
      <article className="container mx-auto max-w-4xl px-[32px] text-[18px] leading-[1.8] text-[var(--charcoal)] mb-[48px]">
        <p className="mb-[24px] text-[24px] font-bold leading-[1.4] text-[var(--primary-green)]">
          The line worth sitting with, straight from the book, is this: segregated correctly from the start, almost everything you throw away has value. Mixed together even once, all of it becomes garbage, and there is no fixing that after the fact.
        </p>
        <p className="mb-[24px]">
          The simple philosophy is - We don't ask people to overhaul their lives. We ask for one small, correct habit, repeated daily, multiplied across enough households to actually change what a landfill looks like a few years from now. Three bins is not extra effort. It is the one habit standing between waste and gold.
        </p>
        <p className="mb-[24px]">
          This chapter is one of many in Baby Steps to Green Revolution, where Seema Chowdhry Dhawan writes about the small, repeatable actions that add up to real environmental change, from home composting to reusing RO waste water to why a single flower plucked from a public roadside disturbs more than you'd think.
        </p>
        <p className="mb-[24px] font-medium">
          If this chapter resonated, the book has nineteen more built on the same idea.
        </p>
        
        <div className="mt-[32px]">
          <a href="https://amzn.in/d/07HQA9r5" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-[8px] justify-center bg-[var(--charcoal)] text-[var(--paper)] font-semibold px-[32px] py-[13px] rounded-[3px] hover:bg-[var(--primary-green)] hover:text-[var(--charcoal)] transition-all duration-300">
            Read Baby Steps to Green Revolution
          </a>
        </div>
      </article>

      {/* Image 3: End Banner */}
      <div className="w-full pb-[64px]">
        <div className="container mx-auto max-w-4xl px-[32px]">
          <div className="relative w-full aspect-[2/1] md:aspect-[21/9] rounded-[3px] overflow-hidden">
            <Image src="/blog/dustbin-banner-3.png" alt="Pick one habit. Start today." fill className="object-cover" unoptimized />
          </div>
        </div>
      </div>
    </div>
  );
}
