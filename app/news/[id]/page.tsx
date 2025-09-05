"use client";

import { ScrollAnimation } from "@/components/scroll-animation";
import { ShareButton } from "@/components/share-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Eye,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// This would typically come from a database or CMS
const allNews = [
  {
    id: 1,
    date: "2024-12-15",
    title: "Aurora X Qualifies for URC 2025 Finals",
    excerpt:
      "Our latest rover Aurora X has successfully qualified for the University Rover Challenge 2025 finals in Utah. This marks a significant milestone in our journey towards Mars exploration.",
    content: `We are thrilled to announce that our latest rover, Aurora X, has successfully qualified for the University Rover Challenge (URC) 2025 finals in Utah. This achievement represents months of dedicated engineering, innovation, and teamwork from our exceptional team members.

Aurora X incorporates cutting-edge technology including advanced autonomous navigation systems, enhanced robotic arm capabilities, and improved communication systems. The rover underwent rigorous testing phases to ensure it meets all URC requirements and performance standards.

The rover features several innovative subsystems that set it apart from previous iterations:

**Advanced Navigation System**
Our new autonomous navigation system utilizes a combination of computer vision, LiDAR sensors, and GPS integration to navigate complex terrain with 95% accuracy. The system can identify obstacles, plan optimal paths, and adapt to changing environmental conditions in real-time.

**Enhanced Robotic Arm**
The 6-DOF robotic arm has been completely redesigned with improved precision and payload capacity. It features advanced gripper mechanisms capable of handling diverse objects and tools required for Mars exploration missions.

**Communication Infrastructure**
Aurora X is equipped with a robust communication system that ensures reliable data transmission even in challenging conditions. The system supports high-resolution video streaming, telemetry data, and real-time control commands.

**Science Package**
The integrated science package includes spectrometers, soil analysis tools, and sample collection mechanisms. These instruments enable comprehensive geological surveys and sample analysis capabilities essential for Mars exploration missions.

The team will now prepare for the final competition scheduled for June 2025 at the Mars Desert Research Station in Utah. This will be our opportunity to demonstrate Aurora X's capabilities against top international teams from around the world.

**Preparation Timeline**
- January 2025: Final system integration and testing
- February 2025: Field testing in challenging environments
- March 2025: Team training and mission rehearsals
- April 2025: Final system optimization
- May 2025: Travel preparations and equipment shipping
- June 2025: Competition in Utah

We extend our gratitude to all our sponsors, mentors, and supporters who have made this achievement possible. Special thanks to our faculty advisors, industry partners, and the MIST administration for their unwavering support.

The journey to Mars continues, and we are more determined than ever to push the boundaries of what's possible in robotic Mars exploration!`,
    category: "Competition",
    isExternal: false,
    image: "/placeholder.svg?height=400&width=800&text=Aurora+X+Rover",
    author: "MIST Mongol Barota Team",
    readTime: "5 min read",
    views: "2.4k views",
  },
  {
    id: 2,
    date: "2024-11-20",
    title: "Team Wins ARC 2024 Runner-up Position",
    excerpt:
      "MIST Mongol Barota secures second place in Anatolian Rover Challenge 2024 held in Ankara, Turkey.",
    content: `MIST Mongol Barota has achieved remarkable success at the Anatolian Rover Challenge (ARC) 2024, securing the runner-up position among 40 international teams. The competition was held at the Turkish Aerospace Industries facility in Ankara, Turkey, from November 15-18, 2024.

Our rover Phoenix demonstrated exceptional performance across all mission tasks including autonomous navigation, science operations, and equipment servicing. The team scored particularly high in the science mission, showcasing our advanced sample collection and analysis capabilities.

**Competition Highlights**

**Autonomous Traversal Mission**
Phoenix successfully navigated through the challenging terrain course, demonstrating superior obstacle avoidance and path planning capabilities. The rover completed the course in record time while maintaining high accuracy in GPS waypoint navigation.

**Science Mission Excellence**
Our science package performed exceptionally well, with Phoenix successfully collecting and analyzing soil samples from multiple locations. The integrated spectrometer provided accurate mineral composition analysis, earning high marks from the judges.

**Equipment Servicing Task**
The rover's robotic arm demonstrated precise manipulation capabilities during the equipment servicing mission. Phoenix successfully operated various switches, connectors, and tools, showcasing the arm's versatility and precision.

**Team Performance**
Beyond the rover's technical achievements, our team members excelled in presentations and technical documentation. The team's ability to explain complex engineering solutions and demonstrate deep understanding of Mars exploration challenges impressed the international panel of judges.

**International Recognition**
This achievement adds to our growing list of international recognitions and solidifies our position as one of the leading Mars rover teams from South Asia. The competition provided valuable experience competing against top European teams and exposed us to the latest trends in rover technology.

**Technical Innovations**
Several innovative solutions developed for Phoenix garnered special attention:
- Novel suspension system for improved mobility
- Advanced thermal management for electronics
- Innovative dust mitigation strategies
- Enhanced communication protocols

**Future Implications**
The experience gained from ARC 2024 will be invaluable as we prepare for upcoming competitions, particularly the URC 2025. The feedback from international experts and exposure to different design approaches will inform our future rover development.

Special congratulations to all team members who worked tirelessly to achieve this milestone. Their dedication and technical expertise continue to bring pride to MIST and Bangladesh on the global stage.

The team is already incorporating lessons learned from ARC 2024 into the development of Aurora X for the upcoming URC 2025 competition.`,
    category: "Achievement",
    isExternal: false,
    image: "/placeholder.svg?height=400&width=800&text=ARC+2024+Victory",
    author: "MIST Mongol Barota Team",
    readTime: "4 min read",
    views: "1.8k views",
  },
  {
    id: 3,
    date: "2024-10-05",
    title: "New Team Members Recruitment Drive",
    excerpt:
      "We're looking for passionate engineering students to join our mission to Mars. Applications now open.",
    content: `MIST Mongol Barota is launching its annual recruitment drive for the 2024-2025 academic year. We are seeking passionate and dedicated engineering students from all disciplines to join our mission of Mars exploration.

**Who We're Looking For**

We welcome applications from students specializing in:
- **Mechanical Engineering**: Rover chassis design, suspension systems, thermal management
- **Electrical and Electronic Engineering**: Power systems, sensor integration, circuit design
- **Computer Science and Engineering**: Autonomous navigation, computer vision, software architecture
- **Aerospace Engineering**: Mission planning, trajectory analysis, space environment considerations
- **Materials and Metallurgical Engineering**: Advanced materials research, component optimization

**What You'll Gain**

As a team member, you will gain hands-on experience in:
- Cutting-edge robotics and autonomous systems
- Space technology and Mars exploration
- International competition experience
- Leadership and project management skills
- Technical presentation and documentation
- Industry connections and networking opportunities

**Team Structure and Roles**

Our team is organized into specialized subsystems:

**Mechanical Team**
- Chassis and suspension design
- Robotic arm development
- Thermal management systems
- Manufacturing and assembly

**Electrical Team**
- Power distribution systems
- Sensor integration and calibration
- Communication systems
- Electronic control units

**Software Team**
- Autonomous navigation algorithms
- Computer vision and image processing
- User interface development
- System integration and testing

**Science Team**
- Instrument selection and integration
- Sample analysis protocols
- Mission planning and execution
- Data analysis and interpretation

**Management Team**
- Project coordination and timeline management
- Budget planning and resource allocation
- Sponsor relations and fundraising
- External communications and media

**Application Process**

The selection process includes:

1. **Written Application** (Due: October 20, 2024)
   - Statement of purpose
   - Academic transcripts
   - Portfolio of relevant projects (if any)

2. **Technical Assessment** (October 25-27, 2024)
   - Problem-solving scenarios
   - Technical knowledge evaluation
   - Basic programming/design challenges

3. **Interview Rounds** (November 1-5, 2024)
   - Individual interviews with team leads
   - Team collaboration exercises
   - Final selection committee review

**Requirements and Expectations**

- **Academic Standing**: Minimum CGPA of 3.00
- **Time Commitment**: 15-20 hours per week during active project phases
- **Duration**: Minimum 2-year commitment preferred
- **Skills**: No specific prior experience required, but enthusiasm for learning is essential
- **Attitude**: Team-oriented, problem-solving mindset, and passion for space exploration

**Training and Development**

New members will receive comprehensive training including:
- Technical workshops on relevant engineering topics
- Hands-on experience with tools and equipment
- Mentorship from senior team members
- Participation in national and international competitions

**Previous Team Achievements**

Join a team with a proven track record:
- URC 2021 Global Champions
- Multiple ARC competition medals
- 8+ international competition participations
- Pioneer in Mars rover technology in Bangladesh

**How to Apply**

Applications are open until **October 31st, 2024**. Interested students should:

1. Download the application form from our website
2. Submit completed application to [mars.rover.mist@gmail.com]
3. Include all required documents and portfolio items
4. Attend the information session on October 15th, 2024

We encourage all interested students to apply regardless of their year of study, as we value enthusiasm and commitment over experience. This is your opportunity to be part of Bangladesh's premier Mars rover team and contribute to advancing space exploration technology.

Join us in our journey to push the boundaries of space exploration technology and represent Bangladesh on the global stage!

For more information, contact us at mars.rover.mist@gmail.com or visit our office at the Robotics Lab, MIST.`,
    category: "Recruitment",
    isExternal: false,
    image: "/placeholder.svg?height=400&width=800&text=Team+Recruitment",
    author: "MIST Mongol Barota Team",
    readTime: "6 min read",
    views: "3.1k views",
  },
];

