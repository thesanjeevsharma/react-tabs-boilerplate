import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="28"
      height="28"
      fill="none"
      viewBox="0 0 28 28"
    >
      <path fill="url(#pattern0)" d="M0 0H28V28H0z"></path>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.00333)" xlinkHref="#image0"></use>
        </pattern>
        <image
          id="image0"
          width="300"
          height="300"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  );
}

export default Icon;