import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Proptech Solutions: Predictive Scoring & VR Defaults | PropFlowy",
  description: "Explore our native Python infrastructure. Featuring LangChain NLP for intent parsing, digital twin virtual showrooms, and blockchain document security for modern property portfolios.",
  keywords: ["Proptech SaaS", "Digital Twin Real Estate", "Predictive Lead Scoring Properties", "Blockchain Title Deeds", "ESG Analytics Real Estate", "LangChain Real Estate Use Case"],
};

export default function ProptechLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
