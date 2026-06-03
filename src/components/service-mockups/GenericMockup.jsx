import { motion } from 'framer-motion'

const configs = {
  ecommerce: {
    color: '#00BDD9',
    title: 'StyleBay Store',
    items: [
      { emoji: '👗', name: 'Summer Dress', price: '₹899' },
      { emoji: '👟', name: 'Sneakers', price: '₹2,499' },
      { emoji: '⌚', name: 'Smart Watch', price: '₹4,999' },
    ],
    badge: '🛒 Checkout (3 items) →',
    blocks: [
      { icon: '💳', label: 'Razorpay / UPI', sub: 'Payments' },
      { icon: '📦', label: 'Inventory', sub: 'Auto-managed' },
      { icon: '🚚', label: 'Shiprocket', sub: 'Logistics' },
    ],
  },
  social: {
    color: '#FF7A00',
    title: '@maveric_infotech',
    items: [
      { emoji: '📸', name: '124K Reach', price: '↑ +42%' },
      { emoji: '❤️', name: '8.2K Engage', price: '↑ +38%' },
      { emoji: '🔗', name: '3.1K Clicks', price: '↑ +142%' },
    ],
    badge: '🟢 Campaign Live',
    blocks: [
      { icon: '📸', label: 'Instagram', sub: 'Managed' },
      { icon: '💼', label: 'LinkedIn', sub: 'Managed' },
      { icon: '🎯', label: 'Meta Ads', sub: 'Active' },
    ],
  },
  wordpress: {
    color: '#00BDD9',
    title: 'WordPress Admin',
    items: [
      { emoji: '📝', name: 'Pages', price: '24 pages' },
      { emoji: '🔌', name: 'Plugins', price: '8 active' },
      { emoji: '⚡', name: 'Page Speed', price: '98/100' },
    ],
    badge: '✓ Published & Live',
    blocks: [
      { icon: '🎨', label: 'Custom Theme', sub: 'From scratch' },
      { icon: '🔒', label: 'Secured', sub: 'Hardened' },
      { icon: '📚', label: 'CMS Ready', sub: 'Easy editing' },
    ],
  },
  consultancy: {
    color: '#FF7A00',
    title: 'Infrastructure Map',
    items: [
      { emoji: '☁️', name: 'Cloud', price: 'AWS / GCP' },
      { emoji: '🐳', name: 'Docker', price: 'Containerised' },
      { emoji: '🔄', name: 'CI/CD', price: 'Automated' },
    ],
    badge: '✓ Systems Optimised',
    blocks: [
      { icon: '💰', label: 'Cost Cut', sub: 'Avg 35%' },
      { icon: '🚀', label: 'Deploy Time', sub: 'Minutes' },
      { icon: '99.9%', label: 'Uptime SLA', sub: 'Guaranteed' },
    ],
  },
}

export default function GenericMockup({ type = 'ecommerce' }) {
  const cfg = configs[type] || configs.ecommerce
  return (
    <div className="flex items-center justify-center gap-8 py-8">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
        className="relative rounded-2xl overflow-hidden shadow-2xl"
        style={{ width: 320, background: 'var(--card-bg)', border: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="absolute inset-0 pointer-events-none opacity-10" style={{ background: `radial-gradient(circle at 30% 20%, ${cfg.color}, transparent 60%)` }} />
        {/* Header */}
        <div className="px-5 py-4 border-b border-white/7 flex items-center justify-between">
          <span className="text-xs font-semibold text-white">{cfg.title}</span>
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        </div>
        {/* Items */}
        <div className="px-5 py-4 space-y-3">
          {cfg.items.map((item, i) => (
            <motion.div key={item.name} className="flex items-center justify-between"
              initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.12 }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg" style={{ background: `${cfg.color}18` }}>
                  {item.emoji}
                </div>
                <span className="text-sm text-white/70">{item.name}</span>
              </div>
              <span className="text-sm font-semibold" style={{ color: cfg.color }}>{item.price}</span>
            </motion.div>
          ))}
        </div>
        {/* CTA badge */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
          className="mx-5 mb-5 rounded-xl py-2.5 text-center text-xs font-semibold"
          style={{ background: `linear-gradient(90deg, ${cfg.color}cc, ${cfg.color}80)`, color: '#fff' }}>
          {cfg.badge}
        </motion.div>
      </motion.div>

      <div className="hidden lg:flex flex-col gap-3">
        {cfg.blocks.map((b, i) => (
          <motion.div key={b.label} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.15 }}
            className="rounded-xl px-4 py-3 flex items-center gap-3"
            style={{ background: 'var(--card-bg)', border: '1px solid rgba(255,255,255,0.08)', minWidth: 160 }}>
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
