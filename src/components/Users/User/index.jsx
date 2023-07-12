import React from 'react'
import userPhoto from '../../../assets/images/1.png'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const User = (props) => {
  return (
    <div className="user-container">
      {props.users.map((u) => (
        <div className="user" key={u.id}>
          <div className="img-container">
            <NavLink to={`/profile/${u.id}`}>
              <img
                src={u.photos.small != null ? u.photos.small : userPhoto}
                alt="logo"
              />
            </NavLink>
          </div>

          <div className="btn-container">
            {u.followed ? (
              <button
                onClick={() => {
                  axios
                    .post(
                      `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                      {},
                      {
                        withCredentials: true,
                      }
                    )
                    .then((response) => {
                      if (response.data.resultCode === 0) {
                        props.follow(u.id)
                      }
                    })
                }}
              >
                Follow
              </button>
            ) : (
              <button
                onClick={() => {
                  axios
                    .delete(
                      `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                      {},
                      {
                        withCredentials: true,
                      }
                    )
                    .then((response) => {
                      if (response.data.resultCode === 0) {
                        props.unfollow(u.id)
                      }
                    })
                }}
              >
                Unfollow
              </button>
            )}
          </div>
          <div className="user-name">{u.name}</div>
          <div className="user-status">{u.status}</div>
          <div className="user-location">
            <div className="user-city">{'u.location.city'}</div>
            <div className="user-country">{'u.location.country'}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default User
