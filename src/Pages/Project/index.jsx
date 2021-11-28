import React from 'react'
import Container from '../../Components/Container'
import Overload from '../../Components/Overload'
import styles from './Project.module.scss'

const Project = () => {
  return (
    <>
      <Container>
        <section className={styles.projects}>
          <div className={styles.containerTitle}>
            <h1 className={styles.title}>Projetos</h1>
          </div>
          <div>
            <div></div>
            <img src="" alt="" />
          </div>
        </section>
      </Container>
      <Overload text='Projects' />
    </>
  )
}

export default Project
