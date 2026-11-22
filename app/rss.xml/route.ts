import { NextResponse } from 'next/server';
import { PRODUCTS } from '@/data/products';
import { BLOG_POSTS } from '@/data/blog-posts';

export const dynamic = 'force-dynamic';

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const baseUrl = 'https://www.moderntrendsnow.store';

  // 1. Blog Post RSS Items
  const blogItemsXml = BLOG_POSTS.map((post) => {
    const pubDate = new Date(post.publishedDate).toUTCString();
    const safeTitle = post.title.replace(/&/g, 'and');
    const safeDesc = post.metaDescription.replace(/&/g, 'and');
    const safeImage = escapeXml(post.coverImage);

    return `    <item>
      <title><![CDATA[${safeTitle}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${safeDesc}]]></description>
      <enclosure url="${safeImage}" length="0" type="image/jpeg" />
      <media:content url="${safeImage}" medium="image" />
    </item>`;
  }).join('\n');

  // 2. Product Items
  const productItemsXml = PRODUCTS.map((product, index) => {
    const date = new Date(Date.now() - index * 3600 * 1000 * 6).toUTCString();
    const safeTitle = product.title.replace(/&/g, 'and');
    const safeTagline = product.tagline.replace(/&/g, 'and');
    const safeDescText = product.description.replace(/&/g, 'and');
    const safeSpecs = product.specs.map((s) => s.replace(/&/g, 'and')).join(', ');

    const cleanDescription = `${safeTagline} ${safeDescText} Tested for build integrity and direct Amazon Prime delivery. Specs: ${safeSpecs}. #desksetup #techgadgets #aestheticdesk #workspace #moderntrends #${product.category.toLowerCase()}`;
    const safeImageUrl = escapeXml(product.imageUrl);

    return `    <item>
      <title><![CDATA[${safeTitle}]]></title>
      <link>${baseUrl}#catalog</link>
      <guid isPermaLink="false">${product.id}-2026</guid>
      <pubDate>${date}</pubDate>
      <description><![CDATA[${cleanDescription}]]></description>
      <enclosure url="${safeImageUrl}" length="0" type="image/jpeg" />
      <media:content url="${safeImageUrl}" medium="image" />
    </item>`;
  }).join('\n');

  const allItemsXml = `${blogItemsXml}\n${productItemsXml}`;

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Modern Trends Now | Curated Aesthetic Living and Tech</title>
    <link>${baseUrl}</link>
    <description>Curating the top 1% viral workspace gadgets, ambient lighting, and aesthetic desk architecture.</description>
    <language>en-us</language>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
${allItemsXml}
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=1800, s-maxage=1800',
    },
  });
}
