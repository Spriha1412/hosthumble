'use client'

import { useState } from 'react'
import { Gift, Globe, Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const popularTlds = ['.in', '.com', '.co', '.ai','.dev', '.shop', '.info', '.org']

export default function DomainSearchHero() {
  const [domainInput, setDomainInput] = useState('')

  function applyTld(tld: string) {
    setDomainInput((current) => {
      const withoutTld = current.replace(/\.(?:[a-z]{2,}(?:\.[a-z]{2,})?)$/i, '')
      return `${withoutTld}${tld}`
    })
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-hero text-hero-foreground">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 size-[520px] rounded-full bg-hero-blue/30 blur-[120px]" />
        <div className="absolute bottom-0 right-0 size-[420px] rounded-full bg-hero-orange/20 blur-[120px]" />
      </div>

      <section className="relative flex min-h-screen items-center justify-center px-6">
        <div className="mx-auto w-full max-w-2xl py-24 text-center">
          <p className="text-sm text-hero-foreground/60">
            Register domain names, search instantly
          </p>

          <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
            Buy &amp; Register Domain Names With Ease
          </h1>

          <p className="mt-6 text-pretty text-base leading-relaxed text-hero-foreground/70 sm:text-lg">
            Build your site with Vibe Coding + get a free domain.
          </p>

          <form
            onSubmit={(event) => event.preventDefault()}
            className="mt-10 w-full rounded-3xl border border-hero-border bg-background p-2 shadow-2xl"
          >
            <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
              <label className="flex flex-1 items-center gap-3 px-3 py-2" htmlFor="domain-search">
                <Globe aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
                <span className="sr-only">Domain name</span>
                <Input
                  id="domain-search"
                  type="text"
                  value={domainInput}
                  onChange={(event) => setDomainInput(event.target.value)}
                  placeholder="Type the domain you want"
                  className="h-9 border-0 bg-transparent px-0 text-base shadow-none focus-visible:ring-0"
                />
              </label>
              <Button type="submit" size="lg" className="gap-2 rounded-xl active:scale-95">
                <Search aria-hidden="true" data-icon="inline-start" />
                Search Domains
              </Button>
            </div>
          </form>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3" aria-label="Popular domain extensions">
            {popularTlds.map((tld) => (
              <Button
                key={tld}
                type="button"
                variant="secondary"
                size="sm"
                onClick={() => applyTld(tld)}
                className="rounded-lg bg-hero-pill font-semibold text-hero-pill-foreground hover:bg-hero-pill/80"
              >
                {tld}
              </Button>
            ))}
            <Button type="button" variant="secondary" size="sm" className="rounded-lg bg-hero-pill font-semibold text-hero-pill-foreground hover:bg-hero-pill/80">
              + View more
            </Button>
          </div>

          <div className="mt-14 flex justify-center">
            <div className="flex items-center gap-2 rounded-full border border-hero-border bg-hero-banner px-5 py-2.5 text-sm text-hero-foreground/90">
              <Gift aria-hidden="true" className="size-4 text-hero-green" />
              <span>Get a free domain for a year with any annual plan</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
