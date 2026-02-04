import { motion } from "framer-motion"
import { experience } from "../data/experience"
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react"
import SectionWrapper, { SectionHeader } from "./SectionWrapper"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeader
        title="Work Experience"
        subtitle="My professional journey building real-world software solutions."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="mt-12 relative"
      >
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--gradient-start)] via-[var(--gradient-mid)] to-transparent hidden md:block" />

        {experience.map((exp, index) => (
          <motion.div
            key={exp.role}
            variants={cardVariants}
            className="relative md:pl-20 mb-8 last:mb-0"
          >
            {/* Timeline dot */}
            <div className="absolute left-6 top-6 hidden md:flex">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="h-4 w-4 rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-mid)] ring-4 ring-background"
              />
            </div>

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 lg:p-8 overflow-hidden"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)]" />
              
              {/* Current badge */}
              {exp.current && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-3 py-1 text-xs font-medium text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                    Current
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-mid)]">
                      <Briefcase className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Points */}
              <ul className="space-y-3">
                {exp.points.map((point, i) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <CheckCircle2 className="h-5 w-5 text-[var(--gradient-start)] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 0% 0%, var(--glow-primary) 0%, transparent 50%)`,
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
