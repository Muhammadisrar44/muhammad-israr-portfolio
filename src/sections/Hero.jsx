import profile from '../data/profile'
import ThemeToggle from '../components/navigation/ThemeToggle'

function Hero() {
  const whatsappUrl = 'https://wa.me/' + profile.whatsapp

  return (
    <section className="hero hero-premium" id="top">
      <div className="hero-background" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="hero-frame hero-frame-left" />
        <div className="hero-frame hero-frame-right" />
      </div>

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <div className="hero-intro-line">
            <p>Hi, I'm</p>
          </div>

          <h1 className="hero-title hero-name">
            <span className="hero-name-main">Muhammad</span>
            <span className="hero-name-main hero-name-accent">
              Israr
            </span>
          </h1>

          <h2 className="hero-role">
            {profile.title}
          </h2>

          <p className="hero-description">
            {profile.introduction}
          </p>

          {/* ACTIONS */}
          <div className="hero-actions">

            <a
              className="primary-button hero-primary-button"
              href="#projects"
            >
              <span>My Work</span>

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M5 12h13" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>

            <a
              className="secondary-button"
              href="/resume/Muhammad-Israr-Resume.pdf"
              download
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 3v12" />
                <path d="m7 10 5 5 5-5" />
                <path d="M5 21h14" />
              </svg>

              <span>Download Resume</span>
            </a>

            <a
              className="secondary-button"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Contact Muhammad Israr on WhatsApp"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7.5 18.5 4 20l1.5-3.5A8 8 0 1 1 7.5 18.5Z" />
                <path d="M9 9.5c.3 1.8 1.7 3.2 3.5 3.5" />
              </svg>

              <span>Let's Connect</span>
            </a>

          </div>


          {/* CURRENTLY LEARNING */}
          <div className="hero-learning">

            <div className="hero-learning-heading">
              <span>Currently Learning</span>
            </div>

            <div className="hero-learning-list">

              {profile.currentlyLearning.map((item) => (
                <a
                  key={item}
                  href="#skills"
                  className="hero-learning-item"
                >
                  {item}
                </a>
              ))}

            </div>

          </div>


          {/* SOCIALS + TAGLINE */}
          <div className="hero-bottom-row">

            <div className="hero-socials">

              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                in
              </a>

              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                GH
              </a>

              <a
                href={`mailto:${profile.email}`}
                aria-label="Send email"
              >
                @
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                WA
              </a>

            </div>

            <div className="hero-tagline-line">
              <p>{profile.tagline}</p>
            </div>

          </div>

        </div>


        {/* RIGHT IMAGE */}
        <div className="hero-visual">

          <div className="hero-image-stage">

            <div className="hero-image-ring" />

            <div className="hero-image-glow" />

            <div className="hero-image-wrapper">
              <img
                className="hero-profile-image"
                src="/images/profile/profile.jpg"
                alt="Muhammad Israr"
                width="720"
                height="960"
                loading="eager"
                decoding="async"
              />
            </div>

            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />

          </div>

          <ThemeToggle />

        </div>

      </div>


      {/* SCROLL INDICATOR */}
      <a
        className="hero-scroll"
        href="#about"
        aria-label="Scroll to About section"
      >
        <span className="hero-scroll-line" />

        <span className="hero-scroll-mouse">
          <span />
        </span>

        <span className="hero-scroll-text">
          Scroll Down
        </span>
      </a>

    </section>
  )
}

export default Hero