'use client'

import { motion } from 'framer-motion'

export default function SquidIcon() {
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
        {/* 发光效果 */}
        <motion.circle
          cx="50"
          cy="45"
          r="35"
          className="fill-red-900/10"
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
        
        {/* 鱿鱼头部 */}
        <motion.path
          d="M35 25C35 25 30 35 30 45C30 55 35 65 50 65C65 65 70 55 70 45C70 35 65 25 65 25L50 15L35 25Z"
          fill="url(#squidGradient)"
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

        {/* 鳍部 */}
        <motion.path
          d="M30 45C25 45 20 40 25 35M70 45C75 45 80 40 75 35"
          stroke="url(#tentacleGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* 触须 - 左侧 */}
        {[...Array(4)].map((_, i) => (
          <motion.path
            key={`left-${i}`}
            d={`M${40 - i * 3} ${65 + i * 2}C${35 - i * 4} ${75 + i * 3} ${30 - i * 5} ${85 + i * 2} ${25 - i * 5} ${90 + i * 2}`}
            stroke="url(#tentacleGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: [0.3, 1, 0.3],
              y: [0, -2 - i, 0]
            }}
            transition={{
              duration: 2 + i * 0.2,
              delay: i * 0.1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* 触须 - 右侧 */}
        {[...Array(4)].map((_, i) => (
          <motion.path
            key={`right-${i}`}
            d={`M${60 + i * 3} ${65 + i * 2}C${65 + i * 4} ${75 + i * 3} ${70 + i * 5} ${85 + i * 2} ${75 + i * 5} ${90 + i * 2}`}
            stroke="url(#tentacleGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: [0.3, 1, 0.3],
              y: [0, -2 - i, 0]
            }}
            transition={{
              duration: 2 + i * 0.2,
              delay: i * 0.1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* 吸盘装饰 */}
        {[...Array(8)].map((_, i) => (
          <motion.circle
            key={`sucker-${i}`}
            cx={35 + i * 5}
            cy={75}
            r="1"
            fill="#DC143C"
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* 眼睛 */}
        <motion.circle
          cx="40"
          cy="40"
          r="4"
          className="fill-white"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.circle
          cx="60"
          cy="40"
          r="4"
          className="fill-white"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* 眼睛细节 */}
        <circle cx="40" cy="40" r="2" fill="#000" />
        <circle cx="60" cy="40" r="2" fill="#000" />

        {/* 渐变定义 */}
        <defs>
          <linearGradient id="squidGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B0000" />
            <stop offset="50%" stopColor="#B22222" />
            <stop offset="100%" stopColor="#8B0000" />
          </linearGradient>
          <linearGradient id="tentacleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B0000" />
            <stop offset="50%" stopColor="#DC143C" />
            <stop offset="100%" stopColor="#8B0000" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  )
}
