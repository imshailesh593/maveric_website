import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { submitLead } from '../services/submitLead'

const services = [
  'Web Development', 'Mobile App', 'E-Commerce', 'SEO & Growth',
  'Social Media & Marketing', 'Cybersecurity', 'WordPress', 'IT Consultancy',
]

export default function LeadPopup({ onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', service: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const { executeRecaptcha } = useGoogleReCaptcha()

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    const token = executeRecaptcha ? await executeRecaptcha('lead_popup') : ''
    await submitLead({
      name:           form.name,
      phone:          form.phone,
      service:        form.service,
      source:         'Lead Popup',
      recaptchaToken: token,
    })
    setSending(false)
    setSubmitted(true)
    setTimeout(onClose, 2800)
  }

  return (
    <motion.div
      className="fixed inset-0 z-[9998] flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <motion.div
        className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[var(--card-bg-elevated)] overflow-hidden shadow-2xl"
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 16 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="h-[2px] w-full" style={{ background: 'linear-gradient(90deg, #00BDD9, #FF7A00)' }} />

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-14 px-8 text-center">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="font-display font-bold text-2xl text-white mb-2">We'll Be in Touch!</h3>
              <p className="text-white/45 text-sm">Our team will reach out within 24 hours. Keep an eye on your WhatsApp or inbox.</p>
            </motion.div>
          ) : (
            <motion.div key="form" className="p-7">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-accent mb-1">Free Consultation</p>
                  <h2 className="font-display font-bold text-xl text-white leading-snug">
                    Let's Build Something <span className="text-gradient">Great Together</span>
                  </h2>
                  <p className="text-white/40 text-xs mt-1.5">Drop your details — we'll respond within 24 hours.</p>
                </div>
                <button onClick={onClose}
                  className="shrink-0 w-8 h-8 rounded-full bg-white/6 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all text-sm ml-4">
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input type="text" placeholder="Your Name *" value={form.name}
                  onChange={e => update('name', e.target.value)} required
                  className="w-full rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                  style={{ background: 'var(--input-bg)', border: '1px solid rgba(255,255,255,0.12)', colorScheme: 'dark' }}
                  onFocus={e => e.target.style.borderColor = 'rgba(0,189,217,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'} />

                <input type="tel" placeholder="WhatsApp / Phone *" value={form.phone}
                  onChange={e => update('phone', e.target.value)} required
                  className="w-full rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                  style={{ background: 'var(--input-bg)', border: '1px solid rgba(255,255,255,0.12)', colorScheme: 'dark' }}
                  onFocus={e => e.target.style.borderColor = 'rgba(0,189,217,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'} />

                <select value={form.service} onChange={e => update('service', e.target.value)}
                  className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors appearance-none"
                  style={{ background: 'var(--input-bg)', border: '1px solid rgba(255,255,255,0.12)', color: form.service ? '#fff' : 'rgba(255,255,255,0.35)', colorScheme: 'dark' }}
                  onFocus={e => e.target.style.borderColor = 'rgba(0,189,217,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}>
                  <option value="" disabled>Service Interested In</option>
                  {services.map(s => <option key={s} value={s} style={{ background: 'var(--input-bg)', color: '#fff' }}>{s}</option>)}
                </select>

                <button type="submit"
                  disabled={!form.name || !form.phone || sending}
                  className="w-full py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-accent to-purple text-bg hover:opacity-90 transition-opacity disabled:opacity-40 mt-1">
                  {sending ? 'Sending…' : 'Get Free Consultation →'}
                </button>
              </form>

              <button onClick={onClose}
                className="w-full text-center text-[11px] text-white/25 hover:text-white/50 transition-colors mt-4">
                No thanks, I'll look around first
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
