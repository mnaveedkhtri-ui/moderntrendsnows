'use client';

import React, { useState, useMemo } from 'react';
import TopMarquee from '../components/TopMarquee';
import Navbar from '../components/Navbar';
import HeroSpotlight from '../components/HeroSpotlight';
import CategoryShowcase from '../components/CategoryShowcase';
import InteractiveSetup from '../components/InteractiveSetup';
import CatalogGrid from '../components/CatalogGrid';
import EditorialManifesto from '../components/EditorialManifesto';
import JournalSection from '../components/JournalSection';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import SearchModal from '../components/SearchModal';
import SavedDrawer from '../components/SavedDrawer';
import ProductModal from '../components/ProductModal';
import { PRODUCTS, Product } from '../data/products';
import { Check } from 'lucide-react';

export default function HomePage() {
  const [products] = useState<Product[]>(PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Objects');
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Spotlight Product (First product)
  const spotlightProduct = useMemo(() => {
    return products.find((p) => p.isSpotlight) || products[0];
  }, [products]);

  // Saved Products Array
  const savedProducts = useMemo(() => {
    return products.filter((p) => savedIds.includes(p.id));
  }, [products, savedIds]);

  // Toast feedback
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  // Toggle Save / Bookmark
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

  return (
    <div className="min-h-screen flex flex-col bg-[#07080b] text-slate-100 selection:bg-amber-400 selection:text-black">
      {/* Toast Feedback */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl bg-amber-400 text-slate-950 px-4 py-2.5 text-xs font-black shadow-2xl animate-in slide-in-from-bottom-3 duration-200">
          <Check className="h-4 w-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Top Architectural Marquee */}
      <TopMarquee />

      {/* 2. Primary Navigation */}
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
        {/* 3. Hero Spotlight Section */}
        <HeroSpotlight
          spotlightProduct={spotlightProduct}
          onQuickView={(p) => setActiveModalProduct(p)}
        />

        {/* 4. Curated Disciplines Category Cards */}
        <CategoryShowcase
          onSelectCategory={(cat) => setSelectedCategory(cat)}
        />

        {/* 5. Interactive "Shop The Studio Desk" Lookbook */}
        <InteractiveSetup
          products={products}
          onQuickView={(p) => setActiveModalProduct(p)}
        />

        {/* 6. Complete Curated Catalog Grid */}
        <CatalogGrid
          products={products}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          savedIds={savedIds}
          onToggleSave={handleToggleSave}
          onQuickView={(p) => setActiveModalProduct(p)}
        />

        {/* 7. Curatorial Standard & Philosophy */}
        <EditorialManifesto />

        {/* 8. Studio Notes / Field Journal */}
        <JournalSection />

        {/* 9. VIP Drop Newsletter */}
        <Newsletter />
      </main>

      {/* 10. Comprehensive Footer */}
      <Footer />

      {/* Modal 1: Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={products}
        onSelectProduct={(p) => setActiveModalProduct(p)}
      />

      {/* Modal 2: Saved Collection Drawer */}
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

      {/* Modal 3: Deep Technical Specs Quick View */}
      <ProductModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        isSaved={activeModalProduct ? savedIds.includes(activeModalProduct.id) : false}
        onToggleSave={handleToggleSave}
      />
    </div>
  );
}
