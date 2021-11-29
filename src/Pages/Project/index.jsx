import React from 'react'
import Container from '../../Components/Container'
import Overload from '../../Components/Overload'
import ProjectItem from '../../Components/ProjectItem'
import Title from '../../Components/Title'
import styles from './Project.module.scss'

const Project = () => {

  return (
    <>
      <Container>
        <section className={styles.projects}>
          <Title text='Projetos' />
          <div className={styles.item}>
            <ProjectItem
              name='App Breaking Bad'
              text='Este app foi feito utilizando o framework Next Js'
              src='img-brb.jpg'
              alt='Imagem Breaking Bad'
            />
          </div>
        </section>
      </Container>
      <Overload text='Projects' />
    </>
  )
}

export default Project
