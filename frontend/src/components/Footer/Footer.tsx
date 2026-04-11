import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>Designed & built by <span>Ekansh Mishra</span> · Hosted on GitHub Pages · <span>2026</span></p>
      </div>
    </footer>
  );
}
