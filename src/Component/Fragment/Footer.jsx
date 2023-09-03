import React from "react";
import Text from "../Element/Text";
import IconFA from "../Element/IconFA";
import "../../assets/Css/Footer.css";

const Footer = (props) => {
  return (
    <>
      <div className="wrapper w-full bg-gray-950 p-12 flex items-center justify-center gap-2 mt-32">
        <IconFA className="fa-solid fa-copyright text-white" />
        <Text
          className="text-white text-center"
          Text=" 2023 ALl Right Reversed"
        />
      </div>
    </>
  );
};

export default Footer;