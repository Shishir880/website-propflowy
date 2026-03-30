"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, Bot, Sparkles, Terminal } from "lucide-react";

export default function AIChatbot() {
  const API_URL = `${process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000"}/chat`;
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', content: string}[]>([
    { role: 'bot', content: 'PropFlowy Intelligence initialized. How can I assist with your brokerage operations today?' }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const threadId = localStorage.getItem("propflowy_session_id") || "anonymous_thread";
      
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage, thread_id: threadId })
      });
      
      if (!response.ok) throw new Error("API Route unreachable");
      if (!response.body) throw new Error("No response body");

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let botReply = "";

      setMessages(prev => [...prev, { role: 'bot', content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        botReply += decoder.decode(value, { stream: true });
        
        setMessages(prev => {
          const newMsgs = [...prev];
          newMsgs[newMsgs.length - 1] = { role: 'bot', content: botReply };
          return newMsgs;
        });
      }
    } catch (error) {
      console.error("Chat API Error:", error);
      setMessages(prev => [...prev, { role: 'bot', content: "Connection error. Please verify the API URL parameters." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-transform duration-500 hover:scale-110 group border border-white/10"
        aria-label="Toggle AI Chat"
      >
        {isOpen ? <X className="h-6 w-6 text-black" /> : <Sparkles className="h-6 w-6 text-black fill-black" />}
      </button>

      {isOpen && (
        <div className="fixed bottom-28 right-6 z-50 w-[380px] h-[600px] max-h-[80vh] flex flex-col bg-[#050505] border border-white/[0.08] rounded-2xl shadow-[0_0_80px_rgba(255,255,255,0.05)] overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="p-5 border-b border-white/[0.06] flex items-center gap-4 shrink-0 bg-white/[0.01] backdrop-blur-xl">
            <div className="h-10 w-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
              <Terminal className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-white tracking-tight">PropFlowy AI</h3>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                </span>
                <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold">Systems Online</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-6 scrollbar-none">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                {msg.role === 'bot' && (
                  <div className="h-8 w-8 shrink-0 rounded-lg flex items-center justify-center bg-white/5 border border-white/10">
                    <Bot className="h-4 w-4 text-neutral-300" />
                  </div>
                )}
                <div className={`px-4 py-3 rounded-2xl max-w-[85%] text-sm leading-relaxed ${msg.role === 'user' ? 'bg-white text-black font-medium rounded-tr-sm' : 'bg-transparent text-neutral-300 border border-white/10 rounded-tl-sm'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                <div className="h-8 w-8 shrink-0 rounded-lg flex items-center justify-center bg-white/5 border border-white/10">
                  <Bot className="h-4 w-4 text-neutral-300" />
                </div>
                <div className="px-5 py-4 rounded-2xl bg-transparent border border-white/10 text-neutral-400 flex items-center gap-1.5 rounded-tl-sm">
                  <div className="h-1.5 w-1.5 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="h-1.5 w-1.5 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="h-1.5 w-1.5 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white/[0.01] border-t border-white/[0.06] backdrop-blur-xl">
             <form onSubmit={handleSend} className="relative flex items-center">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="w-full h-12 bg-white/5 border border-white/10 rounded-xl pl-4 pr-12 text-sm text-white focus:outline-none focus:border-white/30 focus:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all placeholder:text-neutral-600"
                />
                <button 
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 h-8 w-8 rounded-lg bg-white flex items-center justify-center text-black hover:bg-neutral-200 disabled:opacity-50 disabled:bg-neutral-800 disabled:text-neutral-500 transition-colors"
                >
                   <Send className="h-4 w-4 ml-0.5" />
                </button>
             </form>
             <div className="text-center mt-3 flex items-center justify-center gap-1.5 opacity-50">
               <Sparkles className="h-2.5 w-2.5 text-neutral-400" />
               <span className="text-[9px] text-neutral-400 font-bold tracking-widest uppercase">PropFlowy Core v2</span>
             </div>
          </div>
        </div>
      )}
    </>
  );
}
