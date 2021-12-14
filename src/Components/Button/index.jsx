import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

const Button = ({ link, textOne, textTwo }) => {
  return (
    <div className={styles.button}>
        <Link to={link}>
          <button>
            <span>{textOne}</span>
            <span>{textTwo}</span>
          </button>
        </Link>
    </div>
  )
}

export default Button
