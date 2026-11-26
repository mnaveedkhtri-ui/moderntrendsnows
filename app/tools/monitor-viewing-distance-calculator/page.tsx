import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import MonitorDistanceCalculatorWidget from '../../../components/MonitorDistanceCalculatorWidget';
import { ChevronRight, BookOpen, ArrowRight, HelpCircle } from 'lucide-react';

const PAGE_URL = 'https://www.moderntrendsnow.store/tools/monitor-viewing-distance-calculator';

export const metadata: Metadata = {
  title: 'Monitor Viewing Distance, PPI & Desk Load Calculator | Modern Trends Now',
  description:
    'Calculate optimal monitor viewing distance, pixel density (PPI Retina distance), desk depth needed, and C-clamp load safety for dual monitors and ultrawides.',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Monitor Viewing Distance, PPI & Desk Load Calculator',
    description:
      'Find ideal eye-to-display distance and verify whether a C-clamp arm or solid hardwood monitor shelf is safest for your desk top.',
    url: PAGE_URL,
    type: 'website',
    images: [
      {
        url: 'https://www.moderntrendsnow.store/blog/monitor-distance-load-chart.png',
        width: 1200,
        height: 630,
        alt: 'Monitor Viewing Distance and Structural Load Matrix',
      },
    ],
  },
};

const FAQS = [
  {
    q: 'How far away should a 27-inch or 34-inch monitor sit?',
    a: 'For a single 27-inch monitor, 22 to 28 inches is ideal to keep the entire screen inside a natural 35-40 degree horizontal field of view. Dual 27-inch displays or 34-49 inch ultrawides perform best at 26 to 36 inches so you avoid repetitive neck rotation.',
  },
  {
    q: 'Can heavy dual monitor arms break hollow IKEA desks?',
    a: 'Yes. Honeycomb particleboard tops concentrate 30-60 lbs of leverage onto a small C-clamp contact patch, which frequently dents or fractures the veneer. Either use a steel reinforcement plate or distribute the weight evenly across a 46-inch Solid Walnut Dual Monitor Shelf.',
  },
];

export default function MonitorDistanceToolPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Modern Trends Now Monitor Viewing Distance & Load Calculator',
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
              <span className="text-amber-400 font-bold">Monitor Distance &amp; Load</span>
            </nav>
          </div>
        </div>

        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 text-left">
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            Monitor Viewing Distance, PPI &amp; Desk Load Calculator
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl font-light mb-6">
            Check optical Retina clarity distance, required desk depth, and structural C-clamp weight limits for single, dual-27&quot;, 34&quot; ultrawide, and 49&quot; displays.
          </p>

          <MonitorDistanceCalculatorWidget />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-[#0c0f18] p-6">
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-amber-400" />
                <span>Dual Monitor Shelf vs Arm Blueprint</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-light">
                Read the full structural comparison covering ANSI/BIFMA load capacities, clamp shear risk on particleboard desks, and two-tier keyboard storage bays.
              </p>
              <Link
                href="/blog/dual-monitor-desk-shelf-vs-monitor-arm-setup-blueprint"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400 hover:text-amber-300"
              >
                <span>Read Monitor Setup Blueprint</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0c0f18] p-6">
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-amber-400" />
                <span>Display Optics &amp; Clamp FAQ</span>
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
