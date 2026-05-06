// =============================================================
// Footer.jsx
//
// Minimal footer with copyright, email, and social links.
// Data source: src/data/portfolio.js → personal
// =============================================================

import { personal } from '../data/portfolio';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <span className={styles.copy}>
        © {year} {personal.shortName}
      </span>

      <span className={styles.email}>
        <a href={`mailto:${personal.email}`}>{personal.email}</a>
      </span>

      <div className={styles.links}>
        <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={`mailto:${personal.email}`}>Email</a>
      </div>
    </footer>
  );
}
