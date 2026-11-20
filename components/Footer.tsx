import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#06070a] py-12 text-xs text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-white/10 text-left">
          
          {/* Col 1 */}
          <div className="md:col-span-2">
            <div className="mb-3">
              <Logo size="sm" showTagline={false} />
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              An independent curation of viral desk essentials, ambient smart lighting, and modern lifestyle technology. Every product verified for performance and design appeal.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider mb-3">Categories & Editorial</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#catalog" className="hover:text-amber-400 transition">Workspace Essentials</a></li>
              <li><a href="#catalog" className="hover:text-amber-400 transition">Ambient Lighting</a></li>
              <li><a href="#catalog" className="hover:text-amber-400 transition">Smart Living</a></li>
              <li><a href="#catalog" className="hover:text-amber-400 transition">Unique Gadgets</a></li>
              <li><a href="#journal" className="hover:text-amber-400 transition text-amber-400/90 font-medium">Field Guides & Research</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider mb-3">Community & Trust</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#reviews" className="hover:text-amber-400 transition">Customer Reviews</a></li>
              <li><a href="https://www.pinterest.com/moderntrendsnowstore/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition">Official Pinterest Hub</a></li>
              <li><a href="/rss.xml" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition font-mono text-[11px]">Automated RSS 2.0 Feed</a></li>
              <li><a href="mailto:support@moderntrendsnow.store" className="hover:text-amber-400 transition">Contact Support</a></li>
              <li><span className="text-emerald-400">● 100% Secure Amazon Prime Checkout</span></li>
            </ul>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-slate-500 text-left">
          <p className="max-w-2xl leading-relaxed">
            <strong>Amazon Associates Disclosure:</strong> As an Amazon Associate I earn from qualifying purchases. Modern Trends Now is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by linking to Amazon.com. We independently test and select all featured products. Product prices and availability are accurate as of the date/time indicated and are subject to change.
          </p>
          <div className="shrink-0 text-slate-400">
            © 2026 Modern Trends Now. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
