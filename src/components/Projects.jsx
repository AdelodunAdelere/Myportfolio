// =============================================================
// Projects.jsx
//
// Bento-style grid of project cards.
// The first (featured) project spans the full width.
// Subsequent projects fill a 2-column grid.
//
// Each card has:
//   - Striped placeholder thumbnail (replace with real screenshots)
//   - Type tags
//   - Title + description
//   - Hover: border brightens + arrow appears + subtle lift
//
// Data source: src/data/portfolio.js → projects
// =============================================================

import { projects } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import styles from './Projects.module.css';

// ---- Single project card ----
function ProjectCard({ title, description, tags, featured, link, image }) {
  const ref = useReveal();

  return (
    <a
      ref={ref}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.card} ${featured ? styles.featured : ''} reveal`}
    >
      {/* Thumbnail */}
      {/* Thumbnail */}
<div className={styles.thumb}>
  {link && link !== "#" ? (
    <>
      <iframe
        src={link}
        title={title}
        className={styles.thumbIframe}
        sandbox="allow-scripts allow-same-origin"
        loading="lazy"
        tabIndex={-1}
      />
      <div className={styles.thumbOverlay} />
    </>
    ) : (
    <img src={image} alt={title} className={styles.thumbImage} />
    )}
    </div>

      {/* Body */}
      <div className={styles.body}>
        <div className={styles.tags}>
          {featured && <span className={styles.featuredBadge}>Featured</span>}
          {tags.map((t) => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
      </div>

      {/* Arrow icon — revealed on hover via CSS */}
      <div className={styles.arrow} aria-hidden="true">↗</div>
    </a>
  );
}

export default function Projects() {
  return (
    <section className={`${styles.section} section`} id="projects">
      {/* Header row */}
      <div className={styles.header}>
        <div>
          <p className="section-label">Selected work</p>
          <h2 className={styles.heading}>Projects that<br />made a difference.</h2>
        </div>
        <a href="#contact" className="btn-ghost" style={{ marginBottom: 8 }}>
          Start a project →
        </a>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {projects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}
