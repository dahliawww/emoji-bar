import React, { useState } from 'react'
import './OfficialBanner.css'

const emojis = ['🎨', '✨', '🚀', '💻', '🎯', '🌟', '🔥', '💡', '🎉', '⚡', '🍎', '🥗', '🥑', '🥕', '🍓', '🥦', '🍊', '🍇', '🥝', '🍌', '🌽', '🥒', '🍅', '🥬', '🌶️', '🧄', '🧅', '🥔', '🌰', '🥜']

function OfficialBanner() {
  const [isHovered, setIsHovered] = useState(false)
  const [currentEmoji, setCurrentEmoji] = useState(null)

  const getRandomEmoji = () => {
    return emojis[Math.floor(Math.random() * emojis.length)]
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    setCurrentEmoji(getRandomEmoji())
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTimeout(() => {
      setCurrentEmoji(null)
    }, 500) // Wait for fade out animation
  }

  return (
    <header 
      className="official-banner"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="banner-content">
        <span className="flag-icon">🇺🇸</span>
        <span className="banner-text">AN OFFICIAL WEBSITE OF THE UNITED STATES GOVERNMENT</span>
      </div>
      <div className="banner-line"></div>
      
      {isHovered && currentEmoji && (
        <div className="emoji-overlay">
          <span className="hover-emoji">
            {currentEmoji}
          </span>
        </div>
      )}
    </header>
  )
}

export default OfficialBanner
