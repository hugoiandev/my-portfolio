import React from 'react'
import styles from './IntroText.module.scss'
import { gsap } from 'gsap'
import { DivElement } from '../../Utils/types'

interface IntroTextProps {
  text: string[]
  delay: number
}

const IntroText = ({ text, delay }: IntroTextProps): JSX.Element => {
  const refCube = React.useRef<DivElement>(null)
  const [rotateText, setRotateText] = React.useState(0)

  React.useEffect(() => {
    gsap.to(refCube.current, {
      rotateX: rotateText,
      duration: 0.5,
      delay: delay
    })
    
    const timer = setInterval((): void => {
      setRotateText(rotateText - 90)
      return clearInterval(timer)
  
    }, 4000)

    return () => {
      clearInterval(timer)
    }
  }, [rotateText, delay])

  return (
    <div ref={refCube} className={styles.containerCube}>
      {text && text.map((item: string, index: number): JSX.Element => {
        return (
          <span
            className={styles.text}
            key={`${item}-${index}`}
          >
            {item}
          </span>
        )
      })}
    </div>
  )
}

export default IntroText
