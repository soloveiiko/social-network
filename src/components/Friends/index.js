import React from 'react';
import FriendItem from "./FriendItem/friendItem";
import './style.css';

const Index = (props) => {
  let friendElements =
    props.friends.map(el => <FriendItem name={el.name} id={el.id} image={el.image}/>)
  return (
    <div className='friends__container'>
      <h1 className='friends__title'>Friends</h1>
      <div className='friends__list'>
        {friendElements}
      </div>
    </div>
  )
}
export default Index;