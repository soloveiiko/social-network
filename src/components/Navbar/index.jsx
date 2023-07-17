import React from 'react'
import { NavLink } from 'react-router-dom'
// import friends from "./friends";
import styles from './style.module.css'

const Navbar = () => {
  // const location = useLocation();

  // const isProfileActive = location.pathname.startsWith('/profile');
  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        <li className={styles.item}>
          {/*<NavLink*/}
          {/*  to='/profile/:id?'*/}
          {/*  isActive={isProfileActive}*/}
          {/*  className={isProfileActive ? 'menuActiveLink' : ''}*/}
          {/*>*/}
          {/*  Profile*/}
          {/*</NavLink>*/}
          <NavLink
            to="/profile"
            className={(menuActiveLink) =>
              menuActiveLink.isActive ? 'menuActiveLink' : ''
            }
          >
            Profile
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to="/dialogs"
            className={(menuActiveLink) =>
              menuActiveLink.isActive ? 'menuActiveLink' : ''
            }
          >
            Dialogs
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to="/users"
            className={(menuActiveLink) =>
              menuActiveLink.isActive ? 'menuActiveLink' : ''
            }
          >
            Users
          </NavLink>
        </li>
      </ul>

      <div className={styles.friends_block}>
        {/*<friends friends={props.state.dialogs}/>*/}
      </div>
    </nav>
  )
}
export default Navbar
