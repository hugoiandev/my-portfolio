import React from 'react'
import styles from './ProjectItem.module.scss'
import { gsap } from 'gsap'
import {
  ButtonElement,
  DivElement,
  HeadingElement,
  ParagraphElement,
  SpanElement
} from '../../Utils/types'

interface ProjectItemProps {
  title: string
  text: string
  src: string
  alt: string
  techSrc: []
  url: string
}

interface TechSrc {
  img: {
    url: string
    alt: string
  }
}

const ProjectItem = ({ title, text, src, alt, techSrc, url}: ProjectItemProps, key: string): JSX.Element => {
  const project = React.useRef<DivElement>(null)

  const titleAbout = React.useRef<HeadingElement>(null)
  const textAbout = React.useRef<ParagraphElement>(null)
  const titleTech = React.useRef<SpanElement>(null)
  const techImgs = React.useRef<DivElement>(null)
  const button = React.useRef<ButtonElement>(null)
  const imgProject = React.useRef<DivElement>(null)

  React.useEffect(() => {

    const animaProject = (): void => {
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
        delay: 1.5
      })
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animaProject()
      }
    })

    if (project.current) {
      observer.observe(project.current)
    }
  }, [])

  return (
    <div key={key} className={styles.containerItem}>
      <div ref={project} className={styles.about}>
        <h2 ref={titleAbout}>{title}</h2>
        <p ref={textAbout}>{text}</p>
        <div className={styles.tech}>
          <span ref={titleTech}>Tecnologias</span>
          <div ref={techImgs} className={styles.techSource}>
            {techSrc && techSrc.map((item: TechSrc, index: number): JSX.Element => {
              return (
                <img key={`${item.img.alt}-${index}`} src={item.img.url} alt={item.img.alt} />
              )
            })}
          </div>
        </div>
        <a className={styles.link} target='_blank' rel='noreferrer' href={url}>
          <button ref={button} className={styles.button}>
            <span>Ver projeto</span>
            <span>Ir</span>
          </button>
        </a>
      </div>
      <div className={styles.containerImg}>
        <div ref={imgProject} className={styles.imgItem}>
          <img src={src} alt={alt} />
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
