import { NextResponse } from "next/server";
import RSSParser from 'rss-parser';

const INOREADER_FEED_URL = "https://www.inoreader.com/stream/user/1005214099/tag/drjforrest.com";

const parser = new RSSParser();

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const format = url.searchParams.get("format");

    // Fetch the RSS feed
    const response = await fetch(INOREADER_FEED_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.statusText}`);
    }

    const xmlText = await response.text();
    const feed = await parser.parseString(xmlText);

    if (format === "json") {
      return NextResponse.json(feed.items.map(item => ({
        title: item.title,
        link: item.link,
        description: item.contentSnippet || item.description,
        pubDate: item.pubDate,
      })));
    }

    // Return the raw XML for RSS feed subscribers
    return new NextResponse(xmlText, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "s-maxage=3600, stale-while-revalidate"
      }
    });
  } catch (error) {
    console.error('RSS Error:', error);
    return NextResponse.json(
      { error: 'Failed to load RSS feed' },
      { status: 500 }
    );
  }
}