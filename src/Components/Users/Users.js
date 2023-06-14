import React from 'react';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: true,
                firstName: 'Alex',
                photoUrl: '',
                status: 'Boss',
                location: {country: 'Ukraine', city: 'Lutsk'}
            },
            {
                id: 2,
                followed: true,
                firstName: 'Max',
                photoUrl: '',
                status: 'Boss',
                location: {country: 'Ukraine', city: 'Lutsk'}
            },
            {
                id: 3,
                followed: false,
                firstName: 'Dasha',
                photoUrl: '',
                status: 'Boss',
                location: {country: 'Ukraine', city: 'Lutsk'}
            }
        ])
    }

    return <div>
        {props.users.map(u => <div key={u.id}>
            <div className="img-container">
                <img src={u.photoUrl} alt="logo"/>
            </div>
            <div className="btn-container">
                {u.followed
                    ? <button onClick={() => props.follow(u.id)}>Follow</button>
                    : <button onClick={() => props.unfollow(u.id)}>Unfollow</button>}
            </div>
            <div>{u.firstName}</div>
            <div>{u.status}</div>
            <div>
                <div>{u.location.city}</div>
                <div>{u.location.country}</div>
            </div>
        </div>)}
    </div>
};

export default Users;