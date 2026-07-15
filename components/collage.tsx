'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MEDIA, type MediaItem } from '@/lib/media'
import { MemoryPhoto } from './memory-photo'

gsap.registerPlugin(ScrollTrigger, useGSAP)

type LayoutPattern = {
  count: number
  render: (items: MediaItem[], offset: number) => React.ReactNode
}

const LAYOUTS: LayoutPattern[] = [
  // 0 — hero (full first viewport)
  {
    count: 1,
    render: ([item]) => (
      <section key={`hero-${item.src}`} className="flex min-h-[50vh] flex-col items-center justify-center px-6 sm:min-h-screen">
        <MemoryPhoto
          src={item.src}
          alt={item.alt ?? ''}
          caption={item.caption}
          rotate={-1}
          priority
          className="w-full max-w-sm sm:max-w-4xl"
        />
      </section>
    ),
  },
  // 1 — pair of verticals
  {
    count: 2,
    render: (items) => (
      <section key={`pair-v-${items[0].src}`} data-section="scroll" className="mt-[8vh] flex flex-col items-center gap-8 sm:mt-[16vh] sm:flex-row sm:items-start sm:justify-center sm:gap-10">
        <MemoryPhoto
          src={items[0].src}
          alt={items[0].alt ?? ''}
          caption={items[0].caption}
          rotate={1.5}
          className="w-full max-w-lg sm:mt-16"
        />
        <MemoryPhoto
          src={items[1].src}
          alt={items[1].alt ?? ''}
          caption={items[1].caption}
          rotate={-1}
          className="w-full max-w-sm"
        />
      </section>
    ),
  },
  // 2 — large + companion
  {
    count: 2,
    render: (items) => (
      <section key={`large-${items[0].src}`} data-section="scroll" className="relative mt-[8vh] sm:mt-[16vh]">
        <MemoryPhoto
          src={items[0].src}
          alt={items[0].alt ?? ''}
          caption={items[0].caption}
          rotate={-1}
          className="ml-auto w-full max-w-lg"
        />
        <MemoryPhoto
          src={items[1].src}
          alt={items[1].alt ?? ''}
          caption={items[1].caption}
          rotate={2}
          className="relative mt-6 w-40 sm:absolute sm:-bottom-14 sm:left-0 sm:mt-0 sm:w-56 md:-bottom-20 md:w-64"
        />
      </section>
    ),
  },
  // 3 — asymmetric trio
  {
    count: 3,
    render: (items) => (
      <section key={`trio-${items[0].src}`} data-section="scroll" className="mt-[20vh] grid grid-cols-2 items-start gap-6 sm:grid-cols-12 sm:gap-8">
        <MemoryPhoto
          src={items[0].src}
          alt={items[0].alt ?? ''}
          caption={items[0].caption}
          rotate={1}
          className="col-span-1 w-full sm:col-span-3 sm:mt-32"
        />
        <MemoryPhoto
          src={items[1].src}
          alt={items[1].alt ?? ''}
          caption={items[1].caption}
          rotate={-1.5}
          className="col-span-1 w-full sm:col-span-6"
        />
        <MemoryPhoto
          src={items[2].src}
          alt={items[2].alt ?? ''}
          caption={items[2].caption}
          rotate={1.5}
          className="col-span-2 mx-auto w-full sm:col-span-3 sm:mt-40 sm:w-full"
        />
      </section>
    ),
  },
  // 4 — single centered wide
  {
    count: 1,
    render: ([item]) => (
      <section key={`center-${item.src}`} data-section="scroll" className="mt-[20vh]">
        <MemoryPhoto
          src={item.src}
          alt={item.alt ?? ''}
          caption={item.caption}
          rotate={-1}
          className="mx-auto w-full max-w-5xl"
        />
      </section>
    ),
  },
  // 5 — grid of four staggered
  {
    count: 4,
    render: (items) => (
      <section key={`grid-${items[0].src}`} data-section="scroll" className="mt-[18vh] grid grid-cols-2 gap-8 sm:grid-cols-2 sm:gap-12">
        <MemoryPhoto
          src={items[0].src}
          alt={items[0].alt ?? ''}
          caption={items[0].caption}
          rotate={-1}
          className="w-full"
        />
        <MemoryPhoto
          src={items[1].src}
          alt={items[1].alt ?? ''}
          caption={items[1].caption}
          rotate={1}
          className="w-full sm:mt-20"
        />
        <MemoryPhoto
          src={items[2].src}
          alt={items[2].alt ?? ''}
          caption={items[2].caption}
          rotate={1.5}
          className="w-full"
        />
        <MemoryPhoto
          src={items[3].src}
          alt={items[3].alt ?? ''}
          caption={items[3].caption}
          rotate={-1.5}
          className="w-full sm:mt-20"
        />
      </section>
    ),
  },
  // 6 — big vertical + stacked squares
  {
    count: 3,
    render: (items) => (
      <section key={`stacked-${items[0].src}`} data-section="scroll" className="mt-[20vh] flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-center sm:gap-10">
        <MemoryPhoto
          src={items[0].src}
          alt={items[0].alt ?? ''}
          caption={items[0].caption}
          rotate={1}
          className="w-full max-w-sm"
        />
        <div className="flex w-full max-w-xs flex-col gap-8 sm:mt-20">
          <MemoryPhoto
            src={items[1].src}
            alt={items[1].alt ?? ''}
            caption={items[1].caption}
            rotate={-1.5}
            className="w-full"
          />
          <MemoryPhoto
            src={items[2].src}
            alt={items[2].alt ?? ''}
            caption={items[2].caption}
            rotate={1}
            className="w-full"
          />
        </div>
      </section>
    ),
  },
  // 7 — pair horizontal
  {
    count: 2,
    render: (items) => (
      <section key={`pair-h-${items[0].src}`} data-section="scroll" className="mt-[20vh] grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
        <MemoryPhoto
          src={items[0].src}
          alt={items[0].alt ?? ''}
          caption={items[0].caption}
          rotate={-1}
          className="w-full sm:mt-16"
        />
        <MemoryPhoto
          src={items[1].src}
          alt={items[1].alt ?? ''}
          caption={items[1].caption}
          rotate={1.5}
          className="w-full"
        />
      </section>
    ),
  },
]

