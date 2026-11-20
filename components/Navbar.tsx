'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Bookmark, Search, Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  savedCount: number;
  onOpenSaved: () => void;
  onOpenSearch: () => void;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

export default function Navbar({
  savedCount,
  onOpenSaved,
  onOpenSearch,
  selectedCategory,
  onSelectCategory,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = ['All Products', 'Workspace', 'Lighting', 'Living', 'Gadgets'];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="border-b border-white/10 bg-[#06070a] px-4 py-2 text-center text-[11px] text-slate-300 font-medium">
        <span>⚡ Verified Amazon Prime 2-Day Shipping &nbsp;|&nbsp; 30-Day Hassle-Free Returns</span>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#090a0f]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          
          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Logo / Brand Name */}
          <Logo size="md" />

          {/* Desktop Category Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`transition-colors py-1 ${
                    active
                      ? 'text-amber-400 border-b-2 border-amber-400 font-bold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
            <a
              href="#journal"
              className="text-amber-400/90 hover:text-amber-400 transition-colors py-1 flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider"
            >
              <span>Field Guides</span>
            </a>
          </nav>

          {/* Action Icons (Search + Saved) */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition"
              title="Search Products"
            >
              <Search className="h-4 w-4" />
            </button>

            <button
              onClick={onOpenSaved}
              className="relative p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition"
              title="Saved Items"
            >
              <Bookmark className={`h-4 w-4 ${savedCount > 0 ? 'text-amber-400 fill-amber-400' : ''}`} />
              {savedCount > 0 && (
                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-[10px] font-black text-slate-950">
                  {savedCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#0c0e14] px-4 py-4 space-y-2 animate-in slide-in-from-top-2 duration-150 text-left">
            <p className="text-[10px] font-mono uppercase text-slate-500 px-3 pb-1">Categories</p>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  onSelectCategory(cat);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                  selectedCategory === cat
                    ? 'bg-amber-400/10 text-amber-400 font-bold'
                    : 'text-slate-200 hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
            <a
              href="#journal"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition text-amber-400 hover:bg-amber-400/10 flex items-center justify-between"
            >
              <span>Field Guides & Journal</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-400/20 text-amber-300">New</span>
            </a>
          </div>
        )}
      </header>
    </>
  );
}
