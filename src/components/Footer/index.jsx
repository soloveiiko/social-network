import React from 'react'
import styles from './style.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.title}>
          Created by <a href="https://github.com/soloveiiko">soloveiiko</a>
        </div>
      </div>
    </footer>
  )
}
export default Footer
