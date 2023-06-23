import React from 'react';
import volleyball from '../../assets/images/volleyball-banner.jpeg'
import User from "../../components/profile/User";
import '../../components/profile/style.css';
import PostsContainer from "../../components/profile/posts/postsContainer";

const Profile = () => {
  return (
    <div className='technologies'>
      <div className='banner'>
        <img src={volleyball} alt='nature' />
      </div>
      <div className='main_content'>
        <User src='' name='Alex' surname='Sky' age='20' />
        <div className='information_container'>
          <PostsContainer/>
        </div>
      </div>
    </div>
  )
}
export default Profile;