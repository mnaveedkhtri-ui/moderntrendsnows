import { NextResponse } from 'next/server';
import { PRODUCTS } from '@/data/products';

export const dynamic = 'force-dynamic';

export async function GET() {
  const baseUrl = 'https://moderntrendsnow.store';

  const itemsXml = PRODUCTS.map((product, index) => {
    // Generate staggered publication dates over the last few days
    const date = new Date(Date.now() - index * 3600 * 1000 * 6).toUTCString();
    const cleanDescription = `${product.tagline} ${product.description} Tested for build integrity and direct Amazon Prime delivery. Specs: ${product.specs.join(', ')}. #desksetup #techgadgets #aestheticdesk #workspace #moderntrends #${product.category.toLowerCase()}`;

    return `    <item>
      <title><![CDATA[${product.title}]]></title>
      <link>${baseUrl}#catalog</link>
      <guid isPermaLink="false">${product.id}-2026</guid>
      <pubDate>${date}</pubDate>
      <description><![CDATA[${cleanDescription}]]></description>
      <enclosure url="${product.imageUrl}" length="0" type="image/jpeg" />
      <media:content url="${product.imageUrl}" medium="image" />
    </item>`;
  }).join('\n');

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Modern Trends Now | Curated Aesthetic Living &amp; Tech</title>
    <link>${baseUrl}</link>
    <description>Curating the top 1% viral workspace gadgets, ambient lighting, and aesthetic desk architecture.</description>
    <language>en-us</language>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
${itemsXml}
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
