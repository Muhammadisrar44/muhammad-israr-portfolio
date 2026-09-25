import { useState } from 'react'
import profile from '../data/profile'

function Contact() {
  const [formStatus, setFormStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const whatsappUrl = 'https://wa.me/' + profile.whatsapp

 async function handleSubmit(event) {
  event.preventDefault()

  const form = event.currentTarget
  const formData = new FormData(form)
const honeypot = String(formData.get('_gotcha') || '').trim()
formData.set('name', name)
formData.set('email', email)
formData.set('subject', subject)
formData.set('message', message)
if (honeypot) {
  setFormStatus('Something went wrong. Please try again.')
  return
}
  const name = String(formData.get('name') || '').trim()
  const email = String(formData.get('email') || '').trim()
  const subject = String(formData.get('subject') || '').trim()
  const message = String(formData.get('message') || '').trim()

  // Client-side validation
  if (
    name.length < 2 ||
    name.length > 80 ||
    subject.length < 3 ||
    subject.length > 120 ||
    message.length < 10 ||
    message.length > 2000
  ) {
    setFormStatus(
      'Please check your information and message length.',
    )
    return
  }

  // Basic email validation
  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

  if (
    email.length > 120 ||
    !emailPattern.test(email)
  ) {
    setFormStatus(
      'Please enter a valid email address.',
    )
    return
  }

  // Reject control characters that should never be submitted
  const containsUnsafeControlChars =
    /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(
      `${name}${email}${subject}${message}`,
    )

  if (containsUnsafeControlChars) {
    setFormStatus(
      'Your message contains unsupported characters.',
    )
    return
  }

  setIsSubmitting(true)
  setFormStatus('')

  try {
    const response = await fetch(
      'https://formspree.io/f/xwlplogz',
      {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      },
    )

    if (response.ok) {
      form.reset()

      setFormStatus(
        'Thank you. Your message has been sent successfully.',
      )
    } else {
      setFormStatus(
        'Something went wrong. Please try again.',
      )
    }
  } catch {
    setFormStatus(
      'Unable to send your message right now. Please try again later.',
    )
  } finally {
    setIsSubmitting(false)
  }
}

  return (
    <section className="contact section" id="contact">
      <div className="section-container">
        <div className="contact-header">
          <div>
            <p className="section-label">
              Get In Touch
            </p>

            <h2>
              Let’s build something
              <span> meaningful together.</span>
            </h2>
          </div>

          <p className="contact-intro">
            Whether you want to discuss an idea, connect
            professionally, or simply say hello, feel free
            to reach out.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-details">
            <div className="contact-card">
              <div className="contact-card-top">
                <span className="contact-card-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                    />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>

                <span>Email</span>
              </div>

              <a href={'mailto:' + profile.email}>
                {profile.email}
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-card-top">
                <span className="contact-card-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6.5 3.5h3l1.5 4-2 1.5a14 14 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2 2C11.6 19.5 4.5 12.4 4.5 5.5a2 2 0 0 1 2-2Z" />
                  </svg>
                </span>

                <span>WhatsApp</span>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                +92 308 5642190
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-card-top">
                <span className="contact-card-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      className="social-icon-fill"
                      d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.87C21 10.1 18.99 8.1 16.31 8.1c-2.19 0-3.17 1.2-3.71 2.04V8.5H9.1V21h3.5v-6.19c0-1.63.31-3.2 2.32-3.2 1.98 0 2.01 1.85 2.01 3.3V21H21v-7.13Z"
                    />
                  </svg>
                </span>

                <span>LinkedIn</span>
              </div>

              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-card-top">
                <span className="contact-card-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      className="social-icon-fill"
                      d="M12 2.5a9.5 9.5 0 0 0-3 18.51c.48.09.65-.21.65-.46v-1.68c-2.65.58-3.21-1.12-3.21-1.12-.44-1.1-1.08-1.39-1.08-1.39-.87-.6.07-.59.07-.59.96.07 1.47.99 1.47.99.85 1.46 2.23 1.04 2.77.8.09-.62.33-1.04.6-1.28-2.12-.24-4.35-1.06-4.35-4.72 0-1.04.37-1.89.99-2.56-.1-.24-.43-1.21.09-2.52 0 0 .81-.26 2.64.98A9.2 9.2 0 0 1 12 7.98c.82 0 1.64.11 2.41.33 1.83-1.24 2.64-.98 2.64-.98.52 1.31.19 2.28.09 2.52.62.67.33 1.89.99 2.56.99 3.66-2.23 4.48-4.35 4.72.34.29.64.86.64 1.73v2.56c0 .25.17.55.66.46A9.5 9.5 0 0 0 12 2.5Z"
                    />
                  </svg>
                </span>

                <span>GitHub</span>
              </div>

              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noreferrer"
              >
                View GitHub Profile
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <div className="contact-form-heading">
              <p className="contact-form-kicker">
                Send a message
              </p>

              <h3>
                Have an idea or opportunity?
              </h3>

              <p>
                Fill out the form below and I’ll get back to
                you as soon as possible.
              </p>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <input
  type="text"
  name="_gotcha"
  tabIndex="-1"
  autoComplete="off"
  aria-hidden="true"
  className="form-honeypot"
/>
              <div className="form-row">
                <label>
                  <span>Your Name</span>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    minLength={2}
                    maxLength={80}
                    autoComplete="name"
                  />
                </label>

                <label>
                  <span>Email Address</span>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    maxLength={120}
                    autoComplete="email"
                  />
                </label>
              </div>

              <label>
                <span>Subject</span>

                <input
                  type="text"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  required
                  minLength={3}
                  maxLength={120}
                />
              </label>

              <label>
                <span>Message</span>

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  required
                  minLength={10}
                  maxLength={2000}
                />
              </label>

              <button
                type="submit"
                className="contact-submit"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? 'Sending...'
                  : 'Send Message'}
              </button>

              {formStatus && (
                <p
                  className="form-status"
                  role="status"
                  aria-live="polite"
                >
                  {formStatus}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact