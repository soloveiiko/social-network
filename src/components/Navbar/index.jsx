import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './style.module.css'
const navList = [
  { key: 'profile', name: 'Profile', link: '/profile' },
  { key: 'dialogs', name: 'Dialogs', link: '/dialogs' },
  { key: 'users', name: 'Users', link: '/users' },
]
const Navbar = () => {
  // const location = useLocation();

  // const isProfileActive = location.pathname.startsWith('/profile');
  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        {navList.map((el) => (
          <li key={el.key} className={styles.item}>
            <NavLink to={el.link}>{el.name}</NavLink>
          </li>
        ))}
        {/*  <li className={styles.item}>*/}
        {/*    /!*<NavLink*!/*/}
        {/*    /!*  to='/profile/:id?'*!/*/}
        {/*    /!*  isActive={isProfileActive}*!/*/}
        {/*    /!*  className={isProfileActive ? 'menuActiveLink' : ''}*!/*/}
        {/*    /!*>*!/*/}
        {/*    /!*  Profile*!/*/}
        {/*    /!*</NavLink>*!/*/}
      </ul>

      {/*<div className={styles.friends_block}>*/}
      {/*  /!*<friends friends={props.state.dialogs}/>*!/*/}
      {/*</div>*/}
    </nav>
  )
}
export default Navbar
