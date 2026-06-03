import { motion } from 'framer-motion'

const nodes = [
  { id: 'core', x: 50, y: 50, r: 8, color: '#00BDD9', label: 'You' },
  { id: 'web', x: 20, y: 20, r: 5, color: '#FF7A00', label: 'Web' },
  { id: 'cloud', x: 80, y: 20, r: 5, color: '#00BDD9', label: 'Cloud' },
  { id: 'sec', x: 15, y: 70, r: 5, color: '#FF7A00', label: 'Sec' },
  { id: 'ai', x: 85, y: 70, r: 5, color: '#00BDD9', label: 'AI' },
  { id: 'mob', x: 50, y: 85, r: 5, color: '#FF7A00', label: 'Mobile' },
]

const edges = [
  ['core', 'web'], ['core', 'cloud'], ['core', 'sec'],
  ['core', 'ai'], ['core', 'mob'], ['web', 'cloud'], ['sec', 'mob'],
]

function getNode(id) {
  return nodes.find((n) => n.id === id)
}

export default function ConsultancyAnimation() {
  return (
    <div className="w-full h-28 flex gap-2">
      {/* Network graph */}
      <div className="flex-1 bg-[#0d0d0d] rounded-xl border border-white/10 relative overflow-hidden">
        <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0">
          {/* Edges */}
          {edges.map(([a, b], i) => {
            const na = getNode(a)
            const nb = getNode(b)
            return (
              <motion.line
                key={`${a}-${b}`}
                x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
                stroke="rgba(0,212,255,0.2)"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: i * 0.12, duration: 0.4 }}
              />
            )
          })}

          {/* Pulse along edges */}
          {edges.slice(0, 3).map(([a, b], i) => {
            const na = getNode(a)
            const nb = getNode(b)
            return (
              <motion.circle
                key={`pulse-${a}-${b}`}
                r="1"
                fill="#00BDD9"
                animate={{
                  cx: [na.x, nb.x],
                  cy: [na.y, nb.y],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.5 + 1,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />
            )
          })}

          {/* Nodes */}
          {nodes.map((node, i) => (
            <motion.g key={node.id} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 + 0.3, type: 'spring' }}>
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.r}
                fill={`${node.color}30`}
                stroke={node.color}
                strokeWidth="1"
                animate={node.id === 'core' ? { r: [node.r, node.r + 1.5, node.r] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <text x={node.x} y={node.y + node.r + 4} textAnchor="middle" fontSize="4" fill="rgba(255,255,255,0.6)">
                {node.label}
              </text>
            </motion.g>
          ))}
        </svg>
      </div>

      {/* Stats */}
      <div className="w-20 flex flex-col gap-1.5 justify-center">
        {[
          { label: 'Uptime', val: '99.9%', color: '#00BDD9' },
          { label: 'Latency', val: '12ms', color: '#FF7A00' },
          { label: 'Threats', val: '0', color: '#4ade80' },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.15 }}
            className="glass rounded-lg border border-white/10 px-2 py-1.5"
          >
            <div className="text-[9px] font-bold font-mono" style={{ color: s.color }}>{s.val}</div>
            <div className="text-[7px] text-white/40">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
