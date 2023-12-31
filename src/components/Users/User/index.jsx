import React from 'react'
import { Link } from 'react-router-dom'
import userPhoto from '../../../assets/images/1.png'
import styles from './style.module.css'

const User = (props) => {
  return (
    <div className={styles.container}>
      {props.users.map((u) => (
        <div className={styles.user} key={u.id}>
          <div className={styles.img_container}>
            <Link to={`/profile/${u.id}`}>
              <img
                src={u.photos.small != null ? u.photos.small : userPhoto}
                alt="avatar"
              />
            </Link>
          </div>
          <div className={styles.btn_container}>
            {!u.followed ? (
              <button onClick={() => props.follow(u.id)}>Unfollow</button>
            ) : (
              <button onClick={() => props.unfollow(u.id)}>Follow</button>
            )}
          </div>
          <div className={styles.name}>{u.name}</div>
          <div className={styles.status}>{u.status}</div>
          <div className={styles.location}>
            <div className={styles.city}>{'u.location.city'}</div>
            <div className={styles.country}>{'u.location.country'}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default User
