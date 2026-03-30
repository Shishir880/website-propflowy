"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Activity, MessageSquare, ShieldCheck, XCircle, PlayCircle, Home, Code2, Plus, Minus } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function HomePage() {
  // Personalization State Hook
  const [persona, setPersona] = useState<"agency" | "developer">("agency");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col font-sans overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <motion.section 
        initial="hidden" animate="visible" variants={staggerContainer}
        className="px-6 pt-24 pb-20 md:pt-36 md:pb-24 flex flex-col justify-center text-center items-center relative"
      >
        {/* Personalization Toggle */}
        <motion.div variants={fadeIn} className="absolute top-8 right-6 hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-md">
          <button onClick={() => setPersona("agency")} className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${persona === "agency" ? "bg-white text-black" : "text-neutral-500 hover:text-white"}`}>Realty Agencies</button>
          <button onClick={() => setPersona("developer")} className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${persona === "developer" ? "bg-white text-black" : "text-neutral-500 hover:text-white"}`}>Developers</button>
        </motion.div>

        <motion.div variants={fadeIn}>
          <Link href="/book" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-[11px] font-bold tracking-widest uppercase mb-10 transition-all duration-500 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5 cursor-pointer">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
            </span>
            Enterprise Real Estate AI
          </Link>
        </motion.div>
        
        <motion.h1 variants={fadeIn} className="text-5xl md:text-[5.5rem] font-heading font-medium tracking-tighter max-w-5xl leading-[1.05] text-[#F8F5F2] mb-8">
          <span className="block text-sm md:text-lg text-[#D4AF37] font-sans font-bold tracking-widest uppercase mb-4">AI Real Estate Automation</span>
          {persona === "agency" ? "Automate Lead Conversions &" : "Scale Global Property Sales &"} <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#E2C37A] to-[#F5F5F0]">Close Deals While You Sleep.</span>
        </motion.h1>
        
        <motion.p variants={fadeIn} className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
          {persona === "agency" 
            ? "Brokers spend 40% of their day following up. PropFlowy builds autonomous AI agents that qualify buyers instantly, run remote VR showings, and close deals 24/7."
            : "Off-plan developments require massive lead funnels. Deploy 24/7 virtual AI showrooms to qualify investors internationally and close deposits autonomously."
          }
        </motion.p>
        
        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-6 justify-center w-full">
          <Link href="/book">
            <Button size="lg" className="h-14 px-10 text-base font-semibold bg-[#F5F5F0] text-black hover:bg-white w-full sm:w-auto transition-all duration-500 shadow-[0_0_40px_rgba(212,175,55,0.15)] group hover:scale-[1.02]">
              Free AI Audit
              <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </Button>
          </Link>
          <Link href="/book">
            <Button size="lg" variant="outline" className="h-14 px-10 text-base font-medium bg-transparent border-white/10 text-neutral-300 hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]/30 hover:text-[#D4AF37] transition-all duration-500 w-full sm:w-auto">
              Book Architecture Demo
            </Button>
          </Link>
        </motion.div>

        {/* --- 3D / VR IMMERSIVE ELEMENT --- */}
        <motion.div variants={fadeIn} className="mt-20 w-full max-w-5xl relative mx-auto group perspective-[2000px]">
          <div className="absolute -inset-1 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-white/5 blur-3xl opacity-30 group-hover:opacity-70 transition duration-1000"></div>
          
          <div className="relative aspect-video w-full rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-2xl flex items-center justify-center transform-gpu rotate-x-12 hover:rotate-x-0 transition-all duration-1000 ease-out">
            {/* Grid Floor for 3D Illusion */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] transform perspective-1000 rotate-x-[60deg] scale-[2.5] translate-y-12 transition-transform duration-1000 group-hover:translate-y-8" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
            
            {/* Central VR Button */}
            <div className="z-20 text-center flex flex-col items-center">
               <div className="h-24 w-24 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center mb-8 cursor-pointer group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/30 group-hover:scale-110 transition-all duration-700 shadow-[0_0_50px_rgba(212,175,55,0.1)]">
                  <PlayCircle className="h-10 w-10 text-[#F5F5F0] opacity-80 group-hover:opacity-100 group-hover:text-[#D4AF37] transition-colors" strokeWidth={1} />
               </div>
               <div className="inline-flex items-center gap-3 bg-white/[0.03] backdrop-blur border border-white/5 px-5 py-2.5 rounded-full">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-300">Interact with Digital Twin Demo</span>
               </div>
            </div>
            
            {/* Floating UI Elements inside VR window */}
            <div className="absolute top-6 left-6 z-10 bg-black/40 backdrop-blur border border-white/10 px-4 py-2 rounded-lg flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
               <Home className="h-4 w-4 text-[#D4AF37]" />
               <div className="flex flex-col">
                 <span className="text-[9px] uppercase tracking-widest text-neutral-400 font-bold">Currently Viewing</span>
                 <span className="text-xs text-white">Penthouse Suite 4B</span>
               </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* 2. CLIENT LOGOS */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
        className="px-6 py-16 border-y border-white/[0.04] bg-white/[0.01] backdrop-blur-sm -mx-6 md:mx-0"
      >
        <p className="text-center text-[10px] font-bold tracking-widest uppercase text-[#D4AF37] mb-8">Trusted by Global Developers</p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-24 opacity-40 hover:opacity-100 transition-opacity duration-1000 grayscale hover:grayscale-0">
          <div className="text-xl font-heading font-medium text-white tracking-widest uppercase">Skyline</div>
          <div className="text-xl font-heading font-medium text-white tracking-widest uppercase">Emerald</div>
          <div className="text-xl font-heading font-medium text-white tracking-widest uppercase">Capital</div>
          <div className="text-xl font-heading font-medium text-white tracking-widest uppercase">Horizon</div>
        </div>
      </motion.section>

      {/* 2.5 ENGINEERING STACK */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
        className="px-6 py-12 border-b border-white/[0.04] bg-[#050505] flex flex-col items-center justify-center text-center"
      >
        <p className="text-[10px] font-bold tracking-widest uppercase text-neutral-500 mb-8 mt-4">Engineered with Production-Grade Python Infrastructure</p>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 max-w-6xl mx-auto mb-4">
            {[
              { name: "FastAPI", desc: "Async CRM Hooks" },
              { name: "LangChain", desc: "Agentic RAG" },
              { name: "CrewAI", desc: "Swarm Orchestration" },
              { name: "LangGraph", desc: "Cyclical Reasoning" },
              { name: "Flask", desc: "On-Premise APIs" },
              { name: "BeautifulSoup", desc: "Web Scraping" }
            ].map((stack, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[#0A0A0A] border border-white/[0.04] hover:border-[#D4AF37]/30 hover:shadow-[0_0_20px_rgba(212,175,55,0.05)] transition-all group">
                 <Code2 className="h-4 w-4 text-[#D4AF37] opacity-60 group-hover:opacity-100" strokeWidth={1.5} />
                 <div className="flex flex-col text-left">
                   <span className="text-sm font-heading font-medium text-[#F8F5F2]">{stack.name}</span>
                   <span className="text-[9px] text-neutral-500 uppercase tracking-widest">{stack.desc}</span>
                 </div>
              </div>
            ))}
        </div>
      </motion.section>

      {/* 3. PROBLEM SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        className="px-6 py-24 md:py-32"
      >
        <motion.div variants={fadeIn} className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight mb-6 text-white leading-tight">Why Luxury Agencies Bleed Deals.</h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            The real estate industry is built on speed. If you take 4 hours to reply to an inbound lead, they've already scheduled a tour with someone else.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Slow Lead Response", desc: "Digital leads go cold in minutes while your human agents are busy on other calls." },
            { title: "Operational Paralysis", desc: "Brokers waste 30 hours a week answering repetitive questions about HOA fees and floorplans." },
            { title: "Manual Data Entry", desc: "Salesforce isn't updated. High-intent buyer budgets and deal statuses are lost in WhatsApp." }
          ].map((item, i) => (
            <motion.div key={i} variants={fadeIn} className="bg-[#0A0A0A] border border-white/[0.04] rounded-2xl p-10 transition-all duration-700 hover:bg-[#D4AF37]/[0.02] hover:border-[#D4AF37]/20 hover:shadow-[0_0_40px_rgba(212,175,55,0.05)]">
              <XCircle className="h-8 w-8 text-[#D0A150] mb-8 opacity-70" strokeWidth={1.5} />
              <h3 className="text-xl font-medium text-white mb-4">{item.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 4. SOLUTION SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        className="px-6 py-24 md:py-32 border-t border-white/[0.04] bg-[#0A0A0A]/50"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <motion.div variants={fadeIn} className="md:w-1/2">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#D4AF37] mb-6">The PropFlowy Standard</div>
            <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight mb-8 text-white leading-tight">Deterministic, Infinitely Scalable AI.</h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-12">
              We replace chaos with quiet luxury. Your digital workforce never sleeps, never takes days off, and executes high-end property negotiations autonomously.
            </p>
            <ul className="space-y-8">
              {[
                { title: "Conversational Routing", desc: "AI replies natively via WhatsApp, engaging HNW buyers with sophisticated tone mapping." },
                { title: "Autonomous Showing Schedules", desc: "The AI accesses broker Google Calendars and secures physical viewings seamlessly." },
                { title: "Zero-Touch CRM Syncing", desc: "Every call and text is elegantly summarized and piped directly into Salesforce." }
              ].map((li, i) => (
                <li key={i} className="flex items-start gap-5 group">
                  <div className="h-6 w-6 mt-0.5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0 border border-[#D4AF37]/20 group-hover:scale-110 transition-transform">
                     <div className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">{li.title}</h4>
                    <p className="text-neutral-400 text-sm">{li.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={fadeIn} className="md:w-1/2 w-full">
            <div className="relative rounded-3xl bg-[#050505] border border-white/[0.04] p-12 aspect-square flex flex-col items-center justify-center transition-all duration-1000 hover:border-[#D4AF37]/30 hover:shadow-[0_0_80px_rgba(212,175,55,0.08)] overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0,transparent_60%)]" />
              <Bot className="h-24 w-24 text-neutral-300 mb-8 relative z-10 group-hover:text-[#F5F5F0] transition-colors duration-500" strokeWidth={1} />
              <div className="text-center relative z-10">
                <div className="text-xs font-bold tracking-widest uppercase text-[#D4AF37] mb-3">Core Infrastructure</div>
                <div className="text-xl font-heading text-[#F8F5F2]">Autonomous Dispatch Sequence</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 5. METRICS */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        className="px-6 py-24 border-y border-white/[0.04] bg-[#050505]"
      >
        <motion.div variants={fadeIn} className="text-center mb-20">
          <h2 className="font-heading text-sm font-bold uppercase tracking-widest text-[#D4AF37]">Guaranteed Efficacy</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-4 text-center">
          {[
            { stat: "340%", label: "Qualified Leads" },
            { stat: "85%", label: "Time Saved" },
            { stat: "4 Min", label: "Response Rate" },
            { stat: "24/7", label: "Uptime" }
          ].map((m, i) => (
            <motion.div key={i} variants={fadeIn} className="flex flex-col gap-4">
              <div className="text-5xl md:text-7xl font-sans font-light tracking-tighter text-[#F8F5F2]">{m.stat}</div>
              <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 6. FEATURED BENTO */}
      <motion.section 
        id="services" 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        className="px-6 py-24 md:py-32"
      >
        <motion.div variants={fadeIn} className="mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight mb-6 text-white">Elite Service Architecture.</h2>
          <p className="text-neutral-400 max-w-xl text-lg leading-relaxed">
            Scalable, discrete automation modules designed exclusively for elite real estate portfolios.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div variants={fadeIn} className="md:col-span-2 relative overflow-hidden rounded-3xl bg-[#0A0A0A] border border-white/[0.04] p-12 flex flex-col justify-end min-h-[460px] group transition-all duration-700 hover:border-[#D4AF37]/30 hover:shadow-[0_0_60px_rgba(212,175,55,0.08)]">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
            <div className="relative z-20">
              <div className="h-14 w-14 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center mb-8 backdrop-blur-md">
                <MessageSquare className="h-6 w-6 text-[#F5F5F0]" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-3xl font-medium tracking-tight mb-4 text-[#F8F5F2]">24/7 WhatsApp AI Concierge</h3>
              <p className="text-neutral-400 max-w-lg text-sm leading-relaxed mb-6">
                An infinitely scalable conversational agent that handles Tier-1 inquiries, answers deep questions about property specs, and gently guides high-net-worth individuals to viewing appointments.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-rows-2 gap-6 w-full">
            {[
              { title: "Vision AI KYC", icon: ShieldCheck, desc: "Verify passports, proof of income, and deposits strictly autonomously." },
              { title: "Unified CRM Data", icon: Activity, desc: "Conversations summarized and piped to Salesforce immediately." }
            ].map((bento, i) => (
              <motion.div key={i} variants={fadeIn} className="relative overflow-hidden rounded-3xl bg-[#0A0A0A] border border-white/[0.04] p-8 flex flex-col justify-center transition-all duration-700 hover:border-[#D4AF37]/20 hover:shadow-[0_0_40px_rgba(212,175,55,0.05)] group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center">
                    <bento.icon className="h-4 w-4 text-[#F5F5F0]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-medium text-[#F8F5F2]">{bento.title}</h3>
                </div>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {bento.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        className="px-6 py-24 md:py-32 bg-[#0A0A0A]/50 border-t border-white/[0.04]"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-medium tracking-tight mb-6 text-white leading-tight">Technical Inquiries.</h2>
            <p className="text-neutral-400 text-lg">Direct answers about our architecture, security, and deployment timelines.</p>
          </motion.div>
          <div className="space-y-4">
            {[
              { q: "Will the AI sound like a generic robot to my high-net-worth clients?", a: "No. We fine-tune the Large Language Models (LLMs) on your top-performing brokers' historical chats. The autonomous agents mimic your precise brand voice, empathy, and negotiation tone." },
              { q: "Do I need to replace my existing CRM (Salesforce, Hubspot, etc.)?", a: "Not at all. PropFlowy operates on a headless asynchronous architecture. Our FastAPI webhooks silently pipe all parsed lead data, extracted budgets, and chat summaries directly into your existing CRM fields in real-time." },
              { q: "How long does it take to deploy the infrastructure?", a: "For the Starter tier, we can deploy the core extraction and webhook routing within 7 days. For custom Enterprise LangGraph swarms with predictive modeling in isolated clouds, rigorous testing takes approximately 3 to 4 weeks." },
              { q: "Is our proprietary property data secure?", a: "Absolutely. We utilize strict Zero-Knowledge architecture and AES-256 encryption. Enterprise deployments are air-gapped on your own private cloud instances (AWS/GCP), meaning we never train global public sub-models on your private data." }
            ].map((faq, i) => (
              <motion.div key={i} variants={fadeIn} className="border border-white/[0.04] bg-[#050505] rounded-3xl overflow-hidden transition-all duration-300 hover:border-[#D4AF37]/20">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
                >
                  <span className={`font-heading text-lg md:text-xl transition-colors pr-8 ${openFaq === i ? 'text-[#D4AF37]' : 'text-[#F8F5F2] group-hover:text-[#D4AF37]'}`}>{faq.q}</span>
                  {openFaq === i ? (
                    <Minus className="h-6 w-6 text-[#D4AF37] shrink-0" />
                  ) : (
                    <Plus className="h-6 w-6 text-neutral-500 group-hover:text-[#D4AF37] transition-colors shrink-0" />
                  )}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === i ? "max-h-96 opacity-100 mb-6" : "max-h-0 opacity-0"}`}
                >
                  <p className="px-6 md:px-8 text-neutral-400 leading-relaxed text-sm md:text-base">
                    {faq.a}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 8. FINAL CTA */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
        className="px-6 py-40 md:py-48 text-center max-w-4xl mx-auto relative border-b border-white/[0.02]"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#D4AF37]/10 blur-[150px] rounded-full pointer-events-none" />
        <h2 className="font-heading text-5xl md:text-7xl font-medium mb-10 leading-[1.05] tracking-tight text-[#F8F5F2] relative z-10">
          Ready for Quiet Efficiency?
        </h2>
        <p className="text-xl text-neutral-400 mb-14 max-w-2xl mx-auto leading-relaxed relative z-10 font-light">
          Stop losing buyers to archaic human delays. Engineer your bespoke real estate workflow and let the automation do the heavy lifting.
        </p>
        <div className="flex justify-center relative z-10 w-full">
          <Link href="/book" className="w-full sm:w-auto">
            <Button size="lg" className="h-16 px-14 text-lg font-medium bg-[#F5F5F0] text-black hover:bg-white transition-all duration-500 shadow-[0_0_50px_rgba(212,175,55,0.2)] hover:shadow-[0_0_80px_rgba(212,175,55,0.3)] hover:scale-[1.03] w-full sm:w-auto">
              Initiate Discovery Call
            </Button>
          </Link>
        </div>
      </motion.section>

    </div>
  );
}
