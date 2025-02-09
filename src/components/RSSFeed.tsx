import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

interface Article {
  title: string;
  link: string;
  description: string;
  pubDate: string;
}

const RSSFeed: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://www.inoreader.com/stream/user/1005214099/tag/drjforrest.com")
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch RSS feed');
        return res.json();
      })
      .then((data: Article[]) => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching RSS:", err);
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="p-6 text-center">
        <p>Loading articles...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-center text-red-500">
        <p>Error loading articles: {error}</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Latest Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <Card
            key={index}
            onClick={() => window.open(article.link, "_blank")}
            className="p-4 cursor-pointer hover:bg-muted/50 transition-all"
          >
            <h3 className="text-lg font-semibold">{article.title}</h3>
            <p className="text-sm text-muted-foreground">{article.pubDate}</p>
            <p className="text-foreground/80 mt-2 line-clamp-3">{article.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RSSFeed;