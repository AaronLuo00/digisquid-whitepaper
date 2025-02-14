'use client'

import { motion } from 'framer-motion'

export default function RewardIcon() {
  return (
    <motion.div
      className="w-12 h-12 relative"
      whileHover={{ scale: 1.1 }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* 光晕效果 */}
        <motion.circle
          cx="50"
          cy="50"
          r="35"
          className="fill-purple-600/10"
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* 宝石主体 - 使用motion.g进行整体旋转 */}
        <motion.g
          animate={{
            rotateY: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* 宝石顶部 */}
          <motion.path
            d="M50 20L70 40H30L50 20Z"
            fill="url(#gemGradient1)"
            initial={{ opacity: 0.8 }}
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* 宝石左侧 */}
          <motion.path
            d="M30 40L50 80L50 40L30 40Z"
            fill="url(#gemGradient2)"
            initial={{ opacity: 0.6 }}
            animate={{
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* 宝石右侧 */}
          <motion.path
            d="M70 40L50 80L50 40L70 40Z"
            fill="url(#gemGradient3)"
            initial={{ opacity: 0.7 }}
            animate={{
              opacity: [0.7, 0.9, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* 反光效果 */}
          <motion.path
            d="M45 25L55 35L45 35L45 25Z"
            className="fill-white"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.g>

        {/* 光芒效果 */}
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={i}
            x1="50"
            y1="50"
            x2={50 + Math.cos(i * Math.PI / 4) * 40}
            y2={50 + Math.sin(i * Math.PI / 4) * 40}
            className="stroke-squid-pink/20"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* 渐变定义 */}
        <defs>
          <linearGradient id="gemGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF1493" />
            <stop offset="50%" stopColor="#9400D3" />
            <stop offset="100%" stopColor="#FF1493" />
          </linearGradient>
          <linearGradient id="gemGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9400D3" />
            <stop offset="100%" stopColor="#4B0082" />
          </linearGradient>
          <linearGradient id="gemGradient3" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF1493" />
            <stop offset="100%" stopColor="#9400D3" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  )
}
