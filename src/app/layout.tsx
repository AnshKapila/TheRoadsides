import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "The Roadsides | Vibrant Walkable Roadsides Foundation",
  description: "A Section 8 Not-For-Profit creating safer, cleaner, greener roadside environments.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.className} min-h-screen flex flex-col bg-[var(--paper)] text-[var(--charcoal)] overflow-x-hidden`}>
        <Header />

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-black text-[var(--paper)] py-[96px] pb-[32px]">
          <div className="container mx-auto px-[32px] max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-[48px] mb-[64px]">
              <div className="md:col-span-2">
                <Link href="/" className="inline-block mb-[24px]">
                  <Image src="/logo.png" alt="The Roadsides Logo" width={48} height={48} className="object-contain" />
                </Link>
                <p className="text-[var(--paper)]/60 max-w-sm leading-[1.65] text-[16px]">
                  Vibrant Walkable Roadsides Foundation. A Section 8 Not-For-Profit based in Faridabad, Haryana, India.
                </p>
              </div>
              <div>
                <h4 className="text-[var(--white)] font-bold mb-[24px] tracking-[0.01em] uppercase text-[12px]">Explore</h4>
                <ul className="flex flex-col gap-[16px]">
                  <li><Link href="/about" className="text-[var(--paper)]/70 hover:text-[var(--moss)] transition-colors font-medium text-[16px]">About</Link></li>
                  <li><Link href="/founder" className="text-[var(--paper)]/70 hover:text-[var(--moss)] transition-colors font-medium text-[16px]">Founder</Link></li>
                  <li><Link href="/gallery" className="text-[var(--paper)]/70 hover:text-[var(--moss)] transition-colors font-medium text-[16px]">Gallery</Link></li>
                  <li><Link href="/insights" className="text-[var(--paper)]/70 hover:text-[var(--moss)] transition-colors font-medium text-[16px]">Insights</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-[var(--white)] font-bold mb-[24px] tracking-[0.01em] uppercase text-[12px]">Connect</h4>
                <ul className="flex flex-col gap-[16px] mb-[32px]">
                  <li><Link href="/contact" className="text-[var(--paper)]/70 hover:text-[var(--moss)] transition-colors font-medium text-[16px]">Contact Us</Link></li>
                  <li><Link href="/get-involved" className="text-[var(--paper)]/70 hover:text-[var(--moss)] transition-colors font-medium text-[16px]">Get Involved</Link></li>
                  <li><a href="#" className="text-[var(--paper)]/70 hover:text-[var(--moss)] transition-colors font-medium text-[16px]">LinkedIn</a></li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center pt-[32px] border-t border-[var(--paper)]/10 text-[12px] font-medium text-[var(--paper)]/40 tracking-wide">
              <div>&copy; {new Date().getFullYear()} Vibrant Walkable Roadsides Foundation. All rights reserved.</div>
              <div className="flex gap-[24px] mt-[16px] md:mt-0">
                <a href="#" className="hover:text-[var(--white)] transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-[var(--white)] transition-colors">Terms of Use</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
