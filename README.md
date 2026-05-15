# FES DMS — Document Management System (UI Prototype)

A premium, high-fidelity enterprise admin panel prototype for the **Foundation for Ecological Security (FES)** — designed for managing thousands of organizational and legal documents with role-based access, audit trails, and compliance workflows.

🔗 **Live preview:** https://ravi26design.github.io/DMS/

---

## Modules

| Page | Description |
|------|-------------|
| [`login.html`](login.html) | Sign-in screen with split-brand layout and SSO |
| [`forgot.html`](forgot.html) | Password recovery |
| [`otp.html`](otp.html) | Two-factor OTP verification |
| [`session-expired.html`](session-expired.html) | Idle-timeout state |
| [`index.html`](index.html) | Main executive dashboard (8 KPIs, charts, activity) |
| [`documents.html`](documents.html) | Document table, filters, upload, preview drawer |
| [`legal.html`](legal.html) | Case-wise legal repository with timeline |
| [`search.html`](search.html) | AI-style advanced search with refinement rail |
| [`users.html`](users.html) | User management + permission matrix |
| [`audit.html`](audit.html) | Audit logs and live event monitoring |
| [`archive.html`](archive.html) | Archive, restore and retention policy |
| [`reports.html`](reports.html) | Analytics dashboards |
| [`settings.html`](settings.html) | Workspace settings (security, integrations, API) |
| [`design-system.html`](design-system.html) | Design tokens and component library |

## Design Foundations

- **Typography** — Inter (UI), JetBrains Mono (IDs, code)
- **Palette** — Primary `#2563EB`, Secondary `#0F172A`, Accent `#14B8A6`, with semantic success / warning / danger
- **Spacing** — 4-point scale (4/8/12/16/24/32/48/64)
- **Radius** — 6/12/20 px ramp; pill for badges
- **Elevation** — Five-step soft shadow ramp
- **Grid** — 12-column, desktop-first; collapses to single-column under 640 px

## Tech

Pure static **HTML + CSS + vanilla JS** — no build step, no dependencies.

```
DMS/
├── assets/
│   ├── css/styles.css      # Design system + global styles
│   └── js/app.js           # Sidebar, drawers, modals, tabs, OTP
└── *.html                  # 14 pages
```

## Run locally

Open `index.html` directly in a browser, or serve the folder:

```bash
cd DMS
python3 -m http.server 4600
# open http://localhost:4600
```

## Inspiration

Zoho Admin · Microsoft SharePoint · Atlassian Admin · Notion · Linear · Dropbox Business · Monday.com Enterprise.

---

© 2026 Foundation for Ecological Security · UI prototype
