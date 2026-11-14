# Landing page: owner checklist

Almost everything below is edited in **one file: `src/content/site.js`**. Anything still in
`[SQUARE BRACKETS]` shows on the live site with a dashed underline, so you can spot what's left.
Put images in `/public` (prefer `.webp`/`.avif`, up to ~1600px wide).

To hide a block until it's ready, empty its array in `site.js`:
`clientLogos: []`, `testimonials: []`, `stats: []`.

## Still to do

- [ ] **Phone**: `business.phone` (becomes a tap-to-call link once filled)
- [ ] **Business entity** (e.g. "George Akai Tech Consulting LLC"): `business.entity` (footer + privacy page)
- [ ] **Calendar booking link** (Calendly / Cal.com): `business.calendarUrl` (becomes a button on the contact section and the form's success screen)
- [ ] **Form endpoint / email destination**: `business.formEndpoint`: already set to your existing Formspree form; confirm it still delivers to the right inbox. If you switch providers, add its domain to `connect-src` and `form-action` in `vercel.json`.
- [ ] **Privacy policy & terms**: review the starter text in `src/pages/Legal.jsx`, fill `[LAST UPDATED DATE]` and `[X years]` retention, and remove the "starter text" note.
- [ ] **Confirm two items I wrote**: the Mid Valley case study's challenge and outcome lines, and the "<24 hr response time on support" stat (keep it only if you commit to it).

## When you have them

- [ ] **AI and cybersecurity client results**: add them to `caseStudies` (tag, title, challenge, solution, metric, image).
      The section switches from 2 to 3 columns automatically.
- [ ] **More testimonials** (with permission): `testimonials`. Add `rating: 5` only if the client actually gave a rating.
- [ ] **Reviews link** (Google Business / Clutch): set `reviews.url` (and optionally `reviews.label`) to show "Read all reviews".
- [ ] **Client logos** (with permission): `clientLogos` → `{ name: 'Acme', src: '/logos/acme.svg' }`. Adds a "Trusted by teams at" row above the credentials.
- [ ] **Pricing table**: all plans, add-ons and terms live in `pricing`; keep them in sync with your proposals.

## Done

- [x] Real photos: `/george-headshot.webp` (About) and `/george-avatar.webp` (graduation photo, hero card)
- [x] Key credential: BS Computer Information Systems and Cybersecurity
- [x] Credentials bar: degree, CompTIA Security+, Google Cybersecurity Certificate, AWS Building Generative AI Solutions
- [x] Proof stats: 5+ projects, 1 yr building production software, 90% return or refer
- [x] Portfolio: Kenrish Collection and Mid Valley Lath & Plaster
- [x] Client results: Kenrish Collection and Mid Valley Lath & Plaster
- [x] Testimonial: Elizabeth Ekale, Owner & CEO, Kenrish Collection
- [x] About: bio, education, certifications, experience (CSU Chico), tech stack
- [x] FAQ: $1,000–$3,000, timelines, US and Kenya; 30 days of included support
- [x] Starting prices for each service (from the pricing table)

## Already set (confirm they're right)

- Email: `info@georgeakaitechconsulting.com`
- LinkedIn: `https://www.linkedin.com/in/georgeakai/`
- Google Analytics 4 (`G-5CEBTN1X20`) fires a `generate_lead` event on each successful form submission.
