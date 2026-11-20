'use client';

import React, { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import CatalogGrid from '../components/CatalogGrid';
import Testimonials from '../components/Testimonials';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import ProductModal from '../components/ProductModal';
import SearchModal from '../components/SearchModal';
import SavedDrawer from '../components/SavedDrawer';
import { PRODUCTS, Product } from '../data/products';
import { Check } from 'lucide-react';

export default function HomePage() {
  const [products] = useState<Product[]>(PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Saved items list
  const savedProducts = useMemo(() => {
    return products.filter((p) => savedIds.includes(p.id));
  }, [products, savedIds]);

  // Toast feedback
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2200);
  };

  // Toggle Save item
  const handleToggleSave = (id: string) => {
    setSavedIds((prev) => {
      const exists = prev.includes(id);
      if (exists) {
        triggerToast('Removed from saved list');
        return prev.filter((item) => item !== id);
      } else {
        triggerToast('Saved to your wishlist');
        return [...prev, id];
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#07090e] text-slate-100 selection:bg-amber-400 selection:text-black">
      {/* Toast Feedback */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-xl bg-amber-400 text-slate-950 px-4 py-2.5 text-xs font-black shadow-2xl animate-in slide-in-from-bottom-2 duration-150">
          <Check className="h-4 w-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Navbar */}
      <Navbar
        savedCount={savedIds.length}
        onOpenSaved={() => setIsSavedDrawerOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <main className="flex-1">
        {/* 2. Hero Banner */}
        <HeroBanner
          onShopClick={() => {
            document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3. Catalog Grid */}
        <CatalogGrid
          products={products}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          savedIds={savedIds}
          onToggleSave={handleToggleSave}
          onQuickView={(p) => setActiveModalProduct(p)}
        />

        {/* 4. Verified Community Reviews */}
        <Testimonials />

        {/* 5. FAQs */}
        <FAQSection />
      </main>

      {/* 6. Footer */}
      <Footer />

      {/* Quick View Modal */}
      <ProductModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        isSaved={activeModalProduct ? savedIds.includes(activeModalProduct.id) : false}
        onToggleSave={handleToggleSave}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={products}
        onSelectProduct={(p) => setActiveModalProduct(p)}
      />

      {/* Saved Drawer */}
      <SavedDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedProducts={savedProducts}
        onRemove={handleToggleSave}
        onClearAll={() => {
          setSavedIds([]);
          triggerToast('Saved collection cleared');
        }}
      />
    </div>
  );
}
