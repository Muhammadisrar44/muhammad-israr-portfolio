import { useEffect, useState } from 'react'
import profile from '../../data/profile'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  function toggleMenu() {
    setMenuOpen((current) => !current)
  }

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={
        scrolled
          ? 'site-header premium-header is-scrolled'
          : 'site-header premium-header'
      }
    >
      <nav className="navbar premium-navbar" aria-label="Main navigation">

        {/* Brand */}
        <a
          className="brand premium-brand"
          href="#top"
          aria-label={`${profile.name} - Home`}
          onClick={closeMenu}
        >
          <span className="brand-mark">
            MI
          </span>

          <span className="brand-name">
            Muhammad Israr
          </span>
        </a>

        {/* Navigation */}
        <div
          className={
            menuOpen
              ? 'nav-links premium-nav-links is-open'
              : 'nav-links premium-nav-links'
          }
        >
          <div className="nav-links-inner">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
              >
                <span className="nav-number">
                  0{index + 1}
                </span>

                <span className="nav-label">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="navbar-actions">

          <a
            className="nav-cta premium-nav-cta"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammadisrar0328@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Get in touch with Muhammad Israr"
          >
            <span>Get In Touch</span>

            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M5 12h13" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>

          <button
            type="button"
            className={
              menuOpen
                ? 'menu-toggle premium-menu-toggle is-open'
                : 'menu-toggle premium-menu-toggle'
            }
            aria-label={
              menuOpen
                ? 'Close navigation'
                : 'Open navigation'
            }
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span />
            <span />
          </button>

        </div>
      </nav>
    </header>
  )
}

export default Navbar