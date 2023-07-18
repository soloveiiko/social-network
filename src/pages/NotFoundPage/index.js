import React from 'react'
import styles from './style.module.css'

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 Error</h1>
      <h2 className={styles.subtitle}>Not Found</h2>
    </div>
  )
}

export default NotFoundPage
