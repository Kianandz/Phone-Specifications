import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ErrorImage from "../../assets/Img/404.svg";
import Img from "../Element/Img";
import Title from "../Element/Title";
import Text from "../Element/Text";
import IconGoogle from "../Element/IconGoogle";
import "../../assets/Css/Animation.css";
import "../../assets/Css/404.css";

const ErrorPage = (props) => {
  const Navigate = useNavigate();

  const ReturnLink = () => {
    Navigate(-1);
  };

  useEffect(() => {
    document.title = "Page Not Found";
  });
  return (
    <>
      <div className="container-error-page relative fade-in-error w-full h-full overflow-hidden">
        <div className="relative image-wrapper w-[30%] my-12 mx-auto mt-20 mb-24">
          <Img
            srcImage={ErrorImage}
            altImage="Error 404 Not Found"
            className="w-full"
          />
        </div>
        <Title
          className="text-center font-semibold text-[40px] text-violet-950"
          Title="Page Not Found"
        />
        <div className="flex items-center justify-center mt-8">
          <div
            className="relative flex cursor-pointer hover:text-gray-400 transition-all"
            onClick={ReturnLink}
          >
            <IconGoogle className="text-xl mr-2" iconValue="arrow_back" />
            <Text className="text-lg" Text="Back" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
