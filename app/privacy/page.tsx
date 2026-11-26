import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Shield, ChevronRight, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Modern Trends Now',
  description:
    'Comprehensive privacy policy for Modern Trends Now. Details our compliance with Google AdSense, Amazon Associates, GDPR, CCPA, cookie protocols, and data protection.',
  alternates: {
    canonical: 'https://www.moderntrendsnow.store/privacy',
  },
};

export default function PrivacyPage() {
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
              <span className="text-amber-400 font-bold">Privacy Policy</span>
            </nav>
          </div>
        </div>

        {/* Content Section */}
        <article className="py-12 sm:py-16 text-left">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
            
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1 text-xs font-mono font-bold text-amber-300 mb-4">
                <Lock className="h-3.5 w-3.5 text-amber-400" />
                <span>DATA INTEGRITY &amp; COMPLIANCE</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Privacy Policy &amp; Data Protection
              </h1>
              <p className="mt-2 text-xs font-mono text-slate-400">
                Last Updated &amp; Effective Date: February 2026
              </p>
            </div>

            <div className="prose prose-invert prose-amber max-w-none space-y-6 text-sm text-slate-300 font-light leading-relaxed">
              
              <section className="space-y-3">
                <h2 className="text-lg font-bold text-white font-mono uppercase tracking-wider text-amber-400">
                  1. Overview &amp; Commitment
                </h2>
                <p>
                  Modern Trends Now ("we", "our", or "the Platform"), accessible at <Link href="https://www.moderntrendsnow.store" className="text-amber-400 underline">https://www.moderntrendsnow.store</Link>, respects your fundamental right to digital privacy. This Privacy Policy outlines what information is collected, how it is processed, and how your rights under global privacy statutes (including the European Union General Data Protection Regulation - GDPR, and the California Consumer Privacy Act - CCPA) are safeguarded.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-white font-mono uppercase tracking-wider text-amber-400">
                  2. Google AdSense &amp; DoubleClick DART Cookies
                </h2>
                <p>
                  Google is a third-party vendor on our site. Google uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.moderntrendsnow.store and other sites on the internet.
                </p>
                <p>
                  Visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline">https://policies.google.com/technologies/ads</a>.
                </p>
                <p>
                  Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Modern Trends Now, which are sent directly to users' browsers. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit. Note that Modern Trends Now has no access to or control over these cookies that are used by third-party advertisers.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-white font-mono uppercase tracking-wider text-amber-400">
                  3. Amazon Associates Affiliate Cookies
                </h2>
                <p>
                  Modern Trends Now is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. When you click outbound links to Amazon products on our site, Amazon sets secure tracking cookies to record referral origin and allocate qualifying purchase commissions. These cookies do not store personally identifiable information (PII) on our servers.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-white font-mono uppercase tracking-wider text-amber-400">
                  4. Log Files &amp; Web Analytics
                </h2>
                <p>
                  Like most standard web servers, Modern Trends Now follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-white font-mono uppercase tracking-wider text-amber-400">
                  5. Local Storage &amp; User Preferences
                </h2>
                <p>
                  Modern Trends Now utilizes browser localStorage exclusively to enhance client-side user experience:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs">
                  <li><strong>Wishlist &amp; Saved Objects:</strong> Stores your favorited product IDs locally on your browser.</li>
                  <li><strong>Tactile Sound Synthesizer:</strong> Remembers your audio preference (muted vs unmuted).</li>
                </ul>
                <p className="text-xs">
                  This data resides solely within your local device browser and is never transmitted, aggregated, or sold to external servers.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-white font-mono uppercase tracking-wider text-amber-400">
                  6. GDPR Privacy Rights (Data Protection Rights)
                </h2>
                <p>
                  We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs">
                  <li><strong>The right to access:</strong> You have the right to request copies of your personal data.</li>
                  <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate.</li>
                  <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
                  <li><strong>The right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal data.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-white font-mono uppercase tracking-wider text-amber-400">
                  7. CCPA Privacy Rights (Do Not Sell My Personal Information)
                </h2>
                <p>
                  Under the CCPA, among other rights, California consumers have the right to request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers, and request that a business delete any personal data about the consumer. Modern Trends Now does NOT sell personal information to third parties.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-bold text-white font-mono uppercase tracking-wider text-amber-400">
                  8. Contacting the Data Protection Officer
                </h2>
                <p>
                  If you have questions or require further clarification regarding our privacy practices or data handling, please contact our editorial desk:
                </p>
                <div className="p-4 rounded-xl border border-white/10 bg-[#0c0f18] text-xs font-mono space-y-1">
                  <div>Modern Trends Now Editorial Studio</div>
                  <div>Email: support@moderntrendsnow.store</div>
                  <div>Location: Latifabad, Hyderabad, Sindh, Pakistan</div>
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
