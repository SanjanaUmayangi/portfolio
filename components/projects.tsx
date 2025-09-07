"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { useEffect, useRef } from "react"

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".project-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("revealed")
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "Cricket Analytics & Team Management System",
      description:
        "Comprehensive cricket management system with player analytics, news management, and moments tracking.",
      technologies: ["React.js", "ASP.NET Core", "MS SQL Server", "Bootstrap", "Chart.js"],
      github: "https://github.com/SanjanaUmayangi/Cric-Lytics",
      image: "/Cric-Lytics.png?height=200&width=350&text=Cricket+Analytics+Dashboard",
    },
    {
      title: "Apartment Management System",
      description:
        "A cloud-based system that automates apartment tasks and communication for efficient owner-tenant interaction.",
      technologies: ["Ballerina", "Firebase", "Email APIs", "HTML/CSS"],
      github: "#",
      image: "/ApartmentManagementSystem.png?height=200&width=350&text=Apartment+Management+System",
    },
    {
      title: "HomeFlow - WorkLife Balance App",
      description:
        "Co-developed HomeFlow, a web app that eases household tasks and reduces stress through smart scheduling.",
      technologies: ["Next.js", "React.js", "Bootstrap", "Firebase", "MySQL"],
      github: "https://github.com/SanjanaUmayangi/homeflow",
      image: "/homeflow.png?height=200&width=350&text=HomeFlow+Web+App",
    },
    {
      title: "Hand-Gesture Controlled Robotic Car",
      description: "A robotic car game controlled by a sensor glove, enabling gesture-based steering and navigation.",
      technologies: ["ESP32", "C++", "Gyroscope", "Motor Driver", "EasyEDA"],
      github: "#",
      image: "/placeholder.svg?height=200&width=350&text=Robotic+Car+Project",
    },
  ]

  return (
    <section ref={sectionRef} id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-enhanced-float animate-pulse-glow"></div>
        <div
          className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-600/25 rounded-full blur-3xl animate-enhanced-float animate-pulse-glow"
          style={{ animationDelay: "-2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-2xl animate-enhanced-float animate-pulse-glow"
          style={{ animationDelay: "-4s" }}
        ></div>
        <div
          className="absolute top-20 right-1/3 w-48 h-48 bg-purple-600/20 rounded-full blur-2xl animate-enhanced-float animate-pulse-glow"
          style={{ animationDelay: "-1s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-5xl font-bold text-white mb-6 font-serif bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            A showcase of my technical projects and contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="project-card glass hover-lift hover-glow group overflow-hidden border-blue-400/30 transition-all duration-500 opacity-0 translate-y-8"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
              </div>

              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-blue-400/50 text-blue-300 bg-blue-500/20 hover:bg-blue-500/30 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="text-xs border-gray-500/50 text-gray-400 bg-gray-500/10">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>

                <div className="pt-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-blue-500/50 text-blue-300 hover:bg-blue-500/30 hover:border-blue-400 bg-blue-500/10 transition-all duration-300 group/btn backdrop-blur-sm"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                      View Repository
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
