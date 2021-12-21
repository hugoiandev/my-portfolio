import React from 'react'
import styles from './Technologies.module.scss'

const Technologies = () => {
  const techContent = React.useRef()
  const [srcs, setSrcs] = React.useState([])

  React.useEffect(() => {

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
  }, [])

  return (
    <div ref={techContent} className={styles.technologies}>
      {srcs && srcs.map((item, index) => {
        return (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
          />
        )
      })}
    </div>
  )
}

export default Technologies
