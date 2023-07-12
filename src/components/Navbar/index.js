import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
// import friends from "./friends";

const Navbar = () => {
  // const location = useLocation();

  // const isProfileActive = location.pathname.startsWith('/profile');
  return (
    <nav className='menu'>
      <ul className='menu__list'>
        <li className='menu__item'>
          {/*<NavLink*/}
          {/*  to='/profile/:id?'*/}
          {/*  isActive={isProfileActive}*/}
          {/*  className={isProfileActive ? 'menuActiveLink' : ''}*/}
          {/*>*/}
          {/*  Profile*/}
          {/*</NavLink>*/}
          <NavLink to='/profile'
                   className={(menuActiveLink) => menuActiveLink.isActive ? 'menuActiveLink' : ''}>Profile</NavLink>
        </li>
        <li className='menu__item'>
          <NavLink to='/dialogs'
                   className={(menuActiveLink) => menuActiveLink.isActive ? 'menuActiveLink' : ''}>Dialogs</NavLink>
        </li>
        <li className='menu__item'>
          <NavLink to='/users'
                   className={(menuActiveLink) => menuActiveLink.isActive ? 'menuActiveLink' : ''}>Users</NavLink>
        </li>
      </ul>

      <div className="menu__friends-block friends">
        {/*<friends friends={props.state.dialogs}/>*/}
      </div>
    </nav>
  )
}
export default Navbar;