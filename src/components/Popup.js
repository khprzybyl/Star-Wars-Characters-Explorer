import React from 'react'
import { ReactComponent as CloseIcon } from '../assets/svg/close.svg'
import './Popup.css'

export const Popup = ({ planet, togglePopup }) => {
  return (
    <div className="popup">
      <div className="popup-inner" id="popup-element">
        <section className="popup-header">
          <h2>{planet?.name || 'Planet Details'}</h2>
          <button
            className="btn-close"
            aria-label="Close popup"
            onClick={togglePopup}
          >
            <CloseIcon />
          </button>
        </section>

        <section className="popup-content">
          <div className="popup-content-row">
            <p>Diameter:</p> <p>{planet?.diameter}</p>
          </div>
          <div className="popup-content-row">
            <p>Climate:</p> <p>{planet?.climate}</p>
          </div>
          <div className="popup-content-row">
            <p>Population:</p> <p>{planet?.population}</p>
          </div>
        </section>
      </div>
    </div>
  )
}
