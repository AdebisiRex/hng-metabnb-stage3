import React from "react";

//components
import HeroMain from "./HeroMain";
import Navbar from "./Navbar";

// Images
import mbToken from "../assets/mbtoken-white.png";
import metamask from "../assets/metamask-white.png";
import opensea from "../assets/opensea-white.png";
import Modal from "./Modal";

const Hero = () => {
  return (
    <div className="relative text-redRose h-screen md:pt-4 p-1 pt-2">
      <div className="container">
      <Navbar />
      <HeroMain />
      <Modal/>
      </div>
      <div className="absolute p-1 left-0 right-0 bottom-0 w-full  bg-primary md:flex justify-center md:justify-around items-center ">
        <div>
          <img className="md:w-[215px] w-36 md:mb-0 mb-2 mx-auto" src={mbToken} alt="" />
        </div>
        <div>
          <img className="md:w-[214px] w-36 md:mb-0 mb-2 mx-auto"  src={metamask} alt="" />
        </div>
        <div>

        <img className="md:w-[200px] w-36 md:mb-0 mb-2 mx-auto" src={opensea} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
