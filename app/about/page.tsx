import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ShieldCheck, Award, Sparkles, CheckCircle2, Mail, MapPin, Compass, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Our Editorial Studio & Founder | Modern Trends Now',
  description:
    'Meet the editorial team and founder behind Modern Trends Now. Learn about our spatial curation methodology, materials standards, and uncompromising design philosophy.',
  alternates: {
    canonical: 'https://www.moderntrendsnow.store/about',
  },
  openGraph: {
    title: 'About Our Editorial Studio & Founder | Modern Trends Now',
    description:
      'Curating the top 1% of viral tech gadgets, optical luminaires, and minimalist desk architecture. Learn how our editorial team reviews workspace products.',
    url: 'https://www.moderntrendsnow.store/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#07090e] text-slate-100 selection:bg-amber-400 selection:text-black">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 border-b border-white/10 bg-[#06080f] overflow-hidden text-left">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/05 rounded-full blur-[140px] pointer-events-none" />

          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1 text-xs font-mono font-bold text-amber-300 mb-6">
              <Compass className="h-3.5 w-3.5 text-amber-400" />
              <span>EDITORIAL ARCHIVE &amp; CURATION STANDARDS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Curating the Top 1% of <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                Modern Workspace Architecture.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl font-light leading-relaxed">
              Modern Trends Now is an independent design laboratory and editorial publication dedicated to minimalist desk architecture, optical ergonomics, and tactile productivity tools. We eliminate cheap dropshipping junk and spotlight only certified, durable, high-performance objects.
            </p>
          </div>
        </section>

        {/* Founder & Lead Curator Section (E-E-A-T Focus) */}
        <section className="py-16 border-b border-white/10 bg-[#080b12] text-left">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
              
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                  alt="Muhammad Naveed Khatri, Founder and Lead Systems Curator at Modern Trends Now"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-sm font-bold text-white font-mono">Muhammad Naveed Khatri</div>
                  <div className="text-xs text-amber-400 font-mono">Founder &amp; Principal Spatial Curator</div>
                </div>
              </div>

              <div className="md:col-span-2 space-y-4">
                <div className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                  FOUNDER STATEMENT &amp; E-E-A-T CREDENTIALS
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Designed for Creators Who Spend 12+ Hours Daily at Their Desks.
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  "As a software architect and workspace ergonomics researcher, I witnessed firsthand how visual clutter, inferior lighting, and poorly engineered desk accessories sabotage mental focus and physical wellbeing. Modern Trends Now was created in 2026 to bring institutional rigor to everyday workspace gadgets."
                </p>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  Every product highlighted in our catalog undergoes rigorous multi-point verification: structural rigidity, thermal dissipation, optical glare rating, and tactile acoustic profile. If an object does not elevate your cognitive workspace, it does not enter our archive.
                </p>

                <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-amber-400" />
                    <span>Latifabad, Hyderabad, Sindh, Pakistan</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-amber-400" />
                    <span>support@moderntrendsnow.store</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4 Pillars of Curation */}
        <section className="py-16 sm:py-20 border-b border-white/10 bg-[#06080f] text-left">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Our 4-Point Material Standard
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                How we distinguish high-grade architectural objects from mass-market novelty toys.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="rounded-2xl border border-white/10 bg-[#0c0f18] p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-amber-400/10 text-amber-400">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">1. Authentic Industrial Materials</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  We prioritize Grade 5 Ti-6Al-4V titanium, anodized 6000-series aircraft aluminum, solid kiln-dried American walnut, and cast architectural concrete over brittle injection-molded plastics.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0c0f18] p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-amber-400/10 text-amber-400">
                    <Award className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">2. Optical Ergonomics &amp; Eye Safety</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Luminaires and monitor screenbars must feature asymmetric optical paths that eliminate screen glare, flicker-free constant-current drivers, and Color Rendering Index (CRI) ratings exceeding Ra 95.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0c0f18] p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-amber-400/10 text-amber-400">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">3. Verified Physical Precision</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Mechanical desk toys, precision screwdrivers, and magnetic docking stations must adhere to tight CNC tolerances with smooth bearings, N52 neodymium magnets, and durable tactile switches.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0c0f18] p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-amber-400/10 text-amber-400">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">4. Amazon Prime Verified Logistics</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  All recommended items link directly to certified sellers on Amazon.com, ensuring rapid 2-Day Prime shipping, zero customs surprises, and a guaranteed 30-day return policy.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Published Research & External Entities */}
        <section className="py-12 border-b border-white/10 bg-[#06080f] text-left">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-white mb-4">
              Published Ergonomics Notes &amp; Open-Source Specifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <a href="https://naveedkhtri.medium.com/why-a-standard-29-inch-desk-hurts-your-wrists-and-the-exact-iso-math-to-fix-it-e3132c6391ef" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-xl border border-white/10 bg-[#0c0f18] text-amber-300 hover:border-amber-400/50 transition">
                Medium: Why a Standard 29-Inch Desk Hurts Your Wrists (ISO Math)
              </a>
              <a href="https://github.com/mnaveedkhtri-ui/2026-fee-and-ergonomics-formulas" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-xl border border-white/10 bg-[#0c0f18] text-amber-300 hover:border-amber-400/50 transition">
                GitHub: Open-Source ISO 9241-5 Desk &amp; Cable Slack Formulas
              </a>
              <a href="https://mnaveedkhtri-ui.github.io/2026-fee-and-ergonomics-formulas/" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-xl border border-white/10 bg-[#0c0f18] text-amber-300 hover:border-amber-400/50 transition">
                GitHub Pages: Interactive Spec &amp; Equations Reference
              </a>
              <a href="https://peerlist.io/naveedkhtri7" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-xl border border-white/10 bg-[#0c0f18] text-amber-300 hover:border-amber-400/50 transition">
                Peerlist: Founder Engineering &amp; Project Showcase
              </a>
            </div>
          </div>
        </section>

        {/* CTA to Explore Blog & Catalog */}
        <section className="py-16 bg-[#080b12] text-center">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Explore Our Architectural Research Archive
            </h2>
            <p className="text-sm text-slate-300 mb-6 font-light">
              Dive into our peer-reviewed technical buying guides and optical physics breakdowns.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/blog"
                className="px-5 py-2.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider hover:bg-amber-300 transition shadow-lg shadow-amber-400/20"
              >
                Read Field Guides
              </Link>
              <Link
                href="/#catalog"
                className="px-5 py-2.5 rounded-xl border border-white/20 bg-white/5 text-white font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition"
              >
                Explore 58 Curated Objects
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
