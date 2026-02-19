import { certifications } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Certifications.module.css'

function CertItem({ cert }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={`${styles.item} reveal`}>
      <div className={styles.issuer}>{cert.issuer}</div>
      <div className={styles.name}>{cert.name}</div>
    </div>
  )
}

export default function Certifications() {
  return (
    <section id="certs" className={styles.section}>
      <div className={styles.sectionLabel}>Certifications</div>
      <div className={styles.grid}>
        {certifications.map((cert) => (
          <CertItem key={cert.name} cert={cert} />
        ))}
      </div>
    </section>
  )
}
