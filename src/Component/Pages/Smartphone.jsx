import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../../API_BASE_URL";
import Navbar from "../Fragment/Navbar";
import Card from "../Fragment/Card";
import Title from "../Element/Title";
import Button from "../Element/Button";
import "../../assets/Css/Animation.css";
import "../../assets/Css/Smartphone.css";

const Smartphone = () => {
  const initialItems = 12;
  const itemsPerPage = 6;
  const [smartphones, setSmartphones] = useState([]);
  const [visibleSmartphones, setVisibleSmartphones] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/allphone`)
      .then((response) => response.json())
      .then((data) => {
        setSmartphones(data);
        // Set visibleSmartphones to the initial items
        setVisibleSmartphones(data.slice(0, initialItems));
      })
      .catch((error) => {
        console.error("Error fetching Smartphone : ", error);
      });
  }, []);

  const handleShowMore = () => {
    // Calculate the next set of items to display
    const startIndex = visibleSmartphones.length;
    const endIndex = startIndex + itemsPerPage;
    const newVisibleSmartphones = smartphones.slice(startIndex, endIndex);
    setVisibleSmartphones([...visibleSmartphones, ...newVisibleSmartphones]);
  };

  useEffect(() => {
    document.title = "All Smartphone";
  });

  return (
    <>
      <Navbar moreClass="sticky" moreResponsiveClass="sticky" colorPhone="text-gray-400"/>
      <div className="smartphone-page-container fade-in relative w-full p-8 text-center">
        <Title
          className="title font-bold text-2xl mb-6 text-left"
          Title="Smartphone List"
        />
        <div className="smartphone-wrapper grid grid-cols-6 auto-rows-max gap-10 px-4">
          {visibleSmartphones.map((device) => (
            <Card
              key={device.id}
              srcImage={device.phone_image}
              Title={device.name}
              id={device.id}
            />
          ))}
        </div>
        {visibleSmartphones.length < smartphones.length && (
          <Button onClick={handleShowMore} className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg my-12 transition-all" buttonValue="Show More"/>
        )}
      </div>
    </>
  );
};

export default Smartphone;
