import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

export default function WorkPage() {
  const initiatives = [
    {
      title: "Ballabgarh & Faridabad Drives",
      tag: "Plantation & Nurturing",
      desc: "Going beyond just planting saplings to establishing a system of continued nurturing, in partnership with local community and environmental groups.",
      img: "gallery_107.jpg"
    },
    {
      title: "2025 Textile Waste Initiative",
      tag: "Circular Economy",
      desc: "Mobilizing students and citizens for zero-waste practices alongside The Modern School, K.L. Mehta College for Women, and Saahas Zero Waste.",
      img: "gallery_112.jpg"
    },
    {
      title: "Highway Green Corridors",
      tag: "Urban Infrastructure",
      desc: "Transforming barren stretches along major state highways into vibrant micro-forests, improving air quality and aesthetic value.",
      img: "gallery_133.jpg"
    },
    {
      title: "Student Stewardship Program",
      tag: "Education",
      desc: "Empowering the next generation to take ownership of their local environment through dedicated adoption drives.",
      img: "gallery_141.jpg"
    }
  ];

  return (
    <div className="flex flex-col pt-24 min-h-screen">
      {/* Page Header */}
      <section className="bg-[var(--paper)] border-b border-[var(--line)] py-[64px] px-[32px]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-[8px] mb-[16px]">
            <span className="w-3 h-3 rounded-[3px] bg-[var(--primary-green)]" />
            <span className="text-[var(--charcoal)] font-semibold text-[14px]">Our Work</span>
          </div>
          <h1 className="text-[48px] font-bold tracking-[-0.01em] leading-[1.15] text-[var(--charcoal)] mb-[24px]">
            Action on the Ground
          </h1>
          <p className="text-[24px] font-medium leading-[1.45] text-[var(--primary-green)] italic max-w-3xl">
            &quot;Our initiatives turn philosophy into physical change. Here is where we dig in, plant, and nurture.&quot;
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-[64px] px-[32px]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
            {initiatives.map((item, i) => (
              <article key={i} className="bg-[var(--paper)] rounded-[3px] p-[16px] flex flex-col border border-[var(--line)] hover:border-[var(--charcoal)] transition-colors duration-300">
                <div className="aspect-[4/3] bg-[var(--paper)] rounded-[3px] flex items-center justify-center overflow-hidden relative mb-[32px]">
                  <Image src={`/gallery/${item.img}`} alt={item.title} fill className="object-cover transition-transform duration-700 hover:scale-105" unoptimized />
                </div>
                <div className="px-[24px] pb-[24px] flex flex-col flex-grow">
                  <span className="text-[var(--brick)] text-[12px] font-semibold uppercase tracking-[0.01em] mb-[12px]">{item.tag}</span>
                  <h3 className="text-[24px] font-bold mb-[16px] leading-[1.3] text-[var(--charcoal)]">{item.title}</h3>
                  <p className="text-[var(--muted)] mb-[32px] flex-grow leading-[1.65] text-[16px] font-normal">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[var(--charcoal)] py-[64px] px-[32px]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-[32px] font-bold text-[var(--paper)] tracking-tight mb-[24px] leading-[1.2]">
            Start Your Own Initiative
          </h2>
          <p className="text-[16px] text-[var(--paper)]/80 leading-[1.65] mb-[32px] max-w-2xl mx-auto">
            Want to transform a roadside in your neighborhood? We provide the expertise, you provide the community.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--primary-green)] text-[var(--charcoal)] px-[32px] py-[16px] rounded-[3px] hover:bg-[var(--brick)] hover:text-[var(--paper)] transition-colors text-[16px] font-semibold min-h-[48px] gap-[8px]">
            Partner With Us <Leaf className="w-[18px] h-[18px]" strokeWidth={2.5} />
          </Link>
        </div>
      </section>
    </div>
  );
}
