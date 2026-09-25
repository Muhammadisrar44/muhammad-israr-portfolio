function Feedback() {
  return (
    <section className="feedback-section" id="feedback">
      <div className="feedback-container">
        <div className="feedback-content">
          <span className="feedback-label">Feedback</span>

          <h2 className="feedback-title">
            I Would  Appreciate Your Feedback
          </h2>

          <p className="feedback-intro">
            Thank you for taking the time to visit my portfolio.
            I’ve put a great deal of effort into creating a clean,
            modern, and professional experience, with particular
            attention to UI/UX, visual consistency, responsive design,
            smooth animations, and overall usability.
          </p>

          <p className="feedback-text">
            I would genuinely appreciate it if you could explore the
            website thoroughly. If you notice any mistake,
            inconsistency, usability issue, design improvement, or
            anything that could make the experience better, I would
            be grateful to hear your feedback.
          </p>

          <p className="feedback-text">
            Your suggestions and constructive criticism will help me
            continue improving my skills and building better digital
            experiences.
          </p>

          <div className="feedback-action">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammadisrar0328@gmail.com&su=Portfolio%20Feedback"
              target="_blank"
              rel="noreferrer"
              className="feedback-button"
            >
              <span>Share Your Feedback</span>

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M5 12h13" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          </div>

          <div className="feedback-signature">
            <span>Thank you for taking the time to explore my work.</span>
            <strong>Muhammad Israr | Web Developer</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feedback