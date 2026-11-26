import { NextRequest, NextResponse } from 'next/server';
import { BLOG_POSTS } from '@/data/blog-posts';

export const dynamic = 'force-dynamic';

const INDEXNOW_KEY = 'moderntrendsnow-index-2026';
const HOST = 'www.moderntrendsnow.store';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

const STATIC_URLS = [
  `https://${HOST}`,
  `https://${HOST}/tools`,
  `https://${HOST}/tools/ergonomic-desk-height-calculator`,
  `https://${HOST}/tools/monitor-viewing-distance-calculator`,
  `https://${HOST}/tools/desk-mat-keyboard-fit-calculator`,
  `https://${HOST}/blog`,
  `https://${HOST}/about`,
  `https://${HOST}/contact`,
];

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token');
  if (token !== INDEXNOW_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const blogUrls = BLOG_POSTS.map((post) => `https://${HOST}/blog/${post.slug}`);
  const urlList = Array.from(new Set([...STATIC_URLS, ...blogUrls]));

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
  ];

  const results = await Promise.all(
    endpoints.map(async (endpoint) => {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: JSON.stringify(payload),
        });
        return { endpoint, status: res.status, ok: res.ok };
      } catch (err: any) {
        return { endpoint, status: 500, ok: false, error: err?.message || 'Fetch error' };
      }
    })
  );

  return NextResponse.json({
    submittedCount: urlList.length,
    keyLocation: KEY_LOCATION,
    results,
  });
}
