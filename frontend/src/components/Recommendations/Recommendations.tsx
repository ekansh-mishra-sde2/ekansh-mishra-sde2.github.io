import { useInView } from '../../hooks/useInView';
import { RECOMMENDATIONS } from '../../data';
import styles from './Recommendations.module.css';

export default function Recommendations() {
  const { ref, isVisible } = useInView();
  // duplicate for seamless infinite loop
  const all = [...RECOMMENDATIONS, ...RECOMMENDATIONS];

  return (
    <section id="recommendations" className={styles.section}>
      <div className="container">
        <div className={`${styles.header} fade-up ${isVisible ? 'visible' : ''}`} ref={ref}>
          <p className="section-label" style={{ justifyContent: 'center' }}>Social Proof</p>
          <h2 className="section-title">What people <span>say</span></h2>
          <p>Recommendations & appreciations from colleagues and client leads. Hover to pause.</p>
        </div>
      </div>

      <div className={`${styles.trackWrap} fade-up ${isVisible ? 'visible' : ''}`}>
        <div className={styles.track}>
          {all.map((rec, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.quote}>"</div>
              <p className={styles.text}>{rec.text}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{rec.initials}</div>
                <div>
                  <div className={styles.name}>{rec.name}</div>
                  <div className={styles.title}>{rec.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
