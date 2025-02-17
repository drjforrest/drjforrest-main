import Parser from "rss-parser";
import { NextResponse } from "next/server";

const INOREADER_FEED_URL = "https://www.inoreader.com/stream/user/1005214099/tag/drjforrest.com";

const parser = new Parser({
  customFields: {
    item: ["content:encoded"],
  },
});

export async function rssFeed() {
  try {
    const response = await fetch(INOREADER_FEED_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.status} - ${response.statusText}`);
    }

    const xmlText = await response.text();
    const feed = await parser.parseString(xmlText);

    return feed.items.map(item => ({
      title: item.title,
      link: item.link,
      description: item.contentSnippet,
      pubDate: item.pubDate,
    }));
  } catch (error) {
    console.error('RSS Error:', error);
    throw error;
  }
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const format = url.searchParams.get("format");

    const response = await fetch(INOREADER_FEED_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.status} - ${response.statusText}`);
    }

    const xmlText = await response.text();
    const feed = await parser.parseString(xmlText);

    if (format === "json") {
      return NextResponse.json(
        feed.items.map(item => ({
          title: item.title,
          link: item.link,
          description: item.contentSnippet,
          pubDate: item.pubDate,
        }))
      );
    }

    return new NextResponse(xmlText, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "s-maxage=3600, stale-while-revalidate",
      },
    });
  } catch (error) {
    console.error('RSS Error:', error);
    return new NextResponse(JSON.stringify({ error: 'Failed to load RSS feed' }), {
      status: 500,
    });
  }
}