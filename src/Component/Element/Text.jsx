import React from "react";

const Text = (props) => {
  return <p className={props.className} onClick={props.onClick}>{props.Text}</p>;
};

export default Text;
