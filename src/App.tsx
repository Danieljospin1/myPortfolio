import { ArrowRight, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = ["Home", "Projects", "About", "Skills", "Contact"];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site">
      <header className="navbar">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark"></span>
          <span>BISUBIZO Daniel Jospin</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={item === "Home" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          className="menu-button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Software Engineer</p>
            <h1>BISUBIZO Daniel Jospin</h1>
            <h2>I build software for real-world problems.</h2>
            <p className="hero-description">
              Software engineering student at AUCA, interested in building
              practical systems that work reliably in the real world — from
              offline-first business applications to university communication
              platforms.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View My Work <ArrowRight size={18} />
              </a>
              <a className="button button-secondary" href="https://github.com/Danieljospin1" target="_blank" rel="noreferrer">
                <Github size={18} /> GitHub
              </a>
            </div>

            <div className="social-links" aria-label="Social links">
              <a href="https://www.linkedin.com/in/bisubizo-daniel-jospin-0b234129b/" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="https://github.com/Danieljospin1" aria-label="GitHub"><Github size={20} /></a>
              <a href="mailto:danieljospin087@gmail.com" aria-label="Email"><Mail size={20} /></a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-card">
              <img src="/portrait.jpg" alt="BISUBIZO Daniel Jospin" />
            </div>
            <div className="visual-note">
              <span />
              <em>Better systems.<br />Real impact.</em>
            </div>
          </div>
        </section>

        <section className="section placeholder-section" id="projects">
          <p className="eyebrow">Featured Projects</p>
          <h2>Projects I’ve Built</h2>
          <p className="section-intro">Real problems. Practical solutions. Built with modern technologies.</p>

          <div className="project-grid">
            <article className="project-card project-card-teal">
              <div>
                <p className="project-label">01 · Mobile / Offline-first</p>
                <h3>MyDecor</h3>
                <p>
                  An offline-first booking and business-record system for
                  wedding-attire rental businesses.
                </p>
                <div className="tags">
                  <span>React Native</span><span>Expo</span><span>SQLite</span>
                </div>
              </div>
              <div className="mock-phone"><span>MyDecor</span><strong>Bookings</strong><small>Client booking</small><small>Payment status</small></div>
            </article>

            <article className="project-card project-card-lilac">
              <div>
                <p className="project-label">02 · Communication platform</p>
                <h3>AUCA App</h3>
                <p>
                  A university communication platform centered on administration
                  announcements and automated class-based communication.
                </p>
                <div className="tags">
                  <span>React Native</span><span>Node.js</span><span>Socket.IO</span><span>MySQL</span>
                </div>
              </div>
              <div className="mock-phone"><span>AUCA App</span><strong>Announcements</strong><small>University update</small><small>Registration reminder</small></div>
            </article>
          </div>
        </section>

        <section className="section placeholder-section" id="about">
          <p className="eyebrow">Education</p>
          <h2>My Academic Journey</h2>
          <div className="education-grid">
            <div className="education-card"><strong>G.S Muhura</strong><span>2019 — 2022</span><p>Mathematics · Economics · Computer Science</p></div>
            <div className="education-card"><strong>Adventist University of Central Africa (AUCA)</strong><span>2023 — 2027</span><p>Software Engineering</p></div>
          </div>
        </section>

        <section className="section placeholder-section" id="skills">
          <p className="eyebrow">Technical Skills</p>
          <h2>Technologies & Tools</h2>
          <div className="skill-list">
            {["React Native", "Node.js / Express", "JavaScript / TypeScript", "MySQL", "SQLite", "Git & GitHub", "VS Code", "Linux"].map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="approach-section section">
          <div>
            <p className="eyebrow">How I Work</p>
            <h2>My Approach</h2>
            <p>
              I focus on understanding the problem, the users, and the real
              constraints. I like simple, maintainable solutions and systems
              that remain useful beyond the demo.
            </p>
          </div>
          <div className="principles">
            <div><strong>Problem First</strong><span>Understand the real need before writing code.</span></div>
            <div><strong>Build Iteratively</strong><span>Start small, get feedback, improve.</span></div>
            <div><strong>Clean Code</strong><span>Readable and maintainable systems.</span></div>
            <div><strong>Think Long Term</strong><span>Reliable systems create real value.</span></div>
          </div>
        </section>

        <footer className="footer" id="contact">
          <div>
            <strong>BISUBIZO Daniel Jospin</strong>
            <span>Software Engineer</span>
          </div>
          <div>
            <strong>Let's work together</strong>
            <span>Have a project, opportunity, or just want to connect?</span>
            <a className="button button-primary" href="mailto:danieljospin087@gmail.com">Get in touch <ArrowRight size={17} /></a>
          </div>
          <div className="footer-socials">
            <a href="#"><Github size={18} /> GitHub</a>
            <a href="#"><Linkedin size={18} /> LinkedIn</a>
            <a href="mailto:danieljospin087@gmail.com"><Mail size={18} /> Email</a>
          </div>
        </footer>
      </main>
    </div>
  );
}