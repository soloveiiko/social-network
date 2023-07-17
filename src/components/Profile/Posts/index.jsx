import React from 'react'
import Post from './Post'
import styles from './style.module.css'

const Posts = (props) => {
  let onAddPost = () => {
    if (props.postValue) {
      props.addNewPost()
    } else {
      console.log('Enter text')
    }
  }
  let onPostChange = (e) => {
    let text = e.target.value
    props.updateNewPostText(text)
  }

  return (
    <div className={styles.container}>
      <div className={styles.send_container}>
        <textarea onChange={onPostChange} value={props.postValue}></textarea>
        <button onClick={onAddPost}>Send</button>
      </div>
      {props.posts.map((el) => (
        <Post key={el.id} message={el.message} likes={el.likesCount} />
      ))}
    </div>
  )
}
export default Posts
