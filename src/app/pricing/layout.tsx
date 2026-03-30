import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proptech Pricing & Automation Deployment Costs | PropFlowy",
  description: "Engineer standalone property execution algorithms without infinite SaaS retainers. Predict exact ROI scale on AI Agents, LangGraph routing, and FastAPI webhook setups.",
  keywords: ["Real Estate AI Pricing", "Proptech Agency Retainers", "Cost of AI Real Estate Lead Bots", "Custom AI Agency Pricing"],
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
