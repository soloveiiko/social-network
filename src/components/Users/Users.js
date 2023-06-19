import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from '../Pagination/Pagination';
import UserItem from './User/UserItem';
import './style.css';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsersCount, setTotalUsersCount] = useState(100);
  const [pageSize] = useState(5);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`);
        setUsers(response.data.items);
        setTotalUsersCount(response.data.totalCount);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, [currentPage, pageSize]);

  const follow = (userId) => {
    setUsers(prevUsers =>
      prevUsers.map(u => (u.id === userId ? { ...u, followed: false } : u))
    );
  };

  const unfollow = (userId) => {
    setUsers(prevUsers =>
      prevUsers.map(u => (u.id === userId ? { ...u, followed: true } : u))
    );
  };

  const paginate = (p) => {
    setCurrentPage(p);
  };

  const prevPage = () => setCurrentPage(prev => prev - 1);
  const nextPage = () => setCurrentPage(next => next + 1);

  return (
    <div className='users-container'>
      <UserItem users={users} follow={follow} unfollow={unfollow} />

      <Pagination
        totalUsersCount={totalUsersCount}
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
