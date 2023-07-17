import { NavLink } from 'react-router-dom'
import React from 'react'
import styles from './style.module.css'

const DialogItem = (props) => {
  return (
    <div className={styles.item}>
      <NavLink to={'/dialogs/' + props.id}>
        <img src={props.image} alt="logo" />
        {props.name}
      </NavLink>
    </div>
  )
}
export default DialogItem
