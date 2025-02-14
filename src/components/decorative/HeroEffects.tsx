'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useCallback } from 'react'

// 防抖函数
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export default function HeroEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

  // 使用防抖的鼠标移动处理函数
  const handleMouseMove = useCallback(
    debounce((e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }, 10),
    []
  )

  useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleMouseMove])

  if (!mounted) {
    return null
  }

  return (
    <>
      {/* 动态光效 */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,82,146,0.05), transparent 40%)`
        }}
      />
      
      {/* 装饰性粒子 - 减少数量并使用相对位置 */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-squid-pink rounded-full"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: 0
            }}
            animate={{
              y: [null, '-20%'],
              opacity: [0, 0.5, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* 网格效果 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ff528233_1px,transparent_1px),linear-gradient(to_bottom,#ff528233_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* 渐变光晕 */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-squid-pink/20 via-purple-600/5 to-transparent opacity-30 transform -skew-y-6" />
    </>
  )
}
