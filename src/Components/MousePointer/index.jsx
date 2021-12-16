import React from 'react'
import styles from './MousePointer.module.scss'
import { gsap } from 'gsap'

const MousePointer = () => {
  const refPointer = React.useRef()

  React.useEffect(() => {
    window.addEventListener('mousemove', (event) => {
      const clientY = event.clientY - 20
      const clientX = event.clientX - 20

      gsap.to(refPointer.current, {
        y: clientY,
        x: clientX,
        duration: 0.3,
        ease: 'cubic-bezier(.23,1,.32,1)'
      })
      
    })
  }, [])

  return (
    <div ref={refPointer} className={styles.pointer}></div>
  )
}

export default MousePointer
