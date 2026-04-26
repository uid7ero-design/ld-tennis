import ScrollFadeIn from "./ScrollFadeIn";

const included = [
  "Full technique assessment",
  "Personalised coaching plan",
  "Drills tailored to your level",
  "Post-session feedback",
];

export default function Offer() {
  return (
    <section id="pricing" className="py-28 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <ScrollFadeIn className="text-center mb-16">
          <p className="text-green-500 text-sm font-semibold uppercase tracking-widest mb-4">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Start Today
          </h2>
          <p className="text-zinc-400 mt-4 text-lg max-w-lg mx-auto">
            No commitment. Just one session to see the difference great coaching
            makes.
          </p>
        </ScrollFadeIn>

        {/* Offer card */}
        <ScrollFadeIn>
          <div className="max-w-2xl mx-auto relative">
            {/* Glow behind card */}
            <div className="absolute -inset-px rounded-3xl bg-linear-to-b from-green-500/20 to-transparent blur-xl opacity-60" />

            <div className="relative bg-[#111] border border-green-500/25 rounded-3xl p-10 md:p-14 overflow-hidden">
              {/* Inner top glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-green-500/10 blur-[60px] rounded-full" />

              <div className="relative z-10 flex flex-col items-center text-center gap-8">
                {/* Badge */}
                <span className="text-xs font-bold text-green-400 bg-green-500/10 border border-green-500/25 rounded-full px-4 py-1.5 uppercase tracking-widest">
                  Intro Offer
                </span>

                {/* Price */}
                <div>
                  <div className="flex items-start justify-center gap-1">
                    <span className="text-3xl font-bold text-green-400 mt-2">
                      $
                    </span>
                    <span className="text-8xl font-bold text-white leading-none">
                      40
                    </span>
                  </div>
                  <p className="text-zinc-400 mt-2 text-lg">
                    First Intro Session
                  </p>
                </div>

                {/* Divider */}
                <div className="w-full border-t border-white/7" />

                {/* Included features */}
                <ul className="w-full space-y-4 text-left">
                  {included.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center shrink-0">
                        <svg
                          className="w-3 h-3 text-green-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-zinc-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-green-500 text-black font-bold px-8 py-4 rounded-2xl hover:bg-green-400 active:scale-[0.98] transition-all duration-200 text-base shadow-[0_0_40px_rgba(34,197,94,0.25)] hover:shadow-[0_0_60px_rgba(34,197,94,0.4)]"
                >
                  Claim Your Intro Session
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>

                <p className="text-zinc-600 text-xs">
                  No lock-in contract. Pay per session.
                </p>
              </div>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
