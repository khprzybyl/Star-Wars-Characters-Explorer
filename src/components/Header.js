import React, { useState, useEffect } from 'react'
import './Header.css'
import { ReactComponent as ArrowDown } from '../assets/svg/arrow_down.svg'

export const Header = ({ scrollToUserList }) => {
  const fullText = 'Luke, I am your father'
  const [displayText, setDisplayText] = useState('')
  const [showDescription, setShowDescription] = useState(false)

  useEffect(() => {
    if (displayText.length < fullText.length) {
      setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1))
      }, 100)
    } else {
      setShowDescription(true)
    }
  }, [displayText])

  return (
    <div className="header">
      <h1>{displayText}</h1>

      {showDescription && (
        <div className="scroll-container">
          <button
            className="btn-scroll"
            aria-label="Scroll to user list"
            onClick={scrollToUserList}
          >
            <ArrowDown />
          </button>
          <p>
            Who said that to whom? Find the characters.
          </p>
        </div>
      )}
    </div>
  )
}
