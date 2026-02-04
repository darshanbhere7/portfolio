import { motion } from "framer-motion"
import { Code2, Rocket, GraduationCap, Target } from "lucide-react"
import SectionWrapper, { SectionHeader } from "./SectionWrapper"

const highlights = [
  {
    icon: GraduationCap,
    title: "MCA Student",
    description: "Sardar Patel Institute of Technology with 9.09 GPA",
  },
  {
    icon: Code2,
    title: "Full-Stack Developer",
    description: "Java, Spring Boot, MERN Stack,REST APIs and Microservices",
  },
  {
    icon: Rocket,
    title: "Software Dev Intern",
    description: "Currently building enterprise software at Equilibrium",
  },
  {
    icon: Target,
    title: "Problem Solver",
    description: "End-to-end engineering from system design to deployment",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
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

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>

          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            I'm a <span className="text-foreground font-medium">Software Engineer</span> with
            strong fundamentals in computer science and hands-on experience building
            full-stack and AI-driven applications.
          </p>

          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            I focus on writing clean, scalable, and secure backend systems using
            <span className="text-foreground font-medium"> Java, Spring Boot, Node.js </span>
            and building responsive frontend interfaces with
            <span className="text-foreground font-medium"> React and Tailwind CSS</span>.
          </p>

          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            I enjoy solving engineering problems end-to-end — from system design
            and API architecture to frontend performance and deployment — and I
            actively build projects that simulate real production environments.
          </p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[var(--gradient-start)] hover:text-[var(--gradient-mid)] font-medium transition-colors"
            >
              Let's work together
              <span className="text-lg">→</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right - Highlight Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="group flex items-start gap-4 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-5 hover:border-border transition-colors"
            >
              <div className="shrink-0 p-3 rounded-xl bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-mid)]">
                <item.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-base">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
