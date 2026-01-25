import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2
          className="text-3xl md:text-4xl font-bold text-[#e6f1ff] text-balance leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Ready to collaborate or have a project in mind?
        </h2>
        <p className="text-[#8892b0] text-lg max-w-xl mx-auto">
          I'm always open to new opportunities and challenges. Let's connect and build something amazing together.
        </p>
        <Button
          size="lg"
          className="bg-[#64ffda] text-[#0a192f] hover:bg-[#7cffe9] rounded-full px-8 transition-all mt-4 font-semibold"
          asChild
        >
          <a href="/FeminaK_Resume.pdf" download="FeminaK_Resume.pdf">
            <Download className="w-5 h-5 mr-2" />
            Download My Resume
          </a>
        </Button>
      </div>
    </section>
  )
}
