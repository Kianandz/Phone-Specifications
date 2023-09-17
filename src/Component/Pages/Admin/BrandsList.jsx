import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../../API_BASE_URL";
import Title from "../../Element/Title";
import Text from "../../Element/Text";
import "../../../assets/Css/Animation.css";
import "../../../assets/Css/Brands.css";

const BrandsList = (props) => {
  const Navigate = useNavigate();
  const [showBrands, setShowBrands] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/brands`)
      .then((response) => response.json())
      .then((data) => {
        setShowBrands(data);
      })
      .catch((error) => {
        console.error("Error fetching Brands : ", error);
      });
  }, [showBrands]);

  const handleDevice = (brands) => {
    Navigate(`/brands/${brands}`);
  };

  useEffect(() => {
    document.title = `Admin Dashboard - List Brands`;
  });
  return (
    <>
      <div className="brands-page-container fade-in relative w-full p-8">
        <Title className="title font-bold text-2xl mb-6" Title="Brands List" />
        <div className="brands-wrapper grid grid-cols-6 auto-rows-max gap-10 px-4">
          {showBrands.map((brands, index) => (
            <div
              className="text-left hover:text-gray-400 cursor-pointer transition-all"
              onClick={() => handleDevice(brands.brands)}
              key={index}
            >
              <Title
                className="brands-title font-bold text-2xl"
                Title={brands.brands}
              />
              <Text
                className="device-count"
                Text={`${brands.phoneCount} Devices`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BrandsList;
