"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Transparent on top of home page, solid black otherwise
  const bgClass = (isHome && !isScrolled && !isMobileMenuOpen) ? "bg-transparent" : "bg-[var(--charcoal)] shadow-lg";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${bgClass}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="The Roadsides Logo" width={32} height={32} className="object-contain" />
          <span className="text-[var(--paper)] font-extrabold text-2xl tracking-tight">The Roadsides</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center text-[16px] leading-[1.65] font-normal text-[var(--paper)]/90 tracking-wide">
          <Link href="/about" className="hover:text-[var(--primary-green)] transition-colors">About</Link>
          <Link href="/founder" className="hover:text-[var(--primary-green)] transition-colors">Founder</Link>
          <Link href="/work" className="hover:text-[var(--primary-green)] transition-colors">The Journey</Link>
          <Link href="/gallery" className="hover:text-[var(--primary-green)] transition-colors">Gallery</Link>
          <Link href="/insights" className="hover:text-[var(--primary-green)] transition-colors">Insights</Link>
          <Link href="/contact" className="hover:text-[var(--primary-green)] transition-colors">Contact</Link>
        </nav>

        <div className="hidden md:flex">
          <Link href="/get-involved" className="group inline-flex items-center gap-[8px] justify-center bg-[var(--primary-green)] text-[var(--charcoal)] font-semibold px-[32px] py-[13px] rounded-[3px] hover:bg-[var(--charcoal)] hover:text-[var(--primary-green)] transition-all duration-300 text-[16px] min-h-[44px]">Join Us<span className="relative w-[18px] h-[18px] overflow-hidden flex items-center justify-center shrink-0">
            <ArrowRight className="absolute w-[18px] h-[18px] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[150%]" strokeWidth={2.5} />
            <ArrowRight className="absolute w-[18px] h-[18px] -translate-x-[150%] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0" strokeWidth={2.5} />
          </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[var(--paper)] p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-[var(--charcoal)] border-t border-[var(--paper)]/10 shadow-2xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 py-6 flex flex-col gap-6">
          <Link href="/about" className="text-[18px] text-[var(--paper)] font-medium hover:text-[var(--primary-green)]">About</Link>
          <Link href="/founder" className="text-[18px] text-[var(--paper)] font-medium hover:text-[var(--primary-green)]">Founder</Link>
          <Link href="/work" className="text-[18px] text-[var(--paper)] font-medium hover:text-[var(--primary-green)]">The Journey</Link>
          <Link href="/gallery" className="text-[18px] text-[var(--paper)] font-medium hover:text-[var(--primary-green)]">Gallery</Link>
          <Link href="/insights" className="text-[18px] text-[var(--paper)] font-medium hover:text-[var(--primary-green)]">Insights</Link>
          <Link href="/contact" className="text-[18px] text-[var(--paper)] font-medium hover:text-[var(--primary-green)]">Contact</Link>
          <div className="pt-4 border-t border-[var(--paper)]/10">
            <Link href="/get-involved" className="w-full group inline-flex items-center gap-[8px] justify-center bg-[var(--primary-green)] text-[var(--charcoal)] font-semibold px-[32px] py-[13px] rounded-[3px] hover:bg-[var(--charcoal)] hover:text-[var(--primary-green)] transition-all duration-300 text-[16px] min-h-[44px]">Join Us<span className="relative w-[18px] h-[18px] overflow-hidden flex items-center justify-center shrink-0">
              <ArrowRight className="absolute w-[18px] h-[18px] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[150%]" strokeWidth={2.5} />
              <ArrowRight className="absolute w-[18px] h-[18px] -translate-x-[150%] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0" strokeWidth={2.5} />
            </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
