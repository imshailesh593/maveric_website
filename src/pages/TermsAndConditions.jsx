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

export default function TermsAndConditions() {
  useLenis()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Terms & Conditions | Maveric Infotech'
  }, [])

  return (
    <div className="bg-bg min-h-screen">
      <Cursor />
      <Navbar />

      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-orange/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-mono text-accent text-sm tracking-widest uppercase">
            Legal
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display font-bold text-4xl md:text-5xl text-white mt-3 mb-4">
            Terms & Conditions
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
              Welcome to Maveric Infotech. These Terms and Conditions govern your use of our website and services. By accessing <span className="text-accent">mavericinfotech.in</span> or engaging with us for any service, you agree to comply with and be bound by these terms. Please read them carefully before proceeding.
            </p>
          </motion.div>

          <Section title="1. Acceptance of Terms" index={0}>
            <P>By accessing or using the Maveric Infotech website or engaging our services, you confirm that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.</P>
            <P>These terms apply to all visitors, users, clients, and others who access or use our services. We reserve the right to modify these terms at any time, and your continued use of our services constitutes acceptance of any changes.</P>
          </Section>

          <Section title="2. Services" index={1}>
            <P>Maveric Infotech provides the following digital services:</P>
            <Bullets items={[
              'Web Design & Development (custom websites, landing pages, corporate sites)',
              'Mobile Application Development (Android & iOS)',
              'E-Commerce Store Development',
              'Search Engine Optimisation (SEO) & Digital Marketing',
              'Social Media Management & Marketing',
              'Cybersecurity Consulting & Implementation',
              'WordPress Development & Maintenance',
              'IT Consultancy & Strategy',
            ]} />
            <P>All service deliverables, timelines, pricing, and scope are defined in individual project agreements or statements of work (SOW) signed between Maveric Infotech and the client.</P>
          </Section>

          <Section title="3. Project Agreements & Payments" index={2}>
            <P>All project work is governed by a separate project agreement or proposal document. The following general terms apply:</P>
            <Bullets items={[
              'A non-refundable advance payment (typically 50%) is required before project commencement.',
              'Remaining payments are due as per the milestones defined in the project agreement.',
              'Failure to make timely payments may result in project delays or suspension of work.',
              'All prices are quoted in Indian Rupees (INR) unless otherwise specified.',
              'GST as applicable under Indian law will be added to all invoices.',
              'Overdue payments may attract interest at 2% per month.',
            ]} />
          </Section>

          <Section title="4. Intellectual Property" index={3}>
            <P>Upon receipt of full and final payment, the client receives ownership of the final deliverables (custom code, design assets) created specifically for their project. The following exceptions apply:</P>
            <Bullets items={[
              'Third-party components, libraries, plugins, or frameworks are subject to their respective licences and are NOT transferred to the client as owned property.',
              'Maveric Infotech retains the right to showcase completed work in its portfolio unless the client explicitly requests confidentiality in writing.',
              'All pre-existing tools, frameworks, and intellectual property developed by Maveric Infotech remain our sole property.',
            ]} />
          </Section>

          <Section title="5. Client Responsibilities" index={4}>
            <P>The client agrees to:</P>
            <Bullets items={[
              'Provide accurate, complete, and timely information, content, and feedback required for project completion.',
              'Ensure all content provided (text, images, videos) is legally owned or licensed by the client.',
              'Not use Maveric Infotech\'s services for any unlawful, illegal, or unethical purposes.',
              'Provide a designated point of contact for project communication and approvals.',
              'Review and approve deliverables within the timeframe specified in the project agreement.',
            ]} />
            <P>Delays caused by late client responses or approvals may result in revised project timelines.</P>
          </Section>

          <Section title="6. Limitation of Liability" index={5}>
            <P>To the maximum extent permitted by applicable law:</P>
            <Bullets items={[
              'Maveric Infotech shall not be liable for any indirect, incidental, special, or consequential damages, including loss of profits, data, or business interruption.',
              'Our total liability for any claim shall not exceed the total amount paid by the client for the specific service giving rise to the claim.',
              'We do not guarantee specific results from SEO, digital marketing, or advertising campaigns.',
              'We are not responsible for third-party services, platforms, or hosting environments used in delivering services.',
            ]} />
          </Section>

          <Section title="7. Refund Policy" index={6}>
            <P>Our refund policy is as follows:</P>
            <Bullets items={[
              'Advance payments are non-refundable once work has commenced.',
              'If Maveric Infotech is unable to deliver agreed services due to reasons solely within our control, a pro-rated refund may be issued for work not completed.',
              'Refunds will not be granted for completed and delivered work that has been approved by the client.',
              'Change of mind, business closure, or changes in project scope do not qualify for refunds.',
              'Refund requests must be submitted in writing to contact@mavericinfotech.in within 7 days of the dispute arising.',
            ]} />
          </Section>

          <Section title="8. Confidentiality" index={7}>
            <P>Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of the project. Maveric Infotech will not disclose client business information, credentials, or data to third parties without explicit written consent, except where required by law.</P>
            <P>Clients must not disclose any proprietary processes, pricing structures, or internal methodologies of Maveric Infotech to competitors or third parties.</P>
          </Section>

          <Section title="9. Website Use" index={8}>
            <P>By using our website, you agree to:</P>
            <Bullets items={[
              'Not engage in any activity that disrupts or interferes with the website\'s functionality.',
              'Not attempt to gain unauthorised access to any part of the website or its underlying infrastructure.',
              'Not use automated bots or scrapers to extract data without prior written consent.',
              'Not upload or transmit any malicious code, viruses, or harmful content.',
            ]} />
          </Section>

          <Section title="10. Governing Law & Dispute Resolution" index={9}>
            <P>These Terms and Conditions are governed by and construed in accordance with the laws of India, specifically the jurisdiction of Maharashtra.</P>
            <P>Any disputes shall first be attempted to be resolved through mutual negotiation. If unresolved within 30 days, disputes shall be subject to arbitration in Pandharpur, Maharashtra, India, under the Arbitration and Conciliation Act, 1996.</P>
            <P>Both parties irrevocably consent to the exclusive jurisdiction of the courts in Solapur, Maharashtra, India for any legal proceedings.</P>
          </Section>

          <Section title="11. Contact Us" index={10}>
            <P>For any questions about these Terms and Conditions, please contact us:</P>
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
