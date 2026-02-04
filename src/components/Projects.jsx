import { motion } from "framer-motion"
import { projects } from "../data/projects"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ArrowUpRight } from "lucide-react"
import SectionWrapper, { SectionHeader } from "./SectionWrapper"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeader
        title="Featured Projects"
        subtitle="Real-world applications showcasing full-stack development and scalable architecture."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="mt-12 space-y-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            className="group"
          >
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="relative rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:border-border transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Project Image - You can add images in src/assets/projects/ */}
                <div className="shrink-0">
                  <div className="w-full lg:w-20 h-20 rounded-xl bg-gradient-to-br from-[var(--gradient-start)]/20 to-[var(--gradient-mid)]/20 flex items-center justify-center overflow-hidden">
                    {/* Replace with: <img src={project.image} alt={project.title} className="w-full h-full object-cover" /> */}
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-3xl">
                        {index === 0 ? "🌱" : index === 1 ? "🧠" : index === 2 ? "🚗" : index === 3 ? "✈️" : "🌟"}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <p className="text-sm text-[var(--gradient-mid)]">{project.subtitle}</p>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 px-3 text-xs border-border/50 hover:border-[var(--gradient-start)]"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5"
                        >
                          <Github className="h-3.5 w-3.5" />
                          Code
                        </a>
                      </Button>
                      {project.live && (
                        <Button
                          size="sm"
                          className="h-8 px-3 text-xs bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-mid)] text-white border-0"
                          asChild
                        >
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {/* All highlights */}
                  <ul className="space-y-2 mb-4">
                    {project.highlights.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <ArrowUpRight className="h-4 w-4 text-[var(--gradient-start)] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 6 && (
                      <span className="text-xs text-muted-foreground">+{project.tech.length - 6}</span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
