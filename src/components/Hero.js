import React from "react";

//components
import HeroMain from "./HeroMain";
import Navbar from "./Navbar";

// Images
import mbToken from "../assets/mbtoken-white.png";
import metamask from "../assets/metamask-white.png";
import opensea from "../assets/opensea-white.png";

const Hero = () => {
  return (
    <div className="relative h-screen bg-gray-50 pt-12">
      <Navbar />
      <HeroMain />
      <div className="p-1 bottom-0 w-full absolute bg-primary flex justify-around items-center ">
        <div>
          <img className="w-[215px]" src={mbToken} alt="" />
        </div>
        <div>
          <img className="w-[214px]"  src={metamask} alt="" />
        </div>
        <div>

        <img className="w-[200px]" src={opensea} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
