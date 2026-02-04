import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Send, ArrowRight } from "lucide-react"
import SectionWrapper from "./SectionWrapper"

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/darshanbhere7",
    color: "hover:text-foreground",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/darshan-bhere-b69a14260/",
    color: "hover:text-blue-500",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:darshanbhere2@gmail.com",
    color: "hover:text-red-500",
  },
]

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[var(--gradient-start)]/10 via-[var(--gradient-mid)]/10 to-[var(--gradient-end)]/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm px-4 py-2 text-sm font-medium text-muted-foreground mb-6">
            <Send className="h-4 w-4 text-[var(--gradient-start)]" />
            Get in Touch
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold tracking-tight"
        >
          Let's Build Something{" "}
          <span className="gradient-text">Amazing</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto"
        >
          I'm open to full-time software engineering roles, internships,
          and exciting freelance projects. Let's connect and create something great together.
        </motion.p>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10"
        >
          <Button
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] text-white border-0 hover:shadow-xl hover:shadow-[var(--glow-primary)] transition-all duration-300 px-8"
            asChild
          >
            <a href="mailto:darshanbhere2@gmail.com" className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Send me an Email
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex justify-center gap-4"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className={`group flex items-center justify-center h-12 w-12 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm text-muted-foreground ${link.color} transition-all hover:scale-110 hover:border-[var(--gradient-start)]`}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <link.icon className="h-5 w-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Email display */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-sm text-muted-foreground"
        >
          or reach me at{" "}
          <a
            href="mailto:darshanbhere2@gmail.com"
            className="text-[var(--gradient-start)] hover:text-[var(--gradient-mid)] font-medium transition-colors"
          >
            +91 8080583088
          </a>
        </motion.p>
      </div>
    </SectionWrapper>
  )
}
