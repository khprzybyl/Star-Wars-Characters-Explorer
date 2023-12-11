import React, { useState, useEffect } from 'react'
import { Popup } from './Popup.js'
import { formatDate } from '../utils/formatDate.js'
import './UserListItem.css'

export const UserListItem = ({ user, planetData }) => {
  const [openPopup, setOpenPopup] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event) => {
      const popupElement = document.getElementById('popup-element')

      if (openPopup && popupElement && !popupElement.contains(event.target)) {
        setOpenPopup(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [openPopup])

  const handlePlanetClick = () => setOpenPopup(true)

  const formattedCreatedDate = formatDate(user.created)
  const formattedEditedDate = formatDate(user.edited)

  return (
    <div className="user-container">
      <p className="name">{user?.name}</p>
      <p>{user.height}</p>
      <p>{user.mass}</p>
      <p>{formattedCreatedDate}</p>
      <p>{formattedEditedDate}</p>
      <button
        className="btn btn-planet"
        disabled={!planetData?.name}
        aria-label="View planet details"
        onClick={handlePlanetClick}
      >
        {planetData?.name || 'Searching...'}
      </button>
      {openPopup && (
        <Popup planet={planetData} togglePopup={() => setOpenPopup(false)} />
      )}
    </div>
  )
}
