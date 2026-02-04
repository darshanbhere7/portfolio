import { motion } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"
import SectionWrapper, { SectionHeader } from "./SectionWrapper"

const education = [
  {
    degree: "MCA",
    fullDegree: "Master of Computer Applications",
    school: "Sardar Patel Institute of Technology, Mumbai",
    period: "2024 - 2026",
    score: "9.09 GPA",
    current: true,
  },
  {
    degree: "B.Sc. CS",
    fullDegree: "B.Sc. Computer Science",
    school: "B.K. Birla College Kalyan, Mumbai",
    period: "2021 - 2024",
    score: "9.61 GPA",
    current: false,
  },
  {
    degree: "HSC",
    fullDegree: "Higher Secondary (12th)",
    school: "Maharashtra State Board of Secondary & Higher Secondary Education (MSBSHSE)",
    period: "2021",
    score: "91.5%",
    current: false,
  },
  {
    degree: "SSC",
    fullDegree: "Secondary (10th)",
    school: "Maharashtra State Board of Secondary & Higher Secondary Education (MSBSHSE)",
    period: "2019",
    score: "89.6%",
    current: false,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
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

const lineVariants = {
  hidden: { height: 0 },
  visible: {
    height: "100%",
    transition: { duration: 0.8, ease: "easeInOut" },
  },
}

export default function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeader
        title="Education"
        subtitle="My academic journey in Computer Science."
      />

      {/* Vertical Timeline */}
      <div className="relative mt-12">
        {/* Animated line */}
        <motion.div
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="absolute left-8 top-0 w-px bg-gradient-to-b from-[var(--gradient-start)] via-[var(--gradient-mid)] to-transparent"
          style={{ height: "100%" }}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6 md:space-y-8"
        >
          {education.map((edu, index) => (
            <motion.div key={edu.degree} variants={itemVariants} className="relative pl-20">
              {/* Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 220 }}
                className={`absolute left-6 top-6 h-4 w-4 rounded-full ring-4 ring-background ${
                  edu.current
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500"
                    : "bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-mid)]"
                }`}
              />

              {/* Card */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 24 }}
                className="group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:border-[var(--gradient-start)]/40"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-mid)]">
                      <GraduationCap className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{edu.fullDegree}</h3>
                      <p className="text-sm text-muted-foreground">{edu.school}</p>
                    </div>
                  </div>

                  {/* Chips */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center rounded-full border border-border/60 bg-muted/50 px-2.5 py-1 text-xs font-semibold text-foreground">
                      {edu.score}
                    </span>
                    {edu.current && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-2.5 py-1 text-xs font-medium text-white">
                        <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {edu.period}
                </div>

                {/* Accent & Glow */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background:
                      "radial-gradient(600px 80px at 20% 0%, var(--glow-primary) 0%, transparent 60%)",
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
