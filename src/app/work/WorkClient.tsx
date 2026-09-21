"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function WorkClient({ initiatives }: { initiatives: any[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : initiatives.length - 1));
      if (e.key === "ArrowRight") setSelectedIndex((prev) => (prev !== null && prev < initiatives.length - 1 ? prev + 1 : 0));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, initiatives.length]);

  return (
    <div className="flex flex-col pt-24 min-h-screen">
      {/* Page Header */}
      <section className="bg-[var(--paper)] border-b border-[var(--line)] py-[64px] px-[32px]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-[8px] mb-[16px]">
            <span className="w-3 h-3 rounded-[3px] group bg-[var(--primary-green)]" />
            <span className="text-[var(--charcoal)] font-semibold text-[14px]">The Journey</span>
          </div>
          <h1 className="text-[48px] font-bold tracking-[-0.01em] leading-[1.15] text-[var(--charcoal)] mb-[24px]">
            Collaborations and Endeavours
          </h1>
          <p className="text-[24px] font-medium leading-[1.45] text-[var(--primary-green)] italic max-w-3xl">
            &quot;From learning from our brightest young trailblazers to sharing the spotlight with established voices in the field, the future does look promising.&quot;
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-[64px] px-[32px]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
            {initiatives.map((item, i) => (
              <article key={i} onClick={() => setSelectedIndex(i)} className="bg-[var(--paper)] rounded-[3px] p-[16px] flex flex-col border border-[var(--line)] hover:border-[var(--charcoal)] transition-colors duration-300 cursor-pointer">
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
          <Link href="/contact" className="group inline-flex items-center gap-[8px] justify-center bg-[var(--primary-green)] text-[var(--charcoal)] font-semibold px-[32px] py-[13px] rounded-[3px] hover:bg-[var(--charcoal)] hover:text-[var(--primary-green)] transition-all duration-300 text-[16px] min-h-[44px]">
            Partner With Us <span className="relative w-[18px] h-[18px] overflow-hidden flex items-center justify-center shrink-0">
    <Leaf className="absolute w-[18px] h-[18px] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[150%]" strokeWidth={2.5} />
    <Leaf className="absolute w-[18px] h-[18px] -translate-x-[150%] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0" strokeWidth={2.5} />
  </span>
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm px-[16px]">
          <button 
            onClick={() => setSelectedIndex(null)}
            className="absolute top-[24px] right-[24px] text-white/50 hover:text-white transition-colors z-50 p-2"
          >
            <X size={32} strokeWidth={1.5} />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : initiatives.length - 1); }}
            className="absolute left-[16px] md:left-[32px] text-white/50 hover:text-white transition-colors z-50 p-2"
          >
            <ChevronLeft size={48} strokeWidth={1} />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); setSelectedIndex(selectedIndex < initiatives.length - 1 ? selectedIndex + 1 : 0); }}
            className="absolute right-[16px] md:right-[32px] text-white/50 hover:text-white transition-colors z-50 p-2"
          >
            <ChevronRight size={48} strokeWidth={1} />
          </button>

          <div className="relative w-full max-w-5xl aspect-video md:aspect-[16/9] flex flex-col md:flex-row bg-[var(--charcoal)] rounded-[3px] overflow-hidden">
            <div className="relative w-full md:w-2/3 h-64 md:h-full bg-black">
              <Image 
                src={`/gallery/${initiatives[selectedIndex].img}`} 
                alt={initiatives[selectedIndex].title} 
                fill 
                className="object-contain" 
                unoptimized
              />
            </div>
            <div className="w-full md:w-1/3 p-[32px] flex flex-col justify-center bg-[var(--paper)] overflow-y-auto">
              <span className="text-[var(--brick)] text-[12px] font-semibold uppercase tracking-[0.01em] mb-[12px]">{initiatives[selectedIndex].tag}</span>
              <h3 className="text-[24px] font-bold mb-[16px] leading-[1.3] text-[var(--charcoal)]">{initiatives[selectedIndex].title}</h3>
              <p className="text-[var(--muted)] leading-[1.65] text-[16px] font-normal">{initiatives[selectedIndex].desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
