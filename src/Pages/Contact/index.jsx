import React from 'react'
import Container from '../../Components/Container'
import Preload from '../../Components/Preload'
import Title from '../../Components/Title'
import styles from './Contact.module.scss'

const Contact = () => {
  return (
    <>
      <Container>
        <section className={styles.contact}>
          <Title text='Contato' />
          <div className={styles.containerContact}>
            <div className={styles.email}>
              <span>MANDE UM EMAIL</span>
              <span>
                <a href='mailto:hugofrontdev@gmail.com'>hugofrontdev@gmail.com</a>
              </span>
            </div>
            <div className={styles.redes}>
              <span>REDES SOCIAIS</span>
            </div>
          </div>
        </section>
      </Container>
      <Preload text='Contato' />
    </>
  )
}

export default Contact
