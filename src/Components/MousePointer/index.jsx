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
        duration: 0.2
      })
      
    })
  }, [])

  return (
    <div className={styles.cursor} ref={refPointer}>
      <div className={styles.pointer}></div>
    </div>
  )
}

export default MousePointer
