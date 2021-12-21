import React from 'react'
import styles from './Preload.module.scss'
import { gsap, Power4 } from 'gsap'

const Preload = ({ text }) => {
  const preload = React.useRef()
  const preloadText = React.useRef()

  React.useEffect(() => {
    const animaOverload = () => {
      gsap.to(preload.current, {
        height: '0vh',
        duration: 1,
        delay: 0.8,
        ease: Power4.easeInOut,
        display: 'none'
      })

      gsap.to(preloadText.current, {
        y: -50,
        duration: 0.5,
        delay: 0.5,
        opacity: 0,
        display: 'none'
      })
    }

    //animaOverload()

  }, [])

  return (
    <div ref={preload} className={styles.preload}>
      <div className={styles.preloadContent}>
        <span ref={preloadText}>{text}</span>
      </div>
    </div>
  )
}

export default Preload
