"use client";

import { useState, useEffect } from "react";
import { X, ShieldAlert } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // If mouse leaves from the top of the window and it hasn't popped up yet
      if (e.clientY <= 0 && !hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true);
        // Optional: sessionStorage.setItem("exitIntentShown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasTriggered]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={() => setIsVisible(false)}
      />
      
      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl bg-neutral-950 border border-white/10 shadow-[0_0_80px_rgba(255,255,255,0.1)] p-8 md:p-12 animate-in zoom-in-95 fade-in duration-300">
        
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-6 right-6 text-neutral-500 hover:text-white transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
             <ShieldAlert className="h-8 w-8 text-[#D4AF37]" />
          </div>
        </div>

        <h2 className="text-3xl font-heading font-bold text-center text-white mb-4 tracking-tight">
          Wait! Before you leave...
        </h2>
        
        <p className="text-center text-neutral-400 mb-8 leading-relaxed">
          You are losing hundreds of thousands of dollars to manual data entry. Claim your <strong>100% Free AI Automation Audit</strong> right now before you exit.
        </p>

        <div className="flex flex-col gap-4">
          <Link href="/book" onClick={() => setIsVisible(false)}>
            <Button size="lg" className="w-full h-14 bg-[#F5F5F0] text-black font-semibold text-lg hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.15)]">
              Claim Free Audit Now
            </Button>
          </Link>
          <Button 
            variant="ghost" 
            onClick={() => setIsVisible(false)}
            className="w-full text-neutral-500 hover:text-neutral-300"
          >
            No thanks, I like losing leads
          </Button>
        </div>
      </div>
    </div>
  );
}
