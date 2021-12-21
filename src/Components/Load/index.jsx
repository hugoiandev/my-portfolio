import React from 'react'
import styles from './Preload.module.scss'
import { gsap, Power4 } from 'gsap'

const Load = ({ text }) => {
  const load = React.useRef()
  const loadText = React.useRef()

  React.useEffect(() => {
    const animaOverload = () => {
      gsap.to(load.current, {
        height: '0vh',
        duration: 1,
        delay: 0.8,
        ease: Power4.easeInOut,
        display: 'none'
      })

      gsap.to(loadText.current, {
        y: -50,
        duration: 0.5,
        delay: 0.5,
        opacity: 0,
        display: 'none'
      })
    }

    animaOverload()

  }, [])

  return (
    <div ref={load} className={styles.preload}>
      <div className={styles.preloadContent}>
        <span ref={loadText}>{text}</span>
      </div>
    </div>
  )
}

export default Load
