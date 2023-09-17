import React, { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import FormLogin from "../../Fragment/FormLogin";
import Title from "../../Element/Title";
import "../../../assets/Css/Animation.css";

const Login = () => {
  const Navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      Navigate("/admin/dashboard");
    }
  });

  useEffect(() => {
    document.title = "Login";
  });
  return (
    <>
      <div className="flex fade-in-error items-center justify-center w-full h-screen">
        <div className="relative w-80 p-6 bg-[#fafafa] drop-shadow-xl shadow-xl rounded-lg">
          <Title
            className="font-bold text-xl text-black text-center mb-4"
            Title="Login"
          />
          <FormLogin />
        </div>
      </div>
    </>
  );
};

export default Login;
