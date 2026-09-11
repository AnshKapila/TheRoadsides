import Image from "next/image";
import Link from "next/link";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function InsightsPage() {
  const posts = [
    { tag: 'From the Book', title: 'The Power of Consistency', desc: 'How small, daily environmental habits multiply across communities to create lasting impact.', img: 'gallery_122.jpg' },
    { tag: 'On-Ground Stories', title: 'Nurturing After Planting', desc: 'Why our work in Faridabad doesn\'t stop on planting day, and how we maintain saplings year-round.', img: 'gallery_126.jpg' },
    { tag: 'Founder\'s Perspective', title: 'India\'s Urban Future Needs a Shift', desc: 'Our cities are growing fast. Why the focus must return to the immediate roadsides we navigate daily.', img: 'gallery_130.jpg' },
    { tag: 'Circular Economy', title: 'Textile Waste Integration', desc: 'Partnering with local schools to turn textile waste into a community resource.', img: 'gallery_144.jpg' },
    { tag: 'Community', title: 'Mobilizing the Youth', desc: 'Engaging the next generation of environmental stewards in local colleges.', img: 'gallery_158.jpg' },
    { tag: 'Strategy', title: 'Corporate Sustainability at the Hyperlocal Level', desc: 'Translating ESG goals into tangible, visible community projects.', img: 'gallery_172.jpg' },
  ];

  return (
    <div className="flex flex-col pt-24 min-h-screen">
      {/* Page Header */}
      <section className="bg-[var(--paper)] border-b border-[var(--line)] py-[64px] px-[32px]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-[8px] mb-[16px]">
            <span className="w-3 h-3 rounded-[3px] group bg-[var(--primary-green)]" />
            <span className="text-[var(--charcoal)] font-semibold text-[14px]">Insights</span>
          </div>
          <h1 className="text-[48px] font-bold tracking-[-0.01em] leading-[1.15] text-[var(--charcoal)] mb-[24px]">
            Stories & Perspectives
          </h1>
          <p className="text-[24px] font-medium leading-[1.45] text-[var(--primary-green)] italic max-w-3xl">
            &quot;Excerpts from our work on the ground, and thoughts on the future of urban ecology.&quot;
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-[64px] px-[32px]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[48px]">
            {posts.map((post, i) => (
              <Link href="#" key={i} className="group block">
                <article className="h-full flex flex-col">
                  <div className="aspect-[4/3] bg-[var(--paper)] rounded-[3px] mb-[24px] overflow-hidden relative border border-[var(--line)]">
                    <Image src={`/gallery/${post.img}`} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
                  </div>
                  <span className="text-[var(--brick)] text-[12px] font-semibold uppercase tracking-[0.01em] mb-[12px]">{post.tag}</span>
                  <h3 className="text-[24px] font-bold mb-[12px] leading-[1.3] group-hover:text-[var(--brick)] transition-colors text-[var(--charcoal)]">{post.title}</h3>
                  <p className="text-[var(--muted)] mb-[24px] flex-grow leading-[1.65] text-[16px]">{post.desc}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* LinkedIn CTA Banner */}
      <section className="px-[32px] pb-[64px]">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-[var(--charcoal)] rounded-[3px] p-[48px] flex flex-col md:flex-row items-center justify-between gap-[32px]">
            <div className="max-w-2xl text-left">
              <h2 className="text-[32px] font-bold text-[var(--paper)] tracking-tight mb-[12px] leading-[1.2]">
                Stay connected with our story.
              </h2>
              <p className="text-[16px] text-[var(--line)] leading-[1.65]">
                Join us over on LinkedIn to know the stories firsthand, understand what we are doing, and stay connected with our community&apos;s growth.
              </p>
            </div>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-[8px] justify-center bg-[var(--primary-green)] text-[var(--charcoal)] font-semibold px-[32px] py-[13px] rounded-[3px] hover:bg-[var(--paper)] hover:text-[var(--charcoal)] transition-all duration-300 text-[16px] min-h-[44px] shrink-0">
              Follow on LinkedIn
              <span className="relative w-[18px] h-[18px] overflow-hidden flex items-center justify-center shrink-0">
                <LinkedinIcon className="absolute w-[18px] h-[18px] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[150%]" />
                <LinkedinIcon className="absolute w-[18px] h-[18px] -translate-x-[150%] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
