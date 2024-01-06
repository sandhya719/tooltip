import React, { useState } from "react";

const Tooltip = ({ positions, children }) => {
    const { left,right,top,bottom } = positions;
    
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState("top");  

  const handleMouseEnter = (e) => {
    const buttonRect = e.target.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;

    const deltaX = mouseX - buttonCenterX;
    const deltaY = mouseY - buttonCenterY;

    let newPosition;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      newPosition = deltaX < 0 ? left : right; 
    } else {
      newPosition = deltaY < 0 ? top : bottom;
    }

    setPosition(newPosition);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="tooltipContainer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isHovered && (
        <div className={`tooltip tooltip-${position}`}>{position} tooltip</div>
      )}
    </div>
  );
};

export default Tooltip;
