import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import ScrollFillText from '../components/ScrollFillText'
import PubityBtn from '../components/PubityBtn'

const RING_R = 20
const RING_C = 2 * Math.PI * RING_R

function Counter({ value, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-10% 0px -10% 0px' })
  const [n, setN] = useState(0)
  const [p, setP] = useState(0)

  useEffect(() => {
    if (!inView) { setN(0); setP(0); return }
    const duration = 1600
    const start = performance.now()
    let raf = 0
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
      setN(Math.round(value * eased))
      setP(eased)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <div ref={ref} className="flex items-center gap-3">
      <svg width="46" height="46" viewBox="0 0 46 46" className="shrink-0 -rotate-90">
        <circle cx="23" cy="23" r={RING_R} fill="none" stroke="#2a2a2a" strokeWidth="3" />
        <circle cx="23" cy="23" r={RING_R} fill="none"
          stroke="rgb(0,189,217)" strokeWidth="3" strokeLinecap="round"
          strokeDasharray={RING_C} strokeDashoffset={RING_C * (1 - p)} />
      </svg>
      <span className="display text-4xl text-white md:text-5xl">
        {n.toLocaleString()}<span className="text-yellow">{suffix}</span>
      </span>
    </div>
  )
}

const stats = [
  { value: 12,  suffix: '+',   label: 'Years in business' },
  { value: 120, suffix: '+',   label: 'Projects delivered' },
  { value: 50,  suffix: '+',   label: 'Active clients' },
  { value: 8,   suffix: '',    label: 'Service verticals' },
]

const taglines = ['RELIABLE ALWAYS.', 'RESULTS GUARANTEED.', 'SHIPPED ON TIME.']

export default function StatBand() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.02, 0.09, 0.02])

  return (
    <section ref={sectionRef} id="about"
      className="relative overflow-hidden bg-black px-6 py-24 md:px-10 md:py-32">
      <motion.div aria-hidden
        style={{ opacity: glowOpacity, background: 'radial-gradient(circle at 60% 40%, rgb(0,189,217) 0%, transparent 55%)' }}
        className="pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-site gap-16 md:grid-cols-2 md:gap-20">
        {/* Left: taglines + body + CTA */}
        <div>
          <ScrollFillText
            lines={taglines}
            className="mb-10"
            lineClassName="display text-4xl md:text-5xl lg:text-6xl"
            from="#4a4a4a" to="#ffffff"
          />

          <p className="max-w-lg font-body text-base leading-relaxed text-white/60 md:text-lg">
            Maveric Infotech is where digital ambitions become reality. Founded in Pandharpur,
            Maharashtra in 2014 — we build websites, mobile apps, and custom software that
            help businesses grow. When brands need to dominate online, we make it happen.
            Fast. Reliable. Built to last.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8">
            {stats.map(s => (
              <div key={s.label}>
                <Counter value={s.value} suffix={s.suffix} />
                <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-grey">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <PubityBtn label="Work With Us" href="/#contact" backLabel="LET'S GO →" />
          </div>
        </div>

        {/* Right: milestone timeline */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl p-8 md:p-10"
            style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
            <p className="font-mono text-xs uppercase tracking-widest text-yellow mb-8">Our Journey</p>
            <div className="relative pl-5" style={{ borderLeft: '1px solid #2a2a2a' }}>
              {[
                { year: '2014', title: 'Founded',             desc: 'Started with 2 developers and a clear vision.' },
                { year: '2016', title: 'First 20 Clients',    desc: 'Grew to a full-service team.' },
                { year: '2019', title: 'Mobile Division',     desc: 'Launched our Flutter app vertical.' },
                { year: '2022', title: '100+ Projects',       desc: '98% client satisfaction rate.' },
                { year: '2024', title: 'Cybersecurity + LocalApex', desc: 'Expanded into security and SaaS.' },
              ].map((m, i) => (
                <motion.div key={m.year}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="mb-8 last:mb-0 relative">
                  <div className="absolute -left-[1.625rem] top-1.5 w-2 h-2 rounded-full bg-yellow" />
                  <span className="font-mono text-xs text-yellow block mb-0.5">{m.year}</span>
                  <h3 className="display text-base text-white">{m.title}</h3>
                  <p className="font-body text-sm text-white/40 mt-0.5">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
