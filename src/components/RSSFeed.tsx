'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Rss, AlertCircle, ExternalLink } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { rssFeed } from "@/lib/rss";

interface FeedItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
}

const defaultInterests = [
  "#Automation",
  "#AI",
  "#Photography",
  "#Travel",
  "#CanadianPolitics"
];

function processFeedItems(items: FeedItem[]) {
  return items
    .filter(item => item.description.length < 300)
    .map(item => ({
      ...item,
      description: item.description.slice(0, 200)
    }))
    .slice(0, 5);
}

export default function RSSFeed() {
  const [items, setItems] = useState<FeedItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRSS() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/api/rss?format=json");
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setItems(processFeedItems(data));
      } catch (err) {
        console.error("Error fetching RSS feed:", err);
        setError("Failed to load the RSS feed.");
      } finally {
        setLoading(false);
      }
    }

    fetchRSS();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-6xl mx-auto"
    >
      <div className="flex flex-col gap-6">
        {error && (
          <Alert variant="destructive" className="w-full">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Subscribe Button at the top */}
        <div className="flex flex-col items-center gap-3">
          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-2 hover:bg-primary/10"
            onClick={() => window.open("/api/rss", "_blank")}
          >
            <Rss className="w-5 h-5" />
            Subscribe to RSS Feed
          </Button>
          <p className="text-sm text-muted-foreground">
            Below is a curated RSS Feed of my interests. The feed will refresh with the page or use the feed in your preferred RSS Reader with the link above.
          </p>
        </div>

        {/* Interest Tags */}
        <div className="flex flex-wrap justify-center gap-4">
          {defaultInterests.map((tag, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-default text-lg font-medium"
            >
              {tag}
            </motion.span>
          ))}
        </div>
        

        {/* Feed Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading ? (
            // Loading skeletons
            Array(3).fill(0).map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <div className="animate-pulse">
                  <div className="h-6 bg-primary/10 rounded w-3/4 mb-2" />
                  <div className="h-4 bg-primary/5 rounded w-1/4 mb-4" />
                  <div className="h-4 bg-primary/10 rounded w-full" />
                </div>
              </div>
            ))
          ) : items.length > 0 ? (
            items.map((item, index) => (
              <motion.div
                key={item.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-all duration-200">
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-1 group-hover:text-primary">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {new Date(item.pubDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                        <p className="text-sm text-card-foreground">
                          {item.description}
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                    </div>
                  </a>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-center text-muted-foreground">No items to display</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
