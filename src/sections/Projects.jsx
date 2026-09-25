import { useEffect, useRef, useState } from 'react'

import transcriptHome from '../assets/projects/ai-transcript-home.jpg'
import transcriptDashboard from '../assets/projects/ai-transcript-dashboard.jpg'
import transcriptProgress from '../assets/projects/ai-transcript-progress.jpg'

const transcriptImages = [
  {
    image: transcriptHome,
    label: 'TranscriptAI — Home',
  },
  {
    image: transcriptDashboard,
    label: 'TranscriptAI — Dashboard',
  },
  {
    image: transcriptProgress,
    label: 'TranscriptAI — Processing',
  },
]

function Projects() {
  const [showProject, setShowProject] = useState(false)
  const [activeImage, setActiveImage] = useState(0)
  const [showCyberVideo, setShowCyberVideo] = useState(false)

  const cyberVideoRef = useRef(null)

  /*
   * ---------------------------------------------------------
   * MODAL KEYBOARD + SCROLL CONTROL
   * ---------------------------------------------------------
   */

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        closeProject()
        closeCyberVideo()
        return
      }

      if (showProject) {
        if (event.key === 'ArrowRight') {
          setActiveImage((current) =>
            current === transcriptImages.length - 1
              ? 0
              : current + 1,
          )
        }

        if (event.key === 'ArrowLeft') {
          setActiveImage((current) =>
            current === 0
              ? transcriptImages.length - 1
              : current - 1,
          )
        }
      }
    }

    const isModalOpen = showProject || showCyberVideo

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [showProject, showCyberVideo])

  /*
   * ---------------------------------------------------------
   * NETWORK VIDEO AUTOPLAY
   * ---------------------------------------------------------
   */

  useEffect(() => {
    if (!showCyberVideo || !cyberVideoRef.current) {
      return
    }

    const video = cyberVideoRef.current

    video.currentTime = 0

    const playVideo = async () => {
      try {
        await video.play()
      } catch {
        /*
         * Some browsers may block autoplay.
         * The video remains available without breaking the UI.
         */
      }
    }

    playVideo()

    return () => {
      video.pause()
      video.currentTime = 0
    }
  }, [showCyberVideo])

  /*
   * ---------------------------------------------------------
   * TRANSCRIPT AI
   * ---------------------------------------------------------
   */

  function openProject() {
    setActiveImage(0)
    setShowProject(true)
  }

  function closeProject() {
    setShowProject(false)
  }

  /*
   * ---------------------------------------------------------
   * NETWORK SNIFFER VIDEO
   * ---------------------------------------------------------
   */

  function openCyberVideo() {
    setShowCyberVideo(true)
  }

  function closeCyberVideo() {
    if (cyberVideoRef.current) {
      cyberVideoRef.current.pause()
      cyberVideoRef.current.currentTime = 0
    }

    setShowCyberVideo(false)
  }

  /*
   * ---------------------------------------------------------
   * TRANSCRIPT IMAGE NAVIGATION
   * ---------------------------------------------------------
   */

  function nextImage() {
    setActiveImage((current) =>
      current === transcriptImages.length - 1
        ? 0
        : current + 1,
    )
  }

  function previousImage() {
    setActiveImage((current) =>
      current === 0
        ? transcriptImages.length - 1
        : current - 1,
    )
  }

  return (
    <>
      <section className="projects section" id="projects">
        <div className="section-container">

          {/* =================================================
              SECTION HEADER
              ================================================= */}

          <p className="section-label">
            Selected Work
          </p>

          <div className="projects-header">
            <div>
              <h2>
                Projects
              </h2>

              <p className="projects-intro">
                A selection of practical work and projects I’m
                building while developing my skills across
                web development, AI, and cybersecurity.
              </p>
            </div>
          </div>


          {/* =================================================
              PROJECT 01 — TRANSCRIPT AI
              ================================================= */}

          <article className="project-card">

            {/* PROJECT IMAGE */}

            <div className="project-image-wrapper">

              <img
                src={transcriptHome}
                alt="TranscriptAI application interface"
                className="project-image"
              />

              <div className="project-image-overlay">

                <button
                  type="button"
                  className="project-preview-button"
                  onClick={openProject}
                  aria-label="View TranscriptAI project"
                >
                  <span>
                    View Project
                  </span>

                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M5 12h13" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </button>

              </div>

              <span className="project-image-status">
                Currently in Development
              </span>

            </div>


            {/* PROJECT CONTENT */}

            <div className="project-content">

              <div className="project-top">

                <div>

                  <p className="project-category">
                    AI / Web Development
                  </p>

                  <h3>
                    TranscriptAI
                  </h3>

                </div>

                <span className="project-number">
                  01
                </span>

              </div>


              <p className="project-description">
                An AI-powered transcription project currently
                under development, focused on converting video
                into accurate, readable text through a clean
                and user-friendly experience.
              </p>


              {/* DEVELOPMENT PROGRESS */}

              <div className="project-progress">

                <div className="project-progress-header">

                  <span>
                    Development Progress
                  </span>

                  <span>
                    In Progress
                  </span>

                </div>

                <div
                  className="project-progress-track"
                  aria-label="Project development in progress"
                >
                  <span className="project-progress-bar" />
                </div>

              </div>


              {/* PROJECT FOOTER */}

              <div className="project-footer">

                <div className="project-technologies">
                  <span>AI</span>
                  <span>React</span>
                  <span>JavaScript</span>
                </div>

                <button
                  type="button"
                  className="project-view-button"
                  onClick={openProject}
                >
                  <span>
                    Explore Project
                  </span>

                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M5 12h13" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </button>

              </div>

            </div>

          </article>


          {/* =================================================
              PROJECT 02 — NETWORK SNIFFER
              ================================================= */}

          <article className="project-card network-project-card">

            {/* PROJECT MEDIA */}

            <div className="project-image-wrapper network-project-media">

              <video
                className="project-image network-project-video"
                src="/videos/network-sniffer-demo.mp4"
                muted
                playsInline
                preload="metadata"
                aria-label="Network Sniffer project preview"
              />

              <div className="project-image-overlay">

                <button
                  type="button"
                  className="project-preview-button"
                  onClick={openCyberVideo}
                  aria-label="View Network Sniffer project"
                >
                  <span>
                    View Project
                  </span>

                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M5 12h13" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </button>

              </div>

              <span className="project-image-status">
                Project Demo
              </span>

            </div>


            {/* PROJECT CONTENT */}

            <div className="project-content network-project-content">

              <div className="project-top">

                <div>

                  <p className="project-category">
                    Cybersecurity / Network Security
                  </p>

                  <h3>
                    Basic Network Sniffer &amp;
                    Threat Analytics Dashboard
                  </h3>

                </div>

                <span className="project-number">
                  02
                </span>

              </div>


              <p className="project-description">
                A cybersecurity project focused on real-time
                network traffic analysis, protocol decoding,
                threat detection, and security monitoring
                through an interactive analytics dashboard.
              </p>


              {/* PROJECT HIGHLIGHTS */}

              <div className="network-highlights">

                <div>
                  <span>01</span>

                  <p>
                    Real-Time Traffic Interception
                  </p>
                </div>

                <div>
                  <span>02</span>

                  <p>
                    Threat Detection &amp; Analysis
                  </p>
                </div>

                <div>
                  <span>03</span>

                  <p>
                    Interactive SOC Dashboard
                  </p>
                </div>

                <div>
                  <span>04</span>

                  <p>
                    Security Log Export
                  </p>
                </div>

              </div>


              {/* PROJECT FOOTER */}

              <div className="project-footer network-project-footer">

                <div className="project-technologies">
                  <span>Python</span>
                  <span>Scapy</span>
                  <span>Flask-SocketIO</span>
                  <span>JavaScript</span>
                  <span>Chart.js</span>
                </div>

              </div>

            </div>

          </article>

        </div>
      </section>


      {/* =====================================================
          TRANSCRIPT AI MODAL
          ===================================================== */}

      {showProject && (

        <div
          className="project-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="transcript-project-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeProject()
            }
          }}
        >

          <div className="project-modal-card">

            <button
              type="button"
              className="project-modal-close"
              aria-label="Close TranscriptAI project"
              onClick={closeProject}
            >
              <span />
              <span />
            </button>


            <div className="project-modal-image">

              <img
                src={transcriptImages[activeImage].image}
                alt={transcriptImages[activeImage].label}
              />


              <button
                type="button"
                className="project-modal-arrow project-modal-arrow-left"
                aria-label="Previous image"
                onClick={previousImage}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 12H6" />
                  <path d="m11 6-6 6 6 6" />
                </svg>
              </button>


              <button
                type="button"
                className="project-modal-arrow project-modal-arrow-right"
                aria-label="Next image"
                onClick={nextImage}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M5 12h13" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </button>


              <div className="project-modal-counter">

                <span>
                  0{activeImage + 1}
                </span>

                <i />

                <span>
                  0{transcriptImages.length}
                </span>

              </div>

            </div>


            <div className="project-modal-content">

              <div className="project-modal-heading">

                <div>

                  <p>
                    AI / Web Development
                  </p>

                  <h2 id="transcript-project-title">
                    TranscriptAI
                  </h2>

                </div>

                <span className="project-modal-status">
                  In Development
                </span>

              </div>


              <p className="project-modal-description">
                TranscriptAI is a project currently under
                development that explores AI-powered video
                transcription. The goal is to create a simple,
                modern, and practical experience for converting
                video content into readable text.
              </p>


              <div className="project-modal-details">

                <div>
                  <span>
                    Focus
                  </span>

                  <strong>
                    AI Transcription
                  </strong>
                </div>

                <div>
                  <span>
                    Project Type
                  </span>

                  <strong>
                    Web Application
                  </strong>
                </div>

                <div>
                  <span>
                    Status
                  </span>

                  <strong>
                    Currently in Development
                  </strong>
                </div>

              </div>


              <div className="project-modal-tech">

                <span>AI</span>
                <span>React</span>
                <span>JavaScript</span>

              </div>


              <div className="project-thumbnails">

                {transcriptImages.map((item, index) => (

                  <button
                    key={item.label}
                    type="button"
                    className={
                      activeImage === index
                        ? 'project-thumbnail is-active'
                        : 'project-thumbnail'
                    }
                    onClick={() => setActiveImage(index)}
                    aria-label={`View ${item.label}`}
                  >

                    <img
                      src={item.image}
                      alt=""
                    />

                  </button>

                ))}

              </div>

            </div>

          </div>

        </div>

      )}


      {/* =====================================================
          NETWORK SNIFFER VIDEO MODAL
          ===================================================== */}

      {showCyberVideo && (

        <div
          className="network-video-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="network-video-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeCyberVideo()
            }
          }}
        >

          <div className="network-video-card">

            {/* MODAL HEADER */}

            <div className="network-video-header">

              <div className="network-video-heading">

                <span className="network-video-label">
                  PROJECT DEMO
                </span>

                <h2 id="network-video-title">
                  Network Sniffer &amp;
                  Threat Analytics Dashboard
                </h2>

              </div>


              {/* CLOSE BUTTON */}

              <button
                type="button"
                className="network-video-close"
                onClick={closeCyberVideo}
                aria-label="Close project video"
              >
                <span />
                <span />
              </button>

            </div>


            {/* VIDEO */}

            <div className="network-video-player">

              <video
                ref={cyberVideoRef}
                src="/videos/network-sniffer-demo.mp4"
                autoPlay
                playsInline
                preload="auto"
                aria-label="Network Sniffer project demonstration"
              >
                Your browser does not support the video element.
              </video>

            </div>


            {/* MODAL FOOTER */}

            <div className="network-video-footer">

              <div className="network-video-info">

                <span>
                  NETWORK SECURITY
                </span>

                <p>
                  Real-time traffic analysis, threat detection,
                  protocol monitoring, and security analytics.
                </p>

              </div>

            </div>

          </div>

        </div>

      )}

    </>
  )
}

export default Projects