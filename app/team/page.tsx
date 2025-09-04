import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, Linkedin, Github, Users, Cpu, Wrench, Zap, FlaskConical, BarChart3 } from "lucide-react"

const leadership = [
  {
    name: "Md Jawadur Rahman",
    role: "Team Leader",
    department: "Computer Science & Engineering",
    level: "Level 4",
    email: "jawadrahman483@gmail.com",
    phone: "+8801538257003",
    image: "/placeholder.svg?height=200&width=200&text=Team+Leader",
    bio: "Leading the team with vision and technical expertise in robotics and AI systems.",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Co-Leader Name",
    role: "Co-Leader",
    department: "Electrical Engineering",
    level: "Level 4",
    email: "coleader@example.com",
    phone: "+8801XXXXXXXX",
    image: "/placeholder.svg?height=200&width=200&text=Co+Leader",
    bio: "Supporting team operations and specializing in electrical systems design.",
    linkedin: "#",
    github: "#",
  },
]

const facultyAdvisors = [
  {
    name: "Md Mahfuzul Karim Majumder, ndc, psc, te",
    role: "Chief Adviser",
    title: "Brigadier General",
    department: "Head, Dept of CSE, MIST",
    email: "head@cse.mist.ac.bd",
    phone: "+880-1769023916",
    image: "/placeholder.svg?height=200&width=200&text=Chief+Adviser",
    bio: "Providing strategic guidance and institutional support for the team's mission.",
  },
  {
    name: "Maj Shawkat Ali, ASC",
    role: "Faculty Adviser",
    department: "Administration Wing, MIST",
    phone: "+8801769117774",
    image: "/placeholder.svg?height=200&width=200&text=Faculty+Adviser",
    bio: "Administrative support and operational guidance for team activities.",
  },
  {
    name: "Shah Md. Ahasan Siddique, CSCA™, CSWA",
    role: "Faculty Adviser",
    title: "Lecturer",
    department: "Department of Mechanical Engineering, MIST",
    email: "ahasan.sid42@gmail.com",
    phone: "+8801710301593",
    image: "/placeholder.svg?height=200&width=200&text=Mechanical+Adviser",
    bio: "Technical guidance in mechanical design and manufacturing processes.",
  },
  {
    name: "Md Rashid Ul Islam",
    role: "Faculty Adviser",
    title: "Lecturer",
    department: "Department of Computer Science and Engineering, MIST",
    email: "rashid@cse.mist.ac.bd",
    phone: "+8801969-844062",
    image: "/placeholder.svg?height=200&width=200&text=CSE+Adviser",
    bio: "Software development and computer systems expertise for rover technology.",
  },
]

