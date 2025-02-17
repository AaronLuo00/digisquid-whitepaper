'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import type { Point, Feature, Game } from '@/context/LanguageContext'
import Section, { SectionHeading } from '@/components/ui/Section'
import BackgroundEffects from '@/components/decorative/BackgroundEffects'
import HeroEffects from '@/components/decorative/HeroEffects'
import SquidIcon from '@/components/icons/SquidIcon'
import BattleIcon from '@/components/icons/BattleIcon'
import RewardIcon from '@/components/icons/RewardIcon'

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

interface Hero {
  title: string
  subtitle: string
  description: string
  cta?: string
  secondary?: string
}

export default function Home() {
  const { content, language } = useLanguage()
  const t = {
    cta: language === 'zh' ? '社区' : '1231344353',
    learnMore: language === 'zh' ? '了解更多' : 'Learn More'
  }

  return (
    <div className="pt-24 relative">
      {/* 背景效果 */}
      <BackgroundEffects />
      {/* Hero Section */}
      <Section className="min-h-[85vh] flex items-center">
        <div className="max-w-5xl mx-auto text-center relative group">
          {/* Hero Effects */}
          <HeroEffects />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative z-10"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold">
                <motion.span
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {content.hero.title}
                </motion.span>
                <motion.span
                  className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-squid-pink via-purple-500 to-squid-pink relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {content.hero.subtitle}
                </motion.span>
              </h1>
            </motion.div>
            
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {content.hero.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link
                href="/marketing"
                className="px-8 py-3 bg-gradient-to-r from-squid-pink to-purple-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-squid-pink/20 transition-all duration-300 transform hover:scale-105"
              >
                {t.cta}
              </Link>
            </motion.div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 w-[200%] h-48 bg-gradient-to-b from-transparent to-black pointer-events-none" />
        </div>
      </Section>

      {/* Why DigiSquid Section */}
      <Section variant="alternate" id="why-section">
        <SectionHeading 
          title={content.whyDegenSquid.title}
          subtitle={content.whyDegenSquid.subtitle}
        />
        <div className="flex flex-nowrap md:grid md:grid-cols-3 gap-8 overflow-x-auto pb-6 px-4 snap-x snap-mandatory -mx-4 md:mx-0 md:overflow-x-visible md:pb-0 scrollbar-hide">
          {content.whyDegenSquid.points.map((point: Point, index: number) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="cyber-card p-6 rounded-xl hover:bg-squid-pink/5 transition-colors duration-300 min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center first:ml-4 md:first:ml-0"
            >
              <div className="mb-4">
                {point.icon === 'squid' && <SquidIcon />}
                {point.icon === 'battle' && <BattleIcon />}
                {point.icon === 'reward' && <RewardIcon />}
              </div>
              <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
              <p className="text-gray-400 mb-4">{point.description}</p>
              <ul className="space-y-2">
                {point.details.map((detail: string, i: number) => (
                  <li key={i} className="flex items-center text-sm text-gray-300">
                    <span className="text-squid-pink mr-2">→</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Tokenomics Section */}
      <Section id="tokenomics-section">
        <SectionHeading 
          title={content.tokenomics.title}
          subtitle={content.tokenomics.subtitle}
        />
        <div className="flex flex-nowrap md:grid md:grid-cols-2 gap-8 overflow-x-auto pb-6 px-4 snap-x snap-mandatory -mx-4 md:mx-0 md:overflow-x-visible md:pb-0 scrollbar-hide">
          {content.tokenomics.features.map((feature: Feature, index: number) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="cyber-card p-8 rounded-xl hover:bg-squid-pink/5 transition-colors duration-300 min-w-[85vw] sm:min-w-[70vw] md:min-w-0 snap-center first:ml-4 md:first:ml-0"
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.points.map((point: string, i: number) => (
                  <li key={i} className="flex items-center text-sm text-gray-300">
                    <span className="text-squid-pink mr-2">→</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Technology Section */}
      <Section id="technology-section">
        <SectionHeading 
          title={content.technology.title}
          subtitle={content.technology.subtitle}
        />
        <div className="flex flex-nowrap md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto pb-6 px-4 snap-x snap-mandatory -mx-4 md:mx-0 md:overflow-x-visible md:pb-0 scrollbar-hide">
          {content.technology.features.map((feature: Feature, index: number) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="cyber-card p-6 rounded-xl min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center first:ml-4 md:first:ml-0"
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.points.map((point: string, i: number) => (
                  <li key={i} className="flex items-center text-sm text-gray-300">
                    <span className="text-squid-pink mr-2">→</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Games Section */}
      <Section variant="alternate" id="games-section">
        <SectionHeading 
          title={content.games.title}
          subtitle={content.games.subtitle}
        />
        <div className="space-y-8">
          {content.games.list.map((game: Game, index: number) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="cyber-card p-8 rounded-xl relative overflow-hidden group hover:bg-squid-pink/5 transition-colors duration-300"
            >
              <span className="game-number absolute top-4 right-4 text-2xl">
                #{game.id}
              </span>
              <div className="max-w-3xl">
                <h3 className="text-2xl font-semibold mb-3">{game.title}</h3>
                <p className="text-gray-400 mb-4">{game.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {game.features.map((feature: string, i: number) => (
                    <div key={i} className="text-sm text-gray-300">
                      <span className="text-squid-pink mr-2">→</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section id="team-section">
        <SectionHeading 
          title={content.team.title}
          subtitle={content.team.subtitle}
        />
        <div className="max-w-4xl mx-auto space-y-8">
          {content.team.members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="cyber-card p-6 rounded-xl"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 sm:w-48 sm:h-48 relative rounded-xl overflow-hidden">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={192}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                  <div className="text-squid-pink mb-4">{member.role}</div>
                  <p className="text-gray-400 mb-4">{member.description}</p>
                  <div className="flex gap-4">
                    <a
                      href={member.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-squid-pink hover:text-white transition-colors"
                    >
                      LinkedIn →
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Team Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cyber-card p-6 rounded-xl bg-gradient-to-br from-squid-pink/5 to-purple-600/5"
          >
            <h3 className="text-2xl font-semibold mb-4 squid-text">{content.team.comingSoon.title}</h3>
            <p className="text-gray-400 mb-6">{content.team.comingSoon.description}</p>
          </motion.div>
        </div>
      </Section>

      {/* Partners Section */}
      <Section variant="alternate" id="partners-section">
        <SectionHeading 
          title={content.partners.title}
          subtitle={content.partners.subtitle}
        />
        <div className="grid grid-cols-1 gap-12">
          {content.partners.list.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="cyber-card p-8 rounded-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              {/* Partner Header */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
                <div className="w-24 h-24 rounded-xl overflow-hidden bg-gradient-to-br from-squid-pink/20 to-purple-600/20 p-1">
                  <Image
                    src={partner.avatar}
                    alt={partner.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-2xl font-semibold">{partner.name}</h3>
                    <a
                      href={partner.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-squid-pink hover:text-white transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  </div>
                  <p className="text-gray-400 text-lg">{partner.description}</p>
                </div>
              </div>

              {/* Support Description */}
              <div className="mt-4 p-4 bg-gradient-to-r from-squid-pink/10 to-transparent rounded-lg">
                <p className="text-gray-300">{partner.support}</p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-squid-pink/10 to-transparent opacity-50 transform rotate-45" />
            </motion.div>
          ))}

          {/* Partners Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cyber-card p-8 rounded-xl bg-gradient-to-br from-squid-pink/5 to-purple-600/5"
          >
            <h3 className="text-2xl font-semibold mb-4 squid-text">{content.partners.comingSoon.title}</h3>
            <p className="text-gray-400 mb-6">{content.partners.comingSoon.description}</p>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
