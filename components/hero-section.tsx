"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

const TYPING_PHRASES = [
  "I build full-stack web applications !",
  "I design user-centered experiences !",
  "I automate workflows with AI !",
]

const TYPING_SPEED = 100
const PAUSE_BETWEEN_PHRASES = 2000
const DELETE_SPEED = 50


export default function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)



  useEffect(() => {
    const currentPhrase = TYPING_PHRASES[phraseIndex]
    let timer: NodeJS.Timeout

    if (!isDeleting && displayText === currentPhrase) {
      timer = setTimeout(() => setIsDeleting(true), PAUSE_BETWEEN_PHRASES)
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length)
    } else {
      const nextText = isDeleting
        ? currentPhrase.substring(0, displayText.length - 1)
        : currentPhrase.substring(0, displayText.length + 1)

      timer = setTimeout(
        () => setDisplayText(nextText),
        isDeleting ? DELETE_SPEED : TYPING_SPEED
      )
    }

    return () => clearTimeout(timer)
  }, [displayText, phraseIndex, isDeleting])

  return (
    <section className="hero-bg min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="space-y-6">
          <p className="text-[#5eead4] font-mono text-lg">
            Hello, I&apos;m
          </p>

          <h1 className="text-6xl md:text-8xl font-bold text-[#e6f0ff] tracking-tight">
            Femina K
          </h1>

          <div className="h-20 flex items-center justify-center">
            <p className="text-3xl md:text-4xl text-[#9fb3c8]">
              {displayText}
              <span className="text-[#5eead4] animate-pulse">|</span>
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <p className="text-[#9fb3c8] text-lg leading-relaxed">
            Computer Science student passionate about building production-ready
            applications. From clean UI design to secure backend systems, I
            create end-to-end solutions with a focus on clarity and user
            experience.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 pt-6 flex-wrap">
          {/* Explore Work */}
          <Button
            size="lg"
            className="bg-transparent border-2 border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 px-8 py-4 text-lg font-mono transition-all duration-300"
            asChild
          >
            <a href="#projects">Explore My Work</a>
          </Button>

          {/* Download Resume */}
          <Button
            size="lg"
            className="bg-[#64ffda] text-[#0a192f] hover:bg-[#64ffda]/90 px-8 py-4 text-lg font-mono transition-all duration-300 flex items-center gap-2"
            asChild
          >
            <a href="/FeminaK_Resume.pdf" download="FeminaK_Resume.pdf">
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
