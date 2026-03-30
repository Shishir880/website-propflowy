import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Real Estate Benchmarks & Agent Performance metrics | PropFlowy",
  description: "We let the AI data speak for itself. Compare the latency, CRM sync efficiency, and ROI of our autonomous swarms against massive manual real estate brokerages.",
  keywords: ["Real Estate AI ROI Calculator", "Proptech Agency Benchmarks", "SLA AI Real Estate", "Data Driven Property Closing", "Autonomous Lead Generation Stats"],
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
