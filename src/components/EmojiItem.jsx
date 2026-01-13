import React, { useState } from 'react'
import './EmojiItem.css'

function EmojiItem({ emoji, index }) {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleClick = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setIsAnimating(false)
    }, 600)
  }

  const style = {
    animationDelay: `${index * 0.2}s`
  }

  return (
    <span
      className={`emoji-item ${isAnimating ? 'animate' : ''}`}
      onClick={handleClick}
      style={style}
    >
      {emoji}
    </span>
  )
}

export default EmojiItem
