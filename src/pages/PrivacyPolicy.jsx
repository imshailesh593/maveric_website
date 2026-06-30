import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import Cursor from '../components/Cursor'

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect information you provide directly to us when you use our website, fill out forms, or contact us. This includes:

• **Personal Identification Information:** Name, email address, phone number, WhatsApp number, company name, and job title.
• **Project Information:** Details about your project requirements, budget range, and service interests submitted through our contact or lead forms.
• **Technical Data:** IP address, browser type and version, operating system, referring URLs, and pages visited — collected automatically through cookies and analytics tools.
• **Communication Data:** Records of correspondence when you contact us via email, WhatsApp, or phone.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `Maveric Infotech uses the collected information for the following purposes:

• To respond to your inquiries and provide requested services.
• To send you project proposals, quotations, and relevant communications.
• To improve our website, services, and user experience.
• To send periodic updates, newsletters, or promotional materials (you may opt out at any time).
• To comply with legal obligations and protect our rights.
• To analyse website traffic and usage patterns via Google Analytics.

We will never sell, trade, or rent your personal information to third parties.`,
  },
  {
    title: '3. Cookies & Tracking Technologies',
    content: `Our website uses cookies and similar tracking technologies to enhance your experience:

• **Essential Cookies:** Required for the website to function properly, including session management.
• **Analytics Cookies:** Google Analytics cookies help us understand how visitors interact with our site (pages visited, time spent, etc.). This data is anonymised.
• **reCAPTCHA:** We use Google reCAPTCHA v3 to protect our forms from spam and abuse. reCAPTCHA collects hardware and software information and sends this data to Google for analysis.

You can control cookie preferences through your browser settings. Disabling cookies may affect some website functionality.`,
  },
  {
    title: '4. Data Storage & Security',
    content: `We take reasonable technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.

• Form submissions are transmitted via encrypted HTTPS connections.
• Lead and enquiry data is sent securely via the Resend email API to our internal team.
• We retain your personal data only as long as necessary to fulfil the purpose for which it was collected, or as required by law.
• Maveric Infotech does not store credit card or payment information on its servers. Payments (if any) are processed by authorised third-party payment gateways.`,
  },
  {
    title: '5. Third-Party Services',
    content: `We may use the following third-party services that have their own privacy policies:

• **Google Analytics** — Website traffic analysis (policies.google.com/privacy)
• **Google reCAPTCHA** — Spam protection (policies.google.com/privacy)
• **Resend** — Transactional email delivery (resend.com/privacy)
• **WhatsApp Business** — Direct communication via WhatsApp

We are not responsible for the privacy practices of these third-party services. We encourage you to review their respective privacy policies.`,
  },
  {
    title: '6. Your Rights',
    content: `You have the following rights regarding your personal data:

• **Access:** Request a copy of the personal information we hold about you.
• **Correction:** Request correction of any inaccurate or incomplete information.
• **Deletion:** Request deletion of your personal data, subject to legal obligations.
• **Opt-Out:** Unsubscribe from marketing communications at any time by contacting us or clicking the unsubscribe link in any email.
• **Portability:** Request that we provide your data in a machine-readable format.

To exercise any of these rights, please contact us at contact@mavericinfotech.in.`,
  },
  {
    title: '7. Children\'s Privacy',
    content: `Our services are not directed at individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected information from a minor, please contact us immediately and we will delete such information promptly.`,
  },
  {
    title: '8. Changes to This Policy',
    content: `Maveric Infotech reserves the right to update this Privacy Policy at any time. Changes will be effective immediately upon posting to our website. We encourage you to review this page periodically. The "Last Updated" date at the bottom of this page reflects when the policy was last revised.

Continued use of our website after any changes constitutes your acceptance of the revised Privacy Policy.`,
  },
  {
    title: '9. Contact Us',
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:

• **Email:** contact@mavericinfotech.in
• **Phone / WhatsApp:** +91 95523 02834
• **Address:** First Floor, Plot No. 151, Shakuntal Nagar, Isbavi, Pandharpur, Maharashtra 413304, India
• **Office Hours:** Monday – Saturday, 10:00 AM – 6:30 PM IST`,
  },
]

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Privacy Policy | Maveric Infotech'
  }, [])

  return (
    <div className="bg-bg min-h-screen">
      <Cursor />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-accent text-sm tracking-widest uppercase"
          >
            Legal
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display font-bold text-4xl md:text-5xl text-white mt-3 mb-4"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted text-sm"
          >
            Last Updated: July 1, 2026 &nbsp;·&nbsp; Effective Date: July 1, 2026
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl border border-border p-8 md:p-12 mb-8"
          >
            <p className="text-white/70 leading-relaxed">
              Maveric Infotech ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website{' '}
              <span className="text-accent">mavericinfotech.in</span> or engage with our services. Please read this policy carefully.
            </p>
          </motion.div>

          <div className="space-y-6">
            {sections.map((sec, i) => (
              <motion.div
                key={sec.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.4 }}
                className="glass rounded-2xl border border-border p-8 md:p-10"
              >
                <h2 className="font-display font-bold text-xl text-white mb-4">{sec.title}</h2>
                <div className="text-white/65 leading-relaxed text-sm space-y-2">
                  {sec.content.split('\n').map((line, j) => {
                    if (!line.trim()) return null
                    if (line.startsWith('•')) {
                      const parts = line.replace('• ', '').split('**')
                      return (
                        <p key={j} className="flex gap-2">
                          <span className="text-accent mt-0.5 shrink-0">—</span>
                          <span>
                            {parts.map((part, k) =>
                              k % 2 === 1 ? <strong key={k} className="text-white font-semibold">{part}</strong> : part
                            )}
                          </span>
                        </p>
                      )
                    }
                    return <p key={j}>{line}</p>
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
