import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <div>
          <div className={styles.tag}>
            <span className={styles.dot} />
            Available for new opportunities
          </div>
          <h1 className={styles.name}>
            <span className={styles.first}>Ekansh</span><br />
            <span className={styles.last}>Mishra</span>
          </h1>
          <p className={styles.role}>
            Senior Full Stack Engineer &nbsp;/&nbsp;{' '}
            <span>React · Node.js · GraphQL</span>
          </p>
          <p className={styles.desc}>
            Building scalable, production-grade web applications for global platforms.
            4 years of shipping real products — from 1,000+ GraphQL APIs to proactive
            supply chain security. Based in <strong>Noida, India</strong>.
          </p>
          <div className={styles.btns}>
            <a href="#projects" className="btn btn-primary">
              <i className="fas fa-rocket" /> View Projects
            </a>
            <a href="#contact" className="btn btn-outline">
              <i className="fas fa-paper-plane" /> Let's Talk
            </a>
            <a
              href="https://github.com/ekansh-mishra-sde2"
              target="_blank" rel="noreferrer"
              className="btn btn-outline"
            >
              <i className="fab fa-github" /> GitHub
            </a>
          </div>
        </div>

        <div className={styles.avatarWrap}>
          <div className={styles.ring} />
          <div className={styles.ring} />
          <div className={styles.ring} />
          <div className={styles.hex}>👨‍💻</div>
        </div>
      </div>
    </section>
  );
}
