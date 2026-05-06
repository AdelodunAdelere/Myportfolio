// =============================================================
// Experience.jsx
//
// Vertical timeline listing work experience + education.
// Each entry slides in from the left as the user scrolls.
//
// Data source: src/data/portfolio.js → experience, education
// =============================================================

import { experience, education } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import styles from './Experience.module.css';

// ---- Single timeline entry ----
function Entry({ role, company, period, type, bullets, degree, institution }) {
  const ref = useReveal();

  return (
    <div ref={ref} className={`${styles.entry} reveal`}>
      {/* Left: period + type badge */}
      <div className={styles.meta}>
        <span className={styles.period}>{period}</span>
        {type && <span className={styles.typeBadge}>{type}</span>}
      </div>

      {/* Timeline dot */}
      <div className={styles.dot} aria-hidden="true" />

      {/* Right: content */}
      <div className={styles.content}>
        <h3 className={styles.roleTitle}>{role || degree}</h3>
        <p className={styles.company}>{company || institution}</p>
        {bullets && (
          <ul className={styles.bullets}>
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section className={`${styles.section} section`} id="experience">
      <p className="section-label">Experience & Education</p>

      <h2 className={styles.heading}>Where I've been.</h2>

      <div className={styles.timeline}>
        {/* Work experience */}
        {experience.map((item) => (
          <Entry key={item.id} {...item} />
        ))}

        {/* Education — same timeline, visually separated */}
        <div className={styles.eduDivider} aria-hidden="true">Education</div>
        {education.map((item) => (
          <Entry key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
