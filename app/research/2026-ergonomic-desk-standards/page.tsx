import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ErgonomicResearchClient from '../../../components/ErgonomicResearchClient';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '2026 ISO 9241-5 Desk Height & Ergonomics Anthropometric Benchmark | Modern Trends Now',
  description:
    'Open CC BY 4.0 dataset comparing sitting desk height, standing desk elevation, chair pan geometry, and 29-inch fixed desk wrist strain offsets from 152 cm to 193 cm.',
  alternates: {
    canonical: 'https://www.moderntrendsnow.store/research/2026-ergonomic-desk-standards',
  },
  openGraph: {
    title: '2026 ISO 9241-5 Desk Height & Ergonomics Benchmark Dataset',
    description:
      'Verified ISO 9241-5 & ANSI/BIFMA G1 desk height tables with downloadable CSV and JSON open datasets.',
    url: 'https://www.moderntrendsnow.store/research/2026-ergonomic-desk-standards',
    type: 'article',
  },
};

export default function ErgonomicDeskStandardsResearchPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Dataset',
        '@id': 'https://www.moderntrendsnow.store/research/2026-ergonomic-desk-standards#dataset',
        name: 'ModernTrendsNow 2026 ISO 9241-5 & ANSI/BIFMA Desk Geometry Standards Dataset',
        description:
          'Anthropometric sitting desk height, standing elevation, chair pan height, and 29-inch desk mismatch deltas across human statures from 152 cm to 193 cm.',
        url: 'https://www.moderntrendsnow.store/research/2026-ergonomic-desk-standards',
        license: 'https://creativecommons.org/licenses/by/4.0/',
        isAccessibleForFree: true,
        dateModified: '2026-11-27',
        creator: {
          '@type': 'Person',
          name: 'Muhammad Naveed Khatri',
          url: 'https://www.moderntrendsnow.store/about',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Modern Trends Now',
          url: 'https://www.moderntrendsnow.store',
        },
        distribution: [
          {
            '@type': 'DataDownload',
            encodingFormat: 'text/csv',
            contentUrl: 'https://www.moderntrendsnow.store/data/2026-ergonomic-standards.csv',
          },
          {
            '@type': 'DataDownload',
            encodingFormat: 'application/json',
            contentUrl: 'https://www.moderntrendsnow.store/data/2026-ergonomic-standards.json',
          },
        ],
      },
      {
        '@type': 'TechArticle',
        headline: '2026 ISO 9241-5 Desk Height & Ergonomics Anthropometric Benchmark',
        url: 'https://www.moderntrendsnow.store/research/2026-ergonomic-desk-standards',
        datePublished: '2026-11-27',
        dateModified: '2026-11-27',
        author: {
          '@type': 'Person',
          name: 'Muhammad Naveed Khatri',
          url: 'https://www.moderntrendsnow.store/about',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Modern Trends Now',
          url: 'https://www.moderntrendsnow.store',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.moderntrendsnow.store/' },
          { '@type': 'ListItem', position: 2, name: '2026 Ergonomic Desk Standards', item: 'https://www.moderntrendsnow.store/research/2026-ergonomic-desk-standards' },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#07090e] text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="flex-1">
        <div className="border-b border-white/10 bg-[#05070d]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-3.5">
            <nav className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <ChevronRight className="h-3 w-3 text-slate-600" />
              <span className="text-amber-400 font-bold">2026 Ergonomic Desk Benchmark</span>
            </nav>
          </div>
        </div>

        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl">
              2026 ISO 9241-5 &amp; ANSI/BIFMA Desk Geometry Open Benchmark
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed font-light">
              Standard consumer desks ship at a fixed 29.0 inches (73.7 cm), engineered for individuals 6&apos;2&quot; or taller. This open{' '}
              <strong className="text-white">CC BY 4.0</strong> dataset quantifies exact seated elbow clearance, standing height ratios, and corrective footrest offsets from 5&apos;0&quot; to 6&apos;4&quot;.
            </p>
            <div className="flex flex-wrap gap-3 pt-1 text-xs font-mono font-bold">
              <a
                href="/data/2026-ergonomic-standards.csv"
                download
                className="rounded-xl bg-amber-400 hover:bg-amber-300 text-black px-4 py-2.5 transition"
              >
                Download CSV Dataset
              </a>
              <a
                href="/data/2026-ergonomic-standards.json"
                download
                className="rounded-xl border border-white/15 bg-[#0c101b] hover:border-amber-400 text-white px-4 py-2.5 transition"
              >
                Download JSON Dataset
              </a>
              <Link
                href="/tools/ergonomic-desk-height-calculator"
                className="rounded-xl border border-white/15 bg-[#0c101b] hover:border-amber-400 text-amber-300 px-4 py-2.5 transition"
              >
                Open Interactive Calculator
              </Link>
            </div>
          </div>

          <ErgonomicResearchClient />
        </section>
      </main>

      <Footer />
    </div>
  );
}
