"use client"

import { useEffect, useRef } from "react"

export default function CursorAmbientBackground() {
  const layerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const layer = layerRef.current
    if (!layer) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (!window.matchMedia("(pointer: fine)").matches) return

    let x = window.innerWidth * 0.5
    let y = window.innerHeight * 0.22
    let targetX = x
    let targetY = y
    let frame = 0

    const onMove = (event: PointerEvent) => {
      targetX = event.clientX
      targetY = event.clientY
    }

    const tick = () => {
      x += (targetX - x) * 0.1
      y += (targetY - y) * 0.1
      layer.style.setProperty("--spot-x", `${x}px`)
      layer.style.setProperty("--spot-y", `${y}px`)
      frame = window.requestAnimationFrame(tick)
    }

    window.addEventListener("pointermove", onMove, { passive: true })
    frame = window.requestAnimationFrame(tick)

    return () => {
      window.removeEventListener("pointermove", onMove)
      window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      ref={layerRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        backgroundImage:
          "radial-gradient(720px circle at var(--spot-x, 50%) var(--spot-y, 18%), rgba(65,105,225,0.22), rgba(99,102,241,0.08) 38%, transparent 62%), radial-gradient(1100px circle at calc(var(--spot-x, 50%) + 160px) calc(var(--spot-y, 18%) - 40px), rgba(14,165,233,0.12), transparent 55%)",
      }}
    />
  )
}
