import React from 'react';
import Preloader from "../../common/Preloader";
import userPhoto from "../../../assets/images/1.png";
import './style.css';

const User = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div className='user_infornation'>
      <div className='img_container'>
        <img src={props.profile.photos.large !=null ? props.profile.photos.large : userPhoto} alt='User' />
      </div>
      <div className='fullName'>{props.profile.fullName}</div>
      <div className='aboutMe'>{props.profile.aboutMe}</div>
    </div>
  )
}
export default User;