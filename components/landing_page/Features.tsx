"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Zap, BrainCircuit, Gem } from "lucide-react";

export default function Features() {
  return (
    <section className="mb-20 md:mb-28">
      <h2 className="text-4xl font-bold text-center mb-14 text-white/90 tracking-tight">Why Choose 24Hour-AI?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="text-center bg-white/10 backdrop-blur-md border-none shadow-xl hover:scale-[1.025] transition-transform">
          <CardHeader>
            <Zap className="h-12 w-12 mx-auto mb-4 text-blue-400 animate-wiggle" />
            <CardTitle className="text-white/90">Pay-Per-Day Access</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80">No commitments. Get 24 hours of access to powerful AI models for just $1. Perfect for occasional needs.</p>
          </CardContent>
        </Card>
        <Card className="text-center bg-white/10 backdrop-blur-md border-none shadow-xl hover:scale-[1.025] transition-transform">
          <CardHeader>
            <BrainCircuit className="h-12 w-12 mx-auto mb-4 text-cyan-400 animate-wiggle-slow" />
            <CardTitle className="text-white/90">Top-Tier Models</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80">Choose from the best: GPT-4o, Mistral-Large, Gemini 1.5 Pro. Always access the latest capabilities.</p>
          </CardContent>
        </Card>
        <Card className="text-center bg-white/10 backdrop-blur-md border-none shadow-xl hover:scale-[1.025] transition-transform">
          <CardHeader>
            <Gem className="h-12 w-12 mx-auto mb-4 text-pink-400 animate-wiggle" />
            <CardTitle className="text-white/90">Pro Subscription</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80">Unlock persistent chat history, higher usage limits, and priority access for just $50/month.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
