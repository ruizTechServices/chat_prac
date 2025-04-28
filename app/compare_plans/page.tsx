import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Star } from "lucide-react";
import AnimatedBackground from "@/components/landing_page/AnimatedBackground";

export default function ComparePlansPage() {
  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0ea5e9]">
      <AnimatedBackground />
      <main className="relative z-10 flex-1 container mx-auto py-16 px-4">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Compare Plans</h1>
        <p className="text-lg text-white/70 font-medium max-w-xl mx-auto">
          AI chat, your way. Choose a 24‑hour pass for instant access, or go Pro for persistent history and premium support.
        </p>
      </div>

      {/* Passes Grouped */}
      <div className="mb-4 flex flex-col items-center">
        <Badge className="bg-white/10 text-white border border-white/20 px-4 py-1 mb-4 text-base font-semibold uppercase tracking-wide">24 Hour Passes</Badge>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Basic Pass */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up">
          <div className="p-6 border-b border-white/10 flex-1">
            <h2 className="text-2xl font-bold mb-2">Basic Pass</h2>
            <p className="text-white/70 mb-4">Quick answers, no storage, up to 50 messages.</p>
            <p className="text-3xl font-bold mb-2">$1 <span className="text-lg font-normal text-white/70">/ 24 hours</span></p>
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge className="bg-slate-700">GPT-4o</Badge>
              <Badge className="bg-slate-700">No History</Badge>
              <Badge className="bg-slate-700">JSONL Export</Badge>
            </div>
          </div>
          <ul className="p-6 space-y-3 flex-1">
            <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-0.5" /><span>24‑hour access</span></li>
            <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-0.5" /><span>Up to 50 messages</span></li>
            <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-0.5" /><span>GPT‑4o model</span></li>
            <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-0.5" /><span>Export chat (JSONL)</span></li>
          </ul>
          <div className="p-6 pt-0">
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white border-0 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl focus:ring-2 focus:ring-cyan-400/50 animate-gradient-x"
            >
              Buy Basic Pass
            </Button>
          </div>
        </div>
        {/* Reasoning Pass */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl overflow-hidden flex flex-col transition-transform duration-300 hover:scale-110 hover:shadow-2xl animate-fade-in-up relative">
          <div className="p-6 border-b border-white/10 flex-1">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-bold">Reasoning Pass</h2>
              <Badge className="bg-amber-500 animate-pulse">Popular</Badge>
            </div>
            <p className="text-white/70 mb-4">Complex tasks, all models, unlimited messages, no storage.</p>
            <p className="text-3xl font-bold mb-2">$5 <span className="text-lg font-normal text-white/70">/ 24 hours</span></p>
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge className="bg-slate-700">GPT‑4o</Badge>
              <Badge className="bg-slate-700">Mistral</Badge>
              <Badge className="bg-slate-700">Gemini</Badge>
              <Badge className="bg-slate-700">No History</Badge>
              <Badge className="bg-slate-700">JSONL Export</Badge>
            </div>
          </div>
          <ul className="p-6 space-y-3 flex-1">
            <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-0.5" /><span>24‑hour access</span></li>
            <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-0.5" /><span>Unlimited messages</span></li>
            <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-0.5" /><span>All models (GPT‑4o, Mistral, Gemini)</span></li>
            <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-0.5" /><span>Higher token limits</span></li>
            <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-0.5" /><span>Export chat (JSONL)</span></li>
          </ul>
          <div className="p-6 pt-0">
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-yellow-400 to-pink-400 text-black font-bold border-0 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl focus:ring-2 focus:ring-pink-400/50 animate-gradient-x"
            >
              Buy Reasoning Pass
            </Button>
          </div>
          <div className="absolute -top-4 right-4 animate-bounce">
            <Star className="w-8 h-8 text-yellow-300/80 animate-spin-slow" />
          </div>
        </div>
      </div>

      {/* Pro Subscription, visually separated */}
      <div className="mb-12">
        <Badge className="bg-blue-900/40 text-white border border-blue-400/30 px-4 py-1 mb-4 text-base font-semibold uppercase tracking-wide animate-pulse">Pro Subscription</Badge>
        <div className="bg-gradient-to-b from-blue-900/40 to-indigo-900/40 backdrop-blur-sm rounded-xl border border-blue-400/30 shadow-xl overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up">
          <div className="p-6 border-b border-white/10 flex-1">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-bold">Pro Subscription</h2>
              <Badge className="bg-blue-500">Best Value</Badge>
            </div>
            <p className="text-white/70 mb-4">Persistent history, priority support, advanced exports, and the highest token budgets.</p>
            <p className="text-3xl font-bold mb-2">$50 <span className="text-lg font-normal text-white/70">/ month</span></p>
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge className="bg-slate-700">All Models</Badge>
              <Badge className="bg-slate-700">Persistent History</Badge>
              <Badge className="bg-slate-700">Priority Support</Badge>
              <Badge className="bg-slate-700">Advanced Exports</Badge>
            </div>
          </div>
          <ul className="p-6 space-y-3 flex-1">
            <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-0.5" /><span>Unlimited 24/7 access</span></li>
            <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-0.5" /><span>Persistent chat history</span></li>
            <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-0.5" /><span>Priority access to newest models</span></li>
            <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-0.5" /><span>Highest token budgets</span></li>
            <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-0.5" /><span>Advanced exports (JSONL, PDF)</span></li>
            <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-0.5" /><span>Priority support</span></li>
          </ul>
          <div className="p-6 pt-0">
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-pink-400 to-blue-400 text-white border-0 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl focus:ring-2 focus:ring-blue-400/50 animate-gradient-x"
            >
              Subscribe Now
            </Button>
          </div>
        </div>
      </div>

        {/* Comparison Table */}
        <section className="overflow-x-auto mb-20 animate-fade-in-up">
          <div className="max-w-4xl mx-auto rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl p-4 md:p-8">
            <table className="min-w-full text-sm text-left border-separate border-spacing-y-2">
              <thead>
                <tr className="text-white/90">
                  <th className="font-semibold py-2">Feature</th>
                  <th className="font-semibold py-2">Basic Pass</th>
                  <th className="font-semibold py-2">Reasoning Pass</th>
                  <th className="font-semibold py-2">Pro Subscription</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                <tr>
                  <td className="py-2">Price</td>
                  <td>$1 / 24h</td>
                  <td>$5 / 24h</td>
                  <td>$50 / mo</td>
                </tr>
                <tr>
                  <td className="py-2">Message Limit</td>
                  <td>50</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td className="py-2">Model Access</td>
                  <td>GPT‑4o</td>
                  <td>All (GPT‑4o, Mistral, Gemini)</td>
                  <td>All + Priority</td>
                </tr>
                <tr>
                  <td className="py-2">Chat History</td>
                  <td>No</td>
                  <td>No</td>
                  <td>Persistent</td>
                </tr>
                <tr>
                  <td className="py-2">Export</td>
                  <td>JSONL</td>
                  <td>JSONL</td>
                  <td>JSONL, PDF</td>
                </tr>
                <tr>
                  <td className="py-2">Support</td>
                  <td>Standard</td>
                  <td>Standard</td>
                  <td>Priority</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ / Contact */}
        <section className="text-center pb-12 animate-fade-in-up">
          <div className="max-w-2xl mx-auto rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-white/90">Still have questions?</h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Contact our team for custom plans or any questions about our services.<br />We're here to help you find the perfect solution for your needs.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-white/40 hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl focus:ring-2 focus:ring-blue-400/50 animate-gradient-x"
            >
              Contact Us
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
