import { motion } from 'framer-motion'

export default function SEOMockup() {
  const bars = [35, 55, 42, 70, 60, 85, 78, 92]
  return (
    <div className="flex items-center justify-center gap-8 py-8">
      {/* Dashboard card */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
        className="relative rounded-2xl overflow-hidden shadow-2xl"
        style={{ width: 360, background: 'var(--card-bg)', border: '1px solid rgba(255,255,255,0.1)' }}>
        {/* Header */}
        <div className="px-5 py-4 border-b border-white/7">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-mono text-white/50">SEO Dashboard</span>
            <span className="text-[10px] font-mono text-green-400">↑ Live</span>
          </div>
          <div className="flex gap-6 mt-3">
            {[{ v: '#1', l: 'SERP Rank', c: '#00BDD9' }, { v: '+47', l: 'Positions', c: '#27c93f' }, { v: '314K', l: 'Monthly Traffic', c: '#FF7A00' }].map(s => (
              <div key={s.l}>
                <div className="font-display font-bold text-xl" style={{ color: s.c }}>{s.v}</div>
                <div className="text-[10px] text-white/40 font-mono">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Traffic chart */}
        <div className="px-5 py-4">
          <div className="text-[10px] text-white/40 font-mono mb-3">Organic Traffic Growth</div>
          <div className="flex items-end gap-1.5 h-24">
            {bars.map((h, i) => (
              <motion.div key={i} className="flex-1 rounded-t"
                style={{ background: `linear-gradient(to top, rgba(0,189,217,0.8), rgba(0,189,217,0.2))` }}
                initial={{ height: 0 }} animate={{ height: `${h}%` }}
                transition={{ delay: 0.3 + i * 0.06, duration: 0.6, ease: 'backOut' }} />
            ))}
          </div>
          <div className="flex justify-between mt-1">
            {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'].map(m => (
              <span key={m} className="text-[8px] text-white/25 font-mono">{m}</span>
            ))}
          </div>
        </div>
        {/* Keyword ranks */}
        <div className="px-5 pb-4 space-y-2">
          {[
            { kw: 'web development company india', pos: 1 },
            { kw: 'mobile app development pandharpur', pos: 2 },
            { kw: 'digital marketing maharashtra', pos: 3 },
          ].map((k, i) => (
            <motion.div key={k.kw} className="flex items-center justify-between"
              initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}>
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-5 h-5 rounded flex items-center justify-center text-[9px] font-bold shrink-0"
                  style={{ background: 'rgba(0,189,217,0.2)', color: '#00BDD9' }}>#{k.pos}</div>
                <span className="text-[11px] text-white/60 font-mono truncate">{k.kw}</span>
              </div>
              <span className="text-[10px] text-green-400 font-mono shrink-0 ml-2">↑ Top</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Side stats */}
      <div className="hidden lg:flex flex-col gap-3">
        {[
          { icon: '📈', label: 'Traffic Growth', val: '780%' },
          { icon: '🔑', label: 'Keywords Ranked', val: '34,000+' },
          { icon: '🔗', label: 'Backlinks Built', val: 'High-DA' },
        ].map((b, i) => (
          <motion.div key={b.label} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.15 }}
            className="rounded-xl px-4 py-3 flex items-center gap-3"
            style={{ background: 'var(--card-bg)', border: '1px solid rgba(255,255,255,0.08)', minWidth: 160 }}>
            <span className="text-xl">{b.icon}</span>
            <div>
              <div className="text-sm font-bold text-white">{b.val}</div>
              <div className="text-[10px] text-white/40 font-mono">{b.label}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
