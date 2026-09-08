import React from "react";
import { RefreshCw, Gauge, Zap, Server } from "lucide-react";

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

export default function IncludedFeatures() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
        
        {/* Visible Black Grid Lines Layer */}
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-8 md:p-12">
          {/* Horizontal Background Lines */}
          <div className="w-full border-t border-dashed border-black/25" />
          <div className="w-full border-t border-dashed border-black/25" />
          <div className="w-full border-t border-dashed border-black/25" />
          <div className="w-full border-t border-dashed border-black/25" />
        </div>

        {/* Soft blue ambient glow */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />

        {/* Main Content Grid (Elevated via z-10) */}
        <div className="relative z-10 grid gap-10 lg:grid-cols-5 lg:items-center">
          
          {/* Main Headline */}
          <div className="lg:col-span-2">
            <div className="inline-block rounded-2xl bg-white p-2 sm:p-4 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl leading-[1.15]">
                Included with Every <br className="hidden sm:inline" />
                <span className="text-blue-600">Web Hosting Plan</span>
              </h2>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="relative flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 border border-slate-200">
                    <Icon className="h-6 w-6 text-slate-900 stroke-[1.75]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}