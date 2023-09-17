import React, { useState, useEffect } from "react";
import Input from "../Element/Input";
import Button from "../Element/Button";
import Label from "../Element/Label";
import Alert from "./Alert";
import { API_BASE_URL } from "../../API_BASE_URL";
import { useNavigate } from "react-router-dom";
import "../../assets/Css/Animation.css";

const FormLogin = (props) => {
  const Navigate = useNavigate();
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleUnameChange = (e) => {
    setErrorMessage(false);
    setUname(e.target.value);
  };

  const handlePassChange = (e) => {
    setErrorMessage(false);
    setPass(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uname, pass }),
      });
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          localStorage.setItem("authToken", data.token);
          localStorage.setItem("index", data.userId);
          localStorage.setItem("username", data.userName)
          localStorage.setItem("name", data.nameUser)
          localStorage.setItem("role", data.role)
          setIsLoggedIn(true);
          Navigate("/admin/dashboard");
        } else {
          console.log("Login Gagal");
        }
      } else {
        setErrorMessage(true);
        console.log("Gagal melakukan Permintaan ke server");
      }
    } catch (error) {
      console.error("error logging in : ", error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="text-center">
        <div className="w-full relative">
          <Label
            htmlFor="name"
            className="block text-sm mb-1 text-left"
            label="Username"
          />
          <Input
            type="text"
            placeholder="Username"
            name="uname"
            id="uname"
            className="p-2 w-full bg-[#f0f0f0] border border-gray-400 rounded-lg text-left text-sm"
            value={uname}
            onChange={handleUnameChange}
          />
        </div>
        <div className="w-full relative mt-2">
          <Label
            htmlFor="passwd"
            className="block text-sm mb-1 text-left"
            label="Password"
          />
          <Input
            type="password"
            placeholder="Password"
            name="passwd"
            id="passwd"
            className="p-2 w-full bg-[#f0f0f0] border border-gray-400 rounded-lg text-left text-sm"
            value={pass}
            onChange={handlePassChange}
          />
        </div>
        {errorMessage && (
          <Alert
            bgColor="fade-in-error"
            colorMessage="text-red-400"
            alertMessage="Username or Password Invalid"
          />
        )}
        <Button
          className="px-4 py-2 bg-gray-700 hover:bg-gray-800 transition-all rounded text-sm text-white mt-4"
          buttonValue="Login"
        />
      </form>
    </>
  );
};

export default FormLogin;
