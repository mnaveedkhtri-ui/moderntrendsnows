'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Search, X, ExternalLink, ArrowRight, Star } from 'lucide-react';
import { Product } from '../data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export default function SearchModal({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}: SearchModalProps) {
  const [query, setQuery] = useState('');

  // Keyboard shortcut listener for Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = products.filter((p) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      p.title.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.specs.some((s) => s.toLowerCase().includes(q))
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-2xl border border-white/15 bg-[#0d1017] p-4 shadow-2xl overflow-hidden">
        
        {/* Search Input Bar */}
        <div className="relative flex items-center border-b border-white/10 pb-3">
          <Search className="h-5 w-5 text-amber-400 ml-2" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type object name, material, or category (e.g. lamp, aluminum, rgb)..."
            className="w-full bg-transparent px-3 text-sm text-white placeholder-slate-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto divide-y divide-white/5 py-2">
          {results.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-500">
              No matching objects found in the 2026 archive.
            </div>
          ) : (
            results.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="flex items-center justify-between gap-4 p-3 rounded-xl hover:bg-white/5 cursor-pointer transition"
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 rounded-lg overflow-hidden bg-slate-900 border border-white/10 shrink-0">
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xs font-bold text-white hover:text-amber-400 transition">
                      {product.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 line-clamp-1">{product.tagline}</p>
                    <div className="flex items-center gap-2 text-[10px] text-slate-500 mt-0.5 font-mono">
                      <span>{product.category}</span>
                      <span>•</span>
                      <span className="text-amber-400 font-bold">${product.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="rounded bg-white/10 px-2 py-1 text-[10px] font-mono text-slate-300">
                    Inspect
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Hint */}
        <div className="border-t border-white/10 pt-2 px-2 flex items-center justify-between text-[10px] font-mono text-slate-500">
          <span>{results.length} Objects indexed</span>
          <span>Press ESC to close</span>
        </div>

      </div>
    </div>
  );
}
