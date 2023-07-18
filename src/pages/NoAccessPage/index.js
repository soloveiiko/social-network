import React from 'react'
import styles from './style.module.css'

const NoAccessPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>403 Error</h1>
      <h2 className={styles.subtitle}>No Access</h2>
    </div>
  )
}

export default NoAccessPage
