import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

const parser = new Parser();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');

    if (!url) {
      return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
    }

    // Fetch and parse the RSS feed
    const feed = await parser.parseURL(url);

    // Transform the feed items into our desired format
    const items = feed.items.map(item => ({
      title: item.title || '',
      link: item.link || '',
      date: item.pubDate || item.isoDate || new Date().toISOString(),
      source: feed.title || 'Unknown Source'
    }));

    return NextResponse.json(items);
  } catch (error) {
    console.error('RSS feed error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch RSS feed' }, 
      { status: 500 }
    );
  }
}