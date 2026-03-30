export interface Post {
  id: number;
  slug: string;
  title: string;
  published_at: string;
  excerpt: string;
  content: string;
  cover_image: string;
  author?: string;
  tags?: string;
}

export const STATIC_POSTS: Post[] = [
  {
    id: 101,
    slug: "ai-agents-real-estate-future",
    title: "How AI Agents are Replacing Traditional Real Estate Brokers in 2026",
    published_at: new Date().toISOString(),
    excerpt: "The manual era of real estate is officially over. Explore how autonomous AI agents are qualifying leads and booking tours while you sleep.",
    cover_image: "https://images.unsplash.com/photo-1486406146926-c627a92fb1ab?q=80&w=2070&auto=format&fit=crop",
    author: "Shishir Rahman",
    tags: "AI, Proptech, Future",
    content: `
# The Shift to Autonomy
Real estate has always been a game of speed. Whoever responds to the lead first usually wins the deal. But in 2026, humans are no longer fast enough.

# Why AI Agents?
Traditional brokers spend 70% of their time on "grunt work"—qualifying cold leads, answering basic questions about square footage, and coordinating schedules. PropFlowy AI agents eliminate this entire layer.

# 24/7 Global Reach
An AI agent doesn't sleep. It can talk to a buyer in Dubai at 3 AM and another in New York at 10 AM simultaneously, in their native languages.

# Conclusion
The agencies that adopt agentic workflows today will dominate the market by 2027. Speed is no longer a luxury; it is a baseline requirement.
    `
  },
  {
    id: 102,
    slug: "maximizing-roi-with-proptech-automation",
    title: "Maximizing ROI: Why Every Property Developer Needs a Custom AI Pipeline",
    published_at: new Date(Date.now() - 86400000 * 2).toISOString(),
    excerpt: "ROI isn't just about sales price; it's about operational efficiency. Learn how automation reduces overhead by 40%.",
    cover_image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    author: "PropFlowy Architects",
    tags: "Management, ROI, Systems",
    content: `
# Efficiency is the New Profit
In a high-interest environment, developers are looking for ways to cut costs without sacrificing quality. 

# Zero Latency Lead Handling
Every hour a lead sits in an inbox, its value drops by 50%. Our automated pipelines ensure zero latency.

# Data-Driven Decisions
AI doesn't just talk; it gathers data. It knows which property features are being asked about most, allowing developers to pivot their marketing strategy in real-time.
    `
  }
];
