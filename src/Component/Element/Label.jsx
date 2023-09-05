import React from "react";

const Label = (props) => {
  return (
    <>
      <label htmlFor={props.htmlFor} className={props.className}>
        {props.label}
      </label>
    </>
  );
};

export default Label;