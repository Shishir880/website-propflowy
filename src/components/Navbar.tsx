"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "BN">("EN");

  const toggleLanguage = () => {
    setLang(lang === "EN" ? "BN" : "EN");
    // In production: write to cookies or push to next-intl router
  };

  return (
    <header className="fixed top-0 z-[60] w-full border-b border-white/[0.08] bg-black/60 backdrop-blur-md transition-all duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-7xl">
        
        <Link href="/" className="flex items-center gap-3 relative z-10" onClick={() => setIsOpen(false)}>
          <div className="h-8 w-8 bg-[#D4AF37] rounded-md flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)]">
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
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#050505] z-0 transition-transform duration-500 ease-in-out flex flex-col pt-24 px-6 md:hidden ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
        <nav className="flex flex-col gap-6 text-xl font-heading font-medium text-neutral-300 mb-10">
          <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-white border-b border-white/5 pb-4">Services</Link>
          <Link href="/proptech" onClick={() => setIsOpen(false)} className="hover:text-[#D4AF37] text-white border-b border-white/5 pb-4">Proptech Solutions</Link>
          <Link href="/work" onClick={() => setIsOpen(false)} className="hover:text-white border-b border-white/5 pb-4">Client Results</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:text-white border-b border-white/5 pb-4">Blog</Link>
          <Link href="/pricing" onClick={() => setIsOpen(false)} className="hover:text-white border-b border-white/5 pb-4">Pricing</Link>
        </nav>
        
        <div className="flex flex-col gap-4 mt-auto mb-10">
          <button 
            onClick={toggleLanguage} 
            className="flex items-center justify-center gap-2 text-sm font-bold text-white transition-colors uppercase tracking-widest bg-white/5 border border-white/10 w-full h-12 rounded-xl"
          >
            <Globe className="h-4 w-4 text-[#D4AF37]" /> Switch Language ({lang === "EN" ? "English" : "বাংলা"})
          </button>
          <Link href="/book" onClick={() => setIsOpen(false)} className="w-full">
            <Button size="lg" className="w-full bg-[#F5F5F0] text-black font-bold h-14 text-lg">
               {lang === "EN" ? "Book Free AI Audit" : "ফ্রি এআই অডিট বুকিং"}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
