import React from "react";

const IconGoogle = (props) => {
  return (
    <span
      className={`material-symbols-outlined ${props.className}`}
      onClick={props.onClick}
      style={props.style}
    >
      {props.iconValue}
    </span>
  );
};

export default IconGoogle;
