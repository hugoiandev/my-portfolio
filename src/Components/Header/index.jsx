import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => {
  const [menuMobile, setmenuMobile] = React.useState(false)

  return (
    <header className={styles.header}>
      <div>
        <Link className={styles.logo} to='/'>Hugo Ian</Link>
      </div>
      <nav className={styles.menu}>
        <button
          onClick={() => setmenuMobile(!menuMobile)}
        >
          <div className={menuMobile ? styles.menuMobileOpen : styles.menuMobileClosed} />
        </button>
        {false && <div>
          <ul>
            <li><Link to='/projetos'>projetos</Link></li>
            <li><Link to='/sobre'>sobre</Link></li>
            <li><Link to='/contato'>contato</Link></li>
          </ul>
        </div>}
      </nav>
    </header>
  )
}

export default Header
