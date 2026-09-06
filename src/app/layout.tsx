import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} min-h-screen flex flex-col bg-brand-light text-brand-dark overflow-x-hidden`}>
        {/* Standard Top-Aligned Header */}
        <header className="sticky top-0 z-50 w-full bg-brand-white border-b border-brand-dark/5">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="The Roadsides Logo" width={40} height={40} className="object-contain" />
              <span className="text-brand-dark font-extrabold text-2xl tracking-tight">The Roadsides</span>
            </Link>
            
            <nav className="hidden md:flex gap-8 items-center text-sm font-bold text-brand-dark/70 tracking-wide">
              <Link href="/about" className="hover:text-brand-dark transition-colors">About</Link>
              <Link href="/founder" className="hover:text-brand-dark transition-colors">Founder</Link>
              <Link href="/work" className="hover:text-brand-dark transition-colors">Our Work</Link>
              <Link href="/gallery" className="hover:text-brand-dark transition-colors">Gallery</Link>
              <Link href="/insights" className="hover:text-brand-dark transition-colors">Insights</Link>
              <Link href="/contact" className="hover:text-brand-dark transition-colors">Contact</Link>
            </nav>

            <Link href="/get-involved" className="bg-brand-primary text-white px-6 py-3 rounded-full hover:bg-brand-dark transition-colors text-sm font-bold tracking-wide">
              Get Involved
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-brand-dark text-brand-white py-24 pb-8">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              <div className="md:col-span-2">
                <Image src="/logo.png" alt="The Roadsides Logo" width={64} height={64} className="object-contain mb-6 grayscale brightness-0 invert" />
                <p className="text-white/60 max-w-sm leading-relaxed">
                  Vibrant Walkable Roadsides Foundation. A Section 8 Not-For-Profit based in Faridabad, Haryana, India.
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-xs">Explore</h4>
                <ul className="space-y-4">
                  <li><Link href="/about" className="text-white/60 hover:text-brand-primary transition-colors font-medium">About</Link></li>
                  <li><Link href="/founder" className="text-white/60 hover:text-brand-primary transition-colors font-medium">Founder</Link></li>
                  <li><Link href="/work" className="text-white/60 hover:text-brand-primary transition-colors font-medium">Our Work</Link></li>
                  <li><Link href="/gallery" className="text-white/60 hover:text-brand-primary transition-colors font-medium">Gallery</Link></li>
                  <li><Link href="/insights" className="text-white/60 hover:text-brand-primary transition-colors font-medium">Insights</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-xs">Connect</h4>
                <ul className="space-y-4 mb-8">
                  <li><Link href="/contact" className="text-white/60 hover:text-brand-primary transition-colors font-medium">Contact Us</Link></li>
                  <li><Link href="/get-involved" className="text-white/60 hover:text-brand-primary transition-colors font-medium">Get Involved</Link></li>
                  <li><a href="#" className="text-white/60 hover:text-brand-primary transition-colors font-medium">LinkedIn</a></li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs font-medium text-white/40 tracking-wide">
              <div>&copy; {new Date().getFullYear()} Vibrant Walkable Roadsides Foundation. All rights reserved.</div>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
