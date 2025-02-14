'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useLanguage } from '@/context/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'
import { useState, useCallback, useEffect } from 'react'

const content = {
  en: {
    home: "Home",
    why: "Why DigitalSquid",
    tokenomics: "Tokenomics",
    technology: "Technology",
    games: "Games",
    team: "Team",
    partners: "Partners",
    roadmap: "Roadmap",
    cta: "Community"
  },
  zh: {
    home: "首页",
    why: "为什么选择",
    tokenomics: "代币经济",
    technology: "技术创新",
    games: "游戏",
    team: "团队",
    partners: "合作伙伴",
    roadmap: "路线图",
    cta: "社区"
  }
}

export default function Navigation() {
  const pathname = usePathname()
  const router = useRouter()
  const { language } = useLanguage()
  const t = content[language]
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [pendingScroll, setPendingScroll] = useState<string | null>(null)

  const isActive = (path: string) => pathname === path

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }, [])

  useEffect(() => {
    // Handle pending scroll after navigation
    if (pendingScroll && pathname === '/') {
      const timer = setTimeout(() => {
        scrollToSection(pendingScroll)
        setPendingScroll(null)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [pathname, pendingScroll, scrollToSection])

  const handleNavigation = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMenuOpen(false)

    if (href === '/') {
      setIsLoading(true)
      router.push(href)
      return
    }

    if (href.startsWith('/#')) {
      const sectionId = href.replace('/#', '')
      if (pathname === '/') {
        // If we're already on the home page, just scroll
        scrollToSection(sectionId)
      } else {
        // If we're on another page, navigate home first then scroll
        setIsLoading(true)
        setPendingScroll(sectionId)
        router.push('/')
      }
    } else {
      // Regular navigation
      setIsLoading(true)
      router.push(href)
    }
  }, [pathname, router, scrollToSection])

  useEffect(() => {
    // Reset loading state when pathname changes
    setIsLoading(false)
  }, [pathname])

  const menuItems = [
    { href: '/#why-section', label: t.why },
    { href: '/#tokenomics-section', label: t.tokenomics },
    { href: '/#technology-section', label: t.technology },
    { href: '/#games-section', label: t.games },
    { href: '/#team-section', label: t.team },
    { href: '/#partners-section', label: t.partners },
    // Roadmap temporarily hidden
    // { href: '/#roadmap-section', label: t.roadmap },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm border-b border-squid-pink/10 shadow-lg shadow-squid-pink/10 before:absolute before:inset-0 before:bg-gradient-to-r before:from-squid-pink/5 before:via-transparent before:to-squid-pink/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Link 
              href="/"
              onClick={(e) => handleNavigation(e, '/')}
              className="flex items-center space-x-2 nav-brand group relative overflow-hidden"
            >
              <Image src="/images/DSG.png" alt="DigitalSquid Logo" width={32} height={32} className="w-8 h-8" />
              <span className="text-2xl">DigitalSquid</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavigation(e, item.href)}
                className={`text-sm font-medium relative group ${
                  isActive(item.href)
                    ? 'text-squid-pink'
                    : 'text-gray-300 hover:text-white hover:text-shadow-glow'
                } transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-squid-pink before:scale-x-0 before:origin-right before:transition-transform hover:before:scale-x-100 hover:before:origin-left`}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <Link
                href="/marketing"
                onClick={(e) => handleNavigation(e, '/marketing')}
                className={`px-4 py-2 bg-gradient-to-r from-squid-pink to-purple-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-squid-pink/20 transition-all duration-300 transform hover:scale-105 ${
                  isLoading ? 'opacity-50 pointer-events-none' : ''
                }`}
              >
                {isLoading ? 'Loading...' : t.cta}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-squid-pink/10 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-full h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div 
          className={`md:hidden fixed inset-0 bg-black/80 backdrop-blur-lg transition-opacity duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          <div 
            className={`absolute right-0 top-20 w-4/5 max-w-sm h-[calc(100vh-5rem)] bg-black/90 border-l border-squid-pink/20 px-2 pt-2 pb-3 space-y-1 transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavigation(e, item.href)}
                className={`block px-3 py-4 rounded-lg text-base font-medium active:scale-95 ${
                  isActive(item.href)
                    ? 'text-squid-pink bg-squid-pink/10'
                    : 'text-gray-300 hover:text-white hover:bg-squid-pink/5'
                } transition-all duration-300 relative overflow-hidden`}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-3 py-3 flex flex-col space-y-3">
              <LanguageSwitcher />
              <Link
                href="/marketing"
                onClick={(e) => handleNavigation(e, '/marketing')}
                className={`block text-center px-4 py-2 bg-gradient-to-r from-squid-pink to-purple-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-squid-pink/20 transition-all duration-300 ${
                  isLoading ? 'opacity-50 pointer-events-none' : ''
                }`}
              >
                {isLoading ? 'Loading...' : t.cta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
