import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Heart } from "lucide-react"

const sponsors = [
  {
    name: "MIST",
    logo: "/placeholder.svg?height=60&width=120&text=MIST",
    tier: "Title Sponsor",
    description: "Military Institute of Science and Technology",
  },
  {
    name: "Partner 1",
    logo: "/placeholder.svg?height=60&width=120&text=Partner+1",
    tier: "Gold Partner",
    description: "Supporting our mission to Mars",
  },
  {
    name: "Partner 2",
    logo: "/placeholder.svg?height=60&width=120&text=Partner+2",
    tier: "Silver Partner",
    description: "Enabling innovation in robotics",
  },
  {
    name: "Partner 3",
    logo: "/placeholder.svg?height=60&width=120&text=Partner+3",
    tier: "Silver Partner",
    description: "Advancing space exploration",
  },
]

export function SponsorsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Powered by Amazing Partners</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Our Sponsors & Partners</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We're grateful to our sponsors and partners who make our Mars exploration dreams possible
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sponsors.map((sponsor, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="relative h-16 mb-4 flex items-center justify-center">
                  <Image
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={`${sponsor.name} logo`}
                    width={120}
                    height={60}
                    className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="text-xs font-medium text-primary mb-1">{sponsor.tier}</div>
                <h3 className="font-semibold mb-2">{sponsor.name}</h3>
                <p className="text-xs text-muted-foreground">{sponsor.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4">
          <p className="text-muted-foreground">Interested in supporting the future of Mars exploration?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/sponsors">
                Become a Sponsor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/support">Support Our Mission</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
