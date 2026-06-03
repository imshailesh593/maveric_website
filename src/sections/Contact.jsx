import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import ReCAPTCHA from 'react-google-recaptcha'
import { submitLead } from '../services/submitLead'

const SITE_KEY = '6LeneAotAAAAABErUboTKGFMOHugiFkp_aNCKPXR'

const steps = [
  { id: 1, label: 'About You' },
  { id: 2, label: 'Your Project' },
  { id: 3, label: 'Contact Info' },
]

const services = ['Web Development', 'Mobile App', 'E-Commerce', 'SEO', 'Social Media', 'Cybersecurity', 'WordPress', 'Consultancy']
const budgets = ['< ₹50K', '₹50K – ₹2L', '₹2L – ₹5L', '₹5L+']

export default function Contact() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ name: '', company: '', service: '', budget: '', desc: '', email: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [captchaToken, setCaptchaToken] = useState(null)
  const recaptchaRef = useRef(null)

  const headRef = useRef(null)
  const inView = useInView(headRef, { once: true })

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const next = () => setStep((s) => Math.min(s + 1, 3))
  const back = () => setStep((s) => Math.max(s - 1, 1))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    await submitLead({
      name:           form.name,
      email:          form.email,
      phone:          form.phone,
      company:        form.company,
      service:        form.service,
      budget:         form.budget,
      message:        form.desc,
      source:         'Contact Form',
      recaptchaToken: captchaToken,
    })
    setSending(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-pad overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div ref={headRef} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-mono text-accent text-sm tracking-widest uppercase"
          >
            Get in Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-display font-bold text-4xl md:text-5xl text-white mt-3"
          >
            Let's Build Something <span className="text-gradient">Great Together</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-muted mt-4"
          >
            Tell us about your project — we'll respond within 24 hours.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Direct CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >
            <a
              href="https://wa.me/919552302834?text=Hi%20Maveric%2C%20I%27d%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass rounded-2xl border border-border p-5 hover:border-green-500/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 text-xl shrink-0 group-hover:scale-110 transition-transform">
                💬
              </div>
              <div>
                <div className="font-semibold text-white">WhatsApp Us</div>
                <div className="text-muted text-sm">Quick chat, instant reply</div>
              </div>
              <div className="ml-auto text-muted group-hover:text-green-400 transition-colors">→</div>
            </a>

            <a
              href="tel:+919552302834"
              className="flex items-center gap-4 glass rounded-2xl border border-border p-5 hover:border-accent/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-xl shrink-0 group-hover:scale-110 transition-transform">
                📞
              </div>
              <div>
                <div className="font-semibold text-white">Call Us Now</div>
                <div className="text-muted text-sm">+91 95230 28340</div>
              </div>
              <div className="ml-auto text-muted group-hover:text-accent transition-colors">→</div>
            </a>

            <a
              href="mailto:contact@mavericinfotech.in"
              className="flex items-center gap-4 glass rounded-2xl border border-border p-5 hover:border-purple/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-purple/10 flex items-center justify-center text-purple text-xl shrink-0 group-hover:scale-110 transition-transform">
                ✉️
              </div>
              <div>
                <div className="font-semibold text-white">Email Us</div>
                <div className="text-muted text-sm">contact@mavericinfotech.in</div>
              </div>
              <div className="ml-auto text-muted group-hover:text-purple transition-colors">→</div>
            </a>

            <div className="glass rounded-2xl border border-border p-5 space-y-3">
              <div>
                <div className="font-semibold text-white mb-1">Office Address</div>
                <div className="text-muted text-sm leading-relaxed">First Floor, Plot No. 151, Shakuntal Nagar,<br />Isbavi, Pandharpur, Maharashtra, India</div>
              </div>
              <div className="border-t border-border pt-3">
                <div className="font-semibold text-white mb-1">Office Hours</div>
                <div className="text-muted text-sm">Mon – Sat: 10:00 AM – 6:30 PM IST</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-mono">Available now</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Multi-step form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-2xl border border-border p-8"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="font-display font-bold text-2xl text-white mb-2">We Got It!</h3>
                  <p className="text-muted">We'll reach out within 24 hours. Check your inbox or WhatsApp.</p>
                </motion.div>
              ) : (
                <motion.div key="form">
                  {/* Step indicator */}
                  <div className="flex items-center gap-2 mb-8">
                    {steps.map((s, i) => (
                      <div key={s.id} className="flex items-center gap-2 flex-1">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                            step >= s.id
                              ? 'bg-gradient-to-br from-accent to-purple text-bg'
                              : 'bg-surface-2 text-muted border border-border'
                          }`}
                        >
                          {step > s.id ? '✓' : s.id}
                        </div>
                        <span className={`text-xs hidden sm:block transition-colors ${step === s.id ? 'text-white' : 'text-muted'}`}>
                          {s.label}
                        </span>
                        {i < steps.length - 1 && (
                          <div className={`flex-1 h-px transition-all duration-300 ${step > s.id ? 'bg-accent' : 'bg-border'}`} />
                        )}
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit}>
                    <AnimatePresence mode="wait">
                      {step === 1 && (
                        <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                          <div>
                            <label className="text-sm text-muted mb-1.5 block">Your Name *</label>
                            <input
                              type="text"
                              value={form.name}
                              onChange={(e) => update('name', e.target.value)}
                              placeholder="Rajesh Sharma"
                              className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-white placeholder-muted/50 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                            />
                          </div>
                          <div>
                            <label className="text-sm text-muted mb-1.5 block">Company / Business</label>
                            <input
                              type="text"
                              value={form.company}
                              onChange={(e) => update('company', e.target.value)}
                              placeholder="Your Company Ltd."
                              className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-white placeholder-muted/50 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                            />
                          </div>
                          <button
                            type="button"
                            onClick={next}
                            disabled={!form.name}
                            className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-accent to-purple text-bg text-sm disabled:opacity-40 hover:opacity-90 transition-opacity"
                          >
                            Next →
                          </button>
                        </motion.div>
                      )}

                      {step === 2 && (
                        <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                          <div>
                            <label className="text-sm text-muted mb-2 block">Service Needed *</label>
                            <div className="grid grid-cols-2 gap-2">
                              {services.map((s) => (
                                <button
                                  key={s}
                                  type="button"
                                  onClick={() => update('service', s)}
                                  className={`px-3 py-2 rounded-lg text-xs font-medium text-left transition-all ${
                                    form.service === s
                                      ? 'bg-gradient-to-r from-accent/20 to-purple/20 border border-accent/50 text-white'
                                      : 'bg-surface-2 border border-border text-muted hover:border-accent/30 hover:text-white'
                                  }`}
                                >
                                  {s}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div>
                            <label className="text-sm text-muted mb-2 block">Budget Range</label>
                            <div className="flex flex-wrap gap-2">
                              {budgets.map((b) => (
                                <button
                                  key={b}
                                  type="button"
                                  onClick={() => update('budget', b)}
                                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                                    form.budget === b
                                      ? 'bg-accent/20 border border-accent/50 text-accent'
                                      : 'bg-surface-2 border border-border text-muted hover:text-white'
                                  }`}
                                >
                                  {b}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button type="button" onClick={back} className="px-5 py-3 rounded-xl text-sm text-muted border border-border hover:text-white transition-colors">
                              ← Back
                            </button>
                            <button
                              type="button"
                              onClick={next}
                              disabled={!form.service}
                              className="flex-1 py-3 rounded-xl font-semibold bg-gradient-to-r from-accent to-purple text-bg text-sm disabled:opacity-40 hover:opacity-90 transition-opacity"
                            >
                              Next →
                            </button>
                          </div>
                        </motion.div>
                      )}

                      {step === 3 && (
                        <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                          <div>
                            <label className="text-sm text-muted mb-1.5 block">Email Address *</label>
                            <input
                              type="email"
                              value={form.email}
                              onChange={(e) => update('email', e.target.value)}
                              placeholder="you@company.com"
                              className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-white placeholder-muted/50 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                            />
                          </div>
                          <div>
                            <label className="text-sm text-muted mb-1.5 block">Phone / WhatsApp</label>
                            <input
                              type="tel"
                              value={form.phone}
                              onChange={(e) => update('phone', e.target.value)}
                              placeholder="+91 98765 43210"
                              className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-white placeholder-muted/50 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                            />
                          </div>
                          <div>
                            <label className="text-sm text-muted mb-1.5 block">Brief Description</label>
                            <textarea
                              value={form.desc}
                              onChange={(e) => update('desc', e.target.value)}
                              placeholder="Tell us about your project..."
                              rows={3}
                              className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-white placeholder-muted/50 text-sm focus:outline-none focus:border-accent/50 transition-colors resize-none"
                            />
                          </div>
                          {/* reCAPTCHA */}
                          <div className="flex justify-center">
                            <ReCAPTCHA
                              ref={recaptchaRef}
                              sitekey={SITE_KEY}
                              onChange={token => setCaptchaToken(token)}
                              onExpired={() => setCaptchaToken(null)}
                              theme="dark"
                            />
                          </div>

                          <div className="flex gap-2">
                            <button type="button" onClick={back} className="px-5 py-3 rounded-xl text-sm text-muted border border-border hover:text-white transition-colors">
                              ← Back
                            </button>
                            <button
                              type="submit"
                              disabled={!form.email || !captchaToken || sending}
                              className="flex-1 py-3 rounded-xl font-semibold bg-gradient-to-r from-accent to-purple text-bg text-sm disabled:opacity-40 hover:opacity-90 transition-opacity glow-cyan"
                            >
                              {sending ? 'Sending…' : 'Send Message 🚀'}
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
