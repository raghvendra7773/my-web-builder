import { useState } from "react";
import axios from "axios";
import './contact.css'

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://my-web-builder.onrender.com/api/contact/",
        form
      );

      alert("Message Sent Successfully");

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.error ||
        error.message ||
        "Unknown Error"
      );
    }
  };

  return (
    <>
    <div className="contact-page">
{/* ============ FLOATING WHATSAPP BUTTONS ============ */}
<div className="whatsapp-float-group">

  <a
    href="https://wa.me/916375546583"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-float-btn whatsapp-btn-1"
    aria-label="Chat on WhatsApp with +91 63755 46583"
  >
    <svg viewBox="0 0 24 24" className="whatsapp-icon" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.07c-.24.68-1.4 1.32-1.94 1.4-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.17-1.56-1.17-2.98s.73-2.11.99-2.4c.26-.29.57-.36.76-.36l.54.01c.17.01.4-.06.63.48.24.56.81 1.94.88 2.08.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.04.94 1.92 1.23 2.2 1.37.28.14.45.12.61-.07.17-.19.71-.83.9-1.11.19-.28.38-.24.63-.14.26.09 1.63.77 1.91.91.28.14.47.21.54.33.07.13.07.71-.17 1.39z" />
    </svg>
  </a>

  <a
    href="https://wa.me/918504971136"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-float-btn whatsapp-btn-2"
    aria-label="Chat on WhatsApp with +91 85049 71136"
  >
    <svg viewBox="0 0 24 24" className="whatsapp-icon" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.07c-.24.68-1.4 1.32-1.94 1.4-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.17-1.56-1.17-2.98s.73-2.11.99-2.4c.26-.29.57-.36.76-.36l.54.01c.17.01.4-.06.63.48.24.56.81 1.94.88 2.08.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.04.94 1.92 1.23 2.2 1.37.28.14.45.12.61-.07.17-.19.71-.83.9-1.11.19-.28.38-.24.63-.14.26.09 1.63.77 1.91.91.28.14.47.21.54.33.07.13.07.71-.17 1.39z" />
    </svg>
  </a>

</div>

      {/* ============ HERO ============ */}
      <header className="contact-hero fade-up">
        <p className="contact-eyebrow">We're Ready To Help</p>
        <h1 className="contact-title">Let's Discuss Your Project</h1>
        <p className="contact-intro">
          Tell us about your idea and our team will help shape it into a
          reliable, professional digital solution.
        </p>
        <p className="contact-trust-note">
          Typically Respond Within 24 Hours
        </p>
      </header>

      {/* ============ MAIN TWO-COLUMN LAYOUT ============ */}
      <div className="contact-layout">

        {/* ---------- LEFT: Info Column ---------- */}
        <div className="contact-info-column slide-in-left">

          <div className="info-card fade-up">
            <h2>Tell Us About Your Idea</h2>
            <p>
              Whether you're starting from scratch or improving an existing
              product, we'd love to hear what you're building and how we can
              help.
            </p>
          </div>

          <div className="info-card benefits-card fade-up">
            <h3>Why Work With Us</h3>
            <ul className="benefits-list">
              <li className="benefit-item">
                <span className="benefit-marker" aria-hidden="true"></span>
                Clear, honest communication from day one
              </li>
              <li className="benefit-item">
                <span className="benefit-marker" aria-hidden="true"></span>
                Professional, dependable delivery
              </li>
              <li className="benefit-item">
                <span className="benefit-marker" aria-hidden="true"></span>
                Solutions built around your business goals
              </li>
            </ul>
          </div>

          <div className="info-card response-card fade-up">
            <span className="response-icon" aria-hidden="true">◷</span>
            <div className="response-card-text">
              <h3>Fast, Personal Replies</h3>
              <p>Every message is read by a real person on our team, usually within 24 hours.</p>
            </div>
          </div>

        </div>

        {/* ---------- RIGHT: Contact Form Column ---------- */}
        <div className="contact-form-column slide-in-right">
          <div className="contact-form-card">

            <div className="form-card-header">
              <h2>Send Us a Message</h2>
              <p className="form-card-subtext">
                Fill in the details below — it only takes a minute.
              </p>
            </div>

            <div className="form-progress-track" aria-hidden="true">
              <span className="form-progress-fill"></span>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>

              <div className="field-card focus-glow">
                <label htmlFor="contact-name" className="field-label">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="e.g. Alex Johnson"
                  value={form.name}
                  onChange={handleChange}
                  className="field-input"
                  autoComplete="name"
                />
              </div>

              <div className="field-card focus-glow">
                <label htmlFor="contact-email" className="field-label">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="e.g. alex@company.com"
                  value={form.email}
                  onChange={handleChange}
                  className="field-input"
                  autoComplete="email"
                />
              </div>

              <div className="field-card focus-glow">
                <label htmlFor="contact-phone" className="field-label">
                  Phone Number
                </label>
                <input
                  id="contact-phone"
                  type="text"
                  name="phone"
                  placeholder="e.g. +91 98765 43210"
                  value={form.phone}
                  onChange={handleChange}
                  className="field-input"
                  autoComplete="tel"
                />
              </div>

              <div className="field-card field-card-textarea focus-glow">
                <label htmlFor="contact-message" className="field-label">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell us a little about your project or question..."
                  value={form.message}
                  onChange={handleChange}
                  className="field-textarea"
                  rows={5}
                />
              </div>

              <button type="submit" className="submit-btn">
                <span className="submit-btn-label">Send Message</span>
                <span className="submit-btn-icon" aria-hidden="true">→</span>
              </button>

              <p className="form-microcopy">
                Your information stays private and is never shared.
              </p>

            </form>
          </div>
        </div>

      </div>
    </div>
    </>
  );
}

export default Contact;