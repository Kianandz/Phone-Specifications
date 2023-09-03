import React from "react";
import { useNavigate } from "react-router-dom";
import searchImage from "../../assets/Img/searchImage.svg";
import Title from "../Element/Title";
import Text from "../Element/Text";
import Img from "../Element/Img";
import Button from "../Element/Button";
import "../../assets/Css/LandFirstPage.css";

const LandFirstPage = (props) => {
    const Navigate = useNavigate();

    const AllProductsLink = () => {
        Navigate("/explore");
    }
  return (
    <>
      <div className="container-landfirstpage relative w-full flex gap-8 mt-8 p-12">
        <div className="text-wrapper relative flex-1">
          <Title
            className="title-landfirstpage font-bold text-6xl mt-4"
            Title="Get the information you need"
          />
          <Text
            className="text-landfirstpage font-semibold text-[18px] text-left mt-6 mb-10"
            Text="We provide a wide range of information on detailed smartphone specifications. Search and find what you want to get now."
          />
          <Button
          className="btn-landfirstpage px-8 py-3 text-lg bg-gray-700 hover:bg-gray-900 text-white transition-all"
          onClick={AllProductsLink}
          buttonValue="See Now"
          />
        </div>
        <div className="img-container relative flex-1">
            <div className="img-wrapper h-full">
                <Img
                srcImage={searchImage}
                altImage="Image"
                className="h-full drop-shadow-xl"
                />
            </div>
        </div>
      </div>
    </>
  );
};

export default LandFirstPage;
