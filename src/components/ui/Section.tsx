'use client'

import { ReactNode, useEffect, useState } from 'react'
import { motion, Variants, AnimatePresence } from 'framer-motion'

// 故障效果动画
const glitchAnimation = {
  hidden: { opacity: 0, x: 0 },
  visible: {
    opacity: [0, 1, 1, 0.5, 1],
    x: [0, -2, 2, -1, 0],
    transition: {
      duration: 0.2,
      times: [0, 0.2, 0.4, 0.6, 1]
    }
  }
}

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  variant?: 'default' | 'alternate'
  delay?: number
}

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
}

export default function Section({ 
  children, 
  className = '', 
  id,
  variant = 'default',
  delay = 0
}: SectionProps) {
  const [isHovered, setIsHovered] = useState(false)
  const baseClasses = 'relative py-16 md:py-24 transition-colors duration-300'
  const variantClasses = variant === 'alternate' ? 'bg-gray-900/50 hover:bg-gray-900/60' : ''
  
  useEffect(() => {
    if (id) {
      console.log(`Section mounted with id: ${id}`)
      const element = document.getElementById(id)
      if (element) {
        console.log(`Section with id ${id} found in DOM`)
      } else {
        console.log(`Section with id ${id} not found in DOM`)
      }
    }
  }, [id])

  return (
    <motion.section
      id={id}
      data-section-id={id}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      custom={delay}
      className={`${baseClasses} ${variantClasses} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced Cyber Border */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence>
          {(variant === 'alternate' || isHovered) && (
            <>
              {/* Top Border */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-x-0 top-0"
              >
                <div className="h-px bg-gradient-to-r from-transparent via-squid-pink/30 to-transparent" />
                <div className="h-[2px] blur-[2px] bg-gradient-to-r from-transparent via-squid-pink/20 to-transparent opacity-50" />
              </motion.div>

              {/* Bottom Border */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-x-0 bottom-0"
              >
                <div className="h-px bg-gradient-to-r from-transparent via-squid-pink/30 to-transparent" />
                <div className="h-[2px] blur-[2px] bg-gradient-to-r from-transparent via-squid-pink/20 to-transparent opacity-50" />
              </motion.div>

              {/* Corner Decorations */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-0 left-0 w-8 h-8"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-squid-pink/30" />
                <div className="absolute top-0 left-0 w-px h-full bg-squid-pink/30" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-0 right-0 w-8 h-8"
              >
                <div className="absolute top-0 right-0 w-full h-px bg-squid-pink/30" />
                <div className="absolute top-0 right-0 w-px h-full bg-squid-pink/30" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-0 left-0 w-8 h-8"
              >
                <div className="absolute bottom-0 left-0 w-full h-px bg-squid-pink/30" />
                <div className="absolute bottom-0 left-0 w-px h-full bg-squid-pink/30" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-0 right-0 w-8 h-8"
              >
                <div className="absolute bottom-0 right-0 w-full h-px bg-squid-pink/30" />
                <div className="absolute bottom-0 right-0 w-px h-full bg-squid-pink/30" />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Enhanced Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-squid-pink/5 via-transparent to-squid-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {children}
      </div>

      {/* Enhanced Side Accents */}
      <AnimatePresence>
        {(variant === 'alternate' || isHovered) && (
          <>
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 h-32"
            >
              <div className="w-px h-full bg-gradient-to-b from-transparent via-squid-pink/30 to-transparent" />
              <div className="w-[2px] h-full blur-[2px] bg-gradient-to-b from-transparent via-squid-pink/20 to-transparent opacity-50" />
            </motion.div>
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 h-32"
            >
              <div className="w-px h-full bg-gradient-to-b from-transparent via-squid-pink/30 to-transparent" />
              <div className="w-[2px] h-full blur-[2px] bg-gradient-to-b from-transparent via-squid-pink/20 to-transparent opacity-50" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.section>
  )
}

// Heading component for consistent section headings
export function SectionHeading({ 
  title, 
  subtitle,
  align = 'center'
}: { 
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}) {
  const [isGlitching, setIsGlitching] = useState(false)
  const alignmentClasses = align === 'center' ? 'text-center mx-auto' : 'text-left'

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, 5000)

    return () => clearInterval(glitchInterval)
  }, [])
  
  return (
    <div className={`max-w-3xl mb-12 ${alignmentClasses}`}>
      <div className="relative">
        {/* Glitch Layers */}
        <AnimatePresence>
          {isGlitching && (
            <>
              <motion.h2
                className="absolute inset-0 text-3xl md:text-4xl font-bold text-red-500 opacity-50"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)' }}
                variants={glitchAnimation}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {title}
              </motion.h2>
              <motion.h2
                className="absolute inset-0 text-3xl md:text-4xl font-bold text-blue-500 opacity-50"
                style={{ clipPath: 'polygon(0 45%, 100% 45%, 100% 100%, 0 100%)' }}
                variants={glitchAnimation}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {title}
              </motion.h2>
            </>
          )}
        </AnimatePresence>

        {/* Main Title */}
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-4 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="relative">
            {title}
          </span>
        </motion.h2>
      </div>

      {/* Subtitle with enhanced styling */}
      {subtitle && (
        <motion.p 
          className="text-lg subtitle relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="relative">
            {subtitle}
          </span>
        </motion.p>
      )}
    </div>
  )
}
