# BoldKraft Agency Website

**Live site:** https://boldkraft.com  
**Built with:** HTML, CSS, JavaScript  
**Hosted on:** GitHub Pages

---

## 📁 File Structure

```
boldkraft/
├── index.html              ← Main page (edit content here)
├── assets/
│   ├── css/
│   │   └── style.css       ← All styles (edit design here)
│   └── js/
│       └── main.js         ← All JavaScript (cursor, forms, nav)
└── README.md
```

---

## 🚀 Setup Guide

### 1. Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set Source to **Deploy from branch → main → / (root)**
4. Site goes live at `https://yourusername.github.io/boldkraft`

### 2. Connect Custom Domain (boldkraft.com)

1. In **Settings → Pages → Custom domain** enter `boldkraft.com`
2. Add these DNS records at your registrar (e.g. Namecheap):

| Type  | Name | Value                  |
|-------|------|------------------------|
| A     | @    | 185.199.108.153        |
| A     | @    | 185.199.109.153        |
| A     | @    | 185.199.110.153        |
| A     | @    | 185.199.111.153        |
| CNAME | www  | yourusername.github.io |

3. Check **Enforce HTTPS** once it appears in GitHub settings

### 3. Set Up Contact Form (Formspree)

1. Go to **https://formspree.io** → Sign up free
2. Click **New Form** → name it "BoldKraft Contact"
3. Copy your Form ID (looks like `xpwzabcd`)
4. Open `index.html` and find this line:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
5. Replace `YOUR_FORM_ID` with your actual ID
6. Commit and push — form submissions will go to your email

---

## ✏️ How to Edit Content

### Change text/content
Open `index.html` and edit the HTML directly.

Key sections to update:
- **Hero headline** — search for `We Build` (~line 85)
- **Description** — search for `BoldKraft is a full-service`
- **Services** — search for `service-row`
- **Portfolio cards** — search for `p-card`
- **Stats** — search for `stat-box`
- **Contact email** — search for `hello@boldkraft.com`
- **Social links** — search for `footer-socials`

### Change colors
Open `assets/css/style.css` and edit the CSS variables at the top:

```css
:root {
  --red:    #E8322A;  /* Accent color */
  --bg:     #D6D3CC;  /* Background */
  --black:  #111111;  /* Text */
}
```

### Add a portfolio project
Find the `portfolio-cards` div in `index.html` and copy/paste a `p-card` block:

```html
<div class="p-card">
  <div class="p-thumb">
    <div class="p-thumb-bg bg-a"></div>
    <div class="p-thumb-icon">🌐</div>
    <div class="p-thumb-overlay"><span class="view-case">View Case Study</span></div>
  </div>
  <div class="p-body">
    <div class="p-category">YOUR CATEGORY</div>
    <div class="p-title">YOUR PROJECT NAME</div>
    <div class="p-desc">Your project description here.</div>
    <div class="p-footer">
      <span class="p-result">↑ YOUR RESULT STAT</span>
      <span class="p-arrow">↗</span>
    </div>
  </div>
</div>
```

Background options: `bg-a` (dark brown) `bg-b` (dark red) `bg-c` (dark blue) `bg-d` (near black)

---

## 🤖 Making Changes via Claude

Once GitHub is connected to Claude.ai (Settings → Integrations → GitHub):

**Edit content:**
```
Update the hero headline in index.html to "We Build Exceptional Digital Products"
```

**Change colors:**
```
Change the red accent color in style.css from #E8322A to #CC1F1F
```

**Add portfolio project:**
```
Add a new portfolio card after the third card in index.html for a mobile app 
called "FitTrack" in the Mobile App Development category with result "↑ 50K Downloads"
```

**Update stats:**
```
Update the stats in index.html — change Projects Delivered from 15+ to 20+
```

**Add new service:**
```
Add a 6th service row to index.html for "AI Integration" with tags: 
ChatGPT, Automation, Workflows
```

Every change Claude commits goes live on your site within ~30 seconds automatically.

---

## 📧 Contact

**Email:** hello@boldkraft.com  
**Site:** https://boldkraft.com
