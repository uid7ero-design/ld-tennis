"use client";

import { useState } from "react";
import type { BookingRequest, BookingResponse } from "@/app/lib/booking";
import ScrollFadeIn from "./ScrollFadeIn";

type FormState = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-green-500/50 focus:bg-white/[0.06] transition-all duration-200";

const labelClass = "block text-sm font-medium text-zinc-400 mb-2";

export default function BookingForm() {
  const [form, setForm] = useState<BookingRequest>({
    name: "",
    email: "",
    phone: "",
    preferredTime: "",
    message: "",
  });
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data: BookingResponse = await res.json();

      if (data.success) {
        setState("success");
      } else {
        setState("error");
        setErrorMessage(data.message);
      }
    } catch {
      setState("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <section id="booking" className="py-28 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn className="text-center mb-16">
          <p className="text-green-500 text-sm font-semibold uppercase tracking-widest mb-4">
            Booking
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Book Your Session
          </h2>
          <p className="text-zinc-400 mt-4 text-lg max-w-lg mx-auto">
            Send a request and we&apos;ll confirm your session time.
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn delay={100}>
          <div className="max-w-xl mx-auto">
            {state === "success" ? (
              <div className="bg-green-500/10 border border-green-500/25 rounded-2xl p-10 text-center flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-400"
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
                <h3 className="text-xl font-semibold text-white">
                  Request Sent!
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Thanks! We&apos;ll be in touch to confirm your session.
                </p>
                <button
                  onClick={() => {
                    setState("idle");
                    setForm({ name: "", email: "", phone: "", preferredTime: "", message: "" });
                  }}
                  className="mt-2 text-sm text-green-400 hover:text-green-300 transition-colors underline-offset-4 hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/[0.02] border border-white/8 rounded-2xl p-8 md:p-10 flex flex-col gap-5"
              >
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Full Name <span className="text-green-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Luke Doughty"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email <span className="text-green-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone{" "}
                    <span className="text-zinc-600 font-normal">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="0400 000 000"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* Preferred time */}
                <div>
                  <label htmlFor="preferredTime" className={labelClass}>
                    Preferred Day / Time{" "}
                    <span className="text-green-500">*</span>
                  </label>
                  <input
                    id="preferredTime"
                    name="preferredTime"
                    type="text"
                    required
                    placeholder="e.g. Saturday morning or weekday evenings"
                    value={form.preferredTime}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className={labelClass}>
                    Message{" "}
                    <span className="text-zinc-600 font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell Luke a bit about yourself and what you'd like to work on..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Error */}
                {state === "error" && (
                  <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                    {errorMessage}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 bg-green-500 text-black font-semibold px-8 py-4 rounded-xl hover:bg-green-400 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 text-base shadow-[0_0_30px_rgba(34,197,94,0.2)] hover:shadow-[0_0_40px_rgba(34,197,94,0.35)] mt-1"
                >
                  {state === "loading" ? (
                    <>
                      <svg
                        className="w-4 h-4 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending Request...
                    </>
                  ) : (
                    <>
                      Send Booking Request
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
                    </>
                  )}
                </button>

                <p className="text-center text-zinc-600 text-xs">
                  No payment required. Luke will confirm your session directly.
                </p>
              </form>
            )}
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
