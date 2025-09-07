"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLoading } from "./loading-provider"
import { LoadingSkeleton } from "./loading-skeleton"
import { title } from "process"

export function Skills() {
  const { isLoading } = useLoading()

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        {
          name: "JavaScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
      ],
      color: "from-blue-500 to-cyan-500",
    }, 
    {
      title: "Web Development",
      skills: [
        { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "ASP.NET", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
        {
          name: "Tailwind",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        },
        { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        {
          name: "Bootstrap",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
        {
          name: "Express.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" },
        { name: "MSSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      // title: "Tools & Technologies",
      title: "Version Control",
      skills: [
        // { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        // { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        // { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      ],
      color: "from-orange-500 to-red-500",
    },
  ]

  if (isLoading) {
    return (
      <section id="skills" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <LoadingSkeleton className="h-12 w-64 mx-auto mb-4" />
            <LoadingSkeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <LoadingSkeleton key={i} className="h-64 w-full" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="skills" className="py-20 bg-slate-800/50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-40 w-72 h-72 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-40 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold text-white mb-6">Technical Skills</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className={`text-xl text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-110 group cursor-pointer"
                    >
                      <div className="w-12 h-12 mb-2 flex items-center justify-center">
                        <img
                          src={skill.logo || "/placeholder.svg"}
                          alt={skill.name}
                          className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            // Fallback to placeholder if logo fails to load
                            e.currentTarget.src = `/placeholder.svg?height=40&width=40&text=${skill.name.charAt(0)}`
                          }}
                        />
                      </div>
                      <span className="text-xs text-gray-300 text-center font-medium group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
