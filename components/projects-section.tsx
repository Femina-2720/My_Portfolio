"use client"

import { useRef, useEffect, useState } from "react"
import ProjectCard from "./project-card"

const projects = [
  {
    id: "activetime",
    emoji: "🎨",
    title: "ActiveTime",
    subtitle: "Full Stack Productivity Web Application",
    description:
      "A production-ready productivity web app that helps users manage time, track tasks, and improve daily focus through structured workflows. Deployed live with JWT-based authentication, real-time task tracking, and comprehensive activity monitoring.",
    highlights: [
      "JWT-based authentication",
      "Task & productivity tracking",
      "Activity monitoring with timers",
      "Responsive and clean UI",
      "Secure backend APIs",
      "Production-ready deployment",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Vercel", "Google Cloud"],
    links: {
      live: "https://activetime.sliceo.app/",
      github: "https://github.com/Femina-2720",
    },
    image: "/images/activetime-hero.png",
    imageAlt: "ActiveTime - Full Stack Productivity Application",
  },
  {
    id: "product-availability",
    emoji: "🎨",
    title: "Product Availability",
    subtitle: "UI/UX App Design in Figma",
    description:
      "A comprehensive UI/UX design project showcasing clean, intuitive interface design focused on product availability tracking. Features clear information hierarchy, user-friendly flows, and component-based design system built in Figma with interactive prototypes.",
    highlights: [
      "Simple and intuitive layout",
      "Clear information hierarchy",
      "User-friendly flows",
      "Component-based design",
      "Mobile-first thinking",
      "Interactive prototype",
    ],
    techStack: ["Figma", "UI Design", "UX Research", "Prototyping"],
    links: {
      figma:
        "https://www.figma.com/design/WPNqwM5ZW23SjOD3N2kSxh/Product-Availability-Screens?node-id=0-1&t=VIbJaALtA06qvDN8-1",
      prototype:
        "https://www.figma.com/proto/WPNqwM5ZW23SjOD3N2kSxh/Product-Availability-Screens?node-id=0-1&t=VIbJaALtA06qvDN8-1",
    },
    image: "/images/screenshot-202026-01-13-20134136.png",
    imageAlt: "Product Availability - UI/UX Design System",
  },
  {
    id: "tradingview-automation",
    emoji: "🤖",
    title: "Automated TradingView Posting",
    subtitle: "n8n + AI Agents Automation",
    description:
      "An end-to-end automation system that selects trading ideas, analyzes them using Google Gemini AI, and prepares TradingView posts automatically. Handles real-world platform limitations with sophisticated workflow orchestration, browser automation, and AI-powered analysis.",
    highlights: [
      "Random trading idea selection from Google Drive",
      "AI-powered analysis with Google Gemini",
      "Structured JSON data extraction",
      "Playwright browser automation",
      "Rate-limit safe sequential processing",
      "Production-ready automation design",
    ],
    techStack: ["n8n", "Google Gemini", "Playwright", "Node.js", "Google Drive", "TradingView"],
    links: {
      github: "https://github.com/Femina-2720/n8nAutomationproject",
      demo: "https://www.youtube.com/watch?v=V3WcQ8Hf67Y",
    },
    image: "/images/screenshot-202025-12-23-20191211.png",
    imageAlt: "TradingView Automation - AI-Powered Workflow",
  },
  {
    id: "just-divide",
    emoji: "🎮",
    title: "Just Divide",
    subtitle: "Educational Puzzle Game",
    description:
      "An interactive educational puzzle game built with Phaser 3 that helps children improve logical thinking and arithmetic skills. Features drag-and-drop gameplay mechanics, responsive design for mobile and desktop, and engaging grid-based puzzle logic.",
    highlights: [
      "Grid-based arithmetic puzzle gameplay",
      "Drag-and-drop interactions",
      "Strategic keep slot for planning",
      "Limited trash mechanic for risk management",
      "Responsive mobile and desktop design",
      "Live playable web app on Vercel",
    ],
    techStack: ["Phaser 3", "JavaScript ES6", "HTML5 Canvas", "CSS3", "Vercel"],
    links: {
      live: "https://game-assignment-frlo.vercel.app/",
      github: "https://github.com/Femina-2720/Game_Assignment",
    },
    image: "/images/screenshot-202026-01-13-20134443.png",
    imageAlt: "Just Divide - Educational Puzzle Game",
  },
  {
    id: "speech-segmentation",
    emoji: "🎙️",
    title: "Speech Segmentation Tool",
    subtitle: "Python Audio Processing",
    description:
      "A production-ready Python-based tool that automatically detects spoken parts in audio files, segments them into individual clips, and generates structured metadata. Features robust error handling, silence-detection algorithms, and clean modular code design.",
    highlights: [
      "Accurate speech segmentation using FFmpeg",
      "Automatic audio clipping to WAV files",
      "JSON metadata with timestamps",
      "Robust error handling",
      "Edge case handling for continuous audio",
      "Clean modular production code",
    ],
    techStack: ["Python", "FFmpeg", "JSON", "Audio Processing", "Subprocess"],
    links: {
      demo: "https://www.youtube.com/watch?v=i0fbIXtQo7s",
      download: "https://drive.google.com/file/d/1lJKth76ZPiAepMWofhgHMVx9pTQdBHqT/view",
    },
    image: "/images/screenshot-202026-01-13-20140120.png",
    imageAlt: "Speech Segmentation Tool - Audio Processing",
  },
  {
    id: "ux-brainstorming",
    emoji: "🧠",
    title: "UX Brainstorming Board",
    subtitle: "Design Research & Ideation",
    description:
      "A comprehensive UX research and ideation board created in FigJam showcasing structured problem-solving, design thinking, and product planning. Demonstrates ideation methodology, user flow planning, feature prioritization, and early-stage wireframe thinking.",
    highlights: [
      "Idea mapping and flow planning",
      "User flow visualization",
      "UX problem breakdown",
      "Feature prioritization framework",
      "Early-stage wireframe thinking",
      "Structured design thinking process",
    ],
    techStack: ["FigJam", "UX Research", "Design Thinking", "Figma"],
    links: {
      figma:
        "https://www.figma.com/board/k70SFS4OOEwe7lpX7VaHxn/Product-Availability-Research?node-id=0-1&t=r1qtzQeqlNwOwX0N-1",
    },
    imageAlt: "UX Brainstorming Board - Design Research",
    isSlideshow: true,
    slideshowImages: [
      "/images/screenshot-202026-01-13-20135527.png",
      "/images/screenshot-202026-01-13-20135551.png",
      "/images/screenshot-202026-01-13-20135422.png",
      "/images/screenshot-202026-01-13-20135101.png",
      "/images/screenshot-202026-01-13-20135210.png",
    ],
  },
]

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = projects.map((_, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(index)
            }
          })
        },
        { threshold: 0.5 },
      )

      if (sectionRefs.current[index]) {
        observer.observe(sectionRefs.current[index]!)
      }

      return observer
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto mb-16">
        <h2
          className="text-4xl md:text-5xl font-bold text-[#e6f1ff] text-center"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Featured Projects
        </h2>
        <p className="text-[#8892b0] text-center mt-4 max-w-2xl mx-auto">
          A selection of projects that showcase my skills in full-stack development, AI automation, and design.
        </p>
      </div>

      <div className="space-y-0">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => {
              sectionRefs.current[index] = el
            }}
            className="min-h-screen flex items-center py-12 md:py-0"
          >
            <ProjectCard project={project} isReversed={index % 2 !== 0} isActive={activeIndex === index} />
          </div>
        ))}
      </div>
    </section>
  )
}
