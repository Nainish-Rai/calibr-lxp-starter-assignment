import React from "react";

const PlusIcon = (props) => {
  const { fillColor, className } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fillColor || "currentColor"}
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={className || "h-5 w-5"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
};

export default PlusIcon;
