import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import MonitorDistanceCalculatorWidget from '../../../components/MonitorDistanceCalculatorWidget';
import { ChevronRight, BookOpen, ArrowRight, HelpCircle, Calculator } from 'lucide-react';

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
    a: 'For a single 27-inch monitor, 22 to 27 inches keeps the screen inside a natural 35-40 degree horizontal field of view. Dual 27-inch displays or 34-49 inch ultrawides perform best at 26 to 36 inches so you avoid constant lateral neck rotation.',
  },
  {
    q: 'Can heavy dual monitor arms break hollow IKEA desks?',
    a: 'Yes. Honeycomb fiberboard tops concentrate 25-60 lbs of forward leverage onto a small 3-inch C-clamp footprint, which frequently dents or fractures the laminate core. Use a steel reinforcement plate or spread the load evenly across a 46-inch Solid Walnut Dual Monitor Shelf.',
  },
  {
    q: 'What does Retina PPI viewing distance mean?',
    a: 'Calculated as 3438 divided by screen PPI, Retina distance is the threshold where individual square RGB sub-pixels blend completely to healthy 20/20 vision. A 27-inch 4K monitor (163 PPI) hits Retina sharpness at just 21 inches.',
  },
  {
    q: 'Is a 24-inch desk deep enough for dual monitors?',
    a: 'A 24-inch shallow desk forces dual 27-inch displays too close to your eyes unless mounted on a slim rear shelf or wall arm that keeps the screen plane near the rear edge.',
  },
  {
    q: 'Should dual monitors sit flat side by side or angled inward?',
    a: 'Angle each wing inward by 15 degrees to trace a circular focal arc around your chair. Keeping equal optical distance at the screen center and corners lowers repetitive eye refocusing fatigue.',
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
      { '@type': 'ListItem', position: 3, name: 'Monitor Distance & Load Calculator', item: PAGE_URL },
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
              <span className="text-amber-400 font-bold">Monitor Distance &amp; Load</span>
            </nav>
          </div>
        </div>

        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 text-left space-y-10">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
              Monitor Viewing Distance, PPI &amp; Desk Load Calculator
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl font-light">
              Check optical Retina clarity distance, required desk depth, and structural C-clamp weight limits for single, dual-27&quot;, 34&quot; ultrawide, and 49&quot; displays before mounting.
            </p>
          </div>

          <MonitorDistanceCalculatorWidget />

          {/* Optical & Structural Lookup Matrix */}
          <div className="rounded-2xl border border-white/10 bg-[#0c0f18] p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-black text-white mb-2">
              Display PPI, Viewing Distance &amp; Clamp Stress Benchmark Table
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mb-5 font-light">
              Reference comparison showing horizontal screen width, Retina pixel threshold, recommended eye gap, and safe mounting strategy.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono border border-white/10 rounded-xl overflow-hidden">
                <thead className="bg-[#121624] text-amber-400 uppercase">
                  <tr>
                    <th className="p-3 border-b border-white/10">Configuration</th>
                    <th className="p-3 border-b border-white/10">PPI Density</th>
                    <th className="p-3 border-b border-white/10">Retina Gap</th>
                    <th className="p-3 border-b border-white/10">Ideal Viewing Range</th>
                    <th className="p-3 border-b border-white/10">Safest Mount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/05 text-slate-300 bg-[#07090f]">
                  <tr><td className="p-3 font-bold text-white">24&quot; 1080p Single</td><td className="p-3">92 PPI</td><td className="p-3">37&quot;</td><td className="p-3 text-amber-400 font-bold">20&quot; - 24&quot;</td><td className="p-3 text-emerald-400">Any arm or riser</td></tr>
                  <tr><td className="p-3 font-bold text-white">27&quot; 1440p Single</td><td className="p-3">109 PPI</td><td className="p-3">32&quot;</td><td className="p-3 text-amber-400 font-bold">22&quot; - 26&quot;</td><td className="p-3 text-emerald-400">MDF/Hardwood clamp or shelf</td></tr>
                  <tr><td className="p-3 font-bold text-white">27&quot; 4K UHD Single</td><td className="p-3">163 PPI</td><td className="p-3 text-emerald-400">21&quot;</td><td className="p-3 text-amber-400 font-bold">22&quot; - 27&quot;</td><td className="p-3 text-emerald-400">Razor-sharp text clarity</td></tr>
                  <tr><td className="p-3 font-bold text-white">Dual 27&quot; Side-by-Side</td><td className="p-3">109-163 PPI</td><td className="p-3">21&quot;-32&quot;</td><td className="p-3 text-amber-400 font-bold">26&quot; - 34&quot;</td><td className="p-3 text-cyan-400">Solid Walnut 46&quot; Desk Shelf</td></tr>
                  <tr><td className="p-3 font-bold text-white">34&quot; Ultrawide (3440x1440)</td><td className="p-3">110 PPI</td><td className="p-3">31&quot;</td><td className="p-3 text-amber-400 font-bold">26&quot; - 32&quot;</td><td className="p-3 text-cyan-400">Shelf or heavy clamp w/ plate</td></tr>
                  <tr><td className="p-3 font-bold text-white">49&quot; Super Ultrawide</td><td className="p-3">109 PPI</td><td className="p-3">32&quot;</td><td className="p-3 text-amber-400 font-bold">30&quot; - 38&quot;</td><td className="p-3 text-rose-400">100 lb Hardwood Shelf / Heavy Arm</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-[#0c0f18] p-6 space-y-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-amber-400" />
                <span>Dual Monitor Shelf vs Arm Blueprint &amp; More Tools</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Read the full structural breakdown comparing ANSI/BIFMA desk shelf load distribution vs gas-spring clamps, or check desk height and keyboard clearance next.
              </p>
              <div className="flex flex-col gap-2 text-xs font-mono font-bold text-amber-400">
                <Link href="/blog/dual-monitor-desk-shelf-vs-monitor-arm-setup-blueprint" className="hover:underline inline-flex items-center gap-1">
                  <span>Read Monitor Shelf vs Arm Blueprint</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
                <Link href="/tools/ergonomic-desk-height-calculator" className="text-emerald-300 hover:underline inline-flex items-center gap-1">
                  <Calculator className="h-3 w-3" />
                  <span>Ergonomic Desk Height Calculator</span>
                </Link>
                <Link href="/tools/desk-mat-keyboard-fit-calculator" className="text-emerald-300 hover:underline inline-flex items-center gap-1">
                  <Calculator className="h-3 w-3" />
                  <span>Desk Width &amp; XXL Mat Fit Planner</span>
                </Link>
              </div>
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
