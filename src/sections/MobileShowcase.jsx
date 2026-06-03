import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// ── Animated phone screen content ────────────────────────────────────────

function AppScreen() {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden" style={{ background: '#0a0a0a' }}>
      {/* Status bar */}
      <div className="flex items-center justify-between px-3 py-1.5 shrink-0">
        <span className="text-[7px] font-mono text-white/50">9:41</span>
        <div className="flex gap-1 items-center">
          <div className="w-3 h-1.5 rounded-sm bg-green-400/70" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
        </div>
      </div>

      {/* App header */}
      <div className="px-3 pb-2 shrink-0">
        <div className="h-2 w-20 rounded-full bg-white/15 mb-1" />
        <div className="h-1.5 w-12 rounded-full bg-white/8" />
      </div>

      {/* Hero card */}
      <motion.div
        className="mx-3 rounded-xl p-3 mb-2 shrink-0"
        style={{ background: 'linear-gradient(135deg, rgba(0,189,217,0.25), rgba(255,122,0,0.15))' }}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="h-2 w-16 rounded-full bg-white/60 mb-1.5" />
        <div className="h-1.5 w-24 rounded-full bg-white/30 mb-1" />
        <div className="h-1.5 w-20 rounded-full bg-white/20 mb-2" />
        <div className="h-5 w-16 rounded-full flex items-center justify-center" style={{ background: 'rgba(0,189,217,0.8)' }}>
          <div className="h-1.5 w-8 rounded-full bg-white/90" />
        </div>
      </motion.div>

      {/* List items */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="mx-3 flex items-center gap-2 mb-1.5 shrink-0"
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 + i * 0.12, duration: 0.4 }}
        >
          <div className="w-6 h-6 rounded-lg shrink-0" style={{ background: `rgba(${i % 2 === 0 ? '0,189,217' : '255,122,0'},0.2)` }} />
          <div className="flex-1">
            <div className="h-1.5 rounded-full bg-white/25 mb-1" style={{ width: `${70 - i * 10}%` }} />
            <div className="h-1 rounded-full bg-white/12" style={{ width: `${55 - i * 8}%` }} />
          </div>
          <div className="w-4 h-1.5 rounded-full bg-white/15 shrink-0" />
        </motion.div>
      ))}

      {/* Notification badge */}
      <motion.div
        className="mx-3 mt-1 rounded-xl p-2.5 flex items-center gap-2 shrink-0"
        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0, duration: 0.4 }}
      >
        <div className="w-5 h-5 rounded-full bg-green-400/20 flex items-center justify-center shrink-0">
          <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
        <div className="flex-1">
          <div className="h-1.5 w-20 rounded-full bg-white/40 mb-1" />
          <div className="h-1 w-14 rounded-full bg-white/20" />
        </div>
      </motion.div>

      {/* Bottom nav */}
      <div className="mt-auto mx-3 mb-2 rounded-xl flex items-center justify-around py-2 shrink-0"
        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.06)' }}>
        {['⊞', '⊙', '⊕', '◎'].map((icon, i) => (
          <div key={i} className="flex flex-col items-center gap-0.5">
            <span className="text-[8px]" style={{ color: i === 0 ? 'rgb(0,189,217)' : 'rgba(255,255,255,0.3)' }}>{icon}</span>
            {i === 0 && <div className="w-1 h-0.5 rounded-full bg-accent" />}
          </div>
        ))}
      </div>
    </div>
  )
}

