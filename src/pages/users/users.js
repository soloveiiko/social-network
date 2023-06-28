import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {setIsFetching} from '../../redux/users/users';
import User from '../../components/users/user/user';
import Pagination from '../../components/pagination/pagination';
import Preloader from '../../components/preloader/preloader';
import '../../components/users/style.css';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsersCount, setTotalUsersCount] = useState(100);
  const [pageSize] = useState(5);
  // const [isFetching, setIsFetching] = useState(true);


  const usersPage = useSelector(state => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUsers = async () => {
      dispatch(setIsFetching(true))
      try {
        const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`);
        setUsers(response.data.items);
        setTotalUsersCount(response.data.totalCount);
        dispatch(setIsFetching(false))
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, [currentPage, pageSize]);

  const onClickFollow = (userId) => {
    setUsers(prevUsers =>
      prevUsers.map(u => (u.id === userId ? { ...u, followed: false } : u))
    );
  };

  const onClickUnfollow = (userId) => {
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
    <>
      {usersPage.isFetching ? <Preloader/> : null}
    <div className='users-container'>
      <User users={users} follow={onClickFollow} unfollow={onClickUnfollow} />
      <Pagination
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        paginate={paginate}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </div>
    </>
  );
};

export default Users;
