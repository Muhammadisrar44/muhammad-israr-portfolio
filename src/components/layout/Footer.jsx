import profile from '../../data/profile'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a
              href="#top"
              className="footer-logo"
              aria-label="Back to home"
            >
              MI
            </a>

            <div>
              <h2>{profile.name}</h2>
              <p>{profile.title}</p>
            </div>
          </div>

          <p className="footer-description">
            Learning, building, and continuously improving through
            modern web development and technology.
          </p>

          <div className="footer-links">
  <a href="#about">About</a>
  <a href="#skills">Skills</a>
  <a href="#projects">Projects</a>
  <a href="#contact">Contact</a>

  <a href="/privacy-policy">Privacy Policy</a>
  <a href="/cookie-policy">Cookie Policy</a>
  <a href="/terms">Terms of Use</a>
</div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} {profile.name}. All rights reserved.
          </p>

          <div className="footer-socials">
            <a
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>

            <a
              href={profile.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              GitHub
            </a>

            <a
              href={profile.socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              Instagram
            </a>

            <a
              href={profile.socialLinks.facebook}
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="Facebook"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer