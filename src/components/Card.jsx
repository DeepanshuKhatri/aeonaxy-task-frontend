import React, { useState } from "react";
import tick from "../assets/images/tick.svg";

const Card = (props) => {
  const [clicked, setClicked] = useState(false);
  const { image, description, label, setInterests } = props;

  const handleSelect = () => {
    const updatedClicked = !clicked; 
    setClicked(updatedClicked);

    setInterests((prevInterests) => {
      if (updatedClicked) {
        return [...prevInterests, label]; 
      } else {
        return prevInterests.filter((interest) => interest !== label);
      }
    });
  };

  return (
    <div
      style={{ borderColor: clicked ? "#EA4B8A" : "#cecece" }}
      onClick={handleSelect}
      className="border-2 h-[270px] flex px-3 flex-col cursor-pointer justify-between items-center text-center gap-3 rounded-xl w-[280px]"
    >
      <div className="relative w-[250px] h-[130px] ">
        <img
          src={image}
          className="  absolute  "
          style={{ top: clicked ? "-120px" : "-40px" }}
          alt=""
        />
      </div>
      <h1 className="font-bold">{label}</h1>
      {clicked && <p className="text-sm text-gray-600">{description}</p>}
      <div
        className="border-2 h-6 w-6  rounded-full mb-5 "
      >
        {clicked && (
          <img
            src={tick}
            className="bg-[#EA4B8A] object-cover rounded-full fill-gray-500"
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default Card;
