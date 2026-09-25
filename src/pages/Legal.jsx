import { useEffect, useState } from 'react'

const legalContent = {
  privacy: {
    title: 'Privacy Policy',
    label: 'Privacy & Data',
    intro:
      'I respect your privacy and aim to keep your experience on this portfolio clear, secure, and transparent. This Privacy Policy explains how information may be handled when you visit or interact with the personal portfolio of Muhammad Israr, Web Developer.',
    sections: [
      {
        title: 'About This Website',
        text:
          'This website is the personal professional portfolio of Muhammad Israr, a Web Developer focused on building modern, responsive, accessible, and user-friendly digital experiences. The website is used to present professional information, technical skills, selected work, certificates, learning interests, and ways to get in touch.'
      },
      {
        title: 'Information You Choose to Provide',
        text:
          'You may voluntarily provide personal information when you contact Muhammad Israr, submit feedback, send an inquiry, request information, or communicate through a contact method available on this website. Depending on how you contact me, this may include your name, email address, message, and any other information that you decide to include.'
      },
      {
        title: 'How Your Information May Be Used',
        text:
          'Information you voluntarily provide may be used to understand and respond to your message, answer questions, discuss potential opportunities, respond to portfolio feedback, communicate about projects, or provide information that you specifically request. Information is not intentionally collected for unrelated purposes.'
      },
      {
        title: 'Portfolio Contact & Communication',
        text:
          'The portfolio may provide contact options such as email and WhatsApp. When you choose one of these options, your communication is handled through the relevant third-party service. Muhammad Israr does not control the privacy practices, security, or data retention policies of those external platforms.'
      },
      {
        title: 'Theme Preference & Local Storage',
        text:
          'This portfolio includes a light and dark theme preference. When you select a theme, the preference may be stored in your browser using localStorage so the website can remember your choice when you return. This theme preference is stored locally on your device and is not intentionally submitted to Muhammad Israr as personal information.'
      },
      {
        title: 'Technical Information',
        text:
          'Like most websites, the hosting environment or web infrastructure may process limited technical information required to deliver the website, maintain availability, protect the service, or diagnose technical problems. Depending on the hosting provider and configuration, this can include information such as IP address, browser type, device information, requested pages, and technical timestamps.'
      },
      {
        title: 'Cookies and Similar Technologies',
        text:
          'The current theme preference functionality uses localStorage rather than a traditional tracking cookie. External services linked from this website may use cookies or similar technologies according to their own policies. If additional analytics, advertising, embedded content, or tracking technologies are introduced in the future, this policy will be updated where appropriate.'
      },
      {
        title: 'Third-Party Services',
        text:
          'This portfolio may link to external platforms and services, including email, messaging, professional networking, code hosting, or other websites. Once you leave this portfolio and interact with an external service, that service operates under its own privacy policy and terms. You should review the relevant provider’s policies before submitting personal information.'
      },
      {
        title: 'Information Sharing',
        text:
          'Muhammad Israr does not intentionally sell or rent personal information submitted directly through this portfolio. Information may be processed by third-party platforms when you choose to communicate through their services or when technical infrastructure requires limited processing to operate and secure the website.'
      },
      {
        title: 'Data Retention',
        text:
          'The length of time information is retained may depend on how the information was submitted and which communication or service provider handled it. Messages sent through external services may remain subject to the retention practices of those services.'
      },
      {
        title: 'Security',
        text:
          'Reasonable technical and organizational measures are used to maintain the website and protect information within the scope of the services under my control. However, no website, server, internet transmission, or electronic storage method can be guaranteed to be completely secure.'
      },
      {
        title: 'Your Choices',
        text:
          'You can choose what information you provide when contacting Muhammad Israr. You may also manage cookies and browser storage through your browser settings. Clearing localStorage may cause the portfolio to forget your selected theme preference.'
      },
      {
        title: 'Children’s Privacy',
        text:
          'This portfolio is intended as a professional website and is not specifically directed toward collecting personal information from children. I do not intentionally request sensitive personal information from children through this website.'
      },
      {
        title: 'Changes to This Privacy Policy',
        text:
          'This Privacy Policy may be updated when the portfolio, its features, connected services, or information practices change. The latest version will be published on this page so that visitors can review the current information.'
      },
      {
        title: 'Contact Muhammad Israr',
        text:
          'If you have questions about this Privacy Policy, privacy practices, or information submitted through this portfolio, you can contact Muhammad Israr using the contact options provided on the website.'
      }
    ]
  },

  cookies: {
    title: 'Cookie Policy',
    label: 'Cookies & Browser Storage',
    intro:
      'This Cookie Policy explains how Muhammad Israr’s portfolio uses cookies and similar browser technologies, including local browser storage used to provide a consistent website experience.',
    sections: [
      {
        title: 'What Are Cookies?',
        text:
          'Cookies are small pieces of data that websites may store in a visitor’s browser. They can support essential website functionality, remember preferences, maintain sessions, measure website usage, or support other features depending on how a website is configured.'
      },
      {
        title: 'How This Portfolio Uses Browser Storage',
        text:
          'The current portfolio uses browser localStorage to remember the visitor’s selected light or dark theme. This allows the preferred visual theme to remain consistent when the visitor returns to the website.'
      },
      {
        title: 'Local Storage Is Not a Cookie',
        text:
          'The theme preference described above is stored through localStorage rather than a traditional HTTP cookie. It remains within the visitor’s browser and is used for the website’s theme functionality.'
      },
      {
        title: 'Essential Technologies',
        text:
          'The website may rely on technologies required for basic operation, hosting, security, performance, navigation, and user preferences. These technologies are intended to help the portfolio function correctly.'
      },
      {
        title: 'Third-Party Services',
        text:
          'External services linked from the portfolio may use their own cookies or similar technologies. For example, when you open an external email, messaging, social, professional, or code-hosting service, that service may apply its own technologies according to its policies.'
      },
      {
        title: 'Managing Cookies and Storage',
        text:
          'Most modern browsers allow you to view, delete, block, or restrict cookies and website storage through browser settings. If you clear localStorage, the portfolio may no longer remember your selected theme.'
      },
      {
        title: 'Future Analytics or Tracking',
        text:
          'If analytics, advertising, embedded media, marketing tools, or other tracking technologies are added to this portfolio in the future, the relevant information will be reviewed and this Cookie Policy may be updated accordingly.'
      },
      {
        title: 'Policy Updates',
        text:
          'This Cookie Policy may change when the technologies or services used by the portfolio change. The current version will always be published on this page.'
      },
      {
        title: 'Contact Muhammad Israr',
        text:
          'If you have questions about cookies, localStorage, browser technologies, or this Cookie Policy, please use the contact information available on the portfolio.'
      }
    ]
  },

  terms: {
    title: 'Terms of Use',
    label: 'Website Terms',
    intro:
      'Welcome to the professional portfolio of Muhammad Israr. These Terms of Use describe the general conditions for accessing and using this website and its content.',
    sections: [
      {
        title: 'About Muhammad Israr',
        text:
          'This website represents the professional portfolio of Muhammad Israr, a Web Developer interested in creating modern, responsive, accessible, and user-focused web experiences. The portfolio may contain information about technical skills, projects, certificates, learning activities, professional interests, and contact methods.'
      },
      {
        title: 'Use of This Website',
        text:
          'You may browse and use this portfolio for legitimate personal, educational, professional, recruitment, collaboration, or informational purposes. You agree to use the website responsibly and in a manner that does not interfere with its operation or security.'
      },
      {
        title: 'Portfolio Content',
        text:
          'Unless otherwise indicated, the original website design, written content, code, visual presentation, branding, and portfolio materials are presented as the work or professional material of Muhammad Israr. Content should not be copied, republished, redistributed, modified, or commercially reused without appropriate permission.'
      },
      {
        title: 'Projects and Demonstrations',
        text:
          'Projects, demonstrations, screenshots, descriptions, and technical examples presented on this portfolio are intended to communicate development experience, skills, learning progress, or selected work. Project availability, technologies, features, and descriptions may change over time.'
      },
      {
        title: 'Accuracy of Information',
        text:
          'Reasonable effort is made to keep the information presented on this portfolio accurate and current. However, professional skills, projects, technologies, learning activities, links, and other information may change, and no guarantee is made that every piece of information will remain complete or current at all times.'
      },
      {
        title: 'External Links',
        text:
          'The portfolio may contain links to external websites and services. These links are provided to make relevant resources and communication channels accessible. Muhammad Israr does not control external websites and is not responsible for their content, availability, security, privacy practices, or terms.'
      },
      {
        title: 'Contact and Communication',
        text:
          'If you contact Muhammad Israr through email, WhatsApp, or another available communication method, your communication may be handled by the relevant service provider. By choosing to use an external communication service, you also agree to that provider’s applicable terms and policies.'
      },
      {
        title: 'Acceptable Use',
        text:
          'You must not attempt to gain unauthorized access to the website or its systems, interfere with website availability, introduce malicious software or code, abuse forms or communication channels, scrape or copy protected content in violation of applicable rights, or use the website for unlawful activity.'
      },
      {
        title: 'Security',
        text:
          'No online service can guarantee absolute security. You should avoid submitting passwords, payment information, highly sensitive personal information, or other confidential information through a public portfolio unless a specifically secure method has been provided.'
      },
      {
        title: 'Availability',
        text:
          'Muhammad Israr may update, modify, temporarily suspend, or remove parts of the portfolio without prior notice. Website availability may also depend on hosting providers, domain services, external platforms, internet connectivity, and other technical factors.'
      },
      {
        title: 'Intellectual Property',
        text:
          'The portfolio’s original presentation, written material, design elements, and code may be protected by applicable intellectual property laws. Nothing on this website should be interpreted as granting a license to reproduce or commercially exploit protected material unless permission has been expressly provided.'
      },
      {
        title: 'No Professional Advice',
        text:
          'Information presented on this portfolio is provided for professional and informational purposes. It should not be interpreted as legal, financial, medical, security, or other specialized professional advice.'
      },
      {
        title: 'Changes to These Terms',
        text:
          'These Terms of Use may be updated as the portfolio evolves, new services are introduced, or website practices change. The latest version will be published on this page.'
      },
      {
        title: 'Contact Muhammad Israr',
        text:
          'If you have questions regarding these Terms of Use, the portfolio, its content, or its use, please contact Muhammad Israr through the contact methods provided on the website.'
      }
    ]
  }
}

function Legal() {
  const [activePage, setActivePage] = useState('privacy')

  useEffect(() => {
    const updatePage = () => {
      const page = window.location.pathname

      if (page === '/cookie-policy') {
        setActivePage('cookies')
      } else if (page === '/terms') {
        setActivePage('terms')
      } else {
        setActivePage('privacy')
      }

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    updatePage()

    window.addEventListener('popstate', updatePage)

    return () => {
      window.removeEventListener('popstate', updatePage)
    }
  }, [])

  const content = legalContent[activePage]

  return (
    <main className="legal-page">
      <div className="legal-container">
        <header className="legal-header">
          

          <p className="legal-eyebrow">
            {content.label}
          </p>

          <h1>{content.title}</h1>

          <p className="legal-intro">
            {content.intro}
          </p>

          <p className="legal-updated">
            Last updated: September 22, 2026
          </p>
        </header>

        <nav
          className="legal-navigation"
          aria-label="Legal pages"
        >
          <a
            href="/privacy-policy"
            className={
              activePage === 'privacy'
                ? 'active'
                : ''
            }
          >
            Privacy Policy
          </a>

          <a
            href="/cookie-policy"
            className={
              activePage === 'cookies'
                ? 'active'
                : ''
            }
          >
            Cookie Policy
          </a>

          <a
            href="/terms"
            className={
              activePage === 'terms'
                ? 'active'
                : ''
            }
          >
            Terms of Use
          </a>
        </nav>

        <article className="legal-content">
          {content.sections.map((section) => (
            <section
              className="legal-section"
              key={section.title}
            >
              <h2>{section.title}</h2>

              <p>
                {section.text}
              </p>
            </section>
          ))}
        </article>

        <footer className="legal-footer">
          <div>
            <strong>
              Muhammad Israr
            </strong>

            <span>
              Web Developer
            </span>
          </div>

          <a href="/">
            Back to Portfolio
          </a>
        </footer>
      </div>
    </main>
  )
}

export default Legal