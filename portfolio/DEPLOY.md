# 🚀 Portfolio Deployment Guide
## Host on GitHub Pages — Free, Custom Domain Ready

---

## Step 1 — Create the GitHub Repo

1. Go to https://github.com/new
2. Name it exactly: `ekansh-mishra-sde2.github.io`
   ↑ This is the magic name — GitHub auto-hosts it at https://ekansh-mishra-sde2.github.io
3. Set to **Public**
4. Do NOT initialise with README
5. Click **Create repository**

---

## Step 2 — Push the Portfolio

```bash
cd portfolio/
git init
git add .
git commit -m "🚀 Launch portfolio"
git branch -M main
git remote add origin https://github.com/ekansh-mishra-sde2/ekansh-mishra-sde2.github.io.git
git push -u origin main
```

Wait 2-3 minutes. Your site is live at:
👉 https://ekansh-mishra-sde2.github.io

---

## Step 3 — Set Up EmailJS (10 minutes, free)

1. Go to https://www.emailjs.com → Sign Up (free tier: 200 emails/month)
2. Click **Add New Service** → choose Gmail → authorise your Gmail
3. Note the **Service ID** (e.g. `service_abc123`)
4. Go to **Email Templates** → Create Template
5. Set template content:
   ```
   Subject: Portfolio Contact: {{subject}}

   From: {{from_name}} ({{from_email}})

   Message:
   {{message}}
   ```
6. Note the **Template ID** (e.g. `template_xyz789`)
7. Go to **Account** → **General** → copy your **Public Key**

Now open `index.html` and find these 3 lines near the bottom:

```javascript
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // ← paste here
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // ← paste here
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // ← paste here
```

Replace the placeholder values, then:
```bash
git add index.html
git commit -m "✉️ Activate contact form"
git push
```

Done — the contact form now sends real emails to your Gmail.

---

## Step 4 — Update Recommendations (Optional)

The recommendations shown are placeholders. To add your real LinkedIn ones:

1. Go to your LinkedIn profile
2. Scroll to **Recommendations** section
3. Copy the text of each recommendation
4. Open `index.html`, find the `recs` array (search for "const recs =")
5. Replace the placeholder objects with real ones:

```javascript
{
  text: "Paste the actual recommendation text here...",
  name: "Recommender's Name",
  title: "Their Title · Company",
  initials: "AB"   // first letters of their name
},
```

---

## Step 5 — Keep It Updated

To update anything on your portfolio:
```bash
# Edit index.html
git add index.html
git commit -m "✏️ Update projects section"
git push
```

Changes go live in ~60 seconds automatically.

---

## Optional — Custom Domain (e.g. ekansh.dev)

1. Buy a domain on Namecheap/GoDaddy (~₹800/year for .dev)
2. In your repo → Settings → Pages → Custom domain → enter your domain
3. In your domain registrar, add these DNS records:
   ```
   A     @    185.199.108.153
   A     @    185.199.109.153
   A     @    185.199.110.153
   A     @    185.199.111.153
   CNAME www  ekansh-mishra-sde2.github.io
   ```
4. Wait up to 24 hours for DNS propagation
5. GitHub will auto-provision a free SSL certificate

---

*Your portfolio is entirely static — zero server costs, zero maintenance.*
*GitHub Pages hosts it for free forever.*
