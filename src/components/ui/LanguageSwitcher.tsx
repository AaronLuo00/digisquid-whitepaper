'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <motion.div 
      className="fixed top-4 right-4 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <button
        onClick={toggleLanguage}
        className="cyber-button px-4 py-2 rounded-lg text-sm font-medium relative group"
      >
        <span className="game-number absolute -top-2 -left-2 opacity-50 group-hover:opacity-100 text-xs">
          {language === 'en' ? 'CN' : 'EN'}
        </span>
        {language === 'en' ? '中文' : 'English'}
        <motion.span
          className="absolute inset-0 rounded-lg border border-squid-pink/50"
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </button>
    </motion.div>
  )
}
