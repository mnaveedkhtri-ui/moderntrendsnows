import { NextResponse } from 'next/server';
import { PRODUCTS } from '@/data/products';

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

  const itemsXml = PRODUCTS.map((product, index) => {
    // Generate staggered publication dates over the last few days
    const date = new Date(Date.now() - index * 3600 * 1000 * 6).toUTCString();
    
    // Replace raw ampersands with 'and' for bulletproof XML parsing across all RSS readers
    const safeTitle = product.title.replace(/&/g, 'and');
    const safeTagline = product.tagline.replace(/&/g, 'and');
    const safeDescText = product.description.replace(/&/g, 'and');
    const safeSpecs = product.specs.map(s => s.replace(/&/g, 'and')).join(', ');
    
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

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Modern Trends Now | Curated Aesthetic Living and Tech</title>
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
      'Cache-Control': 'public, max-age=1800, s-maxage=1800',
    },
  });
}
