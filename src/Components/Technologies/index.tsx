import React from 'react'
import styles from './Technologies.module.scss'
import { DivElement } from '../../Utils/types'

type Srcs = { src: string, alt: string }


const Technologies = (): JSX.Element => {
  const techContent = React.useRef<DivElement>(null)
  const [srcs, setSrcs] = React.useState<Srcs[]>([])

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
      {srcs && srcs.map((item: { src: string, alt: string }, index): JSX.Element => {
        return (
          <img
            key={`${item.alt}-${index}`}
            src={item.src}
            alt={item.alt}
          />
        )
      })}
    </div>
  )
}

export default Technologies
