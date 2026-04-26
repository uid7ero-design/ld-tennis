import ScrollFadeIn from "./ScrollFadeIn";

const links = [
  {
    label: "Email",
    value: "lukedoughtytennis@outlook.com",
    href: "mailto:lukedoughtytennis@outlook.com",
    external: false,
  },
  {
    label: "Phone",
    value: "0413 091 027",
    href: "tel:+61413091027",
    external: false,
  },
  {
    label: "WhatsApp",
    value: "Message on WhatsApp",
    href: "https://wa.me/61413091027",
    external: true,
  },
  {
    label: "Facebook",
    value: "LD Tennis Coaching",
    href: "https://www.facebook.com/profile.php?id=61582192363700",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <ScrollFadeIn>
          <p className="text-green-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Get Started
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-10">
            Send a message and we&apos;ll organise a time that works for you.
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn delay={80}>
          <div>
            {links.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`group flex items-baseline justify-between py-5 border-t border-white/6 hover:border-white/12 transition-colors duration-200 ${
                  i === links.length - 1 ? "border-b border-white/6 hover:border-b-white/12" : ""
                }`}
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-zinc-600 w-24 shrink-0">
                  {link.label}
                </span>
                <span className="flex-1 text-zinc-300 group-hover:text-white transition-colors duration-200 text-sm md:text-base">
                  {link.value}
                </span>
                <svg
                  className="w-4 h-4 text-zinc-700 group-hover:text-zinc-400 group-hover:translate-x-0.5 transition-all duration-200 shrink-0 ml-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            ))}
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={200}>
          <p className="mt-10 text-zinc-600 text-sm">
            Based in Southern Adelaide · Sessions at local courts
          </p>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
