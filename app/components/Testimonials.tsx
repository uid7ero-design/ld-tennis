import ScrollFadeIn from "./ScrollFadeIn";

const testimonials = [
  {
    quote:
      "After just four sessions my technique improved dramatically. Luke has a real gift for breaking down the game into simple, actionable steps.",
    name: "James K.",
    detail: "Adult Beginner",
  },
  {
    quote:
      "My kids absolutely love the junior program. Luke makes tennis fun and accessible — they can't wait for their next session.",
    name: "Sarah M.",
    detail: "Parent of Junior Students",
  },
  {
    quote:
      "I'd tried group coaching elsewhere and it never clicked. The private sessions with Luke gave me the individual attention I needed.",
    name: "Emma L.",
    detail: "Private Lesson Student",
  },
];

function Stars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-green-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-28 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <ScrollFadeIn className="text-center mb-16">
          <p className="text-green-500 text-sm font-semibold uppercase tracking-widest mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            What Students Say
          </h2>
        </ScrollFadeIn>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollFadeIn key={t.name} delay={i * 100}>
              <div className="h-full bg-white/3 border border-white/8 rounded-2xl p-8 flex flex-col gap-6">
                <Stars />
                <p className="text-zinc-300 leading-relaxed text-sm flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/6">
                  <div className="w-9 h-9 rounded-full bg-green-500/15 border border-green-500/25 flex items-center justify-center text-green-400 font-semibold text-sm shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">
                      {t.name}
                    </div>
                    <div className="text-zinc-500 text-xs">{t.detail}</div>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
