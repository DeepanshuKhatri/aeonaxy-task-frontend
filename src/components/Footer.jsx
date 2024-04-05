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
    <div className="w-full bg-[#fafafa] h-[600px] px-[70px] py-[70px]">
      <div className="flex justify-evenly gap-10">
        <div className="flex  flex-col w-[290px] text-start items-start">
          <img src={dribble_image} className="h-32" alt="" />
          <div className="relative w-full">
            <p className="absolute text-gray-600 text-[15px] top-[-20px]">Dribble is the world's leading community for creatives to share, grow, adn get hired.</p>
          </div>
          <div className="mt-[65px] flex gap-5">
            <FontAwesomeIcon  icon={faBasketball} />
            <FontAwesomeIcon  icon={faTwitter} />
            <FontAwesomeIcon icon={faSquareFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faPinterest} />
          </div>
        </div>
        <FooterList title="For designers" list={for_designers} />
        <div>
          <FooterList title="Hire designers" list={hire_designers} />
          <FooterList title="Brands" list={brands} />
        </div>
        <FooterList title="Company" list={company} />
        <div>
          <FooterList title="Directories" list={directories} />
          <FooterList title="Design assets" list={design_assets} />
        </div>
        <FooterList title="Design Resources" list={design_resources} />
      </div>
      <hr />
      <div className="flex justify-between py-14">
        <p> &#169; 2023 Dribble. All rights reserved.</p>
        <div>
          <p>
            <span>20, 501, 853</span> shots dribbled{" "}
            <FontAwesomeIcon color="#EA4B8A" icon={faBasketball} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
