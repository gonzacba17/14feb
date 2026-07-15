'use client'

import { useRef, useEffect, type CSSProperties } from 'react'
import { gsap } from 'gsap'

type MemoryPhotoProps = {
  src: string
  alt: string
  caption?: string
  className?: string
  rotate?: number
  priority?: boolean
}

const isVideo = (src: string) => /\.(mp4|webm|mov|ogg)$/i.test(src)

export function MemoryPhoto({
  src,
  alt,
  caption,
  className = '',
  rotate = 0,
  priority = false,
}: MemoryPhotoProps) {
  const frameRef = useRef<HTMLDivElement>(null)
  const mediaRef = useRef<HTMLVideoElement | HTMLImageElement>(null)

  useEffect(() => {
    const el = mediaRef.current
    if (!el || !isVideo(src)) return
    const video = el as HTMLVideoElement

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [src])

  const handleEnter = () => {
    gsap.to(mediaRef.current, { scale: 1.03, duration: 0.7, ease: 'power2.out' })
    gsap.to(frameRef.current, {
      rotate: 0,
      boxShadow: '0 40px 80px -20px rgba(0,0,0,0.65)',
      duration: 0.7,
      ease: 'power2.out',
    })
  }

  const handleLeave = () => {
    gsap.to(mediaRef.current, { scale: 1, duration: 0.7, ease: 'power2.out' })
    gsap.to(frameRef.current, {
      rotate,
      boxShadow: '0 24px 60px -24px rgba(0,0,0,0.55)',
      duration: 0.7,
      ease: 'power2.out',
    })
  }

  return (
    <div data-media-item className={`flex flex-col items-center ${className}`}>
      <div
        ref={frameRef}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        style={{ transform: `rotate(${rotate}deg)` } as CSSProperties}
        className="group relative overflow-hidden rounded-2xl bg-white/[0.02] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.55)] ring-1 ring-white/5 will-change-transform"
      >
        {isVideo(src) ? (
          <video
            ref={mediaRef as React.RefObject<HTMLVideoElement>}
            src={src}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={alt}
            className="w-full align-middle"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            ref={mediaRef as React.RefObject<HTMLImageElement>}
            src={src || '/placeholder.svg'}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            className="w-full align-middle"
            crossOrigin="anonymous"
          />
        )}
      </div>
      {caption && (
        <p className="mt-2 max-w-xs text-balance text-center font-serif text-xs italic leading-relaxed text-white/45 sm:mt-3 sm:max-w-md sm:text-sm">
          {caption}
        </p>
      )}
    </div>
  )
}
