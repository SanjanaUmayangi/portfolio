"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Download, Sparkles } from "lucide-react"
import { useLoading } from "./loading-provider"
import { LoadingSkeleton } from "./loading-skeleton"

export function Hero() {
  const { isLoading } = useLoading()

  if (isLoading) {
    return (
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <LoadingSkeleton className="h-16 w-3/4" />
              <LoadingSkeleton className="h-6 w-1/2" />
              <LoadingSkeleton className="h-20 w-full" />
              <div className="flex gap-4">
                <LoadingSkeleton className="h-12 w-32" />
                <LoadingSkeleton className="h-12 w-32" />
              </div>
            </div> 
            <div className="relative">
              <LoadingSkeleton className="w-80 h-80 mx-auto rounded-full" />
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-indigo-500/5 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-blue-400 font-medium">
                <Sparkles className="h-5 w-5" />
                Welcome to my portfolio
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
                  Sanjana Umayangi
                </span>
              </h1>
              <p className="text-2xl text-blue-200 leading-relaxed font-medium">
                IT Undergraduate at University of Moratuwa
              </p>
              <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                A driven individual with a strong foundation in technical skills, seeking opportunities in software
                engineering to contribute to innovative solutions and continuous growth.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="outline"
                size="lg"
                // className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 bg-transparent"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 bg-transparent"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Projects
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="lg"
                  className="p-3 bg-blue-600/35 hover:bg-blue-600/45 text-blue-300 hover:text-blue-100 rounded-xl transition-all duration-300 hover:scale-110"
                  onClick={() => window.open("https://linkedin.com/in/sanjana-umayangi", "_blank")}
                >
                  <Linkedin className="h-6 w-6" />
                </Button>

                <Button
                  variant="ghost"
                  size="lg"
                  className="p-3 bg-gray-600/35 hover:bg-gray-600/45 text-gray-300 hover:text-gray-100 rounded-xl transition-all duration-300 hover:scale-110"
                  onClick={() => window.open("https://github.com/SanjanaUmayangi", "_blank")}
                >
                  <Github className="h-6 w-6" />
                </Button>

                <div className="flex gap-4">
                  {/* LinkedIn */}
                  {/* <Button
    variant="ghost"
    size="lg"
    className="p-4 bg-blue-600/30 hover:bg-blue-600/40 text-blue-300 hover:text-blue-200 rounded-xl 
               transition-all duration-300 hover:scale-110
               shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40
               ring-1 ring-blue-500/30 hover:ring-blue-500/50
               animate-pulse hover:animate-none"
    onClick={() => window.open("https://linkedin.com/in/sanjana-umayangi", "_blank")}
  >
    <Linkedin className="h-8 w-8" />
  </Button> */}

                  {/* GitHub */}
                  {/* <Button
    variant="ghost"
    size="lg"
    className="p-4 bg-gray-600/30 hover:bg-gray-600/40 text-gray-300 hover:text-gray-200 rounded-xl 
               transition-all duration-300 hover:scale-110
               shadow-lg shadow-gray-500/20 hover:shadow-gray-500/40
               ring-1 ring-gray-500/30 hover:ring-gray-500/50
               animate-pulse hover:animate-none"
    onClick={() => window.open("https://github.com/SanjanaUmayangi", "_blank")}
  >
    <Github className="h-8 w-8" />
  </Button> */}
                </div>

              </div>
              <div className="h-8 w-px bg-white/20"></div>
              <Button
                variant="ghost"
                size="lg"
                //className="flex items-center gap-3 bg-green-600/20 hover:bg-green-600/30 text-green-400 hover:text-green-300 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  // Create a downloadable CV link
                  const link = document.createElement("a")
                  link.href = "/cv-sanjana-umayangi.pdf"
                  link.download = "Sanjana_Umayangi_CV.pdf"
                  link.click()
                }}
              >
                <Download 
                className="h-5 w-5" />
                Download CV
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                <img
                  src="/images/profile.jpg?height=300&width=300"
                  alt="Sanjana Umayangi"
                  className="w-72 h-72 rounded-full object-cover border-4 border-white/20 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
