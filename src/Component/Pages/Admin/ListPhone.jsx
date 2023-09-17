import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../../../API_BASE_URL";
import Card from "../../Fragment/Card";
import Title from "../../Element/Title";
import Button from "../../Element/Button";
import Input from "../../Element/Input";
import "../../../assets/Css/Animation.css";
import "../../../assets/Css/Smartphone.css";

const ListPhone = () => {
  const initialItems = 12;
  const itemsPerPage = 6;
  const [smartphones, setSmartphones] = useState([]);
  const [visibleSmartphones, setVisibleSmartphones] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSmartphones, setFilteredSmartphones] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/allphone`)
      .then((response) => response.json())
      .then((data) => {
        setSmartphones(data);
        setVisibleSmartphones(data.slice(0, initialItems));
        setFilteredSmartphones(data);
      })
      .catch((error) => {
        console.error("Error fetching Smartphone: ", error);
      });
  }, []);

  const handleShowMore = () => {
    const startIndex = visibleSmartphones.length;
    const endIndex = startIndex + itemsPerPage;
    const newVisibleSmartphones = smartphones.slice(startIndex, endIndex);
    setVisibleSmartphones([...visibleSmartphones, ...newVisibleSmartphones]);
  };

  const filterSmartphones = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered = smartphones.filter((device) =>
      device.name.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredSmartphones(filtered);
  };

  useEffect(() => {
    filterSmartphones();
  }, [searchQuery]);

  useEffect(() => {
    document.title = `Admin Dashboard - List Smartphone`;
  });

  return (
    <>
      <div className="smartphone-page-container fade-in relative w-full p-8 text-center">
        <div className="w-full flex justify-between items-center mb-6">
          <Title
            className="title font-bold text-2xl text-left"
            Title="Smartphone List"
          />
          <Input
            type="text"
            className="px-4 py-2 text-sm w-[28%] rounded-lg border border-gray-400 bg-gray-100"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
          />
        </div>
        <div className="smartphone-wrapper grid grid-cols-6 auto-rows-max gap-10 px-4">
          {filteredSmartphones.map((device) => (
            <Card
              key={device.id}
              srcImage={`${API_BASE_URL}/ImageData/${device.phone_image}`}
              Title={device.name}
              id={device.id}
            />
          ))}
        </div>
        {visibleSmartphones.length < smartphones.length && (
          <Button
            onClick={handleShowMore}
            className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg my-12 transition-all"
            buttonValue="Show More"
          />
        )}
      </div>
    </>
  );
};

export default ListPhone;
