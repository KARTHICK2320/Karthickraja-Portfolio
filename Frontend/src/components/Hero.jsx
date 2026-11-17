import { useState, useEffect } from "react";
import "../css/Hero.css";

const photo = "/assets/imgs/Karthickraja.png";

const PROFILE = {
  name: "Karthickraja K",
  role: "Full-Stack Developer",
  about: "Building end-to-end web applications using React.js, JavaScript, Python (Flask), REST APIs and modern web technologies. Passionate about creating responsive, scalable and real-world solutions through clean and maintainable code.",
  links: {
    github: "https://github.com/KARTHICK2320",
    linkedin: "https://www.linkedin.com/in/karthickraja-k-140a06321",
    email: "mailto:karthickr2304@gmail.com",
    whatsapp: "https://wa.me/916369831841",
    resume: "/resume/Karthickraja_K_Resume.pdf",
  },
};

function useTyping(text, speed = 90) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++; setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return out;
}

const Lamp = ({ side }) => (
  <svg className={"lamp " + side} viewBox="0 0 60 52" aria-hidden="true">
    <defs>
      <radialGradient id={"glow" + side} cx="50%" cy="50%" r="50%">
        <stop offset="0" stopColor="#fff" stopOpacity=".95" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </radialGradient>
      <linearGradient id={"body" + side} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#5a5a68" />
        <stop offset="1" stopColor="#2a2a35" />
      </linearGradient>
    </defs>
    <ellipse cx="30" cy="44" rx="34" ry="16" fill={`url(#glow${side})`} />
    <g transform="rotate(-12 30 14)">
      <path d="M16 0 H42 L52 26 Q30 36 6 26 Z" fill={`url(#body${side})`} />
      <path d="M22 3 L18 22" stroke="#8a8a98" strokeWidth="2" strokeLinecap="round" opacity=".5" />
      <ellipse cx="29" cy="27" rx="23" ry="8" fill="#fff" />
      <ellipse cx="29" cy="28" rx="17" ry="5" fill="#efe9ff" />
    </g>
  </svg>
);

const Icon = ({ d, fill }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill={fill ? "currentColor" : "none"} stroke={fill ? "none" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d}
  </svg>
);

const icons = {
  github: <Icon fill d={<path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />} />,
  linkedin: <Icon fill d={<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3V9.75zm6.5 0h3.84v1.54h.05c.54-1.01 1.84-2.08 3.8-2.08 4.06 0 4.81 2.67 4.81 6.14V21h-4v-4.94c0-1.18-.02-2.7-1.65-2.7-1.65 0-1.9 1.29-1.9 2.62V21h-4V9.75z" />} />,
  mail: <Icon d={<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>} />,
  whatsapp: <Icon d={<><path d="M3 21l1.6-4.6A8.5 8.5 0 1 1 8 19.6L3 21z" /><path d="M9 9c0 3 3 6 6 6l1.2-1.4-2-1-1 .6c-.8-.4-1.6-1.2-2-2l.6-1-1-2L9 9z" /></>} />,
};

export default function Hero({ darkMode }) {
  const role = useTyping(PROFILE.role);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const social = [
    ["github", "GitHub", PROFILE.links.github],
    ["linkedin", "LinkedIn", PROFILE.links.linkedin],
    ["mail", "Email", PROFILE.links.email],
    ["whatsapp", "WhatsApp", PROFILE.links.whatsapp],
  ];

  return (
    <section className={`hero ${darkMode ? "dark" : ""}`}>
      <span className="beam l" /><span className="beam r" /><Lamp side="l" /><Lamp side="r" />

      <div className="main">
        <div className="copy">
          <span className="badge"><i />Available for Full-Time Opportunities</span>
          <h1>Hi, I’m<span className="name">{PROFILE.name}</span></h1>
          <h2>{role}<span className="caret" /></h2>
          <p className="desc">{PROFILE.about}</p>
          <div className="cta">
            <a className="btn fill" href="#contact">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2 21 23 12 2 3v7l15 2-15 2z" /></svg>
              Hire Me
            </a>
            <a
              className="btn line"
              href={PROFILE.links.resume}
              download="Karthickraja_K_Resume.pdf"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12m0 0-4-4m4 4 4-4M4 21h16" /></svg>
              Download Resume
            </a>
          </div>
          <div className="social">
            {social.map(([k, label, href]) => (
              <a
                key={k}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {icons[k]}
              </a>
            ))}
          </div>
        </div>
        <div className="art"><span className="ring" /><span className="disc" /><span className="swoosh" /><img src={photo} alt="Portrait of Karthickraja K" /></div>
      </div>
    </section>
  );
}