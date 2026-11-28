import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { ShieldCheck, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#06070a] py-14 text-xs text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10 text-left">
          
          {/* Col 1: Brand & E-E-A-T Identity */}
          <div className="space-y-4">
            <Logo size="sm" showTagline={false} />
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              An independent architectural studio and editorial archive curating the top 1% of viral workspace gadgets, optical luminaires, and tactile focus objects.
            </p>
            <div className="space-y-1.5 text-[11px] font-mono text-slate-500 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                <span>Latifabad, Hyderabad, Sindh, Pakistan</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                <a href="mailto:support@moderntrendsnow.store" className="hover:text-amber-300 transition">
                  support@moderntrendsnow.store
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Curated Catalog */}
          <div>
            <h4 className="font-bold text-white uppercase text-[11px] font-mono tracking-wider mb-4">
              Curated Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><Link href="/#catalog" className="hover:text-amber-400 transition">Workspace Essentials (23 Objects)</Link></li>
              <li><Link href="/#catalog" className="hover:text-amber-400 transition">Ambient &amp; Smart Lighting (11 Objects)</Link></li>
              <li><Link href="/#catalog" className="hover:text-amber-400 transition">Cozy Living &amp; Atmosphere (11 Objects)</Link></li>
              <li><Link href="/#catalog" className="hover:text-amber-400 transition">Tactile Everyday Gadgets (13 Objects)</Link></li>
              <li><Link href="/#setup-builder" className="hover:text-amber-400 transition text-amber-400/90 font-mono">⚡ Interactive 3-Piece Setup Studio</Link></li>
            </ul>
          </div>

          {/* Col 3: Engineering Tools & Research */}
          <div>
            <h4 className="font-bold text-white uppercase text-[11px] font-mono tracking-wider mb-4">
              Tools &amp; Field Guides
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><Link href="/tools" className="hover:text-amber-400 transition font-medium text-emerald-400">All Workspace Calculators</Link></li>
              <li><Link href="/tools/ergonomic-desk-height-calculator" className="hover:text-amber-400 transition">Ergonomic Desk Height Calculator</Link></li>
              <li><Link href="/tools/chair-footrest-height-calculator" className="hover:text-amber-400 transition">Chair &amp; Footrest Height Calculator</Link></li>
              <li><Link href="/tools/monitor-viewing-distance-calculator" className="hover:text-amber-400 transition">Monitor Distance &amp; Load Tool</Link></li>
              <li><Link href="/tools/desk-mat-keyboard-fit-calculator" className="hover:text-amber-400 transition">Desk &amp; XXL Mat Fit Planner</Link></li>
              <li><Link href="/research/2026-ergonomic-desk-standards" className="hover:text-amber-400 transition font-bold text-amber-400">2026 Ergonomic Benchmark Dataset</Link></li>
              <li><Link href="/blog" className="hover:text-amber-400 transition font-medium text-white">All Architectural Field Guides</Link></li>
              <li><a href="https://www.pinterest.com/moderntrendsnowstore/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition">Official Pinterest Visual Boards</a></li>
              <li><a href="/rss.xml" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition font-mono text-[11px]">Automated RSS 2.0 Feed</a></li>
            </ul>
          </div>

          {/* Col 4: Trust, E-E-A-T & AdSense Compliance */}
          <div>
            <h4 className="font-bold text-white uppercase text-[11px] font-mono tracking-wider mb-4">
              Institutional Trust &amp; Legal
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><Link href="/about" className="hover:text-amber-400 transition font-medium text-white">About Us &amp; Founder Bio</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400 transition font-medium text-white">Contact Editorial Desk</Link></li>
              <li><Link href="/privacy" className="hover:text-amber-400 transition">Privacy Policy (GDPR / CCPA)</Link></li>
              <li><Link href="/terms" className="hover:text-amber-400 transition">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="hover:text-amber-400 transition">Affiliate &amp; Health Disclaimer</Link></li>
              <li className="pt-1 text-emerald-400 font-mono text-[11px] flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Verified Amazon Prime Checkout</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Regulatory & Affiliate Disclosure */}
        <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-slate-500 text-left">
          <p className="max-w-3xl leading-relaxed font-light">
            <strong>Amazon Associates &amp; Commercial Disclosure:</strong> As an Amazon Associate I earn from qualifying purchases. Modern Trends Now is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by linking to Amazon.com. We independently test and curate all featured objects. Product prices and availability are accurate as of the date indicated and are subject to change.
          </p>
          <div className="shrink-0 text-slate-400 font-mono text-[11px]">
            &copy; 2026 Modern Trends Now. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
