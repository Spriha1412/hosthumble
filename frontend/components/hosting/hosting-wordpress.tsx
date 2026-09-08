import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Shield } from "lucide-react";

export default function WordpressHosting() {
  return (
    <main className="overflow-hidden min-h-screen">
      <section className="relative flex items-center justify-center">
        <div className="relative py-20 lg:py-20 w-full">
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
                    Offer
                  </span>
                  <span>Up to 80% Off</span>
                  <span className="bg-(--color-border) block h-4 w-px"></span>
                  <ArrowRight className="size-4" />
                </Link>

                {/* Main Heading */}
                <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl font-sans">
                  WordPress Hosting India
                </h1>

                {/* Subtitle */}
                <p className="mt-4 text-lg text-muted-foreground font-sans">
                  Create Your WordPress site with AI in minutes
                </p>

                {/* Feature Bullet Points */}
                <ul className="mt-6 space-y-3 text-sm font-medium">
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span>Optimized for speed from day one</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span>Free domain &amp; SSL included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span>No technical skills required</span>
                  </li>
                </ul>

                {/* Price Box & CTA */}
                <div className="mt-8 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold">₹69</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>

                <Link
                  href="/order"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-(--radius) bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                >
                  View Plans
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
              <div className="relative flex items-center justify-center lg:justify-end w-full h-full">
                {/* Removed max-w-lg and aspect-square to let the image naturally scale up */}
                <div className="relative w-full aspect-[1280/930] overflow-hidden rounded-2xl">
                  <Image
                    src="https://www.milesweb.in/assets/img/wordpress-hosting/managed-wordpress.avif"
                    alt="Hosting Dashboard Preview"
                    fill
                    className="object-cover w-full h-full"
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