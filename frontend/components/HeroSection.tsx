"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Check, Play, Shield } from "lucide-react";
import { Button } from "./ui/button";

const videos = [
  "https://customer-l1i0l3fn06n7hp6n.cloudflarestream.com/bcf790878d6418ee3453906750e16cd9/downloads/default.mp4",
  "https://customer-l1i0l3fn06n7hp6n.cloudflarestream.com/240ae37d807d2258284c8d160b7810d9/downloads/default.mp4",
  "https://customer-l1i0l3fn06n7hp6n.cloudflarestream.com/4cf2ba16be86a925ce0a7ffe1889de46/downloads/default.mp4",
];

export default function HeroSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const activeVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (activeVideoRef.current) {
      activeVideoRef.current.play().catch(() => {
        // Fallback handling if autoplay is restricted
      });
    }
  }, [currentVideoIndex]);

  return (
    <main className="overflow-x-clip">
      <section className="relative flex items-center justify-center">
        <div className="relative w-full py-8 lg:py-10">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-16">

              <div className="flex w-full flex-col items-start text-left">
                <Link
                  href="#pricing"
                  className="group mt-3 inline-flex max-w-full items-center gap-2 rounded-full border border-[#4169E1]/25 bg-white py-1.5 pl-1.5 pr-3 shadow-[0_10px_28px_-16px_rgba(30,58,138,0.45)] transition-all duration-300 hover:border-[#4169E1]/50 hover:shadow-[0_14px_32px_-14px_rgba(30,58,138,0.5)] sm:gap-2.5 sm:pr-4"
                >
                  <span className="inline-flex shrink-0 items-center rounded-full bg-[#4169E1] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-[0_6px_14px_-6px_rgba(65,105,225,0.85)] sm:text-[11px]">
                    Offer
                  </span>
                  <span className="min-w-0 text-[13px] font-medium leading-snug text-slate-800 sm:text-sm">
                    Get 80% Off Hosting with Free Domain
                  </span>
                  <ArrowRight className="size-3.5 shrink-0 text-[#1e3a8a] transition-transform duration-300 group-hover:translate-x-0.5 sm:size-4" />
                </Link>

                <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl font-sans">
                  Launch your website in minutes
                </h1>

                <p className="mt-4 text-lg text-muted-foreground font-sans">
                  Fast, secure & reliable hosting built for Indian websites.
                </p>

                <ul className="mt-6 space-y-3 text-sm font-medium">
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span>Up to 20x faster website performance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span>Free SSL, email & daily backups</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span>Create your website faster with AI</span>
                  </li>
                </ul>

                <div className="mt-8 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold">₹69</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <div className="mt-5 rounded-lg text-center w-full sm:w-48">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-[#061433] to-[#1e3a8a] text-white hover:from-[#0a2463] hover:to-[#1e3a8a] hover:text-white"
                  >
                    <Link href="/" className="w-full h-full flex items-center justify-center">
                      Start Now
                    </Link>
                  </Button>
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <Shield className="h-5 w-5 shrink-0 text-[#1e3a8a]" />
                  <span className="text-sm font-semibold text-slate-700">
                    30-day money-back guarantee
                  </span>
                </div>
              </div>

              <div className="relative hidden h-full w-full items-center justify-center py-6 lg:flex lg:justify-end">
                <div className="relative w-full xl:max-w-5xl aspect-[21/9] sm:aspect-video">
                  {videos.map((src, index) => {
                    const offset = (index - currentVideoIndex + videos.length) % videos.length;
                    const isActive = offset === 0;
                    const translateY = -offset * 28;
                    const scale = 1 - offset * 0.05;
                    const opacity = offset === 0 ? 1 : offset === 1 ? 0.7 : 0.4;

                    return (
                      <div
                        key={src}
                        style={{
                          zIndex: videos.length - offset,
                          opacity,
                          transform: `translateY(${translateY}px) scale(${scale})`,
                        }}
                        className="absolute inset-0 overflow-hidden rounded-2xl border border-white/15 bg-slate-950 shadow-[0_28px_70px_rgba(0,0,0,0.55)] transition-all duration-700 ease-out"
                      >
                        <div className="absolute inset-x-0 top-0 z-20 border-b border-white/10 bg-[#17191e]/95 text-white/60 shadow-[0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl">
                          <div className="flex h-9 items-center gap-1.5 px-3">
                            <span className="size-2.5 rounded-full bg-[#ff5f57] shadow-[0_0_8px_rgba(255,95,87,0.35)]" />
                            <span className="size-2.5 rounded-full bg-[#febc2e] shadow-[0_0_8px_rgba(254,188,46,0.25)]" />
                            <span className="size-2.5 rounded-full bg-[#28c840] shadow-[0_0_8px_rgba(40,200,64,0.25)]" />
                            <div className="ml-4 flex h-7 min-w-0 flex-1 items-end gap-1">
                              <div className="flex h-7 max-w-[55%] items-center gap-2 rounded-t-lg border-x border-t border-white/10 bg-[#292c33] px-3 text-[10px] text-white/75 shadow-inner">
                                <span className="size-2 rounded-full bg-cyan-300/80" />
                                <span className="truncate">AI workspace</span>
                                <span className="ml-1 text-white/35">×</span>
                              </div>
                              <div className="hidden h-7 items-center gap-2 rounded-t-lg px-3 text-[10px] text-white/35 sm:flex">
                                <span className="size-2 rounded-full bg-white/20" />
                                New tab
                              </div>
                              <span className="px-2 text-sm text-white/35">+</span>
                            </div>
                          </div>
                          <div className="flex h-8 items-center gap-3 border-t border-white/[0.06] px-3 text-[10px] text-white/40">
                            <span className="text-sm text-white/45">‹</span>
                            <span className="text-sm text-white/25">›</span>
                            <span className="text-sm text-white/35">↻</span>
                            <div className="flex min-w-0 flex-1 items-center gap-2 rounded-md border border-white/10 bg-black/20 px-3 py-1 text-white/45">
                              <span className="text-[9px] text-emerald-300/80">●</span>
                              <span className="truncate">app.workspace.ai/overview</span>
                            </div>
                            <span className="hidden text-sm text-white/35 sm:inline">⌁</span>
                            <span className="text-sm text-white/35">⋯</span>
                          </div>
                        </div>
                        <video
                          ref={isActive ? activeVideoRef : null}
                          src={src}
                          autoPlay={isActive}
                          muted
                          playsInline
                          preload="auto"
                          onEnded={isActive ? () => setCurrentVideoIndex((value) => (value + 1) % videos.length) : undefined}
                          className="absolute inset-0 h-full w-full object-cover pt-9"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/40 via-transparent to-cyan-200/10" />
                        {isActive && (
                          <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-xs text-white/70 backdrop-blur-md">
                            <Play className="size-3 fill-cyan-200 text-cyan-200" />
                            Product preview
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
