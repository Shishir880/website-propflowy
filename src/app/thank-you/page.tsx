import { Calendar, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ThankYouPage() {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
      
      <div className="h-24 w-24 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-10 mx-auto animate-in zoom-in slide-in-from-bottom-4 duration-700">
        <CheckCircle2 className="h-12 w-12 text-green-500" />
      </div>

      <h1 className="text-5xl md:text-6xl font-heading font-bold tracking-tighter text-white mb-6">
        Audit Request Received.
      </h1>
      
      <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-12">
        Our architecture team is compiling your customized Proptech AI Blueprint. To expedite delivery, select a 15-minute onboarding slot below with a Lead Engineer.
      </p>

      {/* Fake Calendly Embed Container */}
      <div className="w-full bg-white/[0.02] border border-white/[0.06] rounded-3xl p-10 flex flex-col items-center justify-center min-h-[400px] mb-12 shadow-[0_0_50px_rgba(255,255,255,0.03)]">
        <Calendar className="h-12 w-12 text-white/30 mb-6" />
        <h3 className="text-2xl font-bold text-white mb-2">Schedule Your Strategy Call</h3>
        <p className="text-neutral-500 mb-8">Loading booking availability calendar...</p>
        
        {/* Placeholder for actual Calendly/TidyCal iframe */}
        <div className="w-full max-w-md h-[200px] border border-dashed border-white/20 rounded-xl flex items-center justify-center text-sm text-neutral-600 bg-white/[0.01]">
           [Calendly Embed Component Goes Here]
        </div>
      </div>

      <Link href="/">
        <Button variant="ghost" className="text-neutral-500 hover:text-white">
          ← Return to Homepage
        </Button>
      </Link>
    </div>
  );
}
