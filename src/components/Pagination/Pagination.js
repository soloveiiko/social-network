import React from 'react';
import './style.css';
import {usePagination, DOTS} from './UsePagination';

const Pagination = ({
                    totalUsersCount,
                    pageSize,
                    currentPage,
                    paginate,
                    prevPage,
                    nextPage,
                    siblingCount = 1
                  }) => {

  const paginationRange = usePagination({
    totalUsersCount,
    pageSize,
    currentPage,
    siblingCount
  });
  const handlePrevClick = (e) => {
    prevPage(e)
  }
  const handleNextClick = (e) => {
    nextPage(e)
  }
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }
  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div className='pagination'>
      <ul className='pagination-container'>
        <button onClick={handlePrevClick} disabled={currentPage === 1}>prev</button>
        {
          paginationRange.map(p => {
            if (p === DOTS) {
              return <li className="pagination-item dots">&#8230;</li>;
            }
            return <li key={p}
                       id={p}
                       onClick={() => paginate(p)}
                       className={currentPage === p ? 'selected-page' : ''}>{p}</li>
          })
        }
        <button onClick={handleNextClick} disabled={currentPage === lastPage}>next</button>
      </ul>
    </div>

  )
}
export default Pagination;