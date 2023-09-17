import React from "react";
import Text from "../Element/Text";

const Alert = (props) => {
  return (
    <>
      <div className={`${props.bgColor} mt-4 ${props.position} ${props.padding}`}>
        <Text
          className={`${props.colorMessage} text-sm`}
          Text={props.alertMessage}
        />
      </div>
    </>
  );
};

export default Alert;