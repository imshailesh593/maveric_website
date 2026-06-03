import { motion } from 'framer-motion'

export default function WebMockup() {
  return (
    <div className="flex items-center justify-center gap-8 py-8">
      {/* Laptop */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative">
        <div className="absolute inset-0 rounded-2xl blur-3xl opacity-20 pointer-events-none" style={{ background: '#00BDD9', transform: 'scale(0.9) translateY(10%)' }} />
        {/* Screen */}
        <div className="rounded-xl overflow-hidden shadow-2xl" style={{ width: 340, border: '2px solid rgba(255,255,255,0.12)', background: '#0d0d0d' }}>
          {/* Browser bar */}
          <div className="flex items-center gap-2 px-3 py-2.5" style={{ background: '#161616', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="flex gap-1.5">
              {['#ff5f56', '#ffbd2e', '#27c93f'].map(c => <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />)}
            </div>
            <div className="flex-1 mx-3 rounded px-3 py-1 text-[10px] font-mono text-white/30 flex items-center gap-1.5" style={{ background: 'rgba(255,255,255,0.05)' }}>
              <div className="w-2 h-2 rounded-full bg-green-400/60" />
              mavericinfotech.in
            </div>
          </div>
          {/* Screen content */}
          <div style={{ height: 200, background: 'linear-gradient(135deg, rgba(0,189,217,0.12) 0%, #0a0a0a 60%)' }}>
            {/* Fake nav */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
              <div className="w-16 h-2.5 rounded bg-white/40" />
              <div className="flex gap-4">
                {[60, 48, 52, 44].map((w, i) => <div key={i} className="h-1.5 rounded bg-white/20" style={{ width: w }} />)}
              </div>
              <div className="w-14 h-5 rounded-full" style={{ background: 'rgba(0,189,217,0.6)' }} />
            </div>
            {/* Hero text */}
            <div className="px-6 pt-5">
              <motion.div className="h-4 rounded bg-white/70 mb-2" style={{ width: 180 }}
                animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 3, repeat: Infinity }} />
              <div className="h-2.5 rounded bg-white/30 mb-1.5" style={{ width: 220 }} />
              <div className="h-2.5 rounded bg-white/20 mb-4" style={{ width: 160 }} />
              <div className="flex gap-2">
                <div className="h-7 w-20 rounded-full" style={{ background: 'rgba(0,189,217,0.7)' }} />
                <div className="h-7 w-20 rounded-full border border-white/20" />
              </div>
            </div>
            {/* Cards row */}
            <div className="flex gap-2 px-4 mt-4">
              {[0,1,2,3].map(i => (
                <motion.div key={i} className="flex-1 rounded-lg p-2" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}>
                  <div className="w-5 h-5 rounded mb-1.5" style={{ background: i % 2 === 0 ? 'rgba(0,189,217,0.3)' : 'rgba(255,122,0,0.3)' }} />
                  <div className="h-1.5 rounded bg-white/25 mb-1 w-full" />
                  <div className="h-1 rounded bg-white/12 w-3/4" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        {/* Laptop base */}
        <div className="mx-auto mt-0 rounded-b-xl" style={{ width: 360, height: 12, background: '#161616', border: '1px solid rgba(255,255,255,0.08)' }} />
        <div className="mx-auto rounded-b-xl" style={{ width: 400, height: 6, background: '#111', border: '1px solid rgba(255,255,255,0.05)' }} />
      </motion.div>

      {/* Floating blocks */}
      <div className="hidden lg:flex flex-col gap-3">
        {[
          { icon: '⚡', label: 'Core Web Vitals', val: '98/100' },
          { icon: '🔍', label: 'SEO Score', val: 'A+' },
          { icon: '📱', label: 'Mobile Ready', val: '100%' },
        ].map((b, i) => (
          <motion.div key={b.label}
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.15 }}
            className="rounded-xl px-4 py-3 flex items-center gap-3"
            style={{ background: 'var(--card-bg)', border: '1px solid rgba(255,255,255,0.08)', minWidth: 170 }}>
            <span className="text-xl">{b.icon}</span>
            <div>
              <div className="text-[10px] text-white/40 font-mono">{b.label}</div>
              <div className="text-sm font-bold text-white">{b.val}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
