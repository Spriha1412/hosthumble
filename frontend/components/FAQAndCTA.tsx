"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is web hosting and how does it work?",
    answer:
      "Web hosting is an online service that enables you to publish your website files onto the internet. When you buy a hosting plan, you rent space on a physical server to store all your website's data, images, and code.",
  },
  {
    question: "How do I migrate my existing website to HostHumble?",
    answer:
      "We offer free website migration! Our team of experts handles the entire migration process with zero downtime and no data loss.",
  },
  {
    question: "Is a free SSL certificate included with every plan?",
    answer:
      "Yes, all HostHumble hosting plans include free unlimited Let's Encrypt SSL certificates for all your domains and subdomains.",
  },
  {
    question: "What kind of customer support do you offer?",
    answer:
      "We provide 24/7/365 expert technical support via live chat, ticketing system, and email to ensure your website stays up and running smoothly.",
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer:
      "Yes, we offer an unconditional 30-day money-back guarantee on all our web hosting plans. No questions asked.",
  },
];

function canHover() {
  return typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export default function FAQAndCTA() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 md:py-24 text-black space-y-20">
      <div className="mx-auto max-w-5xl px-6 space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Got questions? We&apos;ve got answers to help you choose the best web hosting plan.
          </p>
        </div>

        <div
          className="w-full space-y-3"
          onMouseLeave={() => {
            if (canHover()) setOpenIndex(null);
          }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                onMouseEnter={() => setOpenIndex(index)}
                className={cn(
                  "rounded-xl border bg-white px-6 shadow-xs transition-colors duration-300",
                  isOpen ? "border-[#4169E1]/30 bg-[#f4f7ff]" : "border-gray-200"
                )}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onFocus={() => setOpenIndex(index)}
                  onClick={() => {
                    setOpenIndex((current) => (current === index ? null : index));
                  }}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left font-semibold text-gray-900 text-base md:text-lg"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "size-4 shrink-0 text-muted-foreground transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pb-4 text-gray-600 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mx-auto max-w-[95%] sm:max-w-[90%] lg:max-w-7xl px-4 sm:px-6">
        <div className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-r from-[#061433] via-[#1e3a8a] to-[#4169E1] p-8 sm:p-12 lg:p-16 text-white shadow-xl">
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 10px)`,
            }}
          />

          <div className="relative z-10 max-w-2xl space-y-6">
            <p className="text-sm font-medium tracking-wide text-white/80">
              Big Savings. Simple Pricing.
            </p>

            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl leading-tight">
              Save up to 80% on web hosting plans today.
            </h3>

            <div className="space-y-3 pt-2">
              <Button
                size="lg"
                className="rounded-xl bg-white px-8 py-6 text-base font-semibold text-[#1e3a8a] shadow-md hover:bg-blue-50"
              >
                <Link href="#pricing">Claim Offer Now</Link>
              </Button>

              <p className="text-xs font-medium text-white/80">
                30-day money-back guarantee • No hidden charges
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
