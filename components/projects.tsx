"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const [showAll, setShowAll] = useState(false)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !revealed) {
            const cards = entry.target.querySelectorAll(".project-card")
            cards.forEach((card, index) => {
              if (index < 4) {
                setTimeout(() => card.classList.add("revealed"), index * 150)
              }
            })

            setRevealed(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [revealed])

  useEffect(() => {
  if (showAll && sectionRef.current) {
    const cards = sectionRef.current.querySelectorAll(".project-card")
    cards.forEach((card, index) => {
      if (index >= 4) {
        setTimeout(() => {
          card.classList.add("revealed")
        }, (index - 4) * 50)
      }
    })
  }
}, [showAll])

  const projects = [
    {
      title: "Cricket Analytics & Team Management System",
      description:
        "Comprehensive cricket management system with player analytics, news management, and moments tracking.",
      technologies: ["React.js", "ASP.NET Core", "MS SQL Server", "Bootstrap"],
      github: "https://github.com/SanjanaUmayangi/Cric-Lytics",
      hosted: "https://cric-lytics-demo.vercel.app",
      image: "/Cric-Lytics.png",
    },
    {
      title: "MindMemo - A smart Mood Journal",
      description:
        "A smart journal that listens to your mind, tracks your mood, and supports your emotional well-being.",
      technologies: ["Next.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
      github: "#",
      hosted: "#",
      image: "/mindmemo.png",
    },
    {
      title: "HomeFlow - WorkLife Balance App",
      description:
        "Co-developed HomeFlow, a web app that eases household tasks and reduces stress through smart scheduling.",
      technologies: ["Next.js", "React.js", "Bootstrap", "Firebase", "MySQL"],
      github: "https://github.com/SanjanaUmayangi/homeflow",
      hosted: "#",
      image: "/homeflow.png",
    },
    {
      title: "Apartment Management System",
      description:
        "A cloud-based system that automates apartment tasks and communication for efficient owner-tenant interaction.",
      technologies: ["Ballerina", "Firebase", "Email APIs", "HTML/CSS"],
      github: "#",
      hosted: "#",
      image: "/ApartmentManagementSystem.png",
    },
    {
      title: "Hand-Gesture Controlled Robotic Car",
      description: "A robotic car game controlled by a sensor glove, enabling gesture-based steering and navigation.",
      technologies: ["ESP32", "C++", "Gyroscope", "Motor Driver", "EasyEDA"],
      github: "#",
      hosted: "#",
      image: "/placeholder.svg",
    },
  ]

  const visibleProjects = showAll ? projects : projects.slice(0, 4)

  return (
    <section ref={sectionRef} id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950"></div>

      {/* floating blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-600/25 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-2xl animate-pulse-glow"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* heading */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-5xl font-bold text-white mb-6 font-serif bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            A showcase of my technical projects and contributions
          </p>
        </div>

        {/* grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {visibleProjects.map((project, index) => (
            <Card
              key={index}
              className="project-card glass hover-lift hover-glow group overflow-hidden border-blue-400/30 transition-all duration-500 opacity-0 translate-y-8"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* hover icons */}
                {/* <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 bg-slate-900/60 transition-all duration-500"> */}
                <div
  className="absolute inset-0 flex items-center justify-center gap-4
             bg-black/20 group-hover:bg-black/60
             opacity-0 group-hover:opacity-100
             transition-all duration-500"
>
  
                  {project.hosted && project.hosted !== "#" && (
                    <a
                      href={project.hosted}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-500/20 hover:bg-gray-500/40 text-gray-300 hover:text-white transition-all transform hover:scale-110"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  )}
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-500/20 hover:bg-gray-500/40 text-gray-300 hover:text-white transition-all transform hover:scale-110"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  )}

                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-blue-400/50 text-blue-300 bg-blue-500/20 hover:bg-blue-500/30 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More / Show Less */}
{/* Show More / Show Less */}
<div className="mt-20 text-center">
  <button
    onClick={() => setShowAll(!showAll)}
    className="text-blue-300 hover:text-white transition-colors text-lg font-medium flex flex-col items-center justify-center mx-auto"
  >
    {showAll ? "Show Less" : "Show More"}
    <span className="block mt- 0.1 text-2xl">
      {showAll ? "↑" : "↓"}
    </span>
  </button>
</div>

      </div>
    </section>
  )
}




















