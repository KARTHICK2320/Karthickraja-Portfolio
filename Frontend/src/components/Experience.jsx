import "../css/Experience.css";

const LEARNING_STAGES = [
  {
    step: "01",
    label: "React.js",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    step: "02",
    label: "Component-Based Architecture",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    step: "03",
    label: "React Hooks",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="7" r="4" />
        <path d="M12 11v4a4 4 0 0 0 4 4h2" />
        <polyline points="16 17 20 19 16 21" />
      </svg>
    ),
  },
  {
    step: "04",
    label: "State Management",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="4" y1="21" x2="4" y2="14" />
        <line x1="4" y1="10" x2="4" y2="3" />
        <line x1="12" y1="21" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12" y2="3" />
        <line x1="20" y1="21" x2="20" y2="16" />
        <line x1="20" y1="12" x2="20" y2="3" />
        <line x1="1" y1="14" x2="7" y2="14" />
        <line x1="9" y1="8" x2="15" y2="8" />
        <line x1="17" y1="16" x2="23" y2="16" />
      </svg>
    ),
  },
  {
    step: "05",
    label: "Context API",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
  },
  {
    step: "06",
    label: "REST API Integration",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        <polyline points="13 11 10 15 14 15 11 19" />
      </svg>
    ),
  },
  {
    step: "07",
    label: "Responsive UI Development",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

const KEY_MODULES = [
  {
    name: "Dashboard",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="9" />
        <rect x="14" y="3" width="7" height="5" />
        <rect x="14" y="12" width="7" height="9" />
        <rect x="3" y="16" width="7" height="5" />
      </svg>
    ),
  },
  {
    name: "Inventory",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    name: "Alerts",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    name: "Reports",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
];

const TECH_STACK = [
  {
    name: "React.js",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(150 12 12)" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    name: "Context API",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
  },
  {
    name: "REST APIs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        <polyline points="13 11 10 15 14 15 11 19" />
      </svg>
    ),
  },
];

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      {/* Decorative ambient background orbs */}
      <div className="experience-bg-decor" aria-hidden="true">
        <span className="exp-orb exp-orb-1" />
        <span className="exp-orb exp-orb-2" />
      </div>

      <div className="container experience-container">
        {/* Section Header */}
        <div className="experience-header text-center">
          <span className="experience-badge">
            <svg
              className="badge-briefcase-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            Experience
          </span>
          <h2 className="experience-title">
            My Professional <span className="highlight-purple">Journey</span>
          </h2>
          <p className="experience-subtitle">
            Hands-on experience, real projects, and continuous learning.
          </p>
        </div>

        {/* Timeline & Main Experience Card Layout */}
        <div className="experience-timeline-wrapper">
          {/* Left: Vertical Timeline */}
          <div className="timeline-col-left">
            <div className="timeline-meta-box">
              <span className="timeline-period-pill">2025 – 2026</span>
              <span className="timeline-type-badge">Internship</span>
            </div>

            <div className="timeline-track-wrap" aria-hidden="true">
              <div className="timeline-marker-outer">
                <div className="timeline-marker-inner" />
                <div className="timeline-marker-halo" />
              </div>
              <div className="timeline-vertical-line" />
            </div>
          </div>

          {/* Right: Large Rounded Experience Card */}
          <div className="timeline-col-right">
            <article className="experience-main-card">
              {/* Card Header: Position, Company, Duration */}
              <div className="exp-card-header">
                <div className="exp-role-group">
                  <h3 className="exp-role-title">Full Stack Web Developer Intern</h3>
                  <div className="exp-meta-items">
                    <span className="exp-meta-company">
                      <svg
                        className="meta-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="4" y="2" width="16" height="20" rx="2" />
                        <path d="M9 22v-4h6v4" />
                        <line x1="8" y1="6" x2="8.01" y2="6" />
                        <line x1="16" y1="6" x2="16.01" y2="6" />
                        <line x1="8" y1="10" x2="8.01" y2="10" />
                        <line x1="16" y1="10" x2="16.01" y2="10" />
                        <line x1="8" y1="14" x2="8.01" y2="14" />
                        <line x1="16" y1="14" x2="16.01" y2="14" />
                      </svg>
                      Pargavan Cyber Solutions
                    </span>
                    <span className="exp-meta-dot" aria-hidden="true">•</span>
                    <span className="exp-meta-duration">
                      <svg
                        className="meta-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      2025 – 2026
                    </span>
                  </div>
                </div>

                <div className="exp-header-badge">
                  <span className="company-badge-pill">Internship Experience</span>
                </div>
              </div>

              {/* Main Description */}
              <div className="exp-card-body">
                <p className="exp-summary-text">
                  During my internship, I gained practical experience in web application
                  development and worked on the frontend development of GIMS (Grocery
                  Inventory Management System). I learned to build reusable React
                  components, work with React Hooks, manage application state using
                  Context API, and integrate frontend components with REST APIs.
                </p>
              </div>

              {/* 4. Project Contribution Card: GIMS */}
              <div className="project-contribution-card">
                <div className="proj-card-topbar">
                  <div className="proj-title-group">
                    <div className="proj-icon-wrapper" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                      </svg>
                    </div>
                    <div>
                      <span className="proj-sub-label">Featured Project Contribution</span>
                      <h4 className="proj-card-heading">
                        GIMS – Grocery Inventory Management System
                      </h4>
                    </div>
                  </div>
                </div>

                <p className="proj-card-description">
                  Contributed to the frontend development using React.js and JavaScript.
                  Worked with reusable components, application state management, and
                  different modules of the inventory management interface.
                </p>

                <div className="proj-modules-wrapper">
                  <span className="proj-modules-label">Key Modules Developed:</span>
                  <div className="proj-modules-grid">
                    {KEY_MODULES.map((mod, idx) => (
                      <div key={idx} className="module-pill">
                        <span className="module-icon" aria-hidden="true">{mod.icon}</span>
                        <span className="module-name">{mod.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 5. My Learning Journey */}
              <div className="learning-journey-wrapper">
                <div className="journey-header-row">
                  <div className="journey-title-wrap">
                    <svg
                      className="journey-header-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <h4 className="journey-title">My Learning Journey</h4>
                  </div>
                  <span className="journey-sub-tag">7 Progressive Growth Stages</span>
                </div>

                <div className="learning-stages-scroll-wrap">
                  <div className="learning-stages-row">
                    {LEARNING_STAGES.map((stage, idx) => (
                      <div key={stage.step} className="stage-node-container">
                        <div className="stage-card">
                          <span className="stage-step-num">{stage.step}</span>
                          <div className="stage-icon-wrap" aria-hidden="true">
                            {stage.icon}
                          </div>
                          <span className="stage-label">{stage.label}</span>
                        </div>

                        {idx < LEARNING_STAGES.length - 1 && (
                          <div className="stage-connector-arrow" aria-hidden="true">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <line x1="5" y1="12" x2="19" y2="12" />
                              <polyline points="12 5 19 12 12 19" />
                            </svg>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 6. Technology Stack */}
              <div className="exp-tech-stack-wrapper">
                <span className="tech-stack-title">Technologies Used</span>
                <div className="exp-tech-badges-row">
                  {TECH_STACK.map((tech, idx) => (
                    <div key={idx} className="exp-tech-badge">
                      <span className="exp-tech-icon" aria-hidden="true">
                        {tech.icon}
                      </span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
