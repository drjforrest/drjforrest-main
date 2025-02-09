import express, { Request, Response } from "express";
import Parser from "rss-parser";
import cors from "cors";

const app = express();
const parser = new Parser();

app.use(cors());

const RSS_FEED_URL = "https://www.inoreader.com/stream/user/1005214099/tag/drjforrest.com"; // Replace with your feed

interface Article {
  title: string;
  link: string;
  description: string;
  pubDate: string;
}

app.get("/rss", async (req: Request, res: Response) => {
  try {
    const feed = await parser.parseURL(RSS_FEED_URL);
    const articles: Article[] = feed.items.slice(0, 5).map((item) => ({
      title: item.title ?? "No Title",
      link: item.link ?? "#",
      description: item.contentSnippet ?? item.summary ?? "No description",
      pubDate: item.pubDate ?? "Unknown date",
    }));

    res.json(articles);
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    res.status(500).json({ error: "Failed to fetch RSS feed" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));