export default function NewsArticlePage({
  params,
}: {
  params: { id: string };
}) {
  const newsId = parseInt(params.id);
  const article = allNews.find((item) => item.id === newsId);

  if (!article) {
    notFound();
  }

  const relatedArticles = allNews
    .filter(
      (item) => item.id !== article.id && item.category === article.category
    )
    .slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="flex items-center gap-4 mb-8">
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="hover:bg-primary/10"
              >
                <Link href="/news">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to News
                </Link>
              </Button>
              <div className="ml-auto">
                <ShareButton
                  title={article.title}
                  url={typeof window !== 'undefined' ? window.location.href : `https://mistmongolbarota.com/news/${article.id}`}
                  description={article.excerpt}
                  image={article.image}
                  content={article.content}
                  variant="outline"
                  size="sm"
                />
              </div>
            </div>

            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  {article.category}
                </Badge>
                <div className="text-sm text-muted-foreground">•</div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(article.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
                {article.title}
              </h1>

              <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                {article.excerpt}
              </p>

              {/* Article Meta */}
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {article.author}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {article.readTime}
                </div>
                <div className="flex items-center">
                  <Eye className="w-4 h-4 mr-2" />
                  {article.views}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="relative h-96 md:h-[600px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
                {article.content.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                    return (
                      <h3
                        key={index}
                        className="text-2xl font-bold mt-12 mb-6 text-foreground border-l-4 border-primary pl-4"
                      >
                        {paragraph.replace(/\*\*/g, "")}
                      </h3>
                    );
                  }

                  if (paragraph.startsWith("- ")) {
                    const listItems = paragraph
                      .split("\n")
                      .filter((item) => item.trim());
                    return (
                      <ul key={index} className="space-y-2 mb-6 ml-6">
                        {listItems.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-muted-foreground leading-relaxed list-disc"
                          >
                            {item.replace("- ", "")}
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  return (
                    <p
                      key={index}
                      className="mb-6 text-muted-foreground leading-relaxed text-lg"
                    >
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="flex flex-col sm:flex-row items-center justify-between bg-muted/50 rounded-lg p-6">
                <div className="text-center sm:text-left mb-4 sm:mb-0">
                  <h3 className="text-lg font-semibold mb-2">
                    Found this article helpful?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Share it with others who might be interested in Mars exploration technology.
                  </p>
                </div>
                <ShareButton
                  title={article.title}
                  url={typeof window !== 'undefined' ? window.location.href : `https://mistmongolbarota.com/news/${article.id}`}
                  description={article.excerpt}
                  image={article.image}
                  content={article.content}
                  variant="default"
                  size="default"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">
                Interested in Our Journey?
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Follow our latest updates and achievements as we continue
                pushing the boundaries of Mars exploration technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Link href="/achievements">
                    View All Achievements
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/rovers">
                    Explore Our Rovers
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollAnimation>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Related Articles
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Discover more stories from our journey in Mars rover
                  exploration
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {relatedArticles.map((item, index) => (
                  <ScrollAnimation key={item.id} delay={index * 100}>
                    <Card className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge
                            variant="secondary"
                            className="bg-background/90 text-foreground"
                          >
                            {item.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center text-xs text-muted-foreground mb-3">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(item.date).toLocaleDateString()}
                          <span className="mx-2">•</span>
                          <Clock className="w-3 h-3 mr-1" />
                          {item.readTime}
                        </div>
                        <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                          {item.excerpt}
                        </p>
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="p-0 h-auto group-hover:text-primary font-semibold"
                        >
                          <Link href={`/news/${item.id}`}>
                            Read Full Article
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </section>
      )}
    </div>
  );
}
