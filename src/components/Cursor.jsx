import { useEffect, useRef, useState } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [hovered, setHovered] = useState(false)
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })

  useEffect(() => {
    const onMove = (e) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX - 4 + 'px'
        dotRef.current.style.top = e.clientY - 4 + 'px'
      }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useEffect(() => {
    let raf
    const animate = () => {
      const { mx, my } = pos.current
      pos.current.rx += (mx - pos.current.rx - 16) * 0.12
      pos.current.ry += (my - pos.current.ry - 16) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = pos.current.rx + 'px'
        ringRef.current.style.top = pos.current.ry + 'px'
      }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    const targets = document.querySelectorAll('a, button, .project-card, .skill-pill')
    const enter = () => setHovered(true)
    const leave = () => setHovered(false)
    targets.forEach(el => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })
    return () => {
      targets.forEach(el => {
        el.removeEventListener('mouseenter', enter)
        el.removeEventListener('mouseleave', leave)
      })
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className={styles.dot} />
      <div ref={ringRef} className={`${styles.ring} ${hovered ? styles.hovered : ''}`} />
    </>
  )
}
