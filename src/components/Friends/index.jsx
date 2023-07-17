import React from 'react'
import FriendItem from './FriendItem'
import styles from './style.module.css'

const Index = (props) => {
  let friendElements = props.friends.map((el) => (
    <FriendItem name={el.name} id={el.id} image={el.image} />
  ))
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Friends</h1>
      <div className={styles.list}>{friendElements}</div>
    </div>
  )
}
export default Index
