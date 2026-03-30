"use client";

import { useState } from "react";
import { CheckCircle2, Minus, Calculator, Code2, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PricingPage() {
  const [leadsPerMonth, setLeadsPerMonth] = useState<number>(250);
  const [avgDealValue, setAvgDealValue] = useState<number>(15000);

  const calculateROI = () => {
    // Assumption: AI recovers 15% of traditionally lost or delayed leads.
    const recoveredDeals = Math.floor(leadsPerMonth * 0.15);
    const addedRevenue = recoveredDeals * avgDealValue;
    return addedRevenue.toLocaleString();
  };

  const tiers = [
    {
      name: "Starter Automation",
      price: "$499",
      duration: "/month",
      desc: "Perfect for boutique agencies looking to eliminate manual data entry and scraping.",
      features: ["Lead Extraction Web Scraping", "CRM Webhooks", "Basic Email Auto-Responses", "1 Singular AI Agent", "Shared Server Hosting"],
      button: "Start Free Audit",
      featured: false
    },
    {
      name: "Professional Swarm",
      price: "$1,499",
      duration: "/month",
      desc: "Multi-agent autonomous workflows for rapidly growing global brokerages.",
      features: ["Multi-Agent Orchestration", "WhatsApp Integrations", "Voice Agent Call Dispatch", "Auto Property Matching System", "Dedicated API Resources"],
      button: "Deploy Architecture",
      featured: true
    },
    {
      name: "Enterprise Native",
      price: "Custom",
      duration: " Pricing",
      desc: "Cyclical reasoning and on-premise infinite deployments for massive developers.",
      features: ["Cyclical Reasoning Execution", "Blockchain Document Processing", "On-Premise Air-gapped Deployment", "Infinite Agent Swarms", "Direct Engineer SLA Support"],
      button: "Contact Engineering",
      featured: false
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col px-6 pt-32 pb-24 font-sans">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-5xl md:text-7xl font-heading font-medium tracking-tighter mb-8 text-[#F8F5F2] leading-[1.05]">
          Priced for Exponential <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#E2C37A] to-[#F5F5F0]">ROI Scaling.</span>
        </h1>
        <p className="text-xl text-neutral-400 leading-relaxed font-light">
          We don't sell software subscriptions. We engineer native Python backend architectures strictly mapped to your revenue bottlenecks.
        </p>
      </div>

      {/* ROI Calculator Trigger */}
      <div className="max-w-4xl mx-auto mb-24 w-full bg-[#0A0A0A] border border-white/[0.04] p-8 md:p-12 rounded-3xl shadow-[0_0_60px_rgba(212,175,55,0.03)] grid md:grid-cols-2 gap-12 items-center animate-in fade-in duration-1000">
        <div>
          <div className="flex items-center gap-2 text-[#D4AF37] mb-4 text-xs font-bold uppercase tracking-widest">
            <Calculator className="h-4 w-4" /> Live ROI Projection
          </div>
          <h3 className="text-2xl font-heading font-medium text-white mb-6">See how much revenue you are bleeding to slow responses.</h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold text-neutral-400 uppercase tracking-widest">Monthly Inbound Leads</label>
                <span className="text-sm text-white font-medium">{leadsPerMonth}</span>
              </div>
              <input 
                type="range" min="10" max="2000" step="10" value={leadsPerMonth} 
                onChange={(e) => setLeadsPerMonth(parseInt(e.target.value))}
                className="w-full accent-[#D4AF37] bg-white/10 h-2 rounded-full appearance-none outline-none"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold text-neutral-400 uppercase tracking-widest">Avg Deal Commission ($)</label>
                <span className="text-sm text-white font-medium">${avgDealValue.toLocaleString()}</span>
              </div>
              <input 
                type="range" min="1000" max="100000" step="1000" value={avgDealValue} 
                onChange={(e) => setAvgDealValue(parseInt(e.target.value))}
                className="w-full accent-[#D4AF37] bg-white/10 h-2 rounded-full appearance-none outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#050505] p-8 rounded-2xl border border-white/[0.04] text-center flex flex-col justify-center relative overflow-hidden h-full">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0,transparent_70%)]" />
           <div className="relative z-10 text-xs text-[#D4AF37] font-bold uppercase tracking-widest mb-4">Projected Capital Recovered</div>
           <div className="relative z-10 text-5xl md:text-6xl font-light text-[#F8F5F2] tracking-tighter mb-4">
             ${calculateROI()}
           </div>
           <div className="relative z-10 text-xs text-neutral-500 font-medium">Per Month via Autonomous Agent Conversion</div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-32">
        {tiers.map((tier, i) => (
          <div 
            key={i} 
            className={`relative rounded-3xl p-10 flex flex-col transition-all duration-700 hover:shadow-[0_0_50px_rgba(212,175,55,0.08)] hover:-translate-y-2
              ${tier.featured 
                ? 'bg-[#0A0A0A] border border-[#D4AF37]/30 shadow-[0_0_40px_rgba(212,175,55,0.05)]' 
                : 'bg-[#050505] border border-white/[0.04]'
              }`}
          >
            {tier.featured && (
              <div className="absolute top-0 right-10 -translate-y-1/2 bg-[#D4AF37] text-black text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full">
                Most Popular
              </div>
            )}
            
            <h3 className="text-xl font-heading font-medium text-white mb-2">{tier.name}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-semibold text-[#F8F5F2] tracking-tighter">{tier.price}</span>
              <span className="text-sm text-neutral-500">{tier.duration}</span>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed mb-8">{tier.desc}</p>
            
            <div className="flex-1">
              <div className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-4">Architecture Includes:</div>
              <ul className="space-y-4 mb-8">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-[#D0A150] shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-300">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Link href="/book" className="mt-auto w-full">
               <Button className={`w-full h-14 font-semibold ${tier.featured ? 'bg-[#F5F5F0] text-black hover:bg-white' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'}`}>
                 {tier.button}
               </Button>
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
}
