import { Star } from "lucide-react";

export default function TrustBadge() {
  return (
    <div className="mx-auto flex w-full max-w-5xl items-center justify-center gap-6 rounded-2xl border border-gray-100 bg-white px-5 py-3.5 shadow-lg shadow-black/5 sm:px-6 md:justify-between md:gap-8 md:py-4">
      {/* Section 1: Google Rating (Visible on all screen sizes) */}
      <div className="flex items-center gap-3">
        {/* Google Logo SVG */}
        <svg className="h-7 w-auto shrink-0" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
          />
        </svg>

        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-bold text-gray-900">4.6/5</span>
            <div className="flex items-center text-amber-400">
              <Star className="h-4 w-4 fill-amber-400 stroke-amber-400" />
              <Star className="h-4 w-4 fill-amber-400 stroke-amber-400" />
              <Star className="h-4 w-4 fill-amber-400 stroke-amber-400" />
              <Star className="h-4 w-4 fill-amber-400 stroke-amber-400" />
              <Star className="h-4 w-4 fill-amber-400/30 stroke-amber-400" />
            </div>
          </div>
          <p className="text-xs text-gray-500 whitespace-nowrap">
            Based on 7,111 reviews
          </p>
        </div>
      </div>

      {/* Divider 1 */}
      <div className="hidden md:block h-8 w-px bg-gray-200" />

      {/* Section 2: Trust Metric (Hidden on Mobile) */}
      <div className="hidden md:block text-sm text-gray-700 whitespace-nowrap">
        Trusted by <span className="font-bold text-gray-900">1M+ websites</span>
      </div>

      {/* Divider 2 */}
      <div className="hidden md:block h-8 w-px bg-gray-200" />

      {/* Section 3: Country / Establishment (Hidden on Mobile) */}
      <div className="hidden md:flex items-center gap-2 text-sm text-gray-700 whitespace-nowrap">
        <span className="text-base leading-none">🇮🇳</span>
        <span>
          Indian company since <span className="font-bold text-gray-900">2019</span>
        </span>
      </div>
    </div>
  );
}