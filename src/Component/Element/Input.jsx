import React from "react";

const Input = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      id={props.id}
      className={props.className}
      value={props.value}
      onChange={props.onChange}
      onInput={props.onInput}
    />
  );
};

export default Input;