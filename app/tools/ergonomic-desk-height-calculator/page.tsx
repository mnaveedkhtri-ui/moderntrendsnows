import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import DeskHeightCalculatorWidget from '../../../components/DeskHeightCalculatorWidget';
import { ChevronRight, BookOpen, ArrowRight, HelpCircle } from 'lucide-react';

const PAGE_URL = 'https://www.moderntrendsnow.store/tools/ergonomic-desk-height-calculator';

export const metadata: Metadata = {
  title: 'Ergonomic Desk Height Calculator (Sitting & Standing Chart 2026) | Modern Trends Now',
  description:
    'Free interactive ergonomic desk height calculator using ISO 9241-5 anthropometric formulas. Find your exact sitting desk height, standing height, chair pan, and monitor riser elevation.',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Ergonomic Desk Height & Eye-Level Calculator (2026)',
    description:
      'Calculate exact seated desk height, standing desk elevation, chair seat height, and monitor top-bezel clearance from your stature.',
    url: PAGE_URL,
    type: 'website',
    images: [
      {
        url: 'https://www.moderntrendsnow.store/blog/ergonomic-desk-height-chart.png',
        width: 1200,
        height: 630,
        alt: 'Ergonomic Sitting and Standing Desk Height Reference Chart',
      },
    ],
  },
};

const FAQS = [
  {
    q: 'Why do most standard 29-inch office desks feel too tall?',
    a: 'Traditional fixed desks are manufactured at 29 to 30 inches to accommodate tall men wearing shoes. Under ISO 9241-5 guidelines, anyone under 6ft 1in seated without a footrest experiences raised shoulders and upward wrist extension unless the desk lowers to 25-27.5 inches or the chair is elevated with a footrest.',
  },
  {
    q: 'How high should my computer monitor sit above the desk?',
    a: 'Your horizontal eye gaze should align within the top 20% to 30% of the active display glass when sitting upright. Most factory monitor stands sit 2 to 4 inches too low, which is fixed cleanly with a solid walnut monitor shelf or aluminum desk riser.',
  },
  {
    q: 'What is the formula for standing desk height?',
    a: 'A reliable baseline formula is Total Height (with shoes) multiplied by 0.618, verified by relaxing your shoulders and bending your elbows to 90-100 degrees so forearms remain parallel to the floor.',
  },
];

export default function ErgonomicDeskHeightToolPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Modern Trends Now Ergonomic Desk Height Calculator',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    url: PAGE_URL,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#07090e] text-slate-100 selection:bg-amber-400 selection:text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Navbar />

      <main className="flex-1">
        <div className="border-b border-white/10 bg-[#05070d]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-3.5">
            <nav className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <ChevronRight className="h-3 w-3 text-slate-600" />
              <Link href="/tools" className="hover:text-white transition">Tools</Link>
              <ChevronRight className="h-3 w-3 text-slate-600" />
              <span className="text-amber-400 font-bold">Desk Height Calculator</span>
            </nav>
          </div>
        </div>

        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 text-left">
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            Ergonomic Desk Height &amp; Monitor Eye-Level Calculator
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl font-light mb-6">
            Calculate your exact seated desk height, motorized standing desk preset, chair seat elevation, and monitor riser clearance based on ISO 9241-5 biomechanical proportions.
          </p>

          <DeskHeightCalculatorWidget />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-[#0c0f18] p-6">
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-amber-400" />
                <span>Complete Anthropometric Field Guide</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-light">
                Explore full sitting/standing desk height matrices from 5ft 0in to 6ft 4in, split wrist rest mechanics, and cervical spine posture benchmarks.
              </p>
              <Link
                href="/blog/ergonomic-desk-height-calculator-workspace-architecture-guide"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400 hover:text-amber-300"
              >
                <span>Read Full Desk Architecture Guide</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0c0f18] p-6">
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-amber-400" />
                <span>Quick Ergonomic Rules</span>
              </h2>
              <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                {FAQS.map((f, i) => (
                  <div key={i}>
                    <div className="font-bold text-white mb-0.5">{f.q}</div>
                    <p className="text-slate-400">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
