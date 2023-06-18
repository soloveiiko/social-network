import React from 'react';
import {NavLink} from "react-router-dom";
import './style.css';

const FriendItem = (props) => {
  return (
    <div className='friends__item'>
      <NavLink to={'/dialogs/' + props.id}>
          <img src={props.image} alt='logo' />
          {props.name}</NavLink>
    </div>
  )
}
export default FriendItem;