import { motion } from 'framer-motion'

function Phone({ rotate = 0, delay = 0, color = '#00BDD9', small = false }) {
  const w = small ? 130 : 160, h = small ? 260 : 320
  return (
    <motion.div initial={{ opacity: 0, y: 30, rotate: rotate - 4 }} animate={{ opacity: 1, y: 0, rotate }}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="relative">
      <div className="absolute inset-0 rounded-[2.5rem] blur-2xl opacity-25 pointer-events-none"
        style={{ background: color, transform: 'scale(0.8) translateY(15%)' }} />
      <div className="relative rounded-[2rem] overflow-hidden shadow-2xl"
        style={{ width: w, height: h, background: '#111', border: '2.5px solid rgba(255,255,255,0.12)' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-4 rounded-b-2xl z-20" style={{ background: '#111' }}>
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-black" />
        </div>
        <div className="absolute inset-0 pt-4 flex flex-col" style={{ background: '#0a0a0a' }}>
          {/* Status bar */}
          <div className="flex items-center justify-between px-3 py-1 shrink-0">
            <span className="text-[7px] font-mono text-white/50">9:41</span>
            <div className="flex gap-1">
              <div className="w-3 h-1.5 rounded-sm bg-green-400/70" />
            </div>
          </div>
          {/* App hero card */}
          <motion.div className="mx-2 rounded-xl p-2.5 mb-2 shrink-0"
            style={{ background: `linear-gradient(135deg, ${color}30, ${color}10)`, border: `1px solid ${color}30` }}
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: delay + 0.3 }}>
            <div className="h-2 w-14 rounded bg-white/60 mb-1" />
            <div className="h-1.5 w-20 rounded bg-white/30" />
          </motion.div>
          {/* List */}
          {[0,1,2].map(i => (
            <motion.div key={i} className="mx-2 flex items-center gap-2 mb-1.5 shrink-0"
              initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.4 + i * 0.1 }}>
              <div className="w-6 h-6 rounded-lg shrink-0" style={{ background: `${color}25` }} />
              <div className="flex-1">
                <div className="h-1.5 rounded bg-white/25 mb-0.5" style={{ width: `${70 - i * 10}%` }} />
                <div className="h-1 rounded bg-white/12" style={{ width: `${55 - i * 8}%` }} />
              </div>
            </motion.div>
          ))}
          {/* Bottom nav */}
          <div className="mt-auto mx-2 mb-2 rounded-xl flex justify-around py-2 shrink-0"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }}>
            {['⊞','⊙','⊕','◎'].map((ic, i) => (
              <span key={i} className="text-[9px]" style={{ color: i === 0 ? color : 'rgba(255,255,255,0.3)' }}>{ic}</span>
            ))}
          </div>
        </div>
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-10 h-0.5 rounded-full bg-white/20 z-20" />
      </div>
    </motion.div>
  )
}

export default function MobileMockup() {
  return (
    <div className="flex items-center justify-center gap-6 py-8">
      {/* Feature blocks left */}
      <div className="hidden lg:flex flex-col gap-3">
        {[
          { icon: '📱', label: 'iOS & Android', sub: 'One codebase' },
          { icon: '🚀', label: '2–6 weeks', sub: 'Delivery time' },
          { icon: '⭐', label: 'App Store Ready', sub: 'Full submission' },
        ].map((b, i) => (
          <motion.div key={b.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.15 }}
            className="rounded-xl px-4 py-3 flex items-center gap-3"
            style={{ background: 'var(--card-bg)', border: '1px solid rgba(255,255,255,0.08)', minWidth: 170 }}>
            <span className="text-xl">{b.icon}</span>
            <div>
              <div className="text-sm font-semibold text-white">{b.label}</div>
              <div className="text-[10px] text-white/40 font-mono">{b.sub}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Phones */}
      <div className="flex items-end gap-3">
        <div className="opacity-60 hidden sm:block" style={{ transform: 'translateX(16px)' }}>
          <Phone rotate={-10} delay={0.2} color="#FF7A00" small />
        </div>
        <Phone rotate={0} delay={0} color="#00BDD9" />
        <div className="opacity-60 hidden sm:block" style={{ transform: 'translateX(-16px)' }}>
          <Phone rotate={10} delay={0.3} color="#FF7A00" small />
        </div>
      </div>

      {/* Feature blocks right */}
      <div className="hidden lg:flex flex-col gap-3">
        {[
          { icon: '🔔', label: 'Push Notifications', sub: 'Real-time alerts' },
          { icon: '💳', label: 'Payments Wired', sub: 'Razorpay / UPI' },
          { icon: '📊', label: 'Firebase Analytics', sub: 'Built in' },
        ].map((b, i) => (
          <motion.div key={b.label} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.15 }}
            className="rounded-xl px-4 py-3 flex items-center gap-3"
            style={{ background: 'var(--card-bg)', border: '1px solid rgba(255,255,255,0.08)', minWidth: 170 }}>
            <span className="text-xl">{b.icon}</span>
            <div>
              <div className="text-sm font-semibold text-white">{b.label}</div>
              <div className="text-[10px] text-white/40 font-mono">{b.sub}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
