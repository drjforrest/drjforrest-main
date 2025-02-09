export interface RSSItem {
  title: string;
  link: string;
  description: string;
  pubDate: Date;
  guid?: string;
}

export function generateRSSFeed(items: RSSItem[]) {
  const feedItems = items.map(item => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.link}</link>
      <guid isPermaLink="false">${item.guid || item.link}</guid>
      <pubDate>${item.pubDate.toUTCString()}</pubDate>
      <description><![CDATA[${item.description}]]></description>
    </item>
  `).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/"
       xmlns:dc="http://purl.org/dc/elements/1.1/"
       xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Dr. Jamie I. Forrest</title>
      <link>https://drjforrest.com</link>
      <description>Global Health Research and Analytics</description>
      <atom:link href="https://drjforrest.com/rss.xml" rel="self" type="application/rss+xml" />
      <language>en-US</language>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <generator>Next.js</generator>
      ${feedItems}
    </channel>
  </rss>`;
}