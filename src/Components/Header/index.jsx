import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link className={styles.logo} to='/'>Hugo Ian</Link>
      </div>
      <nav className={styles.menu}>
        <ul>
          <li><Link to='/projetos'>projetos</Link></li>
          <li><Link to='/sobre'>sobre</Link></li>
          <li><Link to='/contato'>contato</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
