export default function About() {
  const profilePhoto = "/assets/imgs/Karthickraja.png";

  const techCategories = [
    {
      id: "frontend",
      title: "Frontend Development",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
      skills: ["React.js", "JavaScript", "HTML5", "CSS3"],
    },
    {
      id: "backend",
      title: "Backend Development",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      ),
      skills: ["Python", "Flask"],
    },
    {
      id: "database",
      title: "Database Management",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
      skills: ["MySQL", "MongoDB"],
    },
    {
      id: "api",
      title: "API Integration",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      ),
      skills: ["REST APIs"],
    },
    {
      id: "tools",
      title: "Development Tools",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="6" y1="3" x2="6" y2="15" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M18 9a9 9 0 0 1-9 9" />
        </svg>
      ),
      skills: ["Git", "GitHub"],
    },
  ];

  const milestones = [
    {
      number: "01",
      tag: "Education",
      title: "B.E. Computer Science and Engineering",
      org: "RVS College of Engineering and Technology",
      period: "2022 – 2026",
      desc: "Comprehensive engineering curriculum with focus on algorithms, data structures, full-stack software development and modern computing paradigms.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
    },
    {
      number: "02",
      tag: "Internship",
      title: "Full Stack Web Developer Intern",
      org: "Pargavan Cyber Solutions",
      period: "2025 – 2026",
      desc: "Worked on real-world web application development. Engineered responsive React.js frontends, built state-managed modules, and integrated secure REST APIs.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
    {
      number: "03",
      tag: "Projects",
      title: "Key Software Projects",
      org: "Production-Grade Implementations",
      period: "Featured Works",
      projects: [
        "GIMS – Grocery Inventory Management System",
        "EatAndMeat – Food Ordering Platform",
        "Track My Customer – CRM module",
        "Insane E-com - E-Commerce Platform",
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
    {
      number: "04",
      tag: "Continuous Growth",
      title: "Skills & Engineering Practice",
      org: "Ongoing Learning & Specialization",
      period: "Present & Future",
      growthItems: [
        "Improving React.js and JavaScript skills",
        "Strengthening backend development knowledge",
        "Learning to build scalable applications",
        "Improving problem-solving and development practices",
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section about-section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h6 className="section-title">About Me</h6>
          <p className="section-subtitle">Developer Profile & Technical Journey</p>
        </div>

        {/* 1. Interactive Developer Profile (Concept 2) */}
        <div className="about-profile-wrapper">
          <div className="orbit-system-container">
            {/* Background Orbital Rings and Connecting Lines */}
            <div className="orbit-rings" aria-hidden="true">
              <span className="orbit-ring ring-outer" />
              <span className="orbit-ring ring-inner" />
              <svg className="orbit-connector-svg" viewBox="0 0 1000 600" preserveAspectRatio="none">
                <line x1="260" y1="120" x2="500" y2="280" className="connector-line line-1" />
                <line x1="740" y1="120" x2="500" y2="280" className="connector-line line-2" />
                <line x1="180" y1="360" x2="500" y2="280" className="connector-line line-3" />
                <line x1="820" y1="360" x2="500" y2="280" className="connector-line line-4" />
                <line x1="500" y1="490" x2="500" y2="280" className="connector-line line-5" />
              </svg>
            </div>

            {/* Central Circular Portrait Hub */}
            <div className="central-portrait-hub">
              <div className="portrait-glow-halo" />
              <div className="portrait-circular-frame">
                <img
                  src={profilePhoto}
                  alt="Portrait of Karthickraja K"
                  className="portrait-avatar-img"
                  loading="lazy"
                />
              </div>
              <div className="portrait-hub-badge">
                <span className="hub-status-dot" />
                <span>Full-Stack Developer</span>
              </div>
            </div>

            {/* 5 Connected Technology Category Cards */}
            <div className="tech-orbit-cards-grid">
              {techCategories.map((cat, idx) => (
                <div key={cat.id} className={`tech-orbit-card card-pos-${idx + 1}`}>
                  <div className="tech-card-header">
                    <div className="tech-card-icon-wrap">{cat.icon}</div>
                    <h5 className="tech-card-heading">{cat.title}</h5>
                  </div>
                  <div className="tech-tags-list">
                    {cat.skills.map((skill) => (
                      <span key={skill} className="tech-tag-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Developer Introduction */}
        <div className="developer-intro-container text-center">
          <div className="developer-intro-card">
            <span className="intro-badge">
              <i className="intro-badge-icon" />
              Engineering Philosophy
            </span>
            <h3 className="intro-heading">A Developer Who Loves Building Things</h3>
            <p className="intro-text">
              I&apos;m a Full-Stack Developer passionate about building responsive,
              scalable and user-friendly web applications. I enjoy transforming
              ideas into practical solutions and continuously improving my
              development skills.
            </p>
          </div>
        </div>

        {/* 3. My Development Journey (Concept 3 - Timeline) */}
        <div className="journey-section-wrapper">
          <div className="text-center mb-5">
            <h4 className="journey-main-title">My Development Journey</h4>
            <p className="journey-sub-title">Key milestones that shaped my engineering path</p>
          </div>

          <div className="journey-timeline-grid">
            {milestones.map((milestone) => (
              <div key={milestone.number} className="journey-card-item">
                <div className="journey-card-inner">
                  {/* Top Bar with Number & Icon */}
                  <div className="journey-card-topbar">
                    <div className="journey-milestone-number">
                      <span>{milestone.number}</span>
                    </div>
                    <span className="journey-tag-pill">{milestone.tag}</span>
                    <div className="journey-icon-wrap">{milestone.icon}</div>
                  </div>

                  {/* Card Content */}
                  <div className="journey-card-body">
                    <h5 className="journey-milestone-title">{milestone.title}</h5>
                    <div className="journey-meta-info">
                      <span className="journey-org-text">{milestone.org}</span>
                      <span className="journey-meta-sep">•</span>
                      <span className="journey-period-text">{milestone.period}</span>
                    </div>

                    {milestone.desc && (
                      <p className="journey-desc-text">{milestone.desc}</p>
                    )}

                    {milestone.projects && (
                      <ul className="journey-bullet-list">
                        {milestone.projects.map((proj, pIdx) => (
                          <li key={pIdx} className="journey-bullet-item">
                            <i className="bullet-indicator" />
                            <span>{proj}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {milestone.growthItems && (
                      <ul className="journey-bullet-list">
                        {milestone.growthItems.map((item, gIdx) => (
                          <li key={gIdx} className="journey-bullet-item">
                            <i className="bullet-indicator" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
