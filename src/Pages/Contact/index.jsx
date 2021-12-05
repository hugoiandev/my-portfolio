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
        </section>
      </Container>
      <Preload text='Contato' />
    </>
  )
}

export default Contact
