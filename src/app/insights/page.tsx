import Image from "next/image";
import Link from "next/link";

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
            <span className="w-3 h-3 rounded-[3px] bg-[var(--moss)]" />
            <span className="text-[var(--charcoal)] font-semibold text-[14px]">Insights</span>
          </div>
          <h1 className="text-[48px] font-bold tracking-[-0.01em] leading-[1.15] text-[var(--charcoal)] mb-[24px]">
            Stories & Perspectives
          </h1>
          <p className="text-[24px] font-medium leading-[1.45] text-[var(--moss)] italic max-w-3xl">
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
                  <div className="aspect-[4/3] bg-[var(--white)] rounded-[3px] mb-[24px] overflow-hidden relative border border-[var(--line)]">
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
    </div>
  );
}
