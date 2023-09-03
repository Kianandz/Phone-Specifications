import React, { useState, useEffect } from "react";
import "../../assets/Css/Animation.css";

const Loading = (props) => {
  return (
    <div className="w-20 h-20 rounded-full animate-spin border-y-2 border-solid border-gray-900 border-t-transparent shadow-md"></div>
  );
};

export default Loading;
