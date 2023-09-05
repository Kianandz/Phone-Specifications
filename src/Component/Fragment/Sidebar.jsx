import React from "react";
import { useNavigate } from "react-router-dom";
import Title from "../Element/Title";
import Text from "../Element/Text";
import IconFA from "../Element/IconFA";

const Sidebar = (props) => {
  const Navigate = useNavigate();
  return (
    <>
      <div className={`relative w-72 h-screen bg-gray-800 p-4`}>
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
