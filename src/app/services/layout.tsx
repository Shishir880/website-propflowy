import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Real Estate Services & Automation Bots | PropFlowy",
  description: "Deploy 24/7 AI conversational agents for WhatsApp, automate CRM inputs to Salesforce, and qualify property investors faster using our enterprise real estate AI swarms.",
  keywords: ["Real Estate AI Agents", "Automate WhatsApp Real Estate", "FastAPI Real Estate CRM", "Lead Qualification AI", "Bespoke Proptech Development", "Virtual Leasing Agents"],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
