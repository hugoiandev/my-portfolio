import React from 'react'
import { Helmet } from 'react-helmet'
import Button from '../../Components/Button'
import Technologies from '../../Components/Technologies'
import Load from '../../Components/Load'
import IntroText from '../../Components/IntroText'
import styles from './Home.module.scss'

const Home = (): JSX.Element => {

  return (
    <>
      <section className={styles.home}>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <div className={styles.containerTitle}>
          <h1 className={styles.title}>
            <IntroText text={['Olá', 'Hello', 'Hola', '你好']} delay={0} />
            <IntroText text={['Seja bem vindo', 'Welcome', 'Sea bienvenido', '欢迎']} delay={0.2} />
            <IntroText text={['Sou dev Front-end', "I'm dev Front-end", 'Soy dev Front-end', '我是开发前端']} delay={0.4} />
          </h1>
        </div>
        <Button link='/projects' textOne='Projetos' textTwo='Ir' />
      </section>
      <Technologies />
      <Load text='Hello' />
    </>
  )
}

export default Home
