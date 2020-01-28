import React from "react";

function Icon({ size = 12, color = '#888D9D' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={ size }
      height={ size }
      fill="none"
      viewBox="0 0 12 12"
    >
      <path
        stroke={ color }
        strokeLinecap="round"
        strokeWidth="2"
        d="M1.5 1.5l9 9M1.5 10.5l9-9"
      ></path>
    </svg>
  );
}

export default Icon;
