'use client'

import { useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Intro } from './intro'
import { Collage } from './collage'

gsap.registerPlugin(ScrollTrigger)

export function Experience() {
  const [begun, setBegun] = useState(false)
  const [introGone, setIntroGone] = useState(false)
  const introRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)

  // Lock scrolling until the story begins
  useEffect(() => {
    document.body.style.overflow = begun ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [begun])

  const handleBegin = () => {
    if (begun) return
    setBegun(true)

    const tl = gsap.timeline({
      onComplete: () => {
        setIntroGone(true)
        ScrollTrigger.refresh()
      },
    })

    tl.to(introRef.current, {
      autoAlpha: 0,
      y: -24,
      filter: 'blur(8px)',
      duration: 1.1,
      ease: 'power2.inOut',
    }).fromTo(
      stageRef.current,
      { scale: 1.06, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration: 1.7, ease: 'power3.out' },
      '-=0.7',
    )
  }

  return (
    <main className="grain-overlay relative min-h-screen overflow-hidden">
      {/* Soft radial glow background */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 0%, rgba(60,60,80,0.28) 0%, rgba(15,15,18,0) 55%), radial-gradient(90% 70% at 80% 100%, rgba(80,55,60,0.18) 0%, rgba(15,15,18,0) 60%)',
        }}
      />

      {/* Photo collage stage — mounted from the start, revealed on begin */}
      <div
        ref={stageRef}
        className="relative z-10"
        style={{ opacity: begun ? undefined : 0 }}
      >
        <Collage />
      </div>

      {/* Intro overlay */}
      {!introGone && (
        <div ref={introRef} className="relative z-50">
          <Intro onBegin={handleBegin} />
        </div>
      )}
    </main>
  )
}
