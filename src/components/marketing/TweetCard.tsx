import { Tweet } from '@/content/marketing/tweets'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import Image from 'next/image'

interface TweetCardProps {
  tweet: Tweet
}

const labels = {
  en: {
    views: "Views",
    likes: "Likes",
    retweets: "Retweets"
  },
  zh: {
    views: "浏览",
    likes: "点赞",
    retweets: "转发"
  }
}

export default function TweetCard({ tweet }: TweetCardProps) {
  const { language } = useLanguage()
  const t = labels[language]
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="cyber-card p-6 rounded-xl hover:shadow-2xl transition-all duration-300"
    >
      {/* Author Info */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-squid-pink/20 to-purple-600/20 p-0.5">
          <Image
            src={tweet.author.avatar}
            alt={tweet.author.name}
            width={48}
            height={48}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-white">{tweet.author.name}</h3>
          <p className="text-sm text-gray-400">{tweet.date}</p>
        </div>
      </div>

      {/* Tweet Screenshot */}
      <a
        href={tweet.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block mb-6 hover:opacity-90 transition-opacity"
      >
        <div className="rounded-xl overflow-hidden bg-gradient-to-br from-squid-pink/20 to-purple-600/20 p-1">
          <Image
            src={tweet.screenshot}
            alt="Tweet screenshot"
            width={600}
            height={400}
            className="w-full rounded-lg"
          />
        </div>
      </a>

      {/* Summary */}
      <div className="mb-6">
        <p className="text-gray-300">{tweet.summary[language]}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="cyber-card p-2 rounded-lg bg-black/30">
          <div className="text-squid-pink text-sm mb-1">{t.views}</div>
          <div className="text-white">{tweet.stats.views.toLocaleString()}</div>
        </div>
        <div className="cyber-card p-2 rounded-lg bg-black/30">
          <div className="text-squid-pink text-sm mb-1">{t.likes}</div>
          <div className="text-white">{tweet.stats.likes.toLocaleString()}</div>
        </div>
        <div className="cyber-card p-2 rounded-lg bg-black/30">
          <div className="text-squid-pink text-sm mb-1">{t.retweets}</div>
          <div className="text-white">{tweet.stats.retweets.toLocaleString()}</div>
        </div>
      </div>
    </motion.div>
  )
}
