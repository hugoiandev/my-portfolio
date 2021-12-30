import React from 'react'
import { Helmet } from 'react-helmet'
import Container from '../../Components/Container'
import Load from '../../Components/Load'
import Title from '../../Components/Title'
import styles from './About.module.scss'
import { gsap } from 'gsap'
import { ArticleElement, DivElement } from '../../Utils/types'

const About = (): JSX.Element => {
  const refText = React.useRef<ArticleElement>(null)
  const refPhoto = React.useRef<DivElement>(null)

  React.useEffect(() => {
    const animaAbout = (): void => {
      gsap.to(refText.current, {
        y: 0,
        duration: 0.8,
        delay: 2,
        opacity: 1
      })

      gsap.to(refPhoto.current, {
        y: 0,
        duration: 0.8,
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
          <Helmet>
            <title>Sobre</title>
          </Helmet>
          <Title text='Sobre' subTitle='Conheça mais sobre mim' />
          <div className={styles.aboutContainer}>
            <article ref={refText} className={styles.textAbout}>
              <p>Olá, meu nome é <span className={styles.myName}>Hugo</span>, tenho 23 anos e atualmente moro em Hortolândia/SP, gosto bastante de ouvir músicas e programar. Desde meus 13 anos eu já sentia essa paixão tecnologica, mas ingressei na área de desenvolvimento no final do ano de 2019 e foi ai que realmente entrei nesse mundo, atualmente tenho focado meus estudos no desenvolvimento web onde tenho mais familiariadade, tenho conhecimento em ReactJS, NextJS, Sass, Styled components e o básico de Api's com NodeJS.</p>
            </article>
            <div ref={refPhoto} className={styles.imgAbout}>
              <img src="img-about.jpg" alt="Foto Hugo" />
            </div>
          </div>
        </section>
      </Container>
      <Load text='Sobre' />
    </>
  )
}

export default About
