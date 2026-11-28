import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import { PRODUCTS } from '@/data/products';
import { BLOG_POSTS } from '@/data/blog-posts';

export const dynamic = 'force-dynamic';

const BASE_URL = 'https://www.moderntrendsnow.store';

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function clampPinTitle(raw: string, maxLen = 98): string {
  const clean = raw.replace(/\s+/g, ' ').trim();
  if (clean.length <= maxLen) return clean;
  const sliced = clean.slice(0, maxLen);
  const lastSpace = sliced.lastIndexOf(' ');
  return (lastSpace > 45 ? sliced.slice(0, lastSpace) : sliced).replace(/[:\-|,&]+$/, '').trim();
}

function resolveImageMeta(rawUrl: string): { url: string; type: string; length: number } {
  const fullUrl = rawUrl.startsWith('/') ? `${BASE_URL}${rawUrl}` : rawUrl;
  const type = fullUrl.toLowerCase().includes('.png') ? 'image/png' : 'image/jpeg';
  let length = 180000;
  try {
    if (fullUrl.startsWith(BASE_URL)) {
      const rel = fullUrl.slice(BASE_URL.length).replace(/^\//, '');
      const localPath = path.join(process.cwd(), 'public', rel);
      if (fs.existsSync(localPath)) {
        length = fs.statSync(localPath).size || 180000;
      }
    }
  } catch {
    length = 180000;
  }
  return {
    url: escapeXml(fullUrl),
    type,
    length,
  };
}

export async function GET() {
  const anchorTime = new Date('2026-11-28T08:15:00Z').getTime();

  // 0. Open Benchmark Hub & Bespoke Pinterest Vertical Infographics for Tools
  const toolsAndResearch = [
    {
      title: 'Ergonomic Office Chair & Footrest Height Calculator (2026 Posture Tool)',
      url: `${BASE_URL}/tools/chair-footrest-height-calculator`,
      desc: 'Calculate exact natural seat height, fixed 29-inch desk chair lift, required under-desk footrest elevation, and built-in retractable footrest vs floor platform fit. #officechair #ergonomics #footrest #desksetup #homeoffice',
      category: 'Workspace Calculators',
      img: `${BASE_URL}/blog/pin-office-chair-footrest-cheat-sheet.png`,
    },
    {
      title: '2026 ISO 9241-5 & ANSI/BIFMA Ergonomic Desk Height Benchmark Dataset',
      url: `${BASE_URL}/research/2026-ergonomic-desk-standards`,
      desc: 'Compare exact seated desk height, standing elevation, chair pan height, and 29-inch fixed desk wrist strain offsets from 5ft 0in to 6ft 4in (CC BY 4.0 CSV & JSON dataset). #ergonomics #desksetup #standingdesk #homeoffice',
      category: 'Workspace Ergonomics Research',
      img: `${BASE_URL}/blog/pin-ergonomic-desk-cheat-sheet.png`,
    },
    {
      title: 'Ergonomic Sitting & Standing Desk Height Chart 2026 + Calculator',
      url: `${BASE_URL}/tools/ergonomic-desk-height-calculator`,
      desc: 'Calculate exact sitting desk height, motorized standing desk preset, chair seat elevation, and monitor riser clearance using ISO 9241-5 ratios. #ergonomicdesk #desksetup #homeoffice #moderntrendsnow',
      category: 'Workspace Calculators',
      img: `${BASE_URL}/blog/ergonomic-desk-height-chart.png`,
    },
    {
      title: 'Dual Monitor Shelf vs Monitor Arm: Viewing Distance & Load Blueprint',
      url: `${BASE_URL}/tools/monitor-viewing-distance-calculator`,
      desc: 'Verify Retina optical distance and C-clamp desk arm safety on walnut, MDF, and honeycomb tops across 24 to 49-inch ultrawide monitors. #dualmonitor #desksetup #minimalistdesk #workspace',
      category: 'Workspace Calculators',
      img: `${BASE_URL}/blog/pin-dual-monitor-blueprint.png`,
    },
    {
      title: '5 Spatial Rules for a Clutter-Free Minimalist Desk Setup (2026 Planner)',
      url: `${BASE_URL}/tools/desk-mat-keyboard-fit-calculator`,
      desc: 'Plan desk width clearance across 40 to 72-inch desks combining 60%, 75%, TKL keyboards, vertical laptop docks, and XXL desk mats. #minimalistworkspace #deskmat #mechanicalkeyboard',
      category: 'Workspace Calculators',
      img: `${BASE_URL}/blog/pin-minimalist-desk-checklist.png`,
    },
    {
      title: 'Dynamic Standing Desk Cable Slack Calculator & Wire Routing Blueprint',
      url: `${BASE_URL}/tools/standing-desk-cable-slack-calculator`,
      desc: 'Calculate exact power cord travel drop, articulated magnetic spine vertebrae count, and 14 AWG surge specs for sit-stand desks. #standingdesk #cablemanagement #desksetup',
      category: 'Workspace Calculators',
      img: `${BASE_URL}/blog/cable-slack-architecture-diagram.png`,
    },
    {
      title: 'Workspace Engineering Calculators Hub (ISO 9241-5 & BIFMA Tools)',
      url: `${BASE_URL}/tools`,
      desc: '4 free browser-based workstation architecture calculators for desk height, monitor PPI viewing distance, XXL desk mat fit, and cable slack. #workspacesetup #productivitytools #deskgoals',
      category: 'Workspace Calculators',
      img: `${BASE_URL}/blog/monitor-distance-load-chart.png`,
    },
  ];

  const toolItemsXml = toolsAndResearch.map((item, idx) => {
    const pubDate = new Date(anchorTime - idx * 3600 * 1000 * 2).toUTCString();
    const asset = resolveImageMeta(item.img);
    const title = clampPinTitle(item.title);
    return `    <item>
      <title><![CDATA[${title}]]></title>
      <link>${item.url}</link>
      <guid isPermaLink="true">${item.url}</guid>
      <pubDate>${pubDate}</pubDate>
      <category>${escapeXml(item.category)}</category>
      <description><![CDATA[${item.desc}]]></description>
      <enclosure url="${asset.url}" length="${asset.length}" type="${asset.type}" />
      <media:content url="${asset.url}" medium="image" type="${asset.type}" />
      <media:title><![CDATA[${title}]]></media:title>
    </item>`;
  }).join('\n');

  // 1. Authority Workspace Guides (newest first, with proper MIME detection & unclamped clean titles)
  const blogItemsXml = [...BLOG_POSTS].reverse().map((post, idx) => {
    const pubDate = new Date(new Date(post.publishedDate).getTime() || anchorTime - (idx + 8) * 3600 * 1000 * 24).toUTCString();
    const title = clampPinTitle(post.title.replace(/&/g, 'and'));
    const safeDesc = post.metaDescription.replace(/&/g, 'and');
    const asset = resolveImageMeta(post.coverImage);

    return `    <item>
      <title><![CDATA[${title}]]></title>
      <link>${BASE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/blog/${post.slug}</guid>
      <pubDate>${pubDate}</pubDate>
      <category>${escapeXml(post.category || 'Workspace Guide')}</category>
      <description><![CDATA[${safeDesc} Full engineering guide on Modern Trends Now. #desksetup #minimalistdesk #ergonomics #homeoffice]]></description>
      <enclosure url="${asset.url}" length="${asset.length}" type="${asset.type}" />
      <media:content url="${asset.url}" medium="image" type="${asset.type}" />
      <media:title><![CDATA[${title}]]></media:title>
    </item>`;
  }).join('\n');

  // 2. Curated Desk Objects (newest additions first, deterministic timestamps)
  const productItemsXml = [...PRODUCTS].reverse().map((product, index) => {
    const date = new Date(anchorTime - (index + 24) * 3600 * 1000 * 6).toUTCString();
    const title = clampPinTitle(product.title.replace(/&/g, 'and'));
    const safeTagline = product.tagline.replace(/&/g, 'and');
    const safeDescText = product.description.replace(/&/g, 'and');
    const safeSpecs = product.specs.map((s) => s.replace(/&/g, 'and')).join(', ');
    const cleanDescription = `${safeTagline} ${safeDescText} Specs: ${safeSpecs}. #desksetup #techgadgets #aestheticdesk #workspace #moderntrends #${product.category.toLowerCase().replace(/\s+/g, '')}`;
    const asset = resolveImageMeta(product.imageUrl);

    return `    <item>
      <title><![CDATA[${title}]]></title>
      <link>${BASE_URL}/#product-${product.id}</link>
      <guid isPermaLink="false">${product.id}-2026</guid>
      <pubDate>${date}</pubDate>
      <category>${escapeXml(product.category)}</category>
      <description><![CDATA[${cleanDescription}]]></description>
      <enclosure url="${asset.url}" length="${asset.length}" type="${asset.type}" />
      <media:content url="${asset.url}" medium="image" type="${asset.type}" />
      <media:title><![CDATA[${title}]]></media:title>
    </item>`;
  }).join('\n');

  const lastBuildDate = new Date(anchorTime).toUTCString();
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Modern Trends Now | Curated Aesthetic Desk Setup, Lighting &amp; Ergonomics</title>
    <link>${BASE_URL}</link>
    <description>Interactive workspace geometry calculators, ISO 9241-5 ergonomic benchmarks, and curated viral desk hardware.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <ttl>60</ttl>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${toolItemsXml}
${blogItemsXml}
${productItemsXml}
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
