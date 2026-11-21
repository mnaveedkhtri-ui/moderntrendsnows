'use client';

import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { Product, CATEGORIES } from '../data/products';
import { ArrowUpDown, Search, Sparkles } from 'lucide-react';

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
  const [sortBy, setSortBy] = useState<'rating' | 'price-asc' | 'price-desc'>('rating');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    let list = [...products];

    // Category filter
    if (selectedCategory !== 'All Products') {
      list = list.filter((p) => p.category === selectedCategory);
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
    } else {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [products, selectedCategory, searchQuery, sortBy]);

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
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search 22 desk objects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/60 focus:bg-white/10 transition"
            />
          </div>
        </div>

        {/* Category Pills & Sort Controls Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-8">
          
          {/* Category Filter Pills (Horizontal Scroll on Mobile) */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`rounded-xl px-3.5 py-2 text-xs font-medium whitespace-nowrap transition-all border ${
                    isActive
                      ? 'bg-amber-400 text-slate-950 font-black border-amber-400 shadow-md shadow-amber-500/20'
                      : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300 shrink-0 ml-auto sm:ml-0">
            <ArrowUpDown className="h-3.5 w-3.5 text-amber-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent text-xs text-white focus:outline-none cursor-pointer"
            >
              <option value="rating" className="bg-[#0e111a] text-white">Top Rated</option>
              <option value="price-asc" className="bg-[#0e111a] text-white">Price: Low to High</option>
              <option value="price-desc" className="bg-[#0e111a] text-white">Price: High to Low</option>
            </select>
          </div>

        </div>

        {/* Empty Search State */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center text-slate-400">
            <p className="text-base font-bold text-white mb-1">No matching objects found.</p>
            <p className="text-xs mb-4">Try clearing your search query or switching categories.</p>
            <button
              onClick={() => {
                setSearchQuery('');
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
                onToggleSave={onToggleSave}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
