import { motion } from "framer-motion"
import { Trophy, Award, Cloud, Database, Medal } from "lucide-react"
import SectionWrapper, { SectionHeader } from "./SectionWrapper"

const achievements = [
  {
    icon: Trophy,
    title: "HackFusion 2.0 Finalist",
    description: "Top 10 at national-level hackathon by Google Developer Groups (GDG)",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Cloud,
    title: "AWS Basics",
    description: "AWS Cloud Fundamentals – LinkedIn Learning",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Database,
    title: "SQL Certified",
    description: "SQL for Data Analysis – SimpliLearn",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Medal,
    title: "Academic Excellence",
    description: "Multiple state-level merit-based scholarships",
    color: "from-purple-500 to-pink-500",
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <SectionHeader
        title="Achievements & Certifications"
        subtitle="Recognition and credentials that validate my skills."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 text-center overflow-hidden"
          >
            {/* Icon */}
            <motion.div
              initial={{ rotate: 0 }}
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
              className="mx-auto mb-4"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${achievement.color}`}>
                <achievement.icon className="h-8 w-8 text-white" />
              </div>
            </motion.div>

            <h3 className="font-bold mb-2">{achievement.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {achievement.description}
            </p>

            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 50% 0%, var(--glow-primary) 0%, transparent 60%)`,
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
