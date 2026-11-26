import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '../data/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.moderntrendsnow.store';
  const coreUpdateDate = new Date('2026-11-26T00:00:00Z');
  const legalUpdateDate = new Date('2026-11-01T00:00:00Z');

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: coreUpdateDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: coreUpdateDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tools/ergonomic-desk-height-calculator`,
      lastModified: coreUpdateDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tools/monitor-viewing-distance-calculator`,
      lastModified: coreUpdateDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tools/desk-mat-keyboard-fit-calculator`,
      lastModified: coreUpdateDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tools/standing-desk-cable-slack-calculator`,
      lastModified: coreUpdateDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: coreUpdateDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: coreUpdateDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: coreUpdateDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: coreUpdateDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: legalUpdateDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: coreUpdateDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedDate),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  return [...staticPages, ...blogPages];
}
