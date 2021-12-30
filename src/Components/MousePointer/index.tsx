import React from 'react'
import styles from './MousePointer.module.scss'
import { gsap } from 'gsap'
import { DivElement } from '../../Utils/types'

const MousePointer = (): JSX.Element => {
  const refPointer = React.useRef<DivElement>(null)

  React.useEffect(() => {
    const initMousePointer = (): void => {
      window.addEventListener('mousemove', (event: MouseEvent) => {
        const clientY: number = event.clientY - 20
        const clientX: number = event.clientX - 20

        gsap.to(refPointer.current, {
          y: clientY,
          x: clientX,
          duration: 0.3,
          ease: 'cubic-bezier(.23,1,.32,1)'
        })
      })
    }

    if (window.innerWidth > 800) {
      initMousePointer()
    }

  }, [])

  return (
    <div ref={refPointer} className={styles.pointer}></div>
  )
}

export default MousePointer
