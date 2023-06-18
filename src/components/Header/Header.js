import React from 'react';
import ball from '../../images/ball.png'
import './style.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <img className='header__logo' src={ball} alt='logo' />
        <h1 className='header__title_h1'>Team</h1>
      </div>
    </header>
  )
}
export default Header;