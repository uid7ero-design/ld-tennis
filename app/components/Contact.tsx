import ScrollFadeIn from "./ScrollFadeIn";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto">
          <ScrollFadeIn className="text-center">
            <p className="text-green-500 text-sm font-semibold uppercase tracking-widest mb-4">
              Contact
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Get Started
            </h2>
            <p className="text-zinc-400 mt-4 text-lg leading-relaxed">
              Message now to book your first session. Luke responds quickly and
              will get you on court as soon as possible.
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn delay={150}>
            <div className="mt-12 bg-white/3 border border-white/8 rounded-2xl p-8 md:p-10 flex flex-col gap-5">
              {/* Email button */}
              <a
                href="mailto:lukedoughtytennis@outlook.com"
                className="group flex items-center gap-4 bg-white/4 hover:bg-white/7 border border-white/8 rounded-xl px-6 py-4 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 shrink-0 group-hover:bg-green-500/15 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.75}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-medium text-sm">
                    Send an Email
                  </div>
                  <div className="text-zinc-500 text-xs truncate">
                    lukedoughtytennis@outlook.com
                  </div>
                </div>
                <svg
                  className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 group-hover:translate-x-0.5 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>

              {/* WhatsApp button */}
              <a
                href="https://wa.me/61413091027"
                className="group flex items-center gap-4 bg-white/4 hover:bg-white/7 border border-white/8 rounded-xl px-6 py-4 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 shrink-0 group-hover:bg-green-500/15 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-medium text-sm">
                    Message on WhatsApp
                  </div>
                  <div className="text-zinc-500 text-xs">
                    0413 091 027
                  </div>
                </div>
                <svg
                  className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 group-hover:translate-x-0.5 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>

              {/* Facebook button */}
              <a
                href="https://www.facebook.com/profile.php?id=61582192363700"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-white/4 hover:bg-white/7 border border-white/8 rounded-xl px-6 py-4 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 shrink-0 group-hover:bg-green-500/15 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-medium text-sm">Follow on Facebook</div>
                  <div className="text-zinc-500 text-xs">LD Tennis Coaching</div>
                </div>
                <svg
                  className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 group-hover:translate-x-0.5 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <p className="text-center text-zinc-600 text-xs pt-2">
                Based in Southern Adelaide · Sessions at local courts
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
