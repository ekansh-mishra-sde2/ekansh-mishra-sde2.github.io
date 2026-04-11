import { useInView } from '../../hooks/useInView';
import { EXPERIENCE } from '../../data';
import styles from './Experience.module.css';

export default function Experience() {
  const { ref, isVisible } = useInView();

  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <div className={`fade-up ${isVisible ? 'visible' : ''}`} ref={ref}>
          <p className="section-label">Career</p>
          <h2 className="section-title">Work <span>Experience</span></h2>
        </div>

        <div className={`${styles.timeline} fade-up ${isVisible ? 'visible' : ''}`}>
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.company}>{exp.company}</div>
              <div className={styles.role}>{exp.role}</div>
              <div className={styles.date}>{exp.date} &nbsp;·&nbsp; {exp.location}</div>
              <ul className={styles.bullets}>
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
