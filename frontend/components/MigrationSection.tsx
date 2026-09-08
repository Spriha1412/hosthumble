import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const features = [
  "Free website migrations by qualified experts",
  "No downtime during the actual transfer",
  "No data lost or links broken during the migration",
  "Support for WordPress and CMS",
  "Comprehensive post-migration testing",
];

function WaveBand({
  position,
  fill,
}: {
  position: "top" | "bottom";
  fill: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-x-0 overflow-hidden leading-none",
        position === "top" ? "top-0" : "bottom-0 rotate-180"
      )}
    >
      <div className="relative h-16 w-full md:h-24">
        <div className="wave-track absolute inset-y-0 left-0 flex h-full w-[200%]">
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="h-full w-1/2"
          >
            <path
              d="M0,36 C180,80 360,4 540,40 C720,76 900,8 1080,36 C1260,64 1380,12 1440,32 L1440,0 L0,0 Z"
              fill={fill}
            />
          </svg>
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="h-full w-1/2"
          >
            <path
              d="M0,36 C180,80 360,4 540,40 C720,76 900,8 1080,36 C1260,64 1380,12 1440,32 L1440,0 L0,0 Z"
              fill={fill}
            />
          </svg>
        </div>
        <div className="wave-track-slow absolute inset-y-0 left-0 flex h-full w-[200%] opacity-60">
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="h-full w-1/2"
          >
            <path
              d="M0,48 C200,8 400,72 720,40 C1040,8 1240,72 1440,28 L1440,0 L0,0 Z"
              fill={fill}
            />
          </svg>
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="h-full w-1/2"
          >
            <path
              d="M0,48 C200,8 400,72 720,40 C1040,8 1240,72 1440,28 L1440,0 L0,0 Z"
              fill={fill}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function MigrationSection() {
  return (
    <section className="relative overflow-hidden bg-black pt-24 pb-20 text-white md:pt-32 md:pb-28">
      <WaveBand position="top" fill="#eef2ff" />
      <WaveBand position="bottom" fill="#ffffff" />

      {/* Background radial gradient ambient light */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Left Column: Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
              Switch to HostHumble with zero downtime
            </h2>

            <p className="text-sm text-gray-400 sm:text-base">
              Our experts migrate your site for free — no data loss, no hassle.
            </p>

            <div className="space-y-4 pt-2">
              <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wide">
                Why you can migrate with confidence
              </h3>

              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check className="h-4 w-4 shrink-0 text-emerald-400 stroke-[2.5]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 space-y-3">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg px-8 py-6 text-base"
              >
                <Link href="#migrate">Migrate Now</Link>
              </Button>

              <p className="text-xs text-gray-500">
                Free migration • Zero downtime
              </p>
            </div>
          </div>

          {/* Right Column: Graphic / Image Showcase */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Outer dark container frame */}
            <div className="relative w-full max-w-lg rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/80 p-4 border border-slate-800/80 shadow-2xl">
              
              {/* Floating Badge 1: Top Left Site Migration Progress */}
              <div className="absolute left-2 top-8 z-20 w-52 rounded-xl bg-slate-950/90 p-3 backdrop-blur-md border border-slate-800 shadow-xl">
                <div className="flex items-center justify-between text-xs font-medium text-gray-300 mb-1.5">
                  <span>Site Migration</span>
                  <span className="text-emerald-400 font-semibold">90%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full w-[90%] rounded-full bg-gradient-to-r from-emerald-500 to-teal-400" />
                </div>
              </div>

              {/* Main Professional Image Frame */}
              <div className="relative h-[380px] sm:h-[420px] w-full overflow-hidden rounded-xl border border-slate-700/60 shadow-inner">
                <Image
                  src="https://www.milesweb.in/assets/img/hosting/migration.avif"
                  alt="Professional Expert"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating Badge 2: Bottom Left Analytics Card */}
              <div className="absolute -bottom-4 left-4 z-20 w-48 rounded-xl bg-slate-950/95 p-3.5 backdrop-blur-md border border-slate-800 shadow-xl">
                <p className="text-[11px] text-gray-400 font-medium">Site Migration</p>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-white">356</span>
                  <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/50">Active</span>
                </div>
                <div className="mt-2 h-6 w-full flex items-end gap-1">
                  <div className="h-2/5 w-full bg-blue-500/30 rounded-xs" />
                  <div className="h-3/5 w-full bg-blue-500/50 rounded-xs" />
                  <div className="h-4/5 w-full bg-blue-500/70 rounded-xs" />
                  <div className="h-full w-full bg-emerald-400 rounded-xs" />
                </div>
              </div>

              {/* Guarantee Tag */}
              <div className="mt-6 flex items-center justify-end gap-2 text-xs text-gray-400 pr-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>30-day money-back guarantee</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}