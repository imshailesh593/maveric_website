import { motion } from 'framer-motion'

const bars = [
  { h: 30, label: 'Jan' },
  { h: 45, label: 'Feb' },
  { h: 38, label: 'Mar' },
  { h: 60, label: 'Apr' },
  { h: 55, label: 'May' },
  { h: 80, label: 'Jun' },
  { h: 95, label: 'Jul' },
]

const metrics = [
  { icon: '👁', label: 'Reach', val: '124K', color: '#00BDD9' },
  { icon: '❤️', label: 'Engage', val: '8.2K', color: '#FF7A00' },
  { icon: '🔗', label: 'Clicks', val: '3.1K', color: '#00BDD9' },
]

export default function MarketingAnimation() {
  return (
    <div className="w-full h-28 flex gap-2">
      {/* Bar chart */}
      <div className="flex-1 bg-[#0d0d0d] rounded-xl border border-white/10 p-2 flex flex-col justify-end">
        <div className="flex items-end gap-1 h-16 mb-1">
          {bars.map((bar, i) => (
            <div key={bar.label} className="flex-1 flex flex-col items-center gap-0.5">
              <motion.div
                className="w-full rounded-sm"
                style={{
                  background: i === bars.length - 1
                    ? 'linear-gradient(180deg, #00BDD9, #FF7A00)'
                    : 'rgba(0,212,255,0.25)',
                }}
                initial={{ height: 0 }}
                animate={{ height: `${bar.h}%` }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: 'backOut' }}
              />
            </div>
          ))}
        </div>
        <div className="flex gap-1">
          {bars.map((bar) => (
            <div key={bar.label} className="flex-1 text-center text-[6px] text-white/30 font-mono">
              {bar.label}
            </div>
          ))}
        </div>
        {/* Trend line label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center gap-1 mt-1"
        >
          <div className="text-green-400 text-[8px] font-mono font-bold">↑ +142%</div>
          <div className="text-white/30 text-[7px]">vs last month</div>
        </motion.div>
      </div>

      {/* Metrics column */}
      <div className="flex flex-col gap-1.5 w-20 justify-center">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + i * 0.15 }}
            className="glass rounded-lg border border-white/10 px-2 py-1.5 flex items-center gap-1.5"
          >
            <span className="text-[10px]">{m.icon}</span>
            <div>
              <div className="text-[9px] font-bold" style={{ color: m.color }}>{m.val}</div>
              <div className="text-[7px] text-white/40">{m.label}</div>
            </div>
          </motion.div>
        ))}

        {/* Live indicator */}
        <motion.div
          className="flex items-center gap-1 px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <div className="text-[7px] text-white/40 font-mono">LIVE</div>
        </motion.div>
      </div>
    </div>
  )
}
