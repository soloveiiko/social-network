import React from 'react'
import './style.css'

const Post = (props) => {
  return (
    <div className="posts_list">
      <div className="post_item">
        <img
          src="https://t3.ftcdn.net/jpg/05/36/79/40/240_F_536794023_5OCtoT7oEXXz2lMtIMBEdoWrscljYPeA.jpg https://t3.ftcdn.net/jpg/01/34/83/36/240_F_134833631_pvgS8aoiUg4MryBxsWYlETTIvzNGgyjL.jpg"
          alt="logo"
        />
        <span className="message">{props.message}</span>
        <span className="like">Like {props.likes}</span>
      </div>
    </div>
  )
}
export default Post
