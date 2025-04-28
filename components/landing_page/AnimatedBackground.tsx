"use client";

export default function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute left-1/4 top-0 w-[40vw] h-[40vw] bg-gradient-to-tr from-primary/20 to-secondary/30 rounded-full blur-3xl animate-pulse-slow"/>
      <div className="absolute right-0 bottom-0 w-[30vw] h-[30vw] bg-gradient-to-br from-[#0ea5e9]/30 to-[#f472b6]/30 rounded-full blur-2xl animate-pulse-slower"/>
      <div className="absolute left-0 bottom-1/3 w-[20vw] h-[20vw] bg-gradient-to-br from-[#fbbf24]/20 to-[#0ea5e9]/10 rounded-full blur-2xl animate-pulse"/>
    </div>
  );
}
