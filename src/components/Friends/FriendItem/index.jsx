import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './style.module.css'

const FriendItem = (props) => {
  return (
    <div className={styles.item}>
      <NavLink to={'/dialogs/' + props.id}>
        <img src={props.image} alt="logo" />
        {props.name}
      </NavLink>
    </div>
  )
}
export default FriendItem
