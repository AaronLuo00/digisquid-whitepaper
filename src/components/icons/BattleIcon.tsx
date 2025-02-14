'use client'

import { motion } from 'framer-motion'

export default function BattleIcon() {
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
        {/* 能量光环 */}
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          className="stroke-squid-pink/20"
          strokeWidth="2"
          fill="none"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* 左剑 */}
        <motion.g
          initial={{ rotate: -20 }}
          animate={{ rotate: [-20, -15, -20] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.path
            d="M30 70L45 35L50 30L55 35L45 70L30 70Z"
            fill="url(#swordGradient1)"
            initial={{ opacity: 0.8 }}
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {/* 剑柄 */}
          <rect x="42" y="65" width="6" height="15" rx="2" className="fill-gray-300" />
          <rect x="35" y="70" width="20" height="4" rx="1" className="fill-gray-400" />
        </motion.g>

        {/* 右剑 */}
        <motion.g
          initial={{ rotate: 20 }}
          animate={{ rotate: [20, 15, 20] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.path
            d="M70 70L55 35L50 30L45 35L55 70L70 70Z"
            fill="url(#swordGradient2)"
            initial={{ opacity: 0.8 }}
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {/* 剑柄 */}
          <rect x="52" y="65" width="6" height="15" rx="2" className="fill-gray-300" />
          <rect x="45" y="70" width="20" height="4" rx="1" className="fill-gray-400" />
        </motion.g>

        {/* 能量粒子 */}
        {[...Array(8)].map((_, i) => (
          <motion.circle
            key={i}
            cx={50 + Math.cos(i * Math.PI / 4) * 25}
            cy={50 + Math.sin(i * Math.PI / 4) * 25}
            r="2"
            className="fill-squid-pink"
            initial={{ scale: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
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
          <linearGradient id="swordGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ECDC4" />
            <stop offset="100%" stopColor="#556270" />
          </linearGradient>
          <linearGradient id="swordGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4ECDC4" />
            <stop offset="100%" stopColor="#556270" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  )
}
