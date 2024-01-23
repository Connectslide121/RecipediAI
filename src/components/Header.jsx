import React, { useEffect, useState } from "react";

export default function Header(props) {
  const [headerPosition, setHeaderPosition] = useState("");
  // Get header wrapper element
  const headerWrapper = document.querySelector(".header-wrapper");

  useEffect(() => {
    const randomY = Math.floor(Math.random() * 100);
    setHeaderPosition(`0 ${randomY}%`);
  }, []);

  if (headerWrapper) {
    headerWrapper.style.backgroundPosition = headerPosition;
  }
  return (
    <div className="header-wrapper">
      <h1>{props.text}</h1>
    </div>
  );
}
