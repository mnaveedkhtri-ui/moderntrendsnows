import { PRODUCTS } from '../data/products';
import { BLOG_POSTS } from '../data/blog-posts';

export function getStructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Modern Trends Now',
    url: 'https://www.moderntrendsnow.store',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.moderntrendsnow.store/brand-logo.png',
      width: 512,
      height: 512,
    },
    description:
      'Independent editorial archive and workspace engineering toolkit curating modern desk setups, ambient lighting, and ergonomic hardware.',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@moderntrendsnow.store',
      contactType: 'customer support',
    },
    sameAs: ['https://www.pinterest.com/moderntrendsnowstore/'],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Modern Trends Now',
    url: 'https://www.moderntrendsnow.store',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.moderntrendsnow.store/?s={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  // Editorial ItemList without unverified merchant Offer/AggregateRating claims
  const curatedCatalogSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Curated Modern Living & Workspace Tech Archive',
    description:
      'Editorially researched desk architecture gadgets, ambient lighting, and ergonomic accessories linked to Amazon fulfillment.',
    numberOfItems: PRODUCTS.length,
    itemListElement: PRODUCTS.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Thing',
        name: product.title,
        description: product.tagline,
        image: product.imageUrl,
        url: `https://www.moderntrendsnow.store/#product-${product.id}`,
      },
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does shipping and order fulfillment work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All orders featured on Modern Trends Now route directly through Amazon fulfillment centers. Eligibility for 2-day Prime delivery, courier tracking, and insured shipping is verified at Amazon checkout.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is your return and refund policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Purchases made through our outbound Amazon affiliate links follow Amazon standard 30-day return and refund guarantees as stated on the seller listing at checkout.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the editorial team evaluate featured products?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our editorial team benchmarks materials, optical glare specs, acoustic dampening properties, and long-term user feedback against ISO 9241-5 and ANSI/BIFMA workspace standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are these products covered by a manufacturer warranty?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Manufacturer hardware warranties and optional protection plans vary by brand and are displayed directly on the official Amazon product page before purchase.',
        },
      },
    ],
  };

  const articlesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Modern Trends Now Field Guides & Engineering Tools',
    numberOfItems: BLOG_POSTS.length,
    itemListElement: BLOG_POSTS.map((article, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'BlogPosting',
        headline: article.title,
        description: article.metaDescription,
        image: article.coverImage,
        datePublished: article.publishedDate,
        author: {
          '@type': 'Person',
          name: article.author.name,
          jobTitle: article.author.role,
          url: 'https://www.moderntrendsnow.store/about',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Modern Trends Now',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.moderntrendsnow.store/brand-logo.png',
            width: 512,
            height: 512,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://www.moderntrendsnow.store/blog/${article.slug}`,
        },
      },
    })),
  };

  return [organizationSchema, websiteSchema, curatedCatalogSchema, faqSchema, articlesSchema];
}
