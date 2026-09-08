"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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
    <main className="overflow-hidden min-h-screen">
      <section className="relative flex items-center justify-center">
        <div className="relative py-15 lg:py-15 w-full">
          <div className="mx-auto max-w-7xl px-6 md:px-12">

            {/* Modified Grid: Gives the right column ~30% more breathing room on desktop sizes */}
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">

              {/* Left Column: Content */}
              <div className="flex flex-col items-start text-left w-full">
                {/* Offer Badge */}
                <Link
                  href="/"
                  className="rounded-(--radius) flex w-fit items-center gap-2 border border-primary/60 bg-background/50 p-1 pr-3 text-sm font-medium shadow-[0_0_12px_rgba(var(--primary),0.3)] ring-1 ring-primary/40 transition-all duration-300 hover:border-primary hover:ring-primary hover:shadow-[0_0_20px_rgba(var(--primary),0.6)]"
                >
                  <span className="bg-green-500 text-primary rounded-full px-2 py-0.5 text-xs font-semibold">
                    Offer
                  </span>
                  <span>Get 80% Off Hosting with Free Domain</span>
                  <span className="bg-primary/30 block h-4 w-px"></span>
                  <ArrowRight className="size-4" />
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
                    className="w-full bg-black text-white hover:bg-black hover:text-white"
                  >
                    <Link href="/" className="w-full h-full flex items-center justify-center">
                      Start Now
                    </Link>
                  </Button>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <Shield className="text-green-500 h-5 w-5 shrink-0" />
                  <span className="text-md font-bold">
                    30-day money-back guarantee • Cancel anytime
                  </span>
                </div>
              </div>

              {/* Right Column: Stacked Vertical Folder (Hidden on Mobile) */}
              <div className="hidden lg:flex relative items-center justify-center lg:justify-end w-full h-full py-12">
                <div className="relative w-full xl:max-w-5xl aspect-[21/9] sm:aspect-video">
                  {videos.map((src, index) => {
                    // Calculate relative offset position from active item
                    const offset = (index - currentVideoIndex + videos.length) % videos.length;
                    const isActive = offset === 0;

                    // Dynamic styles: negative translateY moves upcoming cards UP to peek out top
                    const translateY = -offset * 28; // Negative shift to stack towards top
                    const scale = 1 - offset * 0.05; // Slightly shrink top background cards
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