import React from 'react'
import Container from '../../Components/Container'
import Preload from '../../Components/Preload'
import Title from '../../Components/Title'
import styles from './About.module.scss'

const About = () => {
  return (
    <>
      <Container>
        <section className={styles.about}>
          <Title text='Sobre' />
          <div className={styles.textAbout}>
            <p>Olá, meu nome é Hugo, tenho 23 anos e atualmente moro em Hortolândia/SP, gosto bastante de ouvir músicas e programar, desde mais jovem eu já era interessado pela tecnologia, mas ingressei na área de desenvolvimento no final do ano de 2019 e foi paixão de primeira vista, atualmente tenho focado meus estudos no desenvolvimento web onde tenho mais familiariadade, tenho conhecimento em ReactJS, React Native, NextJS, Sass, Styled components e o basico de Api's com NodeJS</p>
          </div>
        </section>
      </Container>
      <Preload text='Sobre' />
    </>
  )
}

export default About
