import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Real Estate Insights & Proptech Strategies | PropFlowy Blog",
  description: "Learn how the world's top property developers use LangChain, FastAPI, and autonomous AI agents to scale deposits without increasing broker headcount.",
  keywords: ["Proptech Blog", "Real Estate AI News", "Automation Broker Guides", "AI Agency Insights"],
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
