# Landing page: owner checklist

Almost everything below is edited in **one file: `src/content/site.js`**. Anything still in
`[SQUARE BRACKETS]` shows on the live site with a dashed underline, so you can spot what's left.
Put images in `/public` (prefer `.webp`/`.avif`, up to ~1600px wide).

To hide a block until it's ready, empty its array in `site.js`:
`clientLogos: []`, `testimonials: []`, `stats: []`.

## Before launch

- [ ] **Professional headshot** (real photo): `business.headshot` → e.g. `'/george-headshot.webp'` (4:5 portrait). Used in the hero card and About section.
- [ ] **Key credential** shown under your name in the hero card: `business.keyCredential`
- [ ] **3–5 client logos** (with permission): `clientLogos` → `{ name: 'Acme', src: '/logos/acme.svg' }`
- [ ] **Certifications / credentials** pills: `credentials`
- [ ] **Verified numbers** for the 4 proof stats: `stats` (delete any you can't back up)
- [ ] **3 case studies**: industry, title, challenge, solution, metric, screenshot: `caseStudies`
      (you already have screenshots in `/public`, e.g. `reservation engine.png`, `AI RAG chat assistant.png`, `sofelk.png`, if they match a real client story)
- [ ] **2+ real testimonials** with name, title, company (with permission): `testimonials`
- [ ] **Reviews link** (Google Business / Clutch): `reviews.label`, `reviews.url`
- [ ] **Starting prices** for each service: `services.items[].price`
- [ ] **FAQ ranges**: price `[$X]–[$Y]`, timelines `[2–6]`, `[6–12]`, `[1–2]` weeks, regions `[the US / your regions]`: `faqs`
- [ ] **Included support days**: `business.supportDays` (currently `[30]`, used in Process, Low-risk and FAQ)
- [ ] **Bio** (2–3 sentences): `about.paragraphs[0]`
- [ ] **About credential tiles**: degree/school, certification, past employer/client, tech stack: `about.credentials`
- [ ] **Phone**: `business.phone` (becomes a tap-to-call link once filled)
- [ ] **Business entity** (e.g. "George Akai Tech Consulting LLC"): `business.entity` (footer + privacy page)
- [ ] **Calendar booking link** (Calendly / Cal.com): `business.calendarUrl` (becomes a button on the contact section and the form's success screen)
- [ ] **Form endpoint / email destination**: `business.formEndpoint`: already set to your existing Formspree form; confirm it still delivers to the right inbox. If you switch providers, add its domain to `connect-src` and `form-action` in `vercel.json`.
- [ ] **Privacy policy & terms**: review the starter text in `src/pages/Legal.jsx`, fill `[LAST UPDATED DATE]` and `[X years]` retention, and remove the "starter text" note.

## Already set (confirm they're right)

- Email: `info@georgeakaitechconsulting.com`
- LinkedIn: `https://www.linkedin.com/in/georgeakai/`
- Google Analytics 4 (`G-5CEBTN1X20`) fires a `generate_lead` event on each successful form submission.