function buildSections(media: MediaItem[]) {
  if (media.length === 0) return []

  const sections: React.ReactNode[] = []
  let i = 0
  let patternIdx = 0

  while (i < media.length) {
    const pattern = LAYOUTS[patternIdx % LAYOUTS.length]
    const end = i + pattern.count

    if (end <= media.length) {
      sections.push(pattern.render(media.slice(i, end), i))
      i = end
    } else {
      const remaining = media.length - i
      const fallback = LAYOUTS.find((p) => p.count === remaining) ?? LAYOUTS.find((p) => p.count <= remaining) ?? LAYOUTS[0]
      sections.push(fallback.render(media.slice(i), i))
      i = media.length
    }
    patternIdx++
  }

  return sections
}

export function Collage() {
  const collageRef = useRef<HTMLDivElement>(null)
  const sections = buildSections(MEDIA)

  useGSAP(
    () => {
      const container = collageRef.current
      if (!container) return

      const sectionEls = gsap.utils.toArray<Element>('[data-section="scroll"]', container)
      sectionEls.forEach((section) => {
        const items = gsap.utils.toArray<Element>('[data-media-item]', section)
        if (items.length === 0) return

        const staggerVal = items.length > 1 ? 0.15 : 0

        gsap.from(items, {
          autoAlpha: 0,
          y: 30,
          scale: 0.93,
          duration: 1.3,
          ease: 'power3.out',
          stagger: staggerVal,
          scrollTrigger: {
            trigger: section,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        })
      })
    },
    { scope: collageRef, dependencies: [MEDIA.length] },
  )

  if (MEDIA.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="font-serif text-2xl text-white/40 italic">
          Agrega fotos en <span className="text-white/60">lib/media.ts</span>
        </p>
      </div>
    )
  }

  return (
    <div ref={collageRef} className="mx-auto w-full max-w-7xl px-6 pb-40 sm:px-10">
      {sections}

      <section className="mt-[22vh] flex flex-col items-center text-center">
        <p className="font-serif text-4xl leading-tight text-white/80 text-balance sm:text-5xl">
          y todavía queda
          <br />
          mucho más por venir
        </p>
        <span className="mt-10 text-sm tracking-[0.35em] text-white/30 uppercase">
          Siempre, nosotros
        </span>
      </section>
    </div>
  )
}