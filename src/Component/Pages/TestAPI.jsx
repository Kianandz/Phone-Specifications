import React, { useState, useEffect } from "react";
import gsmarena from "gsmarena-api";

const TestAPI = (props) => {
  const [phone, setPhone] = useState([]);

  const test = async () => {
    const brands = await gsmarena.catalog.getBrands();
    console.log(brands);
  }

  useEffect(() => {
    test()
  });
  return (
    <>
      <h1>test</h1>
    </>
  );
};

export default TestAPI;
