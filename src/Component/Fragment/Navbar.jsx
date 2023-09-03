import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../Element/Title";
import Text from "../Element/Text";
import Input from "../Element/Input";
import IconGoogle from "../Element/IconGoogle";
import Button from "../Element/Button";
import "../../assets/Css/Navbar.css";

const Navbar = (props) => {
  const Navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    Navigate(`/phones?search=${searchQuery}`);
  };

  const HomeLink = () => {
    Navigate("/");
  };

  const BrandsLink = () => {
    Navigate("/brands");
  };

  const PhoneLink = () => {
    Navigate("/phone");
  };

  const handleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <>
      {/* Wrapper Main Navbar */}
      <div
        className={`main-navbar mx-auto top-0 left-0 w-full px-40 py-4 drop-shadow-xl flex items-center justify-between bg-[#ffffff] ${props.moreClass} z-50`}
      >
        {/* Navbar Brand */}
        <Title
          className="cursor-pointer font-bold text-4xl hover:text-gray-400 transition-all"
          onClick={HomeLink}
          Title="GadgetPedia"
        />
        {/* Wrapper Link and Search */}
        <div className="flex items-center justify-between gap-4">
          {/* Link Item */}
          <div className="flex items-center justify-center mr-4">
            <Text
              className={`cursor-pointer font-semibold hover:text-gray-400 transition-all ${props.colorHome}`}
              Text="Home"
              onClick={HomeLink}
            />
            <Text
              className={`cursor-pointer font-semibold hover:text-gray-400 transition-all mx-8 ${props.colorBrands}`}
              Text="Brands"
              onClick={BrandsLink}
            />
            <Text
              className={`cursor-pointer font-semibold hover:text-gray-400 transition-all ${props.colorPhone}`}
              Text="Smartphone"
              onClick={PhoneLink}
            />
          </div>
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <Input
              type="text"
              placeholder="Search"
              name="search"
              className="border border-gray-400 px-3 py-2 text-sm rounded-xl w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              className="flex items-center"
              buttonValue={
                <IconGoogle
                  className="hover:text-gray-400 transition-all"
                  iconValue="search"
                />
              }
            />
          </form>
        </div>
      </div>

      {/* Responsive Navbar */}
      <div
        className={`responsive-navbar gap-8 px-12 py-4 top-0 left-0 mx-auto w-full items-center justify-between drop-shadow-xl bg-[#ffffff] ${props.moreResponsiveClass} z-50`}
      >
        <form
          className="search-wrapper w-9/12 flex items-center justify-center border border-gray-400 rounded-xl overflow-hidden"
          onSubmit={handleSearch}
        >
          <Input
            type="text"
            placeholder="Search"
            name="search"
            className="px-3 py-2 flex-1 text-sm outline-none border-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button
            className="text-center p-2 flex items-center hover:text-gray-400 mx-4"
            type="submit"
            buttonValue={<IconGoogle iconValue="search" />}
          />
        </form>
        <IconGoogle
          className="icon-menu"
          iconValue="menu"
          onClick={handleNav}
        />
      </div>
      <div
        className={`${
          showNav ? "active-nav" : ""
        } container-responsive-menu fixed top-0 right-0 w-11/12 h-screen bg-gray-900 z-50 duration-700`}
      >
        <div className="menu-wrapper flex items-center justify-between text-white py-4 bg-gray-950 px-12">
          <Title
            className="cursor-pointer font-bold text-4xl hover:text-gray-400 transition-all"
            onClick={HomeLink}
            Title="GadgetPedia"
          />
          <IconGoogle iconValue="close" onClick={handleNav} />
        </div>
        <div className="link-wrapper relative text-left text-white mt-8 px-12">
          <>
            <Text
              className={`cursor-pointer hover:text-gray-400 transition-all ${props.colorHome}`}
              Text="Home"
              onClick={HomeLink}
            />
            <Text
              className={`cursor-pointer hover:text-gray-400 transition-all my-3 ${props.colorBrands}`}
              Text="Brands"
              onClick={BrandsLink}
            />
            <Text
              className={`cursor-pointer hover:text-gray-400 transition-all ${props.colorPhone}`}
              Text="Smartphone"
              onClick={PhoneLink}
            />
          </>
        </div>
      </div>
    </>
  );
};

export default Navbar;
