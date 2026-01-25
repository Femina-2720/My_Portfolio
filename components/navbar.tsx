"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Download } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]



  return (
    <nav
      className={`navbar fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-[#071426]/80 backdrop-blur-md border-b border-[rgba(94,234,212,0.12)]"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-bold flex items-center gap-1">
          <span className="text-[#5eead4]">Femina</span>
          <span className="text-[#e6f0ff]">K</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#9fb3c8] hover:text-[#5eead4] transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Resume Button */}
        <div className="hidden md:block">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="rounded-full border border-[#5eead4] text-[#5eead4] bg-transparent
                       hover:bg-[#5eead4] hover:text-[#071426]
                       transition-all duration-300 flex items-center gap-2"
          >
            <a href="/FeminaK_Resume.pdf" download="FeminaK_Resume.pdf">
              <Download className="w-4 h-4" />
              Resume
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#e6f0ff]"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#071426]/95 backdrop-blur-md border-t border-[rgba(94,234,212,0.12)] px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-[#9fb3c8] hover:text-[#5eead4] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <Button
            variant="outline"
            size="sm"
            asChild
            className="w-full rounded-full border border-[#5eead4] text-[#5eead4]
                       bg-transparent hover:bg-[#5eead4] hover:text-[#071426]
                       transition-all duration-300 flex items-center justify-center gap-2"
          >
            <a href="/FeminaK_Resume.pdf" download="FeminaK_Resume.pdf">
              <Download className="w-4 h-4" />
              Resume
            </a>
          </Button>
        </div>
      )}
    </nav>
  )
}
