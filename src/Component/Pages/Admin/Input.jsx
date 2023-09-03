import React, { useState } from "react";
import { API_BASE_URL } from "../../../API_BASE_URL";
import axios from "axios";

const Input = () => {
  const [formData, setFormData] = useState({
    name: "",
    brands: "",
    phone_image: "", // Tetap menggunakan "phone_image" sesuai dengan formulir Anda
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_BASE_URL}/postPhone`, formData);

      if (response.status === 201) {
        alert("Data berhasil ditambahkan!");
        // Atur kembali formulir setelah berhasil menambahkan data
        setFormData({
          name: "",
          brands: "",
          phone_image: "", // Tetap menggunakan "phone_image" sesuai dengan formulir Anda
        });
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat menambahkan data: ", error);
      alert("Terjadi kesalahan saat menambahkan data.");
    }
  };

  return (
    <>
      <h1>Form Input Phone</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="brands"
          className="capitalize"
          placeholder="Brands"
          value={formData.brands}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone_image"
          placeholder="Phone Image" // Ganti placeholder ke "Phone Image"
          value={formData.phone_image}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Input;
