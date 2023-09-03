import React from "react";
import { Link, useHref } from "react-router-dom";
import Title from "../Element/Title";
import IconFA from "../Element/IconFA";
import Text from "../Element/Text";
import "../../assets/Css/LandSecPage.css";

const LandSecPage = (props) => {
  return (
    <>
      <div className="container-landsecpage relative w-full mt-12 px-20">
        <Title
          className="title-landsecpage text-center font-bold text-5xl"
          Title="Media Socials"
        />
        <Text
          className="text-landsecpage mt-4 mb-12 text-center text-xl font-semibold"
          Text="Support and Follow us on Media Socials"
        />
        <div className="flex w-full gap-4 items-center justify-evenly">
          <Link
            className="wrapper-icon-link text-center cursor-pointer hover:text-gray-400 transition-all"
            to="https://instagram.com/kianandz"
          >
            <IconFA className="fa-brands fa-instagram text-8xl" />
            <Text className="font-semibold text-xl mt-2" Text="Instagram" />
          </Link>
          <Link
            className="wrapper-icon-link text-center cursor-pointer hover:text-gray-400 transition-all"
            to="https://twitter.com"
          >
            <IconFA className="fa-brands fa-twitter text-8xl" />
            <Text className="font-semibold text-xl mt-2" Text="Twitter" />
          </Link>
          <Link
            className="wrapper-icon-link text-center cursor-pointer hover:text-gray-400 transition-all"
            to="https://www.threads.net/@kianandz"
          >
            <IconFA className="fa-brands fa-threads text-8xl" />
            <Text className="font-semibold text-xl mt-2" Text="Threads" />
          </Link>
          <Link
            className="wrapper-icon-link text-center cursor-pointer hover:text-gray-400 transition-all"
            to="https://facebook.com"
          >
            <IconFA className="fa-brands fa-facebook text-8xl" />
            <Text className="font-semibold text-xl mt-2" Text="Facebook" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default LandSecPage;
