import React, {useEffect} from 'react';
import volleyball from '../../assets/images/volleyball-banner.jpeg'
import UserProfile from '../../components/userProfile/userProfile';
import './style.css';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {setUser} from '../../redux/profile/profile';
import Posts from "../../components/posts/posts";
import {addPost, addPostActionCreator, updatePostActionCreator, updatePostText} from "../../redux/posts/posts";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.profile);
  const posts = useSelector(state => state.posts);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`);
        dispatch(setUser(response.data));
        console.log(response)
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, []);

  const addNewPost = () => {
    dispatch(addPost());
  }
  const updateNewPostText = (text) => {
    dispatch(updatePostText(text));
  }

  return (
    <div className='technologies'>
      <div className='banner'>
        <img src={volleyball} alt='nature' />
      </div>
      <div className='main_content'>
        <UserProfile
          profile={user.profile}
        />
        <Posts posts={posts.posts}
               postValue={posts.postValue}
               addNewPost={addNewPost}
               updateNewPostText={updateNewPostText}/>

      </div>
    </div>
  )

}
export default Profile;