const subTeams = [
  {
    id: "mechanical",
    name: "Mechanical Team",
    icon: Wrench,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    description: "Responsible for rover chassis, arm design, wheel systems, and mechanical components.",
    responsibilities: [
      "Body, Arm and Wheel module design and production",
      "Science module design and production",
      "Mechanical system integration",
      "Manufacturing and assembly",
    ],
    skills: ["CAD Design", "Manufacturing", "Materials Science", "Mechanical Analysis"],
    members: [
      {
        name: "Mechanical Lead",
        role: "Team Lead",
        department: "Mechanical Engineering",
        image: "/placeholder.svg?height=150&width=150&text=Mech+Lead",
      },
      {
        name: "Member 1",
        role: "Design Engineer",
        department: "Mechanical Engineering",
        image: "/placeholder.svg?height=150&width=150&text=Member+1",
      },
      {
        name: "Member 2",
        role: "Manufacturing Specialist",
        department: "Mechanical Engineering",
        image: "/placeholder.svg?height=150&width=150&text=Member+2",
      },
    ],
  },
  {
    id: "electrical",
    name: "Electrical Team",
    icon: Zap,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
    description: "Handles power systems, circuit design, and electrical component integration.",
    responsibilities: [
      "Power module design and implementation",
      "Circuit board design and development",
      "Electrical system integration",
      "Power management optimization",
    ],
    skills: ["Circuit Design", "PCB Development", "Power Systems", "Embedded Systems"],
    members: [
      {
        name: "Electrical Lead",
        role: "Team Lead",
        department: "Electrical Engineering",
        image: "/placeholder.svg?height=150&width=150&text=Elec+Lead",
      },
      {
        name: "Member 3",
        role: "Circuit Designer",
        department: "Electrical Engineering",
        image: "/placeholder.svg?height=150&width=150&text=Member+3",
      },
    ],
  },
  {
    id: "software",
    name: "Software & Communication",
    icon: Cpu,
    color: "text-green-600",
    bgColor: "bg-green-100",
    description: "Develops software systems, communication protocols, and user interfaces.",
    responsibilities: [
      "Microprocessor interfacing and dashboard design",
      "Antenna and radio frequency control",
      "Camera feed control, connection and display",
      "Drone module design and implementation",
    ],
    skills: ["Programming", "Communication Systems", "UI/UX Design", "System Integration"],
    members: [
      {
        name: "Software Lead",
        role: "Team Lead",
        department: "Computer Science & Engineering",
        image: "/placeholder.svg?height=150&width=150&text=SW+Lead",
      },
      {
        name: "Member 4",
        role: "Backend Developer",
        department: "Computer Science & Engineering",
        image: "/placeholder.svg?height=150&width=150&text=Member+4",
      },
    ],
  },
  {
    id: "autonomy",
    name: "Rover Autonomy and Navigation",
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    description: "Focuses on AI, computer vision, and autonomous navigation systems.",
    responsibilities: [
      "Computer vision and AI development",
      "GPS navigation systems",
      "Object detection and avoidance",
      "Autonomous decision making",
    ],
    skills: ["Machine Learning", "Computer Vision", "AI Development", "Navigation Systems"],
    members: [
      {
        name: "AI Lead",
        role: "Team Lead",
        department: "Computer Science & Engineering",
        image: "/placeholder.svg?height=150&width=150&text=AI+Lead",
      },
    ],
  },
  {
    id: "science",
    name: "Science Team",
    icon: FlaskConical,
    color: "text-red-600",
    bgColor: "bg-red-100",
    description: "Handles scientific analysis, sample testing, and research methodologies.",
    responsibilities: [
      "Data analysis and decision from soil samples",
      "Chemical reactions and testing procedures",
      "Scientific methodology development",
      "Research documentation",
    ],
    skills: ["Chemistry", "Data Analysis", "Research Methods", "Scientific Writing"],
    members: [
      {
        name: "Science Lead",
        role: "Team Lead",
        department: "Petroleum and Mining Engineering",
        image: "/placeholder.svg?height=150&width=150&text=Sci+Lead",
      },
    ],
  },
  {
    id: "management",
    name: "Management Team",
    icon: BarChart3,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
    description: "Manages team operations, media relations, and financial planning.",
    responsibilities: [
      "Publication, media and outreach management",
      "Human resource management",
      "Finance management and budgeting",
      "Event coordination and logistics",
    ],
    skills: ["Project Management", "Communication", "Finance", "Marketing"],
    members: [
      {
        name: "Management Lead",
        role: "Team Lead",
        department: "Various Departments",
        image: "/placeholder.svg?height=150&width=150&text=Mgmt+Lead",
      },
    ],
  },
]

