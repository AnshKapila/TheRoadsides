import { ArrowRight, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col pt-24 min-h-screen">
      {/* Page Header */}
      <section className="bg-[var(--paper)] border-b border-[var(--line)] py-[64px] px-[32px]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-[8px] mb-[16px]">
            <span className="w-3 h-3 rounded-[3px] group bg-[var(--primary-green)]" />
            <span className="text-[var(--charcoal)] font-semibold text-[14px]">Contact Us</span>
          </div>
          <h1 className="text-[48px] font-bold tracking-[-0.01em] leading-[1.15] text-[var(--charcoal)] mb-[24px]">
            Get in Touch
          </h1>
          <p className="text-[24px] font-medium leading-[1.45] text-[var(--primary-green)] italic max-w-3xl">
            &quot;Whether you have a question, want to volunteer, or are interested in partnering with us, we&apos;d love to hear from you.&quot;
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-[64px] px-[32px]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px]">
            
            {/* Contact Info */}
            <div className="flex flex-col gap-[48px] text-[16px] leading-[1.65] text-[var(--charcoal)]">
              <div>
                <h2 className="text-[32px] font-bold text-[var(--charcoal)] leading-[1.2] mb-[24px]">Headquarters</h2>
                <p className="mb-[8px] font-semibold">The Roadsides Foundation</p>
                <p className="mb-[8px]">Faridabad, Haryana</p>
                <p>India</p>
              </div>

              <div>
                <h2 className="text-[32px] font-bold text-[var(--charcoal)] leading-[1.2] mb-[24px]">Direct Contact</h2>
                <p className="mb-[16px]">
                  <span className="font-semibold block mb-[4px]">Email:</span>
                  <a href="mailto:contact@theroadsides.org" className="text-[var(--brick)] hover:text-[var(--primary-green)] transition-colors">contact@theroadsides.org</a>
                </p>
                <p>
                  <span className="font-semibold block mb-[4px]">Phone:</span>
                  <a href="tel:+910000000000" className="text-[var(--brick)] hover:text-[var(--primary-green)] transition-colors">+91 000 000 0000</a>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[var(--paper)] border border-[var(--line)] rounded-[3px] p-[32px] lg:p-[48px]">
              <h2 className="text-[24px] font-bold text-[var(--charcoal)] leading-[1.2] mb-[32px]">Send us a message</h2>
              <form className="flex flex-col gap-[24px]">
                <div>
                  <label htmlFor="name" className="block text-[14px] font-semibold text-[var(--charcoal)] mb-[8px]">Full Name</label>
                  <input type="text" id="name" className="w-full bg-[var(--paper)] border border-[var(--line)] rounded-[3px] px-[16px] py-[12px] text-[16px] focus:outline-none focus:border-[var(--primary-green)] transition-colors" placeholder="Jane Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[14px] font-semibold text-[var(--charcoal)] mb-[8px]">Email Address</label>
                  <input type="email" id="email" className="w-full bg-[var(--paper)] border border-[var(--line)] rounded-[3px] px-[16px] py-[12px] text-[16px] focus:outline-none focus:border-[var(--primary-green)] transition-colors" placeholder="jane@example.com" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-[14px] font-semibold text-[var(--charcoal)] mb-[8px]">Subject</label>
                  <select id="subject" className="w-full bg-[var(--paper)] border border-[var(--line)] rounded-[3px] px-[16px] py-[12px] text-[16px] focus:outline-none focus:border-[var(--primary-green)] transition-colors">
                    <option>General Inquiry</option>
                    <option>Volunteering</option>
                    <option>Corporate Partnership</option>
                    <option>Donation</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-[14px] font-semibold text-[var(--charcoal)] mb-[8px]">Message</label>
                  <textarea id="message" rows={5} className="w-full bg-[var(--paper)] border border-[var(--line)] rounded-[3px] px-[16px] py-[12px] text-[16px] focus:outline-none focus:border-[var(--primary-green)] transition-colors resize-y" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="group inline-flex items-center gap-[8px] justify-center bg-[var(--primary-green)] text-[var(--charcoal)] font-semibold px-[32px] py-[13px] rounded-[3px] hover:bg-[var(--charcoal)] hover:text-[var(--primary-green)] transition-all duration-300 text-[16px] min-h-[44px]">
                  Submit Message <span className="relative w-[18px] h-[18px] overflow-hidden flex items-center justify-center shrink-0">
    <Send className="absolute w-[18px] h-[18px] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[150%]" strokeWidth={2.5} />
    <Send className="absolute w-[18px] h-[18px] -translate-x-[150%] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0" strokeWidth={2.5} />
  </span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
