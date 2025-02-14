'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CyberGrid() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* 主网格 */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,0,128,0.03)_1px,transparent_1px),linear-gradient(rgba(255,0,128,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"
        style={{ 
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'center 150%'
        }}
      >
        {/* 动态扫描线 */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-squid-pink/5 to-transparent"
          animate={{
            y: ['-100%', '200%']
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      {/* 辅助网格 - 更大的间距 */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,0,128,0.02)_1px,transparent_1px),linear-gradient(rgba(255,0,128,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"
        style={{ 
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'center 150%'
        }}
      />

      {/* 渐变遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />

      {/* 动态光点 */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-squid-pink rounded-full blur-[2px]"
          initial={{ 
            x: `${Math.random() * 100}%`,
            y: '100%',
            opacity: 0 
          }}
          animate={{
            y: '-100%',
            opacity: [0, 0.3, 0],
            x: `${Math.random() * 100}%`
          }}
          transition={{
            duration: 10,
            delay: i * 2,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      ))}
    </div>
  )
}
