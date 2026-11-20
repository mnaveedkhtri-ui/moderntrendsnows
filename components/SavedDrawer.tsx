'use client';

import React from 'react';
import Image from 'next/image';
import { X, Trash2, ExternalLink, Bookmark, ArrowRight } from 'lucide-react';
import { Product } from '../data/products';

interface SavedDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedProducts: Product[];
  onRemove: (id: string) => void;
  onClearAll: () => void;
}

export default function SavedDrawer({
  isOpen,
  onClose,
  savedProducts,
  onRemove,
  onClearAll,
}: SavedDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md border-l border-white/10 bg-[#0c0e14] p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Bookmark className="h-5 w-5 text-amber-400 fill-amber-400" />
                <h3 className="text-base font-bold text-white">Your Saved Collection</h3>
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs font-mono font-bold text-amber-400">
                  {savedProducts.length}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* List */}
            <div className="mt-4 max-h-[calc(100vh-220px)] overflow-y-auto space-y-3 pr-1">
              {savedProducts.length === 0 ? (
                <div className="py-20 text-center text-xs text-slate-500">
                  <Bookmark className="h-8 w-8 text-slate-700 mx-auto mb-2" />
                  <p>Your saved collection is empty.</p>
                  <p className="mt-1 text-[11px] text-slate-600">
                    Bookmark products by clicking the ribbon icon on any object card.
                  </p>
                </div>
              ) : (
                savedProducts.map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-left"
                  >
                    <div className="relative h-16 w-16 rounded-lg overflow-hidden bg-slate-900 shrink-0">
                      <Image src={p.imageUrl} alt={p.title} fill className="object-cover" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-white truncate">{p.title}</h4>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs font-black text-white">${p.price.toFixed(2)}</span>
                        <span className="text-[10px] text-slate-500 line-through">
                          ${p.compareAtPrice.toFixed(2)}
                        </span>
                      </div>
                      <a
                        href={p.amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-400 hover:underline mt-1"
                      >
                        Buy on Amazon <ExternalLink className="h-2.5 w-2.5" />
                      </a>
                    </div>

                    <button
                      onClick={() => onRemove(p.id)}
                      className="p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-red-400/10 transition"
                      title="Remove"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Footer Actions */}
          {savedProducts.length > 0 && (
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
              <button
                onClick={onClearAll}
                className="text-slate-400 hover:text-red-400 transition"
              >
                Clear all
              </button>
              <button
                onClick={onClose}
                className="rounded-xl bg-white px-5 py-2 text-xs font-bold text-slate-950 hover:bg-amber-400 transition"
              >
                Back to Archive
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
