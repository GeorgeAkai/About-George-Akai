import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowRight, CircleCheck, Loader2 } from 'lucide-react'
import { business, contact, isPlaceholder } from '../content/site'

const EMPTY = { name: '', email: '', company: '', service: '', budget: '', message: '' }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const MIN_INTERVAL_MS = 30_000 // one submission per 30s
const MAX_PER_SESSION = 3
const RATE_KEY = 'ga-form-submits'

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) errors.email = 'Please enter your work email.'
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = 'Please enter a valid email, like jane@company.com.'
  if (values.message.trim().length < 10) errors.message = 'Please add a sentence or two about the challenge.'
  return errors
}

function readSubmits() {
  try {
    return JSON.parse(sessionStorage.getItem(RATE_KEY) || '[]')
  } catch {
    return []
  }
}

function writeSubmits(list) {
  try {
    sessionStorage.setItem(RATE_KEY, JSON.stringify(list))
  } catch {
    // storage unavailable; rate limiting falls back to in-memory only
  }
}

export default function ContactForm() {
  const location = useLocation()
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [serverError, setServerError] = useState('')
  const lastSubmit = useRef(0)
  const formRef = useRef(null)
  const successRef = useRef(null)

  // Service cards link here with the chosen service pre-selected.
  useEffect(() => {
    const preset = location.state?.service
    if (preset && contact.serviceOptions.includes(preset)) {
      setValues((v) => ({ ...v, service: preset }))
    }
  }, [location.state])

  useEffect(() => {
    if (status === 'success') successRef.current?.focus()
  }, [status])

  const onChange = (field) => (e) => {
    const value = e.target.value
    setValues((v) => ({ ...v, [field]: value }))
    if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setServerError('')

    const found = validate(values)
    setErrors(found)
    const firstInvalid = Object.keys(found)[0]
    if (firstInvalid) {
      formRef.current?.querySelector(`[name="${firstInvalid}"]`)?.focus()
      return
    }

    // Honeypot: real people never see or fill this field.
    if (formRef.current?.elements._gotcha?.value) {
      setStatus('success')
      return
    }

    const now = Date.now()
    const recent = readSubmits().filter((t) => now - t < 60 * 60 * 1000)
    if (now - lastSubmit.current < MIN_INTERVAL_MS || recent.length >= MAX_PER_SESSION) {
      setServerError(`You've already sent a few messages. Please wait a bit, or email ${business.email}.`)
      return
    }

    setStatus('submitting')
    try {
      const res = await fetch(business.formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          _subject: `New strategy call request from ${values.name}`,
        }),
      })
      if (!res.ok) throw new Error(`Form endpoint returned ${res.status}`)

      lastSubmit.current = now
      writeSubmits([...recent, now])
      setStatus('success')
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'generate_lead', {
          form_id: 'strategy_call',
          service: values.service || 'unspecified',
          budget: values.budget || 'unspecified',
        })
      }
    } catch {
      setStatus('error')
      setServerError(`Something went wrong sending your message. Please try again, or email ${business.email}.`)
    }
  }

  if (status === 'success') {
    const hasCalendar = !isPlaceholder(business.calendarUrl)
    return (
      <div className="ga-form-card ga-form-success" role="status" tabIndex={-1} ref={successRef}>
        <CircleCheck size={40} aria-hidden="true" />
        <h3>Request received</h3>
        <p>{contact.success}</p>
        {hasCalendar && (
          <a className="ga-btn ga-btn-secondary-light" href={business.calendarUrl} target="_blank" rel="noreferrer">
            Or book a time now
          </a>
        )}
      </div>
    )
  }

  const fieldProps = (name) => ({
    id: `cf-${name}`,
    name,
    value: values[name],
    onChange: onChange(name),
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `cf-${name}-error` : undefined,
  })

  const ErrorText = ({ name }) =>
    errors[name] ? (
      <p className="ga-field-error" id={`cf-${name}-error`}>
        {errors[name]}
      </p>
    ) : null

  const submitting = status === 'submitting'

  return (
    <form className="ga-form-card" ref={formRef} onSubmit={onSubmit} noValidate aria-label="Request a free strategy call">
      <div className="ga-form-grid">
        <div className="ga-field">
          <label htmlFor="cf-name">
            Full name <span aria-hidden="true">*</span>
          </label>
          <input {...fieldProps('name')} type="text" autoComplete="name" required />
          <ErrorText name="name" />
        </div>
        <div className="ga-field">
          <label htmlFor="cf-email">
            Work email <span aria-hidden="true">*</span>
          </label>
          <input {...fieldProps('email')} type="email" autoComplete="email" inputMode="email" required />
          <ErrorText name="email" />
        </div>
        <div className="ga-field ga-field-full">
          <label htmlFor="cf-company">Company</label>
          <input {...fieldProps('company')} type="text" autoComplete="organization" />
        </div>
        <div className="ga-field">
          <label htmlFor="cf-service">What do you need?</label>
          <select {...fieldProps('service')}>
            <option value="">Select one</option>
            {contact.serviceOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className="ga-field">
          <label htmlFor="cf-budget">Estimated budget</label>
          <select {...fieldProps('budget')}>
            <option value="">Select a range</option>
            {contact.budgetOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className="ga-field ga-field-full">
          <label htmlFor="cf-message">
            Briefly, what's the challenge? <span aria-hidden="true">*</span>
          </label>
          <textarea {...fieldProps('message')} rows={5} required />
          <ErrorText name="message" />
        </div>
      </div>

      {/* Honeypot (Formspree reads _gotcha). Hidden from people and assistive tech. */}
      <div className="ga-hp" aria-hidden="true">
        <label htmlFor="cf-gotcha">Leave this field empty</label>
        <input id="cf-gotcha" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
      </div>

      {serverError && (
        <p className="ga-form-alert" role="alert">
          {serverError}
        </p>
      )}

      <button type="submit" className="ga-btn ga-btn-primary ga-btn-block" disabled={submitting} aria-busy={submitting}>
        {submitting ? (
          <>
            <Loader2 size={18} className="ga-spin" aria-hidden="true" /> Sending…
          </>
        ) : (
          <>
            {contact.submit} <ArrowRight size={18} aria-hidden="true" />
          </>
        )}
      </button>
      <p className="ga-form-micro">
        <span aria-hidden="true">*</span> Required. {contact.microcopy}
      </p>
    </form>
  )
}
