'use client';

import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { Product, CATEGORIES } from '../data/products';
import { ArrowUpDown, Filter } from 'lucide-react';

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

  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (selectedCategory !== 'All Products') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [products, selectedCategory, sortBy]);

  return (
    <section id="catalog" className="py-12 sm:py-16 border-b border-white/10 bg-[#07090e]">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        
        {/* Header with Title and Filters */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white text-left">
              Featured Trending Finds
            </h2>
            <p className="text-xs text-slate-400 text-left mt-0.5">
              Showing {filteredProducts.length} verified products with Amazon Prime shipping
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
            {/* Category Pills (Touch friendly scroll on mobile) */}
            <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 no-scrollbar">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap transition ${
                    selectedCategory === cat
                      ? 'bg-amber-400 text-slate-950 font-bold'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-slate-300 shrink-0 ml-auto md:ml-0">
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
        </div>

        {/* 2-Columns on Mobile, 3 on Tablet, 4 on Desktop */}
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

      </div>
    </section>
  );
}
