import { NextResponse } from 'next/server';
import { generateRSSFeed } from '@/lib/generate-rss';
import type { RSSItem } from '@/lib/generate-rss';

export async function GET() {
  // For now, let's include some sample items
  // You can replace these with real data from your CMS or database
  const items: RSSItem[] = [
    {
      title: "Latest Research Updates",
      link: "https://drjforrest.com/research",
      description: "Recent updates in global health research and analytics",
      pubDate: new Date(),
    },
    // Add more items as needed
  ];

  const feed = generateRSSFeed(items);

  return new NextResponse(feed, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate'
    },
  });
}