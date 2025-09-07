"use client"

import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-enhanced-float animate-pulse-glow parallax-bg"></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl animate-enhanced-float animate-pulse-glow parallax-bg"
          style={{ animationDelay: "-3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-600/10 rounded-full blur-2xl animate-enhanced-float animate-pulse-glow parallax-bg"
          style={{ animationDelay: "-1.5s" }}
        ></div>
      </div>
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-5xl font-bold text-white mb-6 font-serif bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Passionate about technology and innovation, constantly learning and adapting to new challenges.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="scroll-reveal glass hover-lift hover-glow group overflow-hidden border-blue-400/30 transition-all duration-500">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <span className="text-2xl font-bold text-white">SU</span>
                  </div>
                </div>

                <div className="space-y-4 text-center">
                  <p className="text-gray-200 leading-relaxed text-lg">
                    As a third-year Information Technology student at the University of Moratuwa, I've developed a
                    strong foundation in software development and problem-solving. My academic journey has been
                    complemented by hands-on experience through various projects and hackathons.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    I excel at learning independently and adapting to new technologies, always seeking opportunities to
                    contribute to innovative solutions while continuously growing my skill set. My passion lies in
                    creating meaningful digital experiences that solve real-world problems.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-4 bg-blue-500/20 rounded-xl border border-blue-500/30 hover:bg-blue-500/30 hover:border-blue-400 transition-all duration-300 hover:scale-105">
                    <div className="text-3xl font-bold text-blue-300 mb-2">2+</div>
                    <div className="text-blue-200 text-sm">Years of Study</div>
                  </div>
                  <div className="text-center p-4 bg-purple-500/20 rounded-xl border border-purple-500/30 hover:bg-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:scale-105">
                    <div className="text-3xl font-bold text-purple-300 mb-2">5+</div>
                    <div className="text-purple-200 text-sm">Projects Completed</div>
                  </div>
                  <div className="text-center p-4 bg-pink-500/20 rounded-xl border border-pink-500/30 hover:bg-pink-500/30 hover:border-pink-400 transition-all duration-300 hover:scale-105">
                    <div className="text-3xl font-bold text-pink-300 mb-2">8+</div>
                    <div className="text-pink-200 text-sm">Hackathons Joined</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
