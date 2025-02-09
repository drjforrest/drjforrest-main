import Parser from "rss-parser";

const parser = new Parser();
const RSS_FEED_URL = "https://www.inoreader.com/stream/user/1005214099/tag/drjforrest.com";

export interface Article {
  title: string;
  link: string;
  description: string;
  pubDate: string;
}

export async function fetchRSSFeed() {
  try {
    const feed = await parser.parseURL(RSS_FEED_URL);
    return feed.items.slice(0, 5).map((item) => ({
      title: item.title ?? "No Title",
      link: item.link ?? "#",
      description: item.contentSnippet ?? item.summary ?? "No description",
      pubDate: item.pubDate ?? "Unknown date",
    }));
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    throw error;
  }
}