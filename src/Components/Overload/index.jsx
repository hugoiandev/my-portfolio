import React from 'react'
import styles from './Overload.module.scss'
import { gsap, Power4 } from 'gsap'

const Overload = ({ text }) => {
  const overload = React.useRef()
  const overloadText = React.useRef()

  React.useEffect(() => {
    const animaOverload = () => {
      gsap.to(overload.current, {
        height: '0vh',
        duration: 1,
        delay: 0.8,
        ease: Power4.easeInOut,
        display: 'none'
      })

      gsap.to(overloadText.current, {
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
    <div ref={overload} className={styles.overload}>
      <div className={styles.overloadContent}>
        <span ref={overloadText}>{text}</span>
      </div>
    </div>
  )
}

export default Overload
