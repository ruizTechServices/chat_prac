import { AnimatedBackground, Hero, Features, Pricing, Testimonials, FooterCTA } from "@/components/landing_page";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0ea5e9]">
      <AnimatedBackground />
      <main className="relative z-10 flex-1 container mx-auto px-4 py-12 md:py-24">
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <FooterCTA />
      </main>
    </div>
  );
}
