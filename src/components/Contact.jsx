// =============================================================
// Contact.jsx
//
// Full-width call-to-action section with:
//   - Headline
//   - Short invite text
//   - Email + LinkedIn buttons
//   - Phone number (subtle)
//   - Ambient radial glow
//
// Data source: src/data/portfolio.js → personal
// =============================================================

import { personal } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import styles from './Contact.module.css';

export default function Contact() {
  const ref = useReveal();

  return (
    <section className={`${styles.section} section`} id="contact">
      <div ref={ref} className={`${styles.inner} reveal`}>
        {/* Ambient glow */}
        <div className={styles.glow} aria-hidden="true" />

        <p className={styles.eyebrow}>Get in touch</p>

        <h2 className={styles.heading}>
          Let's build<br />something great.
        </h2>

        <p className={styles.sub}>
          Have a project in mind? I'd love to hear about it.
          Let's connect and create something worth using.
        </p>

        <div className={styles.actions}>
          <a href={`mailto:${personal.email}`} className="btn-primary">
            Send me an email ↗
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            LinkedIn
          </a>
        </div>

        <p className={styles.phone}>
          Or call: <a href={`tel:${personal.phone}`}>{personal.phone}</a>
        </p>
      </div>
    </section>
  );
}
