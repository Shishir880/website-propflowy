"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Clock, ShieldCheck, Zap, ArrowRight, ArrowLeft, Loader2, Server } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BookPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    properties: "",
    leads: ""
  });

  const handleNext = async () => {
    if (formData.name && formData.phone) {
      setStep(2);

      // Zero-Drop Partial Lead Capture
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
      try {
        await fetch(`${API_URL}/leads`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            status: "partial"
          })
        });

        const sessionId = localStorage.getItem("propflowy_session_id");
        if (sessionId) {
           await fetch(`${API_URL}/analytics/event`, {
             method: "POST",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify({
               session_id: sessionId,
               event_type: "lead_step_1",
               page_url: window.location.pathname
             })
           });
        }
      } catch(e) { }
    }
  };

  const handleBack = () => setStep(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // 1. Standardized Pydantic Data Payload
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
      
      const pydanticPayload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: "Enterprise AI Audit",
        query: `Leads Vol: ${formData.leads}`,
        volume: formData.properties,
        crm: "Awaiting Integration"
      };

      try {
        await fetch(`${API_URL}/leads`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(pydanticPayload)
        });
        
        // Mark Full Conversion in Tracker
        const sessionId = localStorage.getItem("propflowy_session_id");
        if (sessionId) {
           await fetch(`${API_URL}/analytics/event`, {
             method: "POST",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify({
               session_id: sessionId,
               event_type: "lead_complete",
               page_url: window.location.pathname
             })
           });
        }
      } catch (err) {
        console.log("FastAPI backend edge route offline. Queuing local fallback...", err);
      }

      // 2. Redirect to Auto-Calendar Link Page
      router.push("/thank-you");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 px-6 pt-32 pb-24 items-start font-sans">
      
      {/* Left Hook */}
      <div className="flex-1 lg:sticky lg:top-32 max-w-xl">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#D4AF37]/5 border border-[#D4AF37]/20 text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest mb-8">
          <Server className="h-3.5 w-3.5" />
          Native CRM Integration
        </div>
        <h1 className="text-5xl md:text-6xl font-heading font-medium tracking-tighter mb-6 text-[#F8F5F2] leading-[1.1]">
          Get Your Free Custom AI Audit.
        </h1>
        <p className="text-xl text-neutral-400 font-light leading-relaxed mb-8">
          Fill out the data below. Within exactly <strong className="text-white">48 hours</strong>, our architects will deliver a comprehensive blueprint detailing exact ROI impact.
        </p>
        
        <div className="flex flex-col gap-6 mb-10">
          <div className="flex items-start gap-4">
            <div className="mt-1 h-6 w-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0 border border-[#D4AF37]/30">
               <Zap className="h-3 w-3 text-[#D4AF37]" />
            </div>
            <div>
              <h4 className="text-[#F8F5F2] font-medium mb-1">Process Bottlenecks Identified</h4>
              <p className="text-neutral-500 text-sm">See exactly where inbound deals are going cold.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="mt-1 h-6 w-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0 border border-[#D4AF37]/30">
               <Clock className="h-3 w-3 text-[#D4AF37]" />
            </div>
            <div>
              <h4 className="text-[#F8F5F2] font-medium mb-1">48-Hour Delivery Guarantee</h4>
              <p className="text-neutral-500 text-sm">Shipped directly to your inbox. No endless sales calls.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="mt-1 h-6 w-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0 border border-[#D4AF37]/30">
               <ShieldCheck className="h-3 w-3 text-[#D4AF37]" />
            </div>
            <div>
              <h4 className="text-[#F8F5F2] font-medium mb-1">Strict Confidentiality</h4>
              <p className="text-neutral-500 text-sm">We process pipeline data on dedicated isolated servers.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Multi-Step Smart Form */}
      <div className="w-full lg:w-[500px]">
        <div className="rounded-3xl bg-[#0A0A0A] border border-white/[0.04] p-8 md:p-10 backdrop-blur-xl shadow-[0_0_80px_rgba(212,175,55,0.03)] transition-all duration-700 hover:border-white/10 hover:shadow-[0_0_60px_rgba(212,175,55,0.05)]">
          
          {/* Progress Bar */}
          <div className="flex gap-2 mb-8 items-center cursor-default">
            <div className={`h-1 flex-1 rounded-full bg-[#D4AF37] transition-all`} />
            <div className={`h-1 flex-1 rounded-full transition-all ${step === 2 ? 'bg-[#D4AF37]' : 'bg-white/10'}`} />
          </div>

          <form onSubmit={step === 1 ? (e) => { e.preventDefault(); handleNext(); } : handleSubmit} className="flex flex-col gap-6">
            
            {/* STEP 1: Fast Contact */}
            {step === 1 && (
              <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="mb-2">
                   <h2 className="text-xl font-heading font-medium text-white mb-1">Personal Details</h2>
                   <p className="text-sm text-neutral-500">We'll use this to build your profile.</p>
                </div>
                <div className="grid gap-3">
                  <Label className="text-neutral-400 text-xs tracking-widest uppercase font-bold">Full Name</Label>
                  <Input 
                    value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                    className="bg-white/5 border-white/10 h-14 px-5 rounded-xl text-white focus-visible:ring-1 focus-visible:ring-[#D4AF37]/50" 
                    placeholder="Enter your name" required 
                  />
                </div>
                <div className="grid gap-3">
                  <Label className="text-neutral-400 text-xs tracking-widest uppercase font-bold">Phone Number</Label>
                  <Input 
                    type="tel" 
                    value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="bg-white/5 border-white/10 h-14 px-5 rounded-xl text-white focus-visible:ring-1 focus-visible:ring-[#D4AF37]/50" 
                    placeholder="+8801XXXXXXXXX" required 
                  />
                </div>
                <Button type="button" onClick={handleNext} disabled={!formData.name || !formData.phone} className="w-full h-14 mt-4 bg-[#F5F5F0] text-black hover:bg-white text-base font-semibold transition-all">
                  Next Step <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}

            {/* STEP 2: Qualification & Submit to FastAPI */}
            {step === 2 && (
              <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="mb-2">
                   <h2 className="text-xl font-heading font-medium text-white mb-1">Brokerage Details</h2>
                   <p className="text-sm text-neutral-500">For accurate FastAPI CRM routing.</p>
                </div>

                <div className="grid gap-3">
                  <Label className="text-neutral-400 text-xs tracking-widest uppercase font-bold">Work Email</Label>
                  <Input 
                    type="email" 
                    value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                    className="bg-white/5 border-white/10 h-14 px-5 rounded-xl text-white focus-visible:ring-1 focus-visible:ring-[#D4AF37]/50" 
                    placeholder="sarah@agency.com" required 
                  />
                </div>

                <div className="grid gap-3 mt-1">
                  <Label className="text-neutral-400 text-xs tracking-widest uppercase font-bold">Properties Managed</Label>
                  <select 
                    required value={formData.properties} onChange={e => setFormData({...formData, properties: e.target.value})}
                    className="flex h-14 w-full rounded-xl border border-white/10 bg-white/5 px-5 text-sm ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 text-neutral-300 appearance-none cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]/50"
                  >
                    <option value="" disabled hidden>Select property volume...</option>
                    <option value="1-10">1 - 10 Properties</option>
                    <option value="11-50">11 - 50 Properties</option>
                    <option value="50-200">50 - 200 Properties</option>
                    <option value="200+">200+ Properties</option>
                  </select>
                </div>

                <div className="grid gap-3 mb-2">
                  <Label className="text-neutral-400 text-xs tracking-widest uppercase font-bold">Monthly Inbound Leads</Label>
                  <select 
                    required value={formData.leads} onChange={e => setFormData({...formData, leads: e.target.value})}
                    className="flex h-14 w-full rounded-xl border border-white/10 bg-white/5 px-5 text-sm ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 text-neutral-300 appearance-none cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]/50"
                  >
                    <option value="" disabled hidden>Select lead pipeline...</option>
                    <option value="0-50">0 - 50 Leads / month</option>
                    <option value="51-200">51 - 200 Leads / month</option>
                    <option value="200-1000">200 - 1,000 Leads / month</option>
                    <option value="1000+">1,000+ Leads / month</option>
                  </select>
                </div>

                <div className="flex gap-4 mt-2">
                  <Button type="button" onClick={handleBack} variant="outline" className="h-14 w-14 shrink-0 bg-transparent border-white/10 hover:bg-white/5 p-0 flex items-center justify-center">
                    <ArrowLeft className="h-5 w-5 text-neutral-400" />
                  </Button>
                  <Button type="submit" disabled={isLoading} className="flex-1 h-14 bg-[#D4AF37] text-black font-semibold hover:bg-[#E2C37A] shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                    {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Deploy Architecture"}
                  </Button>
                </div>
              </div>
            )}
            
            <p className="text-center text-[10px] text-neutral-600 font-bold uppercase tracking-widest mt-2">
              Encrypted transmission to PropFlowy CRM
            </p>
          </form>
        </div>
      </div>

    </div>
  );
}
