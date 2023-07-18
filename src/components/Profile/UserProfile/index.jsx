import React from 'react'
import Preloader from '../../common/Preloader'
import userPhoto from '../../../assets/images/1.png'
import styles from './style.module.css'
import volleyball from '../../../assets/images/volleyball-banner.jpeg'
const User = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <>
      <div className={styles.banner}>
        <img
          src={
            props.profile.photos.large != null
              ? props.profile.photos.large
              : volleyball
          }
          alt="nature"
        />
      </div>
      <div className={styles.user_infornation}>
        <div className={styles.img_container}>
          <img
            src={
              props.profile.photos.small != null
                ? props.profile.photos.small
                : userPhoto
            }
            alt="User"
          />
        </div>
        <div className={styles.fullname}>{props.profile.fullName}</div>
        <div className={styles.aboutme}>{props.profile.aboutMe}</div>
      </div>
    </>
  )
}
export default User
