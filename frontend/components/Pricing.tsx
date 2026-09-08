'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, ChevronDown } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

type BillingCycle = '1' | '12' | '36'

interface PlanData {
    originalPrice?: string
    price: string
    discount?: string
    totalPay?: string
    badgeNote?: string
}

const featureDescriptions: Record<string, string> = {
    '1 website': 'Host 1 fully functional website with dedicated space and optimized performance settings.',
    '25 websites': 'Host up to 25 separate websites under a single account with unified management.',
    '50 websites': 'Host up to 50 websites with isolated application environments and high scalability.',
    'Free domain for 1 year': 'Get a free custom domain registration (.com, .in, etc.) included for your first year.',
    '10 GB NVMe storage': 'Ultra-fast NVMe SSD storage ensuring blazing fast file access and rapid page loads.',
    '50 GB NVMe storage': 'Ample high-speed NVMe SSD storage designed for growing media assets and databases.',
    '100 GB NVMe storage': 'Enterprise-grade NVMe storage for data-heavy sites and demanding business web applications.',
    '1 email account Free forever': 'Professional business email address matching your domain at no recurring cost.',
    '50 email accounts Free forever': 'Create up to 50 custom domain email accounts with built-in spam protection.',
    '150 email accounts Free forever': 'High-volume business email suite for larger teams with Webmail and IMAP access.',
    'Daily backups': 'Automatic daily site backups kept securely so you can restore your site anytime in one click.',
    'Daily & On-Demand Backups': 'Automated daily backups plus instant manual snapshots before making major updates.',
    'Free SSL for your website': 'Automated SSL security certificate keeping your site encrypted and HTTPS secure.',
    'Free SSL for every website': 'Unlimited free SSL certificates automatically applied to every domain you host.',
    'WordPress ready': '1-click WordPress installer with pre-configured caching and performance optimizations.',
    'AI builder 50 credits': 'Use AI tools to auto-generate page layouts, tailored copy, and royalty-free graphics.',
    'AI agent for WordPress': 'Smart AI assistant inside your WordPress dashboard to assist with SEO and updates.',
    'Priority 24/7 expert support': 'Round-the-clock access to senior technical specialists via live chat and ticket queue.',
    '5 Node.js web apps New': 'Run custom server-side Node.js applications directly on your web hosting environment.',
}

const plansData: Record<BillingCycle, Record<string, PlanData>> = {
    '1': {
        Starter: { price: '399' },
        Premium: { price: '499' },
        Business: { price: '699' },
        'Cloud Startup': { price: '1,499' },
    },
    '12': {
        Starter: {
            originalPrice: '399',
            price: '159',
            discount: '60% OFF',
            totalPay: 'For 12 months, you pay ₹1,908.',
        },
        Premium: {
            originalPrice: '499',
            price: '189',
            discount: '62% OFF',
            totalPay: 'For 12 months, you pay ₹2,268.',
        },
        Business: {
            originalPrice: '699',
            price: '299',
            discount: '57% OFF',
            totalPay: 'For 12 months, you pay ₹3,588.',
        },
        'Cloud Startup': {
            originalPrice: '1,499',
            price: '749',
            discount: '50% OFF',
            totalPay: 'For 12 months, you pay ₹8,988.',
        },
    },
    '36': {
        Starter: {
            originalPrice: '399',
            price: '69',
            discount: '83% OFF',
            totalPay: 'For 36 months, you pay ₹2,484.',
        },
        Premium: {
            originalPrice: '499',
            price: '99',
            discount: '80% OFF',
            totalPay: 'For 36 months, you pay ₹3,564.',
            badgeNote: '+2 mo free Limited-Time Deal',
        },
        Business: {
            originalPrice: '699',
            price: '149',
            discount: '79% OFF',
            totalPay: 'For 36 months, you pay ₹5,364.',
            badgeNote: '+2 mo free',
        },
        'Cloud Startup': {
            originalPrice: '1,499',
            price: '299',
            discount: '80% OFF',
            totalPay: 'For 36 months, you pay ₹10,764.',
            badgeNote: '+2 mo free',
        },
    },
}

function FeatureItem({ item }: { item: string }) {
    const description = featureDescriptions[item] || 'Included with this hosting plan.'

    return (
        <li className="border-b border-dotted border-gray-200 pb-2 last:border-0 last:pb-0">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger className="w-full text-left">
                        <div className="flex w-full cursor-help items-center gap-2 rounded transition-colors hover:text-black/70">
                            <Check className="size-3 shrink-0 text-black" />
                            <span>{item}</span>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="max-w-[240px] bg-black p-2.5 text-xs text-white leading-snug shadow-xl">
                        <p>{description}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </li>
    )
}

