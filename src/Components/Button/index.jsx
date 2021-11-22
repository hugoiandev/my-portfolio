import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

const Button = React.forwardRef((props, ref) => {
  return (
    <div className={styles.button}>
        <Link to={props.linkTo}>
          <button ref={ref}>
            {props.text}
          </button>
        </Link>
    </div>
  )
})

export default Button
