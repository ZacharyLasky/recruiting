import React from "react";

function SvgChevronUp(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={window.innerWidth >= 800 ? "5em" : "3em"}
      height={window.innerWidth >= 800 ? "5em" : "3em"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="chevron-up_svg__feather chevron-up_svg__feather-chevron-up"
      {...props}
    >
      <path d="M18 15l-6-6-6 6" />
    </svg>
  );
}

export const chevronUp = SvgChevronUp();
