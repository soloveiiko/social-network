import React, {useEffect} from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import {addPost, updatePostText} from "../../redux/posts/posts";
import {setUser} from '../../redux/profile/profile';
import UserProfile from '../../components/profile/userProfile/userProfile';
import Posts from "../../components/profile/posts/posts";
import volleyball from '../../assets/images/volleyball-banner.jpeg'
import './style.css';

const Profile = () => {
  const user = useSelector(state => state.profile);
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`);
        dispatch(setUser(response.data));
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, [id]);
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