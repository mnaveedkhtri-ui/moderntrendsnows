import { PRODUCTS } from '../data/products';
import { JOURNAL_ARTICLES } from '../data/articles';

export function getStructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Modern Trends Now',
    url: 'https://www.moderntrendsnow.store',
    logo: 'https://www.moderntrendsnow.store/icon.svg',
    description: 'Curated architectural archive of viral modern workspace tech, ambient lighting, and aesthetic spatial gadgets.',
    sameAs: [
      'https://www.pinterest.com/moderntrendsnowstore/'
    ]
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Modern Trends Now',
    url: 'https://www.moderntrendsnow.store',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.moderntrendsnow.store/?s={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  const productCatalogSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Curated Modern Living & Workspace Tech Collection',
    numberOfItems: PRODUCTS.length,
    itemListElement: PRODUCTS.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.title,
        description: product.description,
        image: product.imageUrl,
        sku: product.id,
        brand: {
          '@type': 'Brand',
          name: 'Modern Trends Now'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: product.rating.toString(),
          reviewCount: product.reviewsCount.toString(),
          bestRating: '5',
          worstRating: '1'
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: product.price.toFixed(2),
          availability: 'https://schema.org/InStock',
          url: product.amazonUrl,
          seller: {
            '@type': 'Organization',
            name: 'Amazon'
          }
        }
      }
    }))
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
          text: 'All orders featured on Modern Trends Now route directly through verified Amazon Prime fulfillment centers. This ensures fast 2-day delivery across the United States, complete with real-time courier tracking and insured shipping.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is your return and refund policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Every product comes backed by Amazon 30-day no-questions-asked return guarantee. If an item arrives damaged, defective, or simply does not match your setup, you can initiate a free return and receive a 100% full refund.'
        }
      },
      {
        '@type': 'Question',
        name: 'How does the editorial team test and verify products?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We evaluate hundreds of viral social media products every month. We filter out cheap hollow plastics and test build durability, noise levels in dB, thermal heat dissipation, and genuine user ratings before featuring any object in our archive.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are these products covered by a warranty?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. All verified brand manufacturers provide a minimum 12-month hardware warranty against defects. Extended protection plans are also selectable during Amazon checkout.'
        }
      }
    ]
  };

  const articlesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Modern Trends Now Field Guides & Research',
    numberOfItems: JOURNAL_ARTICLES.length,
    itemListElement: JOURNAL_ARTICLES.map((article, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'BlogPosting',
        headline: article.title,
        description: article.summary,
        image: article.coverImage,
        datePublished: article.publishedDate,
        author: {
          '@type': 'Organization',
          name: article.author
        },
        publisher: {
          '@type': 'Organization',
          name: 'Modern Trends Now',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.moderntrendsnow.store/icon.svg'
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://www.moderntrendsnow.store/#journal`
        }
      }
    }))
  };

  return [organizationSchema, websiteSchema, productCatalogSchema, faqSchema, articlesSchema];
}
