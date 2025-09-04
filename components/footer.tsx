import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Facebook, Instagram, Youtube, Mail, MapPin } from "lucide-react"

const footerLinks = {
  "Quick Links": [
    { name: "About Us", href: "/about" },
    { name: "Our Rovers", href: "/rovers" },
    { name: "Competitions", href: "/competitions" },
    { name: "Achievements", href: "/achievements" },
  ],
  Team: [
    { name: "Current Team", href: "/team" },
    { name: "Join Us", href: "/join" },
    { name: "Alumni", href: "/team/alumni" },
    { name: "Faculty", href: "/team/faculty" },
  ],
  Resources: [
    { name: "Gallery", href: "/gallery" },
    { name: "News & Media", href: "/news" },
    { name: "Downloads", href: "/resources" },
    { name: "Research Papers", href: "/resources/papers" },
  ],
  Support: [
    { name: "Become a Sponsor", href: "/sponsors" },
    { name: "Donate", href: "/support" },
    { name: "Partnership", href: "/sponsors/partnership" },
    { name: "Contact Us", href: "/contact" },
  ],
}

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/mongolbarota.mist",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/mist_mongolbarota",
    icon: Instagram,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@marsroverteammist9242",
    icon: Youtube,
  },
  {
    name: "Email",
    href: "mailto:mars.rover.mist@gmail.com",
    icon: Mail,
  },
]

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative h-12 w-12 bg-white rounded-full p-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mars_rover_1-eOMKJSkn4YwCVsyKyUvwLrGMkg1hOo.png"
                  alt="MIST Mongol Barota Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-xl font-bold">MIST</div>
                <div className="text-lg font-semibold text-primary">MONGOL BAROTA</div>
              </div>
            </Link>

            <p className="text-secondary-foreground/80 max-w-md text-pretty">
              Pioneering Mars exploration from Bangladesh. We are MIST's premier robotics team, competing globally and
              pushing the boundaries of space technology.
            </p>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Mirpur Cantonment, Dhaka-1216, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>mars.rover.mist@gmail.com</span>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Button key={social.name} asChild variant="ghost" size="icon" className="hover:bg-primary/10">
                  <Link href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="w-5 h-5" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h3 className="font-semibold text-lg">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-secondary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-secondary-foreground">© 2024 MIST Mongol Barota. All rights reserved.</div>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-secondary-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-secondary-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
