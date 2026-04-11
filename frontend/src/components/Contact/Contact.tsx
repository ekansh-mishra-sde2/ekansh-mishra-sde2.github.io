import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { useInView } from '../../hooks/useInView';
import type { ContactFormData } from '../../types';
import styles from './Contact.module.css';

// ── EmailJS config ─────────────────────────────────────────────
// Follow these steps to activate the form:
// 1. Sign up free at https://www.emailjs.com
// 2. Add a Gmail service → copy SERVICE_ID
// 3. Create a template with: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
//    → copy TEMPLATE_ID
// 4. Account → General → copy PUBLIC_KEY
// 5. Replace the three values below OR set as env vars in .env:
//    VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID

const PUBLIC_KEY   = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  ?? 'YOUR_PUBLIC_KEY';
const SERVICE_ID   = import.meta.env.VITE_EMAILJS_SERVICE_ID  ?? 'YOUR_SERVICE_ID';
const TEMPLATE_ID  = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? 'YOUR_TEMPLATE_ID';

const EMPTY: ContactFormData = { fromName: '', fromEmail: '', subject: '', message: '' };

export default function Contact() {
  const { ref, isVisible } = useInView();
  const [form, setForm]       = useState<ContactFormData>(EMPTY);
  const [loading, setLoading] = useState(false);
  const [status, setStatus]   = useState<{ type: 'success' | 'error'; msg: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const params = {
      from_name:  form.fromName,
      from_email: form.fromEmail,
      subject:    form.subject,
      message:    form.message,
      to_name:    'Ekansh',
    };

    try {
      if (PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        // Demo mode — simulate delay then show setup message
        await new Promise(r => setTimeout(r, 1000));
        setStatus({ type: 'success', msg: '⚡ Form UI works! Add your EmailJS keys in Contact.tsx or .env to activate email sending.' });
        return;
      }
      emailjs.init({ publicKey: PUBLIC_KEY });
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, params);
      setStatus({ type: 'success', msg: "✓ Message sent! I'll get back to you within 24 hours." });
      setForm(EMPTY);
    } catch {
      setStatus({ type: 'error', msg: '✕ Something went wrong. Email me directly: ekansh.mishra1999@gmail.com' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={`fade-up ${isVisible ? 'visible' : ''}`} ref={ref}>
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Let's <span>connect</span></h2>
        </div>

        <div className={`${styles.grid} fade-up ${isVisible ? 'visible' : ''}`}>
          <div className={styles.info}>
            <p>
              Whether you're looking for a senior full stack engineer, want to collaborate
              on something ambitious, or just want to geek out about GraphQL or supply
              chain security — my inbox is always open.
            </p>
            <div className={styles.links}>
              <a href="mailto:ekansh.mishra1999@gmail.com" className={styles.link}>
                <i className="fas fa-envelope" />
                ekansh.mishra1999@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/ekansh-mishra-sde/" target="_blank" rel="noreferrer" className={styles.link}>
                <i className="fab fa-linkedin" />
                linkedin.com/in/ekansh-mishra-sde
              </a>
              <a href="https://github.com/ekansh-mishra-sde2" target="_blank" rel="noreferrer" className={styles.link}>
                <i className="fab fa-github" />
                github.com/ekansh-mishra-sde2
              </a>
              <a href="https://github.com/ekansh-mishra-sde2/engineering-growth-tracker" target="_blank" rel="noreferrer" className={styles.link}>
                <i className="fas fa-chart-line" />
                Engineering Growth Tracker
              </a>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.group}>
                <label htmlFor="fromName">Your Name</label>
                <input id="fromName" name="fromName" type="text" placeholder="Jane Smith"
                  value={form.fromName} onChange={handleChange} required />
              </div>
              <div className={styles.group}>
                <label htmlFor="fromEmail">Your Email</label>
                <input id="fromEmail" name="fromEmail" type="email" placeholder="jane@company.com"
                  value={form.fromEmail} onChange={handleChange} required />
              </div>
            </div>
            <div className={styles.group}>
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" placeholder="Let's build something together"
                value={form.subject} onChange={handleChange} />
            </div>
            <div className={styles.group}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell me about the role or project..."
                value={form.message} onChange={handleChange} required />
            </div>

            {status && (
              <div className={`${styles.status} ${styles[status.type]}`}>{status.msg}</div>
            )}

            <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }} disabled={loading}>
              {loading
                ? <><i className="fas fa-spinner fa-spin" /> Sending...</>
                : <><i className="fas fa-paper-plane" /> Send Message</>
              }
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
