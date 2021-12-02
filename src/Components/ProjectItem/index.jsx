import React from 'react'
import styles from './ProjectItem.module.scss'

const ProjectItem = ({ link, name, text, src, alt, techSrc }) => {
  return (
    <a className={styles.link} href={link}>
      <div className={styles.containerItem}>
        <div className={styles.about}>
          <h2>{name}</h2>
          <p>{text}</p>
          <div className={styles.tech}>
            <span>Tecnologias</span>
            <div className={styles.techSource}>
              {techSrc.map((src, index) => {
                return (
                  <img key={index} src={src} alt={index} />
                )
              })}
            </div>
          </div>
          <button className={styles.button}>
              Ver mais
          </button>
        </div>
        <div className={styles.imgItem}>
          <img src={src} alt={alt} />
        </div>
      </div>
    </a>
  )
}

export default ProjectItem
