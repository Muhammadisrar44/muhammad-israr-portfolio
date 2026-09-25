import { useState } from 'react'

function HowIWork() {
  const [activeStep, setActiveStep] = useState(null)

  const steps = [
    {
      number: '01',
      title: 'Understand',
      shortText:
        'Understand the idea, the problem, and what the user actually needs.',
      intro:
        'Good development starts with understanding. Before thinking about code, the first step is to understand what needs to be solved and why it matters.',
      points: [
        'Understand the main goal',
        'Identify the actual problem',
        'Think about the user',
        'Define what success should look like',
      ],
      principle:
        'Do not rush into building something you do not fully understand.',
    },
    {
      number: '02',
      title: 'Plan',
      shortText:
        'Break the idea into smaller steps and decide what should happen first.',
      intro:
        'Planning turns a large idea into something manageable. Instead of trying to build everything at once, the work is divided into clear and practical steps.',
      points: [
        'Define the main objective',
        'Break the work into smaller tasks',
        'Choose the right approach',
        'Decide what should be built first',
      ],
      principle:
        'A clear plan makes difficult work easier to understand and easier to improve.',
    },
    {
      number: '03',
      title: 'Build',
      shortText:
        'Turn the plan into a responsive and practical digital experience.',
      intro:
        'Once the direction is clear, the next step is turning the plan into something real. This is where ideas become interfaces, features, and working experiences.',
      points: [
        'Build the structure first',
        'Keep the interface responsive',
        'Focus on usability',
        'Solve problems as they appear',
      ],
      principle:
        'Start with a solid foundation, then build complexity step by step.',
    },
    {
      number: '04',
      title: 'Refine',
      shortText:
        'Test what has been built, find weaknesses, and continuously improve.',
      intro:
        'The first version is rarely the final version. Refinement means testing the result, noticing what can be better, and using feedback to improve the work.',
      points: [
        'Review what has been built',
        'Find problems and inconsistencies',
        'Improve usability and details',
        'Learn from mistakes and feedback',
      ],
      principle:
        'Improvement is an ongoing process, not a final step.',
    },
  ]

  const activeStepData = steps.find(
    (step) => step.number === activeStep,
  )

  function openStep(number) {
    setActiveStep(number)

    setTimeout(() => {
      document
        .getElementById('approach-detail')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
    }, 80)
  }

  function closeStep() {
    setActiveStep(null)
  }

  return (
    <section
      className="how-i-work section"
      id="approach"
    >
      <div className="section-container">

        <div className="how-work-header">
          <div className="how-work-title-wrap">

            <div className="how-work-label-row">
              <p className="section-label">
                My Approach
              </p>

              <span
                className="how-work-label-line"
                aria-hidden="true"
              />

              <span className="how-work-label-number">
                02
              </span>
            </div>

            <h2>
              How I approach
              <span> development.</span>
            </h2>

          </div>

          <div className="how-work-intro">
            <p>
              I’m still learning and building my experience,
              so my approach is simple: understand the problem,
              build carefully, and keep improving.
            </p>

            <a
              href="#skills"
              className="how-work-link"
            >
              <span>Explore my skills</span>

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M5 12h13" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>

        <div className="how-work-process">

          <div
            className="how-work-progress"
            aria-hidden="true"
          >
            <span />
          </div>

          <div className="how-work-steps">

            {steps.map((step) => (
              <button
                type="button"
                className="how-work-step"
                key={step.number}
                onClick={() => openStep(step.number)}
                aria-expanded={activeStep === step.number}
              >

                <span className="how-work-step-marker">
                  <span>{step.number}</span>
                </span>

                <span className="how-work-step-main">

                  <span className="how-work-step-label">
                    {step.number} / PROCESS
                  </span>

                  <span className="how-work-step-title">
                    {step.title}
                  </span>

                  <span className="how-work-step-description">
                    {step.shortText}
                  </span>

                </span>

                <span
                  className="how-work-step-arrow"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M5 12h13" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </span>

                <span
                  className="how-work-step-hint"
                  aria-hidden="true"
                >
                  Click to explore
                </span>

              </button>
            ))}

          </div>
        </div>

        <div
          className={
            activeStepData
              ? 'how-work-detail is-open'
              : 'how-work-detail'
          }
          id="approach-detail"
          aria-hidden={!activeStepData}
        >

          {activeStepData && (
            <div className="how-work-detail-inner">

              <div className="how-work-detail-top">

                <div className="how-work-detail-index">
                  {activeStepData.number}
                </div>

                <button
                  type="button"
                  className="how-work-detail-close"
                  onClick={closeStep}
                  aria-label="Close details"
                >
                  <span />
                  <span />
                </button>

              </div>

              <div className="how-work-detail-content">

                <div className="how-work-detail-heading">

                  <p>
                    {activeStepData.number} / {activeStepData.title}
                  </p>

                  <h3>
                    {activeStepData.title}
                    <span>.</span>
                  </h3>

                </div>

                <div className="how-work-detail-copy">

                  <p className="how-work-detail-intro">
                    {activeStepData.intro}
                  </p>

                  <div className="how-work-detail-points">

                    {activeStepData.points.map(
                      (point, index) => (
                        <div
                          className="how-work-detail-point"
                          key={point}
                        >
                          <span>
                            0{index + 1}
                          </span>

                          <p>
                            {point}
                          </p>
                        </div>
                      ),
                    )}

                  </div>

                </div>

              </div>

              <div className="how-work-detail-principle">

                <span>
                  KEY PRINCIPLE
                </span>

                <p>
                  {activeStepData.principle}
                </p>

              </div>

              <div className="how-work-detail-navigation">

                <span>
                  Explore the process
                </span>

                <div>
                  {steps.map((step) => (
                    <button
                      type="button"
                      key={step.number}
                      className={
                        step.number === activeStep
                          ? 'is-active'
                          : ''
                      }
                      onClick={() =>
                        openStep(step.number)
                      }
                    >
                      {step.number}
                    </button>
                  ))}
                </div>

              </div>

            </div>
          )}

        </div>

        <div className="how-work-footer">

          <div className="how-work-footer-text">
            <span
              className="how-work-footer-dot"
              aria-hidden="true"
            />

            <span>
              Always learning. Always improving.
            </span>
          </div>

          <div
            className="how-work-footer-line"
            aria-hidden="true"
          />

          <span className="how-work-footer-caption">
            LEARN → BUILD → REFINE
          </span>

        </div>

      </div>
    </section>
  )
}

export default HowIWork