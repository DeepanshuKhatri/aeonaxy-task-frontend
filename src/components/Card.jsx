import React, { useState } from "react";
import tick from "../assets/images/tick.svg";

const Card = (props) => {
  const [clicked, setClicked] = useState(false);
  const { image, description, label } = props;

  return (
    <div
      style={{ borderColor: clicked ? "#EA4B8A" : "#cecece" }}
      className="border-2 h-[270px] flex flex-col justify-between items-center text-center gap-3 rounded-xl w-[250px]"
    >
      <div className="relative w-[250px] h-[130px] ">
        <img
          src={image}
          className="  absolute  "
          style={{ top: clicked ? "-120px" : "-40px" }}
          alt=""
        />
      </div>
      <h1>{label}</h1>
      {clicked && <h1>{description}</h1>}
      <div
        onClick={() => setClicked(!clicked)}
        className="border-2 h-6 w-6  rounded-full mb-10"
      >
        {clicked && (
          <img
            src={tick}
            className="bg-[#EA4B8A] object-cover rounded-full fill-slate-500"
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default Card;
