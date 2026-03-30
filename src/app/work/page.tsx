"use client";

import { Activity, Cpu, ArrowRight, BarChart3, Database, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function WorkPage() {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col font-sans px-6 pt-32 pb-24 overflow-hidden text-neutral-200">
      
      {/* 1. HERO SECTION (Startup Benchmark Pivot) */}
      <div className="text-center max-w-4xl mx-auto mb-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-5xl md:text-7xl font-heading font-medium tracking-tighter mb-8 text-[#F8F5F2] leading-[1.05]">
          Performance & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#E2C37A] to-[#F5F5F0]">Architecture Benchmarks.</span>
        </h1>
        <p className="text-xl text-neutral-400 font-light max-w-3xl mx-auto leading-relaxed">
          We don't rely on subjective testimonials. We rely on deterministic mathematical edges. 
          Here is how the PropFlowy Engine consistently outperforms traditional human brokerages.
        </p>
      </div>

      {/* 2. THE LIVE EVENT TERMINAL (Trust Builder) */}
      <div className="max-w-5xl mx-auto w-full bg-[#050505] border border-white/[0.04] rounded-2xl p-6 md:p-10 mb-32 shadow-[0_0_80px_rgba(212,175,55,0.03)] relative group animate-in zoom-in-95 duration-1000">
         <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity duration-1000 pointer-events-none">
            <Cpu className="h-40 w-40 text-[#D4AF37]" strokeWidth={0.5} />
         </div>
         
         <div className="flex items-center gap-2 mb-8 border-b border-white/[0.04] pb-4">
            <div className="h-3 w-3 rounded-full bg-red-500/40"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500/40"></div>
            <div className="h-3 w-3 rounded-full bg-green-500/40"></div>
            <span className="ml-4 text-neutral-500 text-xs font-mono uppercase tracking-widest flex items-center gap-2">
              <Activity className="h-3 w-3 animate-pulse text-[#D4AF37]" /> Live Execution Protocol
            </span>
         </div>
         
         <div className="space-y-4 text-sm md:text-base font-mono text-neutral-400">
            <p className="opacity-80"><span className="text-[#D4AF37] font-bold">[INFO]</span> 14:02:01.341 — Incoming WhatsApp lead detected via API Graph (+971 50 *** ****).</p>
            <p className="opacity-90 pl-4 border-l border-white/10"><span className="text-white font-bold">[EXEC]</span> Routing context to LangChain NLP classifier module...</p>
            <p><span className="text-green-400 font-bold">[SUCCESS]</span> Intent parsed securely. Entity: High-Net-Worth. Budget &gt; $2.5M.</p>
            <p className="opacity-90 pl-4 border-l border-white/10"><span className="text-[#D4AF37] font-bold">[INFO]</span> Executing CRM Webhook via generic FastAPI endpoint ➝ Lead synchronized.</p>
            <p className="opacity-80"><span className="text-white font-bold">[EXEC]</span> Autonomous Agent querying digital twin database for Palm Jumeirah Villas...</p>
            <p className="opacity-90 pl-4 border-l border-white/10"><span className="text-green-400 font-bold">[SUCCESS]</span> Property match found (Scoring: 98.4%). Brochure dispatched directly to WhatsApp.</p>
            <p className="animate-pulse text-[#D4AF37] pt-2">_ Waiting for client calendar handshake protocol...</p>
         </div>
      </div>

      {/* 3. INDUSTRY VS PROPFLOWY BENCHMARKS */}
      <div className="max-w-5xl mx-auto mb-32">
        <h3 className="text-3xl font-heading font-medium text-center text-white mb-12">The SLA Mathematical Advantage</h3>
        <div className="grid md:grid-cols-2 gap-8">
           
           {/* Legacy Side */}
           <div className="bg-[#0A0A0A] p-10 rounded-3xl border border-white/[0.02] opacity-60">
             <h4 className="text-lg font-bold text-neutral-400 uppercase tracking-widest mb-8 border-b border-white/5 pb-4">Legacy Agencies</h4>
             <ul className="space-y-6">
                <li className="flex justify-between items-center"><span className="text-neutral-500 text-sm">Avg Lead Reply Time</span><span className="text-white font-mono">4 Hours</span></li>
                <li className="flex justify-between items-center"><span className="text-neutral-500 text-sm">After-Hours Support</span><span className="text-red-400 font-mono">0% (Offline)</span></li>
                <li className="flex justify-between items-center"><span className="text-neutral-500 text-sm">CRM Data Accuracy</span><span className="text-white font-mono">~40%</span></li>
                <li className="flex justify-between items-center"><span className="text-neutral-500 text-sm">Language Support</span><span className="text-white font-mono">1 or 2 Native</span></li>
             </ul>
           </div>

           {/* PropFlowy Side */}
           <div className="bg-[#050505] p-10 rounded-3xl border border-[#D4AF37]/30 shadow-[0_0_60px_rgba(212,175,55,0.05)] relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.1)_0,transparent_60%)]" />
             <h4 className="text-lg font-bold text-[#D4AF37] uppercase tracking-widest mb-8 border-b border-[#D4AF37]/20 pb-4 relative z-10">The PropFlowy Engine</h4>
             <ul className="space-y-6 relative z-10">
                <li className="flex justify-between items-center"><span className="text-neutral-300 text-sm">Avg Lead Reply Time</span><span className="text-green-400 font-mono font-bold">&lt; 1 Second</span></li>
                <li className="flex justify-between items-center"><span className="text-neutral-300 text-sm">After-Hours Support</span><span className="text-green-400 font-mono font-bold">100% (24/7/365)</span></li>
                <li className="flex justify-between items-center"><span className="text-neutral-300 text-sm">CRM Data Accuracy</span><span className="text-green-400 font-mono font-bold">99.9%</span></li>
                <li className="flex justify-between items-center"><span className="text-neutral-300 text-sm">Language Support</span><span className="text-green-400 font-mono font-bold">90+ Languages</span></li>
             </ul>
           </div>

        </div>
      </div>

      {/* 4. CALL TO ACTION FOR EARLY ADOPTERS */}
      <div className="max-w-4xl mx-auto text-center border-t border-white/[0.04] pt-24">
        <div className="h-16 w-16 mx-auto bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-6">
          <ShieldCheck className="h-8 w-8 text-[#D4AF37]" />
        </div>
        <h2 className="text-4xl font-heading font-medium text-white mb-6">Test the Architecture Live</h2>
        <p className="text-neutral-400 mb-10 max-w-2xl mx-auto text-lg">
          Book an audit today to see a live demonstration of our autonomous swarms qualifying real estate leads in real-time. We configure the proof-of-concept before you pay a dime.
        </p>
        <Link href="/book">
          <Button size="lg" className="h-14 px-10 bg-[#F5F5F0] text-black hover:bg-white font-bold transition-all shadow-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]">
            Schedule Architecture Demo <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>

    </div>
  );
}
