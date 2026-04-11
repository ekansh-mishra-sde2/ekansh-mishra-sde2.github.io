import { useInView } from '../../hooks/useInView';
import { PROJECTS } from '../../data';
import styles from './Projects.module.css';

export default function Projects() {
  const { ref, isVisible } = useInView();

  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <div className={`fade-up ${isVisible ? 'visible' : ''}`} ref={ref}>
          <p className="section-label">What I've Built</p>
          <h2 className="section-title">Featured <span>Projects</span></h2>
        </div>

        <div className={`${styles.grid} fade-up ${isVisible ? 'visible' : ''}`}>
          {PROJECTS.map(project => (
            <div key={project.id} className={styles.card}>
              <div className={styles.num}>{project.num}</div>
              <div className={styles.title}>{project.title}</div>
              <p className={styles.desc}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className={styles.meta}>
                {project.isLive && <span className={styles.dot} />}
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noreferrer" className={styles.link}>
                    <i className="fab fa-github" /> &nbsp;{project.meta}
                  </a>
                ) : (
                  <span>{project.meta}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
