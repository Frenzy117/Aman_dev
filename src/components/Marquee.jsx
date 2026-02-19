import { marqueeItems } from '../data/content'
import styles from './Marquee.module.css'

export default function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems]

  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>{item}</span>
        ))}
      </div>
    </div>
  )
}
