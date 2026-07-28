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
      alert("Error Sending Message");
    }
  };

  return (
    <div className="contact-page">

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
  );
}

export default Contact;