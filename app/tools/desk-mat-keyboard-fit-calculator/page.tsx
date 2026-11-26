import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import DeskMatFitCalculatorWidget from '../../../components/DeskMatFitCalculatorWidget';
import { ChevronRight, BookOpen, ArrowRight, HelpCircle, Calculator } from 'lucide-react';

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
    a: 'A 35.4 x 15.7 inch (900 x 400 mm) XXL desk mat easily holds a 12.6-inch 75% mechanical keyboard alongside a generous 14+ inch horizontal mouse sweep zone without crowding desk edge accessories.',
  },
  {
    q: 'How do I fit dual monitors and speakers on a compact 48-inch desk?',
    a: 'Dock your laptop in a CNC vertical aluminum stand (saves 10.5 inches vs keeping it open flat), step down from a full 100% keyboard to a compact 75% board, and swap desk lamp bases for a clamp-on ScreenBar light.',
  },
  {
    q: 'Does desk mat thickness change mechanical keyboard sound?',
    a: 'Yes. A dense 4mm leather-and-felt mat decouples the keyboard housing from resonant wood or laminate desk tops, trimming sharp metallic chatter by 4-7 dB.',
  },
  {
    q: 'Is 24-inch desk depth deep enough for an XXL desk pad?',
    a: 'Most XXL mats measure 15.7 inches front-to-back, leaving 8.3 inches along the rear of a 24-inch desk for a monitor base or compact shelf.',
  },
  {
    q: 'Why do engineers prefer 75% layouts over Full-Size 100% boards?',
    a: 'Eliminating the right-side number pad pulls your mouse hand roughly 5 inches closer to your body centerline, reducing external shoulder rotation pain during long coding sprints.',
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.moderntrendsnow.store' },
      { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://www.moderntrendsnow.store/tools' },
      { '@type': 'ListItem', position: 3, name: 'Desk & Mat Fit Planner', item: PAGE_URL },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#07090e] text-slate-100 selection:bg-amber-400 selection:text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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

        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 text-left space-y-10">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
              Desk Width, Keyboard Size &amp; XXL Desk Mat Fit Planner
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl font-light">
              Measure horizontal desktop occupancy across 40&quot; to 72&quot; desks before ordering a mechanical keyboard, acoustic desk mat, vertical laptop stand, or studio monitor speaker stands.
            </p>
          </div>

          <DeskMatFitCalculatorWidget />

          {/* Spatial Sizing Matrix */}
          <div className="rounded-2xl border border-white/10 bg-[#0c0f18] p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-black text-white mb-2">
              Standard Desk Width vs Hardware Capacity Matrix
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mb-5 font-light">
              Compare how horizontal inches distribute between input zones, audio hardware, and laptop docking bays across common desk lengths.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono border border-white/10 rounded-xl overflow-hidden">
                <thead className="bg-[#121624] text-amber-400 uppercase">
                  <tr>
                    <th className="p-3 border-b border-white/10">Desk Width</th>
                    <th className="p-3 border-b border-white/10">Ideal Keyboard</th>
                    <th className="p-3 border-b border-white/10">Recommended Mat</th>
                    <th className="p-3 border-b border-white/10">Laptop Docking</th>
                    <th className="p-3 border-b border-white/10">Speakers Fit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/05 text-slate-300 bg-[#07090f]">
                  <tr><td className="p-3 font-bold text-white">40&quot; Compact (100 cm)</td><td className="p-3">60% or 75%</td><td className="p-3 text-amber-400">31.5&quot; x 11.8&quot;</td><td className="p-3 text-emerald-400">Vertical Stand Required</td><td className="p-3">Under-shelf or wall mount</td></tr>
                  <tr><td className="p-3 font-bold text-white">48&quot; Standard (120 cm)</td><td className="p-3">75% Tactile</td><td className="p-3 text-amber-400">35.4&quot; x 15.7&quot; XXL</td><td className="p-3 text-emerald-400">Vertical Dock saves 10.5&quot;</td><td className="p-3">Clean fit w/ 75% board</td></tr>
                  <tr><td className="p-3 font-bold text-white">55&quot; Creator (140 cm)</td><td className="p-3">75% or TKL 80%</td><td className="p-3 text-amber-400">35.4&quot; x 15.7&quot; XXL</td><td className="p-3">Vertical or Riser bay</td><td className="p-3 text-emerald-400">Spacious + 14&quot; mouse pad</td></tr>
                  <tr><td className="p-3 font-bold text-white">60&quot; Studio (152 cm)</td><td className="p-3">Any Layout</td><td className="p-3 text-amber-400">35.4&quot;+ XXL / Dual</td><td className="p-3">Horizontal or Vertical</td><td className="p-3 text-emerald-400">Supports Decoupled Stands</td></tr>
                  <tr><td className="p-3 font-bold text-white">72&quot; Executive (183 cm)</td><td className="p-3">Any Layout</td><td className="p-3 text-amber-400">47.2&quot; x 23.6&quot; Studio</td><td className="p-3">Full Workstation Bay</td><td className="p-3 text-emerald-400">Full Studio Monitors + Amp</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-[#0c0f18] p-6 space-y-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-amber-400" />
                <span>Related Material, Keyboard &amp; Desk Tools</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Compare leather vs suede desk pad friction coefficients, acoustic keyboard dampening, or run monitor viewing distance and height checks.
              </p>
              <div className="flex flex-col gap-2 text-xs font-mono font-bold text-amber-400">
                <Link href="/blog/leather-vs-suede-desk-mat-material-comparison-guide" className="hover:underline inline-flex items-center gap-1">
                  <span>Leather vs Suede Desk Mat Material Guide</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
                <Link href="/blog/mechanical-keyboard-switch-types-acoustic-dampening-thock-guide" className="hover:underline inline-flex items-center gap-1">
                  <span>Mechanical Switch Acoustic Thock Guide</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
                <Link href="/tools/ergonomic-desk-height-calculator" className="text-emerald-300 hover:underline inline-flex items-center gap-1">
                  <Calculator className="h-3 w-3" />
                  <span>Ergonomic Desk Height Calculator</span>
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
