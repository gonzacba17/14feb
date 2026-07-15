'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

export function Intro({ onBegin }: { onBegin: () => void }) {
  const root = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('[data-intro="eyebrow"]', { autoAlpha: 0, y: 16, duration: 1 })
        .from('[data-intro="title"]', { autoAlpha: 0, y: 28, duration: 1.3 }, '-=0.6')
        .from('[data-intro="sub"]', { autoAlpha: 0, y: 20, duration: 1.1 }, '-=0.8')
        .from('[data-intro="btn"]', { autoAlpha: 0, y: 16, duration: 1 }, '-=0.7')
    },
    { scope: root },
  )

  return (
    <div
      ref={root}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center px-6 text-center"
    >
      <p
        data-intro="eyebrow"
        className="mb-8 text-sm font-light tracking-[0.35em] text-white/50 uppercase"
      >
        Para el amor de mi vida{' '}
        <span className="ml-1 text-rose-300/70" aria-hidden>
          &#10084;
        </span>
      </p>

      <p
        data-intro="title"
        className="mb-4 font-serif text-4xl leading-[0.95] tracking-tight text-rose-300/80 sm:text-5xl md:text-6xl"
      >
        Felices 5 meses
      </p>

      <h1
        data-intro="title"
        className="font-serif text-6xl leading-[0.95] tracking-tight text-white text-balance sm:text-7xl md:text-8xl"
      >
        Nuestra Historia
      </h1>

      <p
        data-intro="sub"
        className="mt-8 max-w-md text-base leading-relaxed text-white/55 text-pretty"
      >
        Quería guardar nuestros recuerdos favoritos en un pequeño lugar.
      </p>

      <button
        data-intro="btn"
        onClick={onBegin}
        className="mt-12 rounded-full border border-white/15 bg-white/5 px-9 py-3.5 text-sm font-medium tracking-wide text-white/90 backdrop-blur transition-colors duration-500 hover:border-white/30 hover:bg-white/10"
      >
        Comenzar
      </button>
    </div>
  )
}
