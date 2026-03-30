import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AIChatbot from "@/components/AIChatbot";
import Navbar from "@/components/Navbar";
import { AnalyticsGuard } from "@/components/AnalyticsGuard";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap", // Best practice for fast loading
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

// AEO + Global SEO Config
export const metadata: Metadata = {
  title: "PropFlowy | Global AI Real Estate & Proptech Automation",
  description: "Stop losing inbound leads. PropFlowy engineers enterprise AI agents for real estate brokers and developers globally—qualifying buyers and booking VR tours 24/7.",
  keywords: ["Proptech API", "AI Real Estate Agency", "Real Estate Automation Setup", "Agentic AI Tools", "Digital Twins Platform", "Property Deal Processing Global"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://propflowy.com",
    siteName: "PropFlowy Real Estate AI",
    images: [{ url: "https://propflowy.com/og-image.jpg" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "PropFlowy | Agentic Real Estate Automation",
    description: "Close deals while you sleep with autonomous broker agents.",
  },
  robots: "index, follow",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  
  // Organization + AEO FAQ Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "PropFlowy Inc.",
        "url": "https://propflowy.com",
        "logo": "https://propflowy.com/favicon.ico",
        "description": "Enterprise-grade AI Solutions tailored for Global Real Estate Portfolios.",
        "sameAs": ["https://www.facebook.com/propflowy/", "https://www.linkedin.com/company/propflowy", "https://www.youtube.com/@propflowy"]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What does PropFlowy automate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "PropFlowy automates lead qualification via WhatsApp, KYC document processing, virtual VR showings, and native CRM syncing directly to Salesforce without human brokers."
            }
          },
          {
            "@type": "Question",
            "name": "Is PropFlowy available globally or just Bangladesh?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our AI infrastructure scales globally catering to developers in the US, Dubai, and Asia natively in multiple languages."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* AEO Schema Injection */}
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} 
        />
        
        {/* Placeholder Meta/FB Pixel for Retargeting */}
        <script dangerouslySetInnerHTML={{ __html: `
          // !function(f,b,e,v,n,t,s) { ... fbq('init', '1234567890'); fbq('track', 'PageView'); 
        `}} />
      </head>
      
      <body className={`${inter.variable} ${jakarta.variable} font-sans antialiased bg-[#050505] text-neutral-200 min-h-screen flex flex-col selection:bg-[#D4AF37]/30`}>
        
        <ExitIntentPopup />
        <FloatingWhatsApp />
        <AIChatbot />
        
        {/* Base Grid Background */}
        <div 
          className="fixed inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"
          style={{ maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 110%)", WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 110%)" }}
        />

        <Navbar />
        <AnalyticsGuard />

        <main className="flex-1 w-full pt-20 mx-auto">
          {children}
        </main>

        <footer className="border-t border-white/[0.04] bg-[#0A0A0A] mt-auto">
          <div className="container mx-auto px-6 py-16 md:py-24 text-center max-w-7xl">
            <Link href="/" className="flex items-center justify-center gap-3 mb-8 group">
              <div className="h-8 w-8 bg-[#D4AF37] rounded-md flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-transform group-hover:scale-110">
                <span className="text-black font-bold text-sm">P</span>
              </div>
              <span className="font-heading font-semibold text-lg text-[#F8F5F2] tracking-tight">PropFlowy</span>
            </Link>
            <p className="text-neutral-400 max-w-md mx-auto text-sm mb-12 leading-relaxed">
              We engineer bespoke AI architectures for aggressive global real estate growth. Sell more properties, qualify leads instantly, and let the algorithm do the heavy lifting.
            </p>

            {/* Footer Navigation Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-2xl mx-auto border-y border-white/[0.04] py-12">
              <div className="flex flex-col gap-4 text-left">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Solutions</h4>
                <Link href="/services" className="text-xs text-neutral-400 hover:text-[#D4AF37] transition-colors">AI Services</Link>
                <Link href="/proptech" className="text-xs text-neutral-400 hover:text-[#D4AF37] transition-colors">Proptech</Link>
                <Link href="/work" className="text-xs text-neutral-400 hover:text-[#D4AF37] transition-colors">Client Results</Link>
              </div>
              <div className="flex flex-col gap-4 text-left">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Company</h4>
                <Link href="/blog" className="text-xs text-neutral-400 hover:text-[#D4AF37] transition-colors">Insights (Blog)</Link>
                <Link href="/pricing" className="text-xs text-neutral-400 hover:text-[#D4AF37] transition-colors">Pricing</Link>
                <Link href="/book" className="text-xs text-neutral-400 hover:text-[#D4AF37] transition-colors">Book Audit</Link>
              </div>
              <div className="flex flex-col gap-4 text-left">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Legal</h4>
                <Link href="/privacy" className="text-xs text-neutral-400 hover:text-[#D4AF37] transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="text-xs text-neutral-400 hover:text-[#D4AF37] transition-colors">Terms of Service</Link>
              </div>
              <div className="flex flex-col gap-4 text-left">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Connect</h4>
                <a href="mailto:info@propflowy.com" className="text-xs text-neutral-400 hover:text-[#D4AF37] transition-colors">Email Support</a>
                <a href="https://wa.me/8801849478972" className="text-xs text-neutral-400 hover:text-[#D4AF37] transition-colors">WhatsApp</a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <a
                href="https://www.facebook.com/propflowy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="PropFlowy on Facebook"
                className="group flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-[#1877F2]/10 hover:border-[#1877F2]/30 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-neutral-500 group-hover:text-[#1877F2] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="https://www.linkedin.com/company/propflowy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="PropFlowy on LinkedIn"
                className="group flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/30 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-neutral-500 group-hover:text-[#0A66C2] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a
                href="https://www.youtube.com/@propflowy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="PropFlowy on YouTube"
                className="group flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-[#FF0000]/10 hover:border-[#FF0000]/30 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-neutral-500 group-hover:text-[#FF0000] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
              </a>
            </div>

            {/* Location + Contact */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-8 text-xs text-neutral-500 font-semibold">
              <span>📍 Natore, Rajshahi, Bangladesh</span>
              <span>📧 info@propflowy.com</span>
              <span>📱 +880 1849-478972</span>
            </div>

            <div className="text-[10px] font-bold tracking-widest uppercase text-neutral-600">
              © 2026 PropFlowy Integration LLC. All rights reserved globally.
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
