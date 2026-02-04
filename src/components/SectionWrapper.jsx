import { motion } from "framer-motion"

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  fullWidth = false,
}) {
  return (
    <section id={id} className={`relative py-24 lg:py-32 ${className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className={fullWidth ? "" : "mx-auto max-w-7xl px-6"}
      >
        {children}
      </motion.div>
    </section>
  )
}

export function SectionHeader({ title, subtitle, centered = false }) {
  return (
    <div className={centered ? "text-center" : ""}>
      <motion.h2
        className="text-3xl font-bold tracking-tight sm:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className={`mt-4 text-lg text-muted-foreground ${
            centered ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
