import { NextResponse } from "next/server";

export async function GET() {
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Dr. Jamie I. Forrest</title>
    <link>https://drjforrest.com</link>
    <description>Global Health Research and Analytics</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <item>
      <title>Sample Post</title>
      <link>https://drjforrest.com/posts/sample</link>
      <description>Sample post description</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <guid>https://drjforrest.com/posts/sample</guid>
    </item>
  </channel>
</rss>`;

  return new NextResponse(feed, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate"
    }
  });
}