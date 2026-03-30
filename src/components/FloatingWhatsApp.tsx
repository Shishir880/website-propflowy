"use client";

import { MessageCircle, Phone } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-4">
      
      {/* Phone Call Link */}
      <a 
        href="tel:+8801849478972" 
        className="relative group cursor-pointer flex items-center justify-center"
        aria-label="Direct Phone Call"
      >
        <div className="relative h-14 w-14 bg-black/60 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/10">
          <Phone className="h-6 w-6 text-white" />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-[120%] w-max px-4 py-2 bg-neutral-900 border border-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-lg opacity-0 -translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-xl">
          Call Directly
        </div>
      </a>

      {/* WhatsApp Link */}
      <a 
        href="https://wa.me/8801849478972" 
        target="_blank" 
        rel="noreferrer"
        className="relative group cursor-pointer flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25 group-hover:opacity-50 transition-opacity" />
        <div className="relative h-14 w-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
          <MessageCircle className="h-6 w-6 text-white" />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-[120%] w-max px-4 py-2 bg-neutral-900 border border-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-lg opacity-0 -translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-xl">
          WhatsApp Fast Track
        </div>
      </a>
      
    </div>
  );
}
