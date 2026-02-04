import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, ArrowDown, Download, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

const roles = [
  "Full-Stack Developer",
  "Backend Engineer",
  "AI Systems Builder",
  "Software Engineer",
]

function TypewriterText() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <span className="gradient-text-animated">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="ml-1 inline-block w-[3px] h-[1em] bg-[var(--gradient-start)] align-middle"
      />
    </span>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6 pt-20"
    >
      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-[10%] hidden lg:block"
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-16 w-16 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm flex items-center justify-center">
          <span className="text-2xl">⚛️</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-[12%] hidden lg:block"
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="h-14 w-14 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm flex items-center justify-center">
          <span className="text-xl">🚀</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-[15%] hidden lg:block"
        animate={{ y: [-15, 15, -15], rotate: [0, -3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="h-12 w-12 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm flex items-center justify-center">
          <span className="text-lg">💻</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-[10%] hidden lg:block"
        animate={{ y: [5, -15, 5], rotate: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div className="h-14 w-14 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm flex items-center justify-center">
          <span className="text-xl">🎯</span>
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-4xl text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm px-4 py-2 text-sm font-medium text-muted-foreground">
            <Sparkles className="h-4 w-4 text-[var(--gradient-start)]" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
        >
          Hi, I'm{" "}
          <span className="gradient-text">Darshan Bhere</span>
        </motion.h1>

        {/* Role with Typewriter */}
        <motion.div
          variants={itemVariants}
          className="mt-6 text-xl sm:text-2xl lg:text-3xl font-medium text-muted-foreground"
        >
          <TypewriterText />
        </motion.div>

        {/* Value statement */}
        <motion.p
          variants={itemVariants}
          className="mx-auto mt-8 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          I build{" "}
          <span className="text-foreground font-medium">scalable, secure, and production-ready</span>{" "}
          applications using{" "}
          <span className="text-foreground font-medium">Java, Spring Boot, MERN stack</span>{" "}
          with real-world authentication, RBAC, real-time systems, and AI integrations.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-wrap justify-center gap-8 text-center"
        >
          {[
            { value: "5+", label: "Projects Shipped" },
            { value: "9.09", label: "Current GPA" },
            { value: "1+", label: "Years Experience" },
          ].map((stat) => (
            <div key={stat.label} className="group">
              <div className="text-3xl sm:text-4xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <Button
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] text-white border-0 hover:shadow-lg hover:shadow-[var(--glow-primary)] transition-shadow duration-300"
            asChild
          >
            <a href="https://drive.google.com/file/d/1VtQGn99q1BUdh7bjxjXmf4qEvjN37pDM/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Download className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
              Download Resume
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="group border-border/50 bg-card/50 backdrop-blur-sm hover:border-[var(--gradient-start)] hover:bg-card transition-colors"
            asChild
          >
            <a
              href="https://github.com/darshanbhere7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4 transition-transform group-hover:scale-110" />
              GitHub
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="group border-border/50 bg-card/50 backdrop-blur-sm hover:border-[var(--gradient-mid)] hover:bg-card transition-colors"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/darshan-bhere-b69a14260/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Linkedin className="h-4 w-4 transition-transform group-hover:scale-110" />
              LinkedIn
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.button
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.button>
      </motion.div>
    </section>
  )
}
