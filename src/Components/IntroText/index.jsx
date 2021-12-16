import React from 'react'
import styles from './IntroText.module.scss'
import { gsap } from 'gsap'

const IntroText = ({ text, delay }) => {
  const refCube = React.useRef()
  const [rotateText, setRotateText] = React.useState(0)

  React.useEffect(() => {
    gsap.to(refCube.current, {
      rotateX: rotateText,
      duration: 0.5,
      delay: delay
    })
    
    const timer = setInterval(() => {
      setRotateText(rotateText - 90)
      return clearInterval(timer)
  
    }, 4000)

    return () => {
      clearInterval(timer)
    }
  }, [rotateText, delay])

  return (
    <div ref={refCube} className={styles.containerCube}>
      {text && text.map((item, index) => {
        return (
          <span
            className={styles.text}
            key={index}
          >
            {item}
          </span>
        )
      })}
    </div>
  )
}

export default IntroText
