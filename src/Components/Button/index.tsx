import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

interface ButtonProps {
  link: string
  textOne: string
  textTwo: string
}

const Button = ({ link, textOne, textTwo }: ButtonProps): JSX.Element => {
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
