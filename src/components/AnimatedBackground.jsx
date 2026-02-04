import { motion } from "framer-motion"

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Animated gradient blobs */}
      <motion.div
        className="absolute top-0 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-mid)] opacity-20 blur-[100px]"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/2 -right-40 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-[var(--gradient-mid)] to-[var(--gradient-end)] opacity-20 blur-[100px]"
        animate={{
          x: [0, -80, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute -bottom-40 left-1/3 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-[var(--gradient-end)] to-[var(--gradient-start)] opacity-15 blur-[100px]"
        animate={{
          x: [0, 60, 0],
          y: [0, -50, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(var(--foreground) 1px, transparent 1px),
            linear-gradient(90deg, var(--foreground) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_70%)]" />
    </div>
  )
}
