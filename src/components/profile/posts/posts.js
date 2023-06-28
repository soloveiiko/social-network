import React from 'react';
import './style.css';
import Post from './post/post';

const Posts = (props) => {
  let postElements =
    props.posts.map(el => <Post key={el.id} message={el.message} likes={el.likesCount} />)

  let onAddPost = () => {
    if (props.postValue) {
      props.addNewPost();
    } else {
        console.log('Enter text')
    }
  }
  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  }

  return (
    <div className='posts_container'>
      <div className='new_posts'>
        <textarea onChange={onPostChange} value={props.postValue}></textarea>
        <button onClick={onAddPost}>Send</button>
      </div>
      {postElements}
    </div>
  )
}
export default Posts;