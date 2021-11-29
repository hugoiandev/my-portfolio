import React from 'react'
import styles from './ProjectItem.module.scss'

const ProjectItem = ({ link, name, text, src, alt }) => {
  return (
    <a className={styles.link} href={link}>
      <div className={styles.containerItem}>
        <div className={styles.about}>
          <h2>{name}</h2>
          <p>{text}</p>
        </div>
        <div className={styles.imgItem}>
          <img src={src} alt={alt} />
        </div>
      </div>
    </a>
  )
}

export default ProjectItem
