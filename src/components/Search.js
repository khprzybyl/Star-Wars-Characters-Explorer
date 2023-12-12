import React from 'react'
import { useContext } from 'react'
import { ApplicationContext } from '../hooks/useAppContextUtils'
import './Search.css'

export const Search = ({ onFilter }) => {
  const { search, handleSearch } = useContext(ApplicationContext)

  const handleInputChange = (e) => {
    handleSearch(e.target.value)
  }

  return (
    <div className="search">
      <h1>Star Wars Characters Explorer</h1>
      <input
        type="search"
        placeholder="Search by name"
        vaule={search}
        onChange={handleInputChange}
        aria-label="Search character by name"
      />
    </div>
  )
}
