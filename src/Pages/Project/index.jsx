import React from 'react'
import Container from '../../Components/Container'
import Preload from '../../Components/Preload'
import ProjectItem from '../../Components/ProjectItem'
import Title from '../../Components/Title'
import styles from './Project.module.scss'


const Project = () => {

  return (
    <>
      <Container>
        <section className={styles.projects}>
          <Title text='Projetos' subTitle='Conheça meus projetos' />
          <div className={styles.item}>
            <ProjectItem
              name='Breaking Bad'
              text='Este app consome uma api publica da série Braking Bad, basicamente ele lista todos os personagens da série e quando clicado ele mostra os atributos e de quais episódeos eles participaram.'
              src='img-brb.jpg'
              alt='Imagem Breaking Bad'
              techSrc={['next_js.svg', 'icon-react-native.svg', 'icon-sass.svg']}
            />
            <ProjectItem
              name='Breaking Bad'
              text='Este app consome uma api publica da série Braking Bad, basicamente ele lista todos os personagens da série e quando clicado ele mostra os atributos e de quais episódeos eles participaram.'
              src='img-brb.jpg'
              alt='Imagem Breaking Bad'
              techSrc={['next_js.svg', 'icon-react-native.svg', 'icon-sass.svg']}
            />
            <ProjectItem
              name='Breaking Bad'
              text='Este app consome uma api publica da série Braking Bad, basicamente ele lista todos os personagens da série e quando clicado ele mostra os atributos e de quais episódeos eles participaram.'
              src='img-brb.jpg'
              alt='Imagem Breaking Bad'
              techSrc={['next_js.svg', 'icon-react-native.svg', 'icon-sass.svg']}
            />
          </div>
        </section>
      </Container>
      <Preload text='Projetos' />
    </>
  )
}

export default Project
