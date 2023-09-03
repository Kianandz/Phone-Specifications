import React from "react";

const Img = (props) => {
  return (
    <img
      src={props.srcImage}
      alt={props.altImage}
      className={props.className}
    />
  );
};

export default Img;