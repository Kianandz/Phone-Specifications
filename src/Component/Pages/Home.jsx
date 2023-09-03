import React, { useState, useEffect } from "react";
import Navbar from "../Fragment/Navbar";
import Banner from "../Fragment/Banner";
import LandFirstPage from "../Fragment/LandFirstPage";
import LandSecPage from "../Fragment/LandSecPage";
import Footer from "../Fragment/Footer";
import "../../assets/Css/Animation.css";

const Home = (props) => {
  useEffect(() => {
    document.title = "Home";
  });
  return (
    <>
      <div className={`${props.container}`}>
        <Navbar
          moreClass="sticky"
          colorHome="text-gray-400"
          moreResponsiveClass="absolute"
        />
        <div className="fade-in">
          <Banner />
          <LandFirstPage />
          <LandSecPage />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
