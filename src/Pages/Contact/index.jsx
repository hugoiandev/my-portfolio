import React from 'react'
import { Helmet } from 'react-helmet'
import Container from '../../Components/Container'
import Load from '../../Components/Load'
import Title from '../../Components/Title'
import styles from './Contact.module.scss'
import { gsap } from 'gsap'

const Contact = () => {
  const refEmail = React.useRef()
  const refIcons = React.useRef()

  React.useEffect(() => {
    const animaContact = () => {
      gsap.to(refEmail.current, {
        x: 0,
        duration: 0.5,
        delay: 1.8
      })

      gsap.to(refIcons.current, {
        x: 0,
        duration: 0.5,
        delay: 2.2
      })
    }

    animaContact()
  }, [])

  return (
    <>
      <Container>
        <section className={styles.contact}>
          <Helmet>
            <title>Contato</title>
          </Helmet>
          <Title text='Contato' subTitle='Entre em contato' />
          <div className={styles.containerContact}>
            <div className={styles.email}>
              <span>MANDE UM EMAIL</span>
              <span>
                <a ref={refEmail} href='mailto:hugofrontdev@gmail.com'>hugofrontdev@gmail.com</a>
              </span>
            </div>
            <div className={styles.redes}>
              <span>REDES SOCIAIS</span>
              <div className={styles.icons}>
                <div ref={refIcons}>
                  <a target='_blank'
                    rel='noreferrer'
                    href="https://linkedin.com/in/hugoian"
                  >
                    <img src="icon-linkedin.svg" alt="Icone Linkedin" />
                  </a>
                  <a target='_blank'
                    rel='noreferrer'
                    href="https://github.com/hugoiandev"
                  >
                    <img src="icon-github-contact.svg" alt="Icone Github" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <Load text='Contato' />
    </>
  )
}

export default Contact
