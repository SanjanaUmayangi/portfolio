import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { LoadingProvider } from "@/components/loading-provider"
import { ScrollAnimations } from "@/components/scroll-animations"

export default function Home() {
  return (
    <LoadingProvider>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <Navigation />
        <ScrollAnimations />
        <div className="stars-container">
          <div className="star-3d"></div>
          <div className="star-3d"></div>
          <div className="star-3d"></div>
          <div className="star-3d"></div>
          <div className="star-3d"></div>
          <div className="star-3d"></div>
          <div className="star-3d"></div>
          <div className="star-3d"></div>
          <div className="star-3d"></div>
          <div className="star-3d"></div>
          <div className="star-3d"></div>
          <div className="star-3d"></div>
        </div>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
    </LoadingProvider>
  )
}
