import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 pt-32 pb-24 text-neutral-400 font-sans leading-relaxed">
      <Link href="/" className="inline-flex items-center text-[#D4AF37] hover:text-white mb-12 text-xs font-bold uppercase tracking-widest transition-colors">
        <ArrowLeft className="h-3 w-3 mr-2" /> Back to Safety
      </Link>
      
      <div className="flex items-center gap-3 mb-8">
        <ShieldCheck className="h-8 w-8 text-[#D4AF37]" />
        <h1 className="text-4xl font-heading font-medium text-white tracking-tight">Privacy Policy</h1>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-heading text-[#F8F5F2] mb-4">1. Data Architecture</h2>
          <p>
            PropFlowy engineers elite AI solutions with a "Privacy by Design" philosophy. We do not store unencrypted PII (Personally Identifiable Information) on public clouds. 
            All lead data captured via our AI agents is transmitted via TLS 1.3 encryption directly to your authorized CRM endpoints.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-heading text-[#F8F5F2] mb-4">2. AI Training Transparency</h2>
          <p>
            We utilize "Isolated Cloud Reasoning." Your proprietary property data and broker conversation history are never used to train global public models like GPT-4 or Claude 3.5. 
            The weights of your custom AI agents belong exclusively to your organization.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-heading text-[#F8F5F2] mb-4">3. Lead Retention</h2>
          <p>
            Partial leads are stored for a maximum of 30 days on our staging cache before automated purging, unless synchronized to a permanent CRM. 
            You retain the absolute right to request a full "Digital Wipe" of any data associated with your account at any time.
          </p>
        </section>

        <section className="pt-8 border-t border-white/5">
          <p className="text-xs text-neutral-600 italic">
            Last Updated: March 2026. For specific legal inquiries, contact legal@propflowy.com
          </p>
        </section>
      </div>
    </div>
  );
}
