import React from "react";
import Title from "../Element/Title";
import Button from "../Element/Button";
import "../../assets/Css/Animation.css";

const AlertAction = (props) => {
  return (
    <>
      <div className="w-full fixed top-0 left-0 fade-in-error flex items-center justify-center bg-[#000000b3] z-50 h-screen">
        <div className="relative w-80 p-6 bg-[#fafafa] rounded-lg">
          <Title className="font-bold text-xl" Title={props.message} />
          <div className="text-right mt-4 text-white">
            <Button
              className={`px-6 py-2 text-sm ${props.bgColorLeftBtn} rounded-lg mr-4 ${props.displayLeftBtn} transition-all`}
              buttonValue={props.valueBtnLeft}
              onClick={props.onLeftBtn}
            />
            <Button
              className={`px-6 py-2 text-sm ${props.bgColorRightBtn} rounded-lg ${props.displayRightBtn} transition-all`}
              buttonValue={props.valueBtnRight}
              onClick={props.onRightBtn}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AlertAction;
