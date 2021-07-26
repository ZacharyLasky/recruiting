import React from "react";

function SvgChevronDown(props) {
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
      className="chevron_svg__feather chevron_svg__feather-chevron-down"
      {...props}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export const chevronDown = SvgChevronDown();
