import React, { useState } from 'react'
import Preloader from '../../common/Preloader'
import userPhoto from '../../../assets/images/1.png'
import styles from './style.module.css'
import volleyball from '../../../assets/images/volleyball-banner.jpeg'
const User = (props) => {
  const [editMode, setEditMode] = useState(false)
  const [aboutUs, setAboutUs] = useState()

  const onChangeAboutUs = (e) => {
    const text = e.target.value
    setAboutUs(text)
  }
  const activateEditMode = () => {
    setEditMode(true)
  }
  const deactivateEditMode = () => {
    setEditMode(false)
  }

  if (!props.profile) {
    return <Preloader />
  }
  console.log(props.profile)
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
        {editMode ? (
          <input
            value={aboutUs}
            autoFocus={true}
            onChange={onChangeAboutUs}
            onBlur={() => deactivateEditMode()}
          />
        ) : (
          <div
            className={styles.aboutme}
            onDoubleClick={() => activateEditMode()}
          >
            {props.profile.aboutMe}
          </div>
        )}
      </div>
    </>
  )
}
export default User
