import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Stray Cattle on Highways | The Roadsides",
  description: "The Road Safety Gap Nobody Can Report.",
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
          Stray Cattle on Highways: The Road Safety Gap Nobody Can Report
        </h1>
        <p className="text-[16px] text-[var(--muted)] font-medium">By The Roadsides Foundation</p>
      </header>

      {/* Image 1: Top Banner */}
      <div className="w-full mb-[48px]">
        <div className="container mx-auto max-w-4xl px-[32px]">
          <div className="relative w-full aspect-[2/1] md:aspect-[21/9] rounded-[3px] overflow-hidden">
            <Image src="/blog/cattle-banner-1.jpg" alt="Stray cattle on the highway" fill className="object-cover" unoptimized />
          </div>
        </div>
      </div>

      {/* Content Part 1 */}
      <article className="container mx-auto max-w-4xl px-[32px] text-[18px] leading-[1.8] text-[var(--charcoal)] mb-[48px]">
        <p className="mb-[24px]">
          Drive the Delhi-Faridabad stretch of NH19 near Badarpur at dawn and you may see something that has become strangely normal across Delhi NCR: stray cattle standing on, or crossing, a fast-moving highway. Drivers brake, swerve and carry on. But once the moment passes, what happens to that hazard? In most cases, nothing, because there is no clear place to report it.
        </p>

        <h2 className="text-[24px] font-bold text-[var(--charcoal)] leading-[1.3] mt-[48px] mb-[16px]">
          Why stray cattle on highways are a serious road safety risk
        </h2>
        <p className="mb-[24px]">
          A cow on a high-speed road gives a driver very little time to react. At dawn, dusk and at night, when visibility drops, that window shrinks further. A sudden brake can cause a rear-end collision, a swerve can push a vehicle into the next lane, and heavy trucks simply cannot stop in time. The danger falls on everyone: two-wheeler riders, truck drivers, families in cars and the animals themselves.
        </p>
        <p className="mb-[24px]">
          This is not limited to one road. Stray cattle on expressways and highways is a pattern seen across India, which is why we see it as a systems problem, not a single bad stretch.
        </p>

        <h2 className="text-[24px] font-bold text-[var(--charcoal)] leading-[1.3] mt-[48px] mb-[16px]">
          The reporting gap: what civic apps can and cannot log
        </h2>
        <p className="mb-[24px]">
          The Swachhata App is the government's civic reporting tool, and it helps citizens flag sanitation issues such as garbage. But stray cattle on a highway has no category of its own. A citizen who wants to report the hazard has no obvious place to start, so most people do the sensible thing and simply drive on.
        </p>

        <h2 className="text-[24px] font-bold text-[var(--charcoal)] leading-[1.3] mt-[48px] mb-[16px]">
          Why an unreported hazard never gets fixed
        </h2>
        <p className="mb-[24px]">
          Here is the chain that matters. A hazard has to be reported before it can be recorded. It has to be recorded before a pattern can be seen. A pattern has to be seen before an authority can act, and only then does a road get safer. Break the first link and everything after it stops.
        </p>
        <p className="mb-[24px]">
          The result is that the next incident happens on the same stretch of road, and the one after that, with nothing on record to show it was ever a problem.
        </p>
      </article>

      {/* Image 2: Middle Banner */}
      <div className="w-full mb-[48px]">
        <div className="container mx-auto max-w-4xl px-[32px]">
          <div className="relative w-full aspect-[2/1] md:aspect-[21/9] rounded-[3px] overflow-hidden border border-[var(--line)]">
            <Image src="/blog/cattle-banner-2.jpg" alt="Unreported hazards on the road" fill className="object-cover" unoptimized />
          </div>
        </div>
      </div>

      {/* Content Part 2 */}
      <article className="container mx-auto max-w-4xl px-[32px] text-[18px] leading-[1.8] text-[var(--charcoal)] mb-[48px]">
        <h2 className="text-[24px] font-bold text-[var(--charcoal)] leading-[1.3] mb-[16px]">
          What a better reporting system could look like
        </h2>
        <p className="mb-[16px]">We believe four changes are worth asking for:</p>
        <ul className="list-disc pl-[24px] mb-[24px] space-y-[8px]">
          <li>A dedicated category for stray animals on roads inside existing civic apps</li>
          <li>Location tagging, so repeat stretches become visible</li>
          <li>Routing to the right body, whether highway, municipal or animal welfare</li>
          <li>A response back to the citizen, so reporting feels worth the effort</li>
        </ul>
        <p className="mb-[24px]">
          None of this needs new technology. It needs a category, a map pin and someone accountable for the response.
        </p>

        <h2 className="text-[24px] font-bold text-[var(--charcoal)] leading-[1.3] mt-[48px] mb-[16px]">
          How you can help improve road safety in Delhi NCR
        </h2>
        <p className="mb-[24px]">
          The Roadsides works on safer, cleaner and greener roadsides in Faridabad and the wider NCR, because the space beside the road matters as much as the road itself. If you travel this route, note the location and time when you see cattle on the carriageway, and share it with your local civic body through whatever channel you have. Small, correct actions, repeated by enough people, are how gaps like this get noticed.
        </p>
        <p className="mb-[24px] font-semibold text-[var(--primary-green)]">
          Follow The Roadsides on LinkedIn to keep up with our work on safer roadsides.
        </p>

        <div className="mt-[32px]">
          <a href="https://www.linkedin.com/company/the-roadsides/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-[8px] justify-center bg-[#0a66c2] text-white font-semibold px-[32px] py-[13px] rounded-[3px] hover:bg-[#004182] transition-all duration-300">
            Follow us on LinkedIn
          </a>
        </div>
      </article>

      {/* Image 3: End Banner */}
      <div className="w-full pb-[64px]">
        <div className="container mx-auto max-w-4xl px-[32px]">
          <div className="relative w-full aspect-[2/1] md:aspect-[21/9] rounded-[3px] overflow-hidden">
            <Image src="/blog/cattle-banner-3.jpg" alt="A call to action for safer roads" fill className="object-cover" unoptimized />
          </div>
        </div>
      </div>
    </div>
  );
}
