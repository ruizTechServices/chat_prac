"use client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, Star } from "lucide-react";

export default function Pricing() {
  return (
    <section className="mb-20 md:mb-32">
      <h2 className="text-4xl font-bold text-center mb-14 text-white/90 tracking-tight">Simple, Transparent Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        <Card className="flex flex-col bg-white/10 backdrop-blur-lg border-none shadow-2xl hover:scale-105 transition-transform">
          <CardHeader>
            <CardTitle className="text-white/90">Standard Pass</CardTitle>
            <CardDescription className="text-white/60">Ideal for quick tasks & exploration.</CardDescription>
            <p className="text-4xl font-extrabold pt-4 text-blue-300">$1 <span className="text-sm font-normal text-white/60">/ 24 hours</span></p>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2 text-base text-white/80">
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 mr-2 text-green-400" /> Access to standard models</li>
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 mr-2 text-green-400" /> ~50 message limit</li>
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 mr-2 text-green-400" /> 24-hour access timer</li>
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 mr-2 text-green-400" /> History export (JSONL)</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white border-0 hover:scale-105 transition-transform">Get Standard Pass</Button>
          </CardFooter>
        </Card>
        <Card className="flex flex-col border-primary bg-gradient-to-br from-blue-400/50 via-cyan-400/20 to-white/10 backdrop-blur-lg border-2 border-blue-400 shadow-2xl scale-105 hover:scale-110 transition-transform relative">
          <CardHeader>
            <Badge className="w-fit mb-2 bg-yellow-400/90 text-black font-bold px-3 py-1">Popular</Badge>
            <CardTitle className="text-white/90">Reasoning Pass</CardTitle>
            <CardDescription className="text-white/60">For more demanding tasks & analysis.</CardDescription>
            <p className="text-4xl font-extrabold pt-4 text-yellow-200">$5 <span className="text-sm font-normal text-white/60">/ 24 hours</span></p>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2 text-base text-white/80">
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 mr-2 text-green-400" /> Access to all models</li>
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 mr-2 text-green-400" /> Higher token/message limits</li>
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 mr-2 text-green-400" /> 24-hour access timer</li>
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 mr-2 text-green-400" /> History export (JSONL)</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-gradient-to-r from-yellow-400 to-pink-400 text-black font-bold border-0 hover:scale-105 transition-transform shadow-lg">Get Reasoning Pass</Button> {/* TODO: I need to create a link to pay for $5 for the reasoning pass. The user is then rerouted to the chatbot with access to both regular chat models and reasoning models for 24 hours*/}

          </CardFooter>
          <div className="absolute -top-4 right-4 animate-bounce-slow"><Star className="w-8 h-8 text-yellow-300/80" /></div>
        </Card>
        <Card className="flex flex-col bg-white/10 backdrop-blur-lg border-none shadow-2xl hover:scale-105 transition-transform">
          <CardHeader>
            <CardTitle className="text-white/90">Pro Subscription</CardTitle>
            <CardDescription className="text-white/60">For professionals & businesses.</CardDescription>
            <p className="text-4xl font-extrabold pt-4 text-pink-300">$50 <span className="text-sm font-normal text-white/60">/ month</span></p>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2 text-base text-white/80">
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 mr-2 text-green-400" /> Priority access to all models</li>
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 mr-2 text-green-400" /> Highest usage limits</li>
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 mr-2 text-green-400" /> Persistent chat history</li>
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 mr-2 text-green-400" /> Dedicated support</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              asChild
              variant="outline"
              className="w-full bg-gradient-to-r from-pink-400 to-blue-400 text-white border-0 hover:scale-105 transition-transform"
            >
              <Link href="/pro_sub">Learn More</Link> {/* This link is complete */}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
