import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const blocks = [
  { type: 'Heading', color: '#FF7A00', w: '80%' },
  { type: 'Paragraph', color: '#00BDD9', w: '100%' },
  { type: 'Image', color: '#FF7A00', w: '100%', h: 20 },
  { type: 'Button', color: '#00BDD9', w: '40%' },
]

export default function WordPressAnimation() {
  const [activeBlock, setActiveBlock] = useState(null)
  const [visibleBlocks, setVisibleBlocks] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setVisibleBlocks((v) => Math.min(v + 1, blocks.length))
    }, 500)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => {
      setActiveBlock((a) => (a === null ? 0 : (a + 1) % blocks.length))
    }, 1000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="w-full h-28 flex gap-2">
      {/* Block inserter sidebar */}
      <div className="w-16 bg-[#0d0d0d] rounded-xl border border-white/10 p-1.5 flex flex-col gap-1">
        <div className="text-[7px] text-white/30 font-mono mb-0.5">BLOCKS</div>
        {blocks.map((b, i) => (
          <motion.div
            key={b.type}
            animate={activeBlock === i ? { borderColor: b.color, color: b.color } : { borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }}
            className="px-1.5 py-1 rounded-md border text-[7px] font-mono cursor-pointer transition-colors"
          >
            {b.type}
          </motion.div>
        ))}
      </div>

      {/* Canvas */}
      <div className="flex-1 bg-[#0d0d0d] rounded-xl border border-white/10 p-2 flex flex-col gap-1.5 justify-center overflow-hidden">
        {blocks.slice(0, visibleBlocks).map((b, i) => (
          <motion.div
            key={b.type}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            {b.h ? (
              <div
                className="rounded-md"
                style={{
                  height: b.h,
                  background: `${b.color}20`,
                  border: activeBlock === i ? `1px solid ${b.color}60` : '1px solid rgba(255,255,255,0.08)',
                  width: b.w,
                }}
              />
            ) : (
              <div
                className="rounded-md"
                style={{
                  height: b.type === 'Button' ? 10 : 6,
                  background: b.type === 'Button' ? b.color : `${b.color}30`,
                  border: activeBlock === i ? `1px solid ${b.color}60` : 'none',
                  width: b.w,
                }}
              />
            )}

            {/* Active block outline drag handle */}
            {activeBlock === i && (
              <motion.div
                layoutId="handle"
                className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-3 rounded-full"
                style={{ background: b.color }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
