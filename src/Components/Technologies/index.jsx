import React from 'react'
import styles from './Technologies.module.scss'
import { gsap } from 'gsap'

const Technologies = () => {
  const techContent = React.useRef()
  const [srcs, setSrcs] = React.useState([])

  React.useEffect(() => {
    const animeTech = () => {
      const width = techContent.current.offsetWidth

      // Gsap animation
      gsap.fromTo(techContent.current, {
        x: '100vw',
        duration: 10,
        ease: 'linear',
        repeat: -1
      }, {
        x: -width,
        duration: 10,
        ease: 'linear',
        repeat: -1
      })
    }

    setSrcs([
      {
        src: 'icon-javascript.svg',
        alt: 'Icone Javascript'
      },
      {
        src: 'icon-react-native.svg',
        alt: 'Icone React'
      },
      {
        src: 'icon-sass.svg',
        alt: 'Icone Sass'
      },
      {
        src: 'icon-github.svg',
        alt: 'Icone Github'
      },
      {
        src: 'icon-git.svg',
        alt: 'Icone Git'
      }
    ])

    animeTech()
  }, [])

  return (
    <div ref={techContent} className={styles.technologies}>
      {srcs && srcs.map((item) => {
        return (
          <img src={item.src} alt={item.alt} />
        )
      })}
    </div>
  )
}

export default Technologies
