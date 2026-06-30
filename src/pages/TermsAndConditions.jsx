import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import Cursor from '../components/Cursor'

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using the Maveric Infotech website (mavericinfotech.in) or engaging our services, you confirm that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.

These terms apply to all visitors, users, clients, and others who access or use our services. We reserve the right to modify these terms at any time, and your continued use of our services constitutes acceptance of any changes.`,
  },
  {
    title: '2. Services',
    content: `Maveric Infotech provides the following digital services:

• Web Design & Development (custom websites, landing pages, corporate sites)
• Mobile Application Development (Android & iOS)
• E-Commerce Store Development
• Search Engine Optimisation (SEO) & Digital Marketing
• Social Media Management & Marketing
• Cybersecurity Consulting & Implementation
• WordPress Development & Maintenance
• IT Consultancy & Strategy

All service deliverables, timelines, pricing, and scope are defined in individual project agreements or statements of work (SOW) signed between Maveric Infotech and the client.`,
  },
  {
    title: '3. Project Agreements & Payments',
    content: `All project work is governed by a separate project agreement or proposal document. The following general terms apply:

• A non-refundable advance payment (typically 50%) is required before project commencement.
• Remaining payments are due as per the milestones defined in the project agreement.
• Failure to make timely payments may result in project delays or suspension of work.
• All prices are quoted in Indian Rupees (INR) unless otherwise specified.
• GST (Goods and Services Tax) as applicable under Indian law will be added to all invoices.
• Overdue payments may attract interest at 2% per month.`,
  },
  {
    title: '4. Intellectual Property',
    content: `Upon receipt of full and final payment, the client receives ownership of the final deliverables (custom code, design assets) created specifically for their project. The following exceptions apply:

• Third-party components, libraries, plugins, or frameworks are subject to their respective licences and are NOT transferred to the client as owned property.
• Maveric Infotech retains the right to showcase completed work in its portfolio, case studies, and marketing materials unless the client explicitly requests confidentiality in writing.
• All pre-existing tools, frameworks, methodologies, and intellectual property developed by Maveric Infotech prior to the project remain the sole property of Maveric Infotech.`,
  },
  {
    title: '5. Client Responsibilities',
    content: `The client agrees to:

• Provide accurate, complete, and timely information, content, and feedback required for project completion.
• Ensure all content provided (text, images, videos) is legally owned or licensed by the client.
• Not use Maveric Infotech's services for any unlawful, illegal, or unethical purposes.
• Provide a designated point of contact for project communication and approvals.
• Review and approve deliverables within the timeframe specified in the project agreement.

Delays caused by late client responses or approvals may result in revised project timelines.`,
  },
  {
    title: '6. Limitation of Liability',
    content: `To the maximum extent permitted by applicable law:

• Maveric Infotech shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, goodwill, or business interruption.
• Our total liability for any claim arising from our services shall not exceed the total amount paid by the client for the specific service giving rise to the claim.
• Maveric Infotech does not guarantee specific results from SEO, digital marketing, or advertising campaigns, as outcomes depend on multiple factors beyond our control.
• We are not responsible for third-party services, platforms, hosting environments, or tools used in delivering services.`,
  },
  {
    title: '7. Refund Policy',
    content: `Our refund policy is as follows:

• Advance payments are non-refundable once work has commenced.
• If Maveric Infotech is unable to deliver the agreed services due to reasons solely within our control, a pro-rated refund may be issued for work not completed.
• Refunds will not be granted for completed and delivered work that has been approved by the client.
• Change of mind, business closure, or changes in project scope do not qualify for refunds of payments made.
• Refund requests must be submitted in writing to contact@mavericinfotech.in within 7 days of the dispute arising.`,
  },
  {
    title: '8. Confidentiality',
    content: `Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of the project. Maveric Infotech will not disclose client business information, credentials, or data to third parties without explicit written consent, except where required by law.

Clients must not disclose any proprietary processes, pricing structures, or internal methodologies of Maveric Infotech to competitors or third parties.`,
  },
  {
    title: '9. Website Use',
    content: `By using our website, you agree to:

• Not engage in any activity that disrupts or interferes with the website's functionality.
• Not attempt to gain unauthorised access to any part of the website or its underlying infrastructure.
• Not use automated bots, scrapers, or crawlers to extract data from the website without prior written consent.
• Not upload or transmit any malicious code, viruses, or harmful content.

We reserve the right to restrict or terminate access to any user who violates these terms.`,
  },
  {
    title: '10. Governing Law & Dispute Resolution',
    content: `These Terms and Conditions are governed by and construed in accordance with the laws of India, specifically the jurisdiction of Maharashtra.

Any disputes arising from these terms or our services shall first be attempted to be resolved through mutual negotiation. If unresolved within 30 days, disputes shall be subject to arbitration in Pandharpur, Maharashtra, India, under the Arbitration and Conciliation Act, 1996.

Both parties irrevocably consent to the exclusive jurisdiction of the courts in Solapur, Maharashtra, India for any legal proceedings.`,
  },
  {
    title: '11. Contact Us',
    content: `For any questions about these Terms and Conditions, please contact us:

• **Email:** contact@mavericinfotech.in
• **Phone / WhatsApp:** +91 95523 02834
• **Address:** First Floor, Plot No. 151, Shakuntal Nagar, Isbavi, Pandharpur, Maharashtra 413304, India
• **Office Hours:** Monday – Saturday, 10:00 AM – 6:30 PM IST`,
  },
]

export default function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Terms & Conditions | Maveric Infotech'
  }, [])

  return (
    <div className="bg-bg min-h-screen">
      <Cursor />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-orange/5 rounded-full blur-3xl pointer-events-none" />
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
            Terms & Conditions
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
              Welcome to Maveric Infotech. These Terms and Conditions govern your use of our website and services. By accessing{' '}
              <span className="text-accent">mavericinfotech.in</span> or engaging with us for any service, you agree to comply with and be bound by these terms. Please read them carefully before proceeding.
            </p>
          </motion.div>

          <div className="space-y-6">
            {sections.map((sec, i) => (
              <motion.div
                key={sec.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i + 0.4 }}
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
