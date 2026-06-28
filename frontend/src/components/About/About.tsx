import { useInView } from "../../hooks/useInView";
import { useCounter } from "../../hooks/useCounter";
import styles from "./About.module.css";

const stats = [
  { target: 4, suffix: "+", label: "Years of Experience" },
  { target: 28, suffix: "K+", label: "Platform Users Served" },
  { target: 1, suffix: "00+", label: "GraphQL APIs Built" },
  { target: 100, suffix: "%", label: "Test Coverage Achieved" },
];

function StatCard({
  target,
  suffix,
  label,
  active,
}: {
  target: number;
  suffix: string;
  label: string;
  active: boolean;
}) {
  const count = useCounter(target, active);
  return (
    <div className={styles.statCard}>
      <div className={styles.statNum}>
        {count}
        {suffix}
      </div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}

export default function About() {
  const { ref, isVisible } = useInView(0.3);

  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div
          className={`${styles.grid} fade-up ${isVisible ? "visible" : ""}`}
          ref={ref}
        >
          <div>
            <p className="section-label">Who I Am</p>
            <h2 className="section-title">
              Crafting code that <span>scales</span>
            </h2>
            <div className={styles.stats}>
              {stats.map((s) => (
                <StatCard key={s.label} {...s} active={isVisible} />
              ))}
            </div>
          </div>

          <div className={styles.text}>
            <p>
              I'm a <strong>Senior Full Stack Engineer</strong> at{" "}
              <strong>Nagarro, Gurugram</strong>, specialising in building
              robust, scalable applications using{" "}
              <span className={styles.highlight}>
                React, TypeScript, Node.js and GraphQL
              </span>
              .
            </p>
            <p>
              Over the past 4 years I've worked on enterprise platforms serving{" "}
              <strong>28,000+ global users</strong>, architected microservices
              with domain-driven design, and proactively identified a{" "}
              <span className={styles.highlight}>
                supply chain vulnerability
              </span>{" "}
              across all project repositories — preventing a potential Remote
              Access Trojan breach before it occurred.
            </p>
            <p>
              I deeply advocate for <strong>GDPR compliance</strong>, secure
              coding practices, and AI-augmented development. I'm now an{" "}
              <span className={styles.highlight}>
                AWS Certified Solutions Architect – Associate
              </span>{" "}
              (June 2026), deepening my expertise in cloud architecture and
              security engineering.
            </p>
            <p>
              Outside of code I contribute to open source, track my learning
              publicly on GitHub, and believe that the best software is built at
              the intersection of engineering craft and genuine curiosity.
            </p>

            <a
              className={styles.cert}
              href="https://cp.certmetrics.com/amazon/en/public/verify/credential/32d54564447d41ce8e4c9143ccc115ab"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={styles.certBadge}
                src="https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
                alt="AWS Certified Solutions Architect – Associate badge"
                loading="lazy"
                width={84}
                height={84}
              />
              <span className={styles.certInfo}>
                <span className={styles.certTitle}>
                  AWS Certified Solutions Architect – Associate
                </span>
                <span className={styles.certMeta}>
                  Issued June 2026 · Amazon Web Services
                </span>
                <span className={styles.certVerify}>
                  Verify credential <i className="fas fa-arrow-up-right-from-square" />
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
