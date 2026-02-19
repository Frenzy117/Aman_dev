import { projects } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Projects.module.css'

function ProjectCard({ project }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={`${styles.card} reveal project-card`}>
      <div className={styles.num}>{project.num}</div>
      <div className={styles.title}>{project.title}</div>
      <p className={styles.desc}>{project.desc}</p>
      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
      <a href={project.link} className={styles.arrow}>→</a>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.sectionLabel}>Selected Projects</div>
      <div className={styles.grid}>
        {projects.map((p) => (
          <ProjectCard key={p.num} project={p} />
        ))}
      </div>
    </section>
  )
}
