import { business } from '../content/site'

const UPDATED = '[LAST UPDATED DATE]'

function LegalPage({ title, children }) {
  return (
    <article className="ga-legal">
      <div className="ga-container ga-legal-inner">
        <h1 className="ga-h2">{title}</h1>
        <p className="ga-legal-meta">
          Last updated: <span className="ga-ph">{UPDATED}</span>
        </p>
        <p className="ga-legal-note">
          <span className="ga-ph">[Starter text: have this reviewed for your business before relying on it.]</span>
        </p>
        {children}
      </div>
    </article>
  )
}

export function Privacy() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        This policy explains what information {business.name} (“I”, “me”) collects through this website and how
        it is used.
      </p>
      <h2>Information you give me</h2>
      <p>
        When you use the contact form I collect your name, email address, and anything else you choose to share
        (company, service, budget, and your message). I use it only to reply to you and to discuss a potential
        project. I don’t sell it or share it for marketing.
      </p>
      <h2>Service providers</h2>
      <ul>
        <li>
          <strong>Formspree</strong> receives contact-form submissions and forwards them to my email.
        </li>
        <li>
          <strong>Google Analytics</strong> measures anonymous site usage (pages visited, device type, approximate
          location) so I can improve the site. It uses cookies; you can block them in your browser.
        </li>
        <li>
          <strong>Vercel</strong> hosts this website and may log standard request data such as IP address.
        </li>
      </ul>
      <h2>Retention</h2>
      <p>
        I keep inquiry emails for as long as needed to respond and for ordinary business records, typically up to{' '}
        <span className="ga-ph">[X years]</span>, then delete them.
      </p>
      <h2>Your choices</h2>
      <p>
        You can ask me to access, correct or delete your information at any time. California residents have rights
        under the CCPA/CPRA, including the right to know and to delete. Email{' '}
        <a href={`mailto:${business.email}`}>{business.email}</a> and I’ll respond within 30 days.
      </p>
      <h2>Contact</h2>
      <p>
        {business.name} · <span className="ga-ph">{business.entity}</span> · {business.region} ·{' '}
        <a href={`mailto:${business.email}`}>{business.email}</a>
      </p>
    </LegalPage>
  )
}

export function Terms() {
  return (
    <LegalPage title="Terms of Use">
      <p>By using this website you agree to these terms.</p>
      <h2>Website content</h2>
      <p>
        Content on this site is for general information and isn’t professional advice for your specific situation.
        Project work is governed by a separate written proposal or agreement.
      </p>
      <h2>Intellectual property</h2>
      <p>
        Site content and branding belong to {business.name} unless stated otherwise. Client deliverables are owned as
        set out in each project agreement.
      </p>
      <h2>Liability</h2>
      <p>
        The site is provided “as is”. To the extent allowed by law, {business.name} isn’t liable for losses arising
        from use of this website.
      </p>
      <h2>Governing law</h2>
      <p>These terms are governed by the laws of the State of California.</p>
      <h2>Contact</h2>
      <p>
        <a href={`mailto:${business.email}`}>{business.email}</a>
      </p>
    </LegalPage>
  )
}
