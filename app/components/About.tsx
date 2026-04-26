import Image from "next/image";
import ScrollFadeIn from "./ScrollFadeIn";

const highlights = [
  "10+ Years Experience",
  "Tennis SA Certified",
  "Level 1 Coach",
  "All Ages 4+",
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: image + badges */}
          <ScrollFadeIn>
            <div className="flex flex-col items-center lg:items-start gap-8">
              {/* Coach photo */}
              <div className="relative">
                {/* Glow */}
                <div className="absolute -inset-3 rounded-full bg-green-500/15 blur-xl opacity-70" />
                {/* Accent border */}
                <div className="absolute -inset-0.5 rounded-full bg-linear-to-br from-green-500/40 via-green-500/10 to-transparent" />
                {/* Image */}
                <div className="relative w-52 h-52 rounded-full overflow-hidden shadow-2xl shadow-black/60">
                  <Image
                    src="/luke.png"
                    alt="Luke Doughty — Head Coach, LD Tennis"
                    fill
                    className="object-cover object-top"
                    sizes="208px"
                  />
                </div>
                {/* Verified badge */}
                <div className="absolute -bottom-1 -right-1 w-11 h-11 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/40 border-2 border-[#0d0d0d]">
                  <svg
                    className="w-5 h-5 text-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              {/* Highlight badges */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {highlights.map((h) => (
                  <span
                    key={h}
                    className="text-sm font-medium text-green-400 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </ScrollFadeIn>

          {/* Right: text content */}
          <ScrollFadeIn delay={150}>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-green-500 text-sm font-semibold uppercase tracking-widest mb-4">
                  Meet your coach
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                  Luke Doughty
                </h2>
                <p className="text-zinc-400 text-lg mt-1">
                  Head Coach &amp; Founder
                </p>
              </div>

              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  A Level 1 certified tennis coach with over 10 years of
                  coaching experience, including 8 years at Tennis SA. Luke has
                  dedicated his career to making tennis accessible and enjoyable
                  for everyone.
                </p>
                <p>
                  Specialising in beginner and entry-level programs for all
                  ages 4+, his approach focuses on building genuine confidence
                  and a progression mindset — not just technique, but a lasting
                  love for the game.
                </p>
              </div>

              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-green-400 font-medium hover:text-green-300 transition-colors group"
                >
                  Book a session with Luke
                  <svg
                    className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
