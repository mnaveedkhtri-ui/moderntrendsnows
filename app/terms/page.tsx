import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FileText, ChevronRight, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Modern Trends Now',
  description:
    'Terms of Service and legal usage conditions for Modern Trends Now. Covers intellectual property rights, outbound affiliate links, and limitation of liability.',
  alternates: {
    canonical: 'https://www.moderntrendsnow.store/terms',
  },
};

export default function TermsPage() {
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
              <span className="text-amber-400 font-bold">Terms of Service</span>
            </nav>
          </div>
        </div>

        {/* Content Section */}
        <article className="py-12 sm:py-16 text-left">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
            
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1 text-xs font-mono font-bold text-amber-300 mb-4">
                <Scale className="h-3.5 w-3.5 text-amber-400" />
                <span>LEGAL FRAMEWORK</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Terms of Service &amp; Usage Agreement
              </h1>
              <p className="mt-2 text-xs font-mono text-slate-400">
                Last Updated: February 2026
              </p>
            </div>

            <div className="prose prose-invert prose-amber max-w-none space-y-6 text-sm text-slate-300 font-light leading-relaxed">
              
              <section className="space-y-3">
                <h2 className="text-lg font-bold text-white font-mono uppercase tracking-wider text-amber-400">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing or browsing Modern Trends Now (<Link href="https://www.moderntrendsnow.store" className="text-amber-400 underline">https://www.moderntrendsnow.store</Link>), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you disagree with any portion of these terms, you are prohibited from using or accessing this platform.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-white font-mono uppercase tracking-wider text-amber-400">
                  2. Intellectual Property &amp; Editorial Content
                </h2>
                <p>
                  All written architectural guides, analysis breakdowns, custom product photography, codebases, audio synthesis models, and graphic layouts published on Modern Trends Now are the exclusive intellectual property of Modern Trends Now and its founder, Sir Muhammad Naveed Khatri, unless otherwise credited. You may not republish, scrape, duplicate, or sell material from this site without express written consent.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-white font-mono uppercase tracking-wider text-amber-400">
                  3. Outbound Links &amp; Third-Party Transactions
                </h2>
                <p>
                  Modern Trends Now links to third-party marketplaces, specifically Amazon.com and authorized vendor storefronts. When you navigate away from our domain via an affiliate or external hyperlink, your interaction and any subsequent purchase is governed by the terms, return policies, and privacy protocols of the respective merchant.
                </p>
                <p>
                  Modern Trends Now does not manufacture, ship, or process payment for physical objects listed in our editorial archive. Any warranty claims, shipping inquiries, or returns must be directed to Amazon or the merchant of record.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-white font-mono uppercase tracking-wider text-amber-400">
                  4. Pricing Accuracy &amp; Market Fluctuation
                </h2>
                <p>
                  Product prices, Prime discounts, and inventory availability are accurate as of the date indicated in our reviews but fluctuate dynamically based on Amazon's algorithmic marketplace pricing. The final price presented on the checkout page of the vendor platform supersedes any pricing estimates shown on Modern Trends Now.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-white font-mono uppercase tracking-wider text-amber-400">
                  5. Limitation of Liability
                </h2>
                <p>
                  In no event shall Modern Trends Now or its editorial curators be liable for any damages (including, without limitation, damages for loss of data, hardware malfunction, or business interruption) arising from the use or inability to use the architectural recommendations or materials on Modern Trends Now.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-white font-mono uppercase tracking-wider text-amber-400">
                  6. Governing Law
                </h2>
                <p>
                  Any claim relating to Modern Trends Now shall be governed by applicable national and international electronic commerce standards, without regard to its conflict of law provisions.
                </p>
              </section>

            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
