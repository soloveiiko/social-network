import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { follow, setIsFetching, setUsers, unfollow } from '../../redux/users'
import { usersAPI } from '../../api'
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
        const response = await usersAPI
          .getUsers(currentPage, pageSize)
          .then((response) => {
            return response.data
          })
        setTotalUsersCount(response.totalCount)
        dispatch(setIsFetching(false))
        dispatch(setUsers(response.items))
      } catch (error) {
        console.log(error)
      }
    }
    fetchUsers()
  }, [currentPage, pageSize])

  const onClickFollow = (userId) => {
    dispatch(follow(userId))
    console.log(usersPage.users.find((u) => u.id === userId)?.followed)
  }

  const onClickUnfollow = (userId) => {
    dispatch(unfollow(userId))
    console.log(usersPage.users.find((u) => u.id === userId)?.followed)
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
