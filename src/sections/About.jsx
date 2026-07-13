import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const milestones = [
  { year: '2014', title: 'Founded', desc: 'Started with 2 developers and a clear vision to build better digital products.' },
  { year: '2016', title: 'First 20 Clients', desc: 'Grew to a full team of designers, developers, and SEO specialists.' },
  { year: '2019', title: 'Mobile Division', desc: 'Launched our Flutter mobile app development vertical.' },
  { year: '2022', title: '100+ Projects', desc: 'Crossed 100 delivered projects with a 98% client satisfaction rate.' },
  { year: '2024', title: 'Cybersecurity', desc: 'Added full-stack security auditing and IT consultancy services.' },
  { year: 'Now', title: '50+ Active Clients', desc: 'Serving businesses across India and internationally, every day.' },
]

const values = [
  { n: '01', label: 'Radical Integrity',    desc: 'We say what we mean and deliver what we promise — no exceptions.' },
  { n: '02', label: 'People First',          desc: 'Great culture builds a great company. We invest in our team.' },
  { n: '03', label: 'Process Perfection',    desc: 'Driven to sharpen our craft with every project we ship.' },
  { n: '04', label: 'Lifelong Reliability',  desc: 'We don\'t disappear after launch. We\'re here for the long run.' },
]

export default function About() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section id="about" className="px-6 py-24 md:px-10 md:py-32 bg-bg">
      <div className="mx-auto max-w-[1600px]">

        {/* Header */}
        <div ref={headRef} className="mb-20 max-w-3xl">
          <motion.span
            initial={{ opacity: 0 }} animate={headInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-widest text-accent">
            About Maveric
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }} animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="font-display font-black text-5xl leading-tight mt-4 text-white md:text-7xl"
            style={{ textWrap: 'balance' }}>
            10 years. 120 projects. One goal.
          </motion.h2>
        </div>

        {/* Two-column body */}
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">

          {/* Left: intro + values */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              Maveric Infotech is a premier IT and digital marketing firm headquartered in
              Pandharpur, Maharashtra. Founded by Shailesh Kharat, we empower businesses of
              all sizes to grow in the digital landscape.
            </p>
            <p className="text-base text-white/45 leading-relaxed mb-16">
              From a passionate two-person startup to a full team of specialists across web,
              mobile, design, SEO, and cybersecurity — we&apos;ve grown by doing one thing consistently:
              delivering results that actually matter.
            </p>

            {/* Values — table style like Services */}
            <div className="divide-y" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', divideColor: 'rgba(255,255,255,0.06)' }}>
              {values.map((v) => (
                <div key={v.n} className="grid grid-cols-12 gap-4 py-5 items-start"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className="col-span-1 font-mono text-xs text-accent pt-0.5">{v.n}</span>
                  <span className="col-span-4 font-display font-black text-white text-base">{v.label}</span>
                  <span className="col-span-7 text-sm text-white/40 leading-relaxed">{v.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: timeline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay: 0.1 }}>
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-10">Our Journey</p>

            <div className="relative pl-6" style={{ borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="mb-10 last:mb-0 relative">
                  {/* Dot */}
                  <div className="absolute -left-[1.875rem] top-1 w-2.5 h-2.5 rounded-full bg-accent" />
                  <span className="font-mono text-xs text-accent block mb-1">{m.year}</span>
                  <h3 className="font-display font-black text-white text-xl mb-1">{m.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
