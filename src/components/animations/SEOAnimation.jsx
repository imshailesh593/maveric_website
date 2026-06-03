import { motion } from 'framer-motion'

const results = [
  { rank: 1, site: 'mavericinfotech.in', highlight: true },
  { rank: 2, site: 'competitor-a.com', highlight: false },
  { rank: 3, site: 'competitor-b.com', highlight: false },
  { rank: 4, site: 'old-rank.com', highlight: false },
]

export default function SEOAnimation() {
  return (
    <div className="w-full h-28 flex gap-2">
      {/* SERP mockup */}
      <div className="flex-1 bg-[#0d0d0d] rounded-xl border border-white/10 p-2 flex flex-col gap-1">
        {/* Search bar */}
        <div className="flex items-center gap-1 bg-white/5 rounded-md px-2 py-1 mb-1">
          <span className="text-[9px]">🔍</span>
          <div className="text-[8px] text-white/50 font-mono flex-1">best digital agency india</div>
        </div>

        {results.map((r, i) => (
          <motion.div
            key={r.rank}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 + 0.3 }}
            className={`flex items-center gap-2 px-2 py-1 rounded-md ${
              r.highlight ? 'border border-cyan-400/40 bg-cyan-400/5' : 'border border-transparent'
            }`}
          >
            <motion.div
              className="text-[9px] font-bold font-mono w-3 text-center"
              style={{ color: r.highlight ? '#00BDD9' : '#ffffff40' }}
              animate={r.highlight ? { scale: [1, 1.3, 1] } : {}}
              transition={{ delay: 1.5, duration: 0.4 }}
            >
              {r.rank}
            </motion.div>
            <div
              className="text-[8px] font-mono truncate flex-1"
              style={{ color: r.highlight ? '#00BDD9' : '#ffffff50' }}
            >
              {r.site}
            </div>
            {r.highlight && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, type: 'spring' }}
                className="text-[9px]"
              >
                ⭐
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Rank tracker */}
      <div className="w-16 flex flex-col gap-1.5 justify-center">
        <div className="text-[7px] text-white/40 font-mono text-center">RANK</div>
        <motion.div
          className="text-center font-display font-bold text-2xl text-gradient"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, type: 'spring', stiffness: 200 }}
        >
          #1
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-center"
        >
          <div className="text-green-400 text-[8px] font-bold">↑ +47</div>
          <div className="text-white/30 text-[7px]">positions</div>
        </motion.div>
        {/* Mini chart going up */}
        <svg viewBox="0 0 40 20" className="w-full mt-1">
          <motion.polyline
            points="2,18 8,16 14,14 20,11 26,7 32,4 38,2"
            fill="none"
            stroke="url(#g)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
          />
          <defs>
            <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF7A00" />
              <stop offset="100%" stopColor="#00BDD9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}
