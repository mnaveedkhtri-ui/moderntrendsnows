import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import DeskMatFitCalculatorWidget from '../../../components/DeskMatFitCalculatorWidget';
import { ChevronRight, BookOpen, ArrowRight, HelpCircle } from 'lucide-react';

const PAGE_URL = 'https://www.moderntrendsnow.store/tools/desk-mat-keyboard-fit-calculator';

export const metadata: Metadata = {
  title: 'Desk Size, Keyboard Form Factor & XXL Desk Mat Fit Calculator | Modern Trends Now',
  description:
    'Interactive workspace footprint calculator. Match 40" to 72" desks with 60%, 75%, TKL, or full keyboards, studio monitor speakers, vertical laptop stands, and XXL desk mats.',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Desk Size, Keyboard & XXL Desk Mat Fit Planner',
    description:
      'Plan desktop clearance before buying keyboards, studio speakers, and XXL leather/felt desk pads.',
    url: PAGE_URL,
    type: 'website',
    images: [
      {
        url: 'https://www.moderntrendsnow.store/blog/desk-mat-fit-blueprint.png',
        width: 1200,
        height: 630,
        alt: 'Desk Mat and Keyboard Layout Clearance Blueprint',
      },
    ],
  },
};

const FAQS = [
  {
    q: 'What desk mat size fits a 75% mechanical keyboard plus mouse?',
    a: 'A 35.4 x 15.7 inch (900 x 400 mm) XXL desk mat easily holds a 12.6-inch 75% mechanical keyboard like the NuPhy Air75 v2 or Aula F75 alongside a 14+ inch horizontal mouse sweep zone.',
  },
  {
    q: 'How do I fit dual monitors and speakers on a compact 48-inch desk?',
    a: 'Use a CNC vertical laptop dock (reclaims ~10.5 inches compared to keeping your laptop flat open), switch from a full 100% keyboard to a compact 75% layout, and swap base desk lamps for a clamp-on monitor ScreenBar light.',
  },
];

export default function DeskMatFitToolPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Modern Trends Now Desk Width & Mat Fit Calculator',
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
              <span className="text-amber-400 font-bold">Desk &amp; Mat Fit Planner</span>
            </nav>
          </div>
        </div>

        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 text-left">
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            Desk Width, Keyboard Size &amp; XXL Desk Mat Fit Planner
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl font-light mb-6">
            Measure horizontal desktop occupancy across 40&quot; to 72&quot; desks before ordering a mechanical keyboard, acoustic desk mat, or studio monitor speaker stands.
          </p>

          <DeskMatFitCalculatorWidget />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-[#0c0f18] p-6">
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-amber-400" />
                <span>Related Material &amp; Keyboard Guides</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-light">
                Compare leather vs felt friction coefficients, optical mouse tracking accuracy, and gasket-mounted keyboard acoustics in our studio research guides.
              </p>
              <div className="flex flex-col gap-2 text-xs font-mono font-bold text-amber-400">
                <Link href="/blog/leather-vs-suede-desk-mat-material-comparison-guide" className="hover:underline inline-flex items-center gap-1">
                  <span>Leather vs Suede Desk Mat Guide</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
                <Link href="/blog/mechanical-keyboard-switch-types-acoustic-dampening-thock-guide" className="hover:underline inline-flex items-center gap-1">
                  <span>Mechanical Switch Acoustic Thock Guide</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0c0f18] p-6">
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-amber-400" />
                <span>Footprint &amp; Sizing FAQ</span>
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
