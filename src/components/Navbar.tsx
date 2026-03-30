"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "BN">("EN");

  const toggleLanguage = () => {
    setLang(lang === "EN" ? "BN" : "EN");
  };

  return (
    <>
      <header className="fixed top-0 z-[1000] w-full border-b border-white/[0.08] bg-black/60 backdrop-blur-md transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-7xl">
          
          <Link href="/" className="flex items-center gap-3 relative z-10" onClick={() => setIsOpen(false)}>
            <div className="h-8 w-8 bg-[#D4AF37] rounded-md flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-transform hover:scale-110">
              <span className="text-black font-bold text-sm">P</span>
            </div>
            <span className="font-heading font-semibold text-lg tracking-tight text-[#F8F5F2]">PropFlowy</span>
          </Link>
          
          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <Link href="/proptech" className="hover:text-[#D4AF37] transition-colors font-bold text-white relative group">
              Proptech Solutions
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all group-hover:w-full" />
            </Link>
            <Link href="/work" className="hover:text-white transition-colors">Client Results</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={toggleLanguage} 
              className="flex items-center gap-2 text-xs font-bold text-neutral-400 hover:text-white transition-colors uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1.5 rounded-full hover:bg-white/10"
            >
              <Globe className="h-3.5 w-3.5 text-[#D4AF37]" /> {lang}
            </button>
            
            <Link href="/book">
              <Button size="sm" className="bg-[#F5F5F0] text-black hover:bg-white font-semibold h-9 px-6 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                 {lang === "EN" ? "Book AI Audit" : "ফ্রি এআই অডিট"}
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            className="md:hidden relative z-10 p-2 text-neutral-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </header>

      {/* Premium Sidebar Drawer (Right Side) */}
      <div 
        className={`fixed inset-0 z-[10000] transition-opacity duration-500 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
      >
        {/* Backdrop Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
          onClick={() => setIsOpen(false)}
        />

        {/* The Drawer Panel */}
        <div 
          className={`absolute inset-y-0 right-0 w-[85%] max-w-sm bg-[#050505] border-l border-white/10 shadow-2xl transition-transform duration-500 flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Drawer Header */}
          <div className="p-8 flex items-center justify-between border-b border-white/5">
             <div className="flex items-center gap-2">
                <div className="h-6 w-6 bg-[#D4AF37] rounded flex items-center justify-center">
                   <span className="text-black font-bold text-xs">P</span>
                </div>
                <span className="font-heading font-medium text-white tracking-tight">Navigation</span>
             </div>
             <button 
               onClick={() => setIsOpen(false)}
               className="p-2 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-white transition-all hover:rotate-90"
             >
                <X className="h-6 w-6" />
             </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-8 flex flex-col gap-6 overflow-y-auto flex-1">
             <Link 
               href="/services" 
               onClick={() => setIsOpen(false)}
               className="group flex items-center justify-between text-2xl font-heading font-medium text-white hover:text-[#D4AF37] transition-colors"
             >
                Services <ArrowRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
             </Link>
             <Link 
               href="/proptech" 
               onClick={() => setIsOpen(false)}
               className="group flex items-center justify-between text-2xl font-heading font-medium text-white hover:text-[#D4AF37] transition-colors"
             >
                Proptech <ArrowRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
             </Link>
             <Link 
               href="/work" 
               onClick={() => setIsOpen(false)}
               className="group flex items-center justify-between text-2xl font-heading font-medium text-white hover:text-[#D4AF37] transition-colors"
             >
                Results <ArrowRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
             </Link>
             <Link 
               href="/blog" 
               onClick={() => setIsOpen(false)}
               className="group flex items-center justify-between text-2xl font-heading font-medium text-white hover:text-[#D4AF37] transition-colors"
             >
                Insights <ArrowRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
             </Link>
             <Link 
               href="/pricing" 
               onClick={() => setIsOpen(false)}
               className="group flex items-center justify-between text-2xl font-heading font-medium text-white hover:text-[#D4AF37] transition-colors"
             >
                Pricing <ArrowRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
             </Link>
          </nav>

          {/* Footer Actions */}
          <div className="p-8 border-t border-white/5 bg-white/[0.02] flex flex-col gap-4">
             <button 
               onClick={toggleLanguage} 
               className="flex items-center justify-center gap-3 text-xs font-bold text-white transition-colors uppercase tracking-widest bg-white/5 border border-white/10 w-full h-12 rounded-xl"
             >
                <Globe className="h-4 w-4 text-[#D4AF37]" /> {lang === "EN" ? "English" : "বাংলা"}
             </button>
             <Link href="/book" onClick={() => setIsOpen(false)} className="w-full">
                <Button size="lg" className="w-full bg-[#F5F5F0] text-black font-bold h-14 text-base">
                   {lang === "EN" ? "Book Free AI Audit" : "ফ্রি এআই অডিট বুকিং"}
                </Button>
             </Link>
             <div className="text-center mt-2">
                <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">PropFlowy Enterprise v2.1</p>
             </div>
          </div>
        </div>
      </div>
    </>
  );
}
