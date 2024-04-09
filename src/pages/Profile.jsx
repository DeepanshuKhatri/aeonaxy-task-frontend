import React, { useState } from "react";
import dribble_logo from "../assets/images/dribble_image_logo.webp";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import BasicInfo from "../components/BasicInfo";
import Interests from "../components/Interests";
import axios from 'axios'

const Profile = () => {
  const [showProfile, setShowProfile] = useState(true);
  const navigate = useNavigate()
  const [location, setLocation] = useState("");
  const [interests, setInterests] = useState([]);
  const user = useSelector((state) => state.user);
  const email = user.email;
  const image = user.image;
  // const [image, setimage] = useState(null);
  const handleFinish = async () => {
    const response = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/user`,
      {
        email,
        interests,
      }
    );
    navigate('/')
    console.log(response);
  };

  // const cloudinary = new Cloudinary({ cloud: { cloudName: 'deukl74jh' } });

  return (
    <div className="flex flex-col px-10">
      <div className="flex gap-8 items-center">
        <img src={dribble_logo} className="h-[100px] " alt="" />
        {!showProfile && (
          <FontAwesomeIcon
            onClick={() => setShowProfile(true)}
            icon={faLessThan}
            className="bg-gray-200 text-[10px] cursor-pointer p-4 rounded-md"
          />
        )}
      </div>
      <div className="flex flex-col justify-center items-center">
        {showProfile && (
          <BasicInfo location={location} setLocation={setLocation} image={image} setShowProfile={setShowProfile} />
        )}
        {!showProfile && <Interests interests={interests} setInterests={setInterests} handleFinish={handleFinish} />}
      </div>
    </div>
  );
};

export default Profile;
