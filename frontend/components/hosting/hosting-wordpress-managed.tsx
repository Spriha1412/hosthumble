import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Shield } from "lucide-react";

export default function WordpressHostingManaged() {
  return (
    <main className="overflow-hidden min-h-screen">
      <section className="relative flex items-center justify-center">
        <div className="relative py-17 lg:py-17 w-full">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            {/* 2-Column Grid */}
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
              
              {/* Left Column: Content */}
              <div className="flex flex-col items-start text-left">
                {/* Offer Badge */}
                <Link
                  href="/"
                  className="rounded-(--radius) flex w-fit items-center gap-2 border p-1 pr-3 text-sm font-medium"
                >
                  <span className="bg-primary/10 text-primary rounded-full px-2 py-0.5 text-xs font-semibold">
                    Managed
                  </span>
                  <span>Fully managed cloud hosting for WordPress</span>
                  <span className="bg-(--color-border) block h-4 w-px"></span>
                  <ArrowRight className="size-4" />
                </Link>

                {/* Main Heading */}
                <h1 className="mt-6 text-xl font-bold tracking-tight sm:text-5xl xl:text-6xl font-sans">
                  WordPress hosting built for serious websites
                </h1>

                {/* Subtitle */}
                <p className="mt-4 text-lg text-muted-foreground font-sans">
                  Managed WordPress cloud hosting for speed, uptime, security
                  and performance.
                </p>

                {/* Feature Bullet Points */}
                <ul className="mt-6 space-y-3 text-sm font-medium">
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span>Dedicated cloud resources for better performance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span>Free migration handled by WordPress experts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span>Daily backups, SSL and malware protection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span>Priority support for business-critical websites</span>
                  </li>
                </ul>

                {/* Price Box & CTA */}
                <div className="mt-8 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold">₹299</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>

                <Link
                  href="/order"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-(--radius) bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                >
                  Start Now
                  <ArrowRight className="size-4" />
                </Link>

                <div className="mt-5 flex items-center gap-2">
                  <Shield className="text-green-500 h-5 w-5 shrink-0" />
                  <span className="text-xl font-bold">
                    30-day money-back guarantee • Cancel anytime
                  </span>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="relative flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-lg aspect-square overflow-hidden rounded-2xl border bg-muted/50 shadow-2xl">
                  <Image
                    src="https://www.milesweb.in/assets/img/wordpress-hosting/managed-wordpress.avif" // Replace with your image path
                    alt="Managed WordPress Cloud Hosting Dashboard Preview"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}