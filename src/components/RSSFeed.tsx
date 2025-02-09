'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Rss } from "lucide-react";

interface Article {
  title: string;
  link: string;
  description: string;
  pubDate: string;
}

export function RSSFeed() {
  const [interests, setInterests] = useState<string[]>([]);

  // Set default interests immediately
  const defaultInterests = [
    "#Automation",
    "#AI",
    "#Photography",
    "#Travel",
    "#CanadianPolitics"
  ];

  useEffect(() => {
    // Set default interests first
    setInterests(defaultInterests);

    // Then try to fetch from API
    fetch("/api/rss?format=json")
      .then((res) => {
        console.log("RSS API Response:", res.status);
        return res.json();
      })
      .then((data: Article[]) => {
        console.log("RSS API Data:", data);
        if (data[0]?.description) {
          const tags = data[0].description.split(" ").filter(tag => tag.startsWith("#"));
          console.log("Parsed Tags:", tags);
          if (tags.length > 0) {
            setInterests(tags);
          }
        }
      })
      .catch((err) => {
        console.error("Error fetching interests:", err);
      });
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {interests.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-default text-lg font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-col items-center gap-4">
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
            Stay updated with my latest interests and activities
          </p>
        </div>
      </div>
    </div>
  );
}
