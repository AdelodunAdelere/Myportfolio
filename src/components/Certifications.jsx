// =============================================================
// Certifications.jsx
//
// Compact grid of certification cards grouped by issuer.
// Uses a two-column grid on desktop, single column on mobile.
//
// Data source: src/data/portfolio.js → certifications
// =============================================================

import { certifications } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import styles from './Certifications.module.css';

function CertCard({ issuer, year, items }) {
  const ref = useReveal();

  return (
    <div ref={ref} className={`${styles.card} reveal`}>
      <div className={styles.cardHeader}>
        <span className={styles.issuer}>{issuer}</span>
        <span className={styles.year}>{year}</span>
      </div>
      <ul className={styles.list}>
        {items.map((item, i) => (
          <li key={i} className={styles.item}>
            <span className={styles.dot} aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Certifications() {
  return (
    <section className={`${styles.section} section`} id="certifications">
      <p className="section-label">Certifications</p>
      <h2 className={styles.heading}>Credentials &amp; learning.</h2>

      <div className={styles.grid}>
        {certifications.map((cert) => (
          <CertCard key={cert.issuer} {...cert} />
        ))}
      </div>
    </section>
  );
}
