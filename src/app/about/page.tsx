/* eslint-disable @next/next/no-html-link-for-pages */

"use client";

import { useState } from "react";
import { useTheme } from "@/components/theme-context";

const principles = [
  ["01", "Human by design", "We make technology feel considered, useful, and easy to live with."],
  ["02", "Built for outcomes", "Every decision connects back to the people and progress it should support."],
  ["03", "Open to new talent", "Curious minds get room to learn, contribute, and grow with the work."],
];
const culture = [
  ["01", "Listen", "We start with context, honest questions, and the people closest to the problem."],
  ["02", "Make", "We turn shared understanding into clear decisions, prototypes, and useful software."],
  ["03", "Grow", "We learn from what ships and keep improving the product, the process, and ourselves."],
];
const operating = [
  ["Clarity over theatre", "Say the useful thing early. Make the next decision easier."],
  ["Small teams, real ownership", "The people doing the work stay close to the outcome."],
  ["Progress you can see", "Frequent demos and honest notes keep momentum visible."],
  ["Kindness is a system", "Careful collaboration makes better work and better days."],
];

function Arrow() { return <svg className="icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M13 6l6 6-6 6" /></svg>; }
function Spark() { return <svg className="icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 1.8 6.2L20 11l-6.2 1.8L12 19l-1.8-6.2L4 11l6.2-1.8Z" /></svg>; }

export default function AboutPage() {
  const { dark } = useTheme();
  const [chatOpen, setChatOpen] = useState(false);
  return <main className={dark ? "home home-dark about-page" : "home about-page"}>
    <section className="about-hero section-shell" aria-labelledby="about-title">
      <div className="about-hero-copy"><p className="eyebrow">About Miners Group</p><h1 id="about-title">Good software starts with a better conversation.</h1><p>We are a product studio for ambitious teams. We listen closely, make thoughtfully, and help ideas become useful momentum.</p><div className="hero-actions"><a className="button button-dark" href="#mission">Our story <Arrow /></a><a className="button button-ghost" href="#talent">Meet the next chapter</a></div></div>
      <div className="about-hero-art" role="img" aria-label="Abstract layered landscape representing ideas becoming products"><span className="about-orbit about-orbit-one" /><span className="about-orbit about-orbit-two" /><span className="about-hero-tag">Listen · Make · Grow</span><span className="about-hero-sun" /></div>
    </section>
    <section className="about-principles section-shell" aria-labelledby="principles-title"><div className="about-heading"><p className="eyebrow">What guides us</p><h2 id="principles-title">A small studio with a wide point of view.</h2></div><div className="about-principles-grid">{principles.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section id="mission" className="about-mission section-shell" aria-labelledby="mission-title"><div><p className="eyebrow">Our mission</p><h2 id="mission-title">Make meaningful technology feel within reach.</h2></div><p>Miners exists to help people move from uncertainty to useful progress. We bring product thinking, design craft, and dependable engineering into one generous partnership.</p></section>
    <section className="about-culture section-shell" aria-labelledby="culture-title"><div className="about-heading"><p className="eyebrow">How we grow together</p><h2 id="culture-title">Listen. Make. Grow.</h2><p>Our culture map is simple by design: understand the real need, make the next useful thing, then learn from what happens.</p></div><ol className="about-culture-grid">{culture.map(([number, title, text]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></section>
    <section className="about-operating section-shell" aria-labelledby="operating-title"><div className="about-heading"><p className="eyebrow">Operating principles</p><h2 id="operating-title">The way we show up matters.</h2></div><div className="about-operating-grid">{operating.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="about-collaboration section-shell" aria-labelledby="collaboration-title"><div className="about-collaboration-art" aria-hidden="true"><span>01</span><span>02</span><span>03</span></div><div><p className="eyebrow">Collaboration model</p><h2 id="collaboration-title">A partner in the room, not a vendor at the door.</h2><p>We work in the open with small, senior teams. You get clear ownership, direct communication, and a shared rhythm that keeps the work grounded in outcomes.</p><a className="text-link focus-ring" href="/#contact">Start a conversation <Arrow /></a></div></section>
    <section id="talent" className="internship section-shell" aria-labelledby="talent-title"><div className="internship-copy"><p className="eyebrow">Talent pathway</p><h2 id="talent-title">There is always room for a curious builder.</h2><p>We are growing a studio where people can learn by doing, ask better questions, and contribute to work that matters. Careers and internship conversations are welcome.</p><a className="button button-dark" href="mailto:hello@miners.group?subject=Talent%20at%20Miners">Talk about joining us <Arrow /></a></div><div className="internship-art about-talent-visual" role="img" aria-label="Colorful mentorship workspace visual"><span className="about-talent-mark">M</span><strong>Learn by doing.</strong><p>Mentorship, meaningful problems, and space to make an impact.</p><div className="art-orbit" /></div></section>
    <section className="conversion section-shell" aria-labelledby="about-contact-title"><div className="conversion-heading"><p className="eyebrow">Let&apos;s talk</p><h2 id="about-contact-title">Ready when you are.</h2></div><div className="conversion-grid"><article className="conversion-panel project-panel"><p className="eyebrow">Start project</p><h3>Have something ambitious in mind?</h3><p>Tell us what you want to build, and we&apos;ll help shape the clearest path forward.</p><a className="button button-mint" href="mailto:hello@miners.group">Start a project <Arrow /></a></article><article className="conversion-panel chat-panel"><p className="eyebrow">Free 30-minute chat</p><h3>Still exploring? Coffee is on us.</h3><p>Book a relaxed conversation to discuss an idea, challenge, or opportunity with no commitment.</p><a className="button button-blue" href="mailto:hello@miners.group">Book a coffee chat <Arrow /></a></article></div></section>
    <button type="button" className="ask-miners focus-ring" aria-expanded={chatOpen} onClick={() => setChatOpen(value => !value)}><Spark /> Ask Miners</button>{chatOpen && <div className="chat-popover glass-panel" role="dialog" aria-label="Ask Miners chat"><strong>What are you building?</strong><p>Tell us a little about your idea.</p><a href="mailto:hello@miners.group">Send a note <Arrow /></a></div>}
  </main>;
}
