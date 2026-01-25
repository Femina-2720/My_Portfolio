import { Mail, MessageCircle, Linkedin } from "lucide-react"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:femi65669@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/918940715740",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/femina37",
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-10">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#e6f1ff]" style={{ fontFamily: "var(--font-heading)" }}>
            Get In Touch
          </h2>
          <p className="text-[#8892b0] text-lg max-w-xl mx-auto">
            Ready to collaborate on your next project? Let's connect and build something extraordinary together.
          </p>
        </div>

        <div className="flex items-center justify-center gap-6">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex items-center justify-center p-4 rounded-full bg-[#64ffda] text-[#0a192f] hover:scale-110 transition-transform duration-300"
            >
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