export default function Pricing() {
    const [billingCycle, setBillingCycle] = useState<BillingCycle>('1')
    const [activeCardIndex, setActiveCardIndex] = useState(0)
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    // Handle scroll position to activate active dot
    const handleScroll = () => {
        if (!scrollContainerRef.current) return
        const container = scrollContainerRef.current
        const scrollPosition = container.scrollLeft
        const cardWidth = container.firstElementChild ? (container.firstElementChild as HTMLElement).offsetWidth + 24 : container.clientWidth
        const newIndex = Math.round(scrollPosition / cardWidth)
        setActiveCardIndex(Math.min(Math.max(newIndex, 0), 3))
    }

    // Scroll directly to clicked dot card
    const scrollToCard = (index: number) => {
        if (!scrollContainerRef.current) return
        const container = scrollContainerRef.current
        const cardWidth = container.firstElementChild ? (container.firstElementChild as HTMLElement).offsetWidth + 24 : container.clientWidth
        container.scrollTo({
            left: cardWidth * index,
            behavior: 'smooth',
        })
    }

    return (
        <section className="py-10 text-white w-full md:py-15 overflow-hidden" id="pricing">
            <div className="mx-auto max-w-[95%] px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl space-y-6 text-center">
                    <h1 className="text-4xl font-semibold text-black lg:text-5xl">Pricing that Scales with You</h1>
                    <p className="text-black">HostHumble provide Four Types of Plans Free to Premium Plans. Find Best plan according to your needs.</p>
                    <div className="flex justify-center pt-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Button
                                    variant="outline"
                                    className="h-14 w-[250px] justify-between border-gray-200 !bg-white px-4 text-base font-semibold text-black shadow-lg hover:!bg-gray-100 hover:!text-black focus-visible:ring-2 focus-visible:ring-black"
                                >
                                    {billingCycle === "1"
                                        ? "1 Month"
                                        : billingCycle === "12"
                                            ? "12 Months"
                                            : "36 Months"}
                                    <ChevronDown className="size-4 text-black" />
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent
                                align="center"
                                className="w-[250px] border-gray-200 bg-white text-black shadow-xl"
                            >
                                <DropdownMenuRadioGroup
                                    value={billingCycle}
                                    onValueChange={(value) => setBillingCycle(value as BillingCycle)}
                                >
                                    <DropdownMenuRadioItem
                                        value="1"
                                        className="cursor-pointer font-medium text-black focus:bg-gray-100 focus:text-black"
                                    >
                                        1 Month
                                    </DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem
                                        value="12"
                                        className="cursor-pointer font-medium text-black focus:bg-gray-100 focus:text-black"
                                    >
                                        12 Months
                                    </DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem
                                        value="36"
                                        className="cursor-pointer font-medium text-black focus:bg-gray-100 focus:text-black"
                                    >
                                        36 Months
                                    </DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                {/* Mobile Horizontal Scroll Slider / Desktop Grid Container */}
                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="mt-8 flex gap-6 overflow-x-auto snap-x snap-mandatory pt-4 pb-6 scrollbar-none md:mt-16 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 lg:grid-cols-4"
                >
                    {/* Starter Card */}
                    {(() => {
                        const currentData = plansData[billingCycle]['Starter']
                        return (
                            <Card className="min-w-[85vw] sm:min-w-[320px] md:min-w-0 snap-center shrink-0 flex flex-col justify-between border-gray-200 bg-white text-black transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl cursor-pointer">
                                <div>
                                    <CardHeader>
                                        <CardTitle className="font-medium text-black">Starter</CardTitle>
                                        <CardDescription className="text-sm text-black/70">Great for first-time users.</CardDescription>

                                        {currentData.discount && (
                                            <span className="mt-2 w-fit rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                                                {currentData.discount}
                                            </span>
                                        )}

                                        <div className="my-3 flex items-baseline gap-2">
                                            {currentData.originalPrice && (
                                                <span className="text-sm text-black/50 line-through">₹{currentData.originalPrice}</span>
                                            )}
                                            <span className="text-2xl font-semibold text-black">₹{currentData.price}</span>
                                            <span className="text-sm text-black/70">/mo</span>
                                        </div>

                                        {currentData.totalPay && (
                                            <CardDescription className="text-xs text-black/70 mt-1">{currentData.totalPay}</CardDescription>
                                        )}
                                        {currentData.badgeNote && (
                                            <CardDescription className="text-xs font-medium text-black mt-1">{currentData.badgeNote}</CardDescription>
                                        )}
                                    </CardHeader>

                                    <CardContent className="space-y-4">
                                        <hr className="border-dashed border-gray-200" />
                                        <ul className="list-outside space-y-3 text-sm text-black">
                                            {[
                                                '1 website',
                                                'Free domain for 1 year',
                                                '10 GB NVMe storage',
                                                '1 email account Free forever',
                                                'Daily backups',
                                                'Free SSL for your website',
                                                'WordPress ready',
                                                'AI builder 50 credits',
                                                'AI agent for WordPress',
                                                'Priority 24/7 expert support'
                                            ].map((item, index) => (
                                                <FeatureItem key={index} item={item} />
                                            ))}
                                        </ul>
                                    </CardContent>
                                </div>

                                <CardFooter className="mt-auto pt-4">
                                    <Button className="w-full bg-black text-white hover:bg-black/90">
                                        <Link href="/">Choose Plan</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        )
                    })()}

                    {/* Premium Card */}
                    {(() => {
                        const currentData = plansData[billingCycle]['Premium']
                        return (
                            <Card className="min-w-[85vw] sm:min-w-[320px] md:min-w-0 snap-center shrink-0 relative flex flex-col justify-between overflow-visible border-black bg-white text-black ring-1 ring-black transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl cursor-pointer">
                                <span className="absolute -top-3 inset-x-0 mx-auto flex h-6 w-fit items-center rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-black ring-1 ring-inset ring-white/20 z-10">
                                    MOST POPULAR
                                </span>

                                <div>
                                    <CardHeader>
                                        <CardTitle className="font-medium text-black">Premium</CardTitle>
                                        <CardDescription className="text-sm text-black/70">Best for blogs & startup websites.</CardDescription>

                                        {currentData.discount && (
                                            <span className="mt-2 w-fit rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                                                {currentData.discount}
                                            </span>
                                        )}

                                        <div className="my-3 flex items-baseline gap-2">
                                            {currentData.originalPrice && (
                                                <span className="text-sm text-black/50 line-through">₹{currentData.originalPrice}</span>
                                            )}
                                            <span className="text-2xl font-semibold text-black">₹{currentData.price}</span>
                                            <span className="text-sm text-black/70">/mo</span>
                                        </div>

                                        {currentData.totalPay && (
                                            <CardDescription className="text-xs text-black/70 mt-1">{currentData.totalPay}</CardDescription>
                                        )}
                                        {currentData.badgeNote && (
                                            <CardDescription className="text-xs font-medium text-black mt-1">{currentData.badgeNote}</CardDescription>
                                        )}
                                    </CardHeader>

                                    <CardContent className="space-y-4">
                                        <hr className="border-dashed border-gray-200" />
                                        <ul className="list-outside space-y-3 text-sm text-black">
                                            {[
                                                '25 websites',
                                                'Free domain for 1 year',
                                                '50 GB NVMe storage',
                                                '50 email accounts Free forever',
                                                'Daily backups',
                                                'Free SSL for every website',
                                                'WordPress ready',
                                                'AI builder 50 credits',
                                                'AI agent for WordPress',
                                                'Priority 24/7 expert support'
                                            ].map((item, index) => (
                                                <FeatureItem key={index} item={item} />
                                            ))}
                                        </ul>
                                    </CardContent>
                                </div>

                                <CardFooter className="mt-auto pt-4">
                                    <Button className="w-full bg-black text-white hover:bg-black/90">
                                        <Link href="/">Choose Plan</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        )
                    })()}

                    {/* Business Card */}
                    {(() => {
                        const currentData = plansData[billingCycle]['Business']
                        return (
                            <Card className="min-w-[85vw] sm:min-w-[320px] md:min-w-0 snap-center shrink-0 flex flex-col justify-between border-gray-200 bg-white text-black transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl cursor-pointer">
                                <div>
                                    <CardHeader>
                                        <CardTitle className="font-medium text-black">Business</CardTitle>
                                        <CardDescription className="text-sm text-black/70">Node.js ready hosting.</CardDescription>

                                        {currentData.discount && (
                                            <span className="mt-2 w-fit rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                                                {currentData.discount}
                                            </span>
                                        )}

                                        <div className="my-3 flex items-baseline gap-2">
                                            {currentData.originalPrice && (
                                                <span className="text-sm text-black/50 line-through">₹{currentData.originalPrice}</span>
                                            )}
                                            <span className="text-2xl font-semibold text-black">₹{currentData.price}</span>
                                            <span className="text-sm text-black/70">/mo</span>
                                        </div>

                                        {currentData.totalPay && (
                                            <CardDescription className="text-xs text-black/70 mt-1">{currentData.totalPay}</CardDescription>
                                        )}
                                        {currentData.badgeNote && (
                                            <CardDescription className="text-xs font-medium text-black mt-1">{currentData.badgeNote}</CardDescription>
                                        )}
                                    </CardHeader>

                                    <CardContent className="space-y-4">
                                        <hr className="border-dashed border-gray-200" />
                                        <ul className="list-outside space-y-3 text-sm text-black">
                                            {[
                                                '50 websites',
                                                'Free domain for 1 year',
                                                '100 GB NVMe storage',
                                                '150 email accounts Free forever',
                                                'Daily & On-Demand Backups',
                                                'Free SSL for every website',
                                                'WordPress ready',
                                                'AI builder 50 credits',
                                                'AI agent for WordPress',
                                                'Priority 24/7 expert support',
                                                '5 Node.js web apps New'
                                            ].map((item, index) => (
                                                <FeatureItem key={index} item={item} />
                                            ))}
                                        </ul>
                                    </CardContent>
                                </div>

                                <CardFooter className="mt-auto pt-4">
                                    <Button className="w-full bg-black text-white hover:bg-black/90">
                                        <Link href="/">Choose Plan</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        )
                    })()}

                    {/* Cloud Startup Card */}
                    {(() => {
                        const currentData = plansData[billingCycle]['Cloud Startup']
                        return (
                            <Card className="min-w-[85vw] sm:min-w-[320px] md:min-w-0 snap-center shrink-0 flex flex-col justify-between border-gray-200 bg-white text-black transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl cursor-pointer">
                                <div>
                                    <CardHeader>
                                        <CardTitle className="font-medium text-black">Cloud Startup</CardTitle>
                                        <CardDescription className="text-sm text-black/70">20x more power with cloud hosting.</CardDescription>

                                        {currentData.discount && (
                                            <span className="mt-2 w-fit rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                                                {currentData.discount}
                                            </span>
                                        )}

                                        <div className="my-3 flex items-baseline gap-2">
                                            {currentData.originalPrice && (
                                                <span className="text-sm text-black/50 line-through">₹{currentData.originalPrice}</span>
                                            )}
                                            <span className="text-2xl font-semibold text-black">₹{currentData.price}</span>
                                            <span className="text-sm text-black/70">/mo</span>
                                        </div>

                                        {currentData.totalPay && (
                                            <CardDescription className="text-xs text-black/70 mt-1">{currentData.totalPay}</CardDescription>
                                        )}
                                        {currentData.badgeNote && (
                                            <CardDescription className="text-xs font-medium text-black mt-1">{currentData.badgeNote}</CardDescription>
                                        )}
                                    </CardHeader>

                                    <CardContent className="space-y-4">
                                        <hr className="border-dashed border-gray-200" />
                                        <ul className="list-outside space-y-3 text-sm text-black">
                                            {[
                                                '50 websites',
                                                'Free domain for 1 year',
                                                '100 GB NVMe storage',
                                                '150 email accounts Free forever',
                                                'Daily & On-Demand Backups',
                                                'Free SSL for every website',
                                                'WordPress ready',
                                                'AI builder 50 credits',
                                                'AI agent for WordPress',
                                                'Priority 24/7 expert support',
                                                '5 Node.js web apps New'
                                            ].map((item, index) => (
                                                <FeatureItem key={index} item={item} />
                                            ))}
                                        </ul>
                                    </CardContent>
                                </div>

                                <CardFooter className="mt-auto pt-4">
                                    <Button className="w-full bg-black text-white hover:bg-black/90">
                                        <Link href="/">Choose Plan</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        )
                    })()}

                </div>

                {/* Mobile 4-Dot Carousel Indicators */}
                <div className="mt-4 flex justify-center gap-2 md:hidden">
                    {[0, 1, 2, 3].map((index) => (
                        <button
                            key={index}
                            onClick={() => scrollToCard(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            className={`h-2.5 rounded-full transition-all duration-300 ${
                                activeCardIndex === index
                                    ? 'w-6 bg-black'
                                    : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}