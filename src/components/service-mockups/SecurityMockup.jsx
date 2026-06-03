import { motion } from 'framer-motion'

const threats = [
  { type: 'DDoS Probe',     status: 'BLOCKED', delay: 0.3 },
  { type: 'SQL Injection',  status: 'BLOCKED', delay: 0.5 },
  { type: 'XSS Attack',     status: 'BLOCKED', delay: 0.7 },
  { type: 'Brute Force',    status: 'BLOCKED', delay: 0.9 },
  { type: 'CSRF Token',     status: 'BLOCKED', delay: 1.1 },
]

export default function SecurityMockup() {
  return (
    <div className="flex items-center justify-center gap-8 py-8">
      {/* Terminal */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
        className="rounded-2xl overflow-hidden shadow-2xl"
        style={{ width: 360, background: '#0a0f0a', border: '1px solid rgba(255,122,0,0.2)' }}>
        {/* Terminal bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/7" style={{ background: '#111' }}>
          <div className="flex gap-1.5">
            {['#ff5f56','#ffbd2e','#27c93f'].map(c => <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />)}
          </div>
          <span className="text-[11px] font-mono text-white/40 ml-2">maveric-security — threat-monitor</span>
        </div>
        {/* Terminal content */}
        <div className="p-4 font-mono text-[11px] space-y-1.5">
          <motion.div className="text-green-400/70" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            $ sudo maveric-scan --target=all --live
          </motion.div>
          <motion.div className="text-white/40" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            [✓] Firewall active · WAF rules loaded · SSL/TLS OK
          </motion.div>
          <div className="mt-2 space-y-1">
            {threats.map(t => (
              <motion.div key={t.type} className="flex items-center justify-between"
                initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: t.delay }}>
                <span className="text-white/60">⚠ {t.type}</span>
                <span className="px-2 py-0.5 rounded text-[9px] font-bold" style={{ background: 'rgba(255,70,70,0.15)', color: '#ff4444' }}>
                  {t.status}
                </span>
              </motion.div>
            ))}
          </div>
          <motion.div className="mt-2 text-green-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}>
            [✓] 0 threats active · System secure
          </motion.div>
          <motion.div className="flex items-center gap-1 text-white/30" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
            <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }}>█</motion.span>
          </motion.div>
        </div>
      </motion.div>

      {/* Shield + stats */}
      <div className="hidden lg:flex flex-col items-center gap-4">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
          className="relative flex items-center justify-center"
          style={{ width: 100, height: 100 }}>
          <div className="absolute inset-0 rounded-full blur-xl opacity-30" style={{ background: '#FF7A00' }} />
          <motion.div className="text-5xl" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }}>🛡️</motion.div>
        </motion.div>
        {[
          { val: '99.9%', label: 'Uptime Protected' },
          { val: '0', label: 'Breaches' },
          { val: '24/7', label: 'Monitoring' },
        ].map((b, i) => (
          <motion.div key={b.label} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.15 }}
            className="rounded-xl px-4 py-2.5 text-center w-36"
            style={{ background: 'var(--card-bg)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="text-base font-bold" style={{ color: '#FF7A00' }}>{b.val}</div>
            <div className="text-[10px] text-white/40 font-mono">{b.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
