import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
// import { getUserDataAsync } from '../../redux/auth/action'
import ball from '../../assets/images/ball.png'
import styles from './style.module.css'

const Header = () => {
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   try {
  //     dispatch(getUserDataAsync())
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }, [])

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
