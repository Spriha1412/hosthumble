'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, ChevronDown } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

type BillingCycle = '1' | '12' | '36'

interface PlanData {
    originalPrice?: string
    price: string
    discount?: string
    totalPay?: string
    badgeNote?: string
}

interface PlanConfig {
    key: 'Starter' | 'Premium' | 'Business' | 'Cloud Startup'
    title: string
    description: string
    features: string[]
    popular?: boolean
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

const planConfigs: PlanConfig[] = [
    {
        key: 'Starter',
        title: 'Starter',
        description: 'Great for first-time users.',
        features: [
            '1 website',
            'Free domain for 1 year',
            '10 GB NVMe storage',
            '1 email account Free forever',
            'Daily backups',
            'Free SSL for your website',
            'WordPress ready',
            'AI builder 50 credits',
            'AI agent for WordPress',
            'Priority 24/7 expert support',
        ],
    },
    {
        key: 'Premium',
        title: 'Premium',
        description: 'Best for blogs & startup websites.',
        popular: true,
        features: [
            '25 websites',
            'Free domain for 1 year',
            '50 GB NVMe storage',
            '50 email accounts Free forever',
            'Daily backups',
            'Free SSL for every website',
            'WordPress ready',
            'AI builder 50 credits',
            'AI agent for WordPress',
            'Priority 24/7 expert support',
        ],
    },
    {
        key: 'Business',
        title: 'Business',
        description: 'Node.js ready hosting.',
        features: [
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
            '5 Node.js web apps New',
        ],
    },
    {
        key: 'Cloud Startup',
        title: 'Cloud Startup',
        description: '20x more power with cloud hosting.',
        features: [
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
            '5 Node.js web apps New',
        ],
    },
]

function FeatureItem({ item, inverted = false }: { item: string; inverted?: boolean }) {
    const description = featureDescriptions[item] || 'Included with this hosting plan.'

    return (
        <li className={cn('border-b border-dotted pb-2 last:border-0 last:pb-0', inverted ? 'border-white/25' : 'border-gray-200')}>
            <Tooltip>
                <TooltipTrigger className="w-full text-left">
                    <div className={cn('flex w-full cursor-help items-center gap-2 rounded transition-colors', inverted ? 'hover:text-white/80' : 'hover:text-black/70')}>
                        <Check className={cn('size-3 shrink-0', inverted ? 'text-white' : 'text-black')} />
                        <span>{item}</span>
                    </div>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-[240px] bg-black p-2.5 text-xs text-white leading-snug shadow-xl">
                    <p>{description}</p>
                </TooltipContent>
            </Tooltip>
        </li>
    )
}

function PlanCard({
    plan,
    currentData,
}: {
    plan: PlanConfig
    currentData: PlanData
}) {
    const popular = Boolean(plan.popular)

    return (
        <Card
            className={cn(
                'pricing-stack-card flex h-full w-full shrink-0 cursor-pointer flex-col justify-between transition-all duration-300 ease-out md:hover:-translate-y-2 md:hover:scale-[1.03] md:hover:shadow-2xl',
                popular
                    ? 'relative overflow-visible border-transparent bg-gradient-to-br from-[#061433] via-[#1e3a8a] to-[#4169E1] text-white shadow-xl'
                    : 'border-gray-200 bg-white text-black md:hover:bg-slate-50'
            )}
        >
            {popular && (
                <span className="absolute inset-x-0 -top-3 z-10 mx-auto flex h-6 w-fit items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#1e3a8a] shadow-md">
                    MOST POPULAR
                </span>
            )}

            <div>
                <CardHeader>
                    <CardTitle className={cn('font-medium', popular ? 'text-white' : 'text-black')}>{plan.title}</CardTitle>
                    <CardDescription className={cn('text-sm', popular ? 'text-white/80' : 'text-black/70')}>{plan.description}</CardDescription>

                    {currentData.discount && (
                        <span className={cn('mt-2 w-fit rounded-full px-2 py-0.5 text-xs font-medium', popular ? 'bg-white/15 text-white' : 'bg-green-100 text-green-700')}>
                            {currentData.discount}
                        </span>
                    )}

                    <div className="my-3 flex items-baseline gap-2">
                        {currentData.originalPrice && (
                            <span className={cn('text-sm line-through', popular ? 'text-white/50' : 'text-black/50')}>₹{currentData.originalPrice}</span>
                        )}
                        <span className={cn('text-2xl font-semibold', popular ? 'text-white' : 'text-black')}>₹{currentData.price}</span>
                        <span className={cn('text-sm', popular ? 'text-white/80' : 'text-black/70')}>/mo</span>
                    </div>

                    {currentData.totalPay && (
                        <CardDescription className={cn('mt-1 text-xs', popular ? 'text-white/75' : 'text-black/70')}>{currentData.totalPay}</CardDescription>
                    )}
                    {currentData.badgeNote && (
                        <CardDescription className={cn('mt-1 text-xs font-medium', popular ? 'text-white' : 'text-black')}>{currentData.badgeNote}</CardDescription>
                    )}
                </CardHeader>

                <CardContent className="space-y-4">
                    <hr className={cn('border-dashed', popular ? 'border-white/30' : 'border-gray-200')} />
                    <ul className={cn('list-outside space-y-3 text-sm', popular ? 'text-white' : 'text-black')}>
                        {plan.features.map((item, index) => (
                            <FeatureItem key={index} item={item} inverted={popular} />
                        ))}
                    </ul>
                </CardContent>
            </div>

            <CardFooter className="mt-auto pt-4">
                <Button className={cn('w-full', popular ? 'bg-white text-[#1e3a8a] hover:bg-blue-50' : 'bg-black text-white hover:bg-black/90')}>
                    <Link href="/">Choose Plan</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}

export default function Pricing() {
    const [billingCycle, setBillingCycle] = useState<BillingCycle>('1')
    const [activeCardIndex, setActiveCardIndex] = useState(1)
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const handleScroll = () => {
        if (!scrollContainerRef.current) return
        const container = scrollContainerRef.current
        const cards = Array.from(container.children) as HTMLElement[]
        if (cards.length === 0) return
        const center = container.scrollLeft + container.clientWidth / 2
        let closest = 0
        let closestDistance = Number.POSITIVE_INFINITY
        cards.forEach((card, index) => {
            const cardCenter = card.offsetLeft + card.offsetWidth / 2
            const distance = Math.abs(center - cardCenter)
            if (distance < closestDistance) {
                closestDistance = distance
                closest = index
            }
        })
        setActiveCardIndex(closest)
    }

    const scrollToCard = (index: number, behavior: ScrollBehavior = 'smooth') => {
        const container = scrollContainerRef.current
        const card = container?.children[index] as HTMLElement | undefined
        if (!container || !card) return
        const left = card.offsetLeft - (container.clientWidth - card.offsetWidth) / 2
        container.scrollTo({ left, behavior })
        setActiveCardIndex(index)
    }

    useEffect(() => {
        const run = () => {
            if (window.matchMedia('(max-width: 767px)').matches) {
                scrollToCard(1, 'auto')
            }
        }
        const frame = requestAnimationFrame(run)
        const timeout = window.setTimeout(run, 80)
        return () => {
            cancelAnimationFrame(frame)
            window.clearTimeout(timeout)
        }
    }, [])

    return (
        <section className="w-full overflow-x-clip py-10 text-slate-900 md:overflow-visible md:py-15" id="pricing">
            <div className="mx-auto max-w-[95%] px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl space-y-6 text-center">
                    <h1 className="text-4xl font-semibold text-black lg:text-5xl">Pricing that Scales with You</h1>
                    <p className="text-black">HostHumble provide Four Types of Plans Free to Premium Plans. Find Best plan according to your needs.</p>
                    <div className="flex justify-center pt-4">
                        <div className="w-full max-w-md px-1">
                        <DropdownMenu>
                            <DropdownMenuTrigger
                                className={cn(
                                    buttonVariants({ variant: 'outline' }),
                                    'h-14 w-full justify-between border-gray-200 !bg-white px-6 text-base font-semibold text-black shadow-lg hover:!bg-gray-100 hover:!text-black focus-visible:ring-2 focus-visible:ring-[#1e3a8a]'
                                )}
                            >
                                {billingCycle === "1"
                                    ? "1 Month"
                                    : billingCycle === "12"
                                        ? "12 Months"
                                        : "36 Months"}
                                <ChevronDown className="size-4 text-black" />
                            </DropdownMenuTrigger>

                            <DropdownMenuContent
                                align="center"
                                className="border-gray-200 bg-white text-black shadow-xl"
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
                </div>

                <TooltipProvider>
                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="-mx-4 mt-8 flex gap-4 overflow-x-auto snap-x snap-mandatory px-[11vw] pt-5 pb-6 scrollbar-none md:mx-0 md:mt-16 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4"
                >
                    {planConfigs.map((plan) => (
                        <div
                            key={plan.key}
                            className="w-[76vw] min-w-[76vw] snap-center shrink-0 md:w-auto md:min-w-0"
                        >
                            <PlanCard plan={plan} currentData={plansData[billingCycle][plan.key]} />
                        </div>
                    ))}
                </div>
                </TooltipProvider>

                <div className="mt-4 flex justify-center gap-2 md:hidden">
                    {planConfigs.map((plan, index) => (
                        <button
                            key={plan.key}
                            onClick={() => scrollToCard(index)}
                            aria-label={`Go to ${plan.title} plan`}
                            className={`h-2.5 rounded-full transition-all duration-300 ${
                                activeCardIndex === index
                                    ? 'w-6 bg-[#1e3a8a]'
                                    : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
