import { useState, useEffect } from "react";

interface Article {
  title: string;
  link: string;
  description: string;
  pubDate: string;
}

const RSSFeed: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/rss")
      .then((res) => res.json())
      .then((data: Article[]) => setArticles(data))
      .catch((err) => console.error("Error fetching RSS:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Latest Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <div
            key={index}
            onClick={() => window.open(article.link, "_blank")}
            className="p-4 border rounded-lg shadow-lg cursor-pointer hover:bg-gray-100 transition-all"
          >
            <h3 className="text-lg font-semibold">{article.title}</h3>
            <p className="text-sm text-gray-600">{article.pubDate}</p>
            <p className="text-gray-700 mt-2">{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RSSFeed;