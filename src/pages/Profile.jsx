import React, { useState } from "react";
import dribble_logo from "../assets/images/dribble_image_logo.webp";
import camera_img from "../assets/images/camera_img.svg";
import designer_img from "../assets/images/designer_img.png";
import hire_img from "../assets/images/hire_img.png";
import inspiration_img from "../assets/images/inspiration_img.png";
import Card from "../components/Card";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Profile = () => {
  const [clicked, setClicked] = useState(false);
  const [showProfile, setShowProfile] = useState(true);
  const [imageSrc, setImageSrc] = useState(null);
  const handlePhoto = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    console.log(file)

    reader.onload = (e) => {
      setImageSrc(e.target.result);
    };
    // console.log(imageSrc)

    reader.readAsDataURL(file);
  }
  return (
    <div className="flex flex-col px-10">
      <div className="flex gap-8 items-center">
        <img src={dribble_logo} className="h-[100px] " alt="" />
        {!showProfile && <FontAwesomeIcon onClick={() => setShowProfile(true)} icon={faLessThan} className="bg-slate-200 text-[10px] p-4 rounded-md" />
        }
      </div>
      <div className="flex flex-col justify-center items-center">
        {showProfile && <div className="flex flex-col items-start">
          <div className="mb-10">
            <h1 className="text-[32px] font-semibold">
              Welcome! Let's create your profile
            </h1>
            <p>Let others get to know you better! You can do these later</p>
          </div>
          <h1 className="font-bold mb-10">Add an avatar</h1>
          <div className="flex flex-col sm:flex-row items-center mb-10 gap-10">
            {imageSrc && <div className="  h-[180px] w-[180px] flex justify-center items-center rounded-[100%] overflow-hidden">
              <img src={imageSrc} style={{}} className="object-cover max-h-full max-w-full" alt="" />
            </div>}
            {
              !imageSrc && <div className=" border-4 border-dashed object-cover  h-[180px] w-[180px] flex justify-center items-center rounded-[100%] ">
                <img src={camera_img} className="h-[36px]" alt="" />
              </div> 
            }
            <div className="flex sm:items-start items-center flex-col gap-5 ">
              <input type="file" id="fileInput" onChange={handlePhoto} accept="image/*" className="hidden" />
              <label
                htmlFor="fileInput"
                className=" border-2 font-semibold px-4 py-2 w-[150px] rounded cursor-pointer"
              >
                Choose image
              </label>

              <p className="text-slate-500"> &gt; or choose one of our defaults </p>
            </div>
          </div>
          <h1 className="font-bold mb-4">Add your location</h1>
          <input type="text" className="w-full border-b-2 py-[10px] mb-10" placeholder="Enter a location" />
          <div className="text-center">
            <button
              onClick={() => setShowProfile(false)}
              className="bg-[#EA4B8A] mb-2 disabled:bg-[#F8B8D0] w-[200px] h-[36px] text-white border rounded-lg"
            >
              Next
            </button>
            <p className="text-slate-500 text-sm text-center mb-[50px]">or Press RETURN</p>
          </div>
        </div>}
        {!showProfile && <div className="flex flex-col items-center m-10">
          <h1 className="text-[32px] font-semibold">
            What brings you to Dribble?
          </h1>
          <p className="mb-20 text-slate-500">
            Select the options that best describe you. Don't worry, you can
            explore other options later.
          </p>
          <div className="flex justify-evenly mb-10 gap-14 items-center">
            <Card
              image={designer_img}
              label="I am a designer looking to share my work"
              description="shfj ahsd kjfh a s dlkjf hk d sjhfkja d shlfkj adsfk jasd"
            />
            <Card
              image={hire_img}
              label="I am a looking to hire a designer"
              description="shfj ahsd kjfh a s dlkjf hk d sjhfkja d shlfkj adsfk jasd"
            />
            <Card
              image={inspiration_img}
              label="I am looking for design inspiration"
              description="shfj ahsd kjfh a s dlkjf hk d sjhfkja d shlfkj adsfk jasd"
            />
          </div>
          <h1 className="font-bold mb-7">Anything else? You can select multiple</h1>
          <button className="bg-[#EA4B8A] w-[200px] mb-3 h-[40px] rounded-xl text-white">Finish</button>
          <span className="text-gray-500">or Press RETURN</span>
        </div>}
      </div>
    </div>
  );
};

export default Profile;
