"use client";

const testimonials = [
  {
    quote: "24Hour-AI is a game changer. I get instant access to the best models, whenever I need them.",
    name: "Alex P.",
    title: "Startup Founder"
  },
  {
    quote: "The Reasoning Pass helped me finish a client project overnight. Worth every penny!",
    name: "Samira K.",
    title: "Freelance Developer"
  },
  {
    quote: "Finally, AI chat that fits my workflow and budget. The Pro subscription is a no-brainer.",
    name: "Morgan L.",
    title: "Product Manager"
  },
];

export default function Testimonials() {
  return (
    <section className="my-24">
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-semibold text-center text-white/90 mb-10">Loved by creators & professionals</h3>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {testimonials.map((t, idx) => (
            <div key={idx} className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:scale-[1.03] transition-transform">
              <p className="text-lg md:text-xl text-white/90 mb-4">“{t.quote}”</p>
              <span className="font-bold text-primary/80">{t.name}</span>
              <span className="text-white/60 text-sm">{t.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
