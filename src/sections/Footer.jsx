import { useState } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Services',  href: '/#services' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'About',     href: '/#about' },
  { label: 'LocalApex', href: 'https://localapex.mavericinfotech.in', external: true },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms',     href: '/terms-and-conditions' },
]

const socials = [
  {
    label: 'LinkedIn', href: 'https://in.linkedin.com/company/maveric-infotech',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    label: 'Instagram', href: 'https://www.instagram.com/maveric_infotech',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>,
  },
  {
    label: 'Facebook', href: 'https://www.facebook.com/mavericinfotech',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  },
  {
    label: 'WhatsApp', href: 'https://wa.me/919552302834',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>,
  },
]

const FIELD = 'w-full border bg-[#2a2a2a] px-4 py-3.5 font-mono text-sm uppercase tracking-wide placeholder-opacity-50 outline-none transition-colors focus:border-white'

export default function Footer() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  const onSubmit = e => {
    e.preventDefault()
    const { name, email, message } = form
    const subject = `Inquiry from ${name}`
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`
    window.location.href = `mailto:info@mavericinfotech.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setStatus('sent')
    setTimeout(() => setStatus('idle'), 4000)
  }

  const btnLabel = status === 'sent' ? "Thanks — we'll be in touch!" : 'Submit'

  const fieldStyle = { borderColor: 'rgb(0,189,217)', color: 'rgb(0,189,217)' }
  const placeholderStyle = { '--placeholder-color': 'rgba(0,189,217,0.5)' }

  return (
    <footer id="contact" className="bg-yellow">
      <div className="mx-auto max-w-site px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: brand + nav + socials */}
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center bg-black">
                <span className="display text-2xl text-white">M</span>
              </div>
              <span className="display text-2xl text-black">
                MAVERIC<br />INFOTECH
              </span>
            </div>

            <p className="mt-8 font-mono text-sm uppercase tracking-widest text-black/70">
              Pandharpur &bull; Maharashtra &bull; India
            </p>

            <nav className="mt-10">
              <ul className="flex flex-col gap-2">
                {navLinks.map(l => (
                  <li key={l.href}>
                    {l.external
                      ? <a href={l.href} target="_blank" rel="noopener noreferrer"
                          className="font-mono text-sm uppercase tracking-widest text-black/70 transition-colors hover:text-black">
                          {l.label} ↗
                        </a>
                      : <a href={l.href}
                          className="font-mono text-sm uppercase tracking-widest text-black/70 transition-colors hover:text-black">
                          {l.label}
                        </a>
                    }
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-10 flex gap-3">
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center bg-black text-white transition-opacity hover:opacity-75"
                  aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>

            <p className="mt-12 font-mono text-xs uppercase tracking-widest text-black/50">
              © {new Date().getFullYear()} Maveric Infotech. All rights reserved.
            </p>
          </div>

          {/* Right: contact form */}
          <div>
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-black">
              Get in Touch
            </p>
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <input
                name="name" required autoComplete="name"
                value={form.name} onChange={set('name')} placeholder="Name"
                className={FIELD} style={fieldStyle} />
              <input
                name="email" required type="email" autoComplete="email"
                value={form.email} onChange={set('email')} placeholder="Email"
                className={FIELD} style={fieldStyle} />
              <textarea
                name="message" required rows={6}
                value={form.message} onChange={set('message')} placeholder="Message"
                className={`${FIELD} resize-none`} style={fieldStyle} />
              <button type="submit" disabled={status === 'sent'}
                className="w-full py-4 font-mono text-sm font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{ background: '#0f0f0f' }}>
                {btnLabel}
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}
