import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | The Roadsides",
  description: "Privacy Policy for The Roadsides Foundation.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col pt-24 min-h-screen">
      <section className="bg-[var(--paper)] border-b border-[var(--line)] py-[64px] px-[32px]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-[48px] font-bold tracking-[-0.01em] leading-[1.15] text-[var(--charcoal)] mb-[24px]">
            Privacy Policy
          </h1>
          <p className="text-[16px] text-[var(--charcoal)] leading-[1.65] mb-[24px]">
            The Roadsides ("Vibrant Walkable Roadsides Foundation") respects your privacy. This policy outlines how we handle information collected through our website.
          </p>
          <h2 className="text-[24px] font-bold text-[var(--charcoal)] mb-[16px]">Information Collection</h2>
          <p className="text-[16px] text-[var(--charcoal)] leading-[1.65] mb-[24px]">
            We only collect personal information that you voluntarily provide to us, such as when you contact us via email at team@theroadsides.co.in or sign up to volunteer.
          </p>
          <h2 className="text-[24px] font-bold text-[var(--charcoal)] mb-[16px]">Use of Information</h2>
          <p className="text-[16px] text-[var(--charcoal)] leading-[1.65] mb-[24px]">
            Any information collected is used solely to communicate with you regarding our initiatives, respond to your inquiries, or process volunteer registrations. We do not sell or share your data with third parties.
          </p>
          <h2 className="text-[24px] font-bold text-[var(--charcoal)] mb-[16px]">Contact Us</h2>
          <p className="text-[16px] text-[var(--charcoal)] leading-[1.65]">
            If you have questions about this privacy policy, please contact us at <a href="mailto:team@theroadsides.co.in" className="text-[var(--brick)] hover:underline">team@theroadsides.co.in</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
