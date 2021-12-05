import React from 'react'
import Container from '../../Components/Container'
import Preload from '../../Components/Preload'
import Title from '../../Components/Title'
import styles from './About.module.scss'
import { gsap } from 'gsap'

const About = () => {
  const refText = React.useRef()
  const refPhoto = React.useRef()

  React.useEffect(() => {
    const animaAbout = () => {
      gsap.to(refText.current, {
        y: 0,
        duration: 1,
        delay: 2,
        opacity: 1
      })

      gsap.to(refPhoto.current, {
        y: 0,
        duration: 1,
        delay: 2.5,
        opacity: 1
      })
    }

    animaAbout()

  }, [])

  return (
    <>
      <Container>
        <section className={styles.about}>
          <Title text='Sobre' />
          <div className={styles.aboutContainer}>
            <article ref={refText} className={styles.textAbout}>
              <p>Olá, meu nome é Hugo, tenho 23 anos e atualmente moro em Hortolândia/SP, gosto bastante de ouvir músicas e programar. Desde meus 13 anos eu já sentia essa paixão tecnologica, mas ingressei na área de desenvolvimento no final do ano de 2019 e foi ai que realmente entrei nesse mundo, atualmente tenho focado meus estudos no desenvolvimento web onde tenho mais familiariadade, tenho conhecimento em ReactJS, NextJS, Sass, Styled components e o básico de Api's com NodeJS.</p>
            </article>
            <div ref={refPhoto} className={styles.imgAbout}>
              <img src="img-about.jpg" alt="Foto Hugo" />
            </div>
          </div>
        </section>
      </Container>
      <Preload text='Sobre' />
    </>
  )
}

export default About
