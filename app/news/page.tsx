"use client";

import { ScrollAnimation } from "@/components/scroll-animation";
import { ShareButton } from "@/components/share-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, Calendar, ExternalLink, Newspaper } from "lucide-react";
import Link from "next/link";

const allNews = [
  {
    id: 1,
    date: "2024-12-15",
    title: "Aurora X Qualifies for URC 2025 Finals",
    excerpt:
      "Our latest rover Aurora X has successfully qualified for the University Rover Challenge 2025 finals in Utah. This marks a significant milestone in our journey towards Mars exploration.",
    content: `
      We are thrilled to announce that our latest rover, Aurora X, has successfully qualified for the University Rover Challenge (URC) 2025 finals in Utah. This achievement represents months of dedicated engineering, innovation, and teamwork from our exceptional team members.

      Aurora X incorporates cutting-edge technology including advanced autonomous navigation systems, enhanced robotic arm capabilities, and improved communication systems. The rover underwent rigorous testing phases to ensure it meets all URC requirements and performance standards.

      The team will now prepare for the final competition scheduled for June 2025 at the Mars Desert Research Station in Utah. This will be our opportunity to demonstrate Aurora X's capabilities against top international teams from around the world.

      We extend our gratitude to all our sponsors, mentors, and supporters who have made this achievement possible. The journey to Mars continues!
    `,
    category: "Competition",
    isExternal: false,
    image: "/placeholder.svg?height=400&width=600&text=Aurora+X+Rover",
  },
  {
    id: 2,
    date: "2024-11-20",
    title: "Team Wins ARC 2024 Runner-up Position",
    excerpt:
      "MIST Mongol Barota secures second place in Anatolian Rover Challenge 2024 held in Ankara, Turkey.",
    content: `
      MIST Mongol Barota has achieved remarkable success at the Anatolian Rover Challenge (ARC) 2024, securing the runner-up position among 40 international teams. The competition was held at the Turkish Aerospace Industries facility in Ankara, Turkey.

      Our rover Phoenix demonstrated exceptional performance across all mission tasks including autonomous navigation, science operations, and equipment servicing. The team scored particularly high in the science mission, showcasing our advanced sample collection and analysis capabilities.

      This achievement adds to our growing list of international recognitions and solidifies our position as one of the leading Mars rover teams from South Asia. The experience gained from ARC 2024 will be invaluable as we prepare for upcoming competitions.

      Special congratulations to all team members who worked tirelessly to achieve this milestone. Their dedication and technical expertise continue to bring pride to MIST and Bangladesh on the global stage.
    `,
    category: "Achievement",
    isExternal: false,
    image: "/placeholder.svg?height=400&width=600&text=ARC+2024+Victory",
  },
  {
    id: 3,
    date: "2024-10-05",
    title: "New Team Members Recruitment Drive",
    excerpt:
      "We're looking for passionate engineering students to join our mission to Mars. Applications now open.",
    content: `
      MIST Mongol Barota is launching its annual recruitment drive for the 2024-2025 academic year. We are seeking passionate and dedicated engineering students from all disciplines to join our mission of Mars exploration.

      We welcome applications from students specializing in:
      - Mechanical Engineering
      - Electrical and Electronic Engineering
      - Computer Science and Engineering
      - Aerospace Engineering
      - Materials and Metallurgical Engineering

      As a team member, you will gain hands-on experience in cutting-edge robotics, autonomous systems, and space technology. You'll work alongside experienced seniors and contribute to projects that compete on the global stage.

      The application process includes a written application, technical assessment, and interview rounds. We encourage all interested students to apply regardless of their year of study, as we value enthusiasm and commitment over experience.

      Applications are open until October 31st, 2024. Join us in our journey to push the boundaries of space exploration technology!
    `,
    category: "Recruitment",
    isExternal: false,
    image: "/placeholder.svg?height=400&width=600&text=Team+Recruitment",
  },
  {
    id: 4,
    date: "2024-09-15",
    title: "Successful Testing of New Autonomous Navigation System",
    excerpt:
      "Our latest autonomous navigation system shows 95% accuracy in field tests, bringing us closer to fully autonomous Mars exploration.",
    content: `
      Our research and development team has successfully completed field testing of our new autonomous navigation system, achieving an impressive 95% accuracy rate in challenging terrain conditions.

      The new system incorporates advanced computer vision algorithms, LiDAR sensors, and machine learning models trained on diverse terrain datasets. This technology will be crucial for our upcoming rovers' ability to navigate the harsh Martian environment independently.

      Testing was conducted at various locations with different terrain types including rocky surfaces, sandy areas, and obstacle-rich environments. The system demonstrated exceptional performance in path planning, obstacle avoidance, and goal reaching tasks.

      This breakthrough positions us among the leading teams in autonomous rover technology and significantly enhances our competitive edge for future competitions. The system will be integrated into Aurora X for the URC 2025 competition.
    `,
    category: "Technology",
    isExternal: false,
    image: "/placeholder.svg?height=400&width=600&text=Autonomous+Navigation",
  },
  {
    id: 5,
    date: "2024-08-30",
    title: "Partnership with Local Industries Announced",
    excerpt:
      "New strategic partnerships will provide advanced manufacturing capabilities and technical expertise for our rover development.",
    content: `
      MIST Mongol Barota is pleased to announce strategic partnerships with leading local industries to enhance our rover development capabilities. These partnerships will provide access to advanced manufacturing facilities, technical expertise, and mentorship opportunities.

      Our new partners include precision engineering firms, electronics manufacturers, and software development companies. This collaboration will enable us to produce higher quality components locally while reducing dependency on imported parts.

      The partnerships also include internship and job placement opportunities for our team members, creating a pathway for career development in the growing space technology sector in Bangladesh.

      These strategic alliances represent a significant step forward in building a sustainable ecosystem for space technology development in our country. We look forward to the innovations that will emerge from these collaborations.
    `,
    category: "Partnership",
    isExternal: false,
    image: "/placeholder.svg?height=400&width=600&text=Industry+Partnership",
  },
  {
    id: 6,
    date: "2024-07-10",
    title: "International Workshop on Mars Rover Technology",
    excerpt:
      "Team members attend exclusive workshop with NASA engineers and international experts on latest Mars exploration technologies.",
    content: `
      Selected team members had the opportunity to participate in an exclusive international workshop on Mars rover technology, featuring presentations and hands-on sessions with NASA engineers and international experts.

      The workshop covered advanced topics including thermal management systems, dust mitigation strategies, communication protocols, and life support systems for Mars missions. Our team gained valuable insights into the latest developments in Mars exploration technology.

      The knowledge gained from this workshop is being incorporated into our current rover development projects. The exposure to cutting-edge research and development practices will significantly benefit our future competition preparations.

      We are grateful for this learning opportunity and the connections made with the global Mars exploration community. Such experiences continue to elevate the technical capabilities of our team.
    `,
    category: "Education",
    isExternal: false,
    image: "/placeholder.svg?height=400&width=600&text=NASA+Workshop",
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Latest Updates
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              News &<span className="text-primary block">Announcements</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Stay updated with our latest achievements, competitions, team
              developments, and technological breakthroughs in Mars rover
              exploration.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <Link href="/achievements">
                View Achievements
                <Newspaper className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allNews.map((item, index) => (
              <ScrollAnimation key={item.id} delay={index * 100}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
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
                    <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
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
                        className="p-0 h-auto group-hover:text-primary"
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
                        url={typeof window !== 'undefined' ? `${window.location.origin}/news/${item.id}` : `https://mistmongolbarota.com/news/${item.id}`}
                        description={item.excerpt}
                        variant="ghost"
                        size="sm"
                        showText={false}
                      />
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
