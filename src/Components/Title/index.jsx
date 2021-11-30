import React from 'react'
import styles from './Title.module.scss'
import { gsap } from 'gsap'

const Title = ({ text }) => {
  const title = React.useRef()

  React.useEffect(() => {
    const animaTitle = () => {
      gsap.to(title.current, {
        y: 0,
        duration: 1,
        delay: 1.5,
        opacity: 1
      })
    }

    animaTitle()
  }, [])

  return (
    <div className={styles.containerTitle}>
      <h1 ref={title} className={styles.title}>{text}</h1>
    </div>
  )
}

export default Title
