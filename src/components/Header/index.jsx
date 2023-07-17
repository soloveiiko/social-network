import React, { useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import ball from '../../assets/images/ball.png'
import { useDispatch, useSelector } from 'react-redux'
import { setUserData } from '../../redux/auth/auth'
import styles from './style.module.css'

const Header = () => {
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const responce = await axios.get(
          `https://social-network.samuraijs.com/api/1.0/auth/me`,
          {
            withCredentials: true,
          }
        )

        if (responce.data.resultCode === 0) {
          let { id, login, email } = responce.data.data
          dispatch(setUserData(id, login, email))
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchUser()
  }, [])

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img className={styles.logo} src={ball} alt="logo" />
        <h1 className={styles.title_h1}>Team</h1>
        <div className={styles.login_container}>
          {auth.isAuth ? (
            auth.login
          ) : (
            <NavLink className={styles.login} to="/login">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </header>
  )
}
export default Header
