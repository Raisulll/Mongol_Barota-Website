"use client";

import { ShareButton } from "@/components/share-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";

const news = [
  {
    id: 1,
    date: "2024-12-15",
    title: "Aurora X Qualifies for URC 2025 Finals",
    excerpt:
      "Our latest rover Aurora X has successfully qualified for the University Rover Challenge 2025 finals in Utah.",
    category: "Competition",
    isExternal: false,
    image: "/placeholder.svg?height=400&width=800&text=Aurora+X+Rover",
  },
  {
    id: 2,
    date: "2024-11-20",
    title: "Team Wins ARC 2024 Runner-up Position",
    excerpt:
      "MIST Mongol Barota secures second place in Anatolian Rover Challenge 2024 held in Ankara, Turkey.",
    category: "Achievement",
    isExternal: false,
    image: "/placeholder.svg?height=400&width=800&text=ARC+2024+Victory",
  },
  {
    id: 3,
    date: "2024-10-05",
    title: "New Team Members Recruitment Drive",
    excerpt:
      "We're looking for passionate engineering students to join our mission to Mars. Applications now open.",
    category: "Recruitment",
    isExternal: false,
    image: "/placeholder.svg?height=400&width=800&text=Team+Recruitment",
  },
];

export function NewsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <Badge variant="outline" className="mb-4">
              Latest Updates
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              News & Announcements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
              Stay updated with our latest achievements, competitions, and team
              developments
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="mt-6 md:mt-0 bg-transparent"
          >
            <Link href="/news">
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {item.category}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                </div>
                <h3 className="text-lg font-semibold leading-tight">
                  {item.title}
                </h3>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="p-0 h-auto"
                  >
                    <Link href={`/news/${item.id}`}>
                      Read More
                      {item.isExternal ? (
                        <ExternalLink className="ml-1 h-3 w-3" />
                      ) : (
                        <ArrowRight className="ml-1 h-3 w-3" />
                      )}
                    </Link>
                  </Button>
                  <ShareButton
                    title={item.title}
                    url={
                      typeof window !== "undefined"
                        ? `${window.location.origin}/news/${item.id}`
                        : `https://mistmongolbarota.com/news/${item.id}`
                    }
                    description={item.excerpt}
                    image={item.image}
                    variant="ghost"
                    size="sm"
                    showText={false}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
