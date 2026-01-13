import React, { useState, useRef } from "react";
import "./App.css";

const badgeStyles = [
  {
    emoji: "👿",
    bgColor: "#e9abf6",
    position: "left",
    value: "40px",
  },
  {
    emoji: "😭",
    bgColor: "#bac8ff",
    position: "left",
    value: "60px",
  },
  {
    emoji: "🤗",
    bgColor: "#ffa8a8",
    position: "right",
    value: "30px",
  },
  {
    emoji: "🥰",
    bgColor: "#ffdeeb",
    position: "right",
    value: "50px",
  },
];

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [currentStyle, setCurrentStyle] = useState(null);
  const timeoutRef = useRef(null);
  const previousStyleRef = useRef(null);

  const handleMouseEnter = () => {
    // Clear any pending timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    setIsExiting(false);

    // Filter out the previous style to avoid duplicates
    const availableStyles = previousStyleRef.current
      ? badgeStyles.filter(
          (style) =>
            style.emoji !== previousStyleRef.current.emoji ||
            style.position !== previousStyleRef.current.position ||
            style.value !== previousStyleRef.current.value
        )
      : badgeStyles;

    // If all styles are filtered out (shouldn't happen with 4 styles), use all
    const stylesToChooseFrom =
      availableStyles.length > 0 ? availableStyles : badgeStyles;

    const randomStyle =
      stylesToChooseFrom[Math.floor(Math.random() * stylesToChooseFrom.length)];

    previousStyleRef.current = randomStyle;
    setCurrentStyle(randomStyle);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsExiting(true);

    // Clear timeout if exists
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // Wait for slide-down animation to complete before clearing style
    timeoutRef.current = setTimeout(() => {
      setCurrentStyle(null);
      setIsExiting(false);
    }, 500);
  };

  return (
    <div className="app">
      <main className="main-content">
        <div className="hero-section">
          <div
            className="bar"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              backgroundColor:
                isHovered && currentStyle
                  ? currentStyle.bgColor
                  : "transparent",
            }}
          >
            {currentStyle && (
              <span
                className={`bar-emoji ${isExiting ? "slide-down" : ""}`}
                key={currentStyle.emoji + currentStyle.position}
                style={{
                  [currentStyle.position]: currentStyle.value,
                }}
              >
                {currentStyle.emoji}
              </span>
            )}
            <span className="bar-text">
              an emoji bar inspired by realfood.gov
            </span>
          </div>
          <h1 className="hero-title">
            Delight Anger
            <br />
            Sorrow Happiness
          </h1>
          <div className="description">
            <p>This project inspired by realfood.gov</p>
            <p>create by my illustrator and Cursor</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
