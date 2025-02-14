'use client'

import { useLanguage } from '@/context/LanguageContext'
import Section, { SectionHeading } from '@/components/ui/Section'
import TweetCard from '@/components/marketing/TweetCard'
import { tweets } from '@/content/marketing/tweets'

const content = {
  en: {
    title: "Community Highlights",
    subtitle: "What People Are Saying About DegenSquid",
    description: "Explore the latest discussions and insights about DegenSquid from our community leaders and partners."
  },
  zh: {
    title: "社区亮点",
    subtitle: "DegenSquid社区声音",
    description: "探索来自社区领袖和合作伙伴对DegenSquid的最新讨论和见解。"
  }
}

export default function Marketing() {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <div className="pt-16">
      <Section className="min-h-[40vh] flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading 
            title={t.title}
            subtitle={t.subtitle}
          />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-6">
            {t.description}
          </p>
        </div>
      </Section>

      <Section variant="alternate">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tweets.map((tweet) => (
            <TweetCard key={tweet.id} tweet={tweet} />
          ))}
        </div>
      </Section>
    </div>
  )
}
