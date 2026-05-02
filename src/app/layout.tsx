import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import OasisMark from "./_components/OasisMark";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Be the Oasis — a pause in the ether",
  description:
    "A directory of phone-free event spaces. Find venues hosting gatherings where people put devices away and talk to each other.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-20 bg-[#0f0f0f]/95 backdrop-blur border-b border-[#272727]">
          <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold tracking-tight text-[15px] text-white"
            >
              <OasisMark size={18} />
              Be the Oasis
            </Link>
            <nav className="flex items-center gap-3 sm:gap-5 text-sm">
              <Link
                href="/#find"
                className="text-[#aaa] hover:text-white"
              >
                Find a space
              </Link>
              <Link
                href="/suggest-a-space"
                className="hidden sm:inline-block border border-[#3f3f3f] text-[#f1f1f1] hover:bg-[#272727] px-3 py-1.5 font-medium"
              >
                Already know of a phone-free space?
              </Link>
              <Link
                href="/host"
                className="bg-white text-black hover:bg-[#e5e5e5] px-4 py-1.5 font-medium"
              >
                Register a space
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[#272727] mt-16">
          <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-[#717171]">
            Be the Oasis · a pause in the ether
          </div>
        </footer>
      </body>
    </html>
  );
}
