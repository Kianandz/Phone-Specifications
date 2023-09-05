import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../../API_BASE_URL";

const TestAPI = (props) => {
    const [phone, setPhone] = useState([]);

    useEffect(() => {
        fetch(`${API_BASE_URL}/allphone`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setPhone(data);
        })
        .catch((error) => {
            console.error("Error Fetching Data :", error)
        })
    })
    return(
        <>
        {phone.length > 0 ?phone.map((item, index)=> 
        <div key={index}>
            <h1>{item.name}</h1>
            <h1>{item.brands}</h1>
        </div>
        ):""}
        </>
    );
}

export default TestAPI;