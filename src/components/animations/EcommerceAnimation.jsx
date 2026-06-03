import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const products = [
  { name: 'Premium Tee', price: '₹899', color: '#00BDD9' },
  { name: 'Sneakers', price: '₹2,499', color: '#FF7A00' },
  { name: 'Watch', price: '₹4,999', color: '#00BDD9' },
]

export default function EcommerceAnimation() {
  const [cartCount, setCartCount] = useState(0)
  const [adding, setAdding] = useState(null)

  useEffect(() => {
    let i = 0
    const cycle = () => {
      setAdding(i % products.length)
      setTimeout(() => {
        setCartCount((c) => c + 1)
        setAdding(null)
        i++
        setTimeout(cycle, 1200)
      }, 600)
    }
    const t = setTimeout(cycle, 800)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="w-full h-28 bg-[#0d0d0d] rounded-xl border border-white/10 p-2.5 flex flex-col gap-2">
      {/* Top bar: store name + cart */}
      <div className="flex items-center justify-between">
        <div className="text-[9px] font-bold text-white/80">StyleBay Store</div>
        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/10">
          <span className="text-[10px]">🛒</span>
          <motion.span
            key={cartCount}
            initial={{ scale: 1.5, color: '#00BDD9' }}
            animate={{ scale: 1, color: '#ffffff' }}
            className="text-[9px] font-bold"
          >
            {cartCount}
          </motion.span>
        </div>
      </div>

      {/* Products row */}
      <div className="flex gap-1.5 flex-1">
        {products.map((p, i) => (
          <div
            key={p.name}
            className="flex-1 rounded-lg border border-white/10 p-1.5 flex flex-col justify-between relative overflow-hidden"
            style={{ background: `${p.color}08` }}
          >
            {/* Product image placeholder */}
            <div className="h-8 rounded-md mb-1" style={{ background: `${p.color}20` }} />
            <div className="text-[7px] text-white/70 font-medium">{p.name}</div>
            <div className="text-[8px] font-bold" style={{ color: p.color }}>{p.price}</div>

            {/* Add to cart flash */}
            <AnimatePresence>
              {adding === i && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 1.2 }}
                  className="absolute inset-0 flex items-center justify-center rounded-lg"
                  style={{ background: `${p.color}30` }}
                >
                  <span className="text-lg">✓</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Checkout bar */}
      <AnimatePresence>
        {cartCount > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="h-5 rounded-lg flex items-center justify-center text-[8px] font-bold text-[#0a0a0a]"
            style={{ background: 'linear-gradient(90deg, #00BDD9, #FF7A00)' }}
          >
            Checkout ({cartCount} items) →
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
