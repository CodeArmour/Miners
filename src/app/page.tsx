"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import Image from "next/image";
import { useTheme } from "@/components/theme-context";

const services = [
  "Web platforms",
  "Mobile apps",
  "Custom software",
  "Product design",
  "AI copilots",
  "Data experiences",
];
const projects = [
  ["Campus Flow", "A clearer digital campus experience.", "Web platform"],
  ["Atlas Workspace", "One connected product journey.", "Custom software"],
  [
    "Northstar Labs",
    "A focused workspace for ambitious teams.",
    "Product design",
  ],
  ["Open Portal", "A welcoming front door for every idea.", "Mobile app"],
];
const reviews = [
  [
    "5.0",
    "They made a complex product feel simple, focused, and ready for the people who use it every day.",
    "AM",
    "Alex Morgan",
    "Product lead · Atlas Workspace",
    "avatar-sky",
  ],
  [
    "4.5",
    "The communication was clear from day one. We always knew what was happening and why.",
    "JR",
    "Jamie Rivera",
    "Founder · Campus Flow",
    "avatar-mint",
  ],
  [
    "5.0",
    "A genuine partner in the work. The result has helped our team move with confidence.",
    "SK",
    "Samir Khan",
    "Director · Northstar Labs",
    "avatar-lilac",
  ],
  [
    "5.0",
    "Every detail felt considered, from the first workshop through to the final launch.",
    "LT",
    "Lena Torres",
    "Operations · Open Portal",
    "avatar-sky",
  ],
  [
    "4.5",
    "They brought clarity to a messy brief and gave our team a product we are proud to share.",
    "DB",
    "Drew Bennett",
    "Co-founder · Field Notes",
    "avatar-mint",
  ],
  [
    "5.0",
    "Fast, thoughtful, and generous with their expertise. We would choose Miners again.",
    "NW",
    "Nora Williams",
    "Head of Product · Signal",
    "avatar-lilac",
  ],
];
const process = [
  ["01", "Discover", "We ask the right questions before we make anything."],
  ["02", "Define", "A shared direction keeps every decision moving."],
  ["03", "Design", "Thoughtful interfaces make complex work feel simple."],
  ["04", "Develop", "We build in small, visible steps with your team."],
  ["05", "Improve", "Launch is a beginning, not a finish line."],
];

function Icon({
  name,
  className = "",
}: {
  name:
    | "moon"
    | "menu"
    | "close"
    | "arrow"
    | "spark"
    | "facebook"
    | "whatsapp"
    | "instagram"
    | "x";
  className?: string;
}) {
  const paths = {
    moon: (
      <>
        <path d="M18 14.5A7.5 7.5 0 0 1 9.5 6a7 7 0 1 0 8.5 8.5Z" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h13M13 6l6 6-6 6" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3 1.8 6.2L20 11l-6.2 1.8L12 19l-1.8-6.2L4 11l6.2-1.8Z" />
      </>
    ),
    facebook: (
      <>
        <path d="M14 8h3V4h-3a5 5 0 0 0-5 5v3H6v4h3v5h4v-5h3l1-4h-4V9a1 1 0 0 1 1-1Z" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" />
        <path d="M8 9.5c.4 2 2 3.5 4 4 .4.1.8-.2 1-.6l.4-.8-1.4-.7-.5.6c-.8-.3-1.4-.8-1.8-1.6l.5-.5-.7-1.4-.8.4c-.4.2-.7.6-.7 1Z" />
      </>
    ),
    instagram: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17.3" cy="6.8" r=".8" fill="currentColor" stroke="none" />
      </>
    ),
    x: (
      <>
        <path d="m5 4 14 16M19 4 5 20" />
      </>
    ),
  }[name];
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`icon ${className}`}
    >
      {paths}
    </svg>
  );
}

function ArrowButton({
  direction,
  onClick,
  label,
}: {
  direction: "previous" | "next";
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      className={`focus-ring carousel-button ${direction}`}
      aria-label={label}
      onClick={onClick}
    >
      <Icon name="arrow" />
    </button>
  );
}

