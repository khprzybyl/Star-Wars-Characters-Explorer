import { useContext } from 'react'

import { usePeopleQuery } from '../hooks/usePeopleQuery'
import './Pagination.css'
import { nextPage, prevPage } from '../utils/pagination'
import { ApplicationContext } from '../hooks/useAppContextUtils'

export const Pagination = () => {
  let { page, handlePageChange } = useContext(ApplicationContext)
  const { data } = usePeopleQuery()

  const totalPageCount = data?.count ? Math.ceil(data?.count / 10) : 0

  const handlePageChangeNext = () => {
    handlePageChange(page + 1)
  }
  const handlePageChangePrevious = () => {
    handlePageChange(page - 1)
  }

  return (
    <div className="pagination">
      <button
        className="btn btn-pagination"
        aria-label="Go to previous page"
        onClick={handlePageChangePrevious}
        disabled={page === 1}
      >
        Prev
      </button>
      <div className="page-numbers">
        <p>{prevPage(page)}</p>
        <p className="current-page">{page}</p>
        <p>{nextPage(page, totalPageCount)}</p>
      </div>
      <button
        className="btn  btn-pagination"
        aria-label="Go to next page"
        onClick={handlePageChangeNext}
        disabled={!totalPageCount || page === totalPageCount}
      >
        Next
      </button>
    </div>
  )
}
