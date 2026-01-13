import React, { useState } from 'react'
import EmojiItem from './EmojiItem'
import './EmojiHeader.css'

const emojis = ['🚀', '💻', '🎯', '🌟', '🔥', '💡', '🎉', '⚡']

function EmojiHeader() {
  return (
    <header className="emoji-header">
      <div className="header-content">
        <h1 className="header-title">
          <span className="emoji">🎨</span>
          <span className="title-text">Emoji Header</span>
          <span className="emoji">✨</span>
        </h1>
        <div className="emoji-row">
          {emojis.map((emoji, index) => (
            <EmojiItem key={index} emoji={emoji} index={index} />
          ))}
        </div>
      </div>
    </header>
  )
}

export default EmojiHeader
