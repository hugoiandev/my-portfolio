import React from 'react'
import styles from './Technologies.module.scss'
import { gsap } from 'gsap'

const Technologies = () => {
  const techContent = React.useRef()

  React.useEffect(() => {
    const animeTech = () => {
      const width = techContent.current.offsetWidth

      // Gsap animation
      gsap.fromTo(techContent.current, {
        x: '100vw',
        duration: 20,
        ease: 'linear',
        repeat: -1
      }, {
        x: -width,
        duration: 20,
        ease: 'linear',
        repeat: -1
      })
    }

    animeTech()
  })

  return (
    <div ref={techContent} className={styles.technologies}>
      <img src="icon-node.svg" alt="" />
      <img src="icon-javascript.svg" alt="" />
      <img src="icon-react-native.svg" alt="" />
      <img src="icon-sass.svg" alt="" />
      <img src="icon-github.svg" alt="" />
      <img src="icon-git.svg" alt="" />
    </div>
  )
}

export default Technologies
