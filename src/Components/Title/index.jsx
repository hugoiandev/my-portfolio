import React from 'react'
import styles from './Title.module.scss'
import { gsap } from 'gsap'

const Title = ({ text, subTitle }) => {
  const title = React.useRef()
  const sub = React.useRef()

  React.useEffect(() => {
    const animaTitle = () => {
      gsap.to(sub.current, {
        y: 0,
        duration: 1,
        delay: 1.5,
        opacity: 1
      })
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
      <div className={styles.containerSubtitle}>
        <span ref={sub}>{subTitle}</span>
      </div>
      <div className={styles.textTitle}>
        <h1 ref={title} className={styles.title}>{text}</h1>
      </div>
    </div>
  )
}

export default Title
