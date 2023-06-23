import React, {useEffect} from 'react';
import volleyball from '../../assets/images/volleyball-banner.jpeg'
import UserProfile from "../../components/userProfile/userProfile";
import './style.css';
import PostsContainer from "../../components/posts/postsContainer";
import {useSelector, useDispatch} from 'react-redux';


const Profile = () => {

  const user = useSelector(state => state.profile.name);
  console.log(user);

  return (
    <div className='technologies'>
      <div className='banner'>
        <img src={volleyball} alt='nature' />
      </div>
      <div className='main_content'>
        {/*<UserProfile src={user.avatar} name={user.name} city={user.city} age={user.age} bio={user.bio}/>*/}

          <PostsContainer/>

      </div>
    </div>
  )

}
export default Profile;