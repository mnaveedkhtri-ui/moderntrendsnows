import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import CableSlackCalculator from '../../../components/CableSlackCalculator';
import { ChevronRight, BookOpen, ArrowRight, HelpCircle } from 'lucide-react';

const PAGE_URL = 'https://www.moderntrendsnow.store/tools/standing-desk-cable-slack-calculator';

export const metadata: Metadata = {
  title: 'Standing Desk Cable Slack Calculator (ISO 9241-5 Cord Travel Tool) | Modern Trends Now',
  description:
    'Calculate exact standing desk power cord travel length, 14 AWG surge protector specs, and articulated magnetic cable spine vertebrae needed for snag-free 48-inch elevation.',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Dynamic Standing Desk Cable Slack Calculator',
    description:
      'Prevent motor snagging at full sit-stand elevation. Model exact power cord length and cable spine modules.',
    url: PAGE_URL,
    type: 'website',
    images: [
      {
        url: 'https://www.moderntrendsnow.store/blog/cable-slack-architecture-diagram.png',
        width: 1200,
        height: 800,
        alt: 'Standing Desk Cable Slack Routing Architecture Diagram',
      },
    ],
  },
};

const FAQS = [
  {
    q: 'How much extra cable slack does a standing desk need?',
    a: 'Add your maximum standing desk height (typically 45 to 50 inches) plus horizontal distance to the wall outlet plus a 6-inch safety loop. An 8-foot or 10-foot 14 AWG main power strip cord prevents cord tension at peak lift.',
  },
  {
    q: 'Why should power bricks sit inside an under-desk tray instead of on the floor?',
    a: 'Mounting your surge protector and monitor transformers inside an under-desk steel wire tray means only one main power cable travels down to the floor, eliminating tangled individual DisplayPort and USB cords as the desk moves.',
  },
];

export default function CableSlackToolPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Modern Trends Now Standing Desk Cable Slack Calculator',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    url: PAGE_URL,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#07090e] text-slate-100 selection:bg-amber-400 selection:text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <Navbar />

      <main className="flex-1">
        <div className="border-b border-white/10 bg-[#05070d]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-3.5">
            <nav className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <ChevronRight className="h-3 w-3 text-slate-600" />
              <Link href="/tools" className="hover:text-white transition">Tools</Link>
              <ChevronRight className="h-3 w-3 text-slate-600" />
              <span className="text-amber-400 font-bold">Cable Slack Calculator</span>
            </nav>
          </div>
        </div>

        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 text-left">
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            Dynamic Standing Desk Cable Slack Calculator
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl font-light mb-6">
            Model exact power cord drop length, articulated spine vertebrae count, and 14 AWG surge capacity so standing desk motors never tug wall outlets at full 48&quot; elevation.
          </p>

          <CableSlackCalculator />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-[#0c0f18] p-6">
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-amber-400" />
                <span>Standing Desk Cable Blueprint Guides</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-light">
                Read the full step-by-step wiring blueprint comparing steel wire trays, EMI separation spacing, and under-desk surge hubs.
              </p>
              <div className="flex flex-col gap-2 text-xs font-mono font-bold text-amber-400">
                <Link href="/blog/standing-desk-cable-management-tray-guide" className="hover:underline inline-flex items-center gap-1">
                  <span>Standing Desk Cable Management Tray Blueprint</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
                <Link href="/blog/under-desk-cable-management-steel-tray-vs-mesh-raceway-guide" className="hover:underline inline-flex items-center gap-1">
                  <span>Steel Wire Trays vs Mesh Raceways Guide</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0c0f18] p-6">
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-amber-400" />
                <span>Cord Routing &amp; Load FAQ</span>
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
