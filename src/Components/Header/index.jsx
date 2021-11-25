import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import { gsap } from 'gsap'

const Header = () => {
  // State menu mobile
  const [menuMobile, setmenuMobile] = React.useState(false)
  // Ref menu content
  const menuContent = React.useRef()
  // Ref menu list
  const menuList = React.useRef()

  // Refs of menu links
  const linkHome = React.useRef()
  const linkProject = React.useRef()
  const linkAbout = React.useRef()
  const linkContact = React.useRef()

  // Gsap animation
  React.useEffect(() => {
    // Show menu
    const showMenu = () => {
      if (menuMobile) {
        gsap.to(menuContent.current, {
          y: 0,
          duration: 0.5
        })
      } else {
        gsap.to(menuContent.current, {
          y: '-100vh',
          duration: 0.5,
          delay: 1
        })
      }
    }

    const showMenuItem = () => {
      if (menuMobile) {
        gsap.to(linkHome.current, {
          y: 0,
          duration: 0.5,
          delay: 0.4
        })
        gsap.to(linkProject.current, {
          y: 0,
          duration: 0.5,
          delay: 0.6
        })
        gsap.to(linkAbout.current, {
          y: 0,
          duration: 0.5,
          delay: 0.8
        })
        gsap.to(linkContact.current, {
          y: 0,
          duration: 0.5,
          delay: 1
        })
      } else {
        gsap.to(linkHome.current, {
          y: 110,
          duration: 0.5,
          delay: 0.6
        })
        gsap.to(linkProject.current, {
          y: 110,
          duration: 0.5,
          delay: 0.4
        })
        gsap.to(linkAbout.current, {
          y: 110,
          duration: 0.5,
          delay: 0.2
        })
        gsap.to(linkContact.current, {
          y: 110,
          duration: 0.5
        })
      }
    }
    showMenu()
    showMenuItem()

  }, [menuMobile])

  return (
    <header className={styles.header}>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <div className={styles.logo}>
          <h2>HUGO IAN</h2>
          <span>Front-end developer</span>
        </div>
      </Link>
      <nav className={styles.menu}>
        <button
          onClick={() => setmenuMobile(!menuMobile)}
        >
          <div
            className={menuMobile ? styles.menuMobileOpen : styles.menuMobileClosed}
          />
        </button>
        <div ref={menuContent} className={styles.menuContent}>
          <div ref={menuList} className={styles.menuList}>
            <ul>
              <div>
                <li ref={linkHome}><Link to='/'>Home</Link></li>
              </div>
              <div>
                <li ref={linkProject}><Link to='/projects'>Projetos</Link></li>
              </div>
              <div>
                <li ref={linkAbout}><Link to='/about'>Sobre</Link></li>
              </div>
              <div>
                <li ref={linkContact}><Link to='/contact'>Contato</Link></li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
  </header>
  )
}

export default Header
