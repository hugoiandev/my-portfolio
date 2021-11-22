import React from 'react'
import Button from '../../Components/Button'
import styles from './Home.module.scss'
import { gsap } from 'gsap'

const Home = () => {
  const titleOne = React.useRef()
  const titleTwo = React.useRef()
  const titleThree = React.useRef()
  const button = React.createRef()
  
  React.useEffect(() => {

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
  
      gsap.to(button.current, {
        opacity: 1,
        delay: 0.6,
        y: 0,
        duration: .7
      })
    }
    animeTitle()
    
  },[button])


  return (
    <section className={styles.home}>
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
      <Button ref={button} linkTo='/sobre' text='Sobre' />
    </section>
  )
}

export default Home
