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

  const handleLogout = () => {
    localStorage.clear();
    Navigate("/admin");
  };

  return (
    <>
      <div className="menu-container flex items-center justify-between px-8 py-6 shadow-xl drop-shadow-xl">
        <IconGoogle
          className="cursor-pointer"
          iconValue="menu"
          onClick={handleSidebar}
        />
        <Title
          className="font-semibold text-xl capitalize"
          Title={`Halo ${props.greetName}`}
        />
      </div>
      <div
        className={`sidebar-container ${
          showNav ? "show-nav" : "hide-nav"
        } fixed z-20 top-0 left-0 duration-700 z-50`}
      >
        <div className="w-72 h-screen bg-gray-800 p-4 float-left">
          <Title
            className="font-bold text-4xl text-white text-center my-2 cursor-pointer hover:text-gray-400 transition-all"
            Title="GadgetPedia"
          />
          <div className="relative w-full mt-14">
            <div
              className={`flex items-center justify-start gap-3 cursor-pointer hover:text-gray-400 transition-all px-4 mb-6 ${props.activeHome}`}
              onClick={props.onClickHome}
            >
              <IconFA className="fa-solid fa-home text-2xl" />
              <Text className="font-semibold text-base" Text="Home" />
            </div>
            <div
              className={`flex items-center justify-start gap-3 cursor-pointer hover:text-gray-400 transition-all px-4 mb-6 ${props.activeListUsers}`}
              onClick={props.onClickUserList}
            >
              <IconFA className="fa-solid fa-user text-2xl mr-[6px]" />
              <Text className="font-semibold text-base" Text="List User" />
            </div>
            <div
              className={`flex items-center justify-start gap-3 cursor-pointer hover:text-gray-400 transition-all px-4 mb-6 ${props.activeInsert}`}
              onClick={props.onClickInsert}
            >
              <IconFA className="fa-solid fa-upload text-2xl" />
              <Text
                className="font-semibold text-base"
                Text="Insert Smartphone"
              />
            </div>
            <div
              className={`flex items-center justify-start gap-3 cursor-pointer hover:text-gray-400 transition-all px-4 mb-6 ${props.activeSmartphone}`}
              onClick={props.onClickListPhone}
            >
              <IconFA className="fa-solid fa-mobile-alt text-2xl mr-[6px]" />
              <Text
                className="font-semibold text-base"
                Text="List Smartphone"
              />
            </div>
            <div
              className={`flex items-center justify-start gap-3 cursor-pointer hover:text-gray-400 transition-all px-4 mb-6 ${props.activeBrands}`}
              onClick={props.onClickBrandsList}
            >
              <IconFA className="fa-solid fa-list text-2xl" />
              <Text className="font-semibold text-base" Text="List Brands" />
            </div>
          </div>
          <div
            className="absolute bottom-0 left-0 flex items-center justify-start gap-3 text-white cursor-pointer hover:text-gray-400 transition-all px-8 mb-12"
            onClick={handleLogout}
          >
            <IconFA className="fa-solid fa-sign-out text-2xl" />
            <Text className="font-semibold text-base" Text="Logout" />
          </div>
        </div>
        <IconGoogle
          className="text-black cursor-pointer ml-6 mt-6 text-2xl text-black"
          iconValue="close"
          onClick={handleSidebar}
        />
      </div>
    </>
  );
};

export default Sidebar;
