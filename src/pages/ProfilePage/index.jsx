import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { updatePostText } from '../../redux/posts/reducer'
import { setUser } from '../../redux/profile/reducer'
import { profileAPI } from '../../api'
import UserProfile from '../../components/Profile/UserProfile'
import Posts from '../../components/Profile/Posts'
import styles from './style.module.css'
import { addPostSuccess } from '../../redux/posts/action'
import { getProfileAsync } from '../../redux/profile/action'

const ProfilePage = () => {
  const profile = useSelector((state) => state.profile)
  const posts = useSelector((state) => state.posts)
  const dispatch = useDispatch()
  const { id } = useParams()

  let userId = id || 3
  useEffect(() => {
    try {
      // const response = profileAPI.getProfile(userId).then((response) => {
      //   return response.data
      // })
      // dispatch(setUser(response))
      dispatch(getProfileAsync(userId))
      console.log('test', profile)
    } catch (error) {
      console.log(error)
    }
  }, [dispatch])
  const addNewPost = () => {
    dispatch(addPostSuccess())
  }
  const updateNewPostText = (text) => {
    dispatch(updatePostText(text))
  }

  return (
    <div className={styles.profile}>
      <UserProfile profile={profile.user} />
      <button onClick={() => dispatch(getProfileAsync(userId))}>babah</button>
      <Posts
        posts={posts.posts}
        postValue={posts.postValue}
        addNewPost={addNewPost}
        updateNewPostText={updateNewPostText}
      />
    </div>
  )
}
export default ProfilePage
