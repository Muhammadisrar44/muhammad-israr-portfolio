import { useState } from 'react'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const questions = [
    {
      number: '01',
      question: 'Are you available for projects?',
      answer:
        'I’m currently focused on learning, building practical projects, and developing my skills. I’m also open to suitable opportunities where I can learn, contribute, and grow.',
    },
    {
      number: '02',
      question: 'What technologies are you learning?',
      answer:
        'I’m currently developing my knowledge of JavaScript, modern web development, back-end technologies, databases, and related development tools.',
    },
    {
      number: '03',
      question: 'What are you currently working toward?',
      answer:
        'My goal is to build practical experience through real projects and continue growing toward becoming a skilled professional web developer.',
    },
    {
      number: '04',
      question: 'Do you build responsive websites?',
      answer:
        'Responsive web design is an important part of my learning. I focus on creating interfaces that work properly across desktop, tablet, and mobile screen sizes.',
    },
    {
      number: '05',
      question: 'How do you approach learning new technologies?',
      answer:
        'I prefer to understand the fundamentals first, practice what I learn, build something practical, identify problems, and improve through continuous practice.',
    },
  ]

  function toggleQuestion(index) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq section" id="faq">
      <div className="section-container">
        <div className="faq-header">
          <div className="faq-heading">
            <div className="faq-label-row">
              <p className="section-label">FAQ</p>
              <span className="faq-label-line" aria-hidden="true" />
              <span className="faq-label-number">06</span>
            </div>

            <h2>
              A few things
              <span> you may want to know.</span>
            </h2>
          </div>

          <p className="faq-intro">
            Some quick answers about my current learning,
            development journey, and goals.
          </p>
        </div>

        <div className="faq-list">
          {questions.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div
                className={
                  isOpen
                    ? 'faq-item is-open'
                    : 'faq-item'
                }
                key={item.number}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.number}`}
                >
                  <span className="faq-number">
                    {item.number}
                  </span>

                  <span className="faq-question-text">
                    {item.question}
                  </span>

                  <span
                    className="faq-toggle"
                    aria-hidden="true"
                  >
                    <span />
                    <span />
                  </span>
                </button>

                <div
                  className="faq-answer"
                  id={`faq-answer-${item.number}`}
                  aria-hidden={!isOpen}
                >
                  <div className="faq-answer-inner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="faq-footer">
          <span>Still curious?</span>

          <a href="#contact">
            Let’s talk
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h13" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