import React from 'react'
import styles from './Title.module.scss'

const Title = ({ text }) => {
  const title = React.useRef()

  return (
    <div className={styles.containerTitle}>
      <h1 ref={title} className={styles.title}>{text}</h1>
    </div>
  )
}

export default Title
