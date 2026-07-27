import React from 'react'
import './about.css'

const About = () => {
  return (
    <section className="wb-about">
      {/* Ambient decorative layer — blobs + floating particles */}
      <div className="wb-about-bgfx" aria-hidden="true">
        <span className="wb-about-blob wb-about-blob-1"></span>
        <span className="wb-about-blob wb-about-blob-2"></span>
        <span className="wb-about-blob wb-about-blob-3"></span>
        <span className="wb-about-particle wb-about-particle-1"></span>
        <span className="wb-about-particle wb-about-particle-2"></span>
        <span className="wb-about-particle wb-about-particle-3"></span>
        <span className="wb-about-particle wb-about-particle-4"></span>
        <span className="wb-about-particle wb-about-particle-5"></span>
      </div>

      {/* ================= HERO ================= */}
      <header className="wb-about-hero">
        <p className="wb-about-eyebrow">The Team Behind Web-Builder</p>
        <h1 className="wb-about-hero-title">
          We Don't Just Build Websites.
          <span className="wb-about-hero-title-accent"> We Build Digital Advantage.</span>
        </h1>
        <p className="wb-about-hero-sub">
          Every business we work with is trying to win at something — more
          customers, more credibility, more revenue. Our job is to make sure
          your website is never the reason you lose that fight.
        </p>
        <div className="wb-about-hero-stats">
          <div className="wb-about-stat">
            <span className="wb-about-stat-number">100%</span>
            <span className="wb-about-stat-label">Projects Delivered</span>
          </div>
          <div className="wb-about-stat">
            <span className="wb-about-stat-number">45 Days</span>
            <span className="wb-about-stat-label">Free Post-Launch Support</span>
          </div>
          <div className="wb-about-stat">
            <span className="wb-about-stat-number">24 Hrs</span>
            <span className="wb-about-stat-label">Typical Response Time</span>
          </div>
        </div>
      </header>

      {/* ================= TIMELINE ================= */}
      <div className="wb-about-timeline">

        {/* 1. Who We Are — LEFT */}
        <article className="wb-about-node wb-about-node-left">
          <span className="wb-about-node-tag">Who We Are</span>
          <h2>A Small Team That Thinks Like Your In-House Developers</h2>
          <p>
            Web-Builder isn't a factory churning out template sites. We're a
            focused team of developers and designers who take on a limited
            number of projects at a time — on purpose — so every client gets
            real attention, not a rotating cast of freelancers.
          </p>
          <p>
            We build with React on the front end and Django on the back end,
            which means what you get isn't just good-looking — it's fast,
            secure, and built to keep working long after launch day.
          </p>
        </article>

        {/* 2. What Makes Us Different — RIGHT */}
        <article className="wb-about-node wb-about-node-right">
          <span className="wb-about-node-tag">What Makes Us Different</span>
          <h2>We Say No to Projects We Can't Do Well</h2>
          <p>
            Most agencies say yes to everything and stretch themselves thin.
            We'd rather turn down a project than deliver something mediocre
            with our name on it. That discipline is why the work we do ship
            holds up — technically and visually — years later.
          </p>
          <p>
            We also don't disappear after launch. Every project includes 45
            days of complimentary support, because a website's real test
            starts the day it goes live, not the day we hand it over.
          </p>
        </article>

        {/* 3. Why Businesses Choose Us — LEFT */}
        <article className="wb-about-node wb-about-node-left">
          <span className="wb-about-node-tag">Why Businesses Choose Us</span>
          <h2>Because Guesswork Is Expensive — and We Don't Do It</h2>
          <p>
            Founders and teams come to us after being burned by vague
            timelines, disappearing developers, or sites that looked fine in
            a demo and fell apart in production. We fix that by being
            boring in the best way: clear scope, honest timelines, and code
            we're not afraid to hand over.
          </p>
          <p>
            No jargon-filled proposals. No surprise invoices. Just a team
            that tells you exactly what you're getting and then delivers it.
          </p>
        </article>

        {/* 4. Our Development Process — RIGHT (with step list) */}
        <article className="wb-about-node wb-about-node-right">
          <span className="wb-about-node-tag">Our Development Process</span>
          <h2>Four Stages. No Shortcuts. No Surprises.</h2>
          <ol className="wb-about-process-list">
            <li className="wb-about-process-step">
              <span className="wb-about-process-num">01</span>
              <div>
                <h3>Discover</h3>
                <p>We learn your business, your users, and what "success" actually means for this project — before a single line of code is written.</p>
              </div>
            </li>
            <li className="wb-about-process-step">
              <span className="wb-about-process-num">02</span>
              <div>
                <h3>Design</h3>
                <p>Wireframes and visual direction you approve before development starts, so there are no expensive mid-project rewrites.</p>
              </div>
            </li>
            <li className="wb-about-process-step">
              <span className="wb-about-process-num">03</span>
              <div>
                <h3>Develop</h3>
                <p>Clean, tested, production-grade code — built in the open, with regular check-ins instead of a black-box handoff at the end.</p>
              </div>
            </li>
            <li className="wb-about-process-step">
              <span className="wb-about-process-num">04</span>
              <div>
                <h3>Deliver &amp; Support</h3>
                <p>Launch day is the start of the relationship, not the end — backed by 45 days of complimentary support.</p>
              </div>
            </li>
          </ol>
        </article>

        {/* Mission + Vision — HUB, side by side on desktop */}
        <div className="wb-about-hub wb-about-mv">
          <article className="wb-about-mv-card">
            <span className="wb-about-node-tag">Our Mission</span>
            <h2>Make Every Client's Website Their Best Salesperson</h2>
            <p>
              We exist to build digital experiences that actively work for
              your business — generating trust, capturing leads, and closing
              the gap between "found us online" and "became a customer."
            </p>
          </article>
          <article className="wb-about-mv-card">
            <span className="wb-about-node-tag">Our Vision</span>
            <h2>To Be the Agency Businesses Recommend Without Being Asked</h2>
            <p>
              We're building toward a reputation where our clients tell
              other founders about us unprompted — because the work spoke
              for itself long before we did.
            </p>
          </article>
        </div>

        {/* Core Values — HUB, centerpiece */}
        <article className="wb-about-hub wb-about-values">
          <span className="wb-about-node-tag wb-about-values-tag">Our Core Values</span>
          <h2 className="wb-about-values-title">The Standards We Don't Compromise On</h2>

          <div className="wb-about-values-grid">

            <div className="wb-about-value-card">
              <span className="wb-about-value-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <h3>Quality</h3>
              <p>We'd rather ship one week later than ship something we're not proud of.</p>
            </div>

            <div className="wb-about-value-card">
              <span className="wb-about-value-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/></svg>
              </span>
              <h3>Transparency</h3>
              <p>You'll always know what's being built, why, and what it costs — before we start.</p>
            </div>

            <div className="wb-about-value-card">
              <span className="wb-about-value-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.4c.6.6 1 1.4 1 2.1V16h6v-.5c0-.7.4-1.5 1-2.1A6 6 0 0012 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <h3>Innovation</h3>
              <p>We stay current with modern tools so your site never looks or feels dated.</p>
            </div>

            <div className="wb-about-value-card">
              <span className="wb-about-value-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>
              </span>
              <h3>Reliability</h3>
              <p>Deadlines are commitments, not suggestions. We show up when we say we will.</p>
            </div>

            <div className="wb-about-value-card">
              <span className="wb-about-value-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-4.35-9.5-9C.5 7.5 3 4 6.5 4 9 4 12 6.5 12 6.5S15 4 17.5 4C21 4 23.5 7.5 21.5 12 19 16.65 12 21 12 21z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>
              </span>
              <h3>Client First</h3>
              <p>Every decision gets filtered through one question: does this actually help you?</p>
            </div>

            <div className="wb-about-value-card">
              <span className="wb-about-value-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><path d="M4 16l6-7 4 4 6-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 5h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <h3>Continuous Improvement</h3>
              <p>We refine our process on every project — you benefit from everything we've already learned.</p>
            </div>

          </div>
        </article>

        {/* Long-Term Client Commitment — LEFT */}
        <article className="wb-about-node wb-about-node-left">
          <span className="wb-about-node-tag">Long-Term Client Commitment</span>
          <h2>We're Not Optimizing for One Invoice</h2>
          <p>
            A lot of agencies are built around landing the next client. We're
            built around keeping the ones we already have. That means
            honest advice even when it costs us a sale, support that
            doesn't vanish after 45 days if you need us, and a relationship
            that's still active a year — or five — after launch.
          </p>
          <p>
            If your business grows, we want to be the team you call next,
            not a vendor you had to replace.
          </p>
        </article>

      </div>

      {/* ================= FINAL CTA ================= */}
      <section className="wb-about-cta">
        <h2>Your Website Should Be Working as Hard as You Do.</h2>
        <p>
          If it isn't right now, that's a fixable problem — and it's exactly
          the kind of problem we like solving. Let's talk about what
          building it right actually looks like.
        </p>
        <button type="button" className="wb-about-cta-btn">
          <span>Start a Conversation</span>
          <span className="wb-about-cta-btn-icon" aria-hidden="true">→</span>
        </button>
      </section>
    </section>
  )
}

export default About