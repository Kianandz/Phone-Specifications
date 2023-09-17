import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../../API_BASE_URL";
import Navbar from "../Fragment/Navbar";
import Card from "../Fragment/Card";
import Title from "../Element/Title";
import Button from "../Element/Button";
import "../../assets/Css/Animation.css";
import "../../assets/Css/PhoneBrands.css";

const PhoneBrands = () => {
  const initialItems = 12;
  const itemsPerPage = 6;
  const { brands } = useParams();
  const [dataBrands, setDataBrands] = useState([]);
  const [visibleBrandsDevice, setVisibleBrandsDevice] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/brands/${brands}`)
      .then((response) => response.json())
      .then((data) => {
        setDataBrands(data);
        setVisibleBrandsDevice(data.slice(0, initialItems));
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  }, [brands]);

  const handleShowMore = () => {
    const startIndex = visibleBrandsDevice.length;
    const endIndex = startIndex + itemsPerPage;
    const newVisibleBrandsDevice = dataBrands.slice(startIndex, endIndex);
    setVisibleBrandsDevice([...visibleBrandsDevice, ...newVisibleBrandsDevice]);
  };

  useEffect(() => {
    document.title = `Smartphone ${brands} list`;
  }, [brands]);

  return (
    <>
      <Navbar moreClass="sticky" moreResponsiveClass="sticky" />
      <div className="device-by-brands-page-container fade-in relative w-full p-8 text-center">
        <Title
          className="title text-left font-bold text-2xl mb-6 capitalize"
          Title={`Smartphone ${brands}`}
        />
        <div className="device-by-brands-wrapper grid grid-cols-6 auto-rows-max gap-10 px-4">
          {visibleBrandsDevice.map((brandDevice) => (
            <Card
              key={brandDevice.id}
              srcImage={`${API_BASE_URL}/ImageData/${brandDevice.phone_image}`}
              Title={brandDevice.name}
              id={brandDevice.id}
            />
          ))}
        </div>
        {visibleBrandsDevice.length < dataBrands.length && (
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

export default PhoneBrands;
