"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Heart } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Transparent on top of home page, solid black otherwise
  const bgClass = (isHome && !isScrolled) ? "bg-transparent" : "bg-[var(--charcoal)] shadow-lg";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${bgClass}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="The Roadsides Logo" width={32} height={32} className="object-contain" />
          <span className="text-[var(--paper)] font-extrabold text-2xl tracking-tight">The Roadsides</span>
        </Link>
        
        <nav className="hidden md:flex gap-8 items-center text-[16px] leading-[1.65] font-normal text-[var(--paper)]/90 tracking-wide">
          <Link href="/about" className="hover:text-[var(--primary-green)] transition-colors">About</Link>
          <Link href="/founder" className="hover:text-[var(--primary-green)] transition-colors">Founder</Link>
          <Link href="/work" className="hover:text-[var(--primary-green)] transition-colors">Our Work</Link>
          <Link href="/gallery" className="hover:text-[var(--primary-green)] transition-colors">Gallery</Link>
          <Link href="/insights" className="hover:text-[var(--primary-green)] transition-colors">Insights</Link>
          <Link href="/contact" className="hover:text-[var(--primary-green)] transition-colors">Contact</Link>
        </nav>

        <Link href="/get-involved" className="bg-[var(--primary-green)] text-[var(--charcoal)] px-[32px] py-[13px] rounded-[3px] hover:bg-[var(--brick)] hover:text-[var(--paper)] transition-colors text-[16px] font-semibold tracking-wide min-h-[44px] flex items-center justify-center gap-[8px]">
          Get Involved <Heart className="w-[18px] h-[18px]" strokeWidth={2.5} />
        </Link>
      </div>
    </header>
  );
}

