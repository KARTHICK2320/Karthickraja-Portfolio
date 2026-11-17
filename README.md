# Karthickraja K — Personal Portfolio

A personal portfolio website built with React and Vite to showcase my technical skills, projects, professional experience and background.

The website includes a responsive layout, interactive components, light and dark themes, and a contact form powered by Netlify Forms.

## Overview

This portfolio serves as a place to share my work, highlight the technologies I use, and provide information about my experience as a developer.

The application is built as a frontend-only project. It does not require a separate backend server or database.

## Tech Stack

**Frontend**
- React 19
- JavaScript (ES6+)
- HTML5
- CSS3
- Vite

**Deployment and Services**
- Netlify
- Netlify Forms
- GitHub

## Features

- Responsive design for desktop, tablet and mobile devices.
- Interactive navigation with smooth scrolling.
- Light and dark theme support.
- Animated hero section.
- About section highlighting my background and education.
- Technical skills and experience sections.
- Project showcase with relevant links.
- Resume download.
- Contact form with client-side validation.
- Contact form submissions handled through Netlify Forms.

## Project Structure

```text
Karthickraja-Portfolio/
│
├── Frontend/
│   ├── public/
│   │   ├── assets/
│   │   └── resume/
│   │
│   ├── src/
│   │   ├── components/
│   │   ├── css/
│   │   ├── services/
│   │   │   └── contact.service.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── netlify.toml
│
├── netlify.toml
└── README.md
```

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/KARTHICK2320/Karthickraja-Portfolio.git
```

Navigate to the frontend directory:

```bash
cd Karthickraja-Portfolio/Frontend
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## Production Build

To generate an optimized production build, run:

```bash
npm run build
```

Vite generates the production-ready files inside the `Frontend/dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## Contact Form

The contact form uses Netlify Forms to receive messages without requiring a separate backend application.

When a visitor submits the form, the submission is handled by Netlify and made available through the site's Netlify dashboard.

The form includes:

- Name
- Email
- Subject
- Message
- Client-side input validation
- Submission feedback
- A honeypot field for basic spam protection

### Local Development

Netlify Forms processing is available on Netlify's hosting infrastructure. Running the application through the standard Vite development server does not provide the actual Netlify submission service.

The contact form's live submission functionality should therefore be tested on the deployed Netlify website.

## Deployment

The project is configured for deployment on Netlify.

To deploy using GitHub:

1. Push the project to GitHub.
2. Connect the repository to Netlify.
3. Configure the following build settings:

| Setting | Value |
|---|---|
| Branch | `main` |
| Base directory | `Frontend` |
| Build command | `npm run build` |
| Publish directory | `dist` |

4. Start the deployment.
5. Once the build completes, open the generated Netlify URL.

The root-level `netlify.toml` contains the deployment configuration for the project.

After connecting GitHub to Netlify, future changes pushed to the main branch can trigger automatic deployments.

## Contact

Feel free to connect with me through my portfolio or professional profiles.

- GitHub: [KARTHICK2320](https://github.com/KARTHICK2320)
- Portfolio: Add your deployed Netlify URL here.
- LinkedIn: Add your LinkedIn profile URL here.

---

Thanks for visiting my repository!