function WebScreen() {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden" style={{ background: '#0d0d0d' }}>
      {/* Browser bar */}
      <div className="flex items-center gap-1.5 px-2.5 py-2 shrink-0" style={{ background: '#111' }}>
        <div className="flex gap-1">
          {['#ff5f56','#ffbd2e','#27c93f'].map(c => <div key={c} className="w-1.5 h-1.5 rounded-full" style={{ background: c }} />)}
        </div>
        <div className="flex-1 mx-2 rounded-sm px-2 py-0.5 flex items-center gap-1" style={{ background: 'rgba(255,255,255,0.05)' }}>
          <div className="w-1.5 h-1.5 rounded-full bg-green-400/60 shrink-0" />
          <div className="h-1 w-16 rounded-full bg-white/20" />
        </div>
      </div>

      {/* Hero */}
      <div className="px-3 py-2 shrink-0" style={{ background: 'linear-gradient(135deg,rgba(0,189,217,0.15),transparent)' }}>
        <div className="h-2.5 w-24 rounded bg-white/60 mb-1.5" />
        <div className="h-1.5 w-32 rounded bg-white/25 mb-1" />
        <div className="h-1.5 w-28 rounded bg-white/15 mb-2" />
        <div className="h-5 w-14 rounded-full" style={{ background: 'rgba(0,189,217,0.7)' }} />
      </div>

      {/* Cards grid */}
      <div className="px-2 grid grid-cols-2 gap-1.5 flex-1">
        {[0,1,2,3].map(i => (
          <motion.div
            key={i}
            className="rounded-lg p-1.5"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
          >
            <div className="w-4 h-4 rounded mb-1" style={{ background: `rgba(${i%2===0?'0,189,217':'255,122,0'},0.25)` }} />
            <div className="h-1.5 rounded bg-white/30 mb-0.5 w-full" />
            <div className="h-1 rounded bg-white/15 w-3/4" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// ── Phone Mockup ──────────────────────────────────────────────────────────

function PhoneMockup({ screen = 'app', rotate = 0, scale = 1, delay = 0, glowColor = '#00BDD9' }) {
  const Screen = screen === 'app' ? AppScreen : WebScreen
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: rotate - 4 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{ scale }}
      className="relative"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-[2.5rem] blur-2xl opacity-30 pointer-events-none"
        style={{ background: glowColor, transform: 'scale(0.85) translateY(10%)' }} />

      {/* Frame */}
      <div className="relative rounded-[2.2rem] overflow-hidden shadow-2xl"
        style={{
          width: 160, height: 320,
          background: '#1a1a1a',
          border: '3px solid rgba(255,255,255,0.12)',
          boxShadow: `0 30px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.1)`,
        }}>
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 rounded-b-2xl z-20"
          style={{ background: '#1a1a1a' }}>
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-black" />
        </div>
        {/* Screen */}
        <div className="absolute inset-0 pt-5">
          <Screen />
        </div>
        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-white/20 z-20" />
      </div>
    </motion.div>
  )
}

// ── Floating Feature Blocks ───────────────────────────────────────────────

const blocks = [
  { icon: '📱', label: 'Cross-Platform', sub: 'iOS & Android',   x: '-left-8',  y: 'top-8',    delay: 0.3 },
  { icon: '⚡', label: 'Fast & Light',   sub: '<2s load time',   x: '-left-12', y: 'top-1/2',  delay: 0.5 },
  { icon: '🔒', label: 'Secure by Design', sub: 'SSL · Auth · Encrypt', x: '-left-6', y: 'bottom-12', delay: 0.7 },
  { icon: '⭐', label: '5-Star Rated',   sub: '98% satisfaction', x: '-right-8', y: 'top-8',    delay: 0.4 },
  { icon: '🚀', label: 'Ship Fast',      sub: '2–6 week delivery', x: '-right-12', y: 'top-1/2', delay: 0.6 },
  { icon: '🌐', label: 'Web & Mobile',   sub: 'All platforms',   x: '-right-6', y: 'bottom-12', delay: 0.8 },
]

function FloatingBlock({ icon, label, sub, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-xl px-3 py-2.5 flex items-center gap-2.5 whitespace-nowrap"
      style={{
        background: 'var(--card-bg)',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
      }}
    >
      <span className="text-lg shrink-0">{icon}</span>
      <div>
        <div className="text-xs font-semibold text-white leading-tight">{label}</div>
        <div className="text-[10px] text-white/40 font-mono">{sub}</div>
      </div>
    </motion.div>
  )
}

// ── Section ───────────────────────────────────────────────────────────────

export default function MobileShowcase() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="overflow-hidden py-24 relative">
      {/* Ambient glows */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-20"
        style={{ background: 'rgb(var(--c-accent))' }} />
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-15"
        style={{ background: 'rgb(var(--c-orange))' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-mono text-accent text-sm tracking-widest uppercase"
          >
            Multi-Platform
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-display font-bold text-4xl md:text-5xl text-white mt-3"
          >
            Built for Every Screen,{' '}
            <span className="text-gradient">Every User</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/45 mt-4 max-w-lg mx-auto text-sm leading-relaxed"
          >
            From pixel-perfect websites to native mobile apps — we craft digital experiences that work beautifully on every device.
          </motion.p>
        </div>

        {/* Mockup stage */}
        {inView && (
          <div className="relative flex items-center justify-center" style={{ minHeight: 380 }}>
            {/* Left floating blocks */}
            <div className="hidden lg:flex flex-col gap-3 mr-16">
              {blocks.slice(0, 3).map((b) => <FloatingBlock key={b.label} {...b} />)}
            </div>

            {/* Phones */}
            <div className="flex items-end justify-center gap-4 relative">
              {/* Back phone */}
              <div className="opacity-60 mb-0 hidden sm:block" style={{ transform: 'translateX(20px)' }}>
                <PhoneMockup screen="web" rotate={-8} scale={0.82} delay={0.2} glowColor="#FF7A00" />
              </div>
              {/* Main phone */}
              <PhoneMockup screen="app" rotate={0} scale={1} delay={0} glowColor="#00BDD9" />
              {/* Front-right phone */}
              <div className="opacity-60 hidden sm:block" style={{ transform: 'translateX(-20px)' }}>
                <PhoneMockup screen="web" rotate={8} scale={0.82} delay={0.3} glowColor="#FF7A00" />
              </div>
            </div>

            {/* Right floating blocks */}
            <div className="hidden lg:flex flex-col gap-3 ml-16">
              {blocks.slice(3).map((b) => <FloatingBlock key={b.label} {...b} />)}
            </div>
          </div>
        )}

        {/* Mobile: blocks in a grid */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-3 mt-10">
          {blocks.map((b) => <FloatingBlock key={b.label} {...b} />)}
        </div>
      </div>
    </section>
  )
}
