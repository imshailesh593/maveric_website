import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const FEATURES = [
  { icon: '⭐', label: 'Review Management', desc: 'AI-generated replies, sentiment analysis, and response tracking.' },
  { icon: '📊', label: 'Search Insights',   desc: '90-day trends for impressions, clicks, calls, and directions.' },
  { icon: '🎯', label: '13-Point SEO Audit', desc: 'Grade your listing A–F across Relevance, Prominence & Activity.' },
  { icon: '🏢', label: 'Profile Editor',    desc: 'Edit hours, photos, categories, and NAP — synced to Google.' },
]

const STATS = [
  { value: '8',    label: 'Google APIs'    },
  { value: '13',   label: 'Audit Checks'   },
  { value: '100%', label: 'GBP Compliant'  },
]

export default function LocalApexShowcase() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="localapex" className="px-6 py-24 md:px-10 md:py-32 overflow-hidden" ref={ref}>
      <div className="max-w-[1600px] mx-auto">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-4">
          <span className="text-xs font-mono tracking-widest text-accent uppercase">Our Flagship SaaS Product</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-5xl md:text-7xl font-display font-black text-center text-white mb-4 leading-tight" style={{ textWrap: 'balance' }}>
          Meet <span style={{ color: '#6e76d6' }}>LocalApex</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="text-center text-muted text-lg max-w-2xl mx-auto mb-14">
          A complete Google Business Profile management platform — built for local businesses that want to dominate search.
        </motion.p>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl overflow-hidden border border-border"
          style={{ background: 'linear-gradient(145deg, rgba(110,118,214,0.08) 0%, rgba(0,0,0,0) 60%), #0c0c0c' }}>

          {/* Top band */}
          <div className="flex flex-col md:flex-row items-center gap-10 px-8 md:px-14 py-12 border-b border-border">

            {/* Icon + wordmark */}
            <div className="flex flex-col items-center gap-5 shrink-0">
              <svg width="72" height="90" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="laGrad" x1="0" y1="0" x2="1" y2="1.3" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#9098ea"/>
                    <stop offset="100%" stopColor="#4e57bb"/>
                  </linearGradient>
                </defs>
                <path d="M20 48 L13.5 30.4 A14 14 0 1 1 26.5 30.4 Z" fill="url(#laGrad)"/>
                <path d="M12 23 L20 12 L28 23" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-display font-black text-2xl tracking-tight leading-none">
                <span className="text-white">Local</span><span style={{ color: '#6e76d6' }}>Apex</span>
              </span>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px self-stretch bg-border" />

            {/* Copy + CTA */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-white/70 text-base leading-relaxed mb-6">
                LocalApex integrates all 8 Google Business Profile APIs into one dashboard — letting business owners manage reviews, track performance, run SEO audits, and keep their listing optimised, all without touching Google's cluttered interface.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <a href="https://localapex.mavericinfotech.in" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-bg"
                  style={{ background: 'linear-gradient(135deg, #6e76d6, #4e57bb)' }}>
                  Launch App
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1 12L12 1M12 1H4.5M12 1V8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
                <a href="https://localapex.mavericinfotech.in/privacy-policy.html" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-muted border border-border hover:text-white hover:border-white/20 transition-colors">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="flex md:flex-col gap-6 md:gap-4 shrink-0">
              {STATS.map(s => (
                <div key={s.label} className="text-center md:text-right">
                  <div className="text-2xl font-black" style={{ color: '#6e76d6' }}>{s.value}</div>
                  <div className="text-xs text-muted mt-0.5 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                className={`p-6 ${i < 3 ? 'border-r border-border' : ''} border-t border-border first:border-t md:border-t-0`}
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="text-2xl mb-3">{f.icon}</div>
                <div className="text-sm font-bold text-white mb-1.5">{f.label}</div>
                <div className="text-xs text-muted leading-relaxed">{f.desc}</div>
              </motion.div>
            ))}
          </div>

        </motion.div>

        {/* Tech stack pills */}
        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-wrap justify-center gap-2 mt-8">
          {['FastAPI', 'React', 'Flutter', 'Google Business Profile API', 'MySQL', 'OpenAI'].map(t => (
            <span key={t} className="text-xs font-mono text-muted border border-border rounded-full px-3 py-1">{t}</span>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
