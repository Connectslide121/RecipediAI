import React, { useState } from "react";

export default function TooltipIcon(props) {
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
        <div className="tooltip">
          <p>{props.text}</p>
        </div>
      )}
    </div>
  );
}
