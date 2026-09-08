import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

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

export default function FAQAndCTA() {
  return (
    <section className="bg-white py-16 md:py-24 text-black space-y-20">
      
      {/* FAQ Section - Maintained inside max-w-5xl */}
      <div className="mx-auto max-w-5xl px-6 space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Got questions? We've got answers to help you choose the best web hosting plan.
          </p>
        </div>

        <Accordion className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl border border-gray-200 px-6 bg-white shadow-xs"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 text-base md:text-lg hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm md:text-base leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* CTA Banner Section - Expanded Container */}
      <div className="mx-auto max-w-[95%] sm:max-w-[90%] lg:max-w-7xl px-4 sm:px-6">
        <div className="w-full relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 p-8 sm:p-12 lg:p-16 text-white shadow-xl">
          {/* Subtle diagonal stripe pattern overlay */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 10px)`
            }}
          />

          <div className="relative z-10 max-w-2xl space-y-6">
            <p className="text-sm font-medium tracking-wide text-blue-100">
              Big Savings. Simple Pricing.
            </p>

            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl leading-tight">
              Save up to 80% on web hosting plans today.
            </h3>

            <div className="pt-2 space-y-3">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-xl px-8 py-6 text-base shadow-md"
              >
                <Link href="#pricing">Claim Offer Now</Link>
              </Button>

              <p className="text-xs text-blue-100/90 font-medium">
                30-day money-back guarantee • No hidden charges
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}