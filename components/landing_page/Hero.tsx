"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative text-center mb-20 md:mb-32 flex flex-col items-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 shadow-sm backdrop-blur-lg mb-4 animate-fade-in">
        <Sparkles className="w-5 h-5 text-blue-400 animate-bounce" />
        <Badge variant="outline" className="bg-white/20 border-none text-primary font-medium tracking-wide">Powered by GPT-4o, Mistral-Large, Gemini 1.5, & More!</Badge>
      </div>
      <h1 className="text-7xl font-extrabold mb-4">
        <span className="text-white/90 px-5 py-2">
          24Hour-AI
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 animate-fade-in delay-150">
        The fastest way to unlock world-class AI chat. <span className="font-bold text-primary/90">Pay for time, not tokens.</span> No commitments. No hassle.
      </p>
      <div className="flex justify-center gap-4 animate-fade-in delay-200">
        <Button size="lg" className="text-lg px-8 py-5 shadow-xl hover:scale-105 transition-transform bg-gradient-to-r from-blue-500 to-cyan-400 text-white border-0">Get 24h Pass ($1)</Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="text-lg px-8 py-5 hover:scale-105 transition-transform border-primary/40 bg-white/10 text-primary/90 hover:bg-primary/10"
          asChild
        >
          <Link href="/pro_sub">Explore Pro ($50/mo)</Link>
        </Button>
      </div>
    </section>
  );
}
