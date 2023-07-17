import React from 'react'
import { usePagination, DOTS } from '../../../hooks/usePagination'
import styles from './style.module.css'

const Index = ({
  totalUsersCount,
  pageSize,
  currentPage,
  paginate,
  prevPage,
  nextPage,
  siblingCount = 1,
}) => {
  const paginationRange = usePagination({
    totalUsersCount,
    pageSize,
    currentPage,
    siblingCount,
  })
  const handlePrevClick = (e) => {
    prevPage(e)
  }
  const handleNextClick = (e) => {
    nextPage(e)
  }
  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }
  let lastPage = paginationRange[paginationRange.length - 1]
  return (
    <div className={styles.pagination}>
      <ul className={styles.container}>
        <button onClick={handlePrevClick} disabled={currentPage === 1}>
          prev
        </button>
        {paginationRange.map((p) => {
          if (p === DOTS) {
            return (
              <li key={p} className={styles.dots}>
                &#8230;
              </li>
            )
          }
          return (
            <li
              key={p}
              id={p}
              onClick={() => paginate(p)}
              className={currentPage === p ? 'selected_page' : ''}
            >
              {p}
            </li>
          )
        })}
        <button onClick={handleNextClick} disabled={currentPage === lastPage}>
          next
        </button>
      </ul>
    </div>
  )
}
export default Index
