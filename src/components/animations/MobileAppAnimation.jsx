import { motion, useReducedMotion } from 'framer-motion'

const screens = [
  // Home screen
  <div key="home" className="flex flex-col gap-1.5 p-2 h-full">
    <div className="flex justify-between items-center mb-1">
      <div className="text-[8px] text-white/60 font-mono">9:41</div>
      <div className="flex gap-0.5">
        {[1, 0.6, 0.3].map((o, i) => (
          <div key={i} className="w-1 rounded-sm bg-white" style={{ height: `${6 + i * 2}px`, opacity: o }} />
        ))}
      </div>
    </div>
    <div className="h-8 rounded-lg bg-gradient-to-r from-cyan-500/30 to-purple-500/30 border border-white/10 flex items-center px-2 gap-1.5">
      <div className="w-2 h-2 rounded-full bg-cyan-400/80" />
      <div className="h-1.5 rounded bg-white/20 flex-1" />
    </div>
    <div className="grid grid-cols-3 gap-1 mt-1">
      {['#00BDD930', '#FF7A0030', '#00BDD920', '#FF7A0020', '#00BDD925', '#FF7A0025'].map((bg, i) => (
        <div key={i} className="h-8 rounded-lg border border-white/10" style={{ background: bg }} />
      ))}
    </div>
    <div className="h-6 rounded-lg bg-white/5 border border-white/10 flex items-center px-2 gap-1">
      <div className="h-1.5 rounded bg-white/20 flex-1" />
      <div className="w-3 h-1.5 rounded bg-cyan-400/50" />
    </div>
  </div>,

  // App screen 2
  <div key="detail" className="flex flex-col gap-1.5 p-2 h-full">
    <div className="h-14 rounded-xl bg-gradient-to-br from-purple/40 to-cyan-500/20 border border-white/10 flex items-center justify-center">
      <div className="text-[9px] text-white font-bold">Premium Plan</div>
    </div>
    <div className="space-y-1">
      {['Unlimited Projects', 'Priority Support', 'Advanced Analytics'].map((item) => (
        <div key={item} className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-cyan-400/80 shrink-0" />
          <div className="text-[8px] text-white/70">{item}</div>
        </div>
      ))}
    </div>
    <div className="mt-auto h-6 rounded-lg flex items-center justify-center text-[8px] font-bold text-[#0a0a0a]"
      style={{ background: 'linear-gradient(90deg, #00BDD9, #FF7A00)' }}>
      Subscribe Now
    </div>
  </div>,
]

export default function MobileAppAnimation() {
  return (
    <div className="w-full h-28 flex items-center justify-center gap-3">
      {/* Phone mockup */}
      <div className="relative w-20 h-full">
        <div className="absolute inset-0 rounded-2xl border-2 border-white/20 bg-[#0d0d0d] overflow-hidden shadow-xl">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-2 bg-black rounded-b-lg z-10" />
          <div className="pt-3 h-full overflow-hidden">
            <motion.div
              className="flex h-full"
              animate={{ x: [0, '-100%', '-100%', 0, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', times: [0, 0.4, 0.6, 0.9, 1] }}
              style={{ width: '200%' }}
            >
              {screens.map((screen, i) => (
                <div key={i} style={{ width: '50%' }}>
                  {screen}
                </div>
              ))}
            </motion.div>
          </div>
          {/* Home bar */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-white/30" />
        </div>
      </div>

      {/* Floating notification */}
      <div className="flex flex-col gap-1.5">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: [0, 1, 1, 0], x: [20, 0, 0, 20] }}
          transition={{ duration: 3, delay: 1, repeat: Infinity, repeatDelay: 2 }}
          className="glass rounded-xl border border-white/10 px-2.5 py-1.5 flex items-center gap-2 text-[8px]"
        >
          <div className="w-4 h-4 rounded-md bg-gradient-to-br from-cyan-400/40 to-purple/40 flex items-center justify-center text-[10px]">🔔</div>
          <div>
            <div className="text-white font-semibold">New Order!</div>
            <div className="text-white/50">₹2,499 received</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: [0, 1, 1, 0], x: [20, 0, 0, 20] }}
          transition={{ duration: 3, delay: 3.5, repeat: Infinity, repeatDelay: 2 }}
          className="glass rounded-xl border border-white/10 px-2.5 py-1.5 flex items-center gap-2 text-[8px]"
        >
          <div className="w-4 h-4 rounded-md bg-gradient-to-br from-green-400/40 to-cyan-400/40 flex items-center justify-center text-[10px]">⭐</div>
          <div>
            <div className="text-white font-semibold">5-Star Review!</div>
            <div className="text-white/50">from Priya M.</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
