import { faBasketball } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  for_designers,
  design_assets,
  hire_designers,
  directories,
  design_resources,
  company,
  brands,
} from "../utils/footer_list";
import FooterList from "./FooterList";
import dribble_image from "../assets/images/dribble_image_logo.webp"
import { faInstagram, faPinterest, faSquareFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="w-full  px-[20px] pt-[20px] bg-[#fafafa]  lg:px-[70px] lg:pt-[70px]">
      <div className="flex flex-col md:flex-row items-start justify-start md:justify-evenly gap-5 lg:gap-10">
        <div className="flex w-full justify-evenly items-center flex-row md:flex-col md:w-[290px] text-start md:items-start">
          <img src={dribble_image} className="lg:h-32 h-24" alt="" />
          <div className="relative hidden sm:block w-[250px]">
            <p className="absolute text-gray-600 text-xs lg:text-sm top-[-20px]">Dribble is the world's leading community for creatives to share, grow, adn get hired.</p>
          </div>
          <div className="md:mt-[65px] mt-0 justify-center items-center flex gap-5">
            <FontAwesomeIcon icon={faBasketball} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faSquareFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faPinterest} />
          </div>
        </div>

        <div className="flex justify-start  flex-wrap sm:flex-nowrap lg:gap-10  gap-5">

          <div>
            <FooterList title="For designers" list={for_designers} />
          </div>
          <div>
            <FooterList title="Hire designers" list={hire_designers} />
            <FooterList title="Brands" list={brands} />
          </div>
          <div>
            <FooterList title="Company" list={company} />
          </div>
          <div>
            <FooterList title="Directories" list={directories} />
            <FooterList title="Design assets" list={design_assets} />
          </div>
          <div>
            <FooterList title="Design Resources" list={design_resources} />
          </div>
        </div>
      </div>

      <hr />
      <div className="flex justify-between py-10">
        <p className="text-sm  text-gray-600"> &#169; 2023 Dribble. All rights reserved.</p>
        <div>
          <p className="text-sm text-gray-600">
            <span className="text-md font-bold text-gray-900">20, 501, 853</span> shots dribbled{" "}
            <FontAwesomeIcon color="#EA4B8A" icon={faBasketball} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
