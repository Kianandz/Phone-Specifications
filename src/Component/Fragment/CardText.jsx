import React from "react";
import Text from "../Element/Text";
import Title from "../Element/Title";

const CardText = (props) => {
  return (
    <>
      <div className="relative p-8 bg-[#ffffff] hover:bg-gray-300 shadow-xl drop-shadow-xl rounded-xl hover:scale-[1.035] transition-all cursor-pointer">
        <Title className="font-bold text-xl" Title={props.title} />
        <div className="w-full mt-4">
          <div className="flex items-center text-sm">
            <Text Text="ID" className="w-20" />
            <Text className="px-4" Text=":" />
            <Text Text={props.firstText} />
          </div>
          <div className="flex items-center text-sm">
            <Text Text="Name" className="w-20" />
            <Text className="px-4" Text=":" />
            <Text Text={props.secondText} />
          </div>
          <div className="flex items-center text-sm">
            <Text Text="Username" className="w-20" />
            <Text className="px-4" Text=":" />
            <Text Text={props.thirdText} />
          </div>
          <div className="flex items-center text-sm">
            <Text Text="Users Role" className="w-20" />
            <Text className="px-4" Text=":" />
            <Text Text={props.fourthText} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardText;
