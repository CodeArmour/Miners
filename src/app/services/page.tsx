/* eslint-disable @next/next/no-html-link-for-pages */

"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/components/theme-context";

const capabilities = [
  [
    "01",
    "Web platforms",
    "Websites and web apps that are fast, accessible, and ready to scale.",
  ],
  [
    "02",
    "Mobile products",
    "Thoughtful iOS and Android products people enjoy using.",
  ],
  [
    "03",
    "Custom systems",
    "Operational platforms shaped around your unique workflows.",
  ],
  [
    "04",
    "Product design",
    "Clear interfaces and product strategy from the first sketch.",
  ],
  [
    "05",
    "Technical guidance",
    "Practical advice for confident technology decisions.",
  ],
];
const engagements = [
  [
    "Launch a new product",
    "Turn a promising idea into a focused, useful first release.",
    "Best for: New ideas",
  ],
  [
    "Extend your team",
    "Add experienced product and engineering support where it matters.",
    "Best for: Growing teams",
  ],
  [
    "Improve existing software",
    "Make the product you have clearer, faster, and easier to use.",
    "Best for: Products in motion",
  ],
];
const steps = [
  ["01", "Discover", "The right questions"],
  ["02", "Define", "A shared direction"],
  ["03", "Design", "A clear experience"],
  ["04", "Develop", "Visible progress"],
  ["05", "Launch", "Ready for real work"],
];
const packages: Array<[string, string, string, string[]]> = [
  [
    "01",
    "Website launch",
    "A polished, responsive website for a clear first impression.",
    [
      "Sitemap and page structure",
      "Responsive UI design",
      "CMS-ready content blocks",
      "SEO foundations",
      "Analytics-ready launch",
      "Performance optimisation",
      "Launch handover",
    ],
  ],
  [
    "02",
    "Mobile product",
    "A focused iOS or Android experience built around real user needs.",
    [
      "Core user journey",
      "Platform-ready interface",
      "Reusable components",
      "API and handoff planning",
      "Store launch guidance",
      "Quality assurance",
      "Release notes",
    ],
  ],
  [
    "03",
    "Content management",
    "Editable pages and content workflows your team can manage confidently.",
    [
      "Flexible page types",
      "Roles and permissions",
      "Publishing workflow",
      "Media library setup",
      "Content team training",
      "Search-friendly fields",
      "Editorial guidelines",
    ],
  ],
  [
    "04",
    "E-commerce experience",
    "A dependable storefront that makes browsing and buying feel simple.",
    [
      "Product catalogue",
      "Checkout flow",
      "Payments integration",
      "Order management",
      "Conversion tracking",
      "Customer notifications",
      "Store admin handover",
    ],
  ],
  [
    "05",
    "Custom platform",
    "A connected workspace or operational system shaped around your process.",
    [
      "Workflow mapping",
      "Team dashboard",
      "Data model planning",
      "Integration planning",
      "Access control",
      "Launch support",
      "Documentation",
    ],
  ],
  [
    "06",
    "Product design sprint",
    "A focused sprint to turn an uncertain idea into a clear product direction.",
    [
      "Stakeholder workshop",
      "User-flow mapping",
      "Prototype direction",
      "Usability feedback",
      "Prioritised roadmap",
      "Design principles",
      "Delivery estimate",
    ],
  ],
];

