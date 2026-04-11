import express, { Request, Response } from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app  = express();
const PORT = process.env.PORT ?? 4000;

// ── Middleware ─────────────────────────────────────────────────
app.use(cors({ origin: process.env.FRONTEND_URL ?? 'http://localhost:5173' }));
app.use(express.json());

// Rate limit the contact endpoint — max 5 emails per 15 min per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: 'Too many requests. Please try again later.' },
});

// ── Nodemailer transporter ─────────────────────────────────────
// Set these in backend/.env:
//   GMAIL_USER=your-gmail@gmail.com
//   GMAIL_PASS=your-app-password   ← Google account → App Passwords
//   TO_EMAIL=ekansh.mishra1999@gmail.com
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// ── Routes ─────────────────────────────────────────────────────
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.post('/api/contact', contactLimiter, async (req: Request, res: Response) => {
  const { fromName, fromEmail, subject, message } = req.body as {
    fromName: string;
    fromEmail: string;
    subject: string;
    message: string;
  };

  // Basic validation
  if (!fromName?.trim() || !fromEmail?.trim() || !message?.trim()) {
    res.status(400).json({ error: 'Name, email and message are required.' });
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fromEmail)) {
    res.status(400).json({ error: 'Invalid email address.' });
    return;
  }

  // If env vars not set, just log and return success (dev mode)
  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    console.log('\n📬 Contact form submission (dev mode — no email sent):');
    console.log({ fromName, fromEmail, subject, message });
    res.json({ success: true, message: 'Received (dev mode — configure GMAIL_USER and GMAIL_PASS to send real emails).' });
    return;
  }

  try {
    await transporter.sendMail({
      from:    `"${fromName}" <${process.env.GMAIL_USER}>`,
      replyTo: fromEmail,
      to:      process.env.TO_EMAIL ?? process.env.GMAIL_USER,
      subject: `[Portfolio] ${subject || 'New message from ' + fromName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00f5d4;">New Portfolio Contact</h2>
          <p><strong>From:</strong> ${fromName} &lt;${fromEmail}&gt;</p>
          <p><strong>Subject:</strong> ${subject || '(none)'}</p>
          <hr style="border-color: #eee;" />
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });
    res.json({ success: true, message: "Message sent! I'll get back to you within 24 hours." });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ error: 'Failed to send email. Please try again or email directly.' });
  }
});

// ── Start ──────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
  console.log(`   Health: http://localhost:${PORT}/api/health`);
});
