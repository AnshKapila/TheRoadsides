"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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
  const bgClass = (isHome && !isScrolled) ? "bg-transparent" : "bg-black shadow-lg";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${bgClass}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="The Roadsides Logo" width={32} height={32} className="object-contain" />
          <span className="text-white font-extrabold text-2xl tracking-tight">The Roadsides</span>
        </Link>
        
        <nav className="hidden md:flex gap-8 items-center text-sm font-semibold text-white/90 tracking-wide">
          <Link href="/about" className="hover:text-brand-primary transition-colors">About</Link>
          <Link href="/founder" className="hover:text-brand-primary transition-colors">Founder</Link>
          <Link href="/work" className="hover:text-brand-primary transition-colors">Our Work</Link>
          <Link href="/gallery" className="hover:text-brand-primary transition-colors">Gallery</Link>
          <Link href="/insights" className="hover:text-brand-primary transition-colors">Insights</Link>
          <Link href="/contact" className="hover:text-brand-primary transition-colors">Contact</Link>
        </nav>

        <Link href="/get-involved" className="bg-brand-primary text-white px-5 py-2.5 rounded-full hover:bg-[#7ab136] transition-colors text-sm font-bold tracking-wide">
          Get Involved
        </Link>
      </div>
    </header>
  );
}
