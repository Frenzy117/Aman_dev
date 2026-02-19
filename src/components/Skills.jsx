import { skills } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Skills.module.css'

function SkillCategory({ cat }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={`${styles.category} reveal`}>
      <div className={styles.catName}>{cat.category}</div>
      <div className={styles.pills}>
        {cat.items.map((item) => (
          <span key={item} className={`${styles.pill} skill-pill`}>{item}</span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.sectionLabel}>Technical Skills</div>
      <div className={styles.layout}>
        <div className={styles.intro}>
          Tools are<br />
          <em>nothing</em> without<br />
          the craft to<br />
          wield them.
        </div>
        <div className={styles.categories}>
          {skills.map((cat) => (
            <SkillCategory key={cat.category} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  )
}
