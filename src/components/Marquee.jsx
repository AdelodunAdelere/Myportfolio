// =============================================================
// Marquee.jsx
//
// Infinite horizontally-scrolling ticker strip.
// Sits between Hero and About to break up the page rhythm.
//
// Props:
//   items: string[]  — list of words/phrases to repeat
//   speed: number    — CSS animation duration in seconds (default 20)
// =============================================================

import styles from './Marquee.module.css';

const DEFAULT_ITEMS = [
  'UI/UX Design',
  'Graphic Design',
  'React',
  'JavaScript',
  'Figma',
  'Adobe Suite',
  'SQL Database Management',
  'Product Design',
  'Front-End Development',
  'Software Engineering',
];

export default function Marquee({ items = DEFAULT_ITEMS, speed = 20 }) {
  // Duplicate items so the loop is seamless
  const doubled = [...items, ...items];

  return (
    <div className={styles.wrap}>
      <div
        className={styles.track}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
