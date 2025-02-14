export interface Tweet {
  id: string;
  url: string;
  author: {
    name: string;
    avatar: string;
  };
  screenshot: string;
  summary: {
    en: string;
    zh: string;
  };
  stats: {
    views: number;
    likes: number;
    retweets: number;
  };
  date: string;
}

export const tweets: Tweet[] = [
  {
    id: "1887537750171070838",
    url: "https://x.com/GoatIndexAI/status/1887537750171070838",
    author: {
      name: "GoatIndex.ai | Data Layer For Solana AI",
      avatar: "/images/marketing/authors/GoatIndexAI.jpg"
    },
    screenshot: "/images/marketing/tweets/GoatIndexAI_01.png",
    summary: {
      zh: "DegenSquid被GoatIndex评为Solana AI领域的新星项目之一，以其作为AI游戏引擎的创新定位和160万美元的市值备受关注。",
      en: "DegenSquid recognized by GoatIndex as a rising star in Solana AI space, highlighted for its innovative position as The Unreal Engine for AI gaming with a $1.6M market cap."
    },
    stats: {
      views: 7169,
      likes: 99,
      retweets: 29
    },
    date: "2024-02-06"
  },
  {
    id: "1888083073146958255",
    url: "https://x.com/rexnotrekt/status/1888083073146958255",
    author: {
      name: "Rex | DegenSquid",
      avatar: "/images/marketing/authors/rex.jpg"
    },
    screenshot: "/images/marketing/tweets/rex-01.png",
    summary: {
      zh: "详细介绍了DegenSquid项目的核心优势：AI驱动的GameFi创新、快速游戏体验和双重盈利模式，引发社区热烈讨论。",
      en: "Detailed introduction of DegenSquid's core advantages: AI-driven GameFi innovation, fast-paced gaming experience, and dual revenue model, sparking enthusiastic community discussion."
    },
    stats: {
      views: 16000,
      likes: 272,
      retweets: 46
    },
    date: "2024-02-07"
  }
];
