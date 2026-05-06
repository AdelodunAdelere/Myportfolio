// =============================================================
// Navbar.jsx
//
// Fixed top navigation with logo, nav links, and a CTA button.
// Uses a scroll listener to add a "scrolled" class that slightly
// brightens the border when the user scrolls down.
//
// Props: none (reads from portfolio data)
// =============================================================

import { useState, useEffect } from 'react';
import { personal } from '../data/portfolio';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      {/* Logo */}
      <a href="#hero" className={styles.logo}>
        {personal.initials}.
      </a>

      {/* Centre links */}
      <ul className={styles.links}>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className={styles.actionsWrap}>
        <a href={`mailto:${personal.email}`} className={styles.cta}>
          Let's talk →
        </a>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          onClick={toggleMenu}
        >
          ☰
        </button>

        <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      </div>
    </nav>
  );
}
