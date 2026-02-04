import { motion } from "framer-motion"
import { skills } from "../data/skills"
import { Layout, Server, Database, Wrench } from "lucide-react"
import SectionWrapper, { SectionHeader } from "./SectionWrapper"

const iconMap = {
  Layout,
  Server,
  Database,
  Wrench,
}

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

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeader
        title="Skills & Technologies"
        subtitle="The tools and technologies I use to bring ideas to life."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {skills.map((group, index) => {
          const Icon = iconMap[group.icon]
          return (
            <motion.div
              key={group.title}
              variants={cardVariants}
              className="group relative"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" 
                style={{
                  background: `linear-gradient(135deg, var(--gradient-start), var(--gradient-mid))`,
                  opacity: 0,
                }}
              />
              
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="relative h-full rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 overflow-hidden"
              >
                {/* Gradient line at top */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${group.color}`} />
                
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${group.color} mb-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="text-lg font-semibold mb-4">
                  {group.title}
                </h3>

                <ul className="space-y-2.5">
                  {group.items.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${group.color}`} />
                      {skill}
                    </motion.li>
                  ))}
                </ul>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, var(--glow-primary) 0%, transparent 50%)`,
                  }}
                />
              </motion.div>
            </motion.div>
          )
        })}
      </motion.div>
    </SectionWrapper>
  )
}
