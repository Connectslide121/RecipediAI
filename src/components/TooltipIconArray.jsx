import React, { useState } from "react";

export default function TooltipIconArray(props) {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div className="tooltip-icon-wrapper">
      <span
        className="tooltip-icon"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {props.icon}
      </span>
      {showTooltip && (
        <div className="tooltip-array">
          <p>{props.array.join(" / ")}</p>
        </div>
      )}
    </div>
  );
}
