import React from "react";

//images
import metalogo from "../assets/metalogo-white.png";
import metabnb from "../assets/metabnb-white.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
const Footer = () => {
  return (
    <div className=" bg-dark h-[300px] ">
      <div className=" mx-24 grid grid-cols-12 items-center h-full">
        <div className=" text-white col-span-4">
          <div className="mb-16">
            <img className="inline-block" src={metalogo} alt="" />
            <img className="ml-2 inline-block" src={metabnb} alt="" />
          </div>
          <div className="flex mb-12">
            <img className="mr-8" src={facebook} alt="" />
            <img className="mr-8" src={instagram} alt="" />
            <img className="mr-8" src={twitter} alt="" />
          </div>
          <div className="">&copy; 2022 Metabnb</div>
        </div>

        <div className="col-span-8">
          <div className="grid grid-cols-3">
            <div className="text-white ">
              <p className="font-bold text-lg mb-3">Community</p>
              <ul className="font-light">
                <li className="mb-2">NFT</li>
                <li className="mb-2">Tokens</li>
                <li className="mb-2">Landlords </li>
                <li className="mb-2">Discord </li>
              </ul>
            </div>
            <div className="text-white">
              <p className="font-bold text-xl mb-3">Places</p>
              <ul className="font-light">
                <li className="mb-2">Castle</li>
                <li className="mb-2">Farms</li>
                <li className="mb-2">Beach</li>
                <li className="mb-2">Learn more </li>
              </ul>
            </div>
            <div className="text-white">
              <p className="font-bold text-xl mb-3">About us</p>
              <ul className="font-light">
                <li className="mb-2">Road map </li>
                <li className="mb-2">Creators</li>
                <li className="mb-2">Career </li>
                <li className="mb-2">Contact us </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
