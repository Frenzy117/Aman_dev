import { experience } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Experience.module.css'

function ExpItem({ item }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={`${styles.item} reveal`}>
      <div className={styles.left} style={{padding: '2vh'}}>
        <div className={styles.period}>{item.period}</div>
        <div className={styles.company}>{item.company}</div>
      </div>
      <div className={styles.right}>
        <div className={styles.role}>{item.role}</div>
        <div className={styles.location}>{item.location}</div>
        <ul className={styles.bullets}>
          {item.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.sectionLabel}>Professional Experience</div>
      <div className={styles.grid}>
        {experience.map((item) => (
          <ExpItem key={item.company} item={item} />
        ))}
      </div>
    </section>
  )
}
