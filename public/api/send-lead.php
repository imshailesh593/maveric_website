<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

$data = json_decode(file_get_contents('php://input'), true);
if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit();
}

// ── Config ────────────────────────────────────────────────────────────────
$RESEND_API_KEY   = 're_WTjQLQr3_4rKjp8WCCkYUCgLoMnrnfrpy';
$RECAPTCHA_SECRET = '6LeneAotAAAAADo_Adz0XcM_rZHDRpRF_2Bq2DgI';
$TO_EMAIL         = 'contact@mavericinfotech.in';
$FROM_EMAIL       = 'leads@mavericinfotech.in'; // Must be a verified domain in Resend
$FROM_NAME        = 'Maveric Infotech Website';

// ── Verify reCAPTCHA ──────────────────────────────────────────────────────
$recaptchaToken = $data['recaptcha_token'] ?? '';
if (empty($recaptchaToken)) {
    http_response_code(400);
    echo json_encode(['error' => 'reCAPTCHA token missing']);
    exit();
}

$verifyResponse = file_get_contents(
    'https://www.google.com/recaptcha/api/siteverify?secret=' .
    urlencode($RECAPTCHA_SECRET) . '&response=' . urlencode($recaptchaToken)
);
$verifyData = json_decode($verifyResponse, true);

if (!($verifyData['success'] ?? false)) {
    http_response_code(400);
    echo json_encode(['error' => 'reCAPTCHA verification failed']);
    exit();
}

// ── Sanitise input ────────────────────────────────────────────────────────
function s($v) { return htmlspecialchars(strip_tags(trim($v ?? '')), ENT_QUOTES, 'UTF-8'); }

$name    = s($data['from_name']);
$email   = s($data['from_email']);
$phone   = s($data['from_phone']);
$service = s($data['service']);
$budget  = s($data['budget']);
$company = s($data['company']);
$message = s($data['message']);
$source  = s($data['source']);
$time    = s($data['submitted_at']);

// ── HTML email template ───────────────────────────────────────────────────
$subject = "New Lead from {$name}" . ($service ? " — {$service}" : '');

$html = <<<HTML
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f0;font-family:Inter,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f0;padding:32px 16px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#00BDD9,#FF7A00);padding:2px 0;"></td>
        </tr>
        <tr>
          <td style="background:#0a0a0a;padding:28px 32px;">
            <h1 style="color:#ffffff;font-size:22px;margin:0;font-weight:700;">🚀 New Lead Received</h1>
            <p style="color:rgba(255,255,255,0.4);font-size:12px;margin:6px 0 0;font-family:monospace;">{$time} · {$source}</p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:32px;">
            <table width="100%" cellpadding="0" cellspacing="0">
HTML;

$rows = [
    ['👤 Name',    $name],
    ['📱 Phone',   $phone],
    ['✉️ Email',   $email ?: '—'],
    ['🏢 Company', $company ?: '—'],
    ['🛠 Service', $service ?: '—'],
    ['💰 Budget',  $budget ?: '—'],
];

foreach ($rows as [$label, $value]) {
    $html .= <<<ROW
              <tr>
                <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;width:130px;">
                  <span style="font-size:13px;color:#888;font-family:monospace;">{$label}</span>
                </td>
                <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;">
                  <span style="font-size:14px;color:#111;font-weight:600;">{$value}</span>
                </td>
              </tr>
ROW;
}

if ($message) {
    $html .= <<<MSG
              <tr>
                <td colspan="2" style="padding-top:20px;">
                  <p style="font-size:13px;color:#888;font-family:monospace;margin:0 0 8px;">💬 Message</p>
                  <p style="font-size:14px;color:#333;background:#f8f8f5;border-left:3px solid #00BDD9;padding:12px 16px;border-radius:0 8px 8px 0;margin:0;">{$message}</p>
                </td>
              </tr>
MSG;
}

$html .= <<<FOOTER
            </table>

            <!-- CTA -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
              <tr>
                <td align="center">
                  <a href="https://wa.me/919552302834?text=Hi+{$name},+I+received+your+enquiry+about+{$service}."
                     style="display:inline-block;background:linear-gradient(135deg,#25D366,#128C7E);color:#fff;text-decoration:none;padding:12px 28px;border-radius:50px;font-size:14px;font-weight:600;">
                    Reply on WhatsApp
                  </a>
                  &nbsp;&nbsp;
                  <a href="mailto:{$email}?subject=Re: Your enquiry about {$service}"
                     style="display:inline-block;background:linear-gradient(135deg,#00BDD9,#FF7A00);color:#fff;text-decoration:none;padding:12px 28px;border-radius:50px;font-size:14px;font-weight:600;">
                    Reply by Email
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f8f8f5;padding:16px 32px;text-align:center;">
            <p style="font-size:11px;color:#aaa;margin:0;">Maveric Infotech · Pandharpur, Maharashtra · mavericinfotech.in</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>
FOOTER;

// ── Call Resend API ───────────────────────────────────────────────────────
$payload = json_encode([
    'from'    => "{$FROM_NAME} <{$FROM_EMAIL}>",
    'to'      => [$TO_EMAIL],
    'reply_to'=> $email ?: $TO_EMAIL,
    'subject' => $subject,
    'html'    => $html,
]);

$ch = curl_init('https://api.resend.com/emails');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST           => true,
    CURLOPT_HTTPHEADER     => [
        "Authorization: Bearer {$RESEND_API_KEY}",
        'Content-Type: application/json',
    ],
    CURLOPT_POSTFIELDS     => $payload,
    CURLOPT_TIMEOUT        => 15,
]);

$response   = curl_exec($ch);
$httpCode   = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError  = curl_error($ch);
curl_close($ch);

if ($curlError) {
    http_response_code(500);
    echo json_encode(['error' => 'Mail delivery failed', 'detail' => $curlError]);
    exit();
}

http_response_code($httpCode);
echo $response;
