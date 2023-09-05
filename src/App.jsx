import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Loading from "./Component/Fragment/Loading";
import Home from "./Component/Pages/Home";
import Explore from "./Component/Pages/Explore";
import ErrorPage from "./Component/Pages/404";
import Login from "./Component/Pages/Admin/Login";
import Search from "./Component/Pages/Search";
import Brands from "./Component/Pages/Brands";
import Smartphone from "./Component/Pages/Smartphone";
import PhoneBrands from "./Component/Pages/PhoneBrands";
import Detail from "./Component/Pages/Detail";
import Dashboard from "./Component/Pages/Admin/Dashboard";
import TestAPI from "./Component/Pages/TestAPI";

const Router = createBrowserRouter([
  {
    path: "/admin",
    element: <Login/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/dashboard",
    element: <Dashboard/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Home container="home-container" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/phones",
    element: <Search/>,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
  {
    path: "/brands",
    element: <Brands/>,
  },
  {
    path: "/brands/:brands",
    element: <PhoneBrands/>,
  },
  {
    path: "/phone",
    element: <Smartphone/>,
  },
  {
    path: "/phone/:id",
    element: <Detail/>,
  },
  {
    path: "apitest",
    element: <TestAPI/>
  }
]);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadeOut, setIsFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, 2000);
    window.addEventListener("load", handleAssetsLoad);
    return () => {
      window.removeEventListener("load", handleAssetsLoad);
    };
  }, []);

  const handleAssetsLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (isLoading) {
      document.title = "Loading";
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <div
          className={`flex w-full h-screen items-center justify-center ${
            isFadeOut ? "fade-out" : ""
          }`}
        >
          <Loading />
        </div>
      ) : (
        <RouterProvider router={Router} />
      )}
    </>
  );
};

export default App;
