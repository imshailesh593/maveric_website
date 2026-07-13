import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const milestones = [
  { year: '2014', title: 'Founded', desc: 'Maveric Infotech started with 2 developers and a vision.' },
  { year: '2016', title: 'First 20 Clients', desc: 'Grew to a full team of designers, devs, and SEO specialists.' },
  { year: '2019', title: 'Mobile Division', desc: 'Launched our mobile app development vertical.' },
  { year: '2022', title: '100+ Projects', desc: 'Crossed 100 delivered projects with 98% satisfaction rate.' },
  { year: '2024', title: 'Cybersecurity', desc: 'Added full-stack security and IT consultancy services.' },
  { year: 'Now', title: 'Growing Together', desc: 'Serving 50+ active clients across India and internationally.' },
]

const values = [
  { icon: '🤝', label: 'Radical Integrity', desc: 'Our people truly care for our work and for each other' },
  { icon: '👥', label: 'People First', desc: 'We believe that culture builds a thriving company' },
  { icon: '⚙️', label: 'Process Perfection', desc: 'We\'re driven to becoming the best version of ourselves' },
  { icon: '🔒', label: 'Reliability', desc: 'We\'re here post-launch, always by your side' },
]

export default function About() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true })

  return (
    <section id="about" className="section-pad overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headRef} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
            className="font-mono text-accent text-sm tracking-widest uppercase"
          >
            About Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-display font-bold text-4xl md:text-5xl text-white mt-3"
          >
            10 Years of{' '}
            <span className="text-gradient">Digital Excellence</span>
          </motion.h2>
        </div>

        {/* Two-column intro */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              Maveric Infotech is a premier IT and digital marketing firm headquartered in
              Pandharpur, Maharashtra. Founded by Shailesh Kharat, we empower businesses of
              all sizes to achieve their goals in the digital landscape.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              From a passionate startup to a team of specialists across web, mobile, design,
              SEO, and cybersecurity — we've grown by doing one thing consistently: delivering
              results that matter to our clients across India and internationally.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.label} className="glass rounded-xl border border-border p-4">
                  <div className="text-2xl mb-2">{v.icon}</div>
                  <div className="font-semibold text-white text-sm mb-1">{v.label}</div>
                  <div className="text-muted text-xs">{v.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Vertical line */}
            <div className="absolute left-[88px] top-0 bottom-0 w-px bg-gradient-to-b from-accent via-purple to-transparent" />

            <div className="space-y-6">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-6"
                >
                  <div className="w-[76px] text-right shrink-0">
                    <span className="font-mono text-accent text-sm font-bold">{m.year}</span>
                  </div>
                  {/* Dot */}
                  <div className="relative shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-accent to-purple border-2 border-bg" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm mb-1">{m.title}</div>
                    <div className="text-muted text-sm">{m.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
