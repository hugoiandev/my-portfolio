import React from 'react'
import Container from '../../Components/Container'
import Button from '../../Components/Button'
import Technologies from '../../Components/Technologies'
import Preload from '../../Components/Preload'
import styles from './Home.module.scss'
import { gsap } from 'gsap'

const Home = () => {
  const titleOne = React.useRef()
  const titleTwo = React.useRef()
  const titleThree = React.useRef()
  const buttonSobre = React.createRef()
  
  React.useEffect(() => {
    // Gsap animation
    const animeTitle = () => {
      gsap.to(titleOne.current, {
        opacity: 1,
        y: 0,
        duration: .7,
        delay: 1.5
      })
      gsap.to(titleTwo.current, {
        opacity: 1,
        delay: 1.7,
        y: 0,
        duration: .7
      })
      gsap.to(titleThree.current, {
        opacity: 1,
        delay: 1.9,
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

    animeTitle()
    
  },[buttonSobre])


  return (
    <>
      <Container>
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
          <Button ref={buttonSobre} linkTo='/projects' text='Projetos' />
        </section>
      </Container>
      <Technologies />
      <Preload text='Hello' />
    </>
  )
}

export default Home
