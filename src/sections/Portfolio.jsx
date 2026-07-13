import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const featured = [
  {
    title: 'LocalApex',      cat: 'Local SEO SaaS',
    href: 'https://localapex.mavericinfotech.in',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Automate India', cat: 'Industrial B2B',
    href: 'https://automateindia.com',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Jodidaar',       cat: 'Matrimonial App',
    href: 'https://jodidaar.com',
    img: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Toppers Group',  cat: 'Ed-Tech Portal',
    href: 'https://toppersgroup.in',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Liflic Natural', cat: 'E-Commerce',
    href: 'https://liflic.in',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Pranshakti',     cat: 'Health & Nutrition',
    href: 'https://pranshakti.in',
    img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1600&auto=format&fit=crop',
  },
]

function Card({ p }) {
  return (
    <a href={p.href} target="_blank" rel="noopener noreferrer"
      className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-smoke">
      <img src={p.img} alt={p.title} loading="lazy"
        className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 md:p-7">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-yellow">{p.cat}</p>
          <h3 className="display mt-1 text-2xl text-white md:text-3xl">{p.title}</h3>
        </div>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-white transition-all duration-300 group-hover:bg-yellow group-hover:text-black group-hover:border-transparent"
          style={{ borderColor: 'rgba(0,189,217,0.4)' }}>
          →
        </span>
      </div>
    </a>
  )
}

export default function Portfolio() {
  const pinRef  = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const pin   = pinRef.current
    const track = trackRef.current
    if (!pin || !track) return

    const mm = gsap.matchMedia()
    mm.add('(min-width: 768px)', () => {
      const getScroll = () => track.scrollWidth - window.innerWidth + 96
      const tween = gsap.to(track, {
        x: () => -getScroll(),
        ease: 'none',
        scrollTrigger: {
          trigger: pin,
          start: 'top top',
          end: () => `+=${getScroll()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
      return () => { tween.scrollTrigger?.kill(); tween.kill() }
    })
    return () => mm.revert()
  }, [])

  return (
    <section id="portfolio" className="bg-black">
      {/* Header */}
      <div className="mx-auto max-w-site px-6 pt-24 md:px-10 md:pt-32">
        <span className="font-mono text-xs uppercase tracking-widest text-yellow">Our Work</span>
        <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12">
          <h2 className="display text-5xl text-white md:text-7xl lg:text-8xl">
            120+ projects.<br />Live and counting.
          </h2>
          <p className="max-w-xs font-body text-sm text-grey md:pb-2">
            Websites, apps, and platforms built across industries — delivered on time and still running.
          </p>
        </div>
      </div>

      {/* Pinned horizontal scroll (desktop) / swipeable (mobile) */}
      <div ref={pinRef} className="mt-12 md:mt-20 md:h-screen md:overflow-hidden">
        <div className="flex md:h-full md:items-center" style={{ minHeight: '1px' }}>
          <div ref={trackRef}
            className="no-scrollbar flex gap-6 overflow-x-auto px-6 pb-4 md:gap-8 md:overflow-visible md:px-12 md:pb-0">
            {featured.map(p => (
              <div key={p.title} className="w-[80vw] shrink-0 sm:w-[60vw] md:w-[34vw] lg:w-[30vw]">
                <Card p={p} />
              </div>
            ))}
            <div className="hidden w-[6vw] shrink-0 md:block" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  )
}
