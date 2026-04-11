import { useInView } from '../../hooks/useInView';
import { TECH_RINGS } from '../../data';
import type { TechItem } from '../../types';
import styles from './Tech.module.css';

interface RingProps {
  items: TechItem[];
  radius: number;
  duration: number;
  direction?: 'normal' | 'reverse';
  ringClass: string;
  counterDuration: number;
}

function TechRing({ items, radius, duration, direction = 'normal', ringClass, counterDuration }: RingProps) {
  const count = items.length;
  return (
    <>
      <div
        className={`${styles.ring} ${ringClass}`}
        style={{ animationDuration: `${duration}s`, animationDirection: direction }}
      />
      {items.map((tech, i) => {
        const angle = (2 * Math.PI / count) * i - Math.PI / 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        // counter-rotate so icons stay upright
        const iconDir = direction === 'reverse' ? 'normal' : 'reverse';
        return (
          <div
            key={tech.name}
            className={styles.icon}
            style={{
              left: `calc(50% + ${x}px - 24px)`,
              top: `calc(50% + ${y}px - 24px)`,
              animation: `counterSpin ${counterDuration}s linear infinite`,
              animationDirection: iconDir,
            }}
          >
            <img
              src={tech.img}
              alt={tech.name}
              loading="lazy"
              onError={(e) => {
                const t = e.currentTarget;
                t.style.display = 'none';
                const span = document.createElement('span');
                span.style.cssText = 'font-size:0.65rem;color:var(--neon);text-align:center;line-height:1.2;';
                span.textContent = tech.name.slice(0, 3);
                t.parentElement?.appendChild(span);
              }}
            />
            <div className={styles.tooltip}>{tech.name}</div>
          </div>
        );
      })}
    </>
  );
}

export default function Tech() {
  const { ref, isVisible } = useInView();

  return (
    <section id="tech" className={styles.section}>
      <div className="container">
        <div className={`${styles.header} fade-up ${isVisible ? 'visible' : ''}`} ref={ref}>
          <p className="section-label" style={{ justifyContent: 'center' }}>My Arsenal</p>
          <h2 className="section-title">Technologies I <span>build with</span></h2>
          <p>Every orbit represents a layer of the stack — hover any icon to see the technology.</p>
        </div>

        <div className={styles.wrap}>
          {/* Centre */}
          <div className={styles.center}>
            <span>FULL<br />STACK</span>
          </div>

          {/* Ring 1 — Frontend */}
          <TechRing
            items={TECH_RINGS.r1}
            radius={110}
            duration={18}
            direction="normal"
            ringClass={styles.ring1}
            counterDuration={18}
          />

          {/* Ring 2 — Backend */}
          <TechRing
            items={TECH_RINGS.r2}
            radius={170}
            duration={28}
            direction="reverse"
            ringClass={styles.ring2}
            counterDuration={28}
          />

          {/* Ring 3 — Tools */}
          <TechRing
            items={TECH_RINGS.r3}
            radius={230}
            duration={38}
            direction="normal"
            ringClass={styles.ring3}
            counterDuration={38}
          />
        </div>
      </div>
    </section>
  );
}
