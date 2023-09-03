import React from "react";
import { useNavigate } from "react-router-dom";
import BannerImage from "../../assets/Img/BannerMain.jpg";
import Img from "../Element/Img";
import Title from "../Element/Title";
import Text from "../Element/Text";
import Button from "../Element/Button";
import "../../assets/Css/Banner.css";

const Banner = (props) => {
    const Navigate = useNavigate();

    const exploreLink = () => {
        Navigate("/explore");
    }
    return(
        <>
        <div className="banner-image-container relative w-full h-screen overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full object-cover z-0">
                <Img
                srcImage={BannerImage}
                altImage="Banner Image"
                className="w-full h-full object-cover object-center brightness-50"
                />
            </div>
            <div className="flex items-center justify-center w-full h-full">
                <div className="text-banner-wrapper text-center z-10 mt-8">
                    <Title
                    className="title-banner text-white text-[56px]"
                    Title="Smartphone Katalog"
                    />
                    <Text
                    className="text-banner text-white text-[24px] mt-[-4px] mb-4"
                    Text="Find What Do You Want!"
                    />
                    <Button
                    className="button-banner px-8 py-2 text-white border-white border hover:text-black hover:bg-white transition-all"
                    buttonValue="Explore"
                    onClick={exploreLink}
                    />
                </div>
            </div>
        </div>
        </>
    );
}

export default Banner;