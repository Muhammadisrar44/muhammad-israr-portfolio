import { useEffect, useState } from 'react'

import mernImg from '../assets/certificates/mern.jpg'
import shopifyImg from '../assets/certificates/shopify.jpg'
import hecImg from '../assets/certificates/hec-project.jpg'
import firstAidImg from '../assets/certificates/first-aid.jpg'
import vetImg from '../assets/certificates/vet.jpg'
import youthImg from '../assets/certificates/youth-training.jpg'

const certificates = [
  {
    id: 1,
    image: mernImg,
    category: 'Technical',
    title: 'MERN Stack Development',
    issuer: 'Merged Area Digital Connect Program (KPITB)',
    description:
      'An intensive MERN Stack development training focused on modern web application development using MongoDB, Express.js, React, and Node.js.',
    learnings: [
      'MongoDB fundamentals',
      'Express.js fundamentals',
      'React development',
      'Node.js fundamentals',
      'Full-stack development concepts',
    ],
    link: 'http://www.lms.digitalkonect.com/Verify_Certificate/',
  },

  {
    id: 2,
    image: shopifyImg,
    category: 'Technical',
    title: 'Shopify Plus Course',
    issuer: 'Brightlancer Pakistan',
    description:
      'A professional course focused on Shopify and e-commerce development, providing practical exposure to building and managing online stores.',
    learnings: [
      'Shopify fundamentals',
      'E-commerce concepts',
      'Online store development',
      'Store management',
      'Digital commerce fundamentals',
    ],
    link: null,
  },

  {
    id: 3,
    image: hecImg,
    category: 'Technical & Innovation',
    title: 'Project Presentation & Entrepreneurship',
    issuer: 'HEC NRPU Funded Project — University of Sahiwal',
    description:
      'Recognition for participation in a Final Presentation Competition conducted under an HEC NRPU funded project focused on promoting youth-led entrepreneurship in underserved areas of Pakistan.',
    learnings: [
      'Project presentation',
      'Communication skills',
      'Entrepreneurship concepts',
      'Idea development',
      'Professional presentation',
    ],
    link: null,
  },

  {
    id: 4,
    image: firstAidImg,
    category: 'Community & Training',
    title: 'Basic First Aid Training',
    issuer: 'Pakistan Red Crescent Society (PRCS) Bajaur',
    description:
      'Completion of an intensive Basic First Aid Training program focused on essential first-aid knowledge and practical emergency response skills.',
    learnings: [
      'Basic first aid',
      'Emergency response',
      'First-aid procedures',
      'Safety awareness',
      'Emergency preparedness',
    ],
    link: null,
  },

  {
    id: 5,
    image: vetImg,
    category: 'Community & Training',
    title: 'Volunteering in Emergency Training',
    issuer: 'Pakistan Red Crescent Society District Branch Bajaur',
    description:
      'A focused emergency training program designed to develop practical awareness and skills related to emergency response and volunteer activities.',
    learnings: [
      'Emergency response',
      'Volunteer responsibilities',
      'Teamwork',
      'Safety procedures',
      'Community support',
    ],
    link: null,
  },

  {
    id: 6,
    image: youthImg,
    category: 'Community & Training',
    title: 'Youth as Agent of Change',
    issuer: 'Pakistan Red Crescent Society District Branch Bajaur',
    description:
      'A youth-focused training program designed to develop personal awareness, communication, teamwork, and positive community engagement.',
    learnings: [
      'Leadership awareness',
      'Communication',
      'Teamwork',
      'Community engagement',
      'Personal development',
    ],
    link: null,
  },
]

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null)

  const selectedIndex = certificates.findIndex(
    (certificate) => certificate.id === selectedCert?.id,
  )

  const openCertificate = (certificate) => {
    setSelectedCert(certificate)
  }

  const closeCertificate = () => {
    setSelectedCert(null)
  }

  const showNext = () => {
    if (selectedIndex === -1) return

    const nextIndex =
      (selectedIndex + 1) % certificates.length

    setSelectedCert(certificates[nextIndex])
  }

  const showPrevious = () => {
    if (selectedIndex === -1) return

    const previousIndex =
      (selectedIndex - 1 + certificates.length) %
      certificates.length

    setSelectedCert(certificates[previousIndex])
  }

  useEffect(() => {
    if (!selectedCert) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeCertificate()
      }

      if (event.key === 'ArrowRight') {
        showNext()
      }

      if (event.key === 'ArrowLeft') {
        showPrevious()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedCert, selectedIndex])

  return (
    <>
      <section className="certificates-section" id="certificates">
        <div className="certificates-container">

          <div className="certificates-header">
            <span className="certificates-label">
              Certifications
            </span>

            <h2>Certificates &amp; Training</h2>

            <p>
              A collection of professional certifications,
              technical training, and development programs.
            </p>
          </div>

          <div className="certificates-list">
            {certificates.map((certificate, index) => (
              <button
                type="button"
                className="certificate-item"
                key={certificate.id}
                onClick={() => openCertificate(certificate)}
              >
                <span className="certificate-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="certificate-content">
                  <span className="certificate-category">
                    {certificate.category}
                  </span>

                  <span className="certificate-title">
                    {certificate.title}
                  </span>

                  <span className="certificate-issuer">
                    {certificate.issuer}
                  </span>
                </span>

                <span className="certificate-arrow">
                  →
                </span>
              </button>
            ))}
          </div>

        </div>
      </section>

      {selectedCert && (
        <div
          className="certificate-modal-overlay"
          onClick={closeCertificate}
        >
          <div
            className="certificate-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="certificate-close"
              onClick={closeCertificate}
              aria-label="Close certificate"
            >
              ×
            </button>

            <div className="certificate-modal-image">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
              />
            </div>

            <div className="certificate-modal-content">

              <span className="certificate-modal-category">
                {selectedCert.category}
              </span>

              <h3>{selectedCert.title}</h3>

              <p className="certificate-modal-issuer">
                {selectedCert.issuer}
              </p>

              <p className="certificate-modal-description">
                {selectedCert.description}
              </p>

              <div className="certificate-learning">
                <h4>Key Learning</h4>

                <div className="certificate-learning-list">
                  {selectedCert.learnings.map((learning) => (
                    <span key={learning}>
                      {learning}
                    </span>
                  ))}
                </div>
              </div>

              {selectedCert.link && (
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="certificate-verify"
                >
                  Verify Certificate
                </a>
              )}

            </div>

            <div className="certificate-navigation">
              <button
                type="button"
                onClick={showPrevious}
              >
                Previous
              </button>

              <span>
                {selectedIndex + 1} / {certificates.length}
              </span>

              <button
                type="button"
                onClick={showNext}
              >
                Next
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default Certificates