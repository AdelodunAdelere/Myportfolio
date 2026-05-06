// =============================================================
// About.jsx
//
// Two-column layout:
//   LEFT  — Bio paragraph + skills chips
//   RIGHT — Three animated stat counters
//
// Scroll-reveal is applied to each column independently so they
// stagger nicely as the user scrolls down.
// =============================================================

import { personal, skills } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import styles from './About.module.css';

const stats = [
  { num: '3+',   label: 'Years of professional experience' },
  { num: '20+',  label: 'Projects shipped' },
  { num: '100%', label: 'Commitment to quality & delivery' },
];

// Flatten all skills into one list for the chip row
const allSkills = [...skills.design, ...skills.development];

export default function About() {
  const leftRef  = useReveal();
  const rightRef = useReveal();

  return (
    <section className={`${styles.about} section`} id="about">
      <p className="section-label">About me</p>

      <div className={styles.grid}>
        {/* LEFT — bio + skills */}
        <div ref={leftRef} className={`${styles.left} reveal`}>
          <h2 className={styles.heading}>
            Turning ideas<br />into interfaces.
          </h2>

          <p className={styles.bio}>{personal.bio}</p>

          {/* Skills chips */}
          <div className={styles.skillsRow}>
            {allSkills.map((s) => (
              <span key={s} className={styles.chip}>{s}</span>
            ))}
          </div>
        </div>

        {/* RIGHT — stats */}
        <div ref={rightRef} className={`${styles.right} reveal`}>
          {stats.map(({ num, label }) => (
            <div key={label} className={styles.statRow}>
              <span className={styles.statNum}>{num}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
