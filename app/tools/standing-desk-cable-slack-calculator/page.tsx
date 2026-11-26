import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import CableSlackCalculator from '../../../components/CableSlackCalculator';
import { ChevronRight, BookOpen, ArrowRight, HelpCircle, Calculator } from 'lucide-react';

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
  {
    q: 'What wire gauge is safest for a dual-monitor standing desk surge strip?',
    a: 'Look for heavy-duty 14 AWG copper conductors rated at 15 Amps / 1875 Watts with at least 2,100 Joules of clamping surge suppression so dual displays, PC towers, and motorized lift columns share one clean main cord.',
  },
  {
    q: 'How does an articulated magnetic cable spine work?',
    a: 'Each modular vertebra snaps around a quad-channel backbone that attaches magnetically along the steel desk leg, hiding the main power drop and Ethernet line while extending smoothly as the desk climbs.',
  },
  {
    q: 'Why keep AC power bricks away from DisplayPort and USB-C cables?',
    a: 'Running high-current AC leads bundled tightly parallel to unshielded video cables can trigger subtle electromagnetic interference (EMI) screen flickering. Leave a 2-inch channel separation inside your cable tray.',
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
      { '@type': 'ListItem', position: 3, name: 'Cable Slack Calculator', item: PAGE_URL },
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
              <span className="text-amber-400 font-bold">Cable Slack Calculator</span>
            </nav>
          </div>
        </div>

        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 text-left space-y-10">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
              Dynamic Standing Desk Cable Slack Calculator
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl font-light">
              Model exact power cord drop length, articulated spine vertebrae count, and 14 AWG surge capacity so standing desk motors never tug wall outlets at full 48&quot; elevation.
            </p>
          </div>

          <CableSlackCalculator />

          {/* Cord Travel Reference Table */}
          <div className="rounded-2xl border border-white/10 bg-[#0c0f18] p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-black text-white mb-2">
              Sit-Stand Cord Length &amp; Spine Module Reference Matrix
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mb-5 font-light">
              Calculated from formula Total Drop = Max Standing Height + Wall Outlet Offset + 6-inch Tension Safety Buffer.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono border border-white/10 rounded-xl overflow-hidden">
                <thead className="bg-[#121624] text-amber-400 uppercase">
                  <tr>
                    <th className="p-3 border-b border-white/10">Max Desk Elevation</th>
                    <th className="p-3 border-b border-white/10">Wall Offset</th>
                    <th className="p-3 border-b border-white/10">Min Cord Length</th>
                    <th className="p-3 border-b border-white/10">Surge Strip Buy</th>
                    <th className="p-3 border-b border-white/10">Spine Modules</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/05 text-slate-300 bg-[#07090f]">
                  <tr><td className="p-3 font-bold text-white">42&quot; Compact Stand</td><td className="p-3">12&quot;</td><td className="p-3 text-amber-400 font-bold">60&quot; (5.0 ft)</td><td className="p-3 text-emerald-400">6-ft 14 AWG</td><td className="p-3">28 blocks</td></tr>
                  <tr><td className="p-3 font-bold text-white">46&quot; Average Stand</td><td className="p-3">18&quot;</td><td className="p-3 text-amber-400 font-bold">70&quot; (5.8 ft)</td><td className="p-3 text-emerald-400">8-ft 14 AWG</td><td className="p-3">31 blocks</td></tr>
                  <tr><td className="p-3 font-bold text-white">48&quot; Dual-Motor Max</td><td className="p-3">18&quot;</td><td className="p-3 text-amber-400 font-bold">72&quot; (6.0 ft)</td><td className="p-3 text-emerald-400">8-ft to 10-ft</td><td className="p-3">32 blocks</td></tr>
                  <tr><td className="p-3 font-bold text-white">48&quot; Lateral Outlet</td><td className="p-3">36&quot;</td><td className="p-3 text-amber-400 font-bold">90&quot; (7.5 ft)</td><td className="p-3 text-cyan-400">10-ft 14 AWG</td><td className="p-3">32 blocks</td></tr>
                  <tr><td className="p-3 font-bold text-white">52&quot; Treadmill Desk</td><td className="p-3">24&quot;</td><td className="p-3 text-amber-400 font-bold">82&quot; (6.8 ft)</td><td className="p-3 text-cyan-400">10-ft 14 AWG</td><td className="p-3">35 blocks</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-[#0c0f18] p-6 space-y-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-amber-400" />
                <span>Standing Desk Cable Blueprint Guides &amp; Tools</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Read our step-by-step wiring blueprints comparing steel wire trays, EMI separation spacing, and under-desk surge hubs.
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
                <Link href="/tools/ergonomic-desk-height-calculator" className="text-emerald-300 hover:underline inline-flex items-center gap-1">
                  <Calculator className="h-3 w-3" />
                  <span>Ergonomic Desk Height Calculator</span>
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
