"use client"

import { useEffect } from "react"

export function ScrollAnimations() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed")

          if (entry.target.classList.contains("project-card")) {
            const cards = entry.target.parentElement?.querySelectorAll(".project-card")
            cards?.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("revealed")
              }, index * 200) // 200ms delay between each card
            })
          }
        } 
      })
    }, observerOptions)

    const scrollElements = document.querySelectorAll(
      ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .project-card",
    )
    scrollElements.forEach((el) => observer.observe(el))
        //<div class="scroll-reveal">This will fade in</div>

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll(".parallax-bg")

      parallaxElements.forEach((element, index) => {
        const speed = 0.5 + index * 0.1 // Different speed for each element
        const yPos = -(scrolled * speed) //Calculates how much to move each element
        ;(element as HTMLElement).style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.02}deg)`
      })
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return null
}
