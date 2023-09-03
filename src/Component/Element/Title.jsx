import React from "react";

const Title = (props) => {
  return (
    <h1 className={props.className} onClick={props.onClick}>
      {props.Title}
    </h1>
  );
};

export default Title;