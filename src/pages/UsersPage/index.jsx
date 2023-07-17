import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsFetching, setUsers } from '../../redux/users'
import { getUsers } from '../../api'
import User from '../../components/Users/User'
import Pagination from '../../components/common/Pagination'
import Preloader from '../../components/common/Preloader'
import styles from './style.module.css'

const UsersPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalUsersCount, setTotalUsersCount] = useState(100)
  const [pageSize] = useState(5)

  const usersPage = useSelector((state) => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchUsers = async () => {
      dispatch(setIsFetching(true))
      try {
        const response = await getUsers(currentPage, pageSize)
        dispatch(setUsers(response.items))
        setTotalUsersCount(response.totalCount)
        dispatch(setIsFetching(false))
      } catch (error) {
        console.log(error)
      }
    }

    fetchUsers()
  }, [currentPage, pageSize])

  const onClickFollow = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((u) => (u.id === userId ? { ...u, followed: false } : u))
    )
    // dispatch(follow(userId))
  }

  const onClickUnfollow = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((u) => (u.id === userId ? { ...u, followed: true } : u))
    )
    // dispatch(unfollow(userId))
  }

  const paginate = (p) => {
    setCurrentPage(p)
  }

  const prevPage = () => setCurrentPage((prev) => prev - 1)
  const nextPage = () => setCurrentPage((next) => next + 1)

  return (
    <>
      {usersPage.isFetching ? <Preloader /> : null}
      <div className={styles.container}>
        <User
          users={usersPage.users}
          follow={onClickFollow}
          unfollow={onClickUnfollow}
        />
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
  )
}

export default UsersPage
