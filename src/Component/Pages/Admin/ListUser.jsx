import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../../../API_BASE_URL";
import CardText from "../../Fragment/CardText";
import "../../../assets/Css/Animation.css";

const ListUsers = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/users`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching data :", error);
      });
  }, []);

  useEffect(() => {
    document.title = `Admin Dashboard - List Users`;
  });
  return (
    <>
      <div className="list-user-container fade-in relative w-full">
        <div className="grid grid-cols-4 items-center gap-8 p-8 w-full">
          {users.map((user, index) => (
            <CardText
              key={index + 1}
              title={`Number ${index + 1}`}
              firstText={user.id}
              secondText={user.name}
              thirdText={user.uname}
              fourthText={user.role}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ListUsers;
