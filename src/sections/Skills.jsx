import { useState } from 'react'
import skills from '../data/skills'

function Skills() {
  const [activeGroup, setActiveGroup] = useState('frontend')

  const skillGroups = [
    {
      key: 'frontend',
      number: '01',
      title: 'Front-End',
      label: 'INTERFACE FOUNDATION',
      intro:
        'The technologies and concepts I’m developing to create responsive, structured, and user-friendly web interfaces.',
      principle:
        'A strong interface starts with clean structure, responsive design, and attention to usability.',
      items: [
        {
          name: 'HTML5',
          description: 'Structure and semantic content for modern web pages.',
        },
        {
          name: 'CSS3',
          description: 'Layouts, styling, animations, and responsive interfaces.',
        },
        {
          name: 'JavaScript',
          description: 'Interactive behaviour, logic, and dynamic functionality.',
        },
        {
          name: 'Responsive Web Design',
          description: 'Creating interfaces that adapt across different screen sizes.',
        },
        {
          name: 'UI/UX Design',
          description: 'Thinking about usability, visual hierarchy, and user experience.',
        },
      ],
      source: skills.frontend,
    },

    {
      key: 'backend',
      number: '02',
      title: 'Back-End',
      label: 'SERVER & DATA',
      intro:
        'The foundations I’m learning for understanding how applications handle data, server-side logic, and communication between systems.',
      principle:
        'Good back-end development connects application logic, data, and users in a reliable way.',
      items: [
        {
          name: 'Server-Side Development',
          description:
            'Understanding how applications process requests and application logic.',
        },
        {
          name: 'Database Fundamentals',
          description:
            'Learning how data is stored, organized, and managed.',
        },
        {
          name: 'API Fundamentals',
          description:
            'Understanding how different applications and services communicate.',
        },
      ],
      source: skills.backend,
    },

    {
      key: 'programming',
      number: '03',
      title: 'Programming',
      label: 'LOGIC & PROBLEM SOLVING',
      intro:
        'The programming concepts I’m developing to improve logical thinking, code structure, and problem-solving ability.',
      principle:
        'Programming is not only about writing code; it is about breaking problems into understandable steps.',
      items: [
        {
          name: 'Programming Fundamentals',
          description:
            'Building a foundation in variables, conditions, loops, functions, and logic.',
        },
        {
          name: 'Object-Oriented Programming',
          description:
            'Learning how software can be structured around objects and reusable concepts.',
        },
        {
          name: 'Problem Solving',
          description:
            'Breaking complex problems into smaller and more manageable steps.',
        },
      ],
      source: skills.programming,
    },

    {
      key: 'tools',
      number: '04',
      title: 'Tools',
      label: 'DEVELOPMENT WORKFLOW',
      intro:
        'The development tools I use and learn with while building, testing, debugging, and managing code.',
      principle:
        'The right tools make development more organized, efficient, and easier to maintain.',
      items: [
        {
          name: 'Visual Studio Code',
          description:
            'My primary development environment for writing and managing code.',
        },
        {
          name: 'Git',
          description:
            'Version control fundamentals for tracking changes in development.',
        },
        {
          name: 'GitHub',
          description:
            'Learning to manage repositories and collaborate around code.',
        },
        {
          name: 'Chrome DevTools',
          description:
            'Inspecting, testing, and debugging websites directly in the browser.',
        },
      ],
      source: skills.tools,
    },

    {
      key: 'currentlyLearning',
      number: '05',
      title: 'Currently Learning',
      label: 'ACTIVE LEARNING',
      intro:
        'These are the areas I’m actively developing as I continue building my foundation and expanding my web development knowledge.',
      principle:
        'Consistent learning and practical application are part of becoming a stronger developer.',
      items: [
        {
          name: 'Advanced JavaScript',
          description:
            'Going deeper into JavaScript concepts, patterns, and functionality.',
        },
        {
          name: 'Modern Web Development',
          description:
            'Exploring current approaches to building modern web experiences.',
        },
        {
          name: 'Back-End Technologies',
          description:
            'Expanding my understanding of server-side development and application architecture.',
        },
        {
          name: 'Database Management',
          description:
            'Developing a stronger understanding of working with application data.',
        },
      ],
      source: skills.currentlyLearning,
    },

    {
      key: 'additional',
      number: '06',
      title: 'Additional Skills',
      label: 'COMPLEMENTARY KNOWLEDGE',
      intro:
        'Additional areas of knowledge that complement my technical education and broaden my understanding beyond web development.',
      principle:
        'Different areas of knowledge can contribute to communication, adaptability, and practical thinking.',
      items: [
        {
          name: 'E-Commerce',
          description:
            'Understanding the fundamentals of digital commerce and online business.',
        },
        {
          name: 'Digital Marketing',
          description:
            'Learning concepts related to promoting products, services, and digital presence.',
        },
        {
          name: 'First Aid',
          description:
            'Foundational knowledge of first-aid practices and emergency response.',
        },
        {
          name: 'Emergency Medicine',
          description:
            'Additional educational knowledge related to emergency care.',
        },
        {
          name: 'Basic Life Support (BLS)',
          description:
            'Foundational knowledge related to basic life-support procedures.',
        },
      ],
      source: skills.additional,
    },
  ]

  const currentGroup =
    skillGroups.find((group) => group.key === activeGroup) ||
    skillGroups[0]

  function openGroup(key) {
    setActiveGroup(key)

    setTimeout(() => {
      document
        .getElementById('skills-detail')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
    }, 80)
  }

  return (
    <section className="skills section" id="skills">
      <div className="section-container">
        <div className="skills-header">
          <div className="skills-heading">
            <div className="skills-label-row">
              <p className="section-label">Skills & Expertise</p>

              <span
                className="skills-label-line"
                aria-hidden="true"
              />

              <span className="skills-label-number">03</span>
            </div>

            <h2>
              Technologies and skills
              <span> I’m developing.</span>
            </h2>
          </div>

          <div className="skills-header-copy">
            <p>
              I’m continuously building my technical foundation
              through learning, practice, and practical development.
            </p>

            <div className="skills-status">
              <span
                className="skills-status-dot"
                aria-hidden="true"
              />
              <span>Learning through practice</span>
            </div>
          </div>
        </div>

        <div className="skills-categories">
          {skillGroups.map((group) => (
            <button
              type="button"
              key={group.key}
              className={
                group.key === activeGroup
                  ? 'skill-category is-active'
                  : 'skill-category'
              }
              onClick={() => openGroup(group.key)}
              aria-expanded={group.key === activeGroup}
            >
              <span className="skill-category-number">
                {group.number}
              </span>

              <span className="skill-category-main">
                <span className="skill-category-label">
                  {group.label}
                </span>

                <span className="skill-category-title">
                  {group.title}
                </span>

                <span className="skill-category-count">
                  {group.source.length} areas
                </span>
              </span>

              <span
                className="skill-category-arrow"
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M5 12h13" />
                  <path d="m13 6 6 6-6-6" />
                </svg>
              </span>
            </button>
          ))}
        </div>

        <div className="skills-detail" id="skills-detail">
          <div
            className="skills-detail-glow"
            aria-hidden="true"
          />

          <div className="skills-detail-top">
            <div className="skills-detail-index">
              {currentGroup.number}
            </div>

            <div className="skills-detail-status">
              <span />
              {currentGroup.label}
            </div>
          </div>

          <div className="skills-detail-content">
            <div className="skills-detail-heading">
              <p>
                {currentGroup.number} / {currentGroup.title}
              </p>

              <h3>
                {currentGroup.title}
                <span>.</span>
              </h3>
            </div>

            <div className="skills-detail-copy">
              <p className="skills-detail-intro">
                {currentGroup.intro}
              </p>

              <div className="skills-detail-list">
                {currentGroup.items.map((item, index) => (
                  <div
                    className="skills-detail-item"
                    key={item.name}
                  >
                    <span className="skills-detail-item-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div className="skills-detail-item-content">
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                    </div>

                    <span
                      className="skills-detail-item-arrow"
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 24 24">
                        <path d="M5 12h13" />
                        <path d="m13 6 6 6" />
                      </svg>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="skills-detail-principle">
            <span>KEY FOCUS</span>

            <p>{currentGroup.principle}</p>
          </div>

          <div className="skills-detail-navigation">
            <span>Explore skills</span>

            <div>
              {skillGroups.map((group) => (
                <button
                  type="button"
                  key={group.key}
                  className={
                    group.key === activeGroup
                      ? 'is-active'
                      : ''
                  }
                  onClick={() => openGroup(group.key)}
                  aria-label={`View ${group.title} skills`}
                >
                  {group.number}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="skills-footer">
          <div className="skills-footer-text">
            <span
              className="skills-footer-dot"
              aria-hidden="true"
            />
            <span>Learning today. Building tomorrow.</span>
          </div>

          <div
            className="skills-footer-line"
            aria-hidden="true"
          />

          <span className="skills-footer-caption">
            LEARN → PRACTICE → IMPROVE
          </span>
        </div>
      </div>
    </section>
  )
}

export default Skills