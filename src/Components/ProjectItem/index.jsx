import React from 'react'
import styles from './ProjectItem.module.scss'
import { gsap } from 'gsap'

const ProjectItem = ({ name, text, src, alt, techSrc }) => {
  const titleAbout = React.useRef()
  const textAbout = React.useRef()
  const titleTech = React.useRef()
  const techImgs = React.useRef()
  const button = React.useRef()
  const imgProject = React.useRef()

  const project = React.useRef()

  React.useEffect(() => {


    const animaProject = () => {
      gsap.to(titleAbout.current, {
        x: 0,
        duration: 0.5,
        delay: 0.2
      })
      gsap.to(textAbout.current, {
        x: 0,
        duration: 0.4,
        delay: 0.4
      })
      gsap.to(titleTech.current, {
        x: 0,
        duration: 0.5,
        delay: 0.6
      })
      gsap.to(techImgs.current, {
        x: 0,
        duration: 0.5,
        delay: 0.8
      })
      gsap.to(button.current, {
        x: 0,
        duration: 0.5,
        delay: 1
      })
      gsap.to(imgProject.current, {
        x: 0,
        duration: 0.5,
        delay: 1.2
      })
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animaProject()
      }
    })

    observer.observe(project.current)
  }, [])

  return (
    <div className={styles.containerItem}>
      <div ref={project} className={styles.about}>
        <h2 ref={titleAbout}>{name}</h2>
        <p ref={textAbout}>{text}</p>
        <div className={styles.tech}>
          <span ref={titleTech}>Tecnologias</span>
          <div ref={techImgs} className={styles.techSource}>
            {techSrc.map((src, index) => {
              return (
                <img key={index} src={src} alt={index} />
              )
            })}
          </div>
        </div>
        <button ref={button} className={styles.button}>
          Ver projeto
        </button>
      </div>
      <div className={styles.imgItem}>
        <img ref={imgProject} src={src} alt={alt} />
      </div>
    </div>
  )
}

export default ProjectItem
