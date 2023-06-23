import React from 'react';
import './style.css';
import Post from './post/post';

const Posts = (props) => {
    let postElements =
        props.posts.map(el => <Post message={el.message} likes={el.likesCount}/>)

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div className='posts_container'>
            my posts
            <div className='new_posts'>
                <textarea onChange={onPostChange} value={props.postValue}></textarea>
                <button onClick={onAddPost}>Send</button>
            </div>
            {postElements}
        </div>
    )
}
export default Posts;