import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Heart, Star, Award, Crown, Check, ArrowRight, Mail, Phone } from "lucide-react"

const sponsorshipTiers = [
  {
    name: "Platinum Partner",
    subtitle: "Title Sponsor",
    amount: "BDT 30,00,000",
    amountText: "BDT Thirty Lacs Only",
    icon: Crown,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    borderColor: "border-purple-200",
    popular: true,
    benefits: [
      "Title sponsorship recognition",
      "Logo on rover and all team apparel",
      "Prominent display on all banners and posters",
      "Featured message from company leadership",
      "Exclusive social media coverage",
      "Priority media interviews",
      "VIP access to competitions",
      "Detailed progress reports",
      "Custom partnership opportunities",
    ],
  },
  {
    name: "Gold Partner",
    subtitle: "Major Sponsor",
    amount: "BDT 20,00,000",
    amountText: "BDT Twenty Lacs Only",
    icon: Award,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
    borderColor: "border-yellow-200",
    benefits: [
      "Major sponsor recognition",
      "Logo on team apparel and materials",
      "Display on event banners",
      "Social media mentions",
      "Competition updates",
      "Media coverage inclusion",
      "Partnership certificate",
      "Progress reports",
    ],
  },
  {
    name: "Silver Partner",
    subtitle: "Supporting Sponsor",
    amount: "BDT 10,00,000",
    amountText: "BDT Ten Lacs Only",
    icon: Star,
    color: "text-gray-600",
    bgColor: "bg-gray-100",
    borderColor: "border-gray-200",
    benefits: [
      "Supporting sponsor recognition",
      "Logo on team materials",
      "Website acknowledgment",
      "Social media recognition",
      "Competition results sharing",
      "Partnership certificate",
    ],
  },
  {
    name: "Custom Partner",
    subtitle: "Flexible Support",
    amount: "< BDT 5,00,000",
    amountText: "Any amount less than BDT Five Lacs",
    icon: Heart,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    benefits: [
      "Acknowledgment based on contribution",
      "Website recognition",
      "Social media mentions",
      "Partnership certificate",
      "Flexible arrangement",
    ],
  },
]

const currentSponsors = [
  {
    name: "Military Institute of Science and Technology",
    tier: "Title Sponsor",
    logo: "/placeholder.svg?height=80&width=160&text=MIST",
    description: "Our home institution providing comprehensive support",
    website: "https://mist.ac.bd",
  },
  {
    name: "Partner Company 1",
    tier: "Gold Partner",
    logo: "/placeholder.svg?height=80&width=160&text=Partner+1",
    description: "Supporting our mission to Mars",
    website: "#",
  },
  {
    name: "Partner Company 2",
    tier: "Silver Partner",
    logo: "/placeholder.svg?height=80&width=160&text=Partner+2",
    description: "Enabling innovation in robotics",
    website: "#",
  },
]

const budgetBreakdown = [
  { category: "Robot Development", amount: "BDT 12,15,000", percentage: 21 },
  { category: "Participation Cost", amount: "BDT 45,11,000", percentage: 79 },
]

const developmentItems = [
  { item: "End effector machining", cost: "BDT 24,000" },
  { item: "Arm Manufacturing", cost: "BDT 30,000" },
  { item: "Wheel machining (4 units)", cost: "BDT 1,20,000" },
  { item: "Chassis", cost: "BDT 50,000" },
  { item: "Science Machining", cost: "BDT 1,50,000" },
  { item: "Jetson Orin AGX", cost: "BDT 2,50,000" },
  { item: "Remote with rig antenna", cost: "BDT 2,25,000" },
  { item: "Other components", cost: "BDT 3,65,000" },
]

export default function SponsorsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Sponsors & Partners
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Partner with Us for
              <span className="text-primary block">Mars Exploration</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Join us in our mission to push the boundaries of space exploration. Your support enables us to compete
              globally and represent Bangladesh with pride on the international stage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="#sponsorship-tiers">
                  View Sponsorship Options
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Valued Partners</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We're grateful to our sponsors who make our Mars exploration dreams possible
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentSponsors.map((sponsor, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="relative h-20 mb-6 flex items-center justify-center">
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={`${sponsor.name} logo`}
                      width={160}
                      height={80}
                      className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <Badge variant="secondary" className="mb-3">
                    {sponsor.tier}
                  </Badge>
                  <h3 className="font-semibold mb-3">{sponsor.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{sponsor.description}</p>
                  <Button asChild variant="ghost" size="sm">
                    <Link href={sponsor.website} target="_blank" rel="noopener noreferrer">
                      Visit Website
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section id="sponsorship-tiers" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sponsorship Opportunities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Choose the partnership level that aligns with your organization's goals and budget
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorshipTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  tier.popular ? "ring-2 ring-primary" : ""
                } ${tier.borderColor}`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${tier.bgColor} rounded-lg mb-4`}>
                    <tier.icon className={`w-6 h-6 ${tier.color}`} />
                  </div>
                  <h3 className="text-xl font-bold">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground">{tier.subtitle}</p>
                  <div className="mt-4">
                    <div className="text-2xl font-bold text-primary">{tier.amount}</div>
                    <div className="text-xs text-muted-foreground">{tier.amountText}</div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full mt-6 ${
                      tier.popular ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/90"
                    }`}
                  >
                    <Link href="/contact">Choose This Plan</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Breakdown */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Your Support Helps</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Transparent breakdown of how sponsorship funds are utilized for URC 2025
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Budget Overview */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Total Budget: BDT 57,26,000</h3>
                <div className="space-y-4">
                  {budgetBreakdown.map((item, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold">{item.category}</h4>
                          <span className="font-bold text-primary">{item.amount}</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-500"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">{item.percentage}% of total budget</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Development Costs */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Robot Development Breakdown</h3>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      {developmentItems.map((item, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b last:border-0">
                          <span className="text-sm">{item.item}</span>
                          <span className="font-medium text-primary">{item.cost}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner With Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              The benefits of supporting Bangladesh's premier Mars rover team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Global Exposure</h3>
                <p className="text-muted-foreground">
                  Gain international visibility through our participation in prestigious competitions worldwide
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Brand Association</h3>
                <p className="text-muted-foreground">
                  Associate your brand with excellence, innovation, and the future of space exploration
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Social Impact</h3>
                <p className="text-muted-foreground">
                  Support education and inspire the next generation of engineers and space enthusiasts
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-primary text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
              <p className="text-lg mb-8 opacity-90">
                Join us in our mission to represent Bangladesh on the global stage of Mars exploration
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Get in Touch
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <Link href="tel:+8801538257003">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us Now
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
