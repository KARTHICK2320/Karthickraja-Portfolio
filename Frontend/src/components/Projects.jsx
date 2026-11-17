import "../css/Projects.css";

const PROJECTS_DATA = [
  {
    id: "gims",
    isFeatured: true,
    badge: "Featured Project",
    title: "GIMS – Grocery Inventory Management System",
    description:
      "A full-stack inventory management system with real-time stock tracking, automated low-stock alerts, and secure role-based access control.",
    image: "/assets/imgs/gims_preview.png",
    mockupUrl: "gims-inventory.app",
    keyFeatures: [
      "Inventory Tracking",
      "Low-Stock Alerts",
      "Dashboard",
      "Reports",
    ],
    tech: ["React.js", "JavaScript", "Python (Flask)", "MySQL", "JWT"],
    liveLink: "https://gims-7s7p.vercel.app",
    gitLink: "https://github.com/KARTHICK2320/GIMS",
  },
  {
    id: "insane-ecommerce",
    isFeatured: false,
    badge: "E-Commerce",
    title: "Insane E-commerce",
    description:
      "A modern, stylish e-commerce web application with dynamic product listings and a seamless shopping experience.",
    image: "/assets/imgs/insane_ecommerce_preview.png",
    mockupUrl: "insane-ecom.store",
    tech: ["HTML5", "CSS3", "JavaScript"],
    liveLink: "https://insane-ecom.vercel.app",
    gitLink: "https://github.com/KARTHICK2320/insane-ecom",
  },
  {
    id: "eatandmeat",
    isFeatured: false,
    badge: "Food Ordering Platform",
    title: "EatAndMeat",
    description:
      "A full-stack food ordering platform with product browsing, category filtering, authentication and cart order management.",
    image: "/assets/imgs/EatandMeat.png",
    mockupUrl: "eatandmeat.order",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    liveLink: "https://eam-five.vercel.app/",
    gitLink: "https://github.com/KARTHICK2320/EatandMeat",
  },
];

function FeaturedProjectCard({ project }) {
  return (
    <article className="project-card featured-card" id={`project-${project.id}`}>
      {/* Top Badge & Status Row */}
      <div className="card-top-tag-row">
        <span className="featured-pill-badge">
          <svg
            className="star-icon"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          {project.badge}
        </span>
        <span className="live-status-pill">
          <span className="pulse-dot" />
          Production App
        </span>
      </div>

      {/* Main Split: Left Screenshot Window & Right Info */}
      <div className="featured-card-main-split">
        {/* Left Side: Prominent Screenshot Window */}
        <div className="featured-preview-col">
          <div className="mockup-window">
            <div className="mockup-bar" aria-hidden="true">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="mockup-url">{project.mockupUrl}</span>
            </div>
            <div className="mockup-screen">
              <img
                src={project.image}
                alt={`Screenshot preview of ${project.title}`}
                className="project-screenshot-img featured-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Description and Key Features */}
        <div className="featured-info-col">
          <h3 className="project-heading featured-heading">{project.title}</h3>
          <p className="project-description featured-description">
            {project.description}
          </p>

          <div className="key-features-block">
            <span className="key-features-heading">Key Features</span>
            <div className="key-features-grid">
              {project.keyFeatures.map((feature, idx) => (
                <div key={idx} className="feature-item">
                  <svg
                    className="feature-check-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Tech Stack Badges and Action Buttons */}
      <div className="card-bottom-bar">
        <div className="tech-stack-row">
          {project.tech.map((t, idx) => (
            <span key={idx} className="tech-pill">
              {t}
            </span>
          ))}
        </div>

        <div className="project-actions-row">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-project btn-project-primary"
              aria-label={`Open live demo of ${project.title}`}
            >
              <span>Live Demo</span>
              <svg
                className="action-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
          {project.gitLink && (
            <a
              href={project.gitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-project btn-project-secondary"
              aria-label={`Open GitHub repository of ${project.title}`}
            >
              <svg
                className="action-icon github-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function SecondaryProjectCard({ project }) {
  return (
    <article className="project-card secondary-card" id={`project-${project.id}`}>
      <div className="secondary-card-inner">
        {/* Left Side: Project Preview */}
        <div className="secondary-preview-wrap">
          <div className="mockup-window secondary-mockup">
            <div className="mockup-bar" aria-hidden="true">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="mockup-url">{project.mockupUrl}</span>
            </div>
            <div className="mockup-screen">
              <img
                src={project.image}
                alt={`Screenshot preview of ${project.title}`}
                className="project-screenshot-img secondary-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Project Information */}
        <div className="secondary-info-wrap">
          <div className="secondary-top-tag">
            <span className="category-tag-pill">{project.badge}</span>
          </div>

          <h4 className="project-heading secondary-heading">{project.title}</h4>
          <p className="project-description secondary-description">
            {project.description}
          </p>

          <div className="secondary-footer-block">
            <div className="tech-stack-row">
              {project.tech.map((t, idx) => (
                <span key={idx} className="tech-pill">
                  {t}
                </span>
              ))}
            </div>

            <div className="project-actions-row">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-project btn-project-primary"
                  aria-label={`Open live demo of ${project.title}`}
                >
                  <span>Live Demo</span>
                  <svg
                    className="action-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              )}
              {project.gitLink && (
                <a
                  href={project.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-project btn-project-secondary"
                  aria-label={`Open GitHub repository of ${project.title}`}
                >
                  <svg
                    className="action-icon github-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const featuredProject =
    PROJECTS_DATA.find((p) => p.isFeatured) || PROJECTS_DATA[0];
  const secondaryProjects = PROJECTS_DATA.filter((p) => !p.isFeatured);

  return (
    <section className="section projects-section" id="portfolio">
      {/* Decorative ambient background shapes */}
      <div className="projects-bg-decor" aria-hidden="true">
        <span className="decor-orb decor-orb-1" />
        <span className="decor-orb decor-orb-2" />
        <span className="decor-orb decor-orb-3" />
      </div>

      <div className="container projects-container">
        {/* Section Header */}
        <div className="projects-header text-center">
          <span className="projects-badge">
            <svg
              className="badge-code-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            My Work
          </span>
          <h2 className="projects-title">
            Featured <span className="highlight-purple">Projects</span>
          </h2>
          <p className="projects-subtitle">
            A selection of real-world projects I&apos;ve built using modern
            technologies.
          </p>
        </div>

        {/* Asymmetric 60/40 Projects Layout */}
        <div className="projects-asym-grid">
          {/* LEFT SIDE: Large Featured Project Card (~60%) */}
          <div className="featured-col">
            <FeaturedProjectCard project={featuredProject} />
          </div>

          {/* RIGHT SIDE: Two Horizontal Project Cards Stacked (~40%) */}
          <div className="secondary-col">
            {secondaryProjects.map((project) => (
              <SecondaryProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="projects-footer text-center">
          <a
            href="https://github.com/KARTHICK2320?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-view-all"
            aria-label="View all projects on GitHub repository"
          >
            <span>View All Projects</span>
            <svg
              className="arrow-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