function Icon({ name }: { name: "arrow" | "moon" | "menu" | "spark" }) {
  const paths = {
    arrow: <path d="M5 12h13M13 6l6 6-6 6" />,
    moon: <path d="M18 14.5A7.5 7.5 0 0 1 9.5 6a7 7 0 1 0 8.5 8.5Z" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    spark: (
      <path d="m12 3 1.8 6.2L20 11l-6.2 1.8L12 19l-1.8-6.2L4 11l6.2-1.8Z" />
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
      className="icon"
    >
      {paths}
    </svg>
  );
}

function Arrow() {
  return <Icon name="arrow" />;
}

export default function ServicesPage() {
  const { dark } = useTheme();
  const [chatOpen, setChatOpen] = useState(false);
  const [packagePage, setPackagePage] = useState(1);
  const packagesRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const timer = window.setInterval(() => {
      const next = packagePage === 1 ? 2 : 1;
      packagesRef.current?.scrollTo({ left: (next - 1) * (packagesRef.current.clientWidth + 18), behavior: "smooth" });
      setPackagePage(next);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [packagePage]);
  useEffect(() => {
    const aliases: Record<string, string> = {
      packages: "packages-title",
      engagement: "engagement-title",
      delivery: "delivery-title",
      proof: "proof-title",
    };
    Object.entries(aliases).forEach(([alias, heading]) =>
      document
        .getElementById(heading)
        ?.parentElement?.setAttribute("id", alias),
    );
    document
      .querySelector(".services-feature")
      ?.setAttribute("id", "beyond-build");
  }, []);
  return (
    <main
      className={dark ? "home home-dark services-page" : "home services-page"}
    >
      <section
        className="services-hero section-shell"
        aria-labelledby="services-title"
      >
        <div className="services-hero-copy">
          <p className="eyebrow">Services</p>
          <h1 id="services-title">
            Software built around the way your business works.
          </h1>
          <p>
            From websites and mobile apps to custom platforms, Miners Group
            turns complex needs into clear, reliable digital products.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="/#contact">
              Start a project <Arrow />
            </a>
            <a className="button button-ghost" href="/#contact">
              Free coffee chat
            </a>
          </div>
        </div>
        <aside
          className="capability-map glass-panel"
          aria-label="One partner, five capabilities"
        >
          <p className="eyebrow">One partner - five capabilities</p>
          {capabilities.map(([number, name]) => (
            <a
              className="capability-row focus-ring"
              href="#capabilities"
              key={number}
            >
              <span>{number}</span>
              <strong>{name}</strong>
            </a>
          ))}
        </aside>
      </section>
      <section
        id="capabilities"
        className="services-section section-shell"
        aria-labelledby="build-title"
      >
        <p className="eyebrow">What we build</p>
        <h2 id="build-title">
          Focused expertise across the product lifecycle.
        </h2>
        <div className="services-capability-grid">
          {capabilities.slice(0, 3).map(([number, name, description]) => (
            <article className="services-card" key={number}>
              <span className="card-index">{number}</span>
              <h3>{name}</h3>
              <p>{description}</p>
              <span className="service-meta">
                Strategy - UX - Frontend - Backend
              </span>
            </article>
          ))}
        </div>
      </section>
      <section
        className="packages-section section-shell"
        aria-labelledby="packages-title"
      >
        <p className="eyebrow">Packages</p>
        <h2 id="packages-title">
          A clear starting point for every kind of build.
        </h2>
        <div
          className="packages-grid"
          ref={packagesRef}
          tabIndex={0}
          aria-label="Packages carousel"
          onScroll={(event) => {
            const target = event.currentTarget;
            setPackagePage(target.scrollLeft > target.clientWidth * 0.2 ? 2 : 1);
          }}
        >
          {packages.map(
            ([number, title, description, includes]) => (
              <article className="package-card" key={number}>
                <span className="package-number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul className="package-includes">
                  {includes.map((item) => (
                    <li key={item}>
                      <span aria-hidden="true">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a className="package-link focus-ring" href="/#contact">
                  Contact us to order <Arrow />
                </a>
              </article>
            ),
          )}
        </div>
        <div className="review-pagination project-pagination" aria-label="Packages carousel pages">
          {[1, 2].map((page) => (
            <button type="button" className={`pagination-dot focus-ring ${packagePage === page ? "is-active" : ""}`} aria-label={`Show packages page ${page}`} aria-pressed={packagePage === page} onClick={() => { packagesRef.current?.scrollTo({ left: (page - 1) * ((packagesRef.current?.clientWidth ?? 0) + 18), behavior: "smooth" }); setPackagePage(page); }} key={page} />
          ))}
        </div>
      </section>
      <section className="services-feature section-shell">
        <div className="services-feature-copy">
          <p className="eyebrow">Beyond the build</p>
          <h2>Good software starts before the first line of code.</h2>
          <p>
            Product design and consulting help teams make clearer decisions,
            reduce risk, and build momentum before development begins.
          </p>
        </div>
        <div className="services-feature-lanes">
          <div className="feature-lane">
            <strong>UI/UX &amp; product design</strong>
            <Arrow />
          </div>
          <div className="feature-lane">
            <strong>Software consulting</strong>
            <Arrow />
          </div>
        </div>
      </section>
      <section
        className="services-section section-shell"
        aria-labelledby="engagement-title"
      >
        <p className="eyebrow">Ways to work together</p>
        <h2 id="engagement-title">The right shape for your stage.</h2>
        <div className="engagement-grid">
          {engagements.map(([title, description, best]) => (
            <article className="engagement-card" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
              <span>{best}</span>
            </article>
          ))}
        </div>
      </section>
      <section
        className="services-section section-shell"
        aria-labelledby="delivery-title"
      >
        <p className="eyebrow">How delivery works</p>
        <h2 id="delivery-title">
          Clear decisions. Visible progress. No black box.
        </h2>
        <ol className="services-process">
          {steps.map(([number, title, detail]) => (
            <li key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </li>
          ))}
        </ol>
      </section>
      <section
        className="services-proof section-shell"
        aria-labelledby="proof-title"
      >
        <p className="eyebrow">Selected proof</p>
        <h2 id="proof-title">Different problems. Thoughtful products.</h2>
        <div className="proof-grid">
          <article>
            <div className="proof-art proof-sky" />
            <h3>Campus community hub</h3>
            <p>Web platform - Product design</p>
          </article>
          <article>
            <div className="proof-art proof-mint" />
            <h3>RoutinIQ workspace</h3>
            <p>Custom software - Mobile</p>
          </article>
        </div>
      </section>
      <section
        className="conversion section-shell"
        aria-labelledby="services-contact"
      >
        <div className="conversion-heading">
          <p className="eyebrow">Let&apos;s talk</p>
          <h2 id="services-contact">Ready when you are.</h2>
        </div>
        <div className="conversion-grid">
          <article className="conversion-panel project-panel">
            <p className="eyebrow">Start project</p>
            <h3>Have something ambitious in mind?</h3>
            <p>
              Tell us what you want to build, and we&apos;ll help shape the
              clearest path forward.
            </p>
            <a className="button button-mint" href="mailto:hello@miners.group">
              Start a project <Arrow />
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
              Book a coffee chat <Arrow />
            </a>
          </article>
        </div>
      </section>
      <button
        type="button"
        className="ask-miners focus-ring"
        aria-expanded={chatOpen}
        onClick={() => setChatOpen(!chatOpen)}
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
          <p>Tell us a little about your idea.</p>
          <a href="mailto:hello@miners.group">
            Send a note <Arrow />
          </a>
        </div>
      )}
    </main>
  );
}
