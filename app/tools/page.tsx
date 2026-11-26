import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Ruler, Monitor, Keyboard, Cable, ArrowRight, Sparkles, ChevronRight, Calculator } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Workspace Engineering Calculators & Desk Setup Tools | Modern Trends Now',
  description:
    'Free interactive workspace geometry calculators: Ergonomic desk height calculator, monitor viewing distance & arm clamp load tool, desk mat fit planner, and cable slack calculator.',
  alternates: {
    canonical: 'https://www.moderntrendsnow.store/tools',
  },
  openGraph: {
    title: 'Workspace Engineering Calculators | Modern Trends Now',
    description:
      'Interactive ISO 9241-5 ergonomic desk height, monitor PPI distance, keyboard clearance, and cable slack calculators.',
    url: 'https://www.moderntrendsnow.store/tools',
    type: 'website',
  },
};

const TOOLS = [
  {
    slug: '/tools/ergonomic-desk-height-calculator',
    badge: 'ISO 9241-5 Geometry',
    title: 'Ergonomic Desk Height & Eye-Level Calculator',
    desc: 'Compute exact sitting desk height, standing desk elevation, chair seat height, footrest gap, and monitor riser clearance for your stature.',
    icon: Ruler,
    guideLink: '/blog/ergonomic-desk-height-calculator-workspace-architecture-guide',
    guideLabel: 'Read Ergonomic Desk Architecture Guide',
  },
  {
    slug: '/tools/monitor-viewing-distance-calculator',
    badge: 'Optics & Structural Load',
    title: 'Monitor Viewing Distance, PPI & Desk Load Calculator',
    desc: 'Find ideal Retina sharpness distance (24", 27", 32", 34" UW, 49" SUW) and verify if C-clamp monitor arms risk crushing your desktop core.',
    icon: Monitor,
    guideLink: '/blog/dual-monitor-desk-shelf-vs-monitor-arm-setup-blueprint',
    guideLabel: 'Read Monitor Shelf vs Arm Blueprint',
  },
  {
    slug: '/tools/desk-mat-keyboard-fit-calculator',
    badge: 'Spatial Footprint',
    title: 'Desk Width, Keyboard & XXL Desk Mat Fit Planner',
    desc: 'Model horizontal clearance across 40"-72" desks combining 60%/75%/Full keyboards, mouse sweep, studio speakers, and vertical laptop docks.',
    icon: Keyboard,
    guideLink: '/blog/leather-vs-suede-desk-mat-material-comparison-guide',
    guideLabel: 'Read Desk Mat Material Guide',
  },
  {
    slug: '/tools/standing-desk-cable-slack-calculator',
    badge: 'Sit-Stand Cord Math',
    title: 'Dynamic Standing Desk Cable Slack Calculator',
    desc: 'Calculate exact power cord travel length and articulated magnetic spine vertebrae needed so cables never snag at full 48" elevation.',
    icon: Cable,
    guideLink: '/blog/under-desk-cable-management-steel-tray-vs-mesh-raceway-guide',
    guideLabel: 'Read Under-Desk Steel Tray Guide',
  },
];

export default function ToolsHubPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#07090e] text-slate-100 selection:bg-amber-400 selection:text-black">
      <Navbar />

      <main className="flex-1">
        <div className="border-b border-white/10 bg-[#05070d]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3.5">
            <nav className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <ChevronRight className="h-3 w-3 text-slate-600" />
              <span className="text-amber-400 font-bold">Engineering Calculators</span>
            </nav>
          </div>
        </div>

        <section className="py-12 sm:py-16 border-b border-white/10 bg-[#06080f]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1 text-xs font-mono font-bold text-amber-300 mb-4">
              <Calculator className="h-3.5 w-3.5 text-amber-400" />
              <span>Free Interactive Workspace Tools // 2026 Edition</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight max-w-3xl mb-4">
              Desk Architecture &amp; Ergonomic Calculators
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-light">
              Stop guessing desk heights, monitor distances, and desk mat clearances. Model your exact workstation measurements before ordering hardware.
            </p>
          </div>
        </section>

        <section className="py-14 bg-[#07090e]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TOOLS.map((tool) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={tool.slug}
                    className="rounded-2xl border border-white/10 bg-[#0c0f18] p-6 sm:p-7 flex flex-col justify-between text-left hover:border-amber-400/40 transition shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-amber-300">
                          {tool.badge}
                        </span>
                      </div>

                      <h2 className="text-xl font-black text-white mb-2.5">
                        {tool.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6">
                        {tool.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                      <Link
                        href={tool.slug}
                        className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs font-mono inline-flex items-center gap-1.5 transition"
                      >
                        <span>Open Calculator</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>

                      <Link
                        href={tool.guideLink}
                        className="text-[11px] font-mono text-slate-400 hover:text-amber-300 underline"
                      >
                        {tool.guideLabel}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
