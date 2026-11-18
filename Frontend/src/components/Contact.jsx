import { useState } from "react";
import { submitContactForm } from "../services/contact.service";
import "../css/Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null); // { type: "success" | "error", text: string }
  const [fieldErrors, setFieldErrors] = useState({});

  const validate = () => {
    const errors = {};
    const name = form.name.trim();
    const email = form.email.trim();
    const subject = form.subject.trim();
    const message = form.message.trim();

    if (!name) {
      errors.name = "Your name is required";
    } else if (name.length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      errors.email = "Your email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!subject) {
      errors.subject = "Subject is required";
    } else if (subject.length < 3) {
      errors.subject = "Subject must be at least 3 characters";
    }

    if (!message) {
      errors.message = "Your message is required";
    } else if (message.length < 5) {
      errors.message = "Message must be at least 5 characters";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setLoading(true);
    setFeedback(null);
    setFieldErrors({});

    // Include subject inside message header for complete context in backend / email
    const fullMessage = form.subject
      ? `[Subject: ${form.subject.trim()}]\n\n${form.message.trim()}`
      : form.message.trim();

    const response = await submitContactForm({
      name: form.name.trim(),
      email: form.email.trim().toLowerCase(),
      message: fullMessage,
      subject: form.subject.trim(),
    });

    if (response.success) {
      setFeedback({
        type: "success",
        text: response.message || "Thank you! Your message has been sent successfully.",
      });
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setFeedback(null), 7000);
    } else {
      setFeedback({
        type: "error",
        text: response.message || "Something went wrong. Please check your connection and try again.",
      });
      if (response.errors) setFieldErrors(response.errors);
    }

    setLoading(false);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-container">
        {/* Main Shell Card with Deep Purple Gradient */}
        <div className="contact-card-shell">
          {/* Subtle Geometric Wireframe Patterns */}
          <div className="contact-wireframe-bg" aria-hidden="true">
            <svg
              className="wireframe-svg"
              viewBox="0 0 1000 700"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="wireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a87ffb" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#6a1fc2" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
                </linearGradient>
                <pattern
                  id="contactGrid"
                  width="44"
                  height="44"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 44 0 L 0 0 0 44"
                    fill="none"
                    stroke="rgba(168, 127, 251, 0.07)"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#contactGrid)" />
              {/* Geometric wireframe mesh lines */}
              <polygon
                points="80,50 280,160 190,380 30,240"
                fill="none"
                stroke="url(#wireGrad)"
                strokeWidth="1.5"
              />
              <polygon
                points="280,160 480,70 440,290 190,380"
                fill="none"
                stroke="url(#wireGrad)"
                strokeWidth="1.5"
              />
              <polygon
                points="30,240 190,380 140,580 10,480"
                fill="none"
                stroke="url(#wireGrad)"
                strokeWidth="1.5"
              />
              <polygon
                points="190,380 440,290 390,540 140,580"
                fill="none"
                stroke="url(#wireGrad)"
                strokeWidth="1.5"
              />
              <circle
                cx="880"
                cy="170"
                r="150"
                fill="none"
                stroke="url(#wireGrad)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />
              <circle
                cx="880"
                cy="170"
                r="240"
                fill="none"
                stroke="url(#wireGrad)"
                strokeWidth="1"
                strokeDasharray="4 8"
              />
            </svg>
          </div>

          <div className="contact-grid">
            {/* 2. LEFT CONTACT PANEL */}
            <div className="contact-left-panel">
              <div className="contact-panel-badge">
                <span className="badge-pulse-dot" />
                Get in Touch
              </div>

              <h3 className="contact-panel-title">Contact Me</h3>

              <p className="contact-panel-desc">
                Have a project in mind, a question, or just want to connect?
                I&apos;d love to hear from you!
              </p>

              {/* Contact Details List */}
              <div className="contact-info-list">
                {/* Phone */}
                <a
                  href="tel:+916369831841"
                  className="contact-info-card"
                  aria-label="Call Karthickraja"
                >
                  <div className="contact-info-icon-wrap phone-icon-wrap">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <span className="info-label">Phone</span>
                    <span className="info-val">+91 63698 31841</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:karthickr2304@gmail.com"
                  className="contact-info-card"
                  aria-label="Email Karthickraja"
                >
                  <div className="contact-info-icon-wrap email-icon-wrap">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <span className="info-label">Email</span>
                    <span className="info-val">karthickr2304@gmail.com</span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/karthickraja-k-140a06321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-card"
                  aria-label="LinkedIn Profile"
                >
                  <div className="contact-info-icon-wrap linkedin-icon-wrap">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <span className="info-label">LinkedIn</span>
                    <span className="info-val">Karthickraja K</span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/916369831841"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-card"
                  aria-label="Chat on WhatsApp"
                >
                  <div className="contact-info-icon-wrap whatsapp-icon-wrap">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.78 14.12c-.24.68-1.39 1.25-1.92 1.33-.51.08-1.17.11-3.38-.81-2.45-1.02-4.04-3.52-4.16-3.68-.12-.16-.99-1.32-.99-2.52s.63-1.79.85-2.03c.22-.24.49-.3.65-.3.17 0 .33 0 .47.01.15.01.35-.06.55.42.21.49.71 1.73.77 1.86.06.13.1.28.01.44-.08.16-.13.26-.25.4-.13.15-.27.33-.38.44-.13.13-.26.27-.11.53.15.25.66 1.09 1.42 1.76.98.87 1.8 1.14 2.06 1.27.26.13.41.11.56-.06.16-.17.67-.78.85-1.05.18-.27.36-.23.6-.14.25.09 1.58.74 1.85.88.27.13.45.2.52.31.06.12.06.69-.18 1.37z" />
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <span className="info-label">WhatsApp</span>
                    <span className="info-val">Chat on WhatsApp</span>
                  </div>
                </a>
              </div>

              {/* Connect with me divider and Social Links */}
              <div className="contact-social-section">
                <div className="social-divider">
                  <span>Connect with me</span>
                </div>
                <div className="contact-social-links">
                  <a
                    href="https://www.linkedin.com/in/karthickraja-k-140a06321"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-btn"
                    aria-label="LinkedIn Profile"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a
                    href="https://github.com/KARTHICK2320"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-btn"
                    aria-label="GitHub Profile"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>

                  <a
                    href="https://wa.me/916369831841"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-btn"
                    aria-label="WhatsApp Message"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.78 14.12c-.24.68-1.39 1.25-1.92 1.33-.51.08-1.17.11-3.38-.81-2.45-1.02-4.04-3.52-4.16-3.68-.12-.16-.99-1.32-.99-2.52s.63-1.79.85-2.03c.22-.24.49-.3.65-.3.17 0 .33 0 .47.01.15.01.35-.06.55.42.21.49.71 1.73.77 1.86.06.13.1.28.01.44-.08.16-.13.26-.25.4-.13.15-.27.33-.38.44-.13.13-.26.27-.11.53.15.25.66 1.09 1.42 1.76.98.87 1.8 1.14 2.06 1.27.26.13.41.11.56-.06.16-.17.67-.78.85-1.05.18-.27.36-.23.6-.14.25.09 1.58.74 1.85.88.27.13.45.2.52.31.06.12.06.69-.18 1.37z" />
                    </svg>
                  </a>

                  <a
                    href="mailto:karthickr2304@gmail.com"
                    className="social-icon-btn"
                    aria-label="Direct Email"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* 3. RIGHT CONTACT FORM */}
            <div className="contact-form-card">
              <h3 className="form-card-title">Send a Message</h3>
              <p className="form-card-desc">
                Fill out the form below and I&apos;ll get back to you within 24 hours.
              </p>

              <form
                name="contact"
                method="POST"
                action="/"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="custom-contact-form"
                noValidate
              >
                {/* Netlify Forms Hidden Identification Fields */}
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                {/* Name & Email Row (Side by side on desktop) */}
                <div className="form-input-row">
                  <div className="form-group-item">
                    <label htmlFor="contact-name" className="input-label">
                      Your Name <span className="req-asterisk">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      className={`form-input-field ${fieldErrors.name ? "input-invalid" : ""}`}
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      disabled={loading}
                      required
                      autoComplete="name"
                    />
                    {fieldErrors.name && (
                      <span className="error-text-msg">{fieldErrors.name}</span>
                    )}
                  </div>

                  <div className="form-group-item">
                    <label htmlFor="contact-email" className="input-label">
                      Your Email <span className="req-asterisk">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      className={`form-input-field ${fieldErrors.email ? "input-invalid" : ""}`}
                      placeholder="Your Email"
                      value={form.email}
                      onChange={handleChange}
                      disabled={loading}
                      required
                      autoComplete="email"
                    />
                    {fieldErrors.email && (
                      <span className="error-text-msg">{fieldErrors.email}</span>
                    )}
                  </div>
                </div>

                {/* Subject (Full Width) */}
                <div className="form-group-item full-width-item">
                  <label htmlFor="contact-subject" className="input-label">
                    Subject <span className="req-asterisk">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    className={`form-input-field ${fieldErrors.subject ? "input-invalid" : ""}`}
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    disabled={loading}
                    required
                  />
                  {fieldErrors.subject && (
                    <span className="error-text-msg">{fieldErrors.subject}</span>
                  )}
                </div>

                {/* Message (Full Width Textarea) */}
                <div className="form-group-item full-width-item">
                  <label htmlFor="contact-message" className="input-label">
                    Your Message <span className="req-asterisk">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    className={`form-input-field textarea-field ${fieldErrors.message ? "input-invalid" : ""}`}
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    disabled={loading}
                    required
                  />
                  {fieldErrors.message && (
                    <span className="error-text-msg">{fieldErrors.message}</span>
                  )}
                </div>

                {/* Send Message Button (Full Width Purple Gradient) */}
                <button
                  type="submit"
                  className="btn-send-message"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="loading-spinner" aria-hidden="true" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg
                        className="send-btn-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </button>

                {/* Feedback Notification (Success / Error State) */}
                {feedback && (
                  <div
                    className={`form-feedback-alert ${
                      feedback.type === "success"
                        ? "feedback-alert-success"
                        : "feedback-alert-error"
                    }`}
                    role="alert"
                  >
                    <div className="feedback-alert-icon" aria-hidden="true">
                      {feedback.type === "success" ? (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                      )}
                    </div>
                    <span className="feedback-alert-text">{feedback.text}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
