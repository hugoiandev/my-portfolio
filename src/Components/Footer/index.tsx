import React from 'react'
import styles from './Footer.module.scss'
import { gsap } from 'gsap'
import { LinkElement } from '../../Utils/types'

const Footer = (): JSX.Element => {
  const refEmail = React.useRef<LinkElement>(null)

  React.useEffect(() => {
    const mutationObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        gsap.to(refEmail.current, {
          y: 0,
          duration: 0.5,
          delay: 0.2,
          opacity: 1
        })
        mutationObserver.disconnect()
      }
    })
  
    if (refEmail.current) {
      mutationObserver.observe(refEmail.current)
    }
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <span className={styles.email}>
          <a ref={refEmail} href="mailto:hugofrontdev@gmail.com">hugofrontdev@gmail.com</a>
        </span>
        <div className={styles.social}>
          <p className={styles.copy}>@2021Hugo Ian</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
