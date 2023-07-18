import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addPost, updatePostText } from '../../redux/posts'
import { setUser } from '../../redux/profile'
import { getUser } from '../../api'
import UserProfile from '../../components/Profile/UserProfile'
import Posts from '../../components/Profile/Posts'
import styles from './style.module.css'

const ProfilePage = () => {
  const profile = useSelector((state) => state.profile)
  const posts = useSelector((state) => state.posts)
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        let userId = id || 3
        const response = await getUser(userId)
        dispatch(setUser(response))
      } catch (error) {
        console.log(error)
      }
    }
    fetchUser()
  }, [id])
  const addNewPost = () => {
    dispatch(addPost())
  }
  const updateNewPostText = (text) => {
    dispatch(updatePostText(text))
  }
  return (
    <div className={styles.profile}>
      <UserProfile profile={profile.profile} />
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
