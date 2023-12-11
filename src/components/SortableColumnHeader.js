import React, { useContext } from 'react'
import { ReactComponent as ArrowUp } from '../assets/svg/arrow_up.svg'
import { ReactComponent as ArrowDown } from '../assets/svg/arrow_down.svg'
import './SortableColumnHeader.css'
import { ApplicationContext } from '../hooks/useAppContextUtils'
import { usePeopleQuery } from '../hooks/usePeopleQuery'

export const SortableColumnHeader = ({ columnName }) => {
  const { handleOrdering, sortColumnName, sortDirection } =
    useContext(ApplicationContext)
  const { isLoading: isPeopleLoading } = usePeopleQuery()

  const sortAscending = () => handleOrdering(columnName, 'asc')
  const sortDescending = () => handleOrdering(columnName, 'desc')
  const hasActiveOrdering = sortColumnName === columnName.toLowerCase()
  const isActiveAscOrdering =
    sortDirection === 'asc' && hasActiveOrdering ? 'active' : ''
  const isActiveDescOrdering =
    sortDirection === 'desc' && hasActiveOrdering ? 'active' : ''

  return (
    <div className={`sortable-column-header`}>
      {columnName}
      <div className="arrows">
        <button
          className={`btn btn-sort ${isActiveAscOrdering}`}
          aria-label="Sort ascending"
          disabled={isPeopleLoading}
          onClick={sortAscending}
        >
          <ArrowUp />
        </button>
        <button
          className={`btn btn-sort ${isActiveDescOrdering}`}
          aria-label="Sort descending"
          disabled={isPeopleLoading}
          onClick={sortDescending}
        >
          <ArrowDown />
        </button>
      </div>
    </div>
  )
}
