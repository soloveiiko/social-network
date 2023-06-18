import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Paginate from '../Paginate/Paginate';
import UserItem from './User/UserItem';
import './style.css'

const Users = () => {
  const [users, setUsers] = useState([]);
  const [totalUsersCount] = useState(50);
  const [pageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
          .then(response => {
            setUsers(response.data.items);
          })
          .catch(error => {
            console.log(error);
          });

    }, [currentPage, pageSize]);

  // const indexOfLastPost = currentPage * pageSize;
  // const indexOfFirstPost = indexOfLastPost - pageSize;
  // const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);
  const follow = (userId) => {
    setUsers(prevUsers => {
      return prevUsers.map(u => {
        if (u.id === userId) {
          return { ...u, followed: false };
        }
        return u;
      });
    });
  };

  const unfollow = (userId) => {
    setUsers(prevUsers => {
      return prevUsers.map(u => {
        if (u.id === userId) {
          return { ...u, followed: true };
        }
        return u;
      });
    });
  };
  const paginate = (p) => {
    setCurrentPage(p);
  }
  const prevPage = () => setCurrentPage(prev => prev - 1);
  const nextPage = () => setCurrentPage(next => next + 1);

  return (
    <div className='users-container'>
      <UserItem users={users} follow={follow} unfollow={unfollow} />

      <Paginate totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                paginate={paginate}
                prevPage={prevPage}
                nextPage={nextPage}
      />
    </div>
  );
};

export default Users;