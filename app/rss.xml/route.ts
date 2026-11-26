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

  // 0. Interactive Engineering Tools RSS Items
  const toolsList = [
    {
      title: 'Ergonomic Desk Height & Eye-Level Calculator (ISO 9241-5)',
      url: `${baseUrl}/tools/ergonomic-desk-height-calculator`,
      desc: 'Calculate exact seated desk height, motorized standing desk preset, chair seat elevation, and monitor riser clearance for your stature.',
      img: `${baseUrl}/blog/ergonomic-desk-height-chart.png`,
    },
    {
      title: 'Monitor Viewing Distance, PPI & Desk Load Calculator',
      url: `${baseUrl}/tools/monitor-viewing-distance-calculator`,
      desc: 'Verify Retina optical clarity distance and C-clamp desktop load safety across 24-inch, 27-inch, 32-inch, 34-inch, and 49-inch monitors.',
      img: `${baseUrl}/blog/monitor-distance-load-chart.png`,
    },
    {
      title: 'Desk Width, Keyboard Size & XXL Mat Fit Planner',
      url: `${baseUrl}/tools/desk-mat-keyboard-fit-calculator`,
      desc: 'Plan horizontal desktop clearance across 40 to 72-inch desks with 60%, 75%, TKL, and full keyboards plus XXL leather/felt mats.',
      img: `${baseUrl}/blog/desk-mat-fit-blueprint.png`,
    },
  ];

  const toolItemsXml = toolsList.map((tool) => {
    const pubDate = new Date('2026-11-26T00:00:00Z').toUTCString();
    return `    <item>
      <title><![CDATA[${tool.title}]]></title>
      <link>${tool.url}</link>
      <guid isPermaLink="true">${tool.url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${tool.desc}]]></description>
      <enclosure url="${escapeXml(tool.img)}" length="0" type="image/png" />
      <media:content url="${escapeXml(tool.img)}" medium="image" />
    </item>`;
  }).join('\n');

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
      <link>${baseUrl}/#product-${product.id}</link>
      <guid isPermaLink="false">${product.id}-2026</guid>
      <pubDate>${date}</pubDate>
      <description><![CDATA[${cleanDescription}]]></description>
      <enclosure url="${safeImageUrl}" length="0" type="image/jpeg" />
      <media:content url="${safeImageUrl}" medium="image" />
    </item>`;
  }).join('\n');

  const allItemsXml = `${toolItemsXml}\n${blogItemsXml}\n${productItemsXml}`;

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
