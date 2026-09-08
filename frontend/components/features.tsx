'use client'

import React, { useEffect, useState } from "react";
import { RefreshCw, Gauge, Zap, Server } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: RefreshCw,
    title: "99.9% Uptime Guarantee",
    description: "Keep your website available around the clock.",
  },
  {
    icon: Gauge,
    title: "Unmetered Bandwidth",
    description: "Handle growing traffic without bandwidth limits.",
  },
  {
    icon: Zap,
    title: "LiteSpeed Web Server",
    description: "Enjoy faster website loading and improved performance.",
  },
  {
    icon: Server,
    title: "India Data Center",
    description: "Deliver faster loading speeds to visitors across India.",
  },
];

const ROTATION_MS = 4000;

export default function IncludedFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % features.length);
    }, ROTATION_MS);

    return () => window.clearInterval(id);
  }, [paused]);

  const canHover = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const activateCard = (index: number) => {
    setActiveIndex(index);
    if (canHover()) setPaused(true);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-[#f4f7ff] to-[#dbe4ff] p-5 shadow-sm sm:p-8 md:p-12">
        <div className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 rounded-full bg-[#4169E1]/20 blur-3xl" />

        <div className="relative z-10 space-y-8 lg:space-y-10">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl leading-[1.15]">
              Included with Every <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#061433] to-[#4169E1] bg-clip-text text-transparent">
                Web Hosting Plan
              </span>
            </h2>
          </div>

          <div
            className="flex flex-col gap-3 md:h-[250px] md:flex-row"
            onMouseLeave={() => setPaused(false)}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeIndex === index;

              return (
                <button
                  key={feature.title}
                  type="button"
                  onMouseEnter={() => activateCard(index)}
                  onFocus={() => activateCard(index)}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "feature-bento-item flex min-h-[148px] min-w-0 flex-col items-start overflow-hidden rounded-2xl border p-5 text-left outline-none md:h-full md:min-h-0 sm:p-6",
                    "focus-visible:ring-2 focus-visible:ring-[#4169E1]/40",
                    isActive
                      ? "z-10 border-sky-200 bg-[#dbeafe] text-slate-900 shadow-lg md:flex-[2.25]"
                      : "z-0 border-transparent bg-gradient-to-br from-[#061433] via-[#12275c] to-[#1e3a8a] text-white/80 shadow-md md:flex-[0.7]"
                  )}
                >
                  <div
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border",
                      isActive ? "border-sky-200 bg-white" : "border-white/15 bg-white/10"
                    )}
                  >
                    <Icon className={cn("h-5 w-5 stroke-[1.75]", isActive ? "text-[#1e3a8a]" : "text-white")} />
                  </div>
                  <div className="mt-4 min-w-0">
                    <h3 className={cn("text-base font-bold", isActive ? "text-slate-900" : "text-white")}>
                      {feature.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-1.5 text-sm leading-relaxed",
                        isActive ? "text-slate-600" : "line-clamp-2 text-white/70 md:line-clamp-3"
                      )}
                    >
                      {feature.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
