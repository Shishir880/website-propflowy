import { Headphones, Database, Bot, Zap, PenTool, BarChart, HardDrive, Share2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  const genericServices = [
    {
      title: "Omnichannel Customer Support",
      desc: "Deploy a conversational AI agent across WhatsApp, Website, and Facebook Messenger to handle Tier-1 queries instantly.",
      benefit: "Reduces human support tickets by 80% while retaining a 98% CSAT score.",
      icon: <Headphones className="h-6 w-6 text-white" />
    },
    {
      title: "Intelligent Lead Generation",
      desc: "Agents scrape platforms like LinkedIn, Apollo, and Zillow, instantly drafting highly personalized outbound sequences.",
      benefit: "Quadruples outbound pipeline volume without adding BDR headcount.",
      icon: <Bot className="h-6 w-6 text-white" />
    },
    {
      title: "Internal RAG Architecture",
      desc: "Connect an LLM securely to your company Google Drive, Notion, and databases. Chat directly with your private data.",
      benefit: "Eliminates time spent searching for internal docs and onboarding new hires.",
      icon: <Database className="h-6 w-6 text-white" />
    },
    {
      title: "Workflow & Ecosystem Logic",
      desc: "Deep API integrations connecting your CRMs, Slack, email, and legacy databases via Make/Zapier.",
      benefit: "Saves 35+ hours of manual data entry per week per employee.",
      icon: <Zap className="h-6 w-6 text-white" />
    },
    {
      title: "AI Content Automation",
      desc: "Autonomous pipelines that research keywords, draft SEO blogs, format newsletters, and auto-post to social channels.",
      benefit: "Maintains a massive omnipresent digital footprint on auto-pilot.",
      icon: <PenTool className="h-6 w-6 text-white" />
    },
    {
      title: "Data Analysis & ML Forecasting",
      desc: "Predictive machine learning models that analyze your historical sales data to forecast future revenue ceilings.",
      benefit: "Removes guesswork from quarterly planning and spots pipeline leaks.",
      icon: <BarChart className="h-6 w-6 text-white" />
    },
    {
      title: "Document NLP Parsing",
      desc: "Vision AI models that read and extract critical data from unstructured invoices, PDFs, and legal contracts.",
      benefit: "Drops document processing time from days to literally 3 seconds.",
      icon: <HardDrive className="h-6 w-6 text-white" />
    },
    {
      title: "Social Omni-Scraper",
      desc: "Monitor Twitter, Reddit, and forums for brand mentions or buying signals, automatically logging them into HubSpot.",
      benefit: "Captures zero-intent leads before your competitors even see them.",
      icon: <Share2 className="h-6 w-6 text-white" />
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col px-6 pt-32 pb-24">
      <div className="mb-24 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter mb-8 text-white leading-[1.1]">
          Global Business Automation.
        </h1>
        <p className="text-xl text-neutral-400 leading-relaxed font-sans max-w-2xl">
          Scale your enterprise without scaling your headcount. We build autonomous agents for every department in your company.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-32">
        {genericServices.map((s, i) => (
          <div key={i} className="group rounded-3xl bg-white/[0.02] border border-white/[0.06] p-10 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.06)] h-full flex flex-col">
            <div className="h-14 w-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              {s.icon}
            </div>
            
            <h3 className="font-heading text-2xl font-bold tracking-tight mb-4 text-white">{s.title}</h3>
            
            <p className="text-neutral-400 text-base leading-relaxed mb-6">
              {s.desc}
            </p>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-green-400 mb-1 block">Benefit</span>
              <p className="text-neutral-300 text-sm font-medium">{s.benefit}</p>
            </div>
            
            <div className="mt-auto pt-4 border-t border-white/10">
              <Link href="/book">
                <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white group-hover:pl-4 transition-all -ml-4">
                  See in Action <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
