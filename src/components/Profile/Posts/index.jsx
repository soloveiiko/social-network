import React from 'react'
import styles from './style.module.css'
import Post from './Post'

const Posts = (props) => {
  let postElements = props.posts.map((el) => (
    <Post key={el.id} message={el.message} likes={el.likesCount} />
  ))

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
      {postElements}
    </div>
  )
}
export default Posts
