import React from "react";
import IconFA from "../Element/IconFA";
import Title from "../Element/Title";
import Text from "../Element/Text";

const CardList = (props) => {
    return(
        <>
        <div className="relative p-8 bg-[#ffffff] hover:bg-gray-300 shadow-xl drop-shadow-xl rounded-xl hover:scale-[1.035] transition-all cursor-pointer"
        onClick={props.href}
        >
            <IconFA
            className={`${props.icon} text-4xl`}
            />
            <Title
            className="font-bold text-xl mb-3 mt-1"
            Title={props.title}
            />
            <Text
            className="text-base"
            Text={props.text}
            />
        </div>
        </>
    );
}

export default CardList;