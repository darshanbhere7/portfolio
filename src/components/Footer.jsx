import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

const footerLinks = [
  { icon: Github, href: "https://github.com/darshanbhere7", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/darshanbhere", label: "LinkedIn" },
  { icon: Mail, href: "mailto:darshanbhere2@gmail.com", label: "Email" },
]

const quickLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3 items-center">
          
          {/* Brand + Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-xl font-bold">
              <span className="gradient-text">Darshan</span>
              <span className="text-foreground"> Bhere</span>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-xs">
              Full-Stack Developer focused on building scalable, clean, and
              user-centric web applications.
            </p>

            <span className="inline-block mt-3 text-xs px-3 py-1 rounded-full border border-border/50 text-muted-foreground">
              🚀 Open to SDE / Full-Stack Roles
            </span>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex justify-center gap-6 text-sm"
          >
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex justify-center md:justify-end gap-4"
          >
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-10 pt-6 border-t border-border/50 text-center"
        >
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1 flex-wrap">
            © {new Date().getFullYear()} Darshan Bhere • Built with
            <Heart className="h-3.5 w-3.5 text-red-500 mx-1" />
            React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
