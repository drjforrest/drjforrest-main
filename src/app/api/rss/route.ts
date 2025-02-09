import { NextResponse } from "next/server";
import { generateRSSFeed, RSSItem } from "@/lib/generate-rss";

const interests = [
  "#Automation",
  "#AI",
  "#Photography",
  "#Travel",
  "#CanadianPolitics"
];

const articles: RSSItem[] = [
  {
    title: "Personal Interests & Updates",
    link: "https://drjforrest.com/interests",
    description: interests.join(" "),
    pubDate: new Date(),
  }
];

export async function GET(request: Request) {
  const url = new URL(request.url);
  const format = url.searchParams.get("format");

  if (format === "json") {
    return NextResponse.json(articles.map(article => ({
      ...article,
      pubDate: article.pubDate.toUTCString()
    })));
  }

  const feed = generateRSSFeed(articles);
  
  return new NextResponse(feed, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate"
    }
  });
}
