import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Fragment/Sidebar";
import HomeDashboard from "./Home";
import InsertPhone from "./InsertPhone";
import ListUsers from "./ListUser";
import ListPhone from "./ListPhone";
import BrandsList from "./BrandsList";
import ErrorPage from "../404";

const Dashboard = () => {
  const Navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [homePage, setHomePage] = useState(true);
  const [listUsersPage, setListUsersPage] = useState(false);
  const [insertPage, setInsertPage] = useState(false);
  const [listPhone, setListPhone] = useState(false);
  const [brandsList, setBrandsList] = useState(false);
  const token = localStorage.getItem("authToken");
  const id = localStorage.getItem("index");
  const uname = localStorage.getItem("username");
  const name = localStorage.getItem("name");
  const role = localStorage.getItem("role");

  const authLogin = () => {
    if(token && role === "admin"){
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      Navigate("/")
    }
  }

  useEffect(() => {
    authLogin();
  }, [token])

  const handleHomePage = () => {
    setHomePage(true);
    setListUsersPage(false);
    setInsertPage(false);
    setListPhone(false);
    setBrandsList(false);
  };

  const handleListUsersPage = () => {
    setListUsersPage(true);
    setInsertPage(false);
    setHomePage(false);
    setListPhone(false);
    setBrandsList(false);
  };

  const handleInsertPage = () => {
    setInsertPage(true);
    setListUsersPage(false);
    setHomePage(false);
    setListPhone(false);
    setBrandsList(false);
  };

  const handleListPhone = () => {
    setListPhone(true);
    setListUsersPage(false);
    setHomePage(false);
    setInsertPage(false);
    setBrandsList(false);
  };

  const handleBrandsList = () => {
    setBrandsList(true);
    setListPhone(false);
    setListUsersPage(false);
    setHomePage(false);
    setInsertPage(false);
  };
  return (
    <>
      {isLoggedIn ? (
        <div className="relative w-full">
          <Sidebar
            greetName={name}
            activeHome={`${homePage ? "text-gray-400" : "text-white"}`}
            activeListUsers={`${
              listUsersPage ? "text-gray-400" : "text-white"
            }`}
            activeInsert={`${insertPage ? "text-gray-400" : "text-white"}`}
            activeSmartphone={`${listPhone ? "text-gray-400" : "text-white"}`}
            activeBrands={`${brandsList ? "text-gray-400" : "text-white"}`}
            onClickHome={handleHomePage}
            onClickUserList={handleListUsersPage}
            onClickInsert={handleInsertPage}
            onClickListPhone={handleListPhone}
            onClickBrandsList={handleBrandsList}
          />
          {homePage && (
            <HomeDashboard
              usersLink={handleListUsersPage}
              addLink={handleInsertPage}
              phoneLink={handleListPhone}
              brandsLink={handleBrandsList}
            />
          )}
          {listUsersPage && <ListUsers />}
          {insertPage && <InsertPhone />}
          {listPhone && <ListPhone />}
          {brandsList && <BrandsList />}
        </div>
      ) : (
        <ErrorPage/>
      )}
    </>
  );
};

export default Dashboard;
