import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Fragment/Sidebar";
import CardList from "../../Fragment/CardList";
import IconGoogle from "../../Element/IconGoogle";
import Text from "../../Element/Text";

const Dashboard = () => {
  const Navigate = useNavigate();

  const listUsers = () => {
    Navigate("/admin/list-users");
  };
  const listSmartphone = () => {
    Navigate("/admin/list-smartphone");
  };
  const listBrands = () => {
    Navigate("/admin/list-brands");
  };

  useEffect(() => {
    document.title = "Dashboard Admin";
  });
  return (
    <>
      <div className="relative w-full h-screen">
        <Sidebar />
        <div className="relative grid grid-cols-3 items-center gap-8 p-8 w-full">
          <CardList
            icon="fa-solid fa-user"
            title="User"
            text="Total User : 400 Users"
            href={listUsers}
          />
          <CardList
            icon="fa-solid fa-mobile-alt"
            title="Smartphone"
            text="Total Smartphone : 400 Smartphone"
            href={listSmartphone}
          />
          <CardList
            icon="fa-solid fa-object-group"
            title="Brands"
            text="Total Brands : 200 Brands"
            href={listBrands}
          />
        </div>
        <div className="flex items-center justify-center text-center w-full text-white">
          <div className="px-6 py-3 bg-gray-700 hover:bg-gray-800 rounded-lg flex gap-2 items-center cursor-pointer transition-all text-sm">
            <IconGoogle iconValue="add" />
            <Text Text="Add New Smartphone" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
