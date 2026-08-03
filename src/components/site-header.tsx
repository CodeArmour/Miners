/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./theme-context";

function Icon({ name }: { name: "moon" | "menu" | "close" }) {
  const paths = { moon: <path d="M18 14.5A7.5 7.5 0 0 1 9.5 6a7 7 0 1 0 8.5 8.5Z" />, menu: <path d="M4 7h16M4 12h16M4 17h16" />, close: <path d="m6 6 12 12M18 6 6 18" /> }[name];
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="icon">{paths}</svg>;
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { dark, toggle } = useTheme();
  useEffect(() => { const onKey = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false); window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey); }, []);
  return <header className="site-header glass-panel"><a className="brand focus-ring" href="/" aria-label="Miners Group home"><span className="brand-mark" aria-hidden="true">M</span><span>Miners Group</span></a><nav id="primary-navigation" className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation"><div className="nav-dropdown"><a className="focus-ring" href="/services" onClick={() => setMenuOpen(false)}>Services</a><div className="nav-submenu" aria-label="Services sections"><a href="/services#capabilities">What we build</a><a href="/services#packages">Packages</a><a href="/services#beyond-build">Beyond the build</a><a href="/services#engagement">Ways to work together</a><a href="/services#delivery">How delivery works</a><a href="/services#proof">Selected proof</a></div></div><div className="nav-dropdown"><a className="focus-ring" href="/projects" onClick={() => setMenuOpen(false)}>Projects</a><div className="nav-submenu" aria-label="Projects sections"><a href="/projects#outcomes-title">How we think</a><a href="/projects#work-title">Featured work</a><a href="/projects#proof-framework-title">Proof framework</a><a href="/projects#approach-title">Delivery approach</a><a href="/projects#projects-contact">Let&apos;s talk</a></div></div><a className="focus-ring" href="/#about" onClick={() => setMenuOpen(false)}>About</a><a className="focus-ring" href="/#careers" onClick={() => setMenuOpen(false)}>Careers</a><a className="focus-ring" href="/#contact" onClick={() => setMenuOpen(false)}>Contact</a></nav><div className="header-actions"><button type="button" className="theme-toggle focus-ring" aria-label="Toggle colour theme" aria-pressed={dark} onClick={toggle}><Icon name="moon" /></button><a className="button button-ghost desktop-only" href="/#contact">Coffee chat</a><a className="button button-dark desktop-only" href="/#contact">Start a project</a><button type="button" className="menu-toggle focus-ring" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((value) => !value)}><Icon name={menuOpen ? "close" : "menu"} /><span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span></button></div></header>;
}
