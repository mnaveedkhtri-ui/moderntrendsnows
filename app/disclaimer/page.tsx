import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { AlertCircle, ChevronRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure & Disclaimer | Modern Trends Now',
  description:
    'Official FTC 16 CFR Part 255 affiliate disclosure, Amazon Associates program participation statement, and ergonomic advice disclaimer for Modern Trends Now.',
  alternates: {
    canonical: 'https://www.moderntrendsnow.store/disclaimer',
  },
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#07090e] text-slate-100 selection:bg-amber-400 selection:text-black">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb Path */}
        <div className="border-b border-white/10 bg-[#05070d]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-3.5">
            <nav className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <ChevronRight className="h-3 w-3 text-slate-600" />
              <span className="text-amber-400 font-bold">Disclaimers &amp; Disclosures</span>
            </nav>
          </div>
        </div>

        {/* Content Section */}
        <article className="py-12 sm:py-16 text-left">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
            
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1 text-xs font-mono font-bold text-amber-300 mb-4">
                <AlertCircle className="h-3.5 w-3.5 text-amber-400" />
                <span>FTC &amp; REGULATORY DISCLOSURE</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Affiliate Disclosure &amp; Ergonomic Advice Disclaimer
              </h1>
              <p className="mt-2 text-xs font-mono text-slate-400">
                In Compliance with United States Federal Trade Commission (FTC) 16 CFR Part 255 Guidelines
              </p>
            </div>

            <div className="prose prose-invert prose-amber max-w-none space-y-6 text-sm text-slate-300 font-light leading-relaxed">
              
              <section className="space-y-3 p-6 rounded-2xl border border-amber-400/30 bg-amber-400/05">
                <h2 className="text-base font-bold text-amber-400 font-mono uppercase tracking-wider">
                  Official Amazon Associates Statement
                </h2>
                <p className="text-sm text-white font-medium">
                  "As an Amazon Associate I earn from qualifying purchases."
                </p>
                <p className="text-xs text-slate-300">
                  Modern Trends Now (<Link href="https://www.moderntrendsnow.store" className="text-amber-400 underline">www.moderntrendsnow.store</Link>) is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for websites to earn advertising fees by advertising and linking to Amazon.com and affiliated international marketplaces.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-white font-mono uppercase tracking-wider text-amber-400">
                  1. How Affiliate Compensation Works
                </h2>
                <p>
                  Throughout Modern Trends Now, you will encounter outbound buttons and hyperlinks directing you to Amazon.com. If you click on one of these links and complete a qualifying purchase within a designated cookie window, Modern Trends Now may receive a small referral commission from Amazon.
                </p>
                <p className="text-white font-medium">
                  Crucially, this referral fee comes at zero additional cost to you. The price you pay on Amazon is identical whether you use our curated links or navigate directly to Amazon independently.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-white font-mono uppercase tracking-wider text-amber-400">
                  2. Uncompromised Editorial Independence
                </h2>
                <p>
                  Our product evaluations and architectural field guides are driven exclusively by objective research, structural build quality, and optical ergonomic benchmarks. We do NOT accept:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>Paid positive reviews or sponsored placements.</li>
                  <li>Free promotional products in exchange for guaranteed coverage.</li>
                  <li>Manufacturer influence over our scoring or editorial verdicts.</li>
                </ul>
                <p>
                  If an object proves brittle, mechanically sloppy, or optically deficient in real-world testing, it is rejected regardless of any commercial affiliate payout potential.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-white font-mono uppercase tracking-wider text-amber-400">
                  3. Ergonomic &amp; Optical Health Disclaimer
                </h2>
                <p>
                  The scientific research papers, desk height formulas, and optical lux calculations presented in our Field Guides are provided strictly for educational and general informational purposes.
                </p>
                <p>
                  They do not constitute professional orthopedic, neurological, or medical advice. Individuals suffering from chronic musculoskeletal disorders (such as cervical spondylosis, carpal tunnel syndrome, or severe ocular migraines) should consult certified medical ergonomists or licensed physical therapists for personalized clinical treatment.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-white font-mono uppercase tracking-wider text-amber-400">
                  4. Questions Regarding Disclosures
                </h2>
                <p>
                  For inquiries concerning our FTC compliance or commercial affiliations, contact:
                </p>
                <div className="p-4 rounded-xl border border-white/10 bg-[#0c0f18] text-xs font-mono space-y-1">
                  <div>Modern Trends Now Compliance Desk</div>
                  <div>Email: support@moderntrendsnow.store</div>
                  <div>Lead Curator: Muhammad Naveed Khatri</div>
                </div>
              </section>

            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
