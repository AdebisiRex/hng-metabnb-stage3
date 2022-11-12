import React from "react";

import Hero from "../components/Hero";
import Inspiration from "../components/Inspiration";
import MetabnbNFTs from "../components/MetabnbNFTs";

const Home = () => {
  return (
    <>
      <div className="text-gray-800 font-redRose box-border ">
        <Hero />
        <Inspiration />
        <MetabnbNFTs />
      </div>
    </>
  );
};

export default Home;
