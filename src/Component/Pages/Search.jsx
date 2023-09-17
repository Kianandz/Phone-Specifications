import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { API_BASE_URL } from "../../API_BASE_URL";
import Navbar from "../Fragment/Navbar";
import Title from "../Element/Title";
import Card from "../Fragment/Card";
import "../../assets/Css/Animation.css";
import "../../assets/Css/Search.css";

const Search = (props) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("search");
    setSearchQuery(query);
    fetch(`${API_BASE_URL}/phones?search=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  }, [searchParams]);

  useEffect(() => {
    document.title = `Search ${searchQuery}`;
  });

  return (
    <>
      <Navbar moreClass="sticky" moreResponsiveClass="sticky" />
      <div className="search-page-container fade-in relative w-full p-8">
        <Title
          className="font-bold text-2xl mb-6"
          Title={`Search Result For : ${searchQuery}`}
        />
        <div className="card-wrapper grid grid-cols-6 auto-rows-max gap-10 px-4">
          {searchResults.map((result) => (
            <Card
              key={result.id}
              srcImage={`${API_BASE_URL}/ImageData/${result.phone_image}`}
              Title={result.name}
              id={result.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
