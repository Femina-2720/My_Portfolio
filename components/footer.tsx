import { Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-[#233554] bg-[#0a192f]/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <p className="text-xl font-semibold">
          <span className="text-[#64ffda]">F</span>
          <span className="text-[#e6f1ff]">emina </span>
          <span className="text-[#64ffda]">K</span>
          <span className="text-[#e6f1ff]">.</span>
        </p>
        <p className="text-[#8892b0] text-sm font-mono">Full-Stack Developer • AI Developer • UI/UX Designer</p>
        <div className="flex items-center justify-center gap-6 pt-2">
          <a
            href="https://www.linkedin.com/in/femina37"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:femi65669@gmail.com"
            aria-label="Email"
            className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <p className="text-[#8892b0] text-sm pt-6">© 2025 Femina K. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
