import Link from "next/link";

export function SiteFooter() {
  return <footer className="site-footer section-shell"><div><Link className="brand focus-ring" href="/"><span className="brand-mark" aria-hidden="true">M</span><span>Miners Group</span></Link><p>Software for ideas with momentum.</p><p>hello@miners.group</p></div><nav aria-label="Footer navigation"><Link className="focus-ring" href="/services">Services</Link><Link className="focus-ring" href="/#projects">Projects</Link><Link className="focus-ring" href="/#about">About</Link><Link className="focus-ring" href="/#contact">Contact</Link></nav><p className="footer-note">© 2026 Miners Group<br />Built with care.</p></footer>;
}
