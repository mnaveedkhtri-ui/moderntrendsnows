'use client';

import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { Product, CATEGORIES } from '../data/products';
import { ArrowUpDown, Search, Sparkles, Filter, SlidersHorizontal } from 'lucide-react';
import { sound } from '../lib/sound';

interface CatalogGridProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  savedIds: string[];
  onToggleSave: (id: string) => void;
  onQuickView: (product: Product) => void;
}

export default function CatalogGrid({
  products,
  selectedCategory,
  onSelectCategory,
  savedIds,
  onToggleSave,
  onQuickView,
}: CatalogGridProps) {
  const [sortBy, setSortBy] = useState<'rating' | 'price-asc' | 'price-desc' | 'discount'>('rating');
  const [searchQuery, setSearchQuery] = useState('');
  const [budgetFilter, setBudgetFilter] = useState<'all' | 'under-30' | '30-60' | '60-plus'>('all');

  // Count items per category dynamically
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { 'All Products': products.length };
    products.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [products]);

  const filteredProducts = useMemo(() => {
    let list = [...products];

    // Category filter
    if (selectedCategory !== 'All Products') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    // Budget filter
    if (budgetFilter === 'under-30') {
      list = list.filter((p) => p.price < 30);
    } else if (budgetFilter === '30-60') {
      list = list.filter((p) => p.price >= 30 && p.price <= 60);
    } else if (budgetFilter === '60-plus') {
      list = list.filter((p) => p.price > 60);
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.specs.some((s) => s.toLowerCase().includes(q))
      );
    }

    // Sorting
    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'discount') {
      list.sort((a, b) => {
        const discA = (a.compareAtPrice - a.price) / a.compareAtPrice;
        const discB = (b.compareAtPrice - b.price) / b.compareAtPrice;
        return discB - discA;
      });
    } else {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [products, selectedCategory, budgetFilter, searchQuery, sortBy]);

  return (
    <section id="catalog" className="py-12 sm:py-16 border-b border-white/10 bg-[#07090e]">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        
        {/* Header with Title and Search/Filters */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold">
                Verified Curations Archive
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white text-left tracking-tight">
              Featured Trending Finds
            </h2>
            <p className="text-xs text-slate-400 text-left mt-0.5">
              Showing {filteredProducts.length} curated objects with verified Amazon Prime fulfillment
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search 38 verified desk objects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/60 focus:bg-white/10 transition"
            />
          </div>
        </div>

        {/* Category Pills Bar (Horizontal Scroll on Mobile) */}
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-2 mb-4 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            const count = categoryCounts[cat] || 0;
            return (
              <button
                key={cat}
                onClick={() => {
                  sound.playTick();
                  onSelectCategory(cat);
                }}
                className={`rounded-xl px-3.5 py-2 text-xs font-medium whitespace-nowrap transition-all border flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 font-black border-amber-400 shadow-md shadow-amber-500/20'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-slate-950/20 text-slate-950 font-bold' : 'bg-white/10 text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Secondary Filter & Sort Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pt-2 border-t border-white/5 text-xs font-mono">
          
          {/* Budget Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto">
            <span className="text-slate-500 text-[11px] mr-1 hidden sm:inline">Price:</span>
            {[
              { id: 'all', label: 'All Budgets' },
              { id: 'under-30', label: 'Under $30' },
              { id: '30-60', label: '$30 - $60' },
              { id: '60-plus', label: '$60+' },
            ].map((b) => (
              <button
                key={b.id}
                onClick={() => {
                  sound.playTick();
                  setBudgetFilter(b.id as any);
                }}
                className={`px-2.5 py-1 rounded-lg text-[11px] transition border ${
                  budgetFilter === b.id
                    ? 'border-amber-400/80 bg-amber-400/15 text-amber-300 font-bold'
                    : 'border-white/5 bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 shrink-0 ml-auto">
            <ArrowUpDown className="h-3.5 w-3.5 text-amber-400" />
            <select
              value={sortBy}
              onChange={(e) => {
                sound.playTick();
                setSortBy(e.target.value as any);
              }}
              className="bg-transparent text-xs text-white focus:outline-none cursor-pointer"
            >
              <option value="rating" className="bg-[#0e111a] text-white">Top Rated</option>
              <option value="discount" className="bg-[#0e111a] text-white">Biggest Discount %</option>
              <option value="price-asc" className="bg-[#0e111a] text-white">Price: Low to High</option>
              <option value="price-desc" className="bg-[#0e111a] text-white">Price: High to Low</option>
            </select>
          </div>

        </div>

        {/* Empty Search State */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center text-slate-400">
            <p className="text-base font-bold text-white mb-1">No matching objects found.</p>
            <p className="text-xs mb-4">Try clearing your budget filter or switching categories.</p>
            <button
              onClick={() => {
                sound.playTick();
                setSearchQuery('');
                setBudgetFilter('all');
                onSelectCategory('All Products');
              }}
              className="px-4 py-2 rounded-xl bg-amber-400 text-slate-950 text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          /* Responsive Product Grid: 2 on Mobile, 3 on Tablet, 4 on Desktop */
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isSaved={savedIds.includes(product.id)}
                onToggleSave={(id) => {
                  sound.playPop();
                  onToggleSave(id);
                }}
                onQuickView={(p) => {
                  sound.playTick();
                  onQuickView(p);
                }}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
