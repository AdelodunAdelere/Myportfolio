// =============================================================
// Hero.jsx
//
// Full-viewport opening section with:
//   - "Available for work" status badge
//   - Giant headline using the person's name
//   - Role & tagline
//   - Two CTA buttons (View Work / Contact)
//   - Ambient radial glow in top-right
//   - Scroll hint at bottom
//
// All text comes from src/data/portfolio.js → personal
// =============================================================

import { personal } from '../data/portfolio';
import { useTheme } from './ThemeContext';
import profileImage from '../assets/Profile.JPG';
import styles from './Hero.module.css';

export default function Hero() {
  const { isLightMode, toggleTheme } = useTheme();

  return (
    <section className={styles.hero} id="hero">
      {/* Ambient glow */}
      <div className={styles.glow} aria-hidden="true" />

      {/* Intro greeting and photo */}
      <div className={styles.introRow}>
        <div className={styles.introText}>
          Hi I am <span>{personal.shortName}</span>
        </div>
        <div className={styles.photoContainer}>
          <img src={profileImage} alt="Adelere profile" className={styles.photoFrame} />
        </div>
      </div>

      {/* Status badge and theme toggle */}
      <div className={styles.headerRow}>
        {personal.available && (
          <div className={styles.badge}>
            <span className={styles.dot} />
            Available for work
          </div>
        )}

        <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle theme">
          {isLightMode ? '☀️' : '🌙'}
        </button>
      </div>

      {/* Headline */}
      <h1 className={styles.h1}>
        Designing Experiences<br />
        Building What Matters
      </h1>

      {/* Role */}
      <p className={styles.role}>{personal.role}</p>

      {/* Tagline */}
      <p className={styles.tagline}>Turning ideas into functional product</p>

      {/* Actions */}
      <div className={styles.actions}>
        <a href="#projects" className="btn-primary">
          View my work ↓
        </a>
        <a href="#contact" className="btn-ghost">
          Get in touch
        </a>
      </div>

      {/* Location */}
      <p className={styles.location}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        {personal.location}
      </p>

      {/* Scroll hint */}
      <div className={styles.scrollHint} aria-hidden="true">
        Scroll to explore
      </div>
    </section>
  );
}
