import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LD Tennis Coaching — Private Lessons for All Ages",
  description:
    "Beginner & entry-level tennis programs for all ages 4+ with Head Coach Luke Doughty. Build confidence, skills, and love for the game. First session $40.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#0a0a0a] text-zinc-100">{children}</body>
    </html>
  );
}
