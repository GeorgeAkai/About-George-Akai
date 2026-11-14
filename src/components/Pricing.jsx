import { useRef, useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { pricing } from '../content/site'
import { SectionLink } from './ui'

function PlanCard({ plan, formValue }) {
  return (
    <article className={`ga-plan${plan.featured ? ' is-featured' : ''}`}>
      {plan.featured && <span className="ga-badge">{pricing.badge}</span>}
      <h4 className="ga-plan-name">{plan.name}</h4>
      <p className="ga-plan-for">{plan.for}</p>
      <p className="ga-plan-price">
        {plan.from && <span className="ga-plan-from">from </span>}
        <span className="ga-plan-amount">{plan.amount}</span>
        {plan.unit && <span className="ga-plan-unit"> {plan.unit}</span>}
      </p>
      <p className="ga-plan-note">{plan.note}</p>
      <ul className="ga-plan-features">
        {plan.features.map((f) => (
          <li key={f}>
            <Check size={16} strokeWidth={2.5} aria-hidden="true" />
            {f}
          </li>
        ))}
      </ul>
      <SectionLink
        hash="contact"
        state={{ service: formValue }}
        className={`ga-btn ga-btn-sm ga-btn-block ${plan.featured ? 'ga-btn-primary' : 'ga-btn-secondary-dark'}`}
        aria-label={`${pricing.cta}: ${plan.name}`}
      >
        {pricing.cta}
      </SectionLink>
    </article>
  )
}

export default function Pricing() {
  const [active, setActive] = useState(0)
  const tabRefs = useRef([])
  const count = pricing.tabs.length

  const onKeyDown = (e) => {
    const keys = { ArrowRight: active + 1, ArrowLeft: active - 1, Home: 0, End: count - 1 }
    if (!(e.key in keys)) return
    e.preventDefault()
    const next = (keys[e.key] + count) % count
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <section id="pricing" className="ga-section ga-dark" aria-labelledby="pricing-title">
      <div className="ga-container">
        <header className="ga-head ga-reveal">
          <p className="ga-eyebrow">{pricing.eyebrow}</p>
          <h2 id="pricing-title" className="ga-h2">
            {pricing.title}
          </h2>
          <p className="ga-lead">{pricing.subtitle}</p>
        </header>

        <div className="ga-tabs" role="tablist" aria-label="Pricing by service">
          {pricing.tabs.map((tab, i) => (
            <button
              key={tab.id}
              ref={(el) => (tabRefs.current[i] = el)}
              type="button"
              role="tab"
              id={`pricing-tab-${tab.id}`}
              aria-controls={`pricing-panel-${tab.id}`}
              aria-selected={i === active}
              tabIndex={i === active ? 0 : -1}
              className="ga-tab"
              onClick={() => setActive(i)}
              onKeyDown={onKeyDown}
            >
              <span className="ga-tab-long">{tab.label}</span>
              <span className="ga-tab-short">{tab.shortLabel || tab.label}</span>
            </button>
          ))}
        </div>

        {pricing.tabs.map((tab, i) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`pricing-panel-${tab.id}`}
            aria-labelledby={`pricing-tab-${tab.id}`}
            hidden={i !== active}
            tabIndex={0}
            className="ga-tabpanel"
          >
            <h3 className="ga-visually-hidden">{tab.label} pricing</h3>
            <div className="ga-grid-3 ga-plans">
              {tab.plans.map((plan) => (
                <PlanCard key={plan.name} plan={plan} formValue={tab.formValue} />
              ))}
            </div>
            {tab.extras?.length > 0 && (
              <>
                <h4 className="ga-extras-title">{tab.extrasTitle}</h4>
                <ul className="ga-extras">
                  {tab.extras.map((x) => (
                    <li key={x.label}>
                      <span>{x.label}</span>
                      <span className="ga-extras-price">{x.price}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}

        <dl className="ga-pricing-notes">
          {pricing.notes.map((n) => (
            <div key={n.title}>
              <dt>{n.title}</dt>
              <dd>{n.text}</dd>
            </div>
          ))}
        </dl>

        <div className="ga-pricing-cta">
          <p>{pricing.footer}</p>
          <SectionLink hash="contact" className="ga-btn ga-btn-primary">
            {pricing.cta} <ArrowRight size={18} aria-hidden="true" />
          </SectionLink>
        </div>
      </div>
    </section>
  )
}
