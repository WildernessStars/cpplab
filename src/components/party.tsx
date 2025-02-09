"use client"

import confetti from "canvas-confetti";
import { useEffect } from "react"

export function Party() {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })
  }, [])

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="text-6xl">🎉</div>
    </div>
  )
}

