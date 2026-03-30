import Link from "next/link";
import { ArrowLeft, Scale } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 pt-32 pb-24 text-neutral-400 font-sans leading-relaxed">
      <Link href="/" className="inline-flex items-center text-[#D4AF37] hover:text-white mb-12 text-xs font-bold uppercase tracking-widest transition-colors">
        <ArrowLeft className="h-3 w-3 mr-2" /> Back to Home
      </Link>
      
      <div className="flex items-center gap-3 mb-8">
        <Scale className="h-8 w-8 text-[#D4AF37]" />
        <h1 className="text-4xl font-heading font-medium text-white tracking-tight">Terms of Service</h1>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-heading text-[#F8F5F2] mb-4">1. Service Definition</h2>
          <p>
            PropFlowy provides custom AI infrastructure, including but not limited to, autonomous lead agents, CRM integrations, and data parsing APIs. 
            We do not act as a licensed real estate broker or financial advisor. Our systems are tools designed to enhance human efficiency.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-heading text-[#F8F5F2] mb-4">2. Liability & AI Hallucinations</h2>
          <p>
            While we implement advanced 'Deterministic Guardrails', Large Language Models can occasionally provide incorrect information (hallucinations). 
            PropFlowy is not liable for incorrect pricing or property specs provided by the AI. Final verification of all property details remains the responsibility of the human broker.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-heading text-[#F8F5F2] mb-4">3. Subscription & Cancelation</h2>
          <p>
            All plans are billed monthly. PropFlowy provides a 7-day risk-free trial. If the client is not satisfied with the architecture's performance within 7 days, 
            they may terminate without cost. Post-trial, a 30-day notice period is required for cancellation.
          </p>
        </section>

        <section className="pt-8 border-t border-white/5">
          <p className="text-xs text-neutral-600 italic">
            PropFlowy Integration LLC © 2026. Governing Law: State of New York / International Arbitrarion.
          </p>
        </section>
      </div>
    </div>
  );
}
