import React, {useState, useEffect} from "react";
import Sidebar from "../../Fragment/Sidebar";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard Admin";
  })
  return(
    <>
    <div className="relative w-full h-screen">
      <Sidebar
      
      />
    </div>
    </>
  );
}

export default Dashboard;