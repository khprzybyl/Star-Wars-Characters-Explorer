import React from 'react'
import { useContext } from 'react'
import { ApplicationContext } from '../hooks/useAppContextUtils'
import './Search.css'
import { usePeopleQuery } from '../hooks/usePeopleQuery'

export const Search = ({ onFilter }) => {
  const { search, handleSearch } = useContext(ApplicationContext)
  const { isLoading: isPeopleLoading } = usePeopleQuery()

  const handleInputChange = (e) => {
    handleSearch(e.target.value)
  }

  return (
    <div className="search">
      <input
        type="search"
        placeholder="Search by name"
        vaule={search}
        onChange={handleInputChange}
        aria-label="Search character by name"
        disabled={isPeopleLoading}
      />
    </div>
  )
}
