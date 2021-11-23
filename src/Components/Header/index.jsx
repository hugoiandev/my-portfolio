import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import { gsap } from 'gsap'

const Header = () => {
  // Status menu mobile
  const [menuMobile, setmenuMobile] = React.useState(false)
  // Ref contact
  const contatoMenu = React.useRef()
  // Ref menu list
  const menuList = React.useRef()

  // Refs of menu links
  const linkHome = React.useRef()
  const linkProject = React.useRef()
  const linkAbout = React.useRef()
  const linkContact = React.useRef()

  // Refs of contact
  const contactTitle = React.useRef()
  const contactSpan = React.useRef()
  const contactLinkedin = React.useRef()
  const contactGithub = React.useRef()

  React.useEffect(() => {

    const animaMenu = () => {
      if (menuMobile) {
        gsap.to(menuList.current, {
          height: '80vh',
          duration: 0.5
        })
  
        gsap.to(contatoMenu.current, {
          height: '80vh',
          duration: 0.5,
          delay: 0.6
        })
      } else {
        gsap.to(contatoMenu.current, {
          height: '0vh',
          duration: 0.5,
          delay: 0.5
        })
  
        gsap.to(menuList.current, {
          height: '0vh',
          duration: 0.5,
          delay: 1
        })
      }
    }

    const animaLinks = () => {

      if (menuMobile) {
        gsap.to(linkHome.current, {
          duration: 0.7,
          y: 0,
          delay: 0.5,
          opacity: 1
        })
        gsap.to(linkProject.current, {
          duration: 0.7,
          y: 0,
          delay: 0.5,
          opacity: 1
        })
        gsap.to(linkAbout.current, {
          duration: 0.7,
          y: 0,
          delay: 0.5,
          opacity: 1
        })
        gsap.to(linkContact.current, {
          duration: 0.7,
          y: 0,
          delay: 0.5,
          opacity: 1
        })

      } else {
        gsap.to(linkHome.current, {
          duration: 0.7,
          y: 70,
          delay: 0.5,
          opacity: 0
        })
        gsap.to(linkProject.current, {
          duration: 0.7,
          y: 70,
          delay: 0.5,
          opacity: 0
        })
        gsap.to(linkAbout.current, {
          duration: 0.7,
          y: 70,
          delay: 0.5,
          opacity: 0
        })
        gsap.to(linkContact.current, {
          duration: 0.7,
          y: 70,
          delay: 0.5,
          opacity: 0
        })
      }
    }

    const animaContact = () => {
      if (menuMobile) {
        gsap.to(contactTitle.current, {
          duration: 0.7,
          y: 0,
          delay: 1,
          opacity: 1
        })
        gsap.to(contactSpan.current, {
          duration: 0.7,
          y: 0,
          delay: 1,
          opacity: 1
        })
        gsap.to(contactLinkedin.current, {
          duration: 0.7,
          y: 0,
          delay: 1,
          opacity: 1
        })
        gsap.to(contactGithub.current, {
          duration: 0.7,
          y: 0,
          delay: 1,
          opacity: 1
        })

      } else {
        gsap.to(contactTitle.current, {
          duration: 0.7,
          y: 50,
          delay: 0.1,
          opacity: 0
        })
        gsap.to(contactSpan.current, {
          duration: 0.7,
          y: 50,
          delay: 0.1,
          opacity: 0
        })
        gsap.to(contactLinkedin.current, {
          duration: 0.7,
          y: 50,
          delay: 0.1,
          opacity: 0
        })
        gsap.to(contactGithub.current, {
          duration: 0.7,
          y: 50,
          delay: 0.1,
          opacity: 0
        })
      }
    }
    animaMenu()
    animaLinks()
    animaContact()

  }, [menuMobile])

  return (
    <header className={styles.header}>
      <div>
        <Link className={styles.logo} to='/'>Hugo Ian</Link>
      </div>
      <nav className={styles.menu}>
        <button
          onClick={() => setmenuMobile(!menuMobile)}
        >
          <div
            className={menuMobile ? styles.menuMobileOpen : styles.menuMobileClosed}
          />
        </button>
        <div className={styles.menuContent}>
          <div ref={contatoMenu} className={styles.contato}>
            <div>
              <div>
                <h2 ref={contactTitle}>Entre em contato</h2>
              </div>
              <div>
                <span ref={contactSpan}>hugofrontdev@gmail.com</span>
              </div>
              <div>
                <a ref={contactLinkedin} href="https://linkedin.com/in/hugoian">Linkedin</a>
                <a ref={contactGithub} href="https://github.com/hugoiandev">GITHUB</a>
              </div>
            </div>
          </div>
          <div ref={menuList} className={styles.menuList}>
            <ul>
              <div>
                <li ref={linkHome}><Link to='/'>Home</Link></li>
              </div>
              <div>
                <li ref={linkProject}><Link to='/projetos'>Projetos</Link></li>
              </div>
              <div>
                <li ref={linkAbout}><Link to='/sobre'>Sobre</Link></li>
              </div>
              <div>
                <li ref={linkContact}><Link to='/contato'>Contato</Link></li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
