import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ChairFootrestCalculatorWidget from '../../../components/ChairFootrestCalculatorWidget';
import { ChevronRight, BookOpen, ArrowRight, HelpCircle, Armchair } from 'lucide-react';

const PAGE_URL = 'https://www.moderntrendsnow.store/tools/chair-footrest-height-calculator';

export const metadata: Metadata = {
  title: 'Office Chair & Footrest Height Calculator (2026 Ergonomic Posture Tool) | Modern Trends Now',
  description:
    'Free interactive office chair and footrest height calculator using ISO 9241-5 and BIFMA popliteal geometry. Calculate exact seat pan height, knee angle, and footrest lift for fixed 29-inch desks.',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Office Chair & Footrest Height Calculator (2026)',
    description:
      'Model ideal office chair height, popliteal clearance, and under-desk footrest lift vs retractable chair leg rests.',
    url: PAGE_URL,
    type: 'website',
    images: [
      {
        url: 'https://www.moderntrendsnow.store/blog/chair-footrest-knee-angle-diagram.png',
        width: 1200,
        height: 630,
        alt: 'ISO 9241-5 Office Chair Seat Height and Footrest Elevation Chart',
      },
    ],
  },
};

const FAQS = [
  {
    q: 'How high should my office chair and footrest sit at a standard 29-inch desk?',
    a: 'Start by raising your office chair until your elbows sit level with the 29-inch keyboard deck (typically 19.5 inches seat height). If your heels lift or thighs press into the front edge, place an under-desk footrest beneath your feet raised by the gap between 19.5 inches and your natural popliteal height (usually 1.7 to 3.8 inches for adults 5ft 2in to 5ft 10in).',
  },
  {
    q: 'Is an office chair with a built-in retractable footrest better than a separate under-desk footrest?',
    a: 'They serve two complementary postures. Built-in retractable footrests excel during 115 to 135-degree reclined breaks, reading, or phone calls by relieving calf weight and lumbar disc compression. Separate 10 to 15-degree rocking floor footrests win for upright 90-degree typing at a 29-inch desk without pinching behind your knees.',
  },
  {
    q: 'What is the proper knee angle when using an ergonomic office chair with a footrest?',
    a: 'During upright keyboard typing, aim for 92 to 100 degrees behind your knee with a 2-to-3-finger clearance gap between the seat waterfall edge and the back of your calf. During reclined lounge mode with an extended footrest, open your knee angle to 120-135 degrees so calves rest supported without locking knee joints straight.',
  },
  {
    q: 'Can an ergonomic office chair footrest reduce lower back pain and swelling?',
    a: 'Yes. Supporting the lower legs prevents feet from dangling against chair casters, removing downward hamstring tension that tilts the pelvis backward and strains L4-L5 lumbar discs. Active rocking floor footrests also encourage calf muscle micro-pumping, reducing venous blood pooling during 8-hour workdays.',
  },
  {
    q: 'What cylinder rating should a reclining office chair with a footrest have?',
    a: 'Look for an ANSI/BIFMA Class 4 gas lift cylinder paired with dual cold-rolled steel extension rails under the seat pan and a 5-point cast aluminum or heavy nylon base rated at 300+ lbs so extending your leg weight at 130 degrees never causes forward tipping or cylinder droop.',
  },
];

export default function ChairFootrestCalculatorPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Modern Trends Now Office Chair & Footrest Height Calculator',
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
      { '@type': 'ListItem', position: 3, name: 'Office Chair & Footrest Calculator', item: PAGE_URL },
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
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-3.5">
            <nav className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <ChevronRight className="h-3 w-3 text-slate-600" />
              <Link href="/tools" className="hover:text-white transition">Tools</Link>
              <ChevronRight className="h-3 w-3 text-slate-600" />
              <span className="text-amber-400 font-bold">Chair &amp; Footrest Calculator</span>
            </nav>
          </div>
        </div>

        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8 text-left">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1 text-xs font-mono font-bold text-amber-300 mb-4">
              <Armchair className="h-3.5 w-3.5 text-amber-400" />
              <span>ISO 9241-5 Seat &amp; Footrest Engine</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Ergonomic Office Chair &amp; Footrest Height Calculator
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed font-light">
              Stop guessing why your thighs ache or heels lift off the floor at a standard 29-inch desk. Calculate your exact popliteal seat height, desk-matched seat elevation, footrest lift height, and whether you need a built-in retractable footrest chair or a tilting under-desk footrest.
            </p>
          </div>

          <ChairFootrestCalculatorWidget />

          {/* Quick Reference Seat & Footrest Matrix */}
          <div className="rounded-2xl border border-white/10 bg-[#0c0f18] p-6 sm:p-8 space-y-5">
            <h2 className="text-xl sm:text-2xl font-black text-white">
              ISO 9241-5 Seat Height &amp; Footrest Lift Quick Table (On Fixed 29&quot; Desk)
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs font-mono border border-white/10">
                <thead>
                  <tr className="bg-white/5 text-amber-400 border-b border-white/10">
                    <th className="p-3">Your Stature</th>
                    <th className="p-3">Natural Popliteal Seat</th>
                    <th className="p-3">Seat for 29&quot; Desk</th>
                    <th className="p-3">Required Footrest Lift</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-300">
                  <tr><td className="p-3 font-bold text-white">5&apos;2&quot; (157 cm)</td><td className="p-3">15.7&quot; (40 cm)</td><td className="p-3">19.5&quot;</td><td className="p-3 text-rose-400 font-bold">+3.8&quot; (9.7 cm)</td></tr>
                  <tr><td className="p-3 font-bold text-white">5&apos;5&quot; (165 cm)</td><td className="p-3">16.5&quot; (42 cm)</td><td className="p-3">19.5&quot;</td><td className="p-3 text-rose-400 font-bold">+3.0&quot; (7.6 cm)</td></tr>
                  <tr><td className="p-3 font-bold text-white">5&apos;8&quot; (173 cm)</td><td className="p-3">17.3&quot; (44 cm)</td><td className="p-3">19.5&quot;</td><td className="p-3 text-amber-300 font-bold">+2.2&quot; (5.6 cm)</td></tr>
                  <tr><td className="p-3 font-bold text-white">5&apos;10&quot; (178 cm)</td><td className="p-3">17.8&quot; (45 cm)</td><td className="p-3">19.5&quot;</td><td className="p-3 text-amber-300 font-bold">+1.7&quot; (4.3 cm)</td></tr>
                  <tr><td className="p-3 font-bold text-white">6&apos;1&quot; (185 cm)</td><td className="p-3">18.5&quot; (47 cm)</td><td className="p-3">19.5&quot;</td><td className="p-3 text-emerald-400 font-bold">+1.0&quot; (Optional)</td></tr>
                  <tr><td className="p-3 font-bold text-white">6&apos;3&quot; (191 cm)</td><td className="p-3">19.1&quot; (48.5 cm)</td><td className="p-3">19.5&quot;</td><td className="p-3 text-emerald-400 font-bold">0&quot; (Feet Flat)</td></tr>
                </tbody>
              </table>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono">
              <Link
                href="/blog/office-chair-with-footrest-ergonomic-guide"
                className="inline-flex items-center gap-1.5 text-amber-400 hover:underline font-bold"
              >
                <BookOpen className="h-3.5 w-3.5" />
                <span>Read Complete 2026 Office Chair with Footrest Engineering Guide</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/tools/ergonomic-desk-height-calculator"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:underline font-bold"
              >
                <span>Open Standing Desk Height Calculator &rarr;</span>
              </Link>
            </div>
          </div>

          {/* FAQs */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              <HelpCircle className="h-3.5 w-3.5 text-amber-400" />
              <span>Chair &amp; Footrest Biomechanics Q&amp;A</span>
            </div>
            <div className="space-y-3">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="font-bold text-white text-sm sm:text-base mb-1.5">{faq.q}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
