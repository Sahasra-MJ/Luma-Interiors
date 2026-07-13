import { useState } from 'react'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const newErrors = {}

    if (name.trim() === '') newErrors.name = 'Please enter your full name.'
    if (email.trim() === '' || !/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (phone.trim() === '') newErrors.phone = 'Please enter a phone number.'
    if (message.trim() === '') newErrors.message = 'Please enter a message.'

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
    } else {
      setSubmitted(false)
    }
  }

  return (
    <section>
      <div className="container">
        <h1 className="section-title">Get in touch</h1>
        <p className="section-subtitle">Share a few details and we'll get back to you within two working days.</p>

        <div className="contact-wrap">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {submitted && (
              <div className="success-message show">
                Thanks — your message has been sent. We'll be in touch soon.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jordan Lee"
              />
              {errors.name && <div className="error-text">{errors.name}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jordan@email.com"
              />
              {errors.email && <div className="error-text">{errors.email}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 90000 00000"
              />
              {errors.phone && <div className="error-text">{errors.phone}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us a little about your project..."
              />
              {errors.message && <div className="error-text">{errors.message}</div>}
            </div>

            <button type="submit" className="btn">Submit</button>
          </form>

          <div className="contact-info">
            <h3>Studio Address</h3>
            <p>14 Alder Court, Bristol, BS1 6QN, United Kingdom</p>
            <h3>Contact</h3>
            <p>hello@lumainteriors.studio<br />+44 117 555 0142</p>
            <h3>Studio Hours</h3>
            <p>Monday – Friday, 9am – 6pm<br />Saturdays by appointment</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
