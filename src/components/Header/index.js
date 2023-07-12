import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import ball from '../../assets/images/ball.png'
import './style.css';
import {useDispatch, useSelector} from 'react-redux'
import {setUserData} from "../../redux/auth/auth";
import axios from "axios";

const Header = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const responce = await axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
          withCredentials: true
        });
        if (responce.data.resultCode === 0) {
          let {id, login, email} = responce.data.data;
          dispatch(setUserData(id, login, email));
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, []);


  return (
    <header className='header'>
      <div className='header__container'>
        <img className='header__logo' src={ball} alt='logo' />
        <h1 className='header__title_h1'>Team</h1>
        <div className='login-container'>
          {auth.isAuth ? auth.login :

            <NavLink className='login' to='/login'>Login</NavLink>
          }
        </div>
      </div>
    </header>
  )
}
export default Header;