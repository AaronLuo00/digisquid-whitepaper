'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import { content as enContent } from '@/content/en/content'
import { content as zhContent } from '@/content/zh/content'

type Language = 'en' | 'zh'

interface TeamMember {
  name: string
  role: string
  photo: string
  description: string
  links: {
    linkedin: string
  }
}

interface Team {
  title: string
  subtitle: string
  members: TeamMember[]
  comingSoon: {
    title: string
    description: string
    positions: string[]
  }
}

interface Partner {
  name: string
  avatar: string
  twitter: string
  description: string
  support: string
  highlights: string[]
  contributions: string[]
}

interface Partners {
  title: string
  subtitle: string
  sectionTitles: {
    highlights: string
    support: string
  }
  list: Partner[]
  comingSoon: {
    title: string
    description: string
    upcoming: string[]
  }
}

export interface Point {
  title: string
  description: string
  icon: string
  details: string[]
}

export interface Feature {
  title: string
  description: string
  points: string[]
}

export interface Game {
  id: string
  title: string
  description: string
  features: string[]
}

export interface Phase {
  title: string
  items: string[]
}

type Content = {
  meta: { title: string; description: string }
  hero: { title: string; subtitle: string; description: string }
  whyDegenSquid: {
    title: string
    subtitle: string
    points: Point[]
  }
  tokenomics: {
    title: string
    subtitle: string
    features: Feature[]
  }
  technology: {
    title: string
    subtitle: string
    features: Feature[]
  }
  businessModel: {
    title: string
    subtitle: string
    features: Feature[]
  }
  games: {
    title: string
    subtitle: string
    list: Game[]
  }
  team: Team
  partners: Partners
  roadmap: {
    title: string
    phases: Phase[]
  }
}

interface LanguageContextType {
  language: Language
  content: Content
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en')
  }, [])

  const content = language === 'en' ? enContent : zhContent

  return (
    <LanguageContext.Provider value={{ language, content, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
