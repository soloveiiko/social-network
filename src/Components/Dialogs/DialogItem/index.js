import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
  return (
    <div className='contacts__item'>
      <NavLink to={'/dialogs/' + props.id}>
          <img src={props.image} alt='logo' />
          {props.name}</NavLink>
    </div>
  )
}
export default DialogItem;