import React from 'react'
import preloader from '../../../assets/gif/preloader.gif'
import styles from './style.module.css'

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <img src={preloader} alt="preloader" />
    </div>
  )
}

export default Preloader
