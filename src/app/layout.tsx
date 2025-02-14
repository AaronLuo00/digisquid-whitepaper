'use client'

import { Inter } from 'next/font/google'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { LanguageProvider } from '@/context/LanguageContext'
import Navigation from '@/components/ui/Navigation'
import DynamicBackground from '@/components/decorative/DynamicBackground'
import BackgroundEffects from '@/components/decorative/BackgroundEffects'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={`${inter.className} min-h-screen bg-primary`}>
        <LanguageProvider>
          {/* Background Effects */}
          <BackgroundEffects />
          
          {/* Dynamic Background */}
          <DynamicBackground />

          {/* Background Grid */}
          <div className="fixed inset-0 cyber-grid opacity-20" />

          {/* Logo Watermark */}
          <motion.div 
            className="fixed right-0 bottom-0 pointer-events-none opacity-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Image
              src="/images/DSG.png"
              alt="DSG Logo"
              width={400}
              height={400}
              className="max-w-[200px] md:max-w-[400px]"
              priority
            />
          </motion.div>

          {/* Navigation */}
          <Navigation />

          {/* Main Content */}
          <main className="relative z-10">
            {children}
          </main>

          {/* Performance Optimization: Use CSS transforms for better performance */}
          <style jsx global>{`
            @media (prefers-reduced-motion: no-preference) {
              .animate-float {
                animation: float 20s ease-in-out infinite;
                will-change: transform;
              }
              
              @keyframes float {
                0%, 100% { transform: translateY(0) rotate(0deg); }
                25% { transform: translateY(-20px) rotate(5deg); }
                75% { transform: translateY(20px) rotate(-5deg); }
              }
            }

            /* Optimize animations for reduced motion */
            @media (prefers-reduced-motion: reduce) {
              * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
                scroll-behavior: auto !important;
              }
            }
          `}</style>
        </LanguageProvider>
      </body>
    </html>
  )
}
