'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

// 游戏元素数据
const gameElements = [
  { id: '456', content: '456', className: 'text-3xl font-bold' },
  { id: 'marble', content: '●', className: 'text-2xl' },
  { id: 'dsg', content: '$DSG', className: 'text-xl font-mono' }
]

export default function BackgroundEffects() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Twitter Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/images/推特背景 (Twitter帖子).png"
          alt="Background Pattern"
          fill
          style={{ objectFit: 'cover' }}
          className="mix-blend-soft-light"
        />
      </div>

      {/* Guard Mask */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.01] animate-pulse">
        <Image
          src="/guard-mask.svg"
          alt="Guard Mask"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />

      {/* Floating Game Elements - Reduced */}
      <AnimatePresence>
        {mounted && gameElements.slice(0, 2).map((element, index) => (
          <motion.div
            key={element.id}
            className={`absolute ${element.className} text-squid-pink/30`}
            initial={{ 
              x: `${Math.random() * 100}%`,
              y: '100%',
              opacity: 0 
            }}
            animate={{
              y: '-100%',
              opacity: [0, 1, 0],
              x: `${Math.random() * 100}%`,
              rotate: [0, 360]
            }}
            transition={{
              duration: 15,
              delay: index * 2,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            {element.content}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Animated Lines - Reduced */}
      <div className="absolute inset-0">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[2px] bg-gradient-to-r from-transparent via-squid-pink/30 to-transparent"
            style={{
              top: `${20 + i * 30}%`,
              left: 0,
              right: 0,
              filter: 'blur(1px)'
            }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 8,
              delay: i * 3,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      {/* Enhanced Corner Decorations */}
      <div className="absolute top-0 left-0 w-48 h-48 opacity-30">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-squid-pink to-transparent" />
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-squid-pink to-transparent" />
      </div>
      <div className="absolute top-0 right-0 w-48 h-48 opacity-30">
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-squid-pink to-transparent" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-squid-pink to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-30">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-squid-pink to-transparent" />
        <div className="absolute bottom-0 left-0 w-px h-full bg-gradient-to-t from-squid-pink to-transparent" />
      </div>
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-30">
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-squid-pink to-transparent" />
        <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-squid-pink to-transparent" />
      </div>

      {/* Enhanced Random Dots - Reduced */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-squid-pink rounded-full blur-[1px]"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 3,
            delay: i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  )
}
