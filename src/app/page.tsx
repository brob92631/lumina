"use client";
import { Search, Sparkles, ArrowRight, Globe, Zap } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  return (
    <main className="min-h-[100dvh] flex flex-col items-center justify-center p-6 bg-[#09090b] text-[#fafafa] relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="w-full max-w-2xl z-10 text-center">
        <div className="flex flex-col items-center gap-4 mb-16">
          <div className="p-3 bg-white/5 rounded-2xl border border-white/10 shadow-2xl">
            <Sparkles className="text-indigo-400 w-8 h-8" />
          </div>
          <h1 className="text-5xl font-extralight tracking-[0.3em] uppercase opacity-90">Lumina</h1>
        </div>
        <div className="relative group">
          <input 
            type="text" 
            placeholder="Search without limits..." 
            className="w-full bg-[#111114] border border-white/10 rounded-[1.8rem] py-6 px-14 text-xl outline-none focus:border-white/20 transition-all shadow-2xl text-white" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
          />
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 w-5 h-5" />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-white text-black rounded-2xl shadow-lg">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </main>
  );
}
