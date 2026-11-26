import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import DeskHeightCalculatorWidget from '../../../components/DeskHeightCalculatorWidget';
import { ChevronRight, BookOpen, ArrowRight, HelpCircle, Calculator } from 'lucide-react';

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
    a: 'Traditional fixed desks are manufactured at 29 to 30 inches to accommodate tall adults wearing shoes. Under ISO 9241-5 guidelines, anyone under 6ft 1in seated without a footrest experiences raised shoulders and upward wrist extension unless the desk lowers to 25-27.5 inches or the chair is elevated with a footrest.',
  },
  {
    q: 'How high should my computer monitor sit above the desk?',
    a: 'Your horizontal eye gaze should align within the top 20% to 30% of the active display glass when sitting upright. Most factory monitor stands sit 2 to 4 inches too low, which is fixed cleanly with a solid walnut monitor shelf or aluminum desk riser.',
  },
  {
    q: 'What is the exact math formula for standing desk height?',
    a: 'A reliable baseline formula is Total Stature (including indoor shoes or anti-fatigue standing mat thickness) multiplied by 0.618, verified by relaxing your shoulders and bending your elbows to 90-100 degrees so forearms stay parallel to the floor.',
  },
  {
    q: 'Should keyboard wrist height match desktop surface height?',
    a: 'Yes, your home-row keys sit about 0.8 to 1.2 inches above the desktop on mechanical boards. Pair low-profile keyboards with a thin solid wood or aluminum palm rest so your carpal tunnel maintains a flat 0-degree neutral slope.',
  },
  {
    q: 'How long should I alternate between sitting and standing daily?',
    a: 'Ergonomists typically recommend a 2:1 or 1:1 rotation such as 40 minutes seated followed by 20 minutes standing on a contoured balance mat, changing posture before static lower-back fatigue sets in.',
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

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.moderntrendsnow.store' },
      { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://www.moderntrendsnow.store/tools' },
      { '@type': 'ListItem', position: 3, name: 'Ergonomic Desk Height Calculator', item: PAGE_URL },
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
              <span className="text-amber-400 font-bold">Desk Height Calculator</span>
            </nav>
          </div>
        </div>

        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 text-left space-y-10">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
              Ergonomic Desk Height &amp; Monitor Eye-Level Calculator
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl font-light">
              Calculate your exact seated desk height, motorized standing desk preset, chair seat elevation, and monitor riser clearance based on ISO 9241-5 and ANSI/BIFMA G1-2013 biomechanical proportions.
            </p>
          </div>

          <DeskHeightCalculatorWidget />

          {/* Reference Anthropometric Chart Table */}
          <div className="rounded-2xl border border-white/10 bg-[#0c0f18] p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-black text-white mb-2">
              2026 Quick Reference Sitting &amp; Standing Desk Height Matrix
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mb-5 font-light">
              Baseline dimensions assuming flat indoor footwear (+0.5 inch) and 90-degree elbow alignment without trapezius shrugging.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono border border-white/10 rounded-xl overflow-hidden">
                <thead className="bg-[#121624] text-amber-400 uppercase">
                  <tr>
                    <th className="p-3 border-b border-white/10">Stature (Barefoot)</th>
                    <th className="p-3 border-b border-white/10">Chair Pan</th>
                    <th className="p-3 border-b border-white/10">Sitting Desk</th>
                    <th className="p-3 border-b border-white/10">Standing Desk</th>
                    <th className="p-3 border-b border-white/10">Eye Level Above Desk</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/05 text-slate-300 bg-[#07090f]">
                  <tr><td className="p-3 font-bold text-white">5&apos;0&quot; (152 cm)</td><td className="p-3">15.2&quot;</td><td className="p-3 text-amber-400 font-bold">24.7&quot; (63 cm)</td><td className="p-3 text-emerald-400 font-bold">37.4&quot; (95 cm)</td><td className="p-3 text-cyan-400">+17.1&quot;</td></tr>
                  <tr><td className="p-3 font-bold text-white">5&apos;3&quot; (160 cm)</td><td className="p-3">16.0&quot;</td><td className="p-3 text-amber-400 font-bold">25.5&quot; (65 cm)</td><td className="p-3 text-emerald-400 font-bold">39.2&quot; (100 cm)</td><td className="p-3 text-cyan-400">+18.5&quot;</td></tr>
                  <tr><td className="p-3 font-bold text-white">5&apos;6&quot; (168 cm)</td><td className="p-3">16.8&quot;</td><td className="p-3 text-amber-400 font-bold">26.3&quot; (67 cm)</td><td className="p-3 text-emerald-400 font-bold">41.2&quot; (105 cm)</td><td className="p-3 text-cyan-400">+19.8&quot;</td></tr>
                  <tr><td className="p-3 font-bold text-white">5&apos;9&quot; (175 cm)</td><td className="p-3">17.5&quot;</td><td className="p-3 text-amber-400 font-bold">27.0&quot; (69 cm)</td><td className="p-3 text-emerald-400 font-bold">42.9&quot; (109 cm)</td><td className="p-3 text-cyan-400">+21.0&quot;</td></tr>
                  <tr><td className="p-3 font-bold text-white">6&apos;0&quot; (183 cm)</td><td className="p-3">18.3&quot;</td><td className="p-3 text-amber-400 font-bold">27.8&quot; (71 cm)</td><td className="p-3 text-emerald-400 font-bold">44.8&quot; (114 cm)</td><td className="p-3 text-cyan-400">+22.4&quot;</td></tr>
                  <tr><td className="p-3 font-bold text-white">6&apos;3&quot; (191 cm)</td><td className="p-3">19.0&quot;</td><td className="p-3 text-amber-400 font-bold">28.5&quot; (72 cm)</td><td className="p-3 text-emerald-400 font-bold">46.7&quot; (119 cm)</td><td className="p-3 text-cyan-400">+23.8&quot;</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Worked Formula Card */}
          <div className="rounded-2xl border border-white/10 bg-[#0c0f18] p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-black text-white">
              How Our Biomechanical Equations Work (Worked Example: 5&apos;9&quot; / 175 cm)
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              Rather than guessing from one-size-fits-all 29-inch furniture tables, the calculator converts stature into three coupled mechanical targets: knee clearance height, elbow hinge height, and optical eye-line datum. For a 175 cm (68.9&quot;) creator wearing 0.5&quot; indoor slippers (total height 69.4&quot;):
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-[#07090f] border border-white/10">
                <div className="text-amber-400 font-bold mb-1">1. Chair Seat Height</div>
                <div className="text-slate-200">69.4&quot; x 0.252 = <strong>17.5&quot;</strong></div>
                <p className="text-slate-400 mt-1">Keeps heels planted flat with 95-deg popliteal knee clearance.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#07090f] border border-white/10">
                <div className="text-emerald-400 font-bold mb-1">2. Sitting &amp; Standing Desk</div>
                <div className="text-slate-200">17.5&quot; + 9.5&quot; = <strong>27.0&quot;</strong> sit / <strong>42.9&quot;</strong> stand</div>
                <p className="text-slate-400 mt-1">Aligns keyboard keys horizontally with relaxed forearm tendon path.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#07090f] border border-white/10">
                <div className="text-cyan-400 font-bold mb-1">3. Monitor Riser Clearance</div>
                <div className="text-slate-200">Target eye top: <strong>+21.0&quot;</strong> above desk</div>
                <p className="text-slate-400 mt-1">A 4.3&quot; Solid Walnut Shelf brings a 27&quot; monitor directly to eye horizon.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-[#0c0f18] p-6 space-y-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-amber-400" />
                <span>Related Blueprint &amp; Next Calculators</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Read the full anatomical guide covering cervical spine posture or inspect your monitor viewing distance and sit-stand cable routing slack next.
              </p>
              <div className="flex flex-col gap-2 text-xs font-mono font-bold text-amber-400">
                <Link href="/blog/ergonomic-desk-height-calculator-workspace-architecture-guide" className="hover:underline inline-flex items-center gap-1">
                  <span>Full Ergonomic Desk Architecture Guide</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
                <Link href="/tools/monitor-viewing-distance-calculator" className="text-emerald-300 hover:underline inline-flex items-center gap-1">
                  <Calculator className="h-3 w-3" />
                  <span>Monitor Viewing Distance &amp; Arm Load Calculator</span>
                </Link>
                <Link href="/tools/standing-desk-cable-slack-calculator" className="text-emerald-300 hover:underline inline-flex items-center gap-1">
                  <Calculator className="h-3 w-3" />
                  <span>Standing Desk Cable Slack Calculator</span>
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0c0f18] p-6">
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-amber-400" />
                <span>Frequently Asked Ergonomic Questions</span>
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
