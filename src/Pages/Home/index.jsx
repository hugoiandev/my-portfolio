import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.scss'
import { gsap } from 'gsap'

const Home = () => {
  const titleOne = React.useRef()
  const titleTwo = React.useRef()
  const titleThree = React.useRef()
  const button = React.useRef()
  
  React.useEffect(() => {
    gsap.to(titleOne.current, {
      opacity: 1,
      y: 0,
      duration: 0.7
    })
    gsap.to(titleTwo.current, {
      opacity: 1,
      delay: 0.2,
      y: 0,
      duration: 0.7
    })
    gsap.to(titleThree.current, {
      opacity: 1,
      delay: 0.4,
      y: 0,
      duration: 0.7
    })

    gsap.to(button.current, {
      opacity: 1,
      delay: 0.6,
      y: 0,
      duration: 0.7
    })
  },[])


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
      <div className={styles.button}>
        <Link to='/sobre'>
          <button ref={button}>
            Sobre
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Home
