import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, BlogPost } from '../../../data/blog-posts';
import { PRODUCTS, Product } from '../../../data/products';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ShareButton from '../../../components/ShareButton';
import {
  Clock,
  Calendar,
  ChevronRight,
  Share2,
  ExternalLink,
  Star,
  CheckCircle2,
  ShieldCheck,
  Truck,
  ArrowRight,
  BookOpen,
  HelpCircle,
  Sparkles,
} from 'lucide-react';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};

  const pageUrl = `https://www.moderntrendsnow.store/blog/${post.slug}`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: pageUrl,
      type: 'article',
      publishedTime: post.publishedDate,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.coverImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.coverImage],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const pageUrl = `https://www.moderntrendsnow.store/blog/${post.slug}`;

  // Resolve featured products
  const resolvedProducts = post.featuredProducts.reduce<
    { product: Product; badge?: string; verdict: string }[]
  >((acc, fp) => {
    const prod = PRODUCTS.find((p) => p.id === fp.productId);
    if (prod) {
      acc.push({ product: prod, badge: fp.badge, verdict: fp.verdict });
    }
    return acc;
  }, []);

  // Related posts
  const relatedPosts = BLOG_POSTS.filter((p) => post.relatedSlugs.includes(p.slug) || p.slug !== post.slug).slice(0, 2);

  // Structured Data Schemas
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: [
      post.coverImage,
      ...(post.inArticleImages ? post.inArticleImages.map((img) => img.url) : []),
    ],
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    keywords: post.focusKeywords?.join(', '),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
      url: 'https://www.moderntrendsnow.store/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Modern Trends Now',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.moderntrendsnow.store/icon.svg',
      },
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.moderntrendsnow.store',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Field Guides',
        item: 'https://www.moderntrendsnow.store/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: pageUrl,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {post.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="min-h-screen flex flex-col bg-[#07090e] text-slate-100 selection:bg-amber-400 selection:text-black">
        {/* Main Navbar */}
        <Navbar />

        <main className="flex-1">
          {/* Breadcrumb Path */}
          <div className="border-b border-white/10 bg-[#05070d]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3.5">
              <nav className="flex items-center gap-2 text-xs font-mono text-slate-400 truncate">
                <Link href="/" className="hover:text-white transition">Home</Link>
                <ChevronRight className="h-3 w-3 text-slate-600 shrink-0" />
                <Link href="/blog" className="hover:text-white transition">Field Guides</Link>
                <ChevronRight className="h-3 w-3 text-slate-600 shrink-0" />
                <span className="text-amber-400 font-bold truncate">{post.title}</span>
              </nav>
            </div>
          </div>

          {/* Article Header & Byline */}
          <article className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-16">
            
            <header className="max-w-4xl mx-auto text-left mb-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1 text-xs font-mono font-bold text-amber-300 mb-4">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>{post.category}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.15] mb-5">
                {post.title}
              </h1>

              <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed mb-6">
                {post.tagline}
              </p>

              {/* Author and Date Strip */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-amber-400 relative">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{post.author.name}</div>
                    <div className="text-[11px] text-slate-400">{post.author.role}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-amber-400" />
                    <span>Published {post.publishedDate}</span>
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-amber-400" />
                    <span>{post.readTime}</span>
                  </span>
                </div>
              </div>
            </header>

            {/* Main Visual Image */}
            <div className="max-w-5xl mx-auto relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-slate-900 border border-white/10 mb-12 shadow-2xl">
              <Image
                src={post.coverImage}
                alt={post.coverImageAlt}
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Grid Layout: Main Body Content + Sticky Table of Contents */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto text-left">
              
              {/* Left / Center: Main Text (8 Cols) */}
              <div className="lg:col-span-8">
                <div
                  className="blog-prose prose prose-invert prose-amber max-w-none text-slate-300"
                  dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                />

                {/* Author E-E-A-T Box */}
                <div className="mt-12 p-6 rounded-2xl border border-white/10 bg-[#0c0f18] flex flex-col sm:flex-row items-center sm:items-start gap-5 text-left">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-slate-900 border-2 border-amber-400 shrink-0 shadow-lg">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1 text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-2">
                      <span className="text-sm font-bold text-white font-mono">{post.author.name}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-bold">
                        Verified Curator
                      </span>
                    </div>
                    <div className="text-xs text-amber-400 font-mono">{post.author.role}</div>
                    <p className="text-xs text-slate-300 font-light leading-relaxed pt-1">
                      Researches biomechanics, optical lux physics, and architectural desktop ergonomics. Founder of Modern Trends Now and passionate advocate for clutter-free creative workspaces.
                    </p>
                    <div className="pt-2 flex items-center justify-center sm:justify-start gap-4 text-xs font-mono text-slate-400">
                      <Link href="/about" className="hover:text-amber-400 transition underline">
                        Full Editorial Bio &rarr;
                      </Link>
                      <Link href="/contact" className="hover:text-amber-400 transition underline">
                        Contact Author
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Embedded Featured Products Showcase */}
                {resolvedProducts.length > 0 && (
                  <div id="curated-anchors" className="mt-14 pt-8 border-t border-white/10 space-y-6 scroll-mt-24">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>Lab Tested Hardware Anchors</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {resolvedProducts.map(({ product, badge, verdict }) => {
                        const discount = Math.round(
                          ((product.compareAtPrice - product.price) / product.compareAtPrice) * 100
                        );
                        return (
                          <div
                            key={product.id}
                            className="rounded-2xl border border-white/10 bg-[#0d101b] p-4 flex flex-col justify-between hover:border-amber-400/40 transition shadow-lg"
                          >
                            <div>
                              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900 mb-3 border border-white/5">
                                <Image
                                  src={product.imageUrl}
                                  alt={product.title}
                                  fill
                                  className="object-cover"
                                />
                                {badge && (
                                  <span className="absolute top-2 left-2 rounded bg-amber-400 text-slate-950 font-black text-[9px] px-2 py-0.5 uppercase tracking-wider font-mono">
                                    {badge}
                                  </span>
                                )}
                              </div>

                              <span className="text-[10px] font-mono text-amber-400 font-bold uppercase block mb-1">
                                {product.category}
                              </span>

                              <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-1 mb-1">
                                {product.title}
                              </h4>

                              <p className="text-[11px] text-slate-300 leading-relaxed italic mb-3">
                                &ldquo;{verdict}&rdquo;
                              </p>

                              <div className="flex items-baseline gap-2 mb-3">
                                <span className="text-base font-black text-white font-mono">${product.price.toFixed(2)}</span>
                                <span className="text-xs text-slate-500 line-through font-mono">${product.compareAtPrice.toFixed(2)}</span>
                                <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded ml-auto">
                                  Save {discount}%
                                </span>
                              </div>
                            </div>

                            <a
                              href={product.amazonUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 py-2.5 text-xs font-black text-slate-950 transition active:scale-95"
                            >
                              <span>View on Amazon Prime</span>
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* FAQ Section */}
                {post.faqs.length > 0 && (
                  <section id="expert-faq" className="mt-14 pt-8 border-t border-white/10 space-y-4 scroll-mt-24">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                      <HelpCircle className="h-3.5 w-3.5 text-amber-400" />
                      <span>Frequently Asked Questions</span>
                    </div>

                    <h3 className="text-2xl font-black text-white mb-4">
                      Expert Architectural Q&amp;A
                    </h3>

                    <div className="space-y-3">
                      {post.faqs.map((faq, i) => (
                        <div
                          key={i}
                          className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10"
                        >
                          <h4 className="font-bold text-white text-sm sm:text-base mb-2">
                            {faq.question}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>

              {/* Right: Sticky Sidebar (4 Cols) */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Table of Contents */}
                <div className="sticky top-24 rounded-2xl border border-white/10 bg-[#0c0f18] p-5 shadow-xl">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold block mb-3">
                    Table of Contents
                  </span>

                  <nav className="space-y-2 text-xs font-mono">
                    {post.tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-slate-400 hover:text-white transition py-1 border-l-2 border-transparent hover:border-amber-400 pl-2.5"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>

                  {/* Share Box */}
                  <div className="mt-6 pt-5 border-t border-white/10">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-2">
                      Share Research
                    </span>
                    <ShareButton url={pageUrl} />
                  </div>

                  {/* Quick Setup Studio CTA */}
                  <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-400/20 text-left">
                    <div className="text-[11px] font-mono text-amber-400 font-bold mb-1">
                      Interactive Studio
                    </div>
                    <p className="text-xs text-slate-300 mb-3 font-light">
                      Mix &amp; match these physical objects with our live 3-piece setup calculator.
                    </p>
                    <Link
                      href="/#setup-builder"
                      className="inline-flex items-center gap-1 text-xs font-mono font-bold text-white hover:text-amber-300"
                    >
                      <span>Launch Setup Studio</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>

              </div>

            </div>

            {/* Related Research Guides */}
            {relatedPosts.length > 0 && (
              <div className="mt-20 pt-10 border-t border-white/10 max-w-6xl mx-auto text-left">
                <h3 className="text-xl sm:text-2xl font-black text-white mb-6">
                  Continue Reading Field Guides
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedPosts.map((rp) => (
                    <Link
                      key={rp.slug}
                      href={`/blog/${rp.slug}`}
                      className="group flex gap-4 p-4 rounded-2xl border border-white/10 bg-[#0c0f18] hover:border-amber-400/40 hover:bg-[#101422] transition shadow-md"
                    >
                      <div className="relative w-28 h-20 rounded-xl overflow-hidden bg-slate-900 shrink-0 border border-white/5">
                        <Image
                          src={rp.coverImage}
                          alt={rp.coverImageAlt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-mono text-amber-400 uppercase font-bold">
                            {rp.category}
                          </span>
                          <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition line-clamp-2 leading-snug">
                            {rp.title}
                          </h4>
                        </div>
                        <div className="text-[10px] font-mono text-slate-500">
                          {rp.readTime}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </article>
        </main>

        <Footer />
      </div>
    </>
  );
}
