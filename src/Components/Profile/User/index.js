import React from "react";

const User = (props) => {
  return (
    <div className='user_infornation'>
      <div className='img_container'>
        <img src={props.src} alt='avatar' />
      </div>
      <div className='name'>{props.name}</div>
      <div className='surname'>{props.surname}</div>
      <div className='age'>{props.age}</div>
    </div>
  )
}
export default User;