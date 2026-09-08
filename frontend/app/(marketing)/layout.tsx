"use client"
import Navbar from '@/components/Navbar'
import React from 'react'
import { usePathname } from 'next/navigation'
import { DottedGlowBackground } from '@/components/ui/dotted-glow-background'

const layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  console.log(pathname);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {pathname === "/" && (
        <div className="hidden md:block absolute inset-x-0 top-0 h-[80vh] pointer-events-none z-0 overflow-hidden">
          <DottedGlowBackground
            className="w-full h-full mask-radial-to-90% mask-radial-at-center opacity-20 dark:opacity-100"
            opacity={2}
            gap={10}
            radius={2}
            colorLightVar="--color-neutral-500"
            glowColorLightVar="--color-neutral-600"
            colorDarkVar="--color-neutral-500"
            glowColorDarkVar="--color-sky-800"
            backgroundOpacity={0}
            speedMin={0.8}
            speedMax={1.2}
            speedScale={1}
          />
        </div>
      )}
      
      <header className="relative z-10">
        <Navbar />
      </header>

      {/* 4. Page Content / HeroSection (Sits above background with z-10) */}
      <main className="relative z-10">
        {children}
      </main>
    </div>
  )
}

export default layout