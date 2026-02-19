import { contactLinks } from '../data/content'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.bgText}>Let's build.</div>
      <div className={styles.layout}>
        <div>
          <h2 className={styles.heading}>
            Let's<br />build something<br /><em>quiet</em><br />and powerful.
          </h2>
          <p className={styles.sub}>
            Edison, NJ — Open to remote & on-site roles.<br />
            Currently building AI systems at Cognizant.
          </p>
        </div>
        <div className={styles.links}>
          {contactLinks.map((link) => (
            (link.label == 'Resume' ? 
              <a key={link.label} className={styles.link} rel ="noreferrer" href={link.href} download={true}>
                <div>
                  <div className={styles.linkLabel}>{link.label}</div>
                  <div className={styles.linkVal}>{link.value}</div>
              </div>
              </a>
            :
            <a key={link.label} href={link.href} className={styles.link} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              <div>
                <div className={styles.linkLabel}>{link.label}</div>
                <div className={styles.linkVal}>{link.value}</div>
              </div>
              <span className={styles.arrow}>↗</span>
            </a>
)))}
        </div>
      </div>
    </section>
  )
}