export default function Home() {
  const { dark } = useTheme();
  const [chatOpen, setChatOpen] = useState(false);
  const [servicePage, setServicePage] = useState(1);
  const [reviewPage, setReviewPage] = useState(1);
  const [projectPage, setProjectPage] = useState(1);
  const servicesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
  }, []);
  const scroll = (ref: RefObject<HTMLDivElement | null>, amount: number) =>
    ref.current?.scrollBy({ left: amount, behavior: "smooth" });
  useEffect(() => {
    const timer = window.setInterval(() => {
      const next = reviewPage === 1 ? 2 : 1;
      reviewsRef.current?.scrollTo({
        left: (next - 1) * (reviewsRef.current.clientWidth + 16),
        behavior: "smooth",
      });
      setReviewPage(next);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [reviewPage]);
  const goToReviewPage = (page: number) => {
    reviewsRef.current?.scrollTo({
      left: (page - 1) * (reviewsRef.current.clientWidth + 16),
      behavior: "smooth",
    });
    setReviewPage(page);
  };
  useEffect(() => {
    const timer = window.setInterval(() => {
      const next = projectPage === 1 ? 2 : 1;
      projectsRef.current?.scrollTo({
        left: (next - 1) * (projectsRef.current.clientWidth + 16),
        behavior: "smooth",
      });
      setProjectPage(next);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [projectPage]);
  const goToProjectPage = (page: number) => {
    projectsRef.current?.scrollTo({
      left: (page - 1) * (projectsRef.current.clientWidth + 16),
      behavior: "smooth",
    });
    setProjectPage(page);
  };
  return (
    <main className={dark ? "home home-dark" : "home"}>
      <section
        id="top"
        className="hero section-shell"
        aria-labelledby="hero-title"
      >
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            Software for ideas with momentum
          </p>
          <h1 id="hero-title">We build software that moves ideas forward.</h1>
          <p className="hero-lede">
            Miners Group designs and develops websites, mobile applications, and
            custom software for ambitious businesses, universities, startups,
            and organizations.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#contact">
              Start a project <Icon name="arrow" />
            </a>
            <a className="button button-ghost" href="#contact">
              Free 30-min coffee chat
            </a>
          </div>
          <p className="audience-note">
            For businesses&nbsp; • &nbsp;universities&nbsp; •
            &nbsp;startups&nbsp; • &nbsp;students
          </p>
          <div className="social-links" aria-label="Social links">
            <a
              className="social social-facebook focus-ring"
              href="#contact"
              aria-label="Facebook (URL TBD)"
            >
              <Image
                className="social-image"
                src="/facebook.png"
                alt=""
                width={19}
                height={19}
              />
            </a>
            <a
              className="social social-whatsapp focus-ring"
              href="#contact"
              aria-label="WhatsApp (URL TBD)"
            >
              <Image
                className="social-image"
                src="/whatsapp.png"
                alt=""
                width={19}
                height={19}
              />
            </a>
            <a
              className="social social-instagram focus-ring"
              href="#contact"
              aria-label="Instagram (URL TBD)"
            >
              <Image
                className="social-image"
                src="/instagram.png"
                alt=""
                width={19}
                height={19}
              />
            </a>
            <a
              className="social social-x focus-ring"
              href="#contact"
              aria-label="X (URL TBD)"
            >
              <Image
                className="social-image"
                src="/twitter.png"
                alt=""
                width={19}
                height={19}
              />
            </a>
          </div>
        </div>
        <div
          className="hero-visual"
          role="img"
          aria-label="Abstract glass product workspace visual"
        >
          <div className="floating-card floating-web">
            <span>Web platform</span>
            <strong>Fast. Clear. Scalable.</strong>
          </div>
          <div className="product-window glass-panel">
            <div className="window-topbar">
              <i />
              <i />
              <i />
            </div>
            <div className="window-canvas">
              <p className="eyebrow">From idea to launch</p>
              <h2>
                One connected
                <br />
                product journey.
              </h2>
              <div className="progress sky" />
              <div className="progress mint" />
              <div className="progress graphite" />
            </div>
          </div>
          <div className="floating-card floating-mobile">
            <span>Mobile + software</span>
            <strong>Built around people.</strong>
          </div>
        </div>
      </section>

      <section className="audience-rail section-shell" aria-label="Audience">
        <p className="eyebrow">Built for ambitious teams</p>
        <div className="pill-row">
          {["Startups", "Businesses", "Universities", "Creators"].map(
            (item) => (
              <span className="pill" key={item}>
                {item}
              </span>
            ),
          )}
        </div>
      </section>

      <section
        id="services"
        className="content-section section-shell"
        aria-labelledby="services-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 id="services-title">Software with a point of view.</h2>
          </div>
          <p>
            From first sketch to daily use, we make digital products feel clear,
            capable and human.
          </p>
        </div>
        <div className="carousel-wrap">
          <div
            className="card-grid carousel"
            ref={servicesRef}
            onScroll={(event) => {
              const target = event.currentTarget;
              setServicePage(
                target.scrollLeft > target.clientWidth * 0.2 ? 2 : 1,
              );
            }}
          >
            {services.map((service, index) => (
              <article className="service-card glass-panel" key={service}>
                <span className="card-index">0{index + 1}</span>
                <h3>{service}</h3>
                <p>
                  {
                    [
                      "Web experiences that make your next move obvious.",
                      "Native-feeling apps that stay close to people.",
                      "The right technology for the work that matters.",
                      "Interfaces that turn complexity into confidence.",
                      "Practical AI that gives teams more momentum.",
                      "Data products that make the next decision clearer.",
                    ][index]
                  }
                </p>
                <a className="text-link focus-ring" href="#contact">
                  Explore <Icon name="arrow" />
                </a>
              </article>
            ))}
          </div>
          <div className="carousel-controls">
            <ArrowButton
              direction="previous"
              label="Previous services"
              onClick={() => {
                scroll(servicesRef, -640);
                setServicePage(1);
              }}
            />
            <ArrowButton
              direction="next"
              label="Next services"
              onClick={() => {
                scroll(servicesRef, 640);
                setServicePage(2);
              }}
            />
            <span
              className="pagination"
              aria-label={`Services carousel page ${servicePage} of 2`}
            >
              {String(servicePage).padStart(2, "0")} / 02
            </span>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="content-section section-shell tinted"
        aria-labelledby="projects-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="projects-title">Good work leaves a trace.</h2>
          </div>
          <a className="text-link focus-ring" href="#contact">
            View all projects <Icon name="arrow" />
          </a>
        </div>
        <div
          className="project-grid carousel"
          ref={projectsRef}
          tabIndex={0}
          aria-label="Selected work carousel"
        >
          {projects.map(([name, description, type], index) => (
            <article className={`project-card project-${index + 1}`} key={name}>
              <div className="project-art" aria-hidden="true">
                <div className="art-line" />
                <div className="art-block" />
              </div>
              <div className="project-copy">
                <p className="eyebrow">{type}</p>
                <h3>{name}</h3>
                <p>{description}</p>
                <a className="text-link focus-ring" href="#contact">
                  Read case study <Icon name="arrow" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="carousel-controls mobile-controls">
          <ArrowButton
            direction="previous"
            label="Previous projects"
            onClick={() => {
              scroll(projectsRef, -640);
              setProjectPage(1);
            }}
          />
          <ArrowButton
            direction="next"
            label="Next projects"
            onClick={() => {
              scroll(projectsRef, 640);
              setProjectPage(2);
            }}
          />
          <span
            className="pagination"
            aria-label={`Selected work carousel page ${projectPage} of 2`}
          >
            {String(projectPage).padStart(2, "0")} / 02
          </span>
        </div>
        <div
          className="review-pagination project-pagination"
          aria-label="Selected work pages"
        >
          <button
            type="button"
            className={`pagination-dot focus-ring ${projectPage === 1 ? "is-active" : ""}`}
            aria-label="Show selected work page 1"
            aria-pressed={projectPage === 1}
            onClick={() => goToProjectPage(1)}
          />
          <button
            type="button"
            className={`pagination-dot focus-ring ${projectPage === 2 ? "is-active" : ""}`}
            aria-label="Show selected work page 2"
            aria-pressed={projectPage === 2}
            onClick={() => goToProjectPage(2)}
          />
        </div>
      </section>

      <section
        id="about"
        className="content-section section-shell"
        aria-labelledby="process-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">How we work</p>
            <h2 id="process-title">A little structure. A lot of momentum.</h2>
          </div>
          <p>
            Small teams, honest conversations and an emphasis on the next useful
            thing.
          </p>
        </div>
        <ol className="process-list">
          {process.map(([number, title, description]) => (
            <li key={number}>
              <span className="process-number">{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="careers"
        className="internship section-shell"
        aria-labelledby="internship-title"
      >
        <div className="internship-copy">
          <p className="eyebrow">Internships at Miners</p>
          <h2 id="internship-title">
            An internship that gives you room to move.
          </h2>
          <p>
            Learn by doing, with thoughtful mentorship and real product
            problems. Applications are currently open for curious builders.
          </p>
          <a className="button button-dark" href="#contact">
            See opportunities <Icon name="arrow" />
          </a>
        </div>
        <div
          className="internship-art"
          role="img"
          aria-label="Colorful mentorship workspace visual"
        >
          <span>MENTORSHIP</span>
          <div className="art-orbit" />
        </div>
      </section>

      <section
        className="stories section-shell"
        aria-labelledby="stories-title"
      >
        <div className="stories-heading">
          <p className="eyebrow">Customer stories</p>
          <h2 id="stories-title">What our customers say</h2>
          <p>
            Real partnerships, clear communication, and software built around
            meaningful outcomes.
          </p>
        </div>
        <div
          className="review-grid"
          ref={reviewsRef}
          tabIndex={0}
          aria-label="Customer stories carousel"
        >
          {reviews.map(([rating, message, initials, name, company, avatar]) => (
            <article className="review-card" key={name}>
              <p className="review-label">Sample review</p>
              <div className="review-rating">
                <span className="stars" aria-label={`${rating} out of 5 stars`}>
                  ★★★★★
                </span>
                <strong>{rating}</strong>
              </div>
              <p className="review-message">“{message}”</p>
              <div className="review-author">
                <div
                  className={`customer-avatar ${avatar}`}
                  role="img"
                  aria-label="Customer portrait placeholder"
                >
                  {initials}
                </div>
                <div>
                  <strong>{name}</strong>
                  <span>{company}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="review-pagination" aria-label="Customer stories pages">
          <button
            type="button"
            className={`pagination-dot focus-ring ${reviewPage === 1 ? "is-active" : ""}`}
            aria-label="Show customer stories page 1"
            aria-pressed={reviewPage === 1}
            onClick={() => goToReviewPage(1)}
          />
          <button
            type="button"
            className={`pagination-dot focus-ring ${reviewPage === 2 ? "is-active" : ""}`}
            aria-label="Show customer stories page 2"
            aria-pressed={reviewPage === 2}
            onClick={() => goToReviewPage(2)}
          />
        </div>
      </section>

      <section
        id="contact"
        className="conversion section-shell"
        aria-labelledby="contact-title"
      >
        <div className="conversion-heading">
          <p className="eyebrow">Let’s talk</p>
          <h2 id="contact-title">Ready when you are.</h2>
        </div>
        <div className="conversion-grid">
          <article className="conversion-panel project-panel">
            <p className="eyebrow">Start project</p>
            <h3>Have something ambitious in mind?</h3>
            <p>
              Tell us what you want to build, and we’ll help shape the clearest
              path forward.
            </p>
            <a className="button button-mint" href="mailto:hello@miners.group">
              Start a project <Icon name="arrow" />
            </a>
          </article>
          <article className="conversion-panel chat-panel">
            <p className="eyebrow">Free 30-minute chat</p>
            <h3>Still exploring? Coffee is on us.</h3>
            <p>
              Book a relaxed conversation to discuss an idea, challenge, or
              opportunity with no commitment.
            </p>
            <a className="button button-blue" href="mailto:hello@miners.group">
              Book a coffee chat <Icon name="arrow" />
            </a>
          </article>
        </div>
      </section>

      {/* Legacy page-local footer removed; shared layout owns the footer. */}{/*
        <div>
          <a className="brand focus-ring" href="#top">
            <span className="brand-mark" aria-hidden="true">
              M
            </span>
            <span>Miners Group</span>
          </a>
          <p>Software for ideas with momentum.</p>
        </div>
        <nav aria-label="Footer navigation">
          <a className="focus-ring" href="#services">
            Services
          </a>
          <a className="focus-ring" href="#projects">
            Projects
          </a>
          <a className="focus-ring" href="#about">
            About
          </a>
          <a className="focus-ring" href="#contact">
            Contact
          </a>
        </nav>
        <p className="footer-note">
          © 2026 Miners Group
          <br />
          Built with care.
        </p>
      */}
      <button
        type="button"
        className="ask-miners focus-ring"
        aria-expanded={chatOpen}
        onClick={() => setChatOpen((value) => !value)}
      >
        <Icon name="spark" /> Ask Miners
      </button>
      {chatOpen && (
        <div
          className="chat-popover glass-panel"
          role="dialog"
          aria-label="Ask Miners chat"
        >
          <strong>What are you building?</strong>
          <p>
            Tell us a little about your idea and we’ll point you in the right
            direction.
          </p>
          <a href="mailto:hello@miners.group" className="text-link focus-ring">
            Send a note <Icon name="arrow" />
          </a>
        </div>
      )}
    </main>
  );
}
