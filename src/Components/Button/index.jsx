import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

const Button = React.forwardRef((props, ref) => {
  return (
    <div className={styles.button}>
        <Link to={props.linkTo}>
          <button ref={ref}>
            <span>{props.text}</span>
          </button>
        </Link>
    </div>
  )
})

export default Button
