import styles from './Hero.module.css'

const stats = [
  { num: '3+', label: 'Years building' },
  { num: '4', label: 'Companies shipped' },
  { num: '5+', label: 'Live projects' },
  { num: '6', label: 'Certifications' },
]

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <div className={styles.eyebrow}>AI Engineer</div>
        <h1 className={styles.name}>
          Aman<br /><em>Saxena</em>
        </h1>
        <p className={styles.desc}>
          Building intelligent systems that quietly reshape how humans and machines collaborate. RAG pipelines, LLMs, semantic search — crafted with deliberate precision.
        </p>
        <a href="#contact" className={styles.cta}>
          Open to work <span>→</span>
        </a>
      </div>

      <div className={styles.right}>
        <div className={styles.status}>
          <span className={styles.dot} />
          Available for opportunities
        </div>
        <div className={styles.statsGrid}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statItem}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.scroll}>
        <div className={styles.scrollLine} />
        <span>scroll</span>
      </div>
    </section>
  )
}
