"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FooterCTA() {
  return (
    <section className="text-center bg-white/10 backdrop-blur-lg rounded-3xl p-10 md:p-16 shadow-xl border border-white/20 mx-auto max-w-3xl animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white/90">Ready to Start Chatting?</h2>
      <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto">Get instant access to powerful AI with our simple 24-hour passes or unlock the full potential with a Pro subscription.</p>
      <div className="flex justify-center gap-4">
        <Button size="lg" className="text-lg px-8 py-5 shadow-xl hover:scale-105 transition-transform bg-gradient-to-r from-blue-500 to-cyan-400 text-white border-0">Buy a Pass Now</Button>
        <Button 
          size="lg" 
          variant="secondary" 
          className="text-lg px-8 py-5 hover:scale-105 transition-transform border-primary/40 bg-white/10 text-primary/90 hover:bg-primary/10"
          asChild
        >
          <Link href="/compare_plans">Compare Plans</Link>
        </Button>
      </div>
    </section>
  );
}
