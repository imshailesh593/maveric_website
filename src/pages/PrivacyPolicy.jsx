import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import Cursor from '../components/Cursor'
import { useLenis } from '../hooks/useLenis'

function Section({ title, index, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="rounded-2xl border border-white/10 p-8 md:p-10"
      style={{ background: '#111111' }}
    >
      <h2 className="font-display font-bold text-lg text-white mb-4">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-white/65">
        {children}
      </div>
    </motion.div>
  )
}

function P({ children }) {
  return <p>{children}</p>
}

function Bullets({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2">
          <span className="text-accent shrink-0 mt-0.5">—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function PrivacyPolicy() {
  useLenis()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Privacy Policy | Maveric Infotech'
  }, [])

  return (
    <div className="bg-bg min-h-screen">
      <Cursor />
      <Navbar />

      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-mono text-accent text-sm tracking-widest uppercase">
            Legal
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display font-bold text-4xl md:text-5xl text-white mt-3 mb-4">
            Privacy Policy
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-white/50 text-sm">
            Last Updated: July 1, 2026 &nbsp;·&nbsp; Effective Date: July 1, 2026
          </motion.p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6 space-y-6">

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="rounded-2xl border border-white/10 p-8 md:p-12" style={{ background: '#111111' }}>
            <p className="text-white/70 leading-relaxed text-sm">
              Maveric Infotech ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit <span className="text-accent">mavericinfotech.in</span> or engage with our services. Please read this policy carefully.
            </p>
          </motion.div>

          <Section title="1. Information We Collect" index={0}>
            <P>We collect information you provide directly to us when you use our website, fill out forms, or contact us. This includes:</P>
            <Bullets items={[
              'Personal Identification Information: Name, email address, phone number, WhatsApp number, company name, and job title.',
              'Project Information: Details about your project requirements, budget range, and service interests submitted through our contact or lead forms.',
              'Technical Data: IP address, browser type and version, operating system, referring URLs, and pages visited — collected automatically through cookies and analytics tools.',
              'Communication Data: Records of correspondence when you contact us via email, WhatsApp, or phone.',
            ]} />
          </Section>

          <Section title="2. How We Use Your Information" index={1}>
            <P>Maveric Infotech uses the collected information for the following purposes:</P>
            <Bullets items={[
              'To respond to your inquiries and provide requested services.',
              'To send you project proposals, quotations, and relevant communications.',
              'To improve our website, services, and user experience.',
              'To send periodic updates or promotional materials (you may opt out at any time).',
              'To comply with legal obligations and protect our rights.',
              'To analyse website traffic and usage patterns via Google Analytics.',
            ]} />
            <P>We will never sell, trade, or rent your personal information to third parties.</P>
          </Section>

          <Section title="3. Cookies & Tracking Technologies" index={2}>
            <P>Our website uses cookies and similar tracking technologies to enhance your experience:</P>
            <Bullets items={[
              'Essential Cookies: Required for the website to function properly, including session management.',
              'Analytics Cookies: Google Analytics cookies help us understand how visitors interact with our site. This data is anonymised.',
              'reCAPTCHA: We use Google reCAPTCHA v3 to protect our forms from spam and abuse. reCAPTCHA collects hardware and software information and sends this data to Google for analysis.',
            ]} />
            <P>You can control cookie preferences through your browser settings. Disabling cookies may affect some website functionality.</P>
          </Section>

          <Section title="4. Data Storage & Security" index={3}>
            <P>We take reasonable technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.</P>
            <Bullets items={[
              'Form submissions are transmitted via encrypted HTTPS connections.',
              'Lead and enquiry data is sent securely via the Resend email API to our internal team.',
              'We retain your personal data only as long as necessary to fulfil the purpose for which it was collected, or as required by law.',
              'Maveric Infotech does not store credit card or payment information on its servers.',
            ]} />
          </Section>

          <Section title="5. Third-Party Services" index={4}>
            <P>We may use the following third-party services that have their own privacy policies:</P>
            <Bullets items={[
              'Google Analytics — Website traffic analysis',
              'Google reCAPTCHA — Spam protection',
              'Resend — Transactional email delivery',
              'WhatsApp Business — Direct communication',
            ]} />
            <P>We are not responsible for the privacy practices of these third-party services. We encourage you to review their respective privacy policies.</P>
          </Section>

          <Section title="6. Your Rights" index={5}>
            <P>You have the following rights regarding your personal data:</P>
            <Bullets items={[
              'Access: Request a copy of the personal information we hold about you.',
              'Correction: Request correction of any inaccurate or incomplete information.',
              'Deletion: Request deletion of your personal data, subject to legal obligations.',
              'Opt-Out: Unsubscribe from marketing communications at any time.',
              'Portability: Request that we provide your data in a machine-readable format.',
            ]} />
            <P>To exercise any of these rights, please contact us at contact@mavericinfotech.in.</P>
          </Section>

          <Section title="7. Children's Privacy" index={6}>
            <P>Our services are not directed at individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected information from a minor, please contact us immediately and we will delete such information promptly.</P>
          </Section>

          <Section title="8. Changes to This Policy" index={7}>
            <P>Maveric Infotech reserves the right to update this Privacy Policy at any time. Changes will be effective immediately upon posting to our website. We encourage you to review this page periodically.</P>
            <P>Continued use of our website after any changes constitutes your acceptance of the revised Privacy Policy.</P>
          </Section>

          <Section title="9. Contact Us" index={8}>
            <P>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:</P>
            <Bullets items={[
              'Email: contact@mavericinfotech.in',
              'Phone / WhatsApp: +91 95523 02834',
              'Address: First Floor, Plot No. 151, Shakuntal Nagar, Isbavi, Pandharpur, Maharashtra 413304, India',
              'Office Hours: Monday – Saturday, 10:00 AM – 6:30 PM IST',
            ]} />
          </Section>

        </div>
      </section>

      <Footer />
    </div>
  )
}
