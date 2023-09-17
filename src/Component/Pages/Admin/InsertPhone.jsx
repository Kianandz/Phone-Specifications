import React, { useEffect } from "react";
import FormAdd from "../../Fragment/FormAdd";
import Title from "../../Element/Title";
import "../../../assets/Css/Animation.css";

const InsertPhone = (props) => {
  useEffect(() => {
    document.title = `Admin Dashboard - Insert Data`;
  });
  return (
    <>
      <div className="list-user-container fade-in relative p-8 w-full">
        <div className="w-full bg-[#ffffff] p-8 rounded-lg shadow-xl drop-shadow-xl">
          <Title className="font-bold text-3xl mb-4" Title="Insert Smartphone Data"/>
          <FormAdd />
        </div>
      </div>
    </>
  );
};

export default InsertPhone;
