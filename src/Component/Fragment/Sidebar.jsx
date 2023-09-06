import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../Element/Title";
import Text from "../Element/Text";
import IconFA from "../Element/IconFA";
import IconGoogle from "../Element/IconGoogle";
import "../../assets/Css/Sidebar.css";

const Sidebar = (props) => {
  const Navigate = useNavigate();
  const [showNav, setShowNav] = useState();

  const handleSidebar = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <div className="menu-container flex items-center justify-between px-8 py-2">
        <IconGoogle
          className="cursor-pointer"
          iconValue="menu"
          onClick={handleSidebar}
        />
      </div>
      <div
        className={`sidebar-container fixed z-50 top-0 left-0 w-72 h-screen bg-gray-800 p-4 ${
          showNav ? "show-nav" : ""
        } duration-700`}
      >
        <Title
          className="font-bold text-4xl text-white text-center my-2 cursor-pointer hover:text-gray-400 transition-all"
          Title="GadgetPedia"
        />
        <div className="relative w-full mt-14">
          <div className="flex items-center justify-start gap-3 text-white cursor-pointer hover:text-gray-400 transition-all px-4 mb-6">
            <IconFA className="fa-solid fa-home text-2xl" />
            <Text className="font-semibold text-base" Text="Home" />
          </div>
          <div className="flex items-center justify-start gap-3 text-white cursor-pointer hover:text-gray-400 transition-all px-4 mb-6">
            <IconFA className="fa-solid fa-upload text-2xl" />
            <Text
              className="font-semibold text-base"
              Text="Insert Smartphone"
            />
          </div>
          <div className="flex items-center justify-start gap-3 text-white cursor-pointer hover:text-gray-400 transition-all px-4 mb-6">
            <IconFA className="fa-solid fa-mobile text-2xl" />
            <Text className="font-semibold text-base" Text="List Smartphone" />
          </div>
          <div className="flex items-center justify-start gap-3 text-white cursor-pointer hover:text-gray-400 transition-all px-4 mb-6">
            <IconFA className="fa-solid fa-list text-2xl" />
            <Text className="font-semibold text-base" Text="List Brands" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 flex items-center justify-start gap-3 text-white cursor-pointer hover:text-gray-400 transition-all px-8 mb-12">
          <IconFA className="fa-solid fa-sign-out text-2xl" />
          <Text className="font-semibold text-base" Text="Logout" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
