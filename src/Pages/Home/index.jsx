import React from 'react'
import Button from '../../Components/Button'
import styles from './Home.module.scss'
import { gsap } from 'gsap'

const Home = () => {
  const titleOne = React.useRef()
  const titleTwo = React.useRef()
  const titleThree = React.useRef()
  const buttonSobre = React.createRef()
  const techContent = React.useRef()
  
  React.useEffect(() => {
    // Title animation
    const animeTitle = () => {
      gsap.to(titleOne.current, {
        opacity: 1,
        y: 0,
        duration: .7
      })
      gsap.to(titleTwo.current, {
        opacity: 1,
        delay: 0.2,
        y: 0,
        duration: .7
      })
      gsap.to(titleThree.current, {
        opacity: 1,
        delay: 0.4,
        y: 0,
        duration: .7
      })
  
      gsap.to(buttonSobre.current, {
        opacity: 1,
        delay: 0.6,
        y: 0,
        duration: .7
      })
    }

    // Tech animation
    const animeTech = () => {
      const width = techContent.current.offsetWidth
      gsap.fromTo(techContent.current, {
        x: width,
        duration: 20,
        ease: 'linear',
        repeat: -1
      }, {
        x: -width,
        duration: 20,
        ease: 'linear',
        repeat: -1
        
      })
    }

    animeTech()
    animeTitle()
    
  },[buttonSobre])


  return (
    <>
      <section className={styles.home}>
        <div className={styles.containerTitle}>
          <h1 className={styles.title}>
            <div>
              <span ref={titleOne}>OLÁ</span>
            </div>
            <div>
              <span ref={titleTwo}>SEJA BEM VINDO</span>
            </div>
            <div>
              <span ref={titleThree}>SOU DEV FRONT-END</span>
            </div>
          </h1>
        </div>
        <Button ref={buttonSobre} linkTo='/sobre' text='Sobre' />
        <div ref={techContent} className={styles.technologies}>
          <img src="icon-node.svg" alt="" />
          <img src="icon-javascript.svg" alt="" />
          <img src="icon-react-native.svg" alt="" />
          <img src="icon-sass.svg" alt="" />
          <img src="icon-github.svg" alt="" />
          <img src="icon-git.svg" alt="" />
        </div>
      </section>
    </>
  )
}

export default Home
