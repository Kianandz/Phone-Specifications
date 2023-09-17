import React from "react";
import { useNavigate } from "react-router-dom";
import Img from "../Element/Img";
import Title from "../Element/Title";
import "../../assets/Css/Card.css";

const Card = (props) => {
  const Navigate = useNavigate();

  const handleCardLink = () => {
    Navigate(`/phone/${props.id}`);
  };
  return (
    <>
      <div
        className="card relative w-40 w-auto bg-[#fafafa] p-4 overflow-hidden rounded-xl cursor-pointer shadow-xl"
        onClick={handleCardLink}
      >
        <Img
          srcImage={props.srcImage}
          altImage={props.altImage}
          className="w-full"
        />
        <Title className="mt-2 font-semibold text-center" Title={props.Title} />
      </div>
    </>
  );
};

export default Card;
