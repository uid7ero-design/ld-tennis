import ScrollFadeIn from "./ScrollFadeIn";

const services = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    title: "Private Lessons",
    description:
      "1-on-1 coaching focused on rapid improvement. Tailored sessions built around your specific goals and current level.",
    tag: "Most Popular",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Group Sessions",
    description:
      "Fun, social sessions with structured learning. Develop your game alongside others in a supportive environment.",
    tag: null,
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
    title: "Junior Programs",
    description:
      "Perfect for kids starting their tennis journey. Age-appropriate drills, games, and technique fundamentals.",
    tag: null,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <ScrollFadeIn className="text-center mb-16">
          <p className="text-green-500 text-sm font-semibold uppercase tracking-widest mb-4">
            What&apos;s on offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Coaching for Every Level
          </h2>
          <p className="text-zinc-400 mt-4 text-lg max-w-xl mx-auto">
            Whether you&apos;re picking up a racket for the first time or
            looking to sharpen your skills, there&apos;s a session for you.
          </p>
        </ScrollFadeIn>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollFadeIn key={service.title} delay={i * 100}>
              <div className="group relative h-full bg-white/3 border border-white/8 rounded-2xl p-8 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-green-500/8 hover:border-green-500/20 transition-all duration-300">
                {service.tag && (
                  <div className="absolute top-5 right-5">
                    <span className="text-xs font-semibold text-green-400 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1">
                      {service.tag}
                    </span>
                  </div>
                )}
                <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 mb-6 group-hover:bg-green-500/15 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
