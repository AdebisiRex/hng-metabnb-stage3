import React from "react";

//images
import img1 from "../assets/image 9.png";
import img2 from "../assets/image 7.png";
import img3 from "../assets/image 8.png";


const MetabnbNFTs = () => {
  return (
    
      <div className="h-screen bg-primary flex items-center">
        <div className="flex items-center mx-24  h-full">
          <div className=" text-white text-center md:text-left md:w-1/3">
            <h1 className="text-4xl font-bold mb-8">Metabnb NFTs</h1>
            <p className="text-md leading-8 mb-8">
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              customer access to loads of our exclusive services{" "}
            </p>
            <button className="text-primary bg-white px-8 py-2 rounded-lg text-sm">
              {" "}
              Learn more
            </button>
          </div>
          <div className="hidden md:block h-full relative w-2/3 z-0">
            <img
              className="absolute right-24 top-32 w-[378px]"
              src={img1}
              alt=""
            />
            <img
              className="absolute bottom-24 left-32 w-[378px]"
              src={img2}
              alt=""
            />
            <img
              className="absolute bottom-24 right-16 w-[378px]"
              src={img3}
              alt=""
            />
          </div>
        </div>
      </div>
      
    
  );
};

export default MetabnbNFTs;