const previousTeamsByYear = [
  {
    year: "2024",
    competition: "URC 2024 Finals & ARC 2024 (2nd Position)",
    leadership: [
      {
        name: "Previous Leader 2024",
        role: "Team Leader",
        department: "Computer Science & Engineering",
        level: "Level 4",
        email: "leader2024@example.com",
        phone: "+8801XXXXXXXX",
        image: "/placeholder.svg?height=200&width=200&text=Leader+2024",
        bio: "Led the team to ARC 2024 runner-up position and URC finals qualification.",
        currentPosition: "Software Engineer at Tech Startup",
        achievements: ["ARC 2024 2nd Position", "URC 2024 Finals Qualification", "Highest South Asian Score (90.15%)"],
      },
    ],
    subTeams: [
      {
        id: "mechanical-2024",
        name: "Mechanical Team",
        icon: Wrench,
        color: "text-blue-600",
        bgColor: "bg-blue-100",
        description: "Responsible for Aurora X chassis, arm design, and mechanical systems for ARC 2024.",
        responsibilities: [
          "Aurora X chassis design and manufacturing",
          "Robotic arm optimization for competition tasks",
          "Wheel system enhancement for terrain navigation",
          "Science module integration and testing",
        ],
        skills: ["Advanced CAD Design", "CNC Machining", "Materials Engineering", "System Integration"],
        lead: {
          name: "Mech Lead 2024",
          role: "Mechanical Team Lead",
          department: "Mechanical Engineering",
          image: "/placeholder.svg?height=150&width=150&text=Mech+2024",
          currentPosition: "Design Engineer at Automotive Company",
        },
        members: [
          {
            name: "Mech Member 1",
            role: "Design Engineer",
            department: "Mechanical Engineering",
            image: "/placeholder.svg?height=150&width=150&text=MM1+2024",
            currentPosition: "CAD Designer",
          },
          {
            name: "Mech Member 2",
            role: "Manufacturing Specialist",
            department: "Mechanical Engineering",
            image: "/placeholder.svg?height=150&width=150&text=MM2+2024",
            currentPosition: "Manufacturing Engineer",
          },
        ],
      },
      {
        id: "electrical-2024",
        name: "Electrical Team",
        icon: Zap,
        color: "text-yellow-600",
        bgColor: "bg-yellow-100",
        description: "Developed power systems and electrical components for competition success.",
        responsibilities: [
          "Power distribution system optimization",
          "Motor control circuit development",
          "Sensor integration and calibration",
          "Communication system enhancement",
        ],
        skills: ["Power Electronics", "PCB Design", "Embedded Programming", "Signal Processing"],
        lead: {
          name: "Electrical Lead 2024",
          role: "Electrical Team Lead",
          department: "Electrical Engineering",
          image: "/placeholder.svg?height=150&width=150&text=Elec+2024",
          currentPosition: "Hardware Engineer at Tech Company",
        },
        members: [
          {
            name: "Elec Member 1",
            role: "Circuit Designer",
            department: "Electrical Engineering",
            image: "/placeholder.svg?height=150&width=150&text=EM1+2024",
            currentPosition: "Electronics Engineer",
          },
        ],
      },
      {
        id: "software-2024",
        name: "Software & Communication",
        icon: Cpu,
        color: "text-green-600",
        bgColor: "bg-green-100",
        description: "Developed software systems and communication protocols for rover operations.",
        responsibilities: [
          "Real-time control system development",
          "Computer vision algorithm optimization",
          "Communication protocol implementation",
          "User interface design and testing",
        ],
        skills: ["Real-time Programming", "Computer Vision", "Network Programming", "UI/UX Design"],
        lead: {
          name: "SW Lead 2024",
          role: "Software Team Lead",
          department: "Computer Science & Engineering",
          image: "/placeholder.svg?height=150&width=150&text=SW+2024",
          currentPosition: "Full Stack Developer",
        },
        members: [
          {
            name: "SW Member 1",
            role: "Backend Developer",
            department: "Computer Science & Engineering",
            image: "/placeholder.svg?height=150&width=150&text=SWM1+2024",
            currentPosition: "Backend Engineer",
          },
        ],
      },
    ],
  },
  {
    year: "2021",
    competition: "URC 2021 Global Champions",
    leadership: [
      {
        name: "Championship Leader",
        role: "Team Leader",
        department: "Computer Science & Engineering",
        level: "Level 4",
        email: "champion@example.com",
        phone: "+8801XXXXXXXX",
        image: "/placeholder.svg?height=200&width=200&text=Champion+Leader",
        bio: "Led the historic URC 2021 championship victory, the first global title for Bangladesh.",
        currentPosition: "Senior Software Engineer at International Tech Company",
        achievements: ["URC 2021 Global Champions", "First Bangladesh Team to Win URC", "Developed Phoenix Rover"],
      },
    ],
    subTeams: [
      {
        id: "mechanical-2021",
        name: "Mechanical Team",
        icon: Wrench,
        color: "text-blue-600",
        bgColor: "bg-blue-100",
        description: "Designed and built the championship-winning Phoenix rover mechanical systems.",
        responsibilities: [
          "Phoenix rover chassis design and optimization",
          "Championship-winning arm mechanism development",
          "Advanced suspension system implementation",
          "Lightweight yet robust structural design",
        ],
        skills: [
          "Championship-level Design",
          "Advanced Manufacturing",
          "Structural Optimization",
          "Competition Strategy",
        ],
        lead: {
          name: "Phoenix Designer",
          role: "Mechanical Team Lead",
          department: "Mechanical Engineering",
          image: "/placeholder.svg?height=150&width=150&text=Phoenix+Mech",
          currentPosition: "Senior Mechanical Engineer at Aerospace Company",
        },
        members: [
          {
            name: "Phoenix Mech 1",
            role: "Chassis Designer",
            department: "Mechanical Engineering",
            image: "/placeholder.svg?height=150&width=150&text=PM1+2021",
            currentPosition: "Robotics Engineer",
          },
          {
            name: "Phoenix Mech 2",
            role: "Arm Specialist",
            department: "Mechanical Engineering",
            image: "/placeholder.svg?height=150&width=150&text=PM2+2021",
            currentPosition: "Design Engineer",
          },
        ],
      },
      {
        id: "software-2021",
        name: "Software & Communication",
        icon: Cpu,
        color: "text-green-600",
        bgColor: "bg-green-100",
        description: "Developed the award-winning software systems that secured the global championship.",
        responsibilities: [
          "Championship-winning autonomous navigation",
          "Advanced computer vision algorithms",
          "Real-time mission control systems",
          "Robust communication protocols",
        ],
        skills: ["AI/ML Development", "Advanced Computer Vision", "Real-time Systems", "Competition Programming"],
        lead: {
          name: "Phoenix Programmer",
          role: "Software Team Lead",
          department: "Computer Science & Engineering",
          image: "/placeholder.svg?height=150&width=150&text=Phoenix+SW",
          currentPosition: "AI Engineer at Robotics Company",
        },
        members: [
          {
            name: "Phoenix SW 1",
            role: "AI Developer",
            department: "Computer Science & Engineering",
            image: "/placeholder.svg?height=150&width=150&text=PSW1+2021",
            currentPosition: "Machine Learning Engineer",
          },
        ],
      },
      {
        id: "electrical-2021",
        name: "Electrical Team",
        icon: Zap,
        color: "text-yellow-600",
        bgColor: "bg-yellow-100",
        description: "Created reliable electrical systems that powered the championship victory.",
        responsibilities: [
          "Championship-grade power management",
          "High-reliability circuit design",
          "Advanced sensor integration",
          "Competition-tested electrical systems",
        ],
        skills: ["High-reliability Design", "Advanced Power Systems", "Competition Electronics", "System Reliability"],
        lead: {
          name: "Phoenix Electrical",
          role: "Electrical Team Lead",
          department: "Electrical Engineering",
          image: "/placeholder.svg?height=150&width=150&text=Phoenix+Elec",
          currentPosition: "Hardware Engineer at Tech Startup",
        },
        members: [
          {
            name: "Phoenix Elec 1",
            role: "Circuit Designer",
            department: "Electrical Engineering",
            image: "/placeholder.svg?height=150&width=150&text=PE1+2021",
            currentPosition: "Electronics Engineer",
          },
        ],
      },
      {
        id: "science-2021",
        name: "Science Team",
        icon: FlaskConical,
        color: "text-red-600",
        bgColor: "bg-red-100",
        description: "Developed scientific analysis capabilities that contributed to the championship win.",
        responsibilities: [
          "Advanced soil analysis algorithms",
          "Scientific methodology development",
          "Data analysis and interpretation",
          "Research documentation and reporting",
        ],
        skills: ["Scientific Analysis", "Data Science", "Research Methods", "Laboratory Techniques"],
        lead: {
          name: "Phoenix Scientist",
          role: "Science Team Lead",
          department: "Petroleum and Mining Engineering",
          image: "/placeholder.svg?height=150&width=150&text=Phoenix+Sci",
          currentPosition: "Research Scientist at University",
        },
        members: [
          {
            name: "Phoenix Sci 1",
            role: "Data Analyst",
            department: "Petroleum and Mining Engineering",
            image: "/placeholder.svg?height=150&width=150&text=PSci1+2021",
            currentPosition: "Data Scientist",
          },
        ],
      },
    ],
  },
  {
    year: "2015",
    competition: "URC 2015 (9th Position, Best Asian Team)",
    leadership: [
      {
        name: "Pioneer Leader",
        role: "Team Leader",
        department: "Computer Science & Engineering",
        level: "Level 4",
        email: "pioneer@example.com",
        phone: "+8801XXXXXXXX",
        image: "/placeholder.svg?height=200&width=200&text=Pioneer+Leader",
        bio: "Led the team to become the first Asian team to achieve top 10 position in URC.",
        currentPosition: "Senior Engineering Manager at Multinational Corporation",
        achievements: ["URC 2015 9th Position", "Best Asian Team Award", "Established Team Legacy"],
      },
    ],
    subTeams: [
      {
        id: "mechanical-2015",
        name: "Mechanical Team",
        icon: Wrench,
        color: "text-blue-600",
        bgColor: "bg-blue-100",
        description: "Pioneered mechanical design innovations that established team reputation.",
        responsibilities: [
          "Innovative rover chassis development",
          "First-generation arm mechanism design",
          "Terrain adaptation system creation",
          "Manufacturing process establishment",
        ],
        skills: ["Innovative Design", "Prototype Development", "Manufacturing Setup", "Design Optimization"],
        lead: {
          name: "Pioneer Mech Lead",
          role: "Mechanical Team Lead",
          department: "Mechanical Engineering",
          image: "/placeholder.svg?height=150&width=150&text=Pioneer+Mech",
          currentPosition: "Principal Engineer at Manufacturing Company",
        },
        members: [
          {
            name: "Pioneer Mech 1",
            role: "Structural Engineer",
            department: "Mechanical Engineering",
            image: "/placeholder.svg?height=150&width=150&text=PiM1+2015",
            currentPosition: "Senior Design Engineer",
          },
        ],
      },
      {
        id: "software-2015",
        name: "Software & Communication",
        icon: Cpu,
        color: "text-green-600",
        bgColor: "bg-green-100",
        description: "Developed foundational software systems that set team standards.",
        responsibilities: [
          "Basic autonomous navigation development",
          "Control system programming",
          "Communication protocol establishment",
          "User interface design",
        ],
        skills: ["System Programming", "Control Systems", "Communication Protocols", "Interface Design"],
        lead: {
          name: "Pioneer SW Lead",
          role: "Software Team Lead",
          department: "Computer Science & Engineering",
          image: "/placeholder.svg?height=150&width=150&text=Pioneer+SW",
          currentPosition: "Technical Lead at Software Company",
        },
        members: [
          {
            name: "Pioneer SW 1",
            role: "Control Systems Developer",
            department: "Computer Science & Engineering",
            image: "/placeholder.svg?height=150&width=150&text=PiSW1+2015",
            currentPosition: "Senior Software Developer",
          },
        ],
      },
      {
        id: "electrical-2015",
        name: "Electrical Team",
        icon: Zap,
        color: "text-yellow-600",
        bgColor: "bg-yellow-100",
        description: "Established electrical engineering foundations for future success.",
        responsibilities: [
          "Basic power system design",
          "Motor control implementation",
          "Sensor integration setup",
          "Electrical safety protocols",
        ],
        skills: ["Basic Electronics", "Power Systems", "Motor Control", "Safety Engineering"],
        lead: {
          name: "Pioneer Elec Lead",
          role: "Electrical Team Lead",
          department: "Electrical Engineering",
          image: "/placeholder.svg?height=150&width=150&text=Pioneer+Elec",
          currentPosition: "Senior Electrical Engineer",
        },
        members: [
          {
            name: "Pioneer Elec 1",
            role: "Power Systems Engineer",
            department: "Electrical Engineering",
            image: "/placeholder.svg?height=150&width=150&text=PiE1+2015",
            currentPosition: "Power Systems Specialist",
          },
        ],
      },
    ],
  },
  {
    year: "2014",
    competition: "URC 2014 (12th Position, First from Bangladesh)",
    leadership: [
      {
        name: "Founding Leader",
        role: "Founding Team Leader",
        department: "Computer Science & Engineering",
        level: "Level 4",
        email: "founder@example.com",
        phone: "+8801XXXXXXXX",
        image: "/placeholder.svg?height=200&width=200&text=Founder+Leader",
        bio: "Founded MIST Mongol Barota and led the first Bangladeshi team to compete in URC.",
        currentPosition: "CTO at Technology Startup",
        achievements: [
          "Founded Team Mongol Barota",
          "First Bangladesh URC Participation",
          "Pioneered Mars Rover Development in Bangladesh",
        ],
      },
    ],
    subTeams: [
      {
        id: "mechanical-2014",
        name: "Mechanical Team",
        icon: Wrench,
        color: "text-blue-600",
        bgColor: "bg-blue-100",
        description: "Founded the mechanical engineering foundation of MIST Mongol Barota.",
        responsibilities: [
          "First rover prototype development",
          "Basic mechanical system design",
          "Manufacturing process initiation",
          "Team methodology establishment",
        ],
        skills: ["Prototype Development", "Basic CAD", "Manufacturing Basics", "Team Building"],
        lead: {
          name: "Founding Mech Lead",
          role: "Founding Mechanical Lead",
          department: "Mechanical Engineering",
          image: "/placeholder.svg?height=150&width=150&text=Founding+Mech",
          currentPosition: "Engineering Director at Industrial Company",
        },
        members: [
          {
            name: "Founding Mech 1",
            role: "Prototype Developer",
            department: "Mechanical Engineering",
            image: "/placeholder.svg?height=150&width=150&text=FM1+2014",
            currentPosition: "Senior Mechanical Engineer",
          },
        ],
      },
      {
        id: "software-2014",
        name: "Software & Communication",
        icon: Cpu,
        color: "text-green-600",
        bgColor: "bg-green-100",
        description: "Established the software development culture and initial systems.",
        responsibilities: [
          "Basic rover control system development",
          "Initial communication setup",
          "Programming standards establishment",
          "Software team culture creation",
        ],
        skills: ["Basic Programming", "System Setup", "Team Leadership", "Documentation"],
        lead: {
          name: "Founding SW Lead",
          role: "Founding Software Lead",
          department: "Computer Science & Engineering",
          image: "/placeholder.svg?height=150&width=150&text=Founding+SW",
          currentPosition: "Senior Architect at Tech Giant",
        },
        members: [
          {
            name: "Founding SW 1",
            role: "System Developer",
            department: "Computer Science & Engineering",
            image: "/placeholder.svg?height=150&width=150&text=FSW1+2014",
            currentPosition: "Principal Software Engineer",
          },
        ],
      },
      {
        id: "electrical-2014",
        name: "Electrical Team",
        icon: Zap,
        color: "text-yellow-600",
        bgColor: "bg-yellow-100",
        description: "Pioneered electrical systems development for Mars rover applications.",
        responsibilities: [
          "Basic electrical system setup",
          "Power distribution design",
          "Component integration",
          "Safety protocol development",
        ],
        skills: ["Basic Electronics", "System Integration", "Safety Protocols", "Team Coordination"],
        lead: {
          name: "Founding Elec Lead",
          role: "Founding Electrical Lead",
          department: "Electrical Engineering",
          image: "/placeholder.svg?height=150&width=150&text=Founding+Elec",
          currentPosition: "Principal Electrical Engineer",
        },
        members: [
          {
            name: "Founding Elec 1",
            role: "Systems Integrator",
            department: "Electrical Engineering",
            image: "/placeholder.svg?height=150&width=150&text=FE1+2014",
            currentPosition: "Senior Systems Engineer",
          },
        ],
      },
    ],
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Our Team
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              The Minds Behind
              <span className="text-primary block">Mars Exploration</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Meet the passionate engineers, researchers, and innovators who make up MIST Mongol Barota. Our
              multidisciplinary team brings together expertise from across engineering fields to push the boundaries of
              Mars rover technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/join">Join Our Team</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Navigation Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="current" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12 max-w-md mx-auto">
              <TabsTrigger value="current">Current Team</TabsTrigger>
              <TabsTrigger value="previous">Previous Team</TabsTrigger>
            </TabsList>

            <TabsContent value="current" className="space-y-20">
              {/* Leadership */}
              <div>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                    Our dedicated leaders who guide the team towards excellence and innovation
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {leadership.map((leader, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="relative w-32 h-32 mx-auto mb-6">
                          <Image
                            src={leader.image || "/placeholder.svg"}
                            alt={leader.name}
                            fill
                            className="object-cover rounded-full"
                          />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                        <Badge variant="secondary" className="mb-3">
                          {leader.role}
                        </Badge>
                        <div className="text-sm text-muted-foreground mb-4">
                          <div>{leader.department}</div>
                          <div>{leader.level}</div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-6">{leader.bio}</p>
                        <div className="flex justify-center gap-4">
                          <Button asChild variant="ghost" size="sm">
                            <Link href={`mailto:${leader.email}`}>
                              <Mail className="w-4 h-4" />
                            </Link>
                          </Button>
                          <Button asChild variant="ghost" size="sm">
                            <Link href={`tel:${leader.phone}`}>
                              <Phone className="w-4 h-4" />
                            </Link>
                          </Button>
                          <Button asChild variant="ghost" size="sm">
                            <Link href={leader.linkedin || "#"}>
                              <Linkedin className="w-4 h-4" />
                            </Link>
                          </Button>
                          <Button asChild variant="ghost" size="sm">
                            <Link href={leader.github || "#"}>
                              <Github className="w-4 h-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Faculty Advisors */}
              <div className="bg-muted/30 py-20 -mx-4">
                <div className="container mx-auto px-4">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Faculty Advisors</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                      Experienced faculty members providing guidance and institutional support
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {facultyAdvisors.map((advisor, index) => (
                      <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="relative w-24 h-24 mx-auto mb-4">
                            <Image
                              src={advisor.image || "/placeholder.svg"}
                              alt={advisor.name}
                              fill
                              className="object-cover rounded-full"
                            />
                          </div>
                          <h3 className="font-semibold mb-1 text-sm">{advisor.name}</h3>
                          <Badge variant="outline" className="mb-2 text-xs">
                            {advisor.role}
                          </Badge>
                          {advisor.title && <div className="text-xs text-muted-foreground mb-1">{advisor.title}</div>}
                          <div className="text-xs text-muted-foreground mb-3">{advisor.department}</div>
                          <p className="text-xs text-muted-foreground mb-4">{advisor.bio}</p>
                          <div className="flex justify-center gap-2">
                            {advisor.email && (
                              <Button asChild variant="ghost" size="sm">
                                <Link href={`mailto:${advisor.email}`}>
                                  <Mail className="w-3 h-3" />
                                </Link>
                              </Button>
                            )}
                            {advisor.phone && (
                              <Button asChild variant="ghost" size="sm">
                                <Link href={`tel:${advisor.phone}`}>
                                  <Phone className="w-3 h-3" />
                                </Link>
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sub-teams */}
              <div>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Sub-teams</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                    Specialized teams working together to create world-class Mars rovers
                  </p>
                </div>

                <Tabs defaultValue="mechanical" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-12">
                    {subTeams.map((team) => (
                      <TabsTrigger key={team.id} value={team.id} className="text-xs">
                        {team.name.split(" ")[0]}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {subTeams.map((team) => (
                    <TabsContent key={team.id} value={team.id} className="space-y-8">
                      <div className="text-center">
                        <div
                          className={`inline-flex items-center justify-center w-16 h-16 ${team.bgColor} rounded-lg mb-4`}
                        >
                          {team.icon && <team.icon className={`w-8 h-8 ${team.color}`} />}
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{team.name}</h3>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{team.description}</p>
                      </div>

                      <div className="grid lg:grid-cols-2 gap-8">
                        <Card>
                          <CardContent className="p-6">
                            <h4 className="font-semibold mb-4">Key Responsibilities</h4>
                            <ul className="space-y-2">
                              {team.responsibilities.map((responsibility, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                  {responsibility}
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardContent className="p-6">
                            <h4 className="font-semibold mb-4">Required Skills</h4>
                            <div className="flex flex-wrap gap-2">
                              {team.skills.map((skill, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-6 text-center">Team Members</h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {team.members.map((member, i) => (
                            <Card key={i} className="text-center hover:shadow-lg transition-shadow">
                              <CardContent className="p-6">
                                <div className="relative w-20 h-20 mx-auto mb-4">
                                  <Image
                                    src={member.image || "/placeholder.svg"}
                                    alt={member.name}
                                    fill
                                    className="object-cover rounded-full"
                                  />
                                </div>
                                <h5 className="font-semibold mb-1">{member.name}</h5>
                                <Badge variant="secondary" className="mb-2 text-xs">
                                  {member.role}
                                </Badge>
                                <div className="text-xs text-muted-foreground">{member.department}</div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </TabsContent>

            {/* Previous Team */}
            <TabsContent value="previous" className="space-y-20">
              <div>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Previous Team Members</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                    Honoring our alumni who laid the foundation for our success and continue to excel in their careers
                  </p>
                </div>

                <Tabs defaultValue="2024" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 max-w-2xl mx-auto">
                    {previousTeamsByYear.map((yearData) => (
                      <TabsTrigger key={yearData.year} value={yearData.year}>
                        {yearData.year}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {previousTeamsByYear.map((yearData) => (
                    <TabsContent key={yearData.year} value={yearData.year} className="space-y-16">
                      {/* Year Header */}
                      <div className="text-center">
                        <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
                          {yearData.year} Team
                        </Badge>
                        <h3 className="text-2xl font-bold mb-4">{yearData.competition}</h3>
                      </div>

                      {/* Leadership */}
                      <div>
                        <h4 className="text-xl font-bold mb-8 text-center">Leadership</h4>
                        <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
                          {yearData.leadership.map((leader, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                              <CardContent className="p-6 text-center">
                                <div className="relative w-32 h-32 mx-auto mb-6">
                                  <Image
                                    src={leader.image || "/placeholder.svg"}
                                    alt={leader.name}
                                    fill
                                    className="object-cover rounded-full"
                                  />
                                </div>
                                <h5 className="text-xl font-bold mb-2">{leader.name}</h5>
                                <Badge variant="secondary" className="mb-3">
                                  {leader.role}
                                </Badge>
                                <div className="text-sm text-muted-foreground mb-4">
                                  <div>{leader.department}</div>
                                  <div className="font-medium text-primary mt-2">{leader.currentPosition}</div>
                                </div>
                                <p className="text-sm text-muted-foreground mb-6">{leader.bio}</p>

                                {/* Achievements */}
                                <div className="mb-6">
                                  <h6 className="font-semibold mb-3 text-sm">Key Achievements</h6>
                                  <div className="space-y-2">
                                    {leader.achievements.map((achievement, i) => (
                                      <div key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                                        {achievement}
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div className="flex justify-center gap-4">
                                  <Button asChild variant="ghost" size="sm">
                                    <Link href={`mailto:${leader.email}`}>
                                      <Mail className="w-4 h-4" />
                                    </Link>
                                  </Button>
                                  <Button asChild variant="ghost" size="sm">
                                    <Link href={`tel:${leader.phone}`}>
                                      <Phone className="w-4 h-4" />
                                    </Link>
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="text-center mb-16">
                          <h4 className="text-xl font-bold mb-4">Sub-teams</h4>
                          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                            Specialized teams that contributed to {yearData.year} achievements
                          </p>
                        </div>

                        <Tabs defaultValue={yearData.subTeams[0]?.id} className="w-full">
                          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
                            {yearData.subTeams.map((team) => (
                              <TabsTrigger key={team.id} value={team.id} className="text-xs">
                                {team.name.split(" ")[0]}
                              </TabsTrigger>
                            ))}
                          </TabsList>

                          {yearData.subTeams.map((team) => (
                            <TabsContent key={team.id} value={team.id} className="space-y-8">
                              <div className="text-center">
                                <div
                                  className={`inline-flex items-center justify-center w-16 h-16 ${team.bgColor} rounded-lg mb-4`}
                                >
                                  {team.icon && <team.icon className={`w-8 h-8 ${team.color}`} />}
                                </div>
                                <h5 className="text-2xl font-bold mb-4">{team.name}</h5>
                                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{team.description}</p>
                              </div>

                              <div className="grid lg:grid-cols-2 gap-8">
                                <Card>
                                  <CardContent className="p-6">
                                    <h6 className="font-semibold mb-4">Key Responsibilities</h6>
                                    <ul className="space-y-2">
                                      {team.responsibilities.map((responsibility, i) => (
                                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                          {responsibility}
                                        </li>
                                      ))}
                                    </ul>
                                  </CardContent>
                                </Card>

                                <Card>
                                  <CardContent className="p-6">
                                    <h6 className="font-semibold mb-4">Skills Developed</h6>
                                    <div className="flex flex-wrap gap-2">
                                      {team.skills.map((skill, i) => (
                                        <Badge key={i} variant="outline" className="text-xs">
                                          {skill}
                                        </Badge>
                                      ))}
                                    </div>
                                  </CardContent>
                                </Card>
                              </div>

                              <div>
                                <h6 className="font-semibold mb-6 text-center">Team Members</h6>

                                {/* Team Lead */}
                                <div className="mb-8">
                                  <h6 className="font-medium mb-4 text-center text-sm text-muted-foreground">
                                    Team Lead
                                  </h6>
                                  <Card className="max-w-md mx-auto">
                                    <CardContent className="p-4 text-center">
                                      <div className="relative w-20 h-20 mx-auto mb-4">
                                        <Image
                                          src={team.lead.image || "/placeholder.svg"}
                                          alt={team.lead.name}
                                          fill
                                          className="object-cover rounded-full"
                                        />
                                      </div>
                                      <h6 className="font-semibold mb-1 text-sm">{team.lead.name}</h6>
                                      <Badge variant="outline" className="mb-2 text-xs">
                                        {team.lead.role}
                                      </Badge>
                                      <div className="text-xs text-muted-foreground mb-2">{team.lead.department}</div>
                                      <div className="text-xs font-medium text-primary">
                                        {team.lead.currentPosition}
                                      </div>
                                    </CardContent>
                                  </Card>
                                </div>

                                {/* Team Members */}
                                <div>
                                  <h6 className="font-medium mb-4 text-center text-sm text-muted-foreground">
                                    Team Members
                                  </h6>
                                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {team.members.map((member, memberIndex) => (
                                      <Card key={memberIndex} className="text-center hover:shadow-lg transition-shadow">
                                        <CardContent className="p-4">
                                          <div className="relative w-16 h-16 mx-auto mb-3">
                                            <Image
                                              src={member.image || "/placeholder.svg"}
                                              alt={member.name}
                                              fill
                                              className="object-cover rounded-full"
                                            />
                                          </div>
                                          <h6 className="font-semibold mb-1 text-sm">{member.name}</h6>
                                          <Badge variant="secondary" className="mb-2 text-xs">
                                            {member.role}
                                          </Badge>
                                          <div className="text-xs text-muted-foreground mb-2">{member.department}</div>
                                          <div className="text-xs font-medium text-primary">
                                            {member.currentPosition}
                                          </div>
                                        </CardContent>
                                      </Card>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </TabsContent>
                          ))}
                        </Tabs>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>

                <div className="text-center mt-16">
                  <p className="text-muted-foreground mb-6">
                    Want to connect with our alumni or learn more about their journey?
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/contact">Contact Alumni Network</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Team Statistics</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our diverse and growing team across multiple engineering disciplines
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">40+</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">6</div>
                <div className="text-sm text-muted-foreground">Sub-teams</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">4</div>
                <div className="text-sm text-muted-foreground">Engineering Departments</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">12+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
