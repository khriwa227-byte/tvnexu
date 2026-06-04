import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { email, phone, plan, device, payment } = req.query;
  const sheetsUrl = process.env.VITE_SHEETS_URL;

  if (!sheetsUrl) return res.status(500).json({ error: 'Webhook not configured' });

  const params = new URLSearchParams({
    email: String(email || ''),
    phone: String(phone || ''),
    plan: String(plan || ''),
    device: String(device || ''),
    payment: String(payment || ''),
  });

  const response = await fetch(`${sheetsUrl}?${params}`);
  const text = await response.text();

  res.status(200).send(text);
}
