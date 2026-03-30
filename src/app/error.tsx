"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error securely without exposing stack traces to the user UI
    console.error("PropFlowy Zero-Trust Guard Caught Exception:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 text-center font-sans tracking-tight">
      <div className="h-24 w-24 rounded-full bg-red-500/10 flex items-center justify-center mb-8 border border-red-500/20 shadow-[0_0_50px_rgba(239,68,68,0.15)] relative animate-pulse">
        <div className="absolute inset-0 rounded-full border border-red-500/40 animate-ping opacity-20"></div>
        <ShieldAlert className="h-10 w-10 text-red-500" />
      </div>
      
      <h2 className="text-4xl font-heading text-[#F8F5F2] mb-6 font-medium">System Anomaly Intercepted.</h2>
      
      <p className="text-neutral-400 mb-10 max-w-lg leading-relaxed text-lg">
        Our zero-trust architecture has paused the session rendering due to an unexpected memory state. Your data is perfectly secure. 
      </p>
      
      <Button 
        onClick={() => reset()}
        className="h-14 px-10 text-base bg-[#D4AF37] text-black hover:bg-white font-bold transition-all shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:scale-[1.03]"
      >
        Reboot Secure Session
      </Button>

      <p className="mt-12 text-xs font-mono text-neutral-600 uppercase tracking-widest">
        PropFlowy Architecture v1.5.0
      </p>
    </div>
  );
}
