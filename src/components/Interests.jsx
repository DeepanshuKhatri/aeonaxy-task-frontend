import React, { useState } from "react";
import Card from "./Card";
import designer_img from "../assets/images/designer_img.png";
import hire_img from "../assets/images/hire_img.png";
import inspiration_img from "../assets/images/inspiration_img.png";
import axios from "axios";
const Interests = ({ handleFinish, interests, setInterests }) => {
  return (
    <div className="flex flex-col items-center m-10">
      <h1 className="text-[32px] font-semibold">What brings you to Dribble?</h1>
      <p className="mb-20 text-gray-500">
        Select the options that best describe you. Don't worry, you can explore
        other options later.
      </p>
      <div className="flex flex-grow flex-wrap justify-evenly mb-10 gap-14 items-center">
        <Card
          setInterests={setInterests}
          image={designer_img}
          label="I am a designer looking to share my work"
          description="With over 7 million shots from a vast community of designers, Dribble is the leading source for Design inspiration"
        />
        <Card
          image={hire_img}
          setInterests={setInterests}
          label="I am a looking to hire a designer"
          description="With over 7 million shots from a vast community of designers, Dribble is the leading source for Design inspiration"
        />
        <Card
          setInterests={setInterests}
          image={inspiration_img}
          label="I am looking for design inspiration"
          description="With over 7 million shots from a vast community of designers, Dribble is the leading source for Design inspiration"
        />
      </div>
      {interests.length!==0 && <h1 className="font-bold mb-7">Anything else? You can select multiple</h1>}
      <button
        className="bg-[#EA4B8A] cursor-pointer disabled:cursor-not-allowed disabled:bg-[#F8B8D0] w-[200px] mb-3 h-[40px] rounded-xl text-white"
        onClick={handleFinish}
        disabled={(interests.length === 0)}
      >
        Finish
      </button>
      {interests.length !== 0 && <span className="text-gray-500">or Press RETURN</span>}
    </div>
  );
};

export default Interests;
