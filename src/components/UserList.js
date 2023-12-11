import React from 'react'
import { SortableColumnHeader } from './SortableColumnHeader.js'
import './UserList.css'

const COLUMN_NAMES = [
  'Name',
  'Height',
  'Mass',
  'Created',
  'Edited',
  'Planet Name',
]

export const UserList = ({ children, isPlanetDataAvailable }) => {
  return (
    <div className="table-scroll-container">
      <div className="table-container ">
        <div className="header-container">
          {COLUMN_NAMES.map((columnName) => (
            <SortableColumnHeader
              key={columnName}
              columnName={columnName}
              children={children}
            />
          ))}
        </div>
        {children}
      </div>
    </div>
  )
}
