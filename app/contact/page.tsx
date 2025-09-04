"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Mail, Phone, MapPin, Clock, User, Building, Facebook, Instagram, Youtube } from "lucide-react"
import { useState } from "react"

const contactInfo = [
  {
    category: "Team Leadership",
    contacts: [
      {
        name: "Md Jawadur Rahman",
        role: "Team Leader",
        department: "Level 4 Student, CSE",
        email: "jawadrahman483@gmail.com",
        phone: "+8801538257003",
      },
    ],
  },
  {
    category: "Faculty Advisors",
    contacts: [
      {
        name: "Md Mahfuzul Karim Majumder, ndc, psc, te",
        role: "Chief Adviser",
        department: "Brigadier General, Head, Dept of CSE, MIST",
        email: "head@cse.mist.ac.bd",
        phone: "+880-1769023916",
      },
      {
        name: "Maj Shawkat Ali, ASC",
        role: "Faculty Adviser",
        department: "Administration Wing, MIST",
        phone: "+8801769117774",
      },
      {
        name: "Shah Md. Ahasan Siddique, CSCA™, CSWA",
        role: "Faculty Adviser",
        department: "Lecturer, Department of Mechanical Engineering, MIST",
        email: "ahasan.sid42@gmail.com",
        phone: "+8801710301593",
      },
      {
        name: "Md Rashid Ul Islam",
        role: "Faculty Adviser",
        department: "Lecturer, Department of Computer Science and Engineering, MIST",
        email: "rashid@cse.mist.ac.bd",
        phone: "+8801969-844062",
      },
    ],
  },
]

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/mongolbarota.mist",
    icon: Facebook,
    color: "text-blue-600",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/mist_mongolbarota",
    icon: Instagram,
    color: "text-pink-600",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@marsroverteammist9242",
    icon: Youtube,
    color: "text-red-600",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              <Mail className="w-4 h-4 mr-2" />
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Get in Touch with
              <span className="text-primary block">Our Team</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Whether you're interested in sponsorship, joining our team, or learning more about our mission, we'd love
              to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization (Optional)</Label>
                      <Input
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Your company or institution"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>

              {/* General Contact */}
              <Card className="mb-6">
                <CardHeader>
                  <h3 className="text-xl font-semibold">General Information</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Email</div>
                      <Link
                        href="mailto:mars.rover.mist@gmail.com"
                        className="text-muted-foreground hover:text-primary"
                      >
                        mars.rover.mist@gmail.com
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Address</div>
                      <div className="text-muted-foreground">
                        Military Institute of Science and Technology
                        <br />
                        Mirpur Cantonment, Dhaka-1216
                        <br />
                        Bangladesh
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Response Time</div>
                      <div className="text-muted-foreground">We typically respond within 24-48 hours</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Specific Contacts */}
              {contactInfo.map((category, index) => (
                <Card key={index} className="mb-6">
                  <CardHeader>
                    <h3 className="text-lg font-semibold">{category.category}</h3>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.contacts.map((contact, i) => (
                      <div key={i} className="border-b last:border-0 pb-4 last:pb-0">
                        <div className="flex items-start gap-3">
                          <User className="w-4 h-4 text-primary mt-1" />
                          <div className="flex-1">
                            <div className="font-medium">{contact.name}</div>
                            <div className="text-sm text-muted-foreground mb-2">
                              {contact.role}
                              <br />
                              {contact.department}
                            </div>
                            <div className="space-y-1">
                              {contact.email && (
                                <div className="flex items-center gap-2">
                                  <Mail className="w-3 h-3 text-muted-foreground" />
                                  <Link
                                    href={`mailto:${contact.email}`}
                                    className="text-xs text-muted-foreground hover:text-primary"
                                  >
                                    {contact.email}
                                  </Link>
                                </div>
                              )}
                              {contact.phone && (
                                <div className="flex items-center gap-2">
                                  <Phone className="w-3 h-3 text-muted-foreground" />
                                  <Link
                                    href={`tel:${contact.phone}`}
                                    className="text-xs text-muted-foreground hover:text-primary"
                                  >
                                    {contact.phone}
                                  </Link>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Quick Actions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Connect With Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Follow our journey and stay updated with our latest achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {socialLinks.map((social, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <social.icon className={`w-8 h-8 ${social.color} mx-auto mb-4`} />
                  <h3 className="font-semibold mb-2">{social.name}</h3>
                  <Button asChild variant="outline" size="sm">
                    <Link href={social.url} target="_blank" rel="noopener noreferrer">
                      Follow Us
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button asChild variant="outline" className="h-auto p-4 bg-transparent">
              <Link href="/join">
                <User className="w-5 h-5 mr-2" />
                Join Our Team
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto p-4 bg-transparent">
              <Link href="/sponsors">
                <Building className="w-5 h-5 mr-2" />
                Become a Sponsor
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto p-4 bg-transparent">
              <Link href="/gallery">
                <Mail className="w-5 h-5 mr-2" />
                Media Inquiries
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto p-4 bg-transparent">
              <Link href="/about">
                <Building className="w-5 h-5 mr-2" />
                Learn About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
