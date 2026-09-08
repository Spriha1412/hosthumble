'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Globe, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from './ui/button'

const sampleUrls = [
  'https://docs.brightdata.com/introduction',
  'https://news.ycombinator.com',
  'https://docs.stripe.com/api',
  'https://github.com/trending',
  'https://docs.docker.com/get-started/'
]

export default function HomeInput() {
  const [urlInput, setUrlInput] = useState('')
  const [promptInput, setPromptInput] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  // Typewriter effect state tracking
  const urlIndexRef = useRef(0)
  const charIndexRef = useRef(0)
  const isDeletingRef = useRef(false)

  useEffect(() => {
    // Stop animation entirely if user focused or interacting
    if (isFocused) return

    let isMounted = true
    let timeoutId: NodeJS.Timeout

    const tick = () => {
      if (!isMounted || isFocused) return

      const currentUrl = sampleUrls[urlIndexRef.current]
      const charIndex = charIndexRef.current
      const isDeleting = isDeletingRef.current

      if (!isDeleting) {
        // Typing forward
        setUrlInput(currentUrl.substring(0, charIndex + 1))
        charIndexRef.current += 1

        if (charIndex + 1 === currentUrl.length) {
          // Reached full length -> wait then start deleting
          isDeletingRef.current = true
          timeoutId = setTimeout(tick, 2000)
          return
        }
        timeoutId = setTimeout(tick, 50)
      } else {
        // Backspacing
        setUrlInput(currentUrl.substring(0, charIndex - 1))
        charIndexRef.current -= 1

        if (charIndex - 1 === 0) {
          // Finished deleting -> move to next index smoothly without glitching
          isDeletingRef.current = false
          urlIndexRef.current = (urlIndexRef.current + 1) % sampleUrls.length
          setUrlInput('')
          timeoutId = setTimeout(tick, 400)
          return
        }
        timeoutId = setTimeout(tick, 25)
      }
    }

    // Start animation loop
    timeoutId = setTimeout(tick, 100)

    return () => {
      isMounted = false
      clearTimeout(timeoutId)
    }
  }, [isFocused])

  const handleFocus = () => {
    setIsFocused(true)
    setUrlInput('') // Instantly clear input on click
  }

  const handleBlur = () => {
    setIsFocused(false)
    // Reset typing state to start fresh from current index if left empty
    charIndexRef.current = 0
    isDeletingRef.current = false
  }

  return (
    <div className="w-full font-mono max-w-2xl mx-auto rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-background shadow-2xl p-4 transition-all">
      {/* TOP SECTION: Animated URL Input */}
      <div className="relative flex items-center px-3 py-2">
        <Globe className="w-4 h-4 text-zinc-400 shrink-0 mr-3" />
        <input
          type="text"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="w-full bg-transparent font-mono text-xs xs:text-base text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none"
        />
      </div>

      {/* DIVIDER LINE */}
      <div className="my-2 h-[1px] w-full bg-zinc-100 dark:bg-zinc-800" />

      {/* BOTTOM SECTION: User Prompt Input & Action Button */}
      <div className="flex items-center gap-3 px-3 py-1">
        <div className="relative flex-1 flex items-center">          
          <input
            type="text"
            value={promptInput}
            onChange={(e) => setPromptInput(e.target.value)}
            placeholder="Describe What you want to Know."
            className="w-full bg-transparent text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none"
          />
        </div>

        {/* Action Button */}
        <Button
          size={"xs"}
          className="flex items-center justify-center w-[23px] h-6 rounded-xl active:scale-95 transition-all shadow-md shrink-0"
        >
          <ArrowRight className="w-3 h-3" />
        </Button>
      </div>
    </div>
  )
}