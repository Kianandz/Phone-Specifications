import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../../../API_BASE_URL";
import CardList from "../../Fragment/CardList";
import IconGoogle from "../../Element/IconGoogle";
import Text from "../../Element/Text";
import "../../../assets/Css/Animation.css";

const HomeDashboard = (props) => {
  const [smartphone, setSmartphone] = useState([]);
  const [brands, setBrands] = useState([]);
  const [users, setUsers] = useState([]);

  const fetchData = async (url, setter) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setter(data);
    } catch (error) {
      console.error("Error Fetching Data: ", error);
    }
  };

  useEffect(() => {
    fetchData(`${API_BASE_URL}/users`, setUsers);
  }, []);

  useEffect(() => {
    fetchData(`${API_BASE_URL}/allphone`, setSmartphone);
  }, []);

  useEffect(() => {
    fetchData(`${API_BASE_URL}/brands`, setBrands);
  }, []);

  useEffect(() => {
    document.title = `Admin Dashboard`;
  });

  return (
    <>
      <div className="home-container fade-in relative w-full">
        <div className="grid grid-cols-3 items-center gap-8 p-8 w-full">
          <CardList
            icon="fa-solid fa-user"
            title="User"
            text={`Total User : ${users.length} Users`}
            href={props.usersLink}
          />
          <CardList
            icon="fa-solid fa-mobile-alt"
            title="Smartphone"
            text={`Total Smartphone : ${smartphone.length} Smartphone`}
            href={props.phoneLink}
          />
          <CardList
            icon="fa-solid fa-object-group"
            title="Brands"
            text={`Total Brands : ${brands.length} Brands`}
            href={props.brandsLink}
          />
        </div>
        <div className="flex items-center justify-center text-center w-full text-white">
          <div className="px-6 py-3 bg-gray-700 hover:bg-gray-800 rounded-lg flex gap-2 items-center cursor-pointer transition-all text-sm"
          onClick={props.addLink}
          >
            <IconGoogle iconValue="add" />
            <Text Text="Add New Smartphone" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDashboard;
