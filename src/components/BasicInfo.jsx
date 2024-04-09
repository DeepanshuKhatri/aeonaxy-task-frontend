import React, { useState } from "react";
import camera_img from "../assets/images/camera_img.svg";
import { useDispatch } from "react-redux";
import { updateUserDetails } from "../feature/user/userSlice";
import axios from "axios";

const BasicInfo = ({ setShowProfile, setLocation, image, location }) => {
  const dispatch = useDispatch();

  const handlePhoto = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "dribble-app");
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/deukl74jh/image/upload",
        formData
      );

      if (response.statusText !== "OK") {
        throw new Error("Failed to upload image");
      }

      const data = response.data;
      dispatch(updateUserDetails({ image: data.url }));
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  return (
    <div className="flex flex-col items-start">
      <div className="mb-10">
        <h1 className="text-[32px] font-semibold">
          Welcome! Let's create your profile
        </h1>
        <p className="text-gray-500">
          Let others get to know you better! You can do these later
        </p>
      </div>
      <h1 className="font-bold mb-10">Add an avatar</h1>
      <div className="flex flex-col sm:flex-row items-center mb-10 gap-10">
        {image && (
          <div className="  h-[180px] w-[180px] flex justify-center items-center rounded-[100%] overflow-hidden">
            <img
              src={image}
              className="object-cover max-h-full max-w-full"
              alt=""
            />
          </div>
        )}
        {!image && (
          <div className=" border-4 border-dashed object-cover h-[180px] w-[180px] flex justify-center items-center rounded-[100%] ">
            <img src={camera_img} className="h-[36px]" alt="" />
          </div>
        )}
        <div className="flex sm:items-start items-center flex-col gap-5 ">
          <input
            type="file"
            id="fileInput"
            onChange={handlePhoto}
            accept="image/*"
            className="hidden"
          />
          <label
            htmlFor="fileInput"
            className=" border-2 font-semibold px-4 py-2 w-[150px] rounded cursor-pointer"
          >
            Choose image
          </label>

          <p className="text-gray-500"> &gt; or choose one of our defaults </p>
        </div>
      </div>
      <h1 className="font-bold mb-4">Add your location</h1>
      <input
        type="text"
        value={location}
        className="w-full border-b-2 py-[10px] mb-10"
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter a location"
      />
      <div className="text-center">
        <button
          disabled={image == "" || location == ""}
          onClick={() => setShowProfile(false)}
          className="bg-[#EA4B8A] mb-2 disabled:bg-[#F8B8D0] w-[200px] h-[36px] text-white border rounded-lg"
        >
          Next
        </button>
        {image != "" && location != "" && (
          <p className="text-gray-500 text-sm text-center mb-[50px]">
            or Press RETURN
          </p>
        )}
      </div>
    </div>
  );
};

export default BasicInfo;
