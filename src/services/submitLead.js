// ── Endpoints ─────────────────────────────────────────────────────────────
// In dev, calls the PHP file via the proxy configured in vite.config.js
// In production, calls the same path on the live server
const RESEND_ENDPOINT = '/api/send-lead.php'

// Set this once your CRM is live, e.g. 'https://crm.mavericinfotech.in/api/leads'
const CRM_ENDPOINT = import.meta.env.VITE_CRM_ENDPOINT || ''

/**
 * Submit a lead from any form on the site.
 * @param {object} data - { name, phone, email, service, budget, company, message, source, recaptchaToken }
 */
export async function submitLead(data) {
  const payload = {
    from_name:       data.name           || '',
    from_phone:      data.phone          || '',
    from_email:      data.email          || '',
    service:         data.service        || '',
    budget:          data.budget         || '',
    company:         data.company        || '',
    message:         data.message        || '',
    source:          data.source         || 'Website',
    recaptcha_token: data.recaptchaToken || '',
    submitted_at:    new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
  }

  const results = await Promise.allSettled([
    postToResend(payload),
    CRM_ENDPOINT ? postToCRM(payload, data) : Promise.resolve({ skipped: true }),
  ])

  const [emailResult, crmResult] = results

  if (emailResult.status === 'rejected') {
    console.error('[Resend] Failed:', emailResult.reason)
  }
  if (crmResult.status === 'rejected') {
    console.error('[CRM] Failed:', crmResult.reason)
  }

  return emailResult.status === 'fulfilled'
}

async function postToResend(payload) {
  const res = await fetch(RESEND_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Resend endpoint ${res.status}: ${text}`)
  }
  return res.json()
}

async function postToCRM(payload, originalData) {
  const res = await fetch(CRM_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...payload, raw: originalData }),
  })
  if (!res.ok) throw new Error(`CRM responded ${res.status}`)
  return res.json()
}
