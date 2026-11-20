'use client';

import React, { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import EditorialManifesto from '../components/EditorialManifesto';
import Footer from '../components/Footer';
import { PRODUCTS, CATEGORIES, Product } from '../data/products';
import { Sparkles, Bookmark, Check } from 'lucide-react';

export default function HomePage() {
  const [products] = useState<Product[]>(PRODUCTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Curations');
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Toast helper
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  // Toggle Save / Wishlist
  const handleToggleSave = (id: string) => {
    setSavedIds((prev) => {
      const exists = prev.includes(id);
      if (exists) {
        triggerToast('Removed from saved collection');
        return prev.filter((item) => item !== id);
      } else {
        triggerToast('Saved to your private collection');
        return [...prev, id];
      }
    });
  };

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (showSavedOnly && !savedIds.includes(p.id)) {
        return false;
      }

      const matchesCat =
        selectedCategory === 'All Curations' || p.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.specs.some((s) => s.toLowerCase().includes(q));

      return matchesCat && matchesQuery;
    });
  }, [products, searchQuery, selectedCategory, showSavedOnly, savedIds]);

  return (
    <div className="min-h-screen flex flex-col bg-[#08090d]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl bg-amber-400 text-slate-950 px-4 py-2.5 text-xs font-black shadow-2xl animate-in slide-in-from-bottom-3 duration-200">
          <Check className="h-4 w-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        savedCount={savedIds.length}
        onOpenSaved={() => {
          setShowSavedOnly(!showSavedOnly);
          if (!showSavedOnly) {
            triggerToast('Displaying your saved objects');
          }
        }}
      />

      <main className="flex-1">
        {/* Hero Banner */}
        <Hero
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={(cat) => {
            setSelectedCategory(cat);
            setShowSavedOnly(false);
          }}
          categories={CATEGORIES}
          totalCount={products.length}
        />

        {/* Product Catalog Grid */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800/60">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-black uppercase tracking-wider text-white">
                  {showSavedOnly ? 'Your Saved Collection' : selectedCategory}
                </span>
                <span className="rounded-full bg-slate-800 px-2 py-0.5 text-xs font-bold text-amber-400">
                  {filteredProducts.length} Objects
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {showSavedOnly
                  ? 'Showing items bookmarked during this curatorial session.'
                  : 'Every item verified for ergonomic utility and certified Amazon Prime delivery.'}
              </p>
            </div>

            {showSavedOnly && (
              <button
                onClick={() => setShowSavedOnly(false)}
                className="text-xs font-bold text-amber-400 hover:underline"
              >
                ← Back to Full Collection
              </button>
            )}
          </div>

          {/* Grid */}
          {filteredProducts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-800 p-16 text-center my-8">
              <p className="text-sm text-slate-300 font-medium mb-2">
                No objects matched your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All Curations');
                  setShowSavedOnly(false);
                }}
                className="text-xs font-bold text-amber-400 hover:underline"
              >
                Reset Filters & Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isSaved={savedIds.includes(product.id)}
                  onToggleSave={handleToggleSave}
                  onQuickView={(p) => setActiveModalProduct(p)}
                />
              ))}
            </div>
          )}
        </section>

        {/* Editorial Standards Section */}
        <EditorialManifesto />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick View Spec Modal */}
      <ProductModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        isSaved={activeModalProduct ? savedIds.includes(activeModalProduct.id) : false}
        onToggleSave={handleToggleSave}
      />
    </div>
  );
}
