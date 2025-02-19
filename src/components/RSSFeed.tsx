"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Hash, ExternalLink, Clock } from "lucide-react";

interface FeedItem {
  title: string;
  link: string;
  date: string;
  source: string;
}

interface TopicFeed {
  id: string;
  label: string;
  feedUrl: string;
}

const topics: TopicFeed[] = [
  { id: 'automation', label: '#Automation', feedUrl: 'https://talk.automators.fm/posts.rss' },
  { id: 'ai', label: '#AI', feedUrl: 'https://medium.com/feed/towards-artificial-intelligence' },
  { id: 'travel', label: '#Travel', feedUrl: 'https://www.nomadicmatt.com/feed/' },
  { id: 'news', label: '#CanadianNews', feedUrl: 'https://rss.cbc.ca/lineup/canada.xml' },
  { id: 'ted', label: '#TEDTalks', feedUrl: 'https://www.ted.com/feeds/talks.rss' }
];

export default function RSSFeed() {
  const [selectedTopic, setSelectedTopic] = useState<string>(topics[0].id);
  const [items, setItems] = useState<FeedItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchFeedItems = async (topicId: string) => {
    setIsLoading(true);
    try {
      const topic = topics.find(t => t.id === topicId);
      if (!topic) return;

      const response = await fetch(`/api/rss?url=${encodeURIComponent(topic.feedUrl)}`);
      const data = await response.json();
      setItems(data.slice(0, 8)); // Limit to 8 items
    } catch (error) {
      console.error('Error fetching RSS feed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedItems(selectedTopic);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <p className="text-center text-foreground/70 mb-8">
        Below are select RSS feeds I follow representing a cross-section of my general interests.
      </p>

      {/* Topic Selection */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {topics.map((topic) => (
          <motion.button
            key={topic.id}
            onClick={() => {
              setSelectedTopic(topic.id);
              fetchFeedItems(topic.id);
            }}
            className={`px-4 py-2 rounded-full text-lg font-medium transition-colors flex items-center gap-2 
              ${selectedTopic === topic.id 
                ? 'bg-primary text-white shadow-md' 
                : 'bg-background/50 text-primary hover:bg-primary/10'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Hash className="w-4 h-4" />
            <span>{topic.label.replace('#', '')}</span>
          </motion.button>
        ))}
      </div>

      {/* Feed Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="sync">
          {isLoading ? (
            Array(8).fill(0).map((_, index) => (
              <motion.div
                key={`skeleton-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-[200px] bg-primary/10 rounded-lg animate-pulse"
              />
            ))
          ) : (
            items.map((item, index) => (
              <motion.div
                key={`${selectedTopic}-${item.link}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                  <Card className="h-full group hover:shadow-lg transition-all duration-300 bg-[#f9fafb] border border-gray-300 shadow-md">                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="p-4 flex flex-col h-full"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-medium text-primary group-hover:text-primary/80 line-clamp-2">
                        {item.title}
                      </h3>
                      <ExternalLink className="w-4 h-4 flex-shrink-0 text-primary/60 group-hover:text-primary" />
                    </div>
                    <div className="mt-auto pt-4 flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>
                        {new Date(item.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  </a>
                </Card>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}