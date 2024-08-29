import React, { useState } from "react";

const SearchButton = () => {
  const [color, setColor] = useState("red");

  const handleMouseEnter = () => {
    setColor("green");
  };

  const handleMouseLeave = () => {
    setColor("red");
  };

  const handleClick = () => {
    setColor("blue");
    setTimeout(() => setColor("green"), 200); // Reset color after click
  };

  const buttonStyle = {
    backgroundColor: color,
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    transition: "background-color 0.4s ease",
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      Search Plan
    </button>
  );
};

export default SearchButton;
