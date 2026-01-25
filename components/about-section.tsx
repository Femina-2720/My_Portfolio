import { CheckCircle } from "lucide-react"

const skillCategories = {
  Languages: ["HTML 5", "CSS3", "JavaScript", "Python", "C++", "C"],
  "Frameworks & Backend": ["React", "Node.js", "Express.js", "MongoDB", "REST API", "Flask"],
  "AI & Automation": ["ChatGPT", "Google Gemini", "Deepseek", "Selenium", "n8n", "Lovable"],
  Databases: ["MongoDB", "MySQL", "PostgreSQL", "SQLite"],
  "Cloud & Deployment": ["Vercel", "Google Cloud", "GitHub"],
}

const competencies = [
  "Full-Stack Web Development",
  "AI & Agentic Workflows",
  "UI/UX Design",
  "Responsive Design",
  "API Development",
  "Team Collaboration",
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-[#e6f1ff] text-center mb-12"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          About Me
        </h2>

        <div className="bg-[#112240]/50 backdrop-blur-sm border border-[#233554] rounded-2xl p-8 md:p-12 space-y-10">
          <div className="space-y-4 text-[#8892b0] leading-relaxed">
            <p>
              I'm a Computer Science student at Thanthai Periyar Government Institute of Technology, driven by a passion
              for building practical, real-world software that balances beautiful user experience with robust
              engineering. My journey focuses on creating end-to-end solutions that are reliable, scalable, and
              user-friendly.
            </p>
            <p>
              Whether it's full-stack web development, AI-assisted automation, or UI/UX design, I approach every project
              with an emphasis on clarity, efficiency, and real business impact. I enjoy transforming ideas into
              production-ready applications — from designing intuitive interfaces to developing secure backend systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Technical Toolbox */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#e6f1ff]">Technical Toolbox</h3>
              <div className="space-y-5">
                {Object.entries(skillCategories).map(([category, skills]) => (
                  <div key={category} className="space-y-2">
                    <p className="text-xs text-[#64ffda] font-mono font-semibold uppercase tracking-wider">
                      {category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="skill-tag px-4 py-2 bg-[#0a192f] text-[#ccd6f6] text-sm rounded-full border border-[#233554] hover:border-[#64ffda]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Competencies */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#e6f1ff]">Core Competencies</h3>
              <div className="space-y-3">
                {competencies.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 px-4 py-3 bg-[#0a192f]/50 border border-[#233554] p-3 rounded-lg hover:border-[#64ffda]/50 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-[#64ffda] flex-shrink-0" />
                    <span className="text-[#e6f1ff]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
