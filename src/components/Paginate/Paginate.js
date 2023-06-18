import React from 'react';
import './style.css'

const Paginate = ({totalUsersCount, pageSize, currentPage, paginate, prevPage, nextPage}) => {
  let totalPageCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= totalPageCount; i++) {
    pages.push(i);
  }
  const handlePrevClick = (e) => {
    prevPage(e)
  }
  const handleNextClick = (e) => {
    nextPage(e)
  }

  return (
    <div className='pagination'>
      <ul className='pagination-container'>
        <button onClick={handlePrevClick} disabled={currentPage === 1}>prev</button>
        {
          pages.map(p => {
            return <li key={p}
                       id={p}
                       onClick={() => paginate(p)}
                       className={currentPage === p ? 'selected-page' : ''}>{p}</li>
          })
        }
        <button onClick={handleNextClick} disabled={currentPage === totalPageCount}>next</button>
      </ul>
    </div>

  )
}
export default Paginate;