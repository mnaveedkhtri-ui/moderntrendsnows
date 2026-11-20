'use client';

import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { Product, CATEGORIES } from '../data/products';
import { SlidersHorizontal, ArrowUpDown } from 'lucide-react';

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
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const sortedProducts = useMemo(() => {
    let list = [...products];

    if (selectedCategory !== 'All Objects') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    } else {
      list.sort((a, b) => b.viralScore - a.viralScore);
    }

    return list;
  }, [products, selectedCategory, sortBy]);

  return (
    <section id="catalog" className="py-16 border-b border-white/10 bg-[#07080b]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-amber-400">
                Complete Studio Index
              </span>
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs font-mono font-bold text-white">
                {sortedProducts.length} Objects
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              The Curated Archive
            </h2>
          </div>

          {/* Filter Pills & Sort Selector */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 p-1 overflow-x-auto max-w-full">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-mono transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-amber-400 text-slate-950 font-bold shadow'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
              <ArrowUpDown className="h-3.5 w-3.5 text-amber-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-xs text-white focus:outline-none cursor-pointer font-mono"
              >
                <option value="featured" className="bg-[#0e111a] text-white">Sort: Viral Rank</option>
                <option value="rating" className="bg-[#0e111a] text-white">Sort: Highest Rating</option>
                <option value="price-asc" className="bg-[#0e111a] text-white">Price: Low to High</option>
                <option value="price-desc" className="bg-[#0e111a] text-white">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isSaved={savedIds.includes(product.id)}
              onToggleSave={onToggleSave}
              onQuickView={onQuickView}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
