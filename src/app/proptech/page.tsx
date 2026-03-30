"use client";

import { Target, Box, Leaf, Link as LinkIcon, Cpu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProptechPage() {
  const features = [
    {
      title: "Predictive Lead Scoring & Auto Booking",
      desc: "Our machine learning models analyze behavioral data to intercept inbound inquiries instantly on WhatsApp, qualifying buyers logically and scheduling viewings automatically.",
      icon: Target
    },
    {
      title: "Digital Twin & VR Rendering",
      desc: "Deploy interactive 3D virtual showrooms for off-plan developments, allowing international investors to tour properties remotely with an autonomous AI guide.",
      icon: Box
    },
    {
      title: "ESG & Sustainability Analytics",
      desc: "Automatically calculate carbon footprints, energy efficiency metrics, and green compliances for your entire commercial portfolio using computer vision.",
      icon: Leaf
    },
    {
      title: "Blockchain Document Automation",
      desc: "Generate cryptographically secure NDAs, Sale Agreements, and Title Deeds via smart contracts, ensuring zero tampering during international transfers.",
      icon: LinkIcon
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col font-sans px-6 pt-32 pb-24 text-neutral-200">
      
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase mb-8">
          <Cpu className="h-3 w-3" /> Industry Specific AI
        </div>
        <h1 className="text-5xl md:text-7xl font-heading font-medium tracking-tighter mb-8 text-[#F8F5F2] leading-[1.05]">
          Agentic Real Estate <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#E2C37A] to-[#F5F5F0]">Solutions.</span>
        </h1>
        <p className="text-xl text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed mb-12">
          Specialized infrastructure engineered to completely remove human latency from the global property lifecycle.
        </p>
        <Link href="/book">
          <Button size="lg" className="bg-white text-black hover:bg-neutral-200 font-semibold h-12 px-8 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            Explore Integrations
          </Button>
        </Link>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="bg-[#0A0A0A] border border-white/[0.04] p-10 rounded-3xl hover:border-[#D4AF37]/30 shadow-none hover:shadow-[0_0_50px_rgba(212,175,55,0.05)] transition-all duration-500 hover:-translate-y-1 group">
            <div className="h-14 w-14 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-center mb-8 group-hover:bg-[#D4AF37]/10 transition-colors">
               <f.icon className="h-7 w-7 text-[#F5F5F0] group-hover:text-[#D4AF37]" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-heading text-white mb-4">{f.title}</h3>
            <p className="text-neutral-400 leading-relaxed text-sm">{f.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
