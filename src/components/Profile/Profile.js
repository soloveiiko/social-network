import React from 'react';
import volleyball from '../../images/volleyball-banner.jpeg'
import User from "./User";
import './style.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className='technologies'>
      <div className='banner'>
        <img src={volleyball} alt='nature' />
      </div>
      <div className='main_content'>
        <User src='' name='Alex' surname='Sky' age='20' />
        <div className='information_container'>
          <MyPostsContainer/>
        </div>
      </div>
    </div>
  )
}
export default Profile;