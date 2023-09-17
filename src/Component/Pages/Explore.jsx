import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../API_BASE_URL";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../Fragment/Navbar";
import Title from "../Element/Title";
import Card from "../Fragment/Card";
import Button from "../Element/Button";
import "../../assets/Css/Animation.css";
import "../../assets/Css/Explore.css";

const Explore = () => {
  const itemsPerLoad = 6;
  const [showData, setShowData] = useState({});
  const [visibleItemCount, setVisibleItemCount] = useState({});
  const [currentBrand, setCurrentBrand] = useState(null);
  const [brands, setBrands] = useState([]);

  const fetchBrands = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/brands`);
      const data = await response.json();

      if (Array.isArray(data)) {
        const brandNames = data.map((brand) => brand.brands);
        setBrands(brandNames);
      } else {
        console.error("Data dari API bukan sebuah array.");
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat mengambil data dari API:", error);
    }
  };

  const fetchData = async (brand) => {
    try {
      const response = await fetch(`${API_BASE_URL}/brands/${brand}`);
      const data = await response.json();
      return { [brand]: data };
    } catch (error) {
      console.error(`Error saat mengambil data untuk ${brand}:`, error);
      return null;
    }
  };

  useEffect(() => {
    const fetchDataAsync = async () => {
      const brandDataPromises = brands.map((brand) => fetchData(brand));
      const brandDataArray = await Promise.all(brandDataPromises);

      const data = brandDataArray.reduce((accumulator, brandData) => {
        if (brandData) {
          return { ...accumulator, ...brandData };
        }
        return accumulator;
      }, {});

      setShowData(data);

      const itemCount = {};
      for (const brand of Object.keys(data)) {
        itemCount[brand] = itemsPerLoad;
      }
      setVisibleItemCount(itemCount);
    };

    fetchBrands();
    fetchDataAsync();
  }, [brands]);

  const uniqueBrands = Object.keys(showData);

  const handleShowMore = (brand) => {
    if (brand) {
      setVisibleItemCount((prevVisibleItemCount) => ({
        ...prevVisibleItemCount,
        [brand]: prevVisibleItemCount[brand] + itemsPerLoad,
      }));
    }
  };

  const handleLoadMoreClick = (brand) => {
    setCurrentBrand(brand);
    handleShowMore(brand);
  };

  const sliderSettings = {
    infinite: false,
    slidesToShow: itemsPerLoad,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    document.title = "Explore Smartphone";
  }, []);

  return (
    <>
      <Navbar moreClass="sticky" moreResponsiveClass="sticky" />
      <div className="explore-container fade-in py-8 px-12">
        {uniqueBrands.map((brand, index) => (
          <div className="mb-10" key={`brand_${index}`}>
            <Title className="font-bold text-2xl mb-4" Title={brand} />
            <Slider {...sliderSettings}>
              {showData[brand]
                .slice(0, visibleItemCount[brand])
                .map((item, itemIndex) => (
                  <div
                    className="flex items-center justify-start"
                    key={`${item.id}_${itemIndex}`}
                  >
                    <Card
                      srcImage={`${API_BASE_URL}/ImageData/${item.phone_image}`}
                      Title={item.name}
                      id={item.id}
                    />
                  </div>
                ))}
              {visibleItemCount[brand] < showData[brand].length && (
                <Button
                  className="bg-gray-700 hover:bg-gray-800 transition-all text-white px-4 py-2 rounded-lg mt-4"
                  onClick={() => handleLoadMoreClick(brand)}
                  buttonValue="Show More"
                />
              )}
            </Slider>
          </div>
        ))}
      </div>
    </>
  );
};

export default Explore;